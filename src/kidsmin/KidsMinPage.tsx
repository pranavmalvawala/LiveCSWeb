import React from "react";
import "./KidsMin.css";
import { Footer, Header } from "../components"
import { KidsVideo } from "./components/KidsVideo";
import { KidsOverview } from "./components/KidsOverview";
import { KidsAreas } from "./components/KidsAreas";
import { KidsStart } from "./components/KidsStart";
import { KidsFree } from "./components/KidsFree";

export const KidsMinPage = () => {
    return (
        <>
            <Header />
            <KidsVideo />
            <KidsOverview />
            <KidsAreas />
            <KidsFree />
            <KidsStart />
            <Footer />
        </>
    );
}
