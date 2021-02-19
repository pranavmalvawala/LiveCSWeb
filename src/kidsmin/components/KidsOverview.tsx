import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

export const KidsOverview = () => {
    return (
        <div className="homeSection">
            <Container>
                <h1>Children's Ministry Coaching</h1>
                <Row>
                    <Col lg={8}>
                        <p className="intro">Welcome!  My name is Micheal Byrd I am the Children’s Minister at Cedar Ridge Christian Church overseeing all campuses’ children’s ministries. I have 20 years of ministry experience spanning both youth and children’s ministry in Mississippi, Tennessee, Texas, and Oklahoma. I am passionate about both children’s ministry and technology.</p>
                        <p>When I began my career in children's ministry 20 years ago, I felt so lost...  Suspendisse auctor, turpis ac volutpat venenatis, massa est malesuada libero, dictum volutpat dolor eros et orci. Aenean ut pellentesque nunc, et eleifend urna. Curabitur eget magna quis eros ullamcorper consequat. Morbi a ultrices ligula.</p>
                        <p>Fortunately, I had found people I could learn from..  I made some mistakes... and I got better..  I learned the value of turning habits into processes...</p>
                        <p>I want to save others from going through the years or learning the hard way that I had to endure....  That's why I'm decided to become a children's minister coach.  Thankfully others have come along to join and support me in this mission.</p>
                    </Col>
                    <Col lg={4}>

                        <Card id="kidsMinQuestions">
                            <Card.Header>
                                <Card.Title>Some Questions I Had</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ul className="checkList">
                                    <li>How do I find volunteers?</li>
                                    <li>How do I keep them?</li>
                                    <li>Third question?</li>
                                    <li>A fourth question even?</li>
                                    <li>Five questions?</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    );
}
