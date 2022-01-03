import React from "react";
import { Home } from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { EnvironmentHelper } from "./helpers";
import { SolutionsPage } from "./solutions/SolutionsPage";
import { ThankYou } from "./partner/ThankYou";
import { PartnerPage } from "./partner/PartnerPage";
import { ContributePage } from "./contribute/ContributePage";
import { KidsMinPage } from "./kidsmin/KidsMinPage";

export const Routing: React.FC = () => {
  const location = useLocation();
  if (EnvironmentHelper.GoogleAnalyticsTag !== "") {
    ReactGA.initialize(EnvironmentHelper.GoogleAnalyticsTag);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  React.useEffect(() => { if (EnvironmentHelper.GoogleAnalyticsTag !== "") ReactGA.pageview(location.pathname + location.search); }, [location]);

  return (
    <Routes>
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/partner" element={<PartnerPage />} />
      <Route path="/kidsmin" element={<KidsMinPage />} />
      <Route path="/contribute" element={<ContributePage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
