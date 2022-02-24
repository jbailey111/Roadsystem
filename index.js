function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const City = require("./City");

// const Road = require("./Road");
// road1 = new Road();
// road2 = new Road();
// road1.generateSegments();
// road1.addCar();
// road1.addCar();
// console.log(road1.logSegments());
// console.log("\n");
// const test = async () => {
//   while (true) {
//     road1.step();
//     console.log(road1.logSegments());
//     console.log("\n");
//     await sleep(400);
//   }
// };

// test();

const cityTest = async () => {
  city = new City();
  city.newRoad();
  city.newRoad();
  city.newRoad();
  console.log(city.roads);
  city.newCrossroad();
  city.connectRoads(city.roads[0], city.roads[1]);
  city.xrNorth(city.roads[2]);
  city.newCar();
  city.step();
  city.logRoads();
  while (true) {
    city.step();
    city.logRoads();
    await sleep(400);
  }
};

cityTest();

// const xr = require("./Crossroad");
// const segment = require("./Segment");
// const Car = require("./Car");

// const segment1 = new segment();
// const segment2 = new segment(segment1);
// const crossRoad = new xr(segment1, segment2);
// const segment3 = new segment(crossRoad);
// const segment4 = new segment(null);
// segment4.setNext(crossRoad);
// crossRoad.addNorth(segment3);
// crossRoad.addSouth(segment4);
// let car = new Car(segment4);
// car.direction = "n";
// car.moveSegment();
// console.log(car.direction);
// car = new Car(segment4);
// car.direction = "n";
// car.moveSegment();
// console.log(car.direction);
// car = new Car(segment4);
// car.direction = "n";
// car.moveSegment();
// console.log(car.direction);
