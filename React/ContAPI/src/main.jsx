import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextStoreProv from "./store/ContextStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextStoreProv>
      <App />
    </ContextStoreProv>
  </StrictMode>
);
