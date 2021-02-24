import React from "react"
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import { Donate, } from "./Donate";
import { ApiHelper, EnvironmentHelper } from "../helpers";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


export const DonateContainer: React.FC = () => {

    const stripePromise = loadStripe(EnvironmentHelper.StripePK);

    return (
        <Elements stripe={stripePromise}>
            <Donate />
        </Elements>
    );
}