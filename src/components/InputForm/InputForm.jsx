import React from 'react';
import { Input } from './Input';

export class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeValue: 0,
            rateValue: 0
        }
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
    }

    handleTimeChange(event) {
        this.setState({
            timeValue: event.target.value
        });
    }

    handleRateChange(event) {
        this.setState({
            rateValue: event.target.value
        });
    }

    calculateOutcome() {
        let timeCalc = this.state.timeValue / 60
        return Math.round((timeCalc * this.state.rateValue) * 100) / 100;
    }

    render() {
        return (
            <React.Fragment>
                <h3>
                    You made: ${this.calculateOutcome()}
                </h3>
                <div>
                    <Input id="time-input" labelValue="Time Input (in minutes)" handleChange={this.handleTimeChange} />
                </div>
                <div>
                    <Input id="rate-input" labelValue="Rate Input (in $)" handleChange={this.handleRateChange} />
                </div>
            </React.Fragment>
        )
    }

}
