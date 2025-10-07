import React from "react";
import { Search } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-red-700 text-white px-10 py-4 flex flex-col md:flex-row items-center justify-between shadow-lg sticky top-0 z-50">
      <h1 className="text-3xl font-extrabold tracking-wide mb-3 md:mb-0">
        NIKE
      </h1>

      <nav className="flex gap-6 text-lg font-medium">
        <a href="#" className="hover:text-red-400 transition duration-300">
          Bosh sahifa
        </a>
        <a href="#" className="hover:text-red-400 transition duration-300">
          Mahsulotlar
        </a>
        <a href="#" className="hover:text-red-400 transition duration-300">
          Chegirmalar
        </a>
        <a href="#" className="hover:text-red-400 transition duration-300">
          Video
        </a>
        <a href="#" className="hover:text-red-400 transition duration-300">
          Nike Energy
        </a>
      </nav>

      <div className="relative w-full md:w-64 mt-3 md:mt-0">
        <input
          type="text"
          placeholder="Mahsulot qidiring..."
          className="w-full rounded-full py-2 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
