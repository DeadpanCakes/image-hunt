import "./LevelSelect.css";
import gardenImg from "../../Assets/gardenImg.png";

const LevelSelect = (props) => {
  const { choosePanel } = props;
  const style = {
    backgroundImage: `url(${gardenImg})`,
    minWidth: 1587,
    minHeight: 893,
  };
  const handleClick = (xValue) => {
    let panel;
    if (xValue < 316) {
      panel = "left";
    } else if (xValue > 1112) {
      panel = "right";
    } else {
      panel = "center";
    }
    choosePanel(panel);
  };
  return (
    <div
      className="levelSelect"
      style={style}
      onClick={(e) => {
        handleClick(e.pageX);
      }}
    ></div>
  );
};

export default LevelSelect;
