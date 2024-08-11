import { useState } from "react";
import ChatBox from "./ChatBox";
import SuggestedQuestions from "./SuggestedQuestions";

export default function ChatInterface() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );

  const fetchAIresponse = async (question: string) => {
    try {
      const response = await fetch(`/api/openAI`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: question }),
      });

      if (!response.ok) {
        throw new Error("Failed to answer");
      }

      const data = await response.json();
      console.log(data.answer);

      return data.answer;
    } catch (error) {
      console.error(error);
      alert("Failed to answer");
      return "Sorry, something went wrong. Please try again later."; // Fallback message in case of error
    }
  };

  const handleSendMessage = async (message: string) => {
    // Add the user's message to the conversation
    setMessages([...messages, { text: message, isUser: true }]);

    // Fetch AI response based on the user's message
    const aiResponse = await fetchAIresponse(message);

    // Add the AI's response to the conversation
    setMessages((prev) => [
      ...prev,
      {
        text: aiResponse,
        isUser: false,
      },
    ]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3 lg:w-3/4">
        <ChatBox messages={messages} onSendMessage={handleSendMessage} />
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4">
        <SuggestedQuestions onSelectQuestion={handleSendMessage} />
      </div>
    </div>
  );
}