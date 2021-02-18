import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import ReactGA from "react-ga";

export const GetStarted: React.FC = () => {

    const logCode = () => { ReactGA.event({ category: 'Contribute', action: 'Code' }); }
    const logChat = () => { ReactGA.event({ category: 'Contribute', action: 'Chat' }); }

    return (
        <div id="membersSection" className="homeSection alt">
            <Container>
                <h2>Ready to Get Started?</h2>
                <Row>
                    <Col>
                        <p>We use Docker to help make the initial setup as easy as possible for developers.  If you haven't already, install <a href="https://www.docker.com/products/docker-desktop" rel="noopener noreferrer" target="_blank">Docker Desktop</a> and you can be up and running in minutes.  Once it is installed follow the setup instructions in the <a href="https://github.com/LiveChurchSolutions/Docker" target="_blank" rel="noopener noreferrer">README</a>.</p>

                    </Col>
                    <Col>
                        <p><b>Get in touch!</b> We would love to hear from you.  Join our <a href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg" target="_blank" rel="noopener noreferrer">Slack channel</a> and introduce yourself or ask any questions you like.  There is almost always someone around, regardless of the time of day.</p>

                    </Col>
                </Row>
                <Row>
                    <Col><a href="https://github.com/LiveChurchSolutions/Docker" className="btn btn-primary btn-block btn-lg" onClick={logCode} target="_blank" rel="noopener noreferrer" >Start Coding</a></Col>
                    <Col><a href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg" className="btn btn-success btn-block btn-lg" onClick={logChat} target="_blank" rel="noopener noreferrer" >Let's Talk</a></Col>
                </Row>
            </Container>
        </div>
    );
}
