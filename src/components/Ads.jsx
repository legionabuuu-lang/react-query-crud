import React from "react";

export default function Ads() {
  const ads = [
    {
      img: "https://images.unsplash.com/photo-1606813902771-1b4a7f1bba14?auto=format&fit=crop&w=1000&q=80",
      text: "Yangi Air Max 2025 — Yengil, bardoshli, uslubli.",
    },
    {
      img: "https://images.unsplash.com/photo-1618354691373-d851c9f95e3c?auto=format&fit=crop&w=1000&q=80",
      text: "Yozgi kolleksiya — 40% gacha chegirmalar.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ads.map((a, i) => (
        <div
          key={i}
          className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <img src={a.img} alt="" className="w-full h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-center items-end p-6">
            <p className="text-white text-xl font-semibold">{a.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
