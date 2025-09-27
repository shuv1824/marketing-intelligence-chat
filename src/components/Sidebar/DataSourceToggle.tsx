import React from 'react';
import { type DataSource } from '../../types';

interface DataSourceToggleProps {
  source: DataSource;
  isConnected: boolean;
  onToggle: () => void;
}

const DataSourceToggle: React.FC<DataSourceToggleProps> = ({
  source,
  isConnected,
  onToggle
}) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center space-x-2">
      <span className="text-lg">{source.icon}</span>
      <span className="text-sm">{source.name}</span>
    </div>
    <button
      onClick={onToggle}
      className={`w-10 h-6 rounded-full flex items-center transition-colors ${
        isConnected ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition-transform ${
          isConnected ? 'translate-x-5' : 'translate-x-1'
        }`}
      />
    </button>
  </div>
);

export default DataSourceToggle;
