import React from "react";

const QuizCard = ({ question, options, selected, setSelected, correctAnswer, answered }) => {
  const getOptionStyle = (opt) => {
    if (!answered) return "bg-gray-100";
    if (opt === correctAnswer) return "bg-green-500 text-white";
    if (opt === selected) return "bg-red-500 text-white";
    return "bg-gray-100";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-xl w-full mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Quiz</h2>
      <p className="text-lg font-medium mb-6" dangerouslySetInnerHTML={{ __html: question }}></p>
      <div className="space-y-2">
        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => setSelected(opt)}
            className={`block w-full text-left px-4 py-3 rounded-lg border-0 bg-gray-200 transition-all duration-300 ${getOptionStyle(opt)}`}
            dangerouslySetInnerHTML={{ __html: opt }}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
