import React from 'react';
import { GridMatrix } from '../../types/megaverse';
import { CELL_EMOJIS } from '../../util/constants';

interface GridDisplayProps {
  grid: GridMatrix;
  title: string;
}

export const GridDisplay: React.FC<GridDisplayProps> = ({
  grid,
  title,
}) => {
  return (
    <div className={`text-center`}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="inline-block border-2 border-gray-200 rounded-lg p-4">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-8 h-8 flex items-center justify-center border border-black text-base cursor-pointer hover:bg-gray-200 "
                title={`${cell.type} (${rowIndex}, ${colIndex})`}
              >
                {CELL_EMOJIS[cell.type] || '❓'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};