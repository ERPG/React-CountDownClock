import React, { Component } from 'react';
import './App.css';
import Clock from './clock.jsx'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'deadline': 'December 25, 2018',
            'newDeadline': ''
        }
    }

    changeDeadline() {
        //this.setState({'deadline': 'November 25, 2017'})
        this.setState({ 'deadline': this.state.newDeadline })
    }

    render() {
        return (
            <div className="App">
                <div className="App-Title">CountDown to {this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline} />
                <Form inline>
                    <FormControl
                        className="deadline-input"
                        placeholder="New date" type="text"
                        onChange={event => this.setState({ 'newDeadline': event.target.value })} />
                    <Button onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;