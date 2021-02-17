import React from "react";
import "./App.css";
import { Home } from "./Home";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";
import { Switch, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { EnvironmentHelper } from "./helpers";
import { ChumsLanding } from "./chums/ChumsLanding";

export const Routing: React.FC = () => {
  const location = useLocation();
  if (EnvironmentHelper.GoogleAnalyticsTag !== "") {
    ReactGA.initialize(EnvironmentHelper.GoogleAnalyticsTag);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  React.useEffect(() => { if (EnvironmentHelper.GoogleAnalyticsTag !== "") ReactGA.pageview(location.pathname + location.search); }, [location]);

  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/privacy`}><Privacy /></Route>
      <Route path={`${process.env.PUBLIC_URL}/terms`}><Terms /></Route>
      <Route path="/chums"><ChumsLanding /></Route>
      <Route path="/"><Home /></Route>

    </Switch>
  );
}