import React from "react";
import logo from "./logo.svg";
import "./App.css";
import buttonStyle from "./elements/Button/Button.module.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={buttonStyle.red}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          // className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyle.green}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
