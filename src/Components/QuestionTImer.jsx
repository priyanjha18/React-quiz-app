import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setInterval(
      () => setRemainingTime((prevRemainingTime) => prevRemainingTime - 10),
      10
    );
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const newTimer = setTimeout(onTimeOut, timeout);
    return ()=>{clearTimeout(newTimer)}
  }, [timeout, onTimeOut]);

  return (
    <progress id="question-time" value={remainingTime} max={timeout}></progress>
  );
}
