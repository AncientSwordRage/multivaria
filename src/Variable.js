import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import InlineEdit from 'react-edit-inline2';
=======
>>>>>>> ab41be906115c696cef0082e6ddfb68e3c35b3ba
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

export class Variable extends React.Component {
    constructor(props) {
        super(props);
        this.handlePopChange = this.handlePopChange.bind(this);
        this.handleSuccessesChange = this.handleSuccessesChange.bind(this);
        this.handleRemoveSelf = this.handleRemoveSelf.bind(this);
<<<<<<< HEAD
        this.handleNameChange = this.handleNameChange.bind(this);
=======
>>>>>>> ab41be906115c696cef0082e6ddfb68e3c35b3ba
    }
    handlePopChange(event) {
        this.props.onPopulationChange(event.target.value);
    }
    handleSuccessesChange(event) {
        this.props.onSuccessesChange(event.target.value);
    }
<<<<<<< HEAD
    handleNameChange(data) {
        this.props.onNameChange(data);
    }
=======
>>>>>>> ab41be906115c696cef0082e6ddfb68e3c35b3ba
    handleRemoveSelf(event){
        this.props.onRemove(event);
    }
    render(){
        const {population, successes, uuid, name} = this.props.variable;
        return (
            <div>
                <header className="variable-title">
                    <h2>
                        <InlineEdit
                            change={this.handleNameChange}
                            text={name}
                            paramName="name"
                        ></InlineEdit><FontAwesomeIcon icon="pen"/>
                    </h2>
                    <h4>{uuid}</h4>
                    <div>
                        <label>
                            Remove Variable
                            <button onClick={this.handleRemoveSelf}><FontAwesomeIcon icon="trash"/></button>
                        </label>
                    </div>
                </header>
                <div>
                    <label>
                        Population
                        <input type="number" value={population}
                            onChange={this.handlePopChange}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Successes
                        <input type="number" value={successes}
                            onChange={this.handleSuccessesChange}></input>
                    </label>
                </div>
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
<<<<<<< HEAD
    onNameChange: PropTypes.func.isRequired,
    variable: PropTypes.exact({
        'uuid': (props, propname, componentName) => {
            const errorText = `Invalid prop ${propname} supplied to ${componentName}. Validation failed.`;
            return !uuidRegex.test(props[propname]) ? new Error(errorText): '';
        },
        'population': PropTypes.number.isRequired,
        'successes': PropTypes.number.isRequired,
        'name': PropTypes.string
    })
=======
    population: PropTypes.number,
    successes: PropTypes.number,
    uuid: (props, propname, componentName) => {
        const errorText = `Invalid prop ${propname} supplied to ${componentName}. Validation failed.`;
        return !uuidRegex.test(props[propname]) ? new Error(errorText): '';
    }
>>>>>>> ab41be906115c696cef0082e6ddfb68e3c35b3ba
};