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
      <div className="form_container">
        <form className="cf" ref={form} onSubmit={sendEmail}>
          <div className="half left cf">
            <input type="text" placeholder="Name" name="user_name" />
            <input type="email" placeholder="Email address" name="user_email" />
          </div>
          <div className="half right cf">
            <textarea
              name="message"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>
          <input type="submit" value="Request" id="input-submit" />
        </form>
      </div>
    </>
  );
}

export default Requestform;
