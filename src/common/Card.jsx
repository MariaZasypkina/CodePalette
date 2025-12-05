import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
}
