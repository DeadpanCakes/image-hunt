import targetFactory from "../targetFactory";
const owl = targetFactory("owl", "imgSrc", "An owl", "medium", {
  origin: { x: 931, y: 2122 },
  size: 60,
});

const reader = targetFactory("reader", "imgSrc", "A reading platypus", "easy", {
  origin: { x: 1638, y: 3980 },
  size: 150,
});

const fruit = targetFactory("fruit", "imgSrc", "A fallen fruit", "hard", {
  origin: { x: 100, y: 3241 },
  size: 60,
});

const targetPool = [owl, reader, fruit];

export default targetPool;
