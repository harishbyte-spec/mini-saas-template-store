import React, { useEffect, useState } from "react";
import { templates } from "../api";
import TemplateCard from "../components/TemplateCard.jsx"
import { useNavigate } from "react-router-dom";


export default function Favorites() {
  const [list, setList] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const favs = await templates.getFavorites();
        setList(favs);
      } catch (e) {
        nav("/login");
      }
    };
    load();
  }, []);

  const toggleFavorite = async (id) => {
    await templates.toggleFavorite(id);
    const favs = await templates.getFavorites();
    setList(favs);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((t) => (
          <TemplateCard
            key={t._id}
            t={t}
            onToggleFavorite={toggleFavorite}
            isFavorited={true}
          />
        ))}
      </div>
    </div>
  );
}
