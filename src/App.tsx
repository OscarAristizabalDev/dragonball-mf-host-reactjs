import React from "react";
import ReactDOM from "react-dom/client";


import { Navbar } from "mf_navbar/Navbar";

import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(<App />);