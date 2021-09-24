import "./Dropdown.css";
import DropdownSelection from "./DropdownSelection";

const Dropdown = (props) => {
  const { clearCoords, coords, targets, findTarget, markPin } = props;
  const style = {
    position: "absolute",
    left: coords.x - 25,
    top: coords.y + 50,
  };
  return (
    <div style={style} className="dropDown">
      {targets.map((target) => {
        return (
          <DropdownSelection
            key={target.name}
            target={target}
            targetBox={{ origin: coords, size: 50 }}
            findTarget={findTarget}
            markPin={markPin}
            clearCoords={clearCoords}
          />
        );
      })}
    </div>
  );
};

export default Dropdown;
