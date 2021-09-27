import style from "./Leaderboard.module.css";
import LeaderListing from "./LeaderListing";
import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  query,
  getFirestore,
  orderBy,
  limit,
} from "firebase/firestore";

const Leaderboard = (props) => {
  const { count, panel } = props;
  const [scores, setScores] = useState(null);
  useEffect(() => {
    const fetchScores = async () => {
      const scoreQuery = query(
        collection(getFirestore(), `${panel}LeaderBoard`),
        orderBy("time", "asc"),
        limit(count)
      );
      const scoreSnap = await getDocs(scoreQuery);
      const scoreArr = [];
      scoreSnap.forEach((score) => {
        scoreArr.push({ ...score.data(), id: score.id });
      });
      setScores(scoreArr);
    };
    fetchScores();
  }, [count, panel]);

  return (
    <ul className={style.leaderboard}>
      {scores
        ? scores.map((score) => {
            return (
              <LeaderListing
                key={score.id}
                name={score.name}
                time={score.time}
              />
            );
          })
        : null}
    </ul>
  );
};

export default Leaderboard;
