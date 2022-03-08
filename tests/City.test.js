const City = require("../City");

describe("City", () => {
  beforeEach(() => {
    city = new City();
    city.newRoad();
  });

  test("It can add a new road to the city", () => {
    expect(city.roads.length).toBe(1);
    expect(city.roads[0].calculateLength()).toBe(1);
  });

  test("It can join two roads together", () => {
    city.newRoad();
    city.connectRoads(city.roads[0], city.roads[1]);
    expect(city.roads[0].tail).toBe(city.roads[1].head);
  });

  test("It adds new cars to the city", () => {
    city.addCar();
    expect(city.cars.length).toBe(1);
    expect(city.roads[0].head.east.leftOccupied).toBe(true);
  });

  test("It can step the cars in the city", () => {
    city.addCar();
    expect(city.roads[0].head.east.leftOccupied).toBe(true);
    city.step();
    expect(city.roads[0].head.east.leftOccupied).toBe(false);
    expect(city.roads[0].head.east.rightOccupied).toBe(true);
  });

  test("it can disconnect two roads from eachother", () => {
    city.newRoad();
    city.connectRoads(city.roads[0], city.roads[1]);
    expect(city.roads[0].tail).toBe(city.roads[1].head);
    city.disconnectRoads(city.roads[0], city.roads[1]);
    expect(city.roads[0].tail).not.toBe(city.roads[1].head);
    expect(city.roads[0].head).not.toBe(city.roads[1].tail);
  });

  test("it can disconnect two roads from eachother", () => {
    city.newRoad();
    city.connectRoads(city.roads[1], city.roads[0]);
    expect(city.roads[0].head).toBe(city.roads[1].tail);
    city.disconnectRoads(city.roads[1], city.roads[0]);
    expect(city.roads[1].tail).not.toBe(city.roads[0].head);
    expect(city.roads[1].head).not.toBe(city.roads[0].tail);
  });
});
