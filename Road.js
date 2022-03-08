//create a road class
const Car = require("./Car");
const Segment = require("./Segment");
const xr = require("./Crossroad");

class Road {
  constructor() {
    this.cars = [];
    this.head = new xr();
    this.tail = new xr();
    const init = () => {
      const initialSegment = new Segment();
      initialSegment.prev = this.head;
      initialSegment.next = this.tail;
      this.head.addEast(initialSegment);
      this.tail.addWest(initialSegment);
    };
    init();
  }

  populateSegments(amount) {
    let current = this.head.east;
    for (let i = 0; i < amount; i++) {
      const newSegment = new Segment(current);
      newSegment.next = current.next;
      current.setNext(newSegment);
      current = newSegment;
    }
  }

  calculateLength() {
    let length = 0;
    let current = this.head.east;
    while (current.type !== "xr") {
      length++;
      current = current.next;
    }
    return length;
  }

  addSegment() {
    let current = this.head.east;
    const newSegment = new Segment(current);
    newSegment.next = current.next;
    current.setNext(newSegment);
  }

  addCar() {
    let current = this.head.east;
    while (current) {
      if (!current.leftOccupied) {
        current.leftOccupied = true;
        const car = new Car(current);
        car.direction = "e";
        return car;
      } else if (!current.rightOccupied) {
        current.rightOccupied = true;
        const car = new Car(current);
        car.direction = "w";
        return car;
      }
      current = current.next;
    }
  }
}

module.exports = Road;
