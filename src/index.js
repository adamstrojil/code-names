import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { App } from "./components/pages";
import { GameContextProvider } from "./context/GameContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


const container = document.getElementById("root");
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <HashRouter>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
