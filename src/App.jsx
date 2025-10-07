import React from "react";
import Header from "./components/Header";
import Discounts from "./components/Discounts";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Discounts />
      <VideoSection />
    </div>
  );
}

export default App;
