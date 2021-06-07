import React from "react"
import { Row, Col, Container } from "react-bootstrap";

export const HomeStats: React.FC = () => (
  <div className="homeSection alt" id="homeStats">
    <Container className="text-center">
      <Row>
        <Col style={{ borderRight: "1px solid #FFF" }}><h2>100+<br />Churches Helped</h2></Col>
        <Col style={{ borderRight: "1px solid #FFF" }}><h2>3<br />Real Solutions</h2></Col>
        <Col><h2>9<br />Years Running</h2></Col>
      </Row>
    </Container>
  </div>
)

