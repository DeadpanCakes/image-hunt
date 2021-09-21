import "./LevelSelect.css";
import gardenImg from "../../Assets/gardenImg.png";
import { Link } from "react-router-dom";

const LevelSelect = () => {
  const style = {
    backgroundImage: `url(${gardenImg})`,
    minWidth: 1587,
    minHeight: 893,
  };

  return (
    <div className="levelSelect" style={style}>
      <Link to="/game/left" className="leftPanel levelOption">
        <div>
          <h2>Left</h2>
        </div>
      </Link>
      <Link to="/game/center" className="centerPanel levelOption">
        <div>
          <h2>Center</h2>
        </div>
      </Link>
      <Link to="/game/right" className="rightPanel levelOption">
        <div>
          <h2>Right</h2>
        </div>
      </Link>
    </div>
  );
};

export default LevelSelect;
