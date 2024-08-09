// components/ChatInterface.tsx
import { useState } from 'react';
import ChatBox from './ChatBox';
import SuggestedQuestions from './SuggestedQuestions';

export default function ChatInterface() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { text: message, isUser: true }]);
    // Implement AI response logic here
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I'm processing your request. How else can I assist you?", isUser: false }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-grow">
        <ChatBox messages={messages} onSendMessage={handleSendMessage} />
      </div>
      <div className="w-full md:w-64">
        <SuggestedQuestions onSelectQuestion={handleSendMessage} />
      </div>
    </div>
  );
}