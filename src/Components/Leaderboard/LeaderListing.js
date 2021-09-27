import style from "./LeaderListing.module.css";

const LeaderListing = (props) => {
  const { name, time } = props;
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
  return (
    <li className={style.leaderListing}>
      <p>{name}</p>
      <p>{convertTime(time)}</p>
    </li>
  );
};

export default LeaderListing;
