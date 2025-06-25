import { useRef } from "react";
export default function Answers({answers,selectedAnswers,answerState,onSelect}){
    
  const shuffleAnswer = useRef();
    if (!shuffleAnswer.current) {
        shuffleAnswer.current = [...answers];
        shuffleAnswer.current.sort(() => Math.random() - 0.5);
      }
    return (
        <ul id="answers">
          {shuffleAnswer.current.map((answer) => {
            const isSelected=selectedAnswers === answer;
            let cssClasses="";
            if (answerState==="answered" && isSelected){
                cssClasses="selected";
            }
            if((answerState==="correct" || answerState=="wrong") && isSelected){
                cssClasses=answerState;

            }
            return (
            <li key={answer} className="answer">
              <button className={cssClasses} onClick={() => onSelect(answer)}>
                {answer}
              </button>
            </li>)
          })}
        </ul>
    )
}