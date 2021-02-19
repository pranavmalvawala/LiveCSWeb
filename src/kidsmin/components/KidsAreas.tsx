import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export const KidsAreas = () => {
    return (
        <div className="homeSection alt" id="membersSection">
            <Container>
                <Row>
                    <h2>What Exactly Do We Do?</h2>
                    <p>We are very methodical in our approach, making sure nothing gets overlooked.  We'll start by discussing your current situation..... We'll then put together a plan addressing following items and <u>help you implement it</u> over the next several months.</p>
                    <Col lg={8}>
                        <ul className="checkList">
                            <li><b>Volunteers</b> - We will help you learn how to recognize potential volunteers.  How to approach them about serving.  Build a volunteer training program.  Learn how to ensure they don't get burnt out.</li>
                            <li><b>Child Safety</b> - We will help you address all aspect of child safety; developing protocols, show you how to perform background checks, implement a child checkin system, ensure children only go home with authorized parents.</li>
                            <li><b>Cirriculum</b> - We'll show you some great options for free and cheap children's cirriculum.  Help you find music and games that keep the kids engaged.  Take the hassle out of preparing and presenting the cirriculum.</li>
                            <li><b>Fourth Item</b> - Mauris egestas bibendum purus, quis mollis lacus. Aenean lobortis elit felis, ut fringilla eros dictum ut. Integer eu ultrices nisi. Aliquam maximus metus eget justo ultricies, non laoreet dui facilisis.</li>
                            <li><b>Fifth Item</b> - Donec eleifend dapibus fermentum. Ut tincidunt vulputate diam, ac scelerisque metus scelerisque eu. Vestibulum semper dictum vulputate. Cras gravida cursus elit, ut iaculis magna sagittis et.</li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <img src="http://livecs-web.s3-website.us-east-2.amazonaws.com/images/solutions/kidsmin.jpg" className="img-fluid" alt="childrens ministry" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
