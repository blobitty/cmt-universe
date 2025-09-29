import React, { useState } from 'react';

interface CodePreviewProps {
  title: string;
  code: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ title, code }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 rounded-lg border border-gray-500 flex items-center justify-between text-left"
      >
        <span className="font-medium text-white">{title}</span>
        <span className="text-gray-300 transform transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>

      {isExpanded && (
        <div className="mt-2 border border-gray-500 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-600">
            <span className="text-sm font-medium text-gray-200">Code Implementation</span>
          </div>
          <div className="bg-gray-900 text-slate-100-400 p-4 overflow-x-auto">
            <pre className="text-sm font-mono whitespace-pre-wrap">
              {code}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};