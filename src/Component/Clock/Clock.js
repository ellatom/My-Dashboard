import React, { Component } from 'react';

class Clock extends Component {

    state = { time: new Date().toLocaleTimeString() }

    componentDidMount = () => {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000
        );
    }
    componentWillUnmount = () => {
        clearInterval(this.intervalID)
    }

    updateClock = () => {
        this.setState({ time: new Date().toLocaleTimeString() });
    }
    render() {
        return (
            <div className="time"> {this.state.time} </div>
        );
    }
}
export default Clock;