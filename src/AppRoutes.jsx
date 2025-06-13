import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Templates from "./pages/Templates";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/templates" element={<Templates />} />
    </Routes>
  );
}
