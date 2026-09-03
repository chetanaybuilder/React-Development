import { useState } from "react";

import Header from "./components/header.jsx";
import MysteryQuestion from "./components/mysteryquestion.jsx";
import AnswerOptions from "./components/answer.jsx";
import Result from "./components/result.jsx";

function App() {
  // =========================
  // QUESTIONS DATA
  // =========================

  const questions = [
    {
      id: 1,
      mystery:
        "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
      options: ["A map", "A book", "A photograph", "A globe"],
      answer: "A map",
    },
    {
      id: 2,
      mystery: "I get wetter the more I dry. What am I?",
      options: ["A sponge", "A towel", "A cloud", "A river"],
      answer: "A towel",
    },
    {
      id: 3,
      mystery:
        "I have keys but no locks. I have space but no room. You can enter, but you cannot go inside. What am I?",
      options: ["A keyboard", "A house", "A piano", "A car"],
      answer: "A keyboard",
    },
    {
      id: 4,
      mystery: "The more you take, the more you leave behind. What am I?",
      options: ["Steps", "Money", "Time", "Photos"],
      answer: "Steps",
    },
    {
      id: 5,
      mystery: "I speak without a mouth and hear without ears. What am I?",
      options: ["A radio", "An echo", "A phone", "A speaker"],
      answer: "An echo",
    },
    {
      id: 6,
      mystery: "I am always in front of you but can never be seen. What am I?",
      options: ["The future", "Your shadow", "Air", "Tomorrow's weather"],
      answer: "The future",
    },
    {
      id: 7,
      mystery: "What has hands but cannot clap?",
      options: ["A robot", "A clock", "A statue", "A tree"],
      answer: "A clock",
    },
    {
      id: 8,
      mystery:
        "What can travel around the world while staying in one corner?",
      options: ["A satellite", "A stamp", "A plane", "A compass"],
      answer: "A stamp",
    },
    {
      id: 9,
      mystery: "I have one eye but cannot see. What am I?",
      options: ["A needle", "A camera", "A potato", "A storm"],
      answer: "A needle",
    },
    {
      id: 10,
      mystery: "What disappears as soon as you say its name?",
      options: ["Darkness", "Silence", "A secret", "A shadow"],
      answer: "Silence",
    },
  ];

  // =========================
  // STATE
  // =========================

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);

  // =========================
  // CURRENT QUESTION
  // =========================

  const question = questions[currentQuestion];

  // =========================
  // ANSWER FUNCTION
  // =========================

  function handleAnswer(selectedAnswer) {
    if (answered) {
      return;
    }

    setAnswered(true);

    if (selectedAnswer === question.answer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setQuizFinished(true);
        return;
      }

      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setFeedback("");
      setAnswered(false);
    }, 1000);
  }

  // =========================
  // RESTART FUNCTION
  // =========================

  function restartQuiz() {
    setScore(0);
    setCurrentQuestion(0);
    setQuizFinished(false);
    setFeedback("");
    setAnswered(false);
  }

  // =========================
  // MAIN APP SKELETON
  // =========================

  return (
    <div className="app">
      <Header />

      {!quizFinished && (
        <>
          <div className="quiz-info">
            <span>
              Question {currentQuestion + 1} / {questions.length}
            </span>

            <span>Score: {score}</span>
          </div>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${
                  ((currentQuestion + 1) / questions.length) * 100
                }%`,
              }}
            ></div>
          </div>

          <MysteryQuestion mystery={question.mystery} />

          <AnswerOptions
            options={question.options}
            onAnswer={handleAnswer}
            answered={answered}
          />

          {feedback === "correct" && (
            <div className="feedback correct">
              <strong>✓ Correct! +1</strong>
            </div>
          )}

          {feedback === "wrong" && (
            <div className="feedback wrong">
              <strong>✕ Wrong</strong>

              <span>
                Correct answer: {question.answer}
              </span>
            </div>
          )}
        </>
      )}

      {quizFinished && (
        <Result
          score={score}
          total={questions.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;