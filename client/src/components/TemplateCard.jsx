import React from "react";

export default function TemplateCard({ t, onToggleFavorite, isFavorited }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={t.thumbnail_url}
        alt={t.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="font-semibold mt-2">{t.name}</h3>
      <p className="text-sm text-gray-600">{t.description}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xs px-2 py-1 bg-gray-100 rounded">
          {t.category}
        </span>
        <button
          onClick={() => onToggleFavorite(t._id)}
          className={`px-3 py-1 rounded ${
            isFavorited
              ? "bg-red-500 text-white"
              : "border border-gray-400 text-gray-700"
          }`}
        >
          {isFavorited ? "Favorited" : "Favorite"}
        </button>
      </div>
    </div>
  );
}
