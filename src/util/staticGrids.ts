import { GridMatrix } from '../types/megaverse';

export const PHASE1_GOAL_GRID: GridMatrix = [
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'POLYANET' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }],
  [{ type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }, { type: 'SPACE' }]
];

const rawPhase2Data = [["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","RIGHT_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","UP_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","POLYANET","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","WHITE_SOLOON","POLYANET","POLYANET","SPACE","POLYANET","SPACE","SPACE","LEFT_COMETH","SPACE","SPACE"],["SPACE","SPACE","SPACE","POLYANET","SPACE","BLUE_SOLOON","POLYANET","POLYANET","PURPLE_SOLOON","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","LEFT_COMETH","SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","RIGHT_COMETH"],["SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","WHITE_SOLOON","SPACE","POLYANET","POLYANET","SPACE","SPACE","DOWN_COMETH","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","BLUE_SOLOON","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","RED_SOLOON","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","PURPLE_SOLOON","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","WHITE_SOLOON","POLYANET","SPACE","SPACE","SPACE","SPACE","BLUE_SOLOON","POLYANET","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","PURPLE_SOLOON","SPACE","SPACE","SPACE","SPACE","POLYANET","RED_SOLOON","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","UP_COMETH","SPACE","SPACE"],["SPACE","SPACE","UP_COMETH","SPACE","SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","POLYANET","SPACE","SPACE","SPACE","PURPLE_SOLOON","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","BLUE_SOLOON","POLYANET","POLYANET","SPACE","SPACE","POLYANET","SPACE","POLYANET","SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","SPACE","POLYANET","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","LEFT_COMETH","SPACE","SPACE","DOWN_COMETH","SPACE"],["SPACE","SPACE","SPACE","SPACE","RIGHT_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","WHITE_SOLOON","POLYANET","POLYANET","SPACE","POLYANET","SPACE","POLYANET","POLYANET","BLUE_SOLOON","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","LEFT_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","POLYANET","SPACE","POLYANET","SPACE","SPACE","POLYANET","POLYANET","WHITE_SOLOON","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","RIGHT_COMETH","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","DOWN_COMETH","SPACE","SPACE","POLYANET","POLYANET","BLUE_SOLOON","SPACE","SPACE","SPACE","POLYANET","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","BLUE_SOLOON","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","PURPLE_SOLOON","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","UP_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","PURPLE_SOLOON","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","RED_SOLOON","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","WHITE_SOLOON","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["RIGHT_COMETH","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","RED_SOLOON","SPACE","SPACE","SPACE","SPACE","SPACE","WHITE_SOLOON","POLYANET","POLYANET","PURPLE_SOLOON","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","POLYANET","SPACE","RED_SOLOON","POLYANET","POLYANET","BLUE_SOLOON","SPACE","SPACE","SPACE","SPACE","SPACE","LEFT_COMETH","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","POLYANET","RED_SOLOON","SPACE","SPACE","DOWN_COMETH","SPACE","SPACE"],["SPACE","SPACE","POLYANET","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","UP_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","DOWN_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","DOWN_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","UP_COMETH","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","LEFT_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","RIGHT_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","LEFT_COMETH","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"]];

export const PHASE2_GOAL_GRID: GridMatrix = rawPhase2Data.map(row =>
  row.map(cell => {
    if (cell === 'SPACE') return { type: 'SPACE' as const };
    if (cell === 'POLYANET') return { type: 'POLYANET' as const };
    if (cell.endsWith('_SOLOON')) {
      const color = cell.replace('_SOLOON', '');
      return { type: 'SOLOON' as const, attribute: color };
    }
    if (cell.endsWith('_COMETH')) {
      const direction = cell.replace('_COMETH', '');
      return { type: 'COMETH' as const, attribute: direction };
    }
    return { type: 'SPACE' as const };
  })
);

// Code snippets for the preview
export const PHASE1_CODE_SNIPPET = `const executePhase1 = async () => {
  // Get goal coordinates from API
  const goalResponse = await megaverseApi.getGoalMap();

  // Find all POLYANET positions
  const polyanetPositions = [];
  for (let row = 0; row < goalResponse.length; row++) {
    for (let col = 0; col < goalResponse[row].length; col++) {
      if (goalResponse[row][col] === 'POLYANET') {
        polyanetPositions.push({ row, column: col });
      }
    }
  }

  // Create each polyanet with rate limiting
  for (const position of polyanetPositions) {
    await megaverseApi.createPolyanet(position);
    await sleep(1000); // Rate limiting
  }
};`;

export const PHASE2_CODE_SNIPPET = `const executePhase2 = async () => {
  // Get goal coordinates from API
  const goalResponse = await megaverseApi.getGoalMap();

  // Parse all entities (POLYANET, SOLOON, COMETH)
  const entities = parseEntities(goalResponse);

  // Process with retry logic
  for (const entity of entities) {
    await createEntityWithRetry(entity);
    await sleep(1500); // Rate limiting
  }
};

const createEntityWithRetry = async (entity, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      if (entity.type === 'POLYANET') {
        await megaverseApi.createPolyanet(entity);
      } else if (entity.type === 'SOLOON') {
        await megaverseApi.createSoloon(entity, entity.color);
      } else if (entity.type === 'COMETH') {
        await megaverseApi.createCometh(entity, entity.direction);
      }
      return;
    } catch (error) {
      if (attempt < maxRetries && isRetryable(error)) {
        await sleep(1000 * attempt); // Exponential backoff
        continue;
      }
      throw error;
    }
  }
};`;