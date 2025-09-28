import { Position } from '../../types/megaverse';

const BASE_URL = 'https://challenge.crossmint.com/api';
const CANDIDATE_ID = 'abe7b8d7-abb4-4d40-90c8-e733c67f0379';


const makeRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
};

export const getGoalMap = async (): Promise<string[][]> => {
  const data = await makeRequest<{goal: string[][]}>(
    `/map/${CANDIDATE_ID}/goal`
  );
  return data.goal;
};

export const createPolyanet = async (position: Position): Promise<void> => {
  await makeRequest('/polyanets', {
    method: 'POST',
    body: JSON.stringify({
      row: position.row,
      column: position.column,
      candidateId: CANDIDATE_ID,
    }),
  });
};

export const createSoloon = async (position: Position, color: string): Promise<void> => {
  await makeRequest('/soloons', {
    method: 'POST',
    body: JSON.stringify({
      row: position.row,
      column: position.column,
      color: color.toLowerCase(),
      candidateId: CANDIDATE_ID,
    }),
  });
};

export const createCometh = async (position: Position, direction: string): Promise<void> => {
  await makeRequest('/comeths', {
    method: 'POST',
    body: JSON.stringify({
      row: position.row,
      column: position.column,
      direction: direction.toLowerCase(),
      candidateId: CANDIDATE_ID,
    }),
  });
};

export const deletePolyanet = async (position: Position): Promise<void> => {
  await makeRequest('/polyanets', {
    method: 'DELETE',
    body: JSON.stringify({
      row: position.row,
      column: position.column,
      candidateId: CANDIDATE_ID,
    }),
  });
};

export const validateSolution = async (): Promise<boolean> => {
  try {
    await makeRequest('/map/validate', {
      method: 'POST',
      body: JSON.stringify({ candidateId: CANDIDATE_ID }),
    });
    return true;
  } catch (error) {
    console.error('Validation failed:', error);
    return false;
  }
};