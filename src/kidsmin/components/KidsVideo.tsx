import React from "react";
import { Container } from "react-bootstrap";

export const KidsVideo = () => {
    return (
        <>
            <Container>
                <div className="videoWrapper">
                    <iframe width="992" height="558" src="https://www.youtube.com/embed/UdQ6Ab2WHTY" title="Kids Ministry" ></iframe>
                </div>
            </Container>
            <div id="videoBG"></div>
        </>
    );
}
