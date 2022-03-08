class Car {
  constructor(segment) {
    this.position = segment;
    this.direction = "e"; // Cardinal directions n, e, s, w
    this.moved = false; //Will stop cars moving if there is a car infront that has not moved yet and will come back later to move the car
    // a function that occupies the current segment of the car on initialization
  }
  occupySegment() {
    this.position.changeStatus(this.direction);
  }
  moveSegment() {
    if (this.moved === false) {
      if (this.direction === "e") {
        if (this.position.next) {
          if (this.position.next.type === "xr") {
            this.occupySegment(this.direction); //Need to see whether it moves to the same position
            const xrDecision = this.position.next.chooseRoad(this.position);
            this.position = xrDecision[0];
            this.direction = xrDecision[1];
            this.occupySegment(this.direction);
          } else if (this.position.next.leftOccupied === false) {
            this.occupySegment(this.direction);
            this.position = this.position.next;
            this.occupySegment(this.direction);
          } else {
            return;
          }
        } else {
          if (!this.position.rightOccupied) {
            this.occupySegment(this.direction);
            this.direction = "w";
            this.occupySegment(this.direction);
          } else {
            return;
          }
        }
      } else if (this.direction === "w") {
        if (this.position.prev) {
          if (this.position.prev.type === "xr") {
            this.occupySegment(this.direction);
            const xrDecision = this.position.prev.chooseRoad(this.position);
            this.position = xrDecision[0];
            this.direction = xrDecision[1];
            this.occupySegment(this.direction);
          } else if (this.position.prev.rightOccupied === false) {
            this.occupySegment(this.direction);
            this.position = this.position.prev;
            this.occupySegment(this.direction);
          } else {
            return;
          }
        } else {
          if (!this.position.leftOccupied) {
            this.occupySegment(this.direction);
            this.direction = "e";
            this.occupySegment(this.direction);
          } else {
            return;
          }
        }
      } else if (this.direction === "s") {
        if (this.position.prev) {
          if (this.position.prev.type === "xr") {
            this.occupySegment(this.direction);
            const xrDecision = this.position.prev.chooseRoad(this.position);
            this.position = xrDecision[0];
            this.direction = xrDecision[1];
            this.occupySegment(this.direction);
          } else if (this.position.prev.rightOccupied === false) {
            this.occupySegment(this.direction);
            this.position = this.position.prev;
            this.occupySegment(this.direction);
          } else {
            return;
          }
        } else {
          if (!this.position.leftOccupied) {
            this.occupySegment(this.direction);
            this.direction = "n";
            this.occupySegment(this.direction);
          } else {
            return;
          }
        }
      } else if (this.direction === "n") {
        if (this.position.next) {
          if (this.position.next.type === "xr") {
            this.occupySegment(this.direction);
            const xrDecision = this.position.next.chooseRoad(this.position);
            this.position = xrDecision[0];
            this.direction = xrDecision[1];
            this.occupySegment(this.direction);
          } else {
            this.occupySegment(this.direction);
            this.position = this.position.next;
            this.occupySegment(this.direction);
          }
        } else {
          this.occupySegment(this.direction);
          this.direction = "s";
          this.occupySegment(this.direction);
        }
      }
    }
    this.moved = true;
  }

  resetMove() {
    this.moved = false;
  }
}

module.exports = Car;
