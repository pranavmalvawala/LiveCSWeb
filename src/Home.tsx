import React from "react";
import "./Home.css";
import { Footer, Header } from "./components"
import { HomeNav } from "./components/HomeNav"
import { HomeHero } from "./components/HomeHero"
import { HomeServices } from "./components/HomeServices"
import { HomeAbout } from "./components/HomeAbout"
import { HomeExamples } from "./components/HomeExamples"
import { HomeStats } from "./components/HomeStats"
import { HomeWho } from "./components/HomeWho"

export const Home = () => {
    return (
        <>
            <HomeNav />
            <HomeHero />
            <HomeServices />
            <HomeAbout />
            <HomeExamples />
            <HomeStats />
            <HomeWho />
            <Footer />

        </>

    );
}

