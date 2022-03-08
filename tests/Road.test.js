const roadclass = require("../Road");

describe("Road", () => {
  beforeEach(() => {
    road = new roadclass();
  });

  test("It initilises a road class", () => {
    expect(road).toBeTruthy();
  });

  test("It has Cross roads on each end of the road seperated with one segement between them", () => {
    expect(road.head.type).toBe("xr");
    expect(road.tail.type).toBe("xr");
    expect(road.head.east.type).toBe("seg") &&
      expect(road.tail.west.type).toBe("seg");
  });

  test("It populates the road with x amounts of segments", () => {
    road.populateSegments(10);
    expect(road.calculateLength()).toBe(11);
  });

  test("It adds a segment to the road", () => {
    road.addSegment();
    expect(road.calculateLength()).toBe(2);
    road.populateSegments(10);
    expect(road.calculateLength()).toBe(12);
  });

  test("It finds a space for a car and adds it to the road", () => {
    const car = road.addCar();
    expect(car).toBeTruthy();
    expect(car.position.type).toBe("seg");
    expect(car.position.leftOccupied).toBe(true);
    expect(car.position.rightOccupied).toBe(false);
    const car2 = road.addCar();
    expect(car2.position.rightOccupied).toBe(true) &&
      expect(car2.position.leftOccupied).toBe(true);
    const car3 = road.addCar();
    expect(car3.position.leftOccupied).toBe(true) &&
      expect(car3.position.rightOccupied).toBe(false) &&
      expect(car3.position.prev.type).toBe("seg");
  });
});
