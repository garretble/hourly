import React from 'react';
import { Input } from './Input';

export class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hourValue: 0,
            minuteValue: 0,
            secondValue: 0,
            rateValue: 0,
            rateTypeValue: 'minutes'
        }
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleRateTypeChange = this.handleRateTypeChange.bind(this);
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
            default:
                this.setState({
                    secondValue: parseInt(event.target.value)
                });
        }
    }

    handleRateChange(event) {
        this.setState({
            rateValue: event.target.value
        });
    }

    handleRateTypeChange(event) {
        this.setState({
            rateTypeValue: event.target.value
        });
    }

    calculateOutcome() {
        let hoursToMinutes = this.state.hourValue * 60;
        let secondsToMinutes = this.state.secondValue / 60;
        let totalTimeInMinutes = hoursToMinutes + this.state.minuteValue + secondsToMinutes;
        if (this.state.rateTypeValue == 'minutes') {
            return Math.round((totalTimeInMinutes * this.state.rateValue) * 100) / 100;
        }
        if (this.state.rateTypeValue == "hours") {
            return Math.round(((totalTimeInMinutes / 60) * this.state.rateValue) * 100) / 100;
        }


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
                        inputType="number"
                        labelValue="hrs"
                        class="time__input"
                        handleChange={this.handleTimeChange}
                        minValue="0"
                        pattern="\d*"
                    />
                    <Input
                        id="minute-input"
                        inputType="number"
                        labelValue="min"
                        class="time__input"
                        handleChange={this.handleTimeChange}
                        minValue="0"
                        pattern="\d*"
                    />
                    <Input
                        id="second-input"
                        inputType="number"
                        labelValue="sec"
                        class="time__input"
                        handleChange={this.handleTimeChange}
                        minValue="0"
                        pattern="\d*"
                    />
                </div>
                <div className="rate grid grid--three">
                    <Input
                        id="rate-input"
                        inputType="number"
                        labelValue="Rate Input (in $)"
                        handleChange={this.handleRateChange}
                        minValue="0"
                        pattern="\d*"

                    />
                    <Input
                        checked={this.state.rateTypeValue === 'minutes'}
                        id="min-radio"
                        inputName="rateType"
                        inputType="radio"
                        inputValue="minutes"
                        labelValue="Per Minute"
                        handleChange={this.handleRateTypeChange}
                    />
                    <Input
                        checked={this.state.rateTypeValue === 'hours'}
                        id="hour-radio"
                        inputName="rateType"
                        inputType="radio"
                        inputValue="hours"
                        labelValue="Per Hour"
                        handleChange={this.handleRateTypeChange}
                    />

                </div>
            </React.Fragment>
        )
    }

}
