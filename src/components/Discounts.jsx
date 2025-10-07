import React from "react";
import { ShoppingBag } from "@mui/icons-material";

const items = [
  {
    name: "Nike Air Zoom Pegasus 40",
    price: "130$",
    old: "160$",
    img: "https://static.nike.com/a/images/t_default/7ef1a62b-24d1-49c0-8f41-6d63f70c7c34/air-zoom-pegasus-40-road-running-shoes-HvMFM5.png",
  },
  {
    name: "Nike Air Max Pulse",
    price: "145$",
    old: "180$",
    img: "https://static.nike.com/a/images/t_default/5013cfb2-1b73-46d4-8a2a-27473916a8a3/air-max-pulse-shoes-rGwhs1.png",
  },
  {
    name: "Nike Infinity RN 4",
    price: "150$",
    old: "190$",
    img: "https://static.nike.com/a/images/t_default/18b0495e-d2a4-4e23-9e3d-8eb2b0dcf020/infinity-rn-4-road-running-shoes-vSgVpv.png",
  },
];

const Discounts = () => {
  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        🔥 Chegirmalar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-2 duration-500"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-contain bg-gray-50"
            />
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-red-600 font-bold text-lg">
                    {item.price}
                  </span>
                  <span className="line-through ml-3 text-gray-400">
                    {item.old}
                  </span>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-red-700 transition flex items-center gap-1">
                  <ShoppingBag fontSize="small" />
                  Sotib olish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discounts;
