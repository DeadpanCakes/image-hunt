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
        <div className="levelContents">
          <h2>Left</h2>
          <ul>
            <li>A fallen fruit</li>
            <li>An owl</li>
            <li>A reading...platypus?</li>
          </ul>
        </div>
      </Link>
      <Link to="/game/center" className="centerPanel levelOption">
        <div className="levelContents">
          <h2>Center</h2>
          <ul>
            <li>A mama bird, feeding her young</li>
            <li>Catching a flying fish</li>
            <li>Having a drink at the water fountain</li>
          </ul>
        </div>
      </Link>
      <Link to="/game/right" className="rightPanel levelOption">
        <div className="levelContents">
          <h2>Right</h2>
          <ul>
            <li>A perfectly-balanced egg</li>
            <li>A plague doctor</li>
            <li>A very bored individual</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default LevelSelect;
