const Road = require("./Road");
const xr = require("./CrossRoad");
class City {
  constructor() {
    this.cars = [];
    this.roads = [];
  }

  newRoad() {
    const newroad = new Road();
    this.roads.push(newroad);
  }

  addCar() {
    for (let road of this.roads) {
      const car = road.addCar();
      if (car) {
        this.cars.push(car);
        return;
      }
    }
  }

  connectRoads(road1, road2) {
    road1.tail.east = road2.head.east;
    road2.head = road1.tail;
    road1.tail.east.prev = road1.tail;
  }

  disconnectRoads(road1, road2) {
    if (road1.head === road2.tail) {
      let segments = road1.head.east;
      road1.head = new xr();
      road1.head.east = segments;
      road1.head.east.prev = road1.head;
      road2.tail.east = null;
    } else if (road1.tail === road2.head) {
      let segments = road1.tail.west;
      road1.tail = new xr();
      road1.tail.west = segments;
      road1.tail.west.prev = road1.tail;
      road2.head.west = null;
    }
  }

  step() { //O(n^2) 
    for (let car of this.cars) {
      car.resetMove();
    }
    let toMove = this.cars; 
    while (toMove.length > 0) {
      for (let car of toMove) {
        if (car.moved) {
          toMove = this.cars.filter((car) => car.move);
        } else {
          car.moveSegment();
        }
      }
    }
  }
}

module.exports = City;
