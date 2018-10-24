import React from 'react';
import {Variable} from './Variable';
import PropTypes from 'prop-types';


export default class VariableList extends React.Component {
    render(){
        return this.props.variables.map(variable => {
            return <li key={variable.uuid} >
                <Variable 
                    uuid={variable.uuid}
                    name={variable.name}
                    population={variable.population} 
                    onPopulationChange={this.props.onPopulationChangeFactory(variable.uuid)}
                    successes={variable.successes}
                    onSuccessesChange={this.props.onSuccessesChangeFactory(variable.uuid)}
                ></Variable>
            </li>;
        });
    }
}

VariableList.propTypes = {
    variables: PropTypes.array.isRequired,
    onPopulationChangeFactory: PropTypes.func,
    onSuccessesChangeFactory: PropTypes.func
};