import React from "react"
import { FormGroup } from "react-bootstrap";
import { InputBox } from "../appBase/components";

export const DonateOnline: React.FC = () => {

  const handleDonate = async () => {
    window.location.href = "https://livecs.b1.church/donate"
  }

  return (
    <>
      <InputBox headerIcon="" headerText="Donate with Card" saveFunction={handleDonate} saveText="Donate Online">
        <FormGroup>
          <p>Create an account to add and manage your donations online</p>
          <div className="videoWrapper">
            <iframe width="560" height="349" src="https://www.youtube.com/embed/dCI_dn7kvrs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </FormGroup>
      </InputBox>
    </>
  );
}
