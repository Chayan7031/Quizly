import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizCard from "../components/QuizCard";
import { motion, AnimatePresence } from "framer-motion";

const categoryMap = {
  "General Knowledge": 9,
  Science: 17,
  Computers: 18,
  Mathematics: 19,
  History: 23,
};

const totalQuestions = 5;

const Quiz = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState("Science");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);

  const fetchQuestion = async () => {
    const categoryId = categoryMap[category];
    const res = await axios.get(`https://opentdb.com/api.php?amount=1&type=multiple&category=${categoryId}`);
    const data = res.data.results[0];
    const allOptions = shuffleArray([...data.incorrect_answers, data.correct_answer]);
    setQuestion(data.question);
    setOptions(allOptions);
    setCorrectAnswer(data.correct_answer);
    setSelected(null);
    setAnswered(false);
    setShowQuestion(true);
  };

  useEffect(() => {
    fetchQuestion();
  }, [category]);

  const handleSelect = (opt) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    if (opt === correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setShowQuestion(false);
    setTimeout(() => {
      if (questionCount >= totalQuestions - 1) {
        setIsFinished(true);
      } else {
        setQuestionCount((prev) => prev + 1);
        fetchQuestion();
      }
    }, 300); // match the exit animation duration
  };

  const handleRestart = () => {
    setScore(0);
    setQuestionCount(0);
    setIsFinished(false);
    fetchQuestion();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center mt-6 mb-2"><img className="w-12 inline" src="src/assets/logo.svg" alt="" /> QUIZLY</h1>

      {isFinished ? (
        <div className="bg-white p-8 rounded-xl shadow-lg mt-8 text-center w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed!</h2>
          <p className="text-lg mb-4">You scored <span className="font-semibold">{score}</span> out of {totalQuestions}</p>
          <button
            onClick={handleRestart}
            className="mt-4 bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <p className="text-lg text-gray-700 mb-1">Score: <span className="font-semibold">{score}</span></p>
          <p className="text-sm text-gray-600 mb-3">
            Question {questionCount + 1}/{totalQuestions}
          </p>

          <div className="w-full max-w-sm mb-4 flex items-center gap-4">
            <h1 className="text-2xl">Category: </h1>
            <select
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setScore(0);
                setQuestionCount(0);
                fetchQuestion();
              }}
            >
              {Object.keys(categoryMap).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <AnimatePresence mode="wait">
            {showQuestion && (
              <motion.div
                key={question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <QuizCard
                  question={question}
                  options={options}
                  selected={selected}
                  setSelected={handleSelect}
                  correctAnswer={correctAnswer}
                  answered={answered}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className="mt-6 bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
            onClick={handleNext}
            disabled={!answered}
          >
            {questionCount === totalQuestions - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </div>
  );
};

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default Quiz;
