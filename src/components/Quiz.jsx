import React, { useState } from "react";
import quizData from "../data/quizData.json";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const question = quizData.questions[currentQuestion];

  const handleAnswer = (optionId) => {
    if (question.type === "radio") {
      // Replace previous answer
      setAnswers({
        ...answers,
        [currentQuestion]: [optionId],
      });
    } else {
      // Toggle checkbox
      const current = answers[currentQuestion] || [];
      const updated = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      setAnswers({
        ...answers,
        [currentQuestion]: updated,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const websiteTypes = ["landing", "portfolio", "business", "booking", "store", "custom"];
    const calculatedScores = {};

    // Initialize scores
    websiteTypes.forEach((type) => {
      calculatedScores[type] = 0;
    });

    // Calculate scores based on answers
    Object.entries(answers).forEach(([questionIndex, selectedOptions]) => {
      const q = quizData.questions[parseInt(questionIndex)];
      selectedOptions.forEach((optionId) => {
        const option = q.options.find((opt) => opt.id === optionId);
        if (option && option.weight) {
          websiteTypes.forEach((type) => {
            calculatedScores[type] += option.weight[type] || 0;
          });
        }
      });
    });

    // Find the best match
    let bestType = "landing";
    let bestScore = calculatedScores["landing"];
    websiteTypes.forEach((type) => {
      if (calculatedScores[type] > bestScore) {
        bestScore = calculatedScores[type];
        bestType = type;
      }
    });

    setResult(bestType);
  };

  if (result) {
    const resultData = quizData.results[result];
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-lavender-light to-sage-light p-8 rounded-2xl">
          <p className="text-sm uppercase tracking-wide text-lavender mb-2">
            Your Perfect Match
          </p>
          <h2 className="text-3xl font-bold text-lavender-dark mb-2">
            {resultData.title}
          </h2>
          <p className="text-lavender text-lg">{resultData.subtitle}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-lg text-sage-dark mb-6">{resultData.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lavender-dark mb-3">Includes</h3>
              <ul className="space-y-2">
                {resultData.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sage-dark">
                    <span className="text-lavender mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-sage-light p-4 rounded-lg">
                <p className="text-sm text-sage font-semibold mb-1">One-time cost</p>
                <p className="text-2xl font-bold text-lavender-dark">
                  {resultData.oneTimeCost}
                </p>
              </div>

              <div className="bg-lavender-light p-4 rounded-lg">
                <p className="text-sm text-lavender font-semibold mb-1">Monthly cost</p>
                <p className="text-2xl font-bold text-lavender-dark">
                  {resultData.monthlyCost}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-sage font-semibold mb-1">Timeline</p>
                <p className="text-lg font-semibold text-sage-dark">
                  {resultData.timeline}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lavender-dark mb-3">Best for</h3>
            <div className="flex flex-wrap gap-2">
              {resultData.bestFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-lavender-light text-lavender-dark rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sage-dark mb-4">
            <span className="font-semibold">Can you edit it yourself?</span> {resultData.editable}
          </p>
          <button className="btn-primary w-full">Request Your Quote</button>
        </div>

        <button
          onClick={() => {
            setCurrentQuestion(0);
            setAnswers({});
            setResult(null);
          }}
          className="btn-outline w-full"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-lavender-dark h-2 rounded-full transition-all duration-300"
          style={{
            width: `${((currentQuestion + 1) / quizData.questions.length) * 100}%`,
          }}
        ></div>
      </div>

      <div>
        <p className="text-sm text-lavender font-semibold mb-2">
          Question {currentQuestion + 1} of {quizData.questions.length}
        </p>
        <h2 className="text-2xl font-bold text-lavender-dark mb-2">{question.text}</h2>
        <p className="text-gray-600">{question.subtitle}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = (answers[currentQuestion] || []).includes(option.id);
          const InputType = question.type === "radio" ? "radio" : "checkbox";

          return (
            <label
              key={option.id}
              className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition ${
                isSelected
                  ? "border-lavender-dark bg-lavender-light"
                  : "border-gray-200 bg-white hover:border-lavender-light"
              }`}
            >
              <input
                type={InputType}
                name={`question-${currentQuestion}`}
                value={option.id}
                checked={isSelected}
                onChange={() => handleAnswer(option.id)}
                className="w-5 h-5 cursor-pointer"
              />
              <span
                className={`font-medium ${
                  isSelected ? "text-lavender-dark" : "text-sage-dark"
                }`}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="btn-outline flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={(answers[currentQuestion] || []).length === 0}
          className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === quizData.questions.length - 1 ? "See Results" : "Next"}
        </button>
      </div>
    </div>
  );
}
