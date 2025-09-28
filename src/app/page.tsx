'use client';

import React, { useState } from 'react';
import { createMegaverseService, MegaverseState } from '../util/megaverseService';
import { ErrorBanner } from './components/ErrorBanner';
import { Controls } from './components/Controls';
import { ProgressBar } from './components/ProgressBar';

const MegaversePage: React.FC = () => {
  const [megaverseState, setMegaverseState] = useState<MegaverseState>({
    isLoading: false,
    error: null,
    progress: { total: 0, completed: 0 },
  });

  const [megaverseService] = useState(() => createMegaverseService(setMegaverseState));

  const handleExecutePhase1 = async () => {
    const success = await megaverseService.executePhase1();
    if (success) {
      alert('Phase 1 completed successfully!');
    }
  };

  const handleValidateSolution = async () => {
    const isValid = await megaverseService.validateSolution();
    alert(isValid ? 'Solution is valid!' : 'Solution validation failed');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Crossmint Megaverse Challenge - Phase 1
      </h1>

      {megaverseState.error && (
        <ErrorBanner error={megaverseState.error} onDismiss={() => megaverseService.resetError()} />
      )}

      <Controls
        isLoading={megaverseState.isLoading}
        onExecutePhase1={handleExecutePhase1}
        onValidateSolution={handleValidateSolution}
      />

      {megaverseState.progress.total > 0 && (
        <div className="mt-8">
          <ProgressBar
            current={megaverseState.progress.completed}
            total={megaverseState.progress.total}
          />
        </div>
      )}

      <div className="mt-8 text-center text-gray-600">
        <p>Click Execute Phase 1 to automatically create polyanets based on the goal configuration.</p>
        <p>Progress will be shown above as each polyanet is created via API calls.</p>
      </div>
    </div>
  );
};

export default MegaversePage;