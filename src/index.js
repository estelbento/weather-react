import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather React App</h1>
      <App />
      <br />
      <small>
        <a
          href="https://github.com/estelbento/weather-react"
          rel="noreferrer"
          target="_blank"
        >
          open-sourced code
        </a>
        {""} by Estela Bento
      </small>
    </div>
  </StrictMode>
);
