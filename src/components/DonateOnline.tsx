import React from "react"
import { FormGroup } from "react-bootstrap";
import { InputBox } from "../appBase/components";

export const DonateOnline: React.FC = () => {

  const handleDonate = async () => {
    window.location.href = "https://livecs.b1.church/"
  }

  return (
    <>
      <InputBox headerIcon="" headerText="Donate with Card" saveFunction={handleDonate} saveText="Donate Online">
        <FormGroup>
          <p>Create an account to add and manage your donations online</p>
        </FormGroup>
      </InputBox>
    </>
  );
}
