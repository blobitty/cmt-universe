import React from 'react';

interface ControlsProps {
  isLoading: boolean;
  onExecutePhase1: () => void;
  onExecutePhase2: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  isLoading,
  onExecutePhase1,
  onExecutePhase2,
}) => {
  const baseButtonClass = "px-6 py-3 bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:bg-gray-700 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none";

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <button
        onClick={onExecutePhase1}
        disabled={isLoading}
        className={baseButtonClass}
      >
        {isLoading ? 'Executing...' : 'Execute Phase 1'}
      </button>

      <button
        onClick={onExecutePhase2}
        disabled={isLoading}
        className={baseButtonClass}
      >
        {isLoading ? 'Executing...' : 'Execute Phase 2'}
      </button>
    </div>
  );
};