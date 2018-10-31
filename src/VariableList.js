import React from 'react';
import {Variable} from './Variable';
import PropTypes from 'prop-types';


export default class VariableList extends React.Component {
    render(){
        return this.props.variables.map(variable => {
            return <li key={variable.uuid} >
                <Variable
                    variable={variable}
                    onPopulationChange={this.props.onPopulationChangeFactory(variable.uuid)}
                    onSuccessesChange={this.props.onSuccessesChangeFactory(variable.uuid)}
                    onNameChange={this.props.onNameChangeFactory(variable.uuid)}
                    onRemove={this.props.onRemoveFactory(variable.uuid)}
                ></Variable>
            </li>;
        });
    }
}

VariableList.propTypes = {
    variables: PropTypes.array.isRequired,
    onPopulationChangeFactory: PropTypes.func.isRequired,
    onSuccessesChangeFactory: PropTypes.func.isRequired,
    onRemoveFactory: PropTypes.func.isRequired,
    onNameChangeFactory: PropTypes.func.isRequired
};