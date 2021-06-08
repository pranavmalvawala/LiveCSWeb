import React from "react";
import "./Chums.css";
import { Footer, Header } from "./components"
import { ChumsRegister } from "./components/ChumsRegister"
import { ChumsHero } from "./components/ChumsHero"
import { ChumsAbout } from "./components/ChumsAbout"
import { ChumsFeatures } from "./components/ChumsFeatures"
import { ChumsMembers } from "./components/ChumsMembers";
import { ChumsGiving } from "./components/ChumsGiving";
import { ChumsAttendance } from "./components/ChumsAttendance";
import { ChumsExport } from "./components/ChumsExport";
import { ChumsTestimony } from "./components/ChumsTestimony";

export const ChumsLanding = () => (
  <>
    <Header />
    <ChumsHero />
    <ChumsAbout />
    <ChumsFeatures />
    <ChumsMembers />
    <ChumsGiving />
    <ChumsAttendance />
    <ChumsExport />
    <ChumsTestimony />
    <ChumsRegister />
    <Footer />
  </>
)
