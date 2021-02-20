import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

export const KidsStart = () => {
    return (
        <div className="homeSection">
            <Container>
                <h2>Get Started</h2>
                <Row>
                    <Col lg={8}>
                        <p>
                            Rather than asking you to fill out forms and questionaires, we thought it would be best to start with a quick 15 minute conversation.
                            There is no commitment and no expectations, just a chance to talk and learn about your current environment and how we might be able to help.
                            Just use the calendar button to pick an available time and we'll chat.
                        </p>
                    </Col>
                    <Col lg={4}>
                        <div className="text-center">
                            <Button size="lg" variant="primary" href="https://calendly.com/micheallcs/15min" >Schedule a Meeting</Button>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}
