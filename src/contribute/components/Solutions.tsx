import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const Solutions: React.FC = () => {
    return (
        <div id="membersSection" className="homeSection alt">
            <Container>
                <h2>Our Solutions</h2>
                <Row>
                    <Col lg={6}>
                        <ul className="checkList">
                            <li><b>CHUMS</b> (<u>Chu</u>rch <u>M</u>anagement <u>S</u>oftware) – This is the backend office component to enable churches to track key data such as members, groups, attendance, giving, and shepherding progress.</li>
                            <li><b>CHUMS Checkin</b> – A self-checkin attendance solution that utilizes low-cost tablets.  The software prints name tags for children and matching pick-up slips for parents to help ensure child safety.</li>
                            <li><b>StreamingLive</b> – Wraps a church's live stream from YouTube, Facebook, Vimeo, etc with resources to help keep the members connected.  Includes a live chat feature with private prayer requests, embedable sermon notes and links to giving, next steps and other common needs.</li>
                            <li><b>B1 Church App</b> – A mobile application for iOS and Android to help congregations connect.  It allows members to view the live stream and past services, give online, mark attendance, and view announcements.</li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <img src="/images/contribute/apps.png" className="img-fluid" alt="apps" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}