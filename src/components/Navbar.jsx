import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/navConfig";

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
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden px-6 pb-4 border-t border-sage bg-white">
          <ul className="flex flex-col space-y-3 text-sage-dark font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={handleClose}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
