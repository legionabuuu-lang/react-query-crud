import React from "react";
import Header from "./components/Header";
import Discounts from "./components/Discounts";
import VideoSection from "./components/VideoSection";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Discounts />
      <VideoSection />
      <Home />
    </div>
  );
}

export default App;
