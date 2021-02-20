import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

export const KidsOverview = () => {
    return (
        <div className="homeSection">
            <Container>
                <h1>Children's Ministry Coaching</h1>
                <Row>
                    <Col lg={8}>
                        <p className="intro">Welcome! My name is Micheal Byrd. I am the Children’s Minister at Cedar Ridge Christian Church overseeing all campuses’ children’s ministries. I have 20 years of ministry experience spanning both youth and children’s ministry in Mississippi, Tennessee, Texas, and Oklahoma. I am passionate about both children’s ministry and technology.</p>
                        <p>When I began my career in children's ministry 20 years ago, there were times that I felt so lost within the long list of things I needed to do and only one week to do them in.  Building a team, finding the best curriculum, worship, background checks, working within the church's mission/vision, partnering with the youth minister (if we had one or I was doing that job too), the list goes on and and on and the smaller the church the longer the list!!</p>
                        <p>Fortunately, I had found people I could learn from, people that poured into my life and mentored me along the way.  I made some mistakes, tried to learn from those mistakes and I got better. I learned the value of turning habits into processes and keeping to a schedule. There were many tips I learned from books, podcasts and other ministers that I implemented into my own ministry to keep me from feeling overwhelmed and to help me accomplish more within my regular week.</p>
                        <p>I want to help others the way so many helped me along the way. Saving other ministers time and heart ache of learning the hard way and on their own is always be my goal. This is why I decided to become a children’s minister coach and thankfully I have found other seasoned ministers to  join and support me in this mission!</p>
                        <p>There is no better time than now to reach out, receive encouragement, learn new things and develop your skills to help you be more efficient, more confident and more effective in ministry!</p>
                    </Col>
                    <Col lg={4}>

                        <Card id="kidsMinQuestions">
                            <Card.Header>
                                <Card.Title>Some Questions I Had</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ul className="checkList">
                                    <li>How do I find and retain volunteers?</li>
                                    <li>How do I maintain a safe environment for kids and leaders?</li>
                                    <li>How do I implement a fun and effective curriculum/program?</li>
                                    <li>How do I prevent burn out?</li>
                                    <li>How do I partner with parents?</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>
        </div >
    );
}
