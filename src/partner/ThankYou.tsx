import React from "react";
import { Footer, Header } from "../components"
import { Container } from "react-bootstrap";

export const ThankYou = () => {
    return (
        <>
            <Header />
            <Container>
                <div style={{ minHeight: 700 }}>
                    <h1>Thank You!</h1>
                    <p className="intro">Thank you for donating to Live Church Solutions.</p>
                    <br />
                </div>
            </Container>
            <Footer />
        </>
    );
}
