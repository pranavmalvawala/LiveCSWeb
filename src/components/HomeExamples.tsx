import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap";

export const HomeExamples: React.FC = () => (
  <div className="homeSection" id="homeExamples">
    <Container>
      <h2>Churches and non-profits we have worked with</h2>
      <div className="text-center" style={{ marginBottom: 30 }}>
        <p>We desire to see the local church grow by providing modern technology solutions, logistics, instruction, mentoring and spiritual content which will be a catalyst to help the love for Jesus Christ inspire them to grow and reach more people for Him.</p>
      </div>
      <Row>
        <Col>
          <a href="http://houseofpause.org/">
            <Card>
              <Card.Img variant="top" src="/images/home/hop.png" />
              <Card.Body>
                <Card.Title>THE HOUSE OF PAUSE</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col>
          <a href="http://bccjoplin.org/">
            <Card>
              <Card.Img variant="top" src="/images/home/blendville.png" />
              <Card.Body>
                <Card.Title>BLENDVILLE CHRISTIAN CHURCH</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col>
          <a href="https://tyrochristianschool.org/">
            <Card>
              <Card.Img variant="top" src="/images/home/tyro.png" />
              <Card.Body>
                <Card.Title>TYRO CHRISTIAN SCHOOL</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

      </Row>
    </Container>
  </div>
)
