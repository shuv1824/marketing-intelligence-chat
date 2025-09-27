import React from 'react';

interface HeaderProps {
  connectedSourcesCount: number;
  activeChannelsCount: number;
}

const Header: React.FC<HeaderProps> = ({ 
  connectedSourcesCount, 
  activeChannelsCount 
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Marketing Intelligence Assistant
          </h1>
          <p className="text-sm text-gray-500">
            Right time, right channel, right message, right audience
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            {connectedSourcesCount > 0 && (
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                {connectedSourcesCount} sources
              </span>
            )}
            {activeChannelsCount > 0 && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                {activeChannelsCount} channels
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
