const Car = require("../Car");
const xr = require("../Crossroad");
const segment = require("../Segment");

describe("Crossroads", () => {
  beforeEach(() => {
    segment1 = new segment();
    segment2 = new segment();
    segment3 = new segment();
    segment4 = new segment();
    crossRoad = new xr();
    crossRoad.addEast(segment1);
    crossRoad.addWest(segment2);
    crossRoad.addNorth(segment3);
    crossRoad.addSouth(segment4);
  });

  test("It initialises a cross road", () => {
    expect(crossRoad).toBeTruthy();
  });

  test("It can attach four segments together", () => {
    expect(crossRoad.east).toBe(segment1);
    expect(crossRoad.west).toBe(segment2);
    expect(crossRoad.north).toBe(segment3);
    expect(crossRoad.south).toBe(segment4);
  });

  test("It directs a car arriving from the east to other directions", () => {
    let car = new Car(segment1);
    car.direction = "w";
    car.moveSegment();
    expect(car.direction).toBe("n");
    car = new Car(segment1);
    car.direction = "w";
    car.moveSegment();
    expect(car.direction).toBe("s");
    car = new Car(segment1);
    car.direction = "w";
    car.moveSegment();
    expect(car.direction).toBe("w");
    car = new Car(segment1);
    car.direction = "w";
    car.moveSegment();
    expect(car.direction).toBe("e");
  });

  test("It directs a car arriving from the north to other directions", () => {
    let car = new Car(segment3);
    car.direction = "s";
    car.moveSegment();
    expect(car.direction).toBe("w");
    car = new Car(segment3);
    car.direction = "s";
    car.moveSegment();
    expect(car.direction).toBe("e");
    car = new Car(segment3);
    car.direction = "s";
    car.moveSegment();
    expect(car.direction).toBe("s");
    car = new Car(segment3);
    car.direction = "s";
    car.moveSegment();
    expect(car.direction).toBe("n");
  });

  test("It directs a car arriving from the south to other directions", () => {
    let car = new Car(segment4);
    car.direction = "n";
    car.moveSegment();
    expect(car.direction).toBe("e");
    car = new Car(segment4);
    car.direction = "n";
    car.moveSegment();
    expect(car.direction).toBe("w");
    car = new Car(segment4);
    car.direction = "n";
    car.moveSegment();
    expect(car.direction).toBe("n");
    car = new Car(segment4);
    car.direction = "n";
    car.moveSegment();
    expect(car.direction).toBe("s");
  });

  test("It directs a car arriving from the east to other directions", () => {
    let car = new Car(segment2);
    car.direction = "e";
    car.moveSegment();
    expect(car.direction).toBe("n");
    car = new Car(segment2);
    car.direction = "e";
    car.moveSegment();
    expect(car.direction).toBe("s");
    car = new Car(segment2);
    car.direction = "e";
    car.moveSegment();
    expect(car.direction).toBe("e");
    car = new Car(segment2);
    car.direction = "e";
    car.moveSegment();
    expect(car.direction).toBe("w");
  });

  test("It runs properly after using the choose function", () => {
    let car = new Car(segment2);
    crossRoad.north.next = new segment();
    car.direction = "e";
    car.moveSegment();
    expect(car.direction).toBe("n") && expect(car.position.next).toBeTruthy();
    car.moved = false;
    car.moveSegment();
    expect(car.position.next).toBeNull() &&
      expect(car.position.prev).toBe(segment3);
  });

  test("It doesnt erase a segment with the add functions", () => {
    expect(crossRoad.addEast(segment4)).toBe(false);
    expect(crossRoad.addNorth(segment4)).toBe(false);
    expect(crossRoad.addSouth(segment4)).toBe(false);
    expect(crossRoad.addWest(segment4)).toBe(false);
  });
});
