const LightHandler = require("../LightHandler");

describe("LightHandler", () => {
  beforeEach(() => {
    handler = new LightHandler();
    handler.addNorth();
    handler.addSouth();
    handler.addEast();
    handler.addWest();
  });
  test("It creates a new handler", () => {
    expect(handler).toBeDefined();
  });
  test("It has traffic lights on each of its branches", () => {
    expect(handler.north).toBeDefined();
    expect(handler.south).toBeDefined();
    expect(handler.east).toBeDefined();
    expect(handler.west).toBeDefined();
  });
  test("It can remove traffic lights from a direction", () => {
    handler.removeNorth();
    expect(handler.north).toBeNull();
    handler.removeSouth();
    expect(handler.south).toBeNull();
    handler.removeWest();
    expect(handler.west).toBeNull();
    handler.removeEast();
    expect(handler.east).toBeNull();
  });

  test("It can change the state of the lights on the cross road", () => {
    handler.changeState();
    expect(handler.north.state).toBe(true);
    expect(handler.south.state).toBe(true);
    expect(handler.east.state).toBe(false);
    expect(handler.west.state).toBe(false);
  });

  test("It cycles when the simulation ticks", () => {
    handler.timer = 95;
    expect(handler.north.state).toBe(false);
    expect(handler.south.state).toBe(false);
    expect(handler.east.state).toBe(true);
    expect(handler.west.state).toBe(true);
    for (let i = 0; i < 6; i++) {
      handler.cycleTimer();
    }
    expect(handler.north.state).toBe(true);
    expect(handler.south.state).toBe(true);
    expect(handler.east.state).toBe(false);
    expect(handler.west.state).toBe(false);

    handler.timer = 99;
    for (let i = 0; i < 6; i++) {
      handler.cycleTimer();
    }
    expect(handler.north.state).toBe(false);
    expect(handler.south.state).toBe(false);
    expect(handler.east.state).toBe(true);
    expect(handler.west.state).toBe(true);
  });
});
