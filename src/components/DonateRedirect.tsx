import React from "react"
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import { InputBox, } from "../appBase/components";
import { ApiHelper, EnvironmentHelper } from "../helpers";
import { loadStripe } from '@stripe/stripe-js';


export const DonateRedirect: React.FC = () => {
    const [amount, setAmount] = React.useState(25);

    const handleDonate = async () => {
        //const gateways = await ApiHelper.getAnonymous("/gateways", "GivingApi");
        //if (gateways.length > 0) {
        //const stripePromise = loadStripe(gateways[0].primaryKey);
        const stripePromise = loadStripe(EnvironmentHelper.StripePK);
        const stripe = await stripePromise;
        const data = {
            churchId: EnvironmentHelper.ChurchId,
            successUrl: window.location.origin.toString() + "/thankyou",
            cancelUrl: window.location.href,
            amount: amount
        }
        ApiHelper.postAnonymous("/donate/checkout", data, "GivingApi").then((resp: any) => {
            stripe.redirectToCheckout({ sessionId: resp.sessionId });
        });
        //}
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "amount": setAmount(parseInt(e.target.value, 0)); break;
        }
    }

    return (
        <>
            <InputBox headerIcon="" headerText="Donate with Card" saveFunction={handleDonate} saveText="Donate" >
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Prepend><InputGroup.Text>$</InputGroup.Text></InputGroup.Prepend>
                        <FormControl name="amount" value={amount} onChange={handleChange} placeholder="Amount" type="number" min="5.00" step="1" />
                        <InputGroup.Append><InputGroup.Text>.00</InputGroup.Text></InputGroup.Append>
                    </InputGroup>
                </FormGroup>
            </InputBox>
        </>
    );
}