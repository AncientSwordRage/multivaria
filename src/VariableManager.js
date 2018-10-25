import React from 'react';
import VariableList from './VariableList';
import { partial } from 'lodash';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function totalOfProperty(property, variables) {
    return variables.reduce((total, current) => {
        return total += current[property];
    }, 0);
}
function getVariableProperty(uuid, property, variables){
    return variables.find(variable => variable['uuid'] === uuid)[property];
}
const POPULATION = 'population';
const SUCCESSES = 'successes';
const calcTotalVariablePopulation = partial(totalOfProperty, POPULATION);
/**
 * Makes sure any rules about the variable are upheld
 * @param {*} variable 
 */
function balanceVariable(variable){
    const successes = Math.min(variable.successes, variable.population);
    let updatedVariable = {...variable};
    updatedVariable.successes = successes;
    return updatedVariable;
}
class VariableManager extends React.Component {
    getVariableUpdates(value, uuid, property) {
        const updatedVariable = Object.assign({},
            this.state.variables.find(variable => variable.uuid === uuid));
        updatedVariable[property] = parseInt(value, 10);
        const balancedVariable = balanceVariable(updatedVariable);
        const unchangedVariables = this.state.variables.filter(variable => variable.uuid !== uuid);
        const newVariables = [...unchangedVariables, balancedVariable];
        return newVariables;
    }
    constructor(props) {
        super(props);
        this.state = {
            totalPopulation: 0, samples:0, variables: [{
                uuid: uuidv4(),
                name: 'sample',
                population: 0,
                successes: 0
            }]
        };
        this.handleTotalPopChange = this.handleTotalPopChange.bind(this);
        this.handleSamplesChange = this.handleSamplesChange.bind(this);
        this.handleSuccessesChangeFactory = this.handleSuccessesChangeFactory.bind(this);
        this.handlePopChangeFactory = this.handlePopChangeFactory.bind(this);
        this.addVariable = this.addVariable.bind(this);
    }

    /**
     * Updates the population property of a variable
     * 
     * Pre-Calculates the Variable updates, and checks
     * this against the total population and limits to
     * be below that value.
     * @param {String} uuid 
     */
    handlePopChangeFactory(uuid) {
        return event =>{
            console.log(`the uuid ${uuid} is being updated with ${event}`);
            const updatedVariables = this.getVariableUpdates(event, uuid, POPULATION);
            const totalVariablePopulation = calcTotalVariablePopulation( updatedVariables );
            if(totalVariablePopulation<=this.state.totalPopulation) {
                this.setState({variables: updatedVariables});
            }
        };
    }
    /**
     * Updates variables when the successes of the 
     * variables change.
     * @param {String} uuid 
     */
    handleSuccessesChangeFactory(uuid) {
        return event => {
            const variablePopulation = getVariableProperty(uuid, POPULATION, this.state.variables);
            const value = Math.min(event, variablePopulation);
            const updatedVariables = this.getVariableUpdates(value, uuid, SUCCESSES);
            this.setState({variables: updatedVariables});
        };
    }
    /**
     * Updates the total population
     * 
     * Pre-calculates the existing variables, and checks
     * this against the event update and limits it to be
     * above that value
     * @param {Event} event 
     */
    handleTotalPopChange(event) {
        const totalVariablePopulation = calcTotalVariablePopulation( this.state.variables );
        const newTotalPopulation = event.target.value;
        const totalPopulation = Math.max(totalVariablePopulation, newTotalPopulation);
        const samples = Math.min(this.state.samples, totalPopulation);
        this.setState({totalPopulation, samples});
    }
    /**
     * Updates the number of samples across the whole calculation
     * Cannot be above the total population of the whole calculation
     * @param {Event} event 
     */
    handleSamplesChange(event) {
        const samples = Math.min(event.target.value, this.state.totalPopulation);
        const totalPopulation = Math.max(this.state.totalPopulation, samples);
        this.setState({samples, totalPopulation});
    }
    addVariable(event){
        const newVariable = {
            uuid: uuidv4(),
            name: 'sample',
            population: 0,
            successes: 0
        };
        this.setState({variables:[...this.state.variables, newVariable]});
    }
    render() {
        return (
            <section>
                <div id="population-input">
                    <label>
                        <div>
                            Population size {this.state.totalPopulation}
                        </div>
                        <input type="number" value={this.state.totalPopulation} onChange={this.handleTotalPopChange}></input>
                    </label>
                </div>
                <div id="samples-input">
                    <label>
                        <div>
                            Samples {this.state.samples}
                        </div>
                        <input type="number" value={this.state.samples} onChange={this.handleSamplesChange}></input>
                    </label>
                </div>
                <div>
                    <button onClick={this.addVariable}>
                        Add Variable<FontAwesomeIcon icon="plus"/>
                    </button>
                </div>
                <div>
                    <ul>
                        <VariableList 
                            variables={this.state.variables} 
                            onPopulationChangeFactory={this.handlePopChangeFactory}
                            onSuccessesChangeFactory={this.handleSuccessesChangeFactory}>
                        </VariableList>
                    </ul>
                </div>
            </section>
        );
    }
}
export default VariableManager;