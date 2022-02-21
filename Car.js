class Car {
  constructor(segment) {
    this.position = segment;
    this.direction = "e"; // Cardinal directions n, e, s, w
  }
  occupySegment() {
    this.position.changeStatus(this.direction);
  }
  moveSegment() {
    if (this.direction === "e") {
      if (this.position.next) {
        if (this.position.next.type === "xr") {
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
        this.direction = "w";
        this.occupySegment(this.direction);
      }
    } else if (this.direction === "w") {
      if (this.position.prev) {
        if (this.position.prev.type === "xr") {
          const xrDecision = this.position.prev.chooseRoad(this.position);
          this.position = xrDecision[0];
          this.direction = xrDecision[1];
          this.occupySegment(this.direction);
        } else {
          this.occupySegment(this.direction);
          this.position = this.position.prev;
          this.occupySegment(this.direction);
        }
      } else {
        this.occupySegment(this.direction);
        this.direction = "e";
        this.occupySegment(this.direction);
      }
    } else if (this.direction === "s") {
      if (this.position.prev) {
        if (this.position.prev.type === "xr") {
          const xrDecision = this.position.prev.chooseRoad(this.position);
          this.position = xrDecision[0];
          this.direction = xrDecision[1];
          this.occupySegment(this.direction);
        } else {
          this.occupySegment(this.direction);
          this.position = this.position.prev;
          this.occupySegment(this.direction);
        }
      } else {
        this.occupySegment(this.direction);
        this.direction = "n";
        this.occupySegment(this.direction);
      }
    } else if (this.direction === "n") {
      if (this.position.next) {
        if (this.position.next.type === "xr") {
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
}

module.exports = Car;
