import React from "react";
import "../../App.css";
import Requestform from "../Requestform";
import Footer from "../Footer";

export default function Request() {
  return (
    <>
      <div className="request">
        <Requestform />
      </div>
      <Footer />
    </>
  );
}
