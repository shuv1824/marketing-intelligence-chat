import React, { useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { type Message } from '../../types';
import { SUGGESTED_QUERIES } from '../../constants';
import CampaignCard from './CampaignCard';

interface MessageListProps {
  messages: Message[];
  onSuggestionClick: (suggestion: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({ 
  messages, 
  onSuggestionClick 
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Ready to optimize your campaigns?
        </h3>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Connect your data sources and ask me to analyze your audience and recommend the best campaigns.
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {SUGGESTED_QUERIES.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(suggestion)}
              className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 border border-gray-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
        >
          <div className={`max-w-3xl rounded-lg p-4 ${
            message.isBot 
              ? 'bg-gray-50 border border-gray-200' 
              : 'bg-blue-600 text-white'
          }`}>
            {message.type === 'streaming' && (
              <div className="flex items-center space-x-2">
                <div className="animate-pulse w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">{message.content}</span>
              </div>
            )}

            {message.type === 'user' && (
              <p>{message.content}</p>
            )}

            {message.type === 'campaign' && message.campaignData && (
              <div>
                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    Campaign Recommendations
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Based on your query: "{message.content}"
                  </p>
                </div>

                <div className="grid gap-4 mb-4">
                  {message.campaignData.recommendations.map((campaign, idx) => (
                    <CampaignCard key={idx} campaign={campaign} />
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 text-blue-900">Key Insights</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p>• Best performing channel: <strong>{message.campaignData.insights.best_performing_channel}</strong></p>
                    <p>• Recommended budget: <strong>${message.campaignData.insights.recommended_budget}</strong></p>
                    <p>• Confidence score: <strong>{(parseFloat(message.campaignData.insights.confidence_score) * 100).toFixed(0)}%</strong></p>
                  </div>
                </div>

                <details className="bg-gray-100 rounded-lg">
                  <summary className="p-3 cursor-pointer font-medium text-gray-700 hover:text-gray-900">
                    View JSON Output
                  </summary>
                  <pre className="p-3 text-xs bg-gray-900 text-green-400 rounded-b-lg overflow-x-auto">
                    {JSON.stringify(message.campaignData, null, 2)}
                  </pre>
                </details>

                <div className="text-xs text-gray-500 mt-2">
                  Generated at {message.timestamp}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
