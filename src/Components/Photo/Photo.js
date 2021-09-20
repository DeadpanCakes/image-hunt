import "./Photo.css";
import { useState } from "react";
import Target from "../Target/Target";
import Dropdown from "../Dropdown/Dropdown";

const Photo = (props) => {
  const { imgSrc, imgWidth, imgHeight, targetPool } = props;
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
      {lastClickCoords ? <Target coords={lastClickCoords} /> : null};
      {lastClickCoords ? (
        <Dropdown coords={lastClickCoords} targets={targetPool} />
      ) : null}
      ;
    </div>
  );
};

export default Photo;
