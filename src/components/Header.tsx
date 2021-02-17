import React from "react"
import { Row, Col, Container } from "react-bootstrap";
import { EnvironmentHelper } from "../helpers";

export const Header: React.FC = () => {
    return (<>
        <div id="navbar" className="fixed-top">
            <Container>
                <Row>
                    <div className="col-4"><a className="navbar-brand" href="/"><img src="/images/logo.png" alt="logo" /></a></div>
                    <div className="col-8 text-right" id="navRight" >
                        <a href="/" className="link">About Us</a>
                        <a href="/" className="link">Solutions</a>
                        <a href="/" className="link">Partner</a>
                    </div>
                </Row>
            </Container>
        </div>
        <div id="navSpacer" ></div>
    </>);
}