import React from "react";
import { GitHubIssues } from "./GitHubIssues"

export const TabReact: React.FC = () => {
    return (
        <div className="contributeTab">
            <h3>React Web Applications</h3>
            <p>The main web applications are written in React to maximize responsiveness and keep server load to a minimum.</p>
            <ul className="checkList">
                <li><a href="https://github.com/LiveChurchSolutions/AccountsApp" target="_blank" rel="noopener noreferrer">AccountsApp</a> - Serves three purposes.  For most users, it is a place to edit their profile and a launching point to access other apps.  For church administrators is the portal for enabling and configuring the applications their church utilizes.  For server administrators is a place to see and manage which churches are hosted on this server.</li>
                <li><a href="https://github.com/LiveChurchSolutions/ChumsApp" target="_blank" rel="noopener noreferrer">ChumsApp</a> - The backend office application to enable churches to track key data such as members, groups, attendance, giving, and shepherding progress.</li>
                <li><a href="https://github.com/LiveChurchSolutions/StreamingLiveApp" target="_blank" rel="noopener noreferrer">StreamingLiveApp</a> - An online platform that wraps a live stream from popular platforms such as YouTube, Facebook and Vimeo with content and resources to help keep the church connected to one another.  This includes a live chat feature with private prayer requests, the ability to embed sermon notes and provide links to giving, next steps and other common needs.</li>
                <li><a href="https://github.com/LiveChurchSolutions/B1Admin" target="_blank" rel="noopener noreferrer">B1Admin</a> - A simple admin platform to manage what appears in the B1 Church mobile app for each church.</li>
            </ul>
            <GitHubIssues repoNames={["AccountsApp", "ChumsApp", "StreamingLiveApp", "B1Admin"]} />
        </div>
    );
}
