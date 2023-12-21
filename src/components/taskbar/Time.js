import '../../assets/styles/Taskbar.css';
import React from 'react';

function Time() {
    // const date = new Date();
    // const time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        setInterval(() => {
        setTime(new Date());
        }, 1000);
    }, []);

    let retVal = time.toLocaleString("en-US", {
        timeStyle: "short",
        hour12: true,
    })

    return (
        <div className="time">
            <div className="timeText"><strong>{retVal}</strong></div>
        </div>
    );
}

export default Time;