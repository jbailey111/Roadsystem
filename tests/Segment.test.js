const Segment = require("../Segment");

test("It initilises a Segment class", () => {
  segment = new Segment();
  expect(segment).toBeTruthy();
});

test("It changes the occupation status of a Segment", () => {
  segment.changeStatus("e");
  expect(segment.leftOccupied).toBe(true);
  segment.changeStatus("n");
  expect(segment.leftOccupied).toBe(false);
  segment.changeStatus("s");
  expect(segment.rightOccupied).toBe(true);
  segment.changeStatus("w");
  expect(segment.rightOccupied).toBe(false);
});

test("It can add another Segment to be next", () => {
  segment.setNext(new Segment(segment));
  expect(segment.next).toBeTruthy();
});

test("It sets the previous Segment when adding a new Segment", () => {
  segment = segment.next;
  expect(segment.prev).toBeTruthy();
});

test("It has a second side of the road that can be occupied", () => {});
