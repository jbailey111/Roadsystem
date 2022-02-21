// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const Road = require("./Road");
// road = new Road();
// road.generateSegments();
// road.addCar();
// road.addCar();
// console.log(road.logSegments());
// console.log("\n");
// const test = async () => {
//   for (let i = 0; i < 40; i++) {
//     road.step();
//     console.log(road.logSegments());
//     console.log("\n");
//     await sleep(400);
//   }
// };

// test();

const xr = require("./Crossroad");
const segment = require("./Segment");
const Car = require("./Car");

const segment1 = new segment();
const segment2 = new segment(segment1);
const crossRoad = new xr(segment1, segment2);
const segment3 = new segment(crossRoad);
const segment4 = new segment(null);
segment4.setNext(crossRoad);
crossRoad.addNorth(segment3);
crossRoad.addSouth(segment4);
let car = new Car(segment4);
car.direction = "n";
car.moveSegment();
console.log(car.direction);
car = new Car(segment4);
car.direction = "n";
car.moveSegment();
console.log(car.direction);
car = new Car(segment4);
car.direction = "n";
car.moveSegment();
console.log(car.direction);
