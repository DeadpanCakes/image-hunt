import { useState, useEffect } from "react";

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

  const convertTime = (seconds) => {
    let hours;
    let minutes;
    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    } else {
      minutes = "00";
    }
    if (minutes >= 60) {
      hours = Math.floor(minutes / 60);
      if (hours < 10) {
        minutes = `0${hours}`;
      }
    } else {
      hours = "00";
    }
    return `${hours}: ${minutes}: ${
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
    }`;
  };

  return <h3 className="timer">{convertTime(currentTime)}</h3>;
};
export default Timer;
