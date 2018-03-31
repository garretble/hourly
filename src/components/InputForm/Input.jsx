import React from 'react';
import PropTypes from 'prop-types';


export class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <label
                htmlFor={this.props.id}
                className={this.props.class}
            >
                {this.props.labelValue}<br />
                <input
                    checked={this.props.checked}
                    id={this.props.id}
                    min={this.props.minValue}
                    name={this.props.inputName}
                    onChange={this.props.handleChange}
                    pattern={this.props.pattern}
                    placeholder={this.props.placeHolder || '0'}
                    type={this.props.inputType}
                    value={this.props.inputValue}
                />
            </label>
        )
    }

}

Input.propTypes = {
    checked: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    id: PropTypes.string,
    inputName: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    labelValue: PropTypes.string.isRequired,
    minValue: PropTypes.string,
    maxValue: PropTypes.string,
    pattern: PropTypes.string,
    placeHolder: PropTypes.string


}
