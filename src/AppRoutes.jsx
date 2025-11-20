import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Templates from "./pages/Templates";
import PlayAndWin from "./pages/PlayAndWin";
import ArtHive from "./pages/artHive";
import KindNet from "./pages/KindNet";
import Fencing from "./pages/Fencing";
import AboutUs from "./pages/AboutUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/play-and-win" element={<PlayAndWin />} />
      <Route path="/arthive" element={<ArtHive />} />
      <Route path="/kindnet" element={<KindNet />} />
      <Route path="/fencing" element={<Fencing />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}
