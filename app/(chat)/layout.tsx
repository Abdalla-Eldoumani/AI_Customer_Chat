const ChatLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1 w-full">
          <main className="h-full overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    );
};
export default ChatLayout;