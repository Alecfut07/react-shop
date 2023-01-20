import React from "react";
import ReactDOM from "react-dom";
import App from "@routes/App";

ReactDOM.render(<App />, document.getElementById("app"));

/*
ReactDOM.render is no longer supported in React 18. 
Use createRoot instead. Until you switch to the new API, 
your app will behave as if it’s running React 17. 
Learn more: https://reactjs.org/link/switch-to-createroot

USE THIS FOR REACT 18:
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
*/
