import React from "react";
import { Footer, Header } from "../components"
import { Container } from "react-bootstrap";
import { ApiHelper, EnvironmentHelper } from "../helpers";

export const ThankYou: React.FC = (props: any) => {
    const [receiptUrl, setReceiptUrl] = React.useState("");

    const logSession = () => {
        let search = new URLSearchParams(props.location.search);
        var sessionId = search.get("sessionId");
        if (sessionId !== null) {
            const data = { sessionId: sessionId, churchId: EnvironmentHelper.ChurchId }
            ApiHelper.postAnonymous("/donate/log", data, "GivingApi").then((data: any) => { setReceiptUrl(data.receiptUrl); });
        }
    }

    const getReceipt = () => {
        if (receiptUrl === "") return <></>;
        else return (<p><a href={receiptUrl} target="_blank" rel="noreferrer noopener" >View Receipt</a></p>);
    }

    React.useEffect(logSession, []);


    return (
        <>
            <Header />
            <Container>
                <div style={{ minHeight: 700 }}>
                    <h1>Thank You!</h1>
                    <p className="intro">Thank you for donating to Live Church Solutions.</p>
                    <br />
                    {getReceipt()}
                </div>
            </Container>
            <Footer />
        </>
    );
}
