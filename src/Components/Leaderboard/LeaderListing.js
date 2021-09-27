import formatTime from "../../testFns/formatTime.js/formatTime";
import style from "./LeaderListing.module.css";

const LeaderListing = (props) => {
  const { name, time } = props;
  return (
    <li className={style.leaderListing}>
      <p>{name}</p>
      <p>{formatTime(time)}</p>
    </li>
  );
};

export default LeaderListing;
