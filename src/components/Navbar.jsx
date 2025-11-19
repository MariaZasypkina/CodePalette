import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
        <header className="header-wrapper">
      <div className="header-inner">
        <Link to="/">
          <h1 className="logo-title">Creative Code Palette</h1>
          <p className="logo-sub">by CCP Studio</p>
        </Link>
        <ul className="flex space-x-6 text-sage-dark font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/templates">Templates</Link></li>
          <li><Link to="/realArt">Real Art</Link></li>
          <li><Link to="/play-and-win">Play & Win</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/member">Sign In</Link></li>
        </ul>
        </div>
    </header>
  );
}
