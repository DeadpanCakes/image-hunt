import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const useLeaderboard = (panel) => {
  const [scores, setScores] = useState(null);
  useEffect(() => {
    const fetchScores = async () => {
      const scoreQuery = query(
        collection(getFirestore(), "scores"),
        where("panel", "==", panel),
        orderBy("time", "asc")
      );
      const scoreSnap = await getDocs(scoreQuery);
      const scoreArr = [];
      scoreSnap.forEach((score) => {
        scoreArr.push({ ...score.data(), id: score.id });
      });
      setScores(scoreArr);
    };
    if (panel) {
      fetchScores();
    }
  }, [panel]);
  return scores;
};

export default useLeaderboard;
