import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Try from "./pages/Try";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Hooks from "./pages/Hooks";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Try />} />
        <Route path="/hooks" element={<Hooks />} />
      </Routes>
    </Router>
  </StrictMode>
);
