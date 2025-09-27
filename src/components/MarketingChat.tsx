import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { type DataSourceConnection, type ChannelActivation } from '../types';
import { useCampaignGenerator } from '../hooks/useCampaignGenerator';

const MarketingChat: React.FC = () => {
  const [isConnected, setIsConnected] = useState<DataSourceConnection>({
    googleAds: false,
    shopify: false,
    facebookPixel: false
  });

  const [activeChannels, setActiveChannels] = useState<ChannelActivation>({
    email: false,
    sms: false,
    push: false,
    whatsapp: false
  });

  const [showSettings, setShowSettings] = useState<boolean>(false);
  const { messages, isStreaming, simulateStreaming, addUserMessage } = useCampaignGenerator();

  const handleSubmit = async (inputValue: string): Promise<void> => {
    const connectedCount = Object.values(isConnected).filter(Boolean).length;
    const channelCount = Object.values(activeChannels).filter(Boolean).length;

    if (connectedCount === 0) {
      alert('Please connect at least one data source before asking questions.');
      return;
    }

    if (channelCount === 0) {
      alert('Please enable at least one channel for campaign recommendations.');
      return;
    }

    addUserMessage(inputValue);
    await simulateStreaming(inputValue, isConnected, activeChannels);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        activeChannels={activeChannels}
        setActiveChannels={setActiveChannels}
      />
      
      <div className="flex-1 flex flex-col">
        <Header
          connectedSourcesCount={Object.values(isConnected).filter(Boolean).length}
          activeChannelsCount={Object.values(activeChannels).filter(Boolean).length}
        />
        
        <Chat
          messages={messages}
          isStreaming={isStreaming}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default MarketingChat;
