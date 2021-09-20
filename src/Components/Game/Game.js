import "./Game.css";
import { useEffect, useState } from "react";
import { collection, getFirestore, getDocs, query } from "firebase/firestore";
import Header from "../Header/Header";
import Photo from "../Photo/Photo";
import panelImgs from "../../Assets/panels";

const Game = (props) => {
  const { panel } = props;
  const { left, center, right } = panelImgs;

  const [targetPool, setTargetPool] = useState(null);
  const [panelImg, setPanelImg] = useState({
    imgSrc: center,
    dimensions: { x: 4080, y: 4300 },
  });
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
              targets.push(doc.data());
            });
            setTargetPool(targets);
            break;
          case "center":
            const centerQuery = query(collection(db, "centerTargetPool"));
            const centerSnapshot = await getDocs(centerQuery);
            centerSnapshot.forEach((doc) => {
              targets.push(doc.data());
            });
            setTargetPool(targets);
            break;
          case "right":
            const rightQuery = query(collection(db, "rightTargetPool"));
            const rightSnapshot = await getDocs(rightQuery);
            rightSnapshot.forEach((doc) => {
              targets.push(doc.data());
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

  return (
    <div className="game">
      <Header />
      <Photo
        imgSrc={panelImg.imgSrc}
        imgWidth={panelImg.dimensions.x}
        imgHeight={panelImg.dimensions.y}
        targetPool={targetPool}
      />
    </div>
  );
};

export default Game;
