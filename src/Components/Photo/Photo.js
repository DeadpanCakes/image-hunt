import "./Photo.css";
import { useState } from "react";
import Target from "../Target/Target";
import Dropdown from "../Dropdown/Dropdown";
import Pin from "../Pin/Pin";

const Photo = (props) => {
  const {
    findTarget,
    imgSrc,
    imgWidth,
    imgHeight,
    pinsMarked,
    markPin,
    targetPool,
  } = props;
  const [lastClickCoords, setLastClickCoords] = useState(null);

  const photoStyle = {
    backgroundImage: `url(${imgSrc})`,
    minWidth: imgWidth,
    height: imgHeight,
  };

  const handleClick = (coords) => {
    setLastClickCoords((lastCoords) => {
      if (!lastCoords) {
        return coords;
      }
      return null;
    });
  };

  return (
    <div
      className="photo"
      style={photoStyle}
      onClick={(e) => {
        if (e.target.className === "photo") {
          handleClick({ x: e.pageX, y: e.pageY });
        }
      }}
    >
      {lastClickCoords ? <Target coords={lastClickCoords} /> : null}
      {lastClickCoords && targetPool ? (
        <Dropdown
          coords={lastClickCoords}
          targets={targetPool}
          findTarget={findTarget}
          markPin={markPin}
        />
      ) : null}
      <div className="pinsContainer">
        {pinsMarked.map((pinMarked) => {
          return (
            <Pin
              key={pinMarked.id}
              position={pinMarked.position}
              name={pinMarked.name}
              isCorrect={pinMarked.isCorrect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Photo;
