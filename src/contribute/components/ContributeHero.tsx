import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const ContributeHero: React.FC = () => (
  <div id="hero">
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} className="text-center">
          <h1>Contribute to<br /><span>Completely Free, Open-Source</span><br />Apps for Churches.</h1>
        </Col>
      </Row>
      <div style={{ marginTop: 20 }}>
        <p>At Live Church Solutions we are actively working to build a suite of free, open-source applications to meet the most common needs churches have.  Our ultimate goal is to offer a set of turn-key “church-in-a-box” solutions that meet all the technical needs of the average church.</p>
        <h4>Why Open -Source?</h4>
        <p>Collectively, the Church spends over $800 million per year on software to help manage operations.  We believe that it is possible to free up these funds to be put to much better use in directly fulfilling the mission of Christ.  This depends on Christians that God has blessed with technical ability coming together to freely offer the gifts they have been blessed with.</p>
      </div>
    </Container>
  </div>
)
