import React from 'react';
import { type Campaign } from '../../types';
import { CHANNELS } from '../../constants';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => (
  <div className="bg-gray-50 rounded-lg p-4 mb-3 border border-gray-200">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <span className={`w-3 h-3 rounded-full ${CHANNELS.find(c => c.id === campaign.channel)?.color || 'bg-gray-400'}`}></span>
        <span className="font-medium capitalize">{campaign.channel}</span>
      </div>
      <span className="text-sm text-gray-500">{campaign.audience}</span>
    </div>
    
    <div className="bg-white rounded p-3 mb-3">
      <p className="text-sm font-medium mb-1">Message:</p>
      <p className="text-sm text-gray-700">{campaign.message}</p>
    </div>

    <div className="grid grid-cols-2 gap-4 text-xs">
      <div>
        <p className="font-medium text-gray-600">Timing</p>
        <p>{campaign.timing.optimal_window}</p>
      </div>
      <div>
        <p className="font-medium text-gray-600">Expected CTR</p>
        <p>{(parseFloat(campaign.metrics.expected_ctr) * 100).toFixed(1)}%</p>
      </div>
    </div>
  </div>
);

export default CampaignCard;
