import React from "react";
import ReactDOM from "react-dom";
import Converter from "./Converter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 align="center"> Currency Converter - React.JS </h1>
      <Converter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
