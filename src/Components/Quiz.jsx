import { useState, useCallback, useRef } from "react";
import QUESTION from "../questions";
import QuizCompleteImg from "../assets/quiz-complete.png";
import Questions from "./Questions";
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTION[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => setAnswerState(""), 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  if (quizIsComplete) {
    console.log(userAnswer);
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="trophy-icon"></img>
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Questions
      key={activeQuestionIndex}
        questionText={QUESTION[activeQuestionIndex].text}
        answer={QUESTION[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
            onSkipAnswer={handleSkipAnswer}
      ></Questions>
    </div>
  );
}
