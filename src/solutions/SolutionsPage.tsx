import React from "react";
import { Footer, Header } from "../components"
import { Row, Col, Container, Button } from "react-bootstrap";

export const SolutionsPage = () => (
  <>
    <Header />
    <Container>
      <h1>Solutions</h1>
      <p className="intro">Churches have many different technical needs that require different solutions; some custom, some not. We have focussed on the top 3 technology needs of churches and built platforms to help meet those effectively; getting online, live streaming, and church management. Although these are the most common technical needs, they are not the only technical needs that churches face. We’re here to help no matter what your needs are. Best of all, all of our services are provided <u>100% free of charge</u> to churches and ministries.</p>
      <br />
    </Container>

    <div className="homeSection alt2">
      <Container>
        <h2>Church Management Software</h2>
        <Row>
          <Col lg={8}>
            <p>To grow efficiently, it is important that churches track key information like attendance, giving and group membership. It is also important to ensure policies such as child drop-off and pickup are being followed consistently for safety reasons, and to ensure and people you should be following up with are not falling through the cracks.</p>
            <p>Solid church management software makes this process infinitely easier by replacing printed reports, hand-written notes, and spreadsheets with a single repository for tracking everything that happens in your church.</p>
            <p>These platforms have traditionally been a significant monthly expense which is why we built CHUMS, to allow smaller churches to have the same level of professionalism as larger churches, without the expense.</p>
          </Col>
          <Col lg={4}><img src="/images/solutions/chums.png" alt="CHUMS" className="img-fluid" /></Col>
        </Row>
        <div className="text-center"><Button variant="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="/chums/">IMPROVE YOUR WORKFLOWS NOW</Button></div>
      </Container>
    </div>

    <div className="homeSection">
      <Container>
        <h2>Live Streaming</h2>
        <Row>
          <Col lg={8}>
            <p>The rise of COVID has created a new need that many churches did not anticipate; the need to live stream their services. Many smaller churches previously considered this to be a luxury reserved for larger churches. This is no longer the case and many churches are facing new challenges of how to do online church well.</p>
            <p>Your online church service should be more than just a video people watch, it should be an opportunity for your members and visitors to connect to each other, pray for one another and have the full rich church experience at home that they would have in person.</p>
            <p>We built Streaming Live with this goal in mind. To ensure churches can continue to meet virtually without having to sacrifice the connection that comes with in person services. And that they can do so without having to stretch already tight budgets.</p>
          </Col>
          <Col lg={4}><img src="/images/solutions/streaminglive.png" alt="StreamingLive" className="img-fluid" /></Col>
        </Row>
        <div className="text-center"><Button variant="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="/streaming/">START STREAMING TODAY</Button></div>
      </Container>
    </div>

    <div className="homeSection alt2">
      <Container>
        <h2>Custom Websites</h2>
        <Row>
          <Col lg={8}>
            <p>One of the first technical challenge many small churches face is the need for a basic website. First time guests need a place to easily obtain information about your church, your beliefs, and when and where you meet. Members need a place to stay informed about current programs and upcoming events.</p>
            <p>We meet this need for churches by providing a turn-key website solution that is easily customizable and can grow with you. We provide any church with a free WordPress site with a choice of several church templates. This site is a starting point that you can fully customize to meet your needs. We host this site for you completely free of charge. Simply fill out the form and you can be online and begin customizing your site within a few minutes.</p>
          </Col>
          <Col lg={4}><img src="/images/solutions/websites.png" alt="Custom Websites" className="img-fluid" /></Col>
        </Row>
        <div className="text-center"><Button variant="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="https://yoursite.church/">GET ONLINE NOW</Button></div>
      </Container>
    </div>

    <div className="homeSection">
      <Container>
        <h2>Children’s Ministry Coaching</h2>
        <Row>
          <Col lg={8}>
            <p>Children’s Ministry is at least half, if not more administration. If a Children’s Minster or leader’s strength isn’t administrative, it is not a strength that develops on its own. Fortunately, with technology and a few simple principles, administration can become a great strength! Whether you are a Senior Minister that is needing a hands off approach, a volunteer lead ministry or a full time Children’s Minister that wants more time for relationships and less time stuck behind a computer, we can help!</p>
            <p>Please take a moment to fill out this short form and someone from our team will reach out to you. All consulting through Live Church Solutions is 100% free. We are able to provide our free programs and consulting because of generous donors!</p>
          </Col>
          <Col lg={4}><img src="/images/solutions/kidsmin.jpg" alt="Childrens Ministry" className="img-fluid" /></Col>
        </Row>
        <div className="text-center"><Button variant="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="https://docs.google.com/forms/d/e/1FAIpQLScVBpw37MhIsj19kJIqGW77sbreerlG5XHOSScv6bU80KRJ6g/viewform">GET STARTED</Button></div>
      </Container>
    </div>

    <div className="homeSection alt2">
      <Container>
        <h2>Technology Consulting</h2>
        <Row>
          <Col lg={8}>
            <p>We know not all the needs of your church fit into one of these buckets. We want to help you with all the technical needs of your church. Anything from guidance on AV and camera equipment, to network setup or delivering video messages to classrooms. We have helped meet the technical needs of over a hundred churches and would like to help you as well. We do not charge any consulting fees at all. We are not a vendor, we are your ministry partner.</p>
          </Col>
          <Col lg={4}><img src="/images/solutions/tech.png" alt="Technology Consulting" className="img-fluid" /></Col>
        </Row>
        <br />
        <div className="text-center"><Button variant="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="#">Contact Us</Button></div>
        <br /><br />
      </Container>
    </div>

    <Footer />
  </>
)
