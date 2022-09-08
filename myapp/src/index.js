import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const loc = window.location.href.split("?");

const desk = () => {
  return <App />;
};
const mob = () => {
  const loc1 = loc[1].split("=")[1];
  console.log(loc1);
  if (loc1 === "none") return <App />;
};
const handl = () => {
  if (loc.length === 1) return desk();
  else if (loc.length > 1) return mob();
};

root.render(<React.StrictMode>{handl()}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
