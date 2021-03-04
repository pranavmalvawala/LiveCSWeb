import React from "react";
import { Footer, Header } from "../components"
import { Container, Row, Col } from "react-bootstrap";
import { DonateRedirect } from "../components/DonateRedirect";


export const PartnerPage = () => {


    return (
        <>
            <Header />
            <Container>
                <h1>Solutions</h1>
                <p className="intro">Thank you for considering partnering with Live Church Solutions. Live Church Solutions is a non-profit organization in the state of Oklahoma that relies on the donations of churches, individuals and organization to continue helping other churches. Your partnership helps us to continue helping other churches in need.</p>
                <p className="intro">TThere are three key areas we really need your support.</p>
                <br />
            </Container>

            <div className="homeSection alt2">
                <Container>
                    <h2>Volunteer with Live Church Solutions</h2>
                    <p><i>“Freely you have received; freely give.” – Matthew 10:8</i></p>
                    <p>We strongly believe that the Church should be united and work closely together to meet common challenges. And that the work we all do for the kingdom should be freely shared with others. We made the intentional decision to make all our services open source for this reason. Not just so that they could be freely used by any church that needs them, but also so that anyone that God has blessed with technical talents to have a place where they can freely contribute those gifts. If this is you, we welcome you to get in touch.</p>
                    <p>You can view our projects on <a href="https://github.com/LiveChurchSolutions">GitHub</a>, chat with us via <a href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg">Slack</a> or reach us via the <a href="/#contact-4">contact form</a>. Not a programmer? We could still use your help. We continually need assistance testing, getting the word out, or even churches to beta early features.</p>
                </Container>
            </div>

            <div className="homeSection">
                <Container>
                    <h2>Give to Live Church Solutions</h2>

                    <Row>
                        <Col xl={8}>
                            <p>At Live Church Solutions we strive to operate as efficiently as possible.  Our board and leadership volunteer their time without pay because they believe in the mission of using technology to reach people for Christ.  We also made the intentional decision not to charge for any of the services we offer so that price is never a barrier for any church needing help.  That doesn’t mean there aren’t real expenses involved in providing these services.</p>
                            <p>By not just providing our solutions for free, but also hosting them for churches, we are able to remove the technical hurdles that would otherwise stand in the way of many smaller churches being able to use them.  However, this means we take on those hosting expenses.  Although much of the programming is done by volunteers, there are still some development expenses as well.  By supporting Live Church Solutions financially, you enable us to offer our services to more churches, so that they can more effectively serve the Kingdom.</p>
                            <p>We also invite you to select Live Church Solutions as your designated charity on <a href="http://smile.amazon.com/ch/45-5349618">Amazon Smile</a>.</p>
                            <p>Live Church Solutions is a 501-C3 Tax Free Organization; All gifts are tax deductible. Tax ID: 45-5349618</p>
                        </Col>
                        <Col xl={4}>
                            <DonateRedirect />
                            <div>
                                If you prefer you may also send a check to:<br />
                                <div style={{ marginLeft: 20, fontStyle: "italic" }}>
                                    Live Church Solutions<br />
                                    1300 Norwood Drive, Suite 100<br />
                                    Bedford, TX 76022<br />
                                </div>
                            </div>

                        </Col>
                    </Row>



                </Container>
            </div>

            <div className="homeSection alt2">
                <Container>
                    <h2>Pray for Live Church Solutions</h2>
                    <p>We want to seek God’s guidance in all that we do. Will you join us by committing to pray for Live Church Solutions? Pray that God will make the needs of the Church clearly known, that He will shape our plans and equip us to meet those needs, and that He will bring along the right people to join us in this journey.</p>
                </Container>
            </div>

            <Footer />
        </>
    );
}
