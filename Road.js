//create a road class
const Car = require("./Car");
const Segment = require("./Segment");

class Road {
  constructor() {
    this.cars = [];
    this.head = null;
    this.tail = null;
  }

  calculateLength() {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }

  generateSegments() {
    let head = new Segment(null, 0);
    this.head = head;
    for (let i = 1; i < 10; i++) {
      const segment = new Segment(head, i);
      head.next = segment;
      head = segment;
    }
    this.tail = head;
  }

  addSegment() {
    const newSegment = new Segment(this.tail);
    this.tail.setNext(newSegment);
  }

  addCar() {
    let current = this.head;
    while (current) {
      if (!current.leftOccupied) {
        current.leftOccupied = true;
        this.cars.push(new Car(current));
        return;
      }
      current = current.next;
    }
  }

  // let i = 0;
  // while (this.segments[i].leftOccupied) {
  //   i++;
  // }
  // let newCar = new Car(this.segments[i]);
  // this.cars.push(newCar);
  // newCar.occupySegment(1);

  logSegments() {
    const car_icon = "▲";
    const segment_icon = "-";
    let logged_road_left = "";
    let logged_road_right = "";
    let head = this.head;
    while (head) {
      if (head.leftOccupied && head.rightOccupied) {
        logged_road_left += car_icon;
        logged_road_right += car_icon;
      } else if (head.leftOccupied) {
        logged_road_left += car_icon;
        logged_road_right += segment_icon;
      } else if (head.rightOccupied) {
        logged_road_right += car_icon;
        logged_road_left += segment_icon;
      } else {
        logged_road_left += segment_icon;
        logged_road_right += segment_icon;
      }
      head = head.next;
    }
    return logged_road_left + "\n" + logged_road_right;
  }

  step() {
    this.cars.forEach((car) => {
      car.moveSegment();
    });
  }
}

module.exports = Road;
