'use client'; // Mark the file as a client component

import ChatInterface from '@/components/ChatInterface';
import FeedbackForm from '@/components/FeedbackForm';
import Header from '@/components/Header';
import LiveChatStatus from '@/components/LiveChatStatus';
import { ThemeProvider } from 'next-themes';


export default function CustomerSupportApp() {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-8">
          <LiveChatStatus/>
          <ChatInterface/>
          <FeedbackForm/>
        </div>
      </div>
    </ThemeProvider>
  );
}