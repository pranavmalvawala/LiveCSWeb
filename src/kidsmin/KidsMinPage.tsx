import React, { useEffect } from "react";
import "./KidsMin.css";
import { Footer, Header } from "../components"
import { KidsVideo } from "./components/KidsVideo";
import { KidsOverview } from "./components/KidsOverview";
import { KidsAreas } from "./components/KidsAreas";
import { KidsStart } from "./components/KidsStart";
import { KidsFree } from "./components/KidsFree";
import { FloatingSupport } from "../appBase/components";

export const KidsMinPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return  (
    <>
      <Header />
      <KidsVideo />
      <KidsOverview />
      <KidsAreas />
      <KidsFree />
      <KidsStart />
      <Footer />
      <FloatingSupport appName="LiveCS" />
    </>
  )
}
