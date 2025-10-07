import React from "react";

export default function Hero() {
  return (
    <section className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/vimeo/410260596/shoes-36581.mp4?width=1280&hash=ee9c0bcb5a329d9c8c8f06a1cfd6f9cc3b0e6f2c"
      ></video>
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-6xl sm:text-7xl font-extrabold uppercase tracking-tight drop-shadow-lg">
          Just Do It
        </h1>
        <p className="text-xl sm:text-2xl mt-4 opacity-90">
          Harakat. Uslub. Kuch. 2025 kolleksiyasi.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
          Kolleksiyani ko‘rish
        </button>
      </div>
    </section>
  );
}
