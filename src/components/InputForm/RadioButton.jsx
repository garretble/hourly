import React from 'react';

export class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            labelValue: this.props.labelValue,
            inputValue: this.props.inputValue
        }
    }


    render() {
        return (
            <label
                htmlFor={this.state.id}
                className={this.props.class}
            >
                {this.state.labelValue}<br />
                <input
                    type="radio"
                    min="0"
                    id={this.state.id}
                    placeholder="0"
                    onChange={this.props.handleChange}
                />
            </label>
        )
    }

}
