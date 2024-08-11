import { useState } from "react";
import ChatBox from "./ChatBox";
import SuggestedQuestions from "./SuggestedQuestions";
import axios from "axios";
import toast from "react-hot-toast";

export default function ChatInterface() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );

  const fetchAIresponse = async (question: string) => {
    try {
      const response = await axios.post("/api/openAI", {
        question: question,
      });

      toast.success("Successfully answered the question");
      return response.data.answer;
    } catch (error) {
      console.error(error);
      toast.error("Failed to answer the question");
      return "Sorry, something went wrong. Please try again later.";
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