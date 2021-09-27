import "./Game.css";
import { useEffect, useState } from "react";
import {
  deleteDoc,
  collection,
  getFirestore,
  getDoc,
  getDocs,
  query,
  addDoc,
} from "firebase/firestore";
import Header from "../Header/Header";
import Photo from "../Photo/Photo";
import panelImgs from "../../Assets/panels";
import Popup from "../Popup/Popup";
import Leaderboard from "../Leaderboard/Leaderboard";
import formatTime from "../../testFns/formatTime.js/formatTime";

const Game = (props) => {
  const { panel } = props;
  const { left, center, right } = panelImgs;
  const [timestamp, setTimestamp] = useState(null);
  const [targetPool, setTargetPool] = useState(null);
  const [panelImg, setPanelImg] = useState({
    imgSrc: center,
    dimensions: { x: 4080, y: 4300 },
  });
  const [targetsFound, setTargetsFound] = useState([]);
  const findTarget = (target) => {
    setTargetsFound((prevState) => {
      if (!prevState.includes(target)) {
        return prevState.concat(target);
      }
      return prevState;
    });
  };
  const [pinsMarked, setPinsMarked] = useState([]);
  const markPin = (pin) => {
    setPinsMarked((prevState) => prevState.concat(pin));
  };
  const [isGameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchTargets = async () => {
      try {
        const db = getFirestore();
        const targets = [];
        switch (panel) {
          case "left":
            const leftQuery = query(collection(db, "leftTargetPool"));
            const leftSnapshot = await getDocs(leftQuery);
            leftSnapshot.forEach((doc) => {
              targets.push({ ...doc.data(), id: doc.id });
            });
            setTargetPool(targets);
            break;
          case "center":
            const centerQuery = query(collection(db, "centerTargetPool"));
            const centerSnapshot = await getDocs(centerQuery);
            centerSnapshot.forEach((doc) => {
              targets.push({ ...doc.data(), id: doc.id });
            });
            setTargetPool(targets);
            break;
          case "right":
            const rightQuery = query(collection(db, "rightTargetPool"));
            const rightSnapshot = await getDocs(rightQuery);
            rightSnapshot.forEach((doc) => {
              targets.push({ ...doc.data(), id: doc.id });
            });
            setTargetPool(targets);
            break;
          default:
            return null;
        }
      } catch (error) {
        console.error(error);
      }
    };
    const determineImg = () => {
      switch (panel) {
        case "left":
          setPanelImg({ imgSrc: left, dimensions: { x: 1800, y: 4300 } });
          break;
        case "right":
          setPanelImg({ imgSrc: right, dimensions: { x: 1800, y: 4300 } });
          break;
        default:
          setPanelImg({ imgSrc: center, dimensions: { x: 4040, y: 4300 } });
      }
    };
    fetchTargets();
    determineImg();
  }, [left, center, right, panel]);

  useEffect(() => {
    //Only start timer once targets have been fetched
    if (targetPool) {
      const uploadTime = async () => {
        const timestamp = Date();
        const timestampRef = await addDoc(
          collection(getFirestore(), "timestamp"),
          {
            startTime: timestamp,
          }
        );
        setTimestamp(timestampRef);
      };
      uploadTime();
    }
  }, [targetPool]);

  useEffect(() => {
    if (targetPool) {
      const areAllTargetsFound = () => {
        const targetIDs = targetPool.map((target) => target.id);
        return targetIDs.every((targetID) => {
          return targetsFound.includes(targetID);
        });
      };

      if (areAllTargetsFound()) {
        setGameOver(true);
      }
    }
  }, [targetPool, targetsFound]);

  const [totalTime, setTotalTime] = useState(null);

  useEffect(() => {
    if (isGameOver && timestamp) {
      const findDuration = async () => {
        const endTime = new Date();
        const startTimeSnap = await getDoc(timestamp);
        const startTime = new Date(startTimeSnap.data().startTime);
        deleteDoc(timestamp);
        const duration = Math.floor((endTime - startTime) / 1000);
        const formattedDuration = formatTime(duration);
        setTotalTime(formattedDuration);
      };
      findDuration();
    }
  }, [timestamp, isGameOver]);

  return (
    <div className="game">
      <Header
        targetPool={targetPool}
        targetsFound={targetsFound}
        isGameOver={isGameOver}
      />
      <Photo
        imgSrc={panelImg.imgSrc}
        imgWidth={panelImg.dimensions.x}
        imgHeight={panelImg.dimensions.y}
        targetPool={targetPool}
        findTarget={findTarget}
        pinsMarked={pinsMarked}
        markPin={markPin}
      />
      {isGameOver && totalTime ? (
        <Popup>
          <h2>Congrats</h2>
          <p>Your total time was {totalTime}</p>
          <Leaderboard panel={panel} count={3} />
        </Popup>
      ) : null}
    </div>
  );
};

export default Game;
