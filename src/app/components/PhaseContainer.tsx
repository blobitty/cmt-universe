import React from 'react';
import { GridDisplay } from './GridDisplay';
import { CodePreview } from './CodePreview';
import { GridMatrix } from '../../types/megaverse';

interface PhaseContainerProps {
  phase: number;
  title: string;
  goalGrid: GridMatrix;
  onExecute: () => void;
  isLoading: boolean;
  codeSnippet: string;
}

export const PhaseContainer: React.FC<PhaseContainerProps> = ({
  phase,
  title,
  goalGrid,
  onExecute,
  isLoading,
  codeSnippet
}) => {
  const buttonClass = "px-8 py-4 bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:bg-gray-700 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none mb-6";

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

      <button
        onClick={onExecute}
        disabled={isLoading}
        className={buttonClass}
      >
        {isLoading ? 'Executing...' : `Execute Phase ${phase}`}
      </button>

      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Goal Megaverse</h3>
        <GridDisplay
          grid={goalGrid}
          title=""
          className="mb-6"
        />

        <CodePreview
          title="Show Solution"
          code={codeSnippet}
        />
      </div>
    </div>
  );
};