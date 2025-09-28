import { GridCell, GridMatrix, Position } from '../types/megaverse';

const shouldUpdateCell = (
    currentCell: GridCell | undefined,
    goalCell: GridCell
  ): boolean => {
    if (!currentCell) return goalCell.type !== 'SPACE';
    
    return currentCell.type !== goalCell.type || 
           currentCell.attribute !== goalCell.attribute;
  };
  
  export const findDifferences = (
    currentGrid: GridMatrix,
    goalGrid: GridMatrix
  ): Position[] => {
    const differences: Position[] = [];
  
    for (let row = 0; row < goalGrid.length; row++) {
      for (let col = 0; col < goalGrid[row].length; col++) {
        const currentCell = currentGrid[row]?.[col];
        const goalCell = goalGrid[row][col];
  
        if (shouldUpdateCell(currentCell, goalCell)) {
          differences.push({ row, column: col });
        }
      }
    }
  
    return differences;
  };
  
  export const findPolyanetsToAdd = (
    currentGrid: GridMatrix,
    goalGrid: GridMatrix
  ): Position[] => {
    const positions: Position[] = [];
  
    for (let row = 0; row < goalGrid.length; row++) {
      for (let col = 0; col < goalGrid[row].length; col++) {
        const currentCell = currentGrid[row]?.[col];
        const goalCell = goalGrid[row][col];
  
        if (goalCell.type === 'POLYANET' && currentCell?.type !== 'POLYANET') {
          positions.push({ row, column: col });
        }
      }
    }
  
    return positions;
  };
  
  export const findPolyanetsToRemove = (
    currentGrid: GridMatrix,
    goalGrid: GridMatrix
  ): Position[] => {
    const positions: Position[] = [];
  
    for (let row = 0; row < currentGrid.length; row++) {
      for (let col = 0; col < currentGrid[row].length; col++) {
        const currentCell = currentGrid[row][col];
        const goalCell = goalGrid[row]?.[col];
  
        if (currentCell.type === 'POLYANET' && goalCell?.type !== 'POLYANET') {
          positions.push({ row, column: col });
        }
      }
    }
  
    return positions;
  };