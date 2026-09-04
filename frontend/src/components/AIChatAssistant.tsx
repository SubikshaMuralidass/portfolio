import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, MessageCircle, Loader } from 'lucide-react';
import { chatAPI } from '../services/api';
import { useViewMode } from '../hooks/useViewMode';
import { ChatMessage } from '../types';


const AIChatAssistant: React.FC = () => {
  const { chatMessages, addChatMessage, clearChat } = useViewMode();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setShowNamePrompt(false);
      const greeting: ChatMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Hey ${userName}! 👋 I'm Subiksha's AI assistant. I can answer questions about my projects, skills, experience. What would you like to know?`,
        timestamp: new Date(),
      };
      addChatMessage(greeting);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    addChatMessage(userMessage);
    setInput('');
    setLoading(true);

    try {
      const response = await chatAPI.sendMessage(input, userName);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.response,
        timestamp: new Date(),
      };
      addChatMessage(assistantMessage);
    } catch (error) {
      console.error('Failed to send message:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      addChatMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-20 px-6 bg-secondary">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <MessageCircle size={32} className="text-accent" />
          <h2 className="text-4xl font-bold text-accent">AI Assistant</h2>
        </div>

        <div className="bg-primary border border-gray-700 rounded-lg overflow-hidden flex flex-col h-[600px]">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-primary to-secondary">
            {showNamePrompt ? (
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <div className="text-center">
                  <MessageCircle size={48} className="text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Welcome!</h3>
                  <p className="text-gray-400">Let me get your name to personalize our chat</p>
                </div>
                <form onSubmit={handleNameSubmit} className="w-full max-w-sm">
                  <input
                    type="text"
                    placeholder="Your name..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                  />
                  <button
                    type="submit"
                    className="w-full mt-4 px-4 py-3 bg-accent text-primary font-semibold rounded hover:bg-opacity-90 transition"
                  >
                    Start Chat
                  </button>
                </form>
              </div>
            ) : (
              <>
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-accent text-primary'
                          : 'bg-gray-800 text-gray-100'
                      }`}
                    >
                      <div className="text-sm leading-6">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                      <p className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                      <Loader size={16} className="animate-spin" />
                      <span className="text-sm text-gray-300">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          {!showNamePrompt && (
            <div className="border-t border-gray-700 p-4 bg-primary">
              <div className="flex gap-2 mb-2">
                <button
                  onClick={clearChat}
                  className="text-xs px-3 py-1 bg-gray-800 text-gray-400 rounded hover:bg-gray-700 transition"
                >
                  Clear Chat
                </button>
              </div>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-secondary border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-4 py-2 bg-accent text-primary rounded font-semibold hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-secondary border border-gray-700 rounded-lg p-4">
          <p className="text-sm text-gray-400">
            💡 <strong>Tip:</strong> Try asking about specific projects, skills or experience. I can also help with technical discussions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIChatAssistant;
