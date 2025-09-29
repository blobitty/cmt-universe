'use client';

import React, { useState } from 'react';
import { createMegaverseService, MegaverseState } from '../util/megaverseService';
import { ErrorBanner } from './components/ErrorBanner';
import { ProgressBar } from './components/ProgressBar';
import { PhaseContainer } from './components/PhaseContainer';
import { PHASE1_GOAL_GRID, PHASE2_GOAL_GRID, PHASE1_CODE_SNIPPET, PHASE2_CODE_SNIPPET } from '../util/staticGrids';

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

  const handleExecutePhase2 = async () => {
    const success = await megaverseService.executePhase2();
    if (success) {
      alert('Phase 2 completed successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Crossmint Megaverse Challenge
        </h1>

        {megaverseState.error && (
          <div className="mb-8">
            <ErrorBanner error={megaverseState.error} onDismiss={() => megaverseService.resetError()} />
          </div>
        )}

        {megaverseState.progress.total > 0 && (
          <div className="mb-8 max-w-2xl mx-auto">
            <ProgressBar
              current={megaverseState.progress.completed}
              total={megaverseState.progress.total}
            />
          </div>
        )}

        <div className="flex flex-col gap-12 items-center">
          <PhaseContainer
            phase={1}
            title="Phase 1: Basic Polyanets"
            goalGrid={PHASE1_GOAL_GRID}
            onExecute={handleExecutePhase1}
            isLoading={megaverseState.isLoading}
            codeSnippet={PHASE1_CODE_SNIPPET}
          />

          <PhaseContainer
            phase={2}
            title="Phase 2: Complex Megaverse"
            goalGrid={PHASE2_GOAL_GRID}
            onExecute={handleExecutePhase2}
            isLoading={megaverseState.isLoading}
            codeSnippet={PHASE2_CODE_SNIPPET}
          />
        </div>
      </div>
    </div>
  );
};

export default MegaversePage;