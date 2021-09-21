import "./Pin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const Pin = (props) => {
  const { name, position } = props;
  return (
    <div className="pinContainer" style={{ left: position.x, top: position.y }}>
      <FontAwesomeIcon icon={faMapPin} className="pin" />
      <p>{name}</p>
    </div>
  );
};

export default Pin;
