import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { movies } from "./movieDummy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App {...movies}/>
  </React.StrictMode>
);
