import React, { useState, useEffect } from 'react';

function Clock({ timeZone }) {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone }))
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone }))
        }, 1000);
    }, [])
    return (
        <div style={{ color: 'red' }}>
            {time}
        </div>
    );
}

export default Clock;