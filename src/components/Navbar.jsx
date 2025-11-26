import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="header-wrapper">
      <div className="header-inner">
        <Link to="/">
          <h1 className="logo-title">Creative Code Palette</h1>
          <p className="logo-sub">by CCP Studio</p>
        </Link>

        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-lavender-dark hover:bg-sage-light transition"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/art">Real Art</Link>
          </li>
          <li>
            <Link to="/play-and-win">Play & Win</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/member">Sign In</Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden px-6 pb-4 border-t border-sage bg-white">
          <ul className="flex flex-col space-y-3 text-sage-dark font-medium">
            <li>
              <Link to="/" onClick={handleClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleClose}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={handleClose}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/art" onClick={handleClose}>
                Real Art
              </Link>
            </li>
            <li>
              <Link to="/play-and-win" onClick={handleClose}>
                Play & Win
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClose}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/member" onClick={handleClose}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
