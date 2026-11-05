import React from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/MariaZasypkina" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maria-zasypkina",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/creativecodepalette/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/100067663824684",
  },
];

export default function Footer() {
  return (
    <footer className="header-wrapper text-sage-dark text-center py-4">
      <div className="flex justify-center gap-6 mb-2">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lavender underline"
          >
            {social.label}
          </a>
        ))}
      </div>
      <h5>
        © 2026 Creative Code Palette. A project by CCP Studio. All rights
        reserved.
      </h5>
    </footer>
  );
}
