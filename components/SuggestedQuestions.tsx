interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void;
}

export default function SuggestedQuestions({
  onSelectQuestion,
}: SuggestedQuestionsProps) {
  const questions = [
    "What are the application requirements?",
    "How are AI projects supported?",
    "What mentorship opportunities are available?",
    "What is the application process like?",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-80">
      {" "}
      {/* Adjusted width */}
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Suggested Questions
      </h3>
      <ul className="space-y-2">
        {questions.map((question, index) => (
          <li key={index}>
            <button
              onClick={() => onSelectQuestion(question)}
              className="w-full text-left p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            >
              {question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
