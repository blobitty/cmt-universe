export interface GridCell {
    type: 'SPACE' | 'POLYANET' | 'SOLOON' | 'COMETH';
    attribute?: string;
  }
  
  export interface ApiResponse<T> {
    goal: T;
    currentState: T;
  }
  
  export type GridMatrix = Array<Array<GridCell>>;
  
  export interface Position {
    row: number;
    column: number;
  }