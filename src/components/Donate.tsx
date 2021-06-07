import React from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Row, Col, FormGroup, FormLabel, FormControl, InputGroup } from "react-bootstrap";
import { ErrorMessages, InputBox } from "../appBase/components";
import { ApiHelper, EnvironmentHelper } from "../helpers";

export const Donate: React.FC = () => {

  const [errors, setErrors] = React.useState<string[]>([]);
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [amount, setAmount] = React.useState("");

  //const elements = useElements();
  const stripe = useStripe();
  const elements = useElements();

  const handleDonate = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    /*
                const data = {
                    churchId: EnvironmentHelper.ChurchId,
                    successUrl: window.location.href,
                    cancelUrl: window.location.href,
                    amount: 50
                }
                ApiHelper.postAnonymous("/donate/checkout", data, "GivingApi").then((resp: any) => {
                    stripe.redirectToCheckout({ sessionId: resp.sessionId });
                });
                */
    /*
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) setErrors([error.message]);
        else {
            console.log(paymentMethod);
        }*/
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
    case "name": setName(e.target.value); break;
    case "address": setAddress(e.target.value); break;
    case "city": setCity(e.target.value); break;
    case "state": setState(e.target.value); break;
    case "zip": setZip(e.target.value); break;
    case "amount": setAmount(e.target.value); break;
    }
  }

  return (
    <>
      <ErrorMessages errors={errors} />
      <InputBox headerIcon="" headerText="Donate with Card" saveFunction={handleDonate} saveText="Donate">
        <FormGroup>
          <div className="form-control">
            <CardElement
              options={{
                style: {
                  base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
                  invalid: { color: "#9e2146" },
                },
              }}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <FormControl name="name" type="text" value={name} onChange={handleChange} placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <FormControl name="address" type="text" value={address} onChange={handleChange} placeholder="Address" />
        </FormGroup>

        <Row>
          <Col xl={6}>
            <FormGroup>
              <FormControl name="city" type="text" value={city} onChange={handleChange} placeholder="City" />
            </FormGroup>
          </Col>
          <Col xl={3}>
            <FormGroup>
              <FormControl name="state" type="text" value={state} onChange={handleChange} placeholder="State" />
            </FormGroup>
          </Col>
          <Col xl={3}>
            <FormGroup>
              <FormControl name="zip" type="text" value={zip} onChange={handleChange} placeholder="Zip" />
            </FormGroup>
          </Col>
        </Row>
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
