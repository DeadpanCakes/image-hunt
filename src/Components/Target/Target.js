import "./Target.css";

const Target = (props) => {
  const { coords } = props;
  const style = {
    position: "absolute",
    left: coords.x - 25,
    top: coords.y - 25,
  };
  return <div className="target" style={style}></div>;
};

export default Target;
