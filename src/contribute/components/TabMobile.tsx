import React from "react";
import { GitHubIssues } from "./GitHubIssues"

export const TabMobile: React.FC = () => (
  <div className="contributeTab">
    <h3>React Native Mobile Applications</h3>
    <p>Both mobile applications are written in React native in order to have a single codebase for both the iOS and Android implementations.</p>
    <ul className="checkList">
      <li><a href="https://github.com/LiveChurchSolutions/ChumsCheckin" target="_blank" rel="noopener noreferrer">ChumsCheckin</a> - A self-checkin and child pickup solution that utilizes low-cost tablets to allow members to indicate which services and groups they are attending.  The software prints name tags for children and pick-up slips for parents with matching unique codes to help ensure children are only picked up by the parents.</li>
      <li><a href="https://github.com/LiveChurchSolutions/B1App" target="_blank" rel="noopener noreferrer">B1 Church App</a> - A mobile application for iOS and Android to help keep congregations connected.  It allows members to view the live stream and past services, give online, mark themselves in attendance, and view announcements.</li>
    </ul>
    <GitHubIssues repoNames={["ChumsCheckin", "B1App"]} />
  </div>
)
