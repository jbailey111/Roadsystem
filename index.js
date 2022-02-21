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
const segment1 = new segment(null, 1);
const segment2 = new segment(segment1, 2);
segment1.setNext(segment2);
const crossRoad = new xr(segment1, segment2);
console.log(segment1.next);
