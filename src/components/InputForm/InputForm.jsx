import React from 'react';
import { Input } from './Input';

export class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hourValue: 0,
            minuteValue: 0,
            secondValue: 0,
            rateValue: 0
        }
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
    }

    handleTimeChange(event) {
        switch (event.target.id) {
            case 'hour-input':
                this.setState({
                    hourValue: parseInt(event.target.value)
                });
                break;
            case 'minute-input':
                this.setState({
                    minuteValue: parseInt(event.target.value)
                });
                break;
            case 'second-input':
                this.setState({
                    secondValue: parseInt(event.target.value)
                });
                break;
        }
    }

    handleRateChange(event) {
        this.setState({
            rateValue: event.target.value
        });
    }

    calculateOutcome() {
        let hoursToMinutes = this.state.hourValue * 60;
        let secondsToMinutes = this.state.secondValue / 60;
        let timeInMinutes = hoursToMinutes + this.state.minuteValue + secondsToMinutes;

        return Math.round((timeInMinutes * this.state.rateValue) * 100) / 100;
    }

    render() {
        return (
            <React.Fragment>
                <h3>
                    You made: ${this.calculateOutcome()}
                </h3>
                <div className="time grid grid--three">
                    <Input
                        id="hour-input"
                        labelValue="hrs"
                        class="time__input"
                        handleChange={this.handleTimeChange}
                    />
                    <Input
                        id="minute-input"
                        labelValue="min"
                        class="time__input"
                        handleChange={this.handleTimeChange}
                    />
                    <Input
                        id="second-input"
                        labelValue="sec"
                        class="time__input"
                        handleChange={this.handleTimeChange}
                    />
                </div>
                <div>
                    <Input
                        id="rate-input"
                        labelValue="Rate Input (in $)"
                        handleChange={this.handleRateChange}
                    />
                </div>
            </React.Fragment>
        )
    }

}
