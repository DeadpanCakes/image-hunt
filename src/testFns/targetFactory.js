const targetFactory = (name, imgSrc, desc, difficulty, position) => {
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
    const isWithinY = coords.y < topLeft.x && coords.y > bottomRight.y;
    return isWithinX && isWithinY;
  };

  const doBoxesOverlap = (origin, size) => {
    const topLeft = { x: origin.x - size / 2, y: origin.x + size / 2 };
    const topRight = { x: origin.x + size / 2, y: origin + size / 2 };
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
  return { name, imgSrc, desc, difficulty, position,checkIfTargeted, doBoxesOverlap };
};

export default targetFactory;
