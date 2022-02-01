import React from 'react';

function Clock({ timeZone }) {
    return (
        <div className='card card-body'>
            <div style={{ color: 'green' }}>
                {new Date().toLocaleTimeString('en-US', { timeZone })}
            </div>
        </div>
    );
}

export default Clock;