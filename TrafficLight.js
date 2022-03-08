class TrafficLight {
    constructor(state) {
        this.ticks = 100
        this.state = state // state is boolean but represents the colour of the light
    }

    changeState() { // change the state of the light
        this.state = !this.state
    }



}

module.exports = TrafficLight;