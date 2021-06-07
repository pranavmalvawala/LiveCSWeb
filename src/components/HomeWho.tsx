import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap";

export const HomeWho: React.FC = () => (
  <div className="homeSection" id="homeWho">
    <Container>

      <h2>Who We Are</h2>
      <p>
                    Live Church Solutions is run entirely by volunteers with a passion for helping to spread the gospel of Christ. If you might be interested in volunteering, see our partnership page to learn how you can get involved.Live Church Solutions is run entirely by volunteers with a passion for helping to spread the gospel of Christ. If you might be interested in volunteering, see our <a href="/partnership/">partnership page</a> to learn how you can get involved.
      </p>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/home/byrd.jpg" />
            <Card.Body>
              <Card.Title>Micheal Byrd</Card.Title>
              <p>Micheal joined Cedar Ridge Christian Church in the fall of 2009 as the Children’s Minister overseeing all campus’ children’s ministries. Micheal has 20 years of ministry experience spanning both youth and children’s ministry in Mississippi, Tennessee, Texas, and Oklahoma. He is passionate about both children’s ministry and technology. He has helped his church with launching streaming capabilities for online services and continues to be heavily involved with technology in ministry.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/home/peterson.jpg" />
            <Card.Body>
              <Card.Title>Jeremy Peterson</Card.Title>
              <p>Jeremy Peterson joined Manchester Christian Church in the summer of 2013 as the Executive Pastor overseeing staffing and operations. Jeremy has 20 years of ministry experience as a Pastor of Student Ministries and as a Campus Pastor at Compass Christian Church, a multisite church in Texas. He has a passion to help churches break through challenges they may face includingimplementing new systems, process, or best practices.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/home/zongker.jpg" />
            <Card.Body>
              <Card.Title>Jeremy Zongker</Card.Title>
              <p>Jeremy Zongker is a web developer with over 20 years’ experience developing highly scalable applications and websites. He has led a home Bible study group for the past 10 years and has been actively involved with setting up and running online streaming at his church. He joined Live Church Solutions in 2020 to lead in-house development efforts. Jeremy has a passion for providing free and open solutions to address common technical challenges churches face.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)
