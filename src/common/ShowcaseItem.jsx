import React from "react";

export default function ShowcaseItem({ item, posterImage }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <p className="font-semibold text-sage-dark">{item.title}</p>
      </div>
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={`${item.title} screen`}
          className={`w-full h-full object-cover ${item.className ?? ""}`}
        />
      ) : (
        <video
          src={item.src}
          controls
          className="w-full h-full"
          poster={posterImage}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
