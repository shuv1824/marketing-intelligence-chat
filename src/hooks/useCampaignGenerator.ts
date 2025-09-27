import { useState, useCallback } from "react";
import {
  type Message,
  type DataSourceConnection,
  type ChannelActivation,
} from "../types";
import { generateCampaignData } from "../utils/campaignGenerator";
import { STREAMING_MESSAGES } from "../constants";

export const useCampaignGenerator = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  const simulateStreaming = useCallback(
    async (
      query: string,
      isConnected: DataSourceConnection,
      activeChannels: ChannelActivation,
    ): Promise<void> => {
      setIsStreaming(true);

      for (let i = 0; i < STREAMING_MESSAGES.length; i++) {
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));

        setMessages((prev) => {
          const newMessages = [...prev];
          if (
            newMessages.length > 0 &&
            newMessages[newMessages.length - 1].type === "streaming"
          ) {
            newMessages[newMessages.length - 1] = {
              type: "streaming",
              content: STREAMING_MESSAGES[i],
              isBot: true,
              timestamp: new Date().toLocaleTimeString(),
            };
          } else {
            newMessages.push({
              type: "streaming",
              content: STREAMING_MESSAGES[i],
              isBot: true,
              timestamp: new Date().toLocaleTimeString(),
            });
          }
          return newMessages;
        });
      }

      // Generate final campaign data
      const campaignData = generateCampaignData(isConnected, activeChannels);

      setMessages((prev) => {
        const newMessages = prev.filter((msg) => msg.type !== "streaming");
        return [
          ...newMessages,
          {
            type: "campaign",
            content: query,
            campaignData,
            isBot: true,
            timestamp: new Date().toLocaleTimeString(),
          },
        ];
      });

      setIsStreaming(false);
    },
    [],
  );

  const addUserMessage = useCallback((content: string): void => {
    const userMessage: Message = {
      type: "user",
      content,
      isBot: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
  }, []);

  return {
    messages,
    isStreaming,
    simulateStreaming,
    addUserMessage,
  };
};
