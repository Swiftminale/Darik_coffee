import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./RequestForm.css";
import toast from "react-hot-toast";
function Requestform() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t97fc2f",
        "React_Emailijs",
        form.current,
        "ZOeIJ9UaTGobMclQz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          toast.success("Your Request has Been Sent!");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");

          toast.error("An able to send your Request"); //handles errors
        }
      );
  };

  return (
    <>
      <div className="req_right">
        <div
          style={{ color: "#DAA520", fontStyle: "normal", fontSize: "15px" }}
        >
          Premium Coffee You Deserve
        </div>
        <h5>Quality Beyond Your Expectation</h5>
        <p>
          Darik coffee for the past decade, Testi Specialty coffee established a
          purpose, that’s been and will forever be providing our partners which
          we consider part of the Testi family with the finest quality coffee
          the world has to offer.
        </p>
        <p>______________________________________________</p>
      </div>
      <div className="form_container">
        <form className="cf" ref={form} onSubmit={sendEmail}>
          <h1>Request Sample</h1>
          <div className="half left cf">
            <input type="text" placeholder="Full Name" name="user_name" />
            <input type="text" placeholder="Phone" name="user_phone" />
          </div>
          <div className="half right cf">
            <input type="text" placeholder="Company Name" name="company_name" />
            <input type="email" placeholder="Email address" name="user_email" />
          </div>
          <textarea name="message" type="text" placeholder="Message"></textarea>
          <input type="submit" value="Request" id="input-submit" />
        </form>
      </div>
    </>
  );
}

export default Requestform;
