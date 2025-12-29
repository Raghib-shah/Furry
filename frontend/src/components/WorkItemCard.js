import React from "react";

const WorkItemCard = ({ image, quote, name, type, stars = 5 }) => {
  return (
    <div className="bg-surface border border-borderSoft rounded-2xl overflow-hidden hover:border-primary transition-all duration-300">
      {/* Image area */}
      <div className="w-full aspect-[1/1] bg-surface border-b border-borderSoft flex items-center justify-center text-textMuted">
        {image ? (
          <img
            src={image}
            alt={name || "Work item"}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>Image Placeholder</span>
        )}
      </div>

      {/* Text + rating */}
      <div className="p-6">
        {quote && (
          <p className="text-textMuted mb-4 italic">&quot;{quote}&quot;</p>
        )}

        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">{name || "Client name"}</span>
          <span className="text-sm text-textMuted bg-primary/20 px-3 py-1 rounded-full">
            {type || "Commission type"}
          </span>
        </div>

        <div className="flex">
          {Array.from({ length: stars }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-warning"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkItemCard;
