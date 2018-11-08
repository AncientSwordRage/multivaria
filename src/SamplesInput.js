import React from 'react';
import PropTypes from 'prop-types';

export class SamplesInput extends React.Component {
    render() {
        return <div id="samples-input">
            <label>
                <div>
                    Samples {this.props.samples}
                </div>
                <input type="number" value={this.props.samples} onChange={this.props.handleSamplesChange}></input>
            </label>
        </div>;
    }
}

SamplesInput.propTypes = {
    samples: PropTypes.number.isRequired,
    handleSamplesChange: PropTypes.func.isRequired
};
  