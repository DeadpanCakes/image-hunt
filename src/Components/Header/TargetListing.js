const TargetListing = (props) => {
  const { target, targetIsFound } = props;
  const styling = {
    textDecoration: targetIsFound ? "line-through" : "none",
  };
  return <li style={styling}>{target.desc}</li>;
};

export default TargetListing;
