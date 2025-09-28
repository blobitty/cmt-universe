import { Position } from '../types/megaverse';
import * as megaverseApi from '../app/api/megaverseApi';

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
      // Get goal coordinates from API
      const goalResponse = await megaverseApi.getGoalMap();

      // Find all positions where POLYANET should be placed
      const polyanetPositions: Position[] = [];

      for (let row = 0; row < goalResponse.length; row++) {
        for (let col = 0; col < goalResponse[row].length; col++) {
          if (goalResponse[row][col] === 'POLYANET') {
            console.log('Polyanet found at position:', { row, col });
            polyanetPositions.push({ row, column: col });
          }
        }
      }


      // Make POST requests for each polyanet position
      for (let i = 0; i < polyanetPositions.length; i++) {
        const position = polyanetPositions[i];
        console.log('Creating polyanet at position:', position);

        await megaverseApi.createPolyanet(position);

        updateState({
          progress: { total: polyanetPositions.length, completed: i + 1 }
        });

        // Rate limiting - wait between requests
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

  return {
    executePhase1,
    validateSolution,
    resetError,
    getState,
  };
}