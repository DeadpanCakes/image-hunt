import "./Photo.css";
import { useState } from "react";
import Target from "../Target/Target";

const Photo = (props) => {
  const { imgSrc, imgWidth, imgHeight } = props;
  const [targetPosition, setTargetPosition] = useState(null);

  const photoStyle = {
    backgroundImage: `url(${imgSrc})`,
    width: imgWidth,
    height: imgHeight,
  };

  const handleClick = (coords) => {
    setTargetPosition(coords);
  };

  return (
    <div
      className="photo"
      style={photoStyle}
      onClick={(e) => {
        handleClick({ x: e.pageX, y: e.pageY });
      }}
    >
      {targetPosition ? <Target coords={targetPosition} /> : null}
    </div>
  );
};

export default Photo;
