import React from "react";
import { TabNode } from "./TabNode";
import { TabReact } from "./TabReact";
import { TabBrochure } from "./TabBrochure";
import { TabMobile } from "./TabMobile";
import { TabDevOps } from "./TabDevOps";
import { TabNonTech } from "./TabNonTech";

export const DeveloperTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("");

  const getTab = (keyName: string, icon: string, text: string) => {
    let className = (keyName === selectedTab) ? "nav-link active" : "nav-link";
    return <li className="nav-item" key={keyName}><a href="about:blank" onClick={e => { e.preventDefault(); setSelectedTab(keyName) }} className={className}><i className={icon}></i> {text}</a></li>
  }
  let tabs = [];
  let defaultTab = "node"
  let currentTab = null;
  tabs.push(getTab("node", "fab fa-node-js", "Node"));
  tabs.push(getTab("react", "fab fa-react", "React Apps"));
  tabs.push(getTab("brochure", "fab fa-html5", "Brochure Sites"));
  tabs.push(getTab("mobile", "fas fa-mobile-alt", "Mobile"));
  tabs.push(getTab("devops", "fab fa-docker", "DevOps"));
  tabs.push(getTab("nontech", "fab fa-docker", "Non-Technical"));

  if (selectedTab === "" && defaultTab !== "") setSelectedTab(defaultTab);

  switch (selectedTab) {
    case "node": currentTab = <TabNode />; break;
    case "react": currentTab = <TabReact />; break;
    case "brochure": currentTab = <TabBrochure />; break;
    case "mobile": currentTab = <TabMobile />; break;
    case "devops": currentTab = <TabDevOps />; break;
    case "nontech": currentTab = <TabNonTech />; break;
    default: currentTab = <div>Not implemented</div>; break;
  }

  return (<><ul className="nav nav-tabs">{tabs}</ul>{currentTab}</>);
}
