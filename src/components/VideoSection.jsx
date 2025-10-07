import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-black py-10">
      <h2 className="text-center text-white text-3xl font-bold mb-6">
        🎥 Nike Rasmiy Video
      </h2>
      <div className="flex justify-center">
        <iframe
          className="rounded-2xl shadow-lg w-11/12 md:w-3/4 h-72 md:h-[450px]"
          src="https://www.youtube.com/embed/Na8fQ2QqD2Q"
          title="Nike Official Ad"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
