import React from "react";

function Notifications() {
    const handleClick = () => {
        console.log("Close button has been clicked");
    };

    return (
        <div className="Notifications">
            <button aria-label="Close" onClick={handleClick}>
                Close
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li>New course available</li>
                <li>New resume available</li>
                <li>New data available</li>
            </ul>
        </div>
    );
}

export default Notifications;
