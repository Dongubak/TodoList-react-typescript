import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import globalStyles from "./styles/globalStyles";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);