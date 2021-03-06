import React from 'react';
import InlineEdit from 'react-edit-inline2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function VariableHeader({
    name,
    uuid
}) {
    return <header className="variable-title-header">
        <div className="variable-title-row">
            <label>
                <button onClick={this.props.handleRemoveSelf}>
                                Remove <FontAwesomeIcon icon="trash" />
                </button>
            </label>
            <div className="variable-title">
                <InlineEdit change={this.props.handleNameChange} text={name} paramName="name"></InlineEdit><FontAwesomeIcon icon="pen" />
            </div>
        </div>
        <h4>{uuid}</h4>
    </header>;
}
  