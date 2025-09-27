import React from 'react';
import { type Channel } from '../../types';

interface ChannelToggleProps {
  channel: Channel;
  isActive: boolean;
  onToggle: () => void;
}

const ChannelToggle: React.FC<ChannelToggleProps> = ({
  channel,
  isActive,
  onToggle
}) => {
  const IconComponent = channel.icon;
  
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-2">
        <IconComponent className="w-4 h-4" />
        <span className="text-sm">{channel.name}</span>
      </div>
      <button
        onClick={onToggle}
        className={`w-10 h-6 rounded-full flex items-center transition-colors ${
          isActive ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition-transform ${
            isActive ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default ChannelToggle;
