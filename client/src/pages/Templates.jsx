import React, { useEffect, useState } from "react";
import { templates } from "../api";
import TemplateCard from "../components/TemplateCard";

export default function Templates() {
  const [list, setList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await templates.list();
        setList(data);
      } catch (e) {
        setError("Failed to load templates");
      }
    };
    load();
  }, []);

  const toggleFavorite = async (id) => {
    try {
      await templates.toggleFavorite(id);
      const favs = await templates.getFavorites();
      setFavorites(favs.map((f) => f._id));
    } catch (e) {
      alert("Please login to add favorites");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Templates</h2>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((t) => (
          <TemplateCard
            key={t._id}
            t={t}
            onToggleFavorite={toggleFavorite}
            isFavorited={favorites.includes(t._id)}
          />
        ))}
      </div>
    </div>
  );
}
