const roadclass = require("../Road");

test("It initilises a road class", () => {
  road = new roadclass();
  expect(road).toBeTruthy();
});

test("It generates a road with 10 segments", () => {
  road.generateSegments();
  expect(road.calculateLength()).toBe(10);
});

test("It adds a new road segment", () => {
  road.addSegment();
  expect(road.calculateLength()).toBe(11);
});

test("It initialises a car to the first segment of the Road", () => {
  road.addCar();
  expect(road.cars.length).toBe(1);
  expect(road.head.leftOccupied).toBe(true);
});

test("It logs the Road Segments to the console", () => {
  expect(road.logSegments()).toBe("▲----------\n-----------");
});

test("It steps the simulation moving the car", () => {
  road.step();
  expect(road.logSegments()).toBe("-▲---------\n-----------");
  expect(road.head.leftOccupied).toBe(false);
});

test("It can initalises a second car on the road", () => {
  road.addCar();
  expect(road.cars.length).toBe(2);
  expect(road.head.leftOccupied).toBe(true);
  expect(road.logSegments()).toBe("▲▲---------\n-----------");
});

test("It initialises a third car in the third position", () => {
  road.addCar();
  expect(road.cars.length).toBe(3);
  expect(road.head.next.next.leftOccupied).toBe(true);
  expect(road.logSegments()).toBe("▲▲▲--------\n-----------");
});

test("It moves all three cars", () => {
  road.step();
  let current = road.head.next;
  for (let i = 0; i < 3; i++) {
    expect(current.leftOccupied).toBe(true);
  }
  expect(road.logSegments()).toBe("-▲▲▲-------\n-----------");
});
