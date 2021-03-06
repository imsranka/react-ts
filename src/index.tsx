import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserDetails from "./examples/User";
import Form from "./examples/Form";

ReactDOM.render(
  <React.StrictMode>
    {/* <App headerText={"This is a header"} /> */}
    {/* uncomment below line to override default text */}
    {/* <App headerText={"This is a header"} extraText={"Some extra text"}/> */}
    {/* uncomment below line to see what happens if you pass a number instead of string */}
    {/* <App headerText={"This is a header"} extraText={10} /> */}
    {/* <UserDetails /> */}
    <Form />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
