import { Position } from '../types/megaverse';
import * as megaverseApi from '../app/api/megaverseApi';
import { ValidationError } from 'next/dist/compiled/amphtml-validator';

interface Entity {
  type: 'POLYANET' | 'SOLOON' | 'COMETH';
  row: number;
  col: number;
  color?: string;
  direction?: string;
}

export interface MegaverseState {
  isLoading: boolean;
  error: string | null;
  progress: {
    total: number;
    completed: number;
  };
}

export interface MegaverseService {
  executePhase1: () => Promise<boolean>;
  executePhase2: () => Promise<boolean>;
  validateSolution: () => Promise<boolean>;
  resetError: () => void;
  getState: () => MegaverseState;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function createMegaverseService(onStateUpdate?: (state: MegaverseState) => void): MegaverseService {
  let state: MegaverseState = {
    isLoading: false,
    error: null,
    progress: { total: 0, completed: 0 },
  };

  const updateState = (updates: Partial<MegaverseState>) => {
    state = { ...state, ...updates };
    onStateUpdate?.(state);
  };

  const executePhase1 = async (): Promise<boolean> => {
    updateState({ isLoading: true, error: null });

    try {
      const goalResponse = await megaverseApi.getGoalMap();

      const polyanetPositions: Position[] = [];

      for (let row = 0; row < goalResponse.length; row++) {
        for (let col = 0; col < goalResponse[row].length; col++) {
          if (goalResponse[row][col] === 'POLYANET') {
            console.log('Polyanet found at position:', { row, col });
            polyanetPositions.push({ row, column: col });
          }
        }
      }


      for (let i = 0; i < polyanetPositions.length; i++) {
        const position = polyanetPositions[i];
        console.log('Creating polyanet at position:', position);

        await megaverseApi.createPolyanet(position);

        updateState({
          progress: { total: polyanetPositions.length, completed: i + 1 }
        });

        await sleep(1000);
      }

      updateState({
        isLoading: false,
        progress: { total: 0, completed: 0 }
      });

      console.log('Polyanet positions:', polyanetPositions);

      if (polyanetPositions.length > 0) {
        return true;
      }

      return false;
    } catch (error) {
      updateState({
        error: `Phase 1 execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        isLoading: false,
        progress: { total: 0, completed: 0 }
      });
      return false;
    }
  };

  const validateSolution = async (): Promise<boolean> => {
    updateState({ isLoading: true, error: null });

    try {
      const isValid = await megaverseApi.validateSolution();
      updateState({ isLoading: false });
      return isValid;
    } catch (error) {
      updateState({
        error: `Validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        isLoading: false
      });
      return false;
    }
  };

  const resetError = (): void => {
    updateState({ error: null });
  };

  const getState = (): MegaverseState => {
    return { ...state };
  };

  const executePhase2 = async (): Promise<boolean> => {
    updateState({ isLoading: true, error: null });

    try {
      // Get goal coordinates from API
      const goalResponse = await megaverseApi.getGoalMap();

      const entities = parseEntities(goalResponse);
      console.log(`Found ${entities.length} entities to create`);

      if (entities.length === 0) {
        updateState({ isLoading: false, error: 'No entities found in goal' });
        return false;
      }

      const results = await processEntityQueue(entities);

      updateState({
        isLoading: false,
        progress: { total: 0, completed: 0 }
      });

      console.log('Execution results:', results);

      if (results.failed > 0) {
        updateState({
          error: `${results.failed} entities failed to create. ${results.success} succeeded.`
        });
        return false;
      }

      return true;
    } catch (error) {
      updateState({
        error: `Phase 2 execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        isLoading: false,
        progress: { total: 0, completed: 0 }
      });
      return false;
    }
  };

  const parseEntities = (grid: string[][]): Entity[] => {
    const entities: Entity[] = [];

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const cell = grid[row][col];

        if (cell === 'SPACE') continue;

        if (cell === 'POLYANET') {
          entities.push({ type: 'POLYANET', row, col });
        } else if (cell.endsWith('_SOLOON')) {
          const color = cell.replace('_SOLOON', '');
          entities.push({ type: 'SOLOON', row, col, color });
        } else if (cell.endsWith('_COMETH')) {
          const direction = cell.replace('_COMETH', '');
          entities.push({ type: 'COMETH', row, col, direction });
        }
      }
    }

    return entities;
  };

  const processEntityQueue = async (entities: Entity[]): Promise<{ success: number; failed: number; total: number }> => {
    const results = { success: 0, failed: 0, total: entities.length };

    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];

      try {
        await createEntityWithRetry(entity);
        results.success++;
        console.log(` Created ${entity.type} at (${entity.row}, ${entity.col})`);
      } catch (error) {
        console.error(`Failed ${entity.type} at (${entity.row}, ${entity.col}):`, error);
        results.failed++;
      }

      updateState({
        progress: {
          total: results.total,
          completed: results.success + results.failed
        }
      });

      await sleep(1500);
    }

    return results;
  };

  const createEntityWithRetry = async (entity: Entity, maxRetries = 3): Promise<void> => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        if (entity.type === 'POLYANET') {
          await megaverseApi.createPolyanet({ row: entity.row, column: entity.col });
        } else if (entity.type === 'SOLOON') {
          await megaverseApi.createSoloon({ row: entity.row, column: entity.col }, entity.color!);
        } else if (entity.type === 'COMETH') {
          await megaverseApi.createCometh({ row: entity.row, column: entity.col }, entity.direction!);
        }
        return;
      } catch (error: unknown) {
        const validatedError = error as ValidationError;

        const isRetryable = validatedError?.status === 429 || (validatedError?.status >= 500);

        if (isRetryable && attempt < maxRetries) {
          console.log(`Retry ${attempt}/${maxRetries} for ${entity.type} at (${entity.row}, ${entity.col})`);
          await sleep(1000 * attempt); 
          continue;
        }
        throw error; 
      }
    }
  };

  return {
    executePhase1,
    executePhase2,
    validateSolution,
    resetError,
    getState,
  };
}