import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        // this method parse the component before it renders
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        // this method parse the component after it renders
        setInterval(()=> {
            this.getTimeUntil(this.props.deadline);
        }, 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
        this.setState({
            days: days,
            seconds: seconds,
            minutes: minutes,
            hours: hours
        })
    }

    render () {
        return (
            <div>
                <div className="clock-days">{this.leading0(this.state.days)} Days</div>
                <div className="clock-hours">{this.leading0(this.state.hours)} hours</div>
                <div className="clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
                <div className="clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
            </div>
        )
    }
};

export default Clock;