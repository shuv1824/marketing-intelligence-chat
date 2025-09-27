import React from 'react';
import { Send, Pause } from 'lucide-react';

interface InputAreaProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSubmit: () => void;
  isStreaming: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({
  inputValue,
  setInputValue,
  onSubmit,
  isStreaming
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me about your campaigns, audience insights, or optimization strategies..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isStreaming}
        />
        <button
          onClick={onSubmit}
          disabled={isStreaming || !inputValue.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          {isStreaming ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default InputArea;
