import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export const Footer: React.FC = () => {
    return (
        <div id="footer">
            <Container>
                <div className="text-center">
                    <Row>
                        <Col>
                            <h4>Live Church Solutions</h4>
                            <p>
                                1300 Norwood Drive<br />
                            Suite 100<br />
                            Bedford, TX 76022
                        </p>
                        </Col>
                        <Col>
                            <h4>Get in Touch</h4>
                            <p>
                                <i className="far fa-envelope"></i> &nbsp; <a href="mailto:%20micheal@livechurchsolutions.org">micheal@livecs.org</a>
                            </p>
                            <p>
                                <i className="fas fa-phone"></i> &nbsp; <a href="tel:+19189942638" target="_blank" rel="noopener">(918) 994-2638</a>
                            </p>
                        </Col>
                        <Col>
                            <h4>About Us</h4>
                            <p>Live Church Solutions is a 501(c)(3) organization with EIN 45-5349618</p>
                        </Col>
                        <Col>
                            <img src="/images/logo-footer.png" />
                            <a href="https://www.facebook.com/livecsolutions" target="_blank"><i className="fab fa-facebook-f" style={{ fontSize: 20, color: "#FFF" }}></i></a>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
}
