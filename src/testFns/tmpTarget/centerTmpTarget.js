import targetFactory from "../targetFactory";

const mamaBird = targetFactory(
  "mamaBird",
  "imgSrc",
  "A mama bird feeding her young",
  "easy",
  { origin: { x: 2023, y: 3575 }, size: 500 }
);

const flyFishing = targetFactory(
  "flyFishing",
  "imgSrc",
  "Cathing a flying fish",
  "medium",
  { origin: { x: 3793, y: 507 }, size: 200 }
);

const waterFountain = targetFactory(
  "waterFountain",
  "imgSrc",
  "Having a drink at the water fountain",
  "hard",
  { origin: { x: 2301, y: 1280 }, size: 50 }
);

const targetPool = [mamaBird, flyFishing, waterFountain];

export default targetPool;
