import React, { useEffect } from "react";
import "./Contribute.css";
import { Footer, Header, ContributeHero, Solutions, WaysToHelp, GetStarted } from "./components"

export const ContributePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <ContributeHero />
      <Solutions />
      <WaysToHelp />
      <GetStarted />
      <Footer />
    </>
  )
}
