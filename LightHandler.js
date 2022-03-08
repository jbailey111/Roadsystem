//require trafficLight.js
const tl = require("./trafficLight.js");

class LightHandler {
  constructor() {
    //light handler has lat and long that can either be true or false
    //the light also has values for north south east and west
    this.lat = true;
    this.long = false;
    this.north = null;
    this.south = null;
    this.east = null;
    this.west = null;
    this.delay = 100; //number of ticks before changing state of the lights
    this.timer = 0; //timer is the number of ticks since the last change of state
  }

  cycleTimer() {
    this.timer++;
    if (this.timer >= this.delay) {
      this.timer = 0;
      this.changeState();
    }
  }

  addNorth() {
    this.north = new tl(this.long);
  }

  addSouth() {
    this.south = new tl(this.long);
  }

  addEast() {
    this.east = new tl(this.lat);
  }

  addWest() {
    this.west = new tl(this.lat);
  }

  removeNorth() {
    //remove north
    this.north = null;
  }

  removeSouth() {
    //remove south
    this.south = null;
  }

  removeEast() {
    //remove east
    this.east = null;
  }

  removeWest() {
    //remove west
    this.west = null;
  }

  changeState() {
    //change the state of the lights
    this.lat = !this.lat;
    this.long = !this.long;
    if (this.north) {
      this.north.changeState();
    }
    if (this.south) {
      this.south.changeState();
    }
    if (this.east) {
      this.east.changeState();
    }
    if (this.west) {
      this.west.changeState();
    }
  }
}

module.exports = LightHandler;
