import React from "react";
import "./App.css";
import { Home } from "./Home";
import { Switch, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { EnvironmentHelper } from "./helpers";
import { ChumsLanding } from "./chums/ChumsLanding";
import { SolutionsPage } from "./solutions/SolutionsPage";
import { PartnerPage } from "./partner/PartnerPage";

export const Routing: React.FC = () => {
  const location = useLocation();
  if (EnvironmentHelper.GoogleAnalyticsTag !== "") {
    ReactGA.initialize(EnvironmentHelper.GoogleAnalyticsTag);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  React.useEffect(() => { if (EnvironmentHelper.GoogleAnalyticsTag !== "") ReactGA.pageview(location.pathname + location.search); }, [location]);

  return (
    <Switch>
      <Route path="/solutions"><SolutionsPage /></Route>
      <Route path="/partner"><PartnerPage /></Route>
      <Route path="/chums"><ChumsLanding /></Route>
      <Route path="/"><Home /></Route>

    </Switch>
  );
}