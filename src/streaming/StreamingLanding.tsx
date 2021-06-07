import React from "react";
import "./Streaming.css";
import { Footer } from "../components";
import { StreamingHero, StreamingBenefits, StreamingFeatures, StreamingRegister } from "./components"

export const StreamingLanding = () => (
  <>

    <StreamingHero />
    <StreamingBenefits />
    <StreamingFeatures />
    <StreamingRegister />
    <br />
    <Footer />

  </>
)
