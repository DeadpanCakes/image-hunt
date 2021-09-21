import { v4 as uuid } from "uuid";

const DropdownSelection = (props) => {
  const { findTarget, markPin, target, targetBox } = props;
  const { position } = target;
  const checkIfTargeted = (coords) => {
    const topLeft = {
      x: position.origin.x - position.size / 2,
      y: position.origin.y + position.size / 2,
    };
    const bottomRight = {
      x: position.origin.x + position.size / 2,
      y: position.origin.y - position.size / 2,
    };
    const isWithinX = coords.x > topLeft.x && coords.x < bottomRight.x;
    const isWithinY = coords.y < topLeft.y && coords.y > bottomRight.y;
    return isWithinX && isWithinY;
  };

  const doBoxesOverlap = (origin, size) => {
    const topLeft = { x: origin.x - size / 2, y: origin.y + size / 2 };
    const topRight = { x: origin.x + size / 2, y: origin.y + size / 2 };
    const bottomRight = {
      x: origin.x + size / 2,
      y: origin.y - size / 2,
    };
    const bottomLeft = { x: origin.x - size / 2, y: origin.y - size / 2 };
    return (
      checkIfTargeted(topLeft) ||
      checkIfTargeted(topRight) ||
      checkIfTargeted(bottomRight) ||
      checkIfTargeted(bottomLeft) ||
      checkIfTargeted(origin)
    );
  };

  const handleClick = () => {
    let isCorrect
    if (doBoxesOverlap({x: targetBox.origin.x, y: targetBox.origin.y}, targetBox.size)) {
      findTarget(target.id);
      isCorrect = true
    } else {
      isCorrect = false
    }
    const newPin = {
      id: uuid(),
      position: { x: targetBox.origin.x, y: targetBox.origin.y },
      name: target.desc,
      isCorrect: isCorrect,
    };
    markPin(newPin);
  };
  return <button onClick={handleClick}>{target.desc}</button>;
};

export default DropdownSelection;
