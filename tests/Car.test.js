const Car = require("../Car");
const Segment = require("../Segment");

describe("Car", () => {
  beforeEach(() => {
    segment = new Segment();
    segment.setNext(new Segment(segment));

    car = new Car(segment);
  });

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
    car.moved = false;
    car.moveSegment();
    expect(car.direction).toBe("w");
    expect(car.position.next).toBeNull();
    expect(car.position.prev).toBeTruthy();
  });

  test("It doesnt move if a car is infront of it", () => {
    car2 = new Car(segment.next);
    car2.occupySegment();
    expect(car.position.next.leftOccupied).toBe(true);
    car.moveSegment();
    expect(car.position.next.leftOccupied).toBe(true);
    expect(car.moved).toBe(false);
    car2.moveSegment();
    expect(car.position.next.leftOccupied).toBe(false);
    car.moveSegment();
    expect(car.position.next).toBeNull();
    expect(car.position.prev).toBeTruthy();
    expect(car.moved).toBe(true);
  });
});
