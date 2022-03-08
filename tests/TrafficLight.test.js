tl = require("../TrafficLight");

describe("Traffic lights", () => {
  beforeEach(() => {
    // before each test, create a new traffic light
    light = new tl(false);
  });
  test("Initialize the traffic light", () => {
    expect(light).not.toBeNull();
  });
  test("The traffic light changes state", () => {
    light.changeState();
    expect(light.state).toBe(true);
  });
});
