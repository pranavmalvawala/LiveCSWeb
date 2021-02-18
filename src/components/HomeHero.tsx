
import React from "react"
import { Container } from "react-bootstrap";
import YoutubeBackground from 'react-youtube-background'

export const HomeHero: React.FC = () => {
    //const width = window.innerWidth;
    //const height = width / 16 * 9;
    //width: 2281px; max-width: 2281px; height: 1283px; opacity: 1; left: -190px;
    //const youtubeUrl = "https://www.youtube.com/embed/3iXYciBTQ0c?autoplay=1&amp;controls=0&amp;disablekb=1&amp;fs=0&amp;iv_load_policy=3&amp;loop=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Flivecs.org&amp;widgetid=1";
    return (
        <div style={{ marginTop: -97 }}>
            <YoutubeBackground videoId="3iXYciBTQ0c" overlay="rgba(0,0,0,.4)">
                <div id="homeHero">
                    <Container className="text-center">
                        <h1>Our Mission</h1>
                        <p>We desire to see the local church grow by providing modern technology solutions, logistics, instruction, mentoring and spiritual content which will be a catalyst to help the love for Jesus Christ inspire them to grow and reach more people for Him.</p>
                    </Container>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path style={{ fill: "#FFF" }} d="M737.9,94.7L0,0v100h1000V0L737.9,94.7z"></path>
                </svg>
            </YoutubeBackground>

        </div>

    );
}


