import React from 'react';
import PropTypes from 'prop-types';

export class PopulationInput extends React.Component {
    render() {
        return <div id="population-input">
            <label>
                <div>
                    Population size {this.props.totalPopulation}
                </div>
                <input type="number" value={this.props.totalPopulation} onChange={this.props.handleTotalPopChange}></input>
            </label>
        </div>;
    }
}

PopulationInput.propTypes = {
    totalPopulation: PropTypes.number.isRequired,
    handleTotalPopChange: PropTypes.func.isRequired
};
  