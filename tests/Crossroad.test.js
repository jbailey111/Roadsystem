const Car = require("../Car");
const xr = require("../Crossroad");
const segment = require("../Segment");

test("It initialises a cross road", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  const crossRoad = new xr(segment1, segment2);
  expect(crossRoad).toBeTruthy();
});

test("It can insert itself between two segments", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  segment1.setNext(segment2);
  const crossRoad = new xr(segment1, segment2);
  expect(segment1.next).toBe(crossRoad);
  expect(segment2.prev).toBe(crossRoad);
});

test("It sets an exit as east and west", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  const crossRoad = new xr(segment1, segment2);
  expect(crossRoad.east).toBe(segment1);
  expect(crossRoad.west).toBe(segment2);
});

test("It adds a new northbound exit", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  const crossRoad = new xr(segment1, segment2);
  const segment3 = new segment(crossRoad);
  crossRoad.addNorth(segment3);
  expect(crossRoad.north).toBe(segment3);
  expect(segment3.prev).toBe(crossRoad);
});

test("It adds a new southbound exit", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  const crossRoad = new xr(segment1, segment2);
  const segment3 = new segment(crossRoad);
  crossRoad.addSouth(segment3);
  expect(crossRoad.south).toBe(segment3);
  expect(segment3.prev).toBe(crossRoad);
});

test("It directs a car arriving from the west to other directions", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  const crossRoad = new xr(segment1, segment2);
  let car = new Car(segment1);
  car.moveSegment();
  expect(car.direction).toBe("e");
  expect(car.position.prev).toBe(crossRoad);
  expect(car.position).toBe(segment2);
  car = new Car(segment1);
  const segment3 = new segment(crossRoad);
  crossRoad.addNorth(segment3);
  car.moveSegment();
  expect(car.direction).toBe("n");
  expect(car.position.prev).toBe(crossRoad);
  expect(car.position).toBe(segment3);
  const segment4 = new segment(crossRoad);
  crossRoad.addSouth(segment4);
  car = new Car(segment1);
  car.moveSegment();
  expect(car.direction).toBe("s");
  expect(car.position.prev).toBe(crossRoad);
  expect(car.position).toBe(segment4);
});

test("It directs a car arriving from the north to other directions", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  const crossRoad = new xr(segment1, segment2);
  const segment3 = new segment(crossRoad);
  crossRoad.addNorth(segment3);
  let car = new Car(segment3);
  car.direction = "s";
  car.moveSegment();
  expect(car.direction).toBe("e");
  expect(car.position.id).toBe(segment2.id);
  car = new Car(segment3);
  const segment4 = new segment(crossRoad);
  crossRoad.addSouth(segment4);
  car.direction = "s";
  car.moveSegment();
  expect(car.direction).toBe("w");
  expect(car.position.id).toBe(segment4.id);
  car = new Car(segment3);
  car.direction = "s";
  car.moveSegment();
  expect(car.direction).toBe("s");
  expect(car.position.id).toBe(segment1.id);
});

test("It directs a car arriving from the south to other directions", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  const crossRoad = new xr(segment1, segment2);
  const segment3 = new segment(crossRoad);
  const segment4 = new segment(crossRoad);
  crossRoad.addNorth(segment3);
  crossRoad.addSouth(segment4);
  let car = new Car(segment4);
  car.direction = "n";
  car.moveSegment();
  expect(car.direction).toBe("e");
  expect(car.position.id).toBe(segment2.id);
  car = new Car(segment3);
  car.direction = "n";
  car.moveSegment();
  expect(car.direction).toBe("w");
  expect(car.position.id).toBe(segment4.id);
  car = new Car(segment3);
  car.direction = "n";
  car.moveSegment();
  expect(car.direction).toBe("n");
  expect(car.position.id).toBe(segment1.id);
});

test("It directs a car arriving from the east to other directions", () => {
  const segment1 = new segment();
  const segment2 = new segment(segment1);
  const crossRoad = new xr(segment1, segment2);
  const segment3 = new segment(crossRoad);
  const segment4 = new segment(crossRoad);
  crossRoad.addNorth(segment3);
  crossRoad.addSouth(segment4);
  let car = new Car(segment2);
  car.direction = "w";
  car.moveSegment();
  expect(car.direction).toBe("e");
  expect(car.position.id).toBe(segment2.id);
  car = new Car(segment2);
  car.direction = "w";
  car.moveSegment();
  expect(car.direction).toBe("n");
  expect(car.position.id).toBe(segment4.id);
  car = new Car(segment2);
  car.direction = "w";
  car.moveSegment();
  expect(car.direction).toBe("s");
  expect(car.position.id).toBe(segment1.id);
});
