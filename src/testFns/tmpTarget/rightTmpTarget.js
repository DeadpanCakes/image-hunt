import targetFactory from "../targetFactory";

const egg = targetFactory(
  "egg",
  "imgSrc",
  "A perfectly balanced egg",
  "medium",
  { origin: { x: 638, y: 2314 }, size: 60 }
);

const boredom = targetFactory(
  "boredorm",
  "imgSrc",
  "A very bored individual",
  "easy",
  { origin: { x: 709, y: 1839 }, size: 125 }
);

const plagueDoctor = targetFactory(
  "plague doctor",
  "imgSrc",
  "A plague doctor",
  "hard",
  { origin: { x: 1755, y: 1578 }, size: 60 }
);

const targetPool = [egg, boredom, plagueDoctor];

export default targetPool;
