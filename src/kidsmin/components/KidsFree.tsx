import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const KidsFree = () => {
    return (
        <div className="homeSection alt2">
            <Container>
                <h2>There is <u>NO</u> Fee for Our Services</h2>
                <Row>
                    <Col lg={8}>
                        <p>We are not a consulting company.  We are your ministry partner.  Thanks to the generosity of our donors is see the value in having thriving children's programs throughout the Church,
                        we are able to offer this service completely free of charge to churches......</p>
                        <p>No matter what kind of ministry you are doing this is a lot at stake.  We all feel the real pressure and want to do our best day in and day out. The fact is it can be hard, tiring and confusing. There are all kinds of resources to read and listen to but sometimes having a real person talk to, gives you the confidence, encouragement and knowledge to forge ahead.  We want to be that lifeline for children's ministers.</p>
                    </Col>
                    <Col lg={4}>
                        <img src="http://livecs-web.s3-website.us-east-2.amazonaws.com/images/solutions/kidsmin.jpg" className="img-fluid" alt="childrens ministry" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
}
