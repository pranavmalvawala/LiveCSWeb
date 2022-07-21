import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap";

export const HomeWho: React.FC = () => (
  <div className="homeSection" id="homeWho">
    <Container>

      <h2>Who We Are</h2>
      <p>Live Church Solutions is run entirely by volunteers with a passion for helping to spread the gospel of Christ. If you might be interested in volunteering, see our <a href="/partner/">partnership page</a> to learn how you can get involved.</p>
      <Row>
        <Col md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src="/images/home/byrd.jpg" />
            <Card.Body>
              <Card.Title>Micheal Byrd</Card.Title>
              <p>Micheal joined Cedar Ridge Christian Church in the fall of 2009 as the Children’s Minister overseeing all campus’ children’s ministries. Micheal has 20 years of ministry experience spanning both youth and children’s ministry in Mississippi, Tennessee, Texas, and Oklahoma. He is passionate about both children’s ministry and technology. He has helped his church with launching streaming capabilities for online services and continues to be heavily involved with technology in ministry.</p>
              <br />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src="/images/home/davis.jpg" />
            <Card.Body>
              <Card.Title>Carolyn Davis</Card.Title>
              <p>Carolyn grew up in a minister’s family serving small churches across the Midwest. She has a heart for service and has volunteered in many aspects of children’s ministry in her local church including curriculum planning, set coordination, drama and music. She joined Live Church Solutions in 2021 and is excited to help make high quality, versatile, Bible based curriculum accessible to every church. She teaches weekday preschool and volunteers weekly with her family in the elementary program at her church.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4}>
          <Card>
            <Card.Img variant="top" src="/images/home/zongker.jpg" />
            <Card.Body>
              <Card.Title>Jeremy Zongker</Card.Title>
              <p>Jeremy Zongker is a web developer with over 20 years’ experience developing highly scalable applications and websites. He has led a home Bible study group for the past 10 years and has been actively involved with setting up and running online streaming at his church. He joined Live Church Solutions in 2020 to lead in-house development efforts. Jeremy has a passion for providing free and open solutions to address common technical challenges churches face.</p>
              <br />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)
