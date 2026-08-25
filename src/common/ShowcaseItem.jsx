import React from "react";

export default function ShowcaseItem({ item, posterImage }) {
  const isVideoPlaceholder = item.type === "video-placeholder";

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <p className="font-semibold text-sage-dark">{item.title}</p>
      </div>
      {item.type === "image" ? (
        <div className="aspect-video bg-white">
          <img
            src={item.src}
            alt={`${item.title} screen`}
            className={`h-full w-full ${item.className ?? "object-cover"}`}
          />
        </div>
      ) : isVideoPlaceholder ? (
        <div className="aspect-video bg-gradient-to-br from-lavender-light via-white to-sage-light flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lavender-dark text-white shadow-md">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path fill="currentColor" d="M8 5.3v13.4a1 1 0 0 0 1.52.86l10.2-6.7a1 1 0 0 0 0-1.72L9.52 4.44A1 1 0 0 0 8 5.3Z" />
            </svg>
          </div>
          <p className="font-semibold text-lavender-dark">Project video coming soon</p>
          <p className="text-sm text-sage-dark">A walkthrough will be added here.</p>
        </div>
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
