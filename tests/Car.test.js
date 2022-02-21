const Car = require("../Car");
const Segment = require("../Segment");

segment = new Segment();
segment.setNext(new Segment(segment));

car = new Car(segment);

test("It initialises a Car", () => {
  expect(car).toBeTruthy();
});

test("It occupies the current Segment of the Car", () => {
  car.occupySegment();
  expect(segment.leftOccupied).toBe(true);
});

test("It moves the Car to the next Segment", () => {
  car.moveSegment();
  expect(car.position.next).toBeNull();
  expect(car.position.prev).toBeTruthy();
});

test("It changes direction when it reaches the end of the road", () => {
  car.moveSegment();
  expect(car.direction).toBe("w");
  expect(car.position.next).toBeNull();
  expect(car.position.prev).toBeTruthy();
});
