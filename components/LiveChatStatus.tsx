import { useState, useEffect } from "react";

export default function LiveChatStatus() {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    // Simulate checking availability
    const checkAvailability = () => {
      setIsAvailable(Math.random() > 0.5);
    };

    const interval = setInterval(checkAvailability, 60000);
    checkAvailability();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2 mb-4">
      <div
        className={`w-3 h-3 rounded-full ${
          isAvailable ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
      <span className="text-sm text-gray-600 dark:text-gray-300">
        {isAvailable ? "Live Chat Available" : "Live Chat Unavailable"}
      </span>
    </div>
  );
}