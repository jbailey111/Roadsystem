/*This file will contain a crossroad class this class will allow for a car to enter and have a random chance of leaving on a road that they did not enter from
The current segment will be passed into a method which will remove it from the decision and 
*/

//TODO: Make choose road have booleans which controls where cars go rather than occupied status

class crossRoad {
  constructor(prev, next) {
    this.east = prev;
    this.west = next;
    this.north = null;
    this.south = null;

    this.type = "xr";

    this.init = () => {
      prev.next = this;
      next.prev = this;
    };
    this.init();
  }

  addNorth(segment) {
    this.north = segment;
    segment.prev = this;
  }

  addSouth(segment) {
    this.south = segment;
    segment.prev = this;
  }

  chooseRoad(carLocation) {
    if (carLocation === this.east) {
      if (this.north && !this.north.leftOccupied) {
        return [this.north, "n"];
      } else if (this.south && !this.south.rightOccupied) {
        return [this.south, "s"];
      } else {
        return [this.west, "e"];
      }
    } else if (carLocation === this.west) {
      if (this.north && !this.north.leftOccupied) {
        return [this.north, "n"];
      } else if (this.south && !this.south.rightOccupied) {
        return [this.south, "s"];
      } else {
        return [this.east, "w"];
      }
    } else if (this.north && carLocation === this.north) {
      if (!this.west.leftOccupied) {
        return [this.west, "e"];
      } else if (!this.east.rightOccupied) {
        return [this.east, "w"];
      } else {
        return [this.south, "s"];
      } 
    } else if (this.south && carLocation === this.south) {
      if (!this.west.leftOccupied) {
        return [this.west, "e"];
      } else if (!this.east.rightOccupied) {
        return [this.east, "w"];
      } else {
        return [this.north, "n"];
      }
    }
  }
}

module.exports = crossRoad;
