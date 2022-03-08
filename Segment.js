class Segment {
  constructor(prev = null) {
    this.leftOccupied = false;
    this.rightOccupied = false;
    this.next = null;
    this.prev = prev;

    this.type = "seg";
  }
  changeStatus(direction) {
    if (direction === "e" || direction === "n") {
      // console.log(direction);
      this.leftOccupied = !this.leftOccupied;
    } else {
      // console.log(direction);
      this.rightOccupied = !this.rightOccupied;
    }
  }

  setNext(next) {
    this.next = next;
  }
}

module.exports = Segment;
