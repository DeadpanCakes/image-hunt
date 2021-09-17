import "./Photo.css";
import { useState } from "react";
import Target from "../Target/Target";
import Dropdown from "../Dropdown/Dropdown";

const Photo = (props) => {
  const { imgSrc, imgWidth, imgHeight } = props;
  const [lastClickCoords, setLastClickCoords] = useState(null);

  const photoStyle = {
    backgroundImage: `url(${imgSrc})`,
    width: imgWidth,
    height: imgHeight,
  };

  const handleClick = (coords) => {
    setLastClickCoords(coords);
  };

  return (
    <div
      className="photo"
      style={photoStyle}
      onClick={(e) => {
        handleClick({ x: e.pageX, y: e.pageY });
      }}
    >
      {lastClickCoords ? <Target coords={lastClickCoords} /> : null};
      {lastClickCoords ? <Dropdown coords={lastClickCoords} /> : null};
    </div>
  );
};

export default Photo;
