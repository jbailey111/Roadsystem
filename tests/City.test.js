const City = require("../City");

describe("City", () => {
  
  beforeEach(() => {
    city = new City();
  });

  test("It can add a new road to the city", () => {
    city.newRoad();
    expect(city.roads.length).toBe(1);
  });
  test("It can add a new crossroad to the city", () => {
    city.newCrossroad();
    expect(city.crossRoads.length).toBe(1);
  });
  test("It can connect two roads using a crossroad", () => {
    city.newRoad();
    city.newRoad();
    city.newCrossroad();
    city.crossRoads[0].addEast(city.roads[1].head);
    city.crossRoads[0].addWest(city.roads[0].tail);
    expect(city.roads[0].tail.next).toBe(city.crossRoads[0]);
  });
  test("It adds new cars to the city", () => {
    city.newRoad();
    city.newRoad();
    city.newCrossroad();
    city.newCar();
    expect(city.cars.length).toBe(1);
    expect(city.roads[0].cars.length).toBe(1);
    expect(city.roads[0].head.leftOccupied).toBe(true);
  });

  test("It can step the city", () => {
    city.newRoad();
    city.newRoad();
    city.newCrossroad();
    city.newCar();
    city.step();
    expect(city.cars.length).toBe(1);
    expect(city.roads[0].head.leftOccupied).toBe(false);
    expect(city.roads[0].head.next.leftOccupied).toBe(true);
  });
});
