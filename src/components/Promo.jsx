import React from "react";

export default function Promo() {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-10 rounded-3xl flex flex-col sm:flex-row justify-between items-center shadow-2xl">
      <div>
        <h2 className="text-3xl font-bold mb-2">⚡ Limited Edition Drop</h2>
        <p className="text-gray-300">
          Nike x Off-White Collaboration — only this week!
        </p>
      </div>
      <button className="mt-6 sm:mt-0 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
        View Collection
      </button>
    </section>
  );
}
