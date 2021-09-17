const DropdownSelection = (props) => {
  const { target } = props;
  return (
    <div>
      <p>{target.name}</p>
    </div>
  );
};

export default DropdownSelection;
