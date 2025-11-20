import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Templates from "./pages/Shop";
import PlayAndWin from "./pages/PlayAndWin";
import ArtHive from "./pages/artHive";
import KindNet from "./pages/KindNet";
import Fencing from "./pages/Fencing";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Shop from "./pages/Shop";
import RealArt from "./pages/RealArt";
import SignIn from "./pages/SignIn";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/play-and-win" element={<PlayAndWin />} />
      <Route path="/arthive" element={<ArtHive />} />
      <Route path="/kindnet" element={<KindNet />} />
      <Route path="/fencing" element={<Fencing />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/art" element={<RealArt />} />
      <Route path="/member" element={<SignIn />} />
    </Routes>
  );
}
