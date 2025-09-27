import React, { useState } from 'react';
import { type Message } from '../../types';
import MessageList from './MessageList';
import InputArea from './InputArea';

interface ChatProps {
  messages: Message[];
  isStreaming: boolean;
  onSubmit: (inputValue: string) => Promise<void>;
}

const Chat: React.FC<ChatProps> = ({ 
  messages, 
  isStreaming, 
  onSubmit 
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = async (): Promise<void> => {
    if (!inputValue.trim()) return;
    
    await onSubmit(inputValue);
    setInputValue('');
  };

  const handleSuggestionClick = (suggestion: string): void => {
    setInputValue(suggestion);
  };

  return (
    <>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        <MessageList 
          messages={messages} 
          onSuggestionClick={handleSuggestionClick}
        />
      </div>

      {/* Input Area */}
      <InputArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSubmit={handleSubmit}
        isStreaming={isStreaming}
      />
    </>
  );
};

export default Chat;
