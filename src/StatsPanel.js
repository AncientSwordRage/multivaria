import React from 'react';

export default props => {
    const total = variable => props.variables.reduce((total, current)=>total + current[variable], 0);
    const StatsPanel = (
        <div>
            <dl>
                <dt>Total Population:</dt>
                <dd>{total('population')}</dd>
                <dt>Total Successes:</dt>
                <dd>{total('successes')}</dd>
            </dl>
        </div>
    );
    return Object.assign({}, StatsPanel, {displayName: 'StatsPanel'});
};