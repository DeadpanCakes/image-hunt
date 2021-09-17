const Dropdown = (props) => {
  const { coords } = props;
  const style = {
    position: "absolute",
    left: coords.x - 25,
    top: coords.y + 50,
  };
  return (
    <div style={style}>
      {props.children}
      <button>Placeholder</button>
    </div>
  );
};

export default Dropdown;
