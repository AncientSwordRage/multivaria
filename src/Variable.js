import React from 'react';
import PropTypes from 'prop-types';


const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

export class Variable extends React.Component {
    constructor(props) {
        super(props);
        this.handlePopChange = this.handlePopChange.bind(this);
        this.handleSuccessesChange = this.handleSuccessesChange.bind(this);
    }
    handlePopChange(event) {
        console.log('pop')
        this.props.onPopulationChange(event.target.value);
    }
    handleSuccessesChange(event) {
        console.log('succ')
        this.props.onSuccessesChange(event.target.value);
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
                successes
                    <input type="number" value={successes}
                        onChange={this.handleSuccessesChange}></input>
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
    population: PropTypes.number,
    successes: PropTypes.number,
    uuid: (props, propname, componentName) => {
        const errorText = `Invalid prop ${propname} supplied to ${componentName}. Validation failed.`;
        return !uuidRegex.test(props[propname]) ? new Error(errorText): '';
    }
};