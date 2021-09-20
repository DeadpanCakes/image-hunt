import "./LevelSelect.css";
import gardenImg from "../../Assets/gardenImg.png";

const LevelSelect = () => {
  const style = {
    backgroundImage: `url(${gardenImg})`,
    minWidth: 1587,
    minHeight: 893,
  };
  return <div className="levelSelect" style={style}></div>;
};

export default LevelSelect;
