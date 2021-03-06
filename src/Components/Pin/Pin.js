import "./Pin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faTimes } from "@fortawesome/free-solid-svg-icons";

const Pin = (props) => {
  const { name, position, isCorrect } = props;
  return (
    <div
      className="pinContainer"
      style={{
        left: position.x - 5,
        top: position.y - 25,
        color: isCorrect ? "white" : "red",
      }}
    >
      <div className="iconContainer">
        <FontAwesomeIcon
          icon={isCorrect ? faMapPin : faTimes}
          className={isCorrect ? "pin correct" : "pin incorrect"}
        />
        <p
          className={isCorrect ? "name correct" : "name incorrect"}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default Pin;
