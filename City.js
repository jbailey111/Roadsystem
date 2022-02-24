const Road = require("./Road");
const Crossroad = require("./Crossroad");

class City {
  constructor() {
    this.cars = [];
    this.roads = [];
    this.crossRoads = [];
  }

  newRoad() {
    const newroad = new Road();
    newroad.generateSegments();
    this.roads.push(newroad);
  }

  newCrossroad() {
    const newCrossroad = new Crossroad();
    this.crossRoads.push(newCrossroad);
  }

  newCar() {
    for (let road of this.roads) {
      const res = road.addCar();
      if (res) {
        this.cars.push(res);
        return;
      }
    }
  }

  connectRoads(road1, road2) {
    this.crossRoads[0].east = road1.head;
    road1.head.prev = this.crossRoads[0];
    this.crossRoads[0].west = road2.tail;
    road2.tail.next = this.crossRoads[0];
  }

  xrNorth(road) {
    this.crossRoads[0].north = road.head;
    road.head.prev = this.crossRoads[0];
  }

  step() {
    for (let car of this.cars) {
      car.moveSegment();
    }
  }

  logRoads() {
    for (let road of this.roads) {
      console.log(road.logSegments());
    }
  }
}

module.exports = City;
