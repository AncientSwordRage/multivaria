import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

export class Variable extends React.Component {
    constructor(props) {
        super(props);
        this.handlePopChange = this.handlePopChange.bind(this);
        this.handleSuccessesChange = this.handleSuccessesChange.bind(this);
        this.handleRemoveSelf = this.handleRemoveSelf.bind(this);
    }
    handlePopChange(event) {
        this.props.onPopulationChange(event.target.value);
    }
    handleSuccessesChange(event) {
        this.props.onSuccessesChange(event.target.value);
    }
    handleRemoveSelf(event){
        this.props.onRemove(event);
    }
    render(){
        const population = this.props.population || 0;
        const successes = this.props.successes || 0;
        return (
            <div>
                <h2>{this.props.uuid}</h2>
                <label>
                    Population
                    <input type="number" value={population}
                        onChange={this.handlePopChange}></input>
                </label>
                <label>
                    Successes
                    <input type="number" value={successes}
                        onChange={this.handleSuccessesChange}></input>
                </label>
                <label>
                    Remove Variable
                    <button onClick={this.handleRemoveSelf}><FontAwesomeIcon icon="trash"/></button>
                </label>
                <div>
                    Calculating {successes} successes for Population! {population}
                </div>
            </div>);
    }
}
Variable.propTypes = {
    onPopulationChange: PropTypes.func.isRequired,
    onSuccessesChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    population: PropTypes.number,
    successes: PropTypes.number,
    uuid: (props, propname, componentName) => {
        const errorText = `Invalid prop ${propname} supplied to ${componentName}. Validation failed.`;
        return !uuidRegex.test(props[propname]) ? new Error(errorText): '';
    }
};