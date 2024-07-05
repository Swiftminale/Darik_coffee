import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's being imported above

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
