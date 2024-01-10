import React from "react"; // bug
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app"; // one comment for happiness
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; // one more comment
// one more conmment
const root = ReactDOM.createRoot(
  // one more comment
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// how many times ??
// bug comment
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
