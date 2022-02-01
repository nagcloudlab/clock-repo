import React from 'react';

function Clock({ timeZone }) {
    return (
        <div style={{ color: 'green' }}>
            {new Date().toLocaleTimeString('en-US', { timeZone })}
        </div>
    );
}

export default Clock;