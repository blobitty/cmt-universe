import React from 'react';

interface ErrorBannerProps {
  error: string;
  onDismiss: () => void;
}

export const ErrorBanner: React.FC<ErrorBannerProps> = ({ error, onDismiss }) => {
  return (
    <div className="error-banner">
      <p>{error}</p>
      <button onClick={onDismiss} className="btn btn-sm">
        Dismiss
      </button>
    </div>
  );
};