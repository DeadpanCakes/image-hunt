import { useState, useEffect } from "react";
import formatTime from "../../testFns/formatTime.js/formatTime";

const Timer = (props) => {
  const { isGameOver } = props;
  const [currentTime, setCurrentTime] = useState(0);
  const countSecond = () => {
    setCurrentTime((currTime) => currTime + 1);
  };

  useEffect(() => {
    const timer = setInterval(countSecond, 1000);
    if (isGameOver) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isGameOver]);

  return <h3 className="timer">{formatTime(currentTime)}</h3>;
};
export default Timer;
