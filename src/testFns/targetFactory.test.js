import targetFactory from "./targetFactory";

it("returns an object with imgSrc, desc, and difficulty", () => {
  const target = targetFactory("imgUrl", "A target", "hard", {
    origin: { x: 500, y: 550 },
    size: 300,
  });
  expect(target.imgSrc).toBe("imgUrl");
  expect(target.desc).toBe("A target");
  expect(target.difficulty).toBe("hard");
});

it("can check if a given coordinate is within its bounds", () => {
  const target = targetFactory("imgUrl", "A target", "hard", {
    origin: { x: 1200, y: 700 },
    size: 300,
  });
  const coords1 = { x: 1160, y: 800 };
  const coords2 = { x: 5, y: 10 };

  expect(target.checkIfTargeted(coords1)).toBeTruthy();
  expect(target.checkIfTargeted(coords2)).toBeFalsy();
});

it("can check if given box with properties origin and size is overlapping with self", () => {
  const target = targetFactory("imgUrl", "A target", "hard", {
    origin: { x: 1200, y: 700 },
    size: 300,
  });
  const box1 = {origin: {x: 1300, y: 900 }, size: 200};
  const box2 = {origin: {x: 5, y: 10}, size: 5};
  const box3 = {origin: {x: 1200, y: 700}, size: 300};

  expect(target.doBoxesOverlap(box1.origin, box1.size)).toBeTruthy();
  expect(target.doBoxesOverlap(box2.origin, box2.size)).toBeFalsy();
  expect(target.doBoxesOverlap(box3.origin, box3.size)).toBeTruthy();
});
