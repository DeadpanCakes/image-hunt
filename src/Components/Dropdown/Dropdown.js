import "./Dropdown.css";
import DropdownSelection from "./DropdownSelection";

const Dropdown = (props) => {
  const { coords, targets } = props;
  const style = {
    position: "absolute",
    left: coords.x - 25,
    top: coords.y + 50,
  };
  console.log(targets);
  return (
    <div style={style} className="dropDown">
      {targets.map((target) => {
        return (
          <DropdownSelection
            target={target}
            targetBox={{ origin: coords, size: 50 }}
          />
        );
      })}
    </div>
  );
};

export default Dropdown;
