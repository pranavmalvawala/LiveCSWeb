import React from "react";

export const TabDevOps: React.FC = () => {
    return (
        <div className="contributeTab">
            <h3>DevOps</h3>
            <p>In addition to the developer tasks, we can always use help from those with DevOps experience.  Some common needs include:</p>
            <ul className="checkList">
                <li>Writing automated Cypress test scripts.</li>
                <li>Continuous Integration Deployment with GitHub actions.</li>
                <li>Using Docker to make developer setup and self-hosting as easy as possible</li>
            </ul>
        </div>
    );
}
