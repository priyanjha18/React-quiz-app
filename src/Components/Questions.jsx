import QuestionTimer from "./QuestionTImer";
import Answers from "./Answers";
import { useState } from "react";
export default function Questions({questionText,answer,answerState,onSelectAnswer,selectedAnswer,onSkipAnswer}) {
   const [answer,setAnswer]= useState({
        selectedAnswer:"",
        isCorrect:null
    })
    function handleSelectAnswer(answer){

    }
  return (
    <div id="questions">
      <QuestionTimer
        timeout={8000}
        onTimeOut={onSkipAnswer}
      ></QuestionTimer>
      <h2>{questionText}</h2>
      <Answers
        answers={answer}
        selectedAnswers={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      ></Answers>
    </div>
  );
}
