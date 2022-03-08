/*This file will contain a crossroad class this class will allow for a car to enter and have a random chance of leaving on a road that they did not enter from
The current segment will be passed into a method which will remove it from the decision and 
*/

//TODO: Make choose road have booleans which controls where cars go rather than occupied status

class crossRoad {
  constructor() {
    this.east = null;
    this.west = null;
    this.north = null;
    this.south = null;
    this.lightHandler = null;
    


    this.type = "xr";
  }

  addNorth(segment) {
    if (this.north) {
      return false;
    }
    this.north = segment;
    segment.prev = this;
    return true;
  }

  addSouth(segment) {
    if (this.south) {
      return false;
    }
    this.south = segment;
    segment.next = this;
    return true;
  }

  addWest(segment) {
    if (this.west) {
      return false;
    }
    this.west = segment;
    segment.next = this;
    return true;
  }

  addEast(segment) {
    if (this.east) {
      return false;
    }
    this.east = segment;
    segment.prev = this;
    return true;
  }

  chooseRoad(carLocation) {
    if (carLocation === this.east) {
      if (this.north && !this.north.leftOccupied) {
        return [this.north, "n"];
      } else if (this.south && !this.south.rightOccupied) {
        return [this.south, "s"];
      } else if (this.west && !this.west.rightOccupied) {
        return [this.west, "w"];
      } else {
        return [this.east, "e"];
      }
    } else if (carLocation === this.west) {
      if (this.north && !this.north.leftOccupied) {
        return [this.north, "n"];
      } else if (this.south && !this.south.rightOccupied) {
        return [this.south, "s"];
      } else if (this.east && !this.east.leftOccupied) {
        return [this.east, "e"];
      } else {
        return [this.west, "w"];
      }
    } else if (this.north && carLocation === this.north) {
      if (this.west && !this.west.rightOccupied) {
        return [this.west, "w"];
      } else if (this.east && !this.east.leftOccupied) {
        return [this.east, "e"];
      } else if (this.south && !this.south.rightOccupied) {
        return [this.south, "s"];
      } else {
        return [this.north, "n"];
      }
    } else if (this.south && carLocation === this.south) {
      if (!this.west.leftOccupied) {
        return [this.west, "e"];
      } else if (this.east && !this.east.rightOccupied) {
        return [this.east, "w"];
      } else if (this.north && !this.north.leftOccupied) {
        return [this.north, "n"];
      } else {
        return [this.south, "s"];
      }
    }
  }
}

module.exports = crossRoad;
