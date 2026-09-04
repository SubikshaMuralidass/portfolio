import React, { createContext, useState, useCallback } from 'react';
import { ChatMessage } from '../types';

interface ViewContextType {
  viewMode: 'recruiter' | 'developer';
  toggleViewMode: () => void;
  chatMessages: ChatMessage[];
  addChatMessage: (message: ChatMessage) => void;
  clearChat: () => void;
}

export const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<'recruiter' | 'developer'>('recruiter');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const toggleViewMode = useCallback(() => {
    setViewMode((prev) => (prev === 'recruiter' ? 'developer' : 'recruiter'));
  }, []);

  const addChatMessage = useCallback((message: ChatMessage) => {
    setChatMessages((prev) => [...prev, message]);
  }, []);

  const clearChat = useCallback(() => {
    setChatMessages([]);
  }, []);

  return (
    <ViewContext.Provider value={{ viewMode, toggleViewMode, chatMessages, addChatMessage, clearChat }}>
      {children}
    </ViewContext.Provider>
  );
};
