import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap";

export const HomeServices: React.FC = () => (
  <div id="homeServices">
    <Container>
      <Row>
        <Col xl={{ span: 10, offset: 1 }}>
          <Card>
            <Card.Body>
              <Row className="text-center">
                <Col lg={4} style={{ borderRight: "1px solid #CCC" }}>
                  <div className="rounded-circle bg-info"><i className="fas fa-play"></i></div>
                  <h4>Free Streaming</h4>
                  <p>StreamingLive provides a means for your church congregation to gather at set times to worship, connect and grow together during your church service via live streaming.</p>
                  <a href="https://streaminglive.church/" className="btn btn-info">Learn More</a>
                </Col>
                <Col lg={4} style={{ borderRight: "1px solid #CCC" }}>
                  <div className="rounded-circle bg-primary"><i className="fas fa-cloud"></i></div>
                  <h4>Free Church Management Software</h4>
                  <p>CHUMS offers a full church management system. It solves many of the common needs such as tracking attendance, membership, and donations.</p>
                  <a href="https://chums.org/" className="btn btn-primary">Learn More</a>
                </Col>
                <Col lg={4}>
                  <div className="rounded-circle bg-warning"><i className="fas fa-book-reader"></i></div>
                  <h4>Free Curriculum</h4>
                  <p>Lessons.church provides free, high quality, video curriculum for both children and adults that anyone can easily download and customize in minutes.</p>
                  <a href="https://lessons.church/" className="btn btn-warning" style={{ color: "#FFF" }}>Learn More</a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)
