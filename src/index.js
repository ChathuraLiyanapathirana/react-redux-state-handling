import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// state handle using redux toolkit
// import App from "./toolkit/App.js";

// state handle using redux saga
import App from "./saga/App";

// state handle using redux thunk
// import App from "./thunk/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>SAGA / THUNK / TOOLKIT</h1>
    <App />
  </StrictMode>
);
