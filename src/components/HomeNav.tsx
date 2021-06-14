import React from "react"
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeNav: React.FC = () => (<>
  <div id="homeNavbar" className="fixed-top">
    <Container>
      <Row>
        <div className="col-4"><Link className="navbar-brand" to="/"><img src="/images/logo.png" alt="logo" /></Link></div>
        <div className="col-8 text-right" id="navRight">
          <Link to="/" className="link">About Us</Link>
          <Link to="/solutions" className="link">Solutions</Link>
          <Link to="/partner" className="link">Partner</Link>
        </div>
      </Row>
    </Container>
  </div>
  <div id="navSpacer"></div>
</>)
