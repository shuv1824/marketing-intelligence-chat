import React from 'react';
import { Settings, Database, MessageSquare, Wifi, WifiOff } from 'lucide-react';
import { type DataSourceConnection, type ChannelActivation } from '../../types';
import { DATA_SOURCES, CHANNELS } from '../../constants';
import DataSourceToggle from './DataSourceToggle';
import ChannelToggle from './ChannelToggle';

interface SidebarProps {
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
  isConnected: DataSourceConnection;
  setIsConnected: React.Dispatch<React.SetStateAction<DataSourceConnection>>;
  activeChannels: ChannelActivation;
  setActiveChannels: React.Dispatch<React.SetStateAction<ChannelActivation>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  showSettings,
  setShowSettings,
  isConnected,
  setIsConnected,
  activeChannels,
  setActiveChannels
}) => {
  const toggleDataSource = (sourceId: keyof DataSourceConnection): void => {
    setIsConnected(prev => ({
      ...prev,
      [sourceId]: !prev[sourceId]
    }));
  };

  const toggleChannel = (channelId: keyof ChannelActivation): void => {
    setActiveChannels(prev => ({
      ...prev,
      [channelId]: !prev[channelId]
    }));
  };

  const connectedSourcesCount = Object.values(isConnected).filter(Boolean).length;
  const activeChannelsCount = Object.values(activeChannels).filter(Boolean).length;

  return (
    <div className={`${showSettings ? 'w-80' : 'w-16'} bg-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col`}>
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <Settings className="w-5 h-5" />
          {showSettings && <span className="font-medium">Configuration</span>}
        </button>
      </div>

      {showSettings && (
        <div className="flex-1 overflow-y-auto p-4">
          {/* Data Sources */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Database className="w-4 h-4 mr-2" />
              Data Sources
            </h3>
            {DATA_SOURCES.map(source => (
              <DataSourceToggle
                key={source.id}
                source={source}
                isConnected={isConnected[source.id]}
                onToggle={() => toggleDataSource(source.id)}
              />
            ))}
          </div>

          {/* Channels */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              Channels
            </h3>
            {CHANNELS.map(channel => (
              <ChannelToggle
                key={channel.id}
                channel={channel}
                isActive={activeChannels[channel.id]}
                onToggle={() => toggleChannel(channel.id)}
              />
            ))}
          </div>

          {/* Connection Status */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-700 mb-2">Status</h4>
            <div className="text-xs space-y-1">
              <div className="flex items-center space-x-2">
                {connectedSourcesCount > 0 ? (
                  <Wifi className="w-3 h-3 text-green-500" />
                ) : (
                  <WifiOff className="w-3 h-3 text-red-500" />
                )}
                <span>{connectedSourcesCount} sources connected</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-3 h-3 text-blue-500" />
                <span>{activeChannelsCount} channels active</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
