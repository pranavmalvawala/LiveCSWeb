import React from "react"
import { Donate } from "./Donate";
import { EnvironmentHelper } from "../helpers";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export const DonateContainer: React.FC = () => {

  const stripePromise = loadStripe(EnvironmentHelper.StripePK);

  return (
    <Elements stripe={stripePromise}>
      <Donate />
    </Elements>
  );
}
