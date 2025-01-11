"use client"
import React,{useState} from "react"
import Image from "next/image";
import { GiToggles } from "react-icons/gi";

export default function Page() {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const products = [
    {
      name: "Gradient Graphic T-shirt",
      price: 145,
      image: "/assestsHome/image8.png",
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      image: "/assestsHome/Framea2.png",
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      image: "/assestsHome/Framea1.png",
    },
    {
      name: "Gradient Graphic T-shirt",
      price: 145,
      image: "/assestsHome/Framea2.png",
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      image: "/assestsHome/Framea5.png",
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      image: "/assestsHome/Framea5.png",
    },
    {
      name: "Gradient Graphic T-shirt",
      price: 145,
      image: "/assestsHome/Framea6.png",
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      image: "/assestsHome/Framea8.png",
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      image: "/assestsHome/Framea3.png",
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex flex-col justify-center py-20 md:flex md:flex-row md:justify-center">



{/* Toggle Button (Visible on Small Screens) */}
<div className="md:hidden flex justify-end pr-5">

<button
        className="md:hidden rounded-full border-2 w-14 text-black px-4 py-2 rlative top-16 left-80 z-30 flex justify-end"
        onClick={handleToggle}
        >
        {isOpen ?<GiToggles /> : <GiToggles />}
      </button>
        </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:static top-0 left-0 h-full w-64 md:w-96 bg-gray-100 shadow-lg transition-transform duration-300 md:translate-x-0 overflow-y-auto`}
      >
        <div className="p-4">
          <h2 className="font-bold text-lg mb-4">Filters</h2>
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-medium mb-2">Categories</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">T-shirts</li>
                <li className="text-gray-700">Shorts</li>
                <li className="text-gray-700">Shirts</li>
                <li className="text-gray-700">Hoodies</li>
                <li className="text-gray-700">Jeans</li>
              </ul>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-sm font-medium mb-2">Price</h3>
              <input type="range" min="50" max="200" className="w-full" />
            </div>

            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium mb-2">Colors</h3>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-2 text-xs py-1 bg-stone-300 border rounded-full hover:bg-black hover:text-white">XX-Small</button>
                <button className="px-2 text-xs py-1 bg-stone-300 border rounded-full hover:bg-black hover:text-white">X-Small</button>
                <button className="px-2 text-xs py-1 bg-stone-300 border rounded-full hover:bg-black hover:text-white ">Small   </button>
                <button className="px-2 py-1 text-xs bg-stone-300 border rounded-full hover:bg-black hover:text-white">Medium</button>
                <button className="px-2 py-1 text-xs bg-stone-300 border rounded-full hover:bg-black hover:text-white">Large</button>
                <button className="px-2 py-1 text-xs bg-stone-300 border rounded-full hover:bg-black hover:text-white">X-Large</button>
                <button className="px-2 py-1 text-xs bg-stone-300 border rounded-full hover:bg-black hover:text-white">XX-Large</button>
                <button className="px-2 py-1 text-xs bg-stone-300 border rounded-full hover:bg-black hover:text-white">3X-Large</button>
                <button className="px-2 py-1 text-xs bg-stone-300 border rounded-full hover:bg-black hover:text-white">4X-Large</button>
              </div>
            </div>

            {/* Dress Style */}
            <div>
              <h3 className="text-sm font-medium mb-2">Dress Style</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Casual</li>
                <li className="text-gray-700">Formal</li>
                <li className="text-gray-700">Party</li>
                <li className="text-gray-700">Gym</li>
              </ul>
            </div>

            {/* Apply Filters Button */}
            <button className="w-full py-2 bg-black text-white rounded-full">
              Apply Filters
            </button>
          </div>
        </div>
      </div>






        {/* Product Grid */}
        <div className="">
        <div className="flex md:justify-between relative bottom-5 gap-x-3">
          <h1 className="font-extrabold text-xl md:text-4xl ml-5 md:ml relative bottom-2">
            Casual
          </h1>
          <p className="text-xs md:text-lg text-stone-400 w-24 md:w-full">Showing 1-10 of 100 Products</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
          {products.map((product, index) => (
            <div key={index} className="md:min-h-[256px]">
              <Image
                src={product.image}
                alt={product.name}
               className="w-full"
                width={400}
                height={400}
              />
      {/* <div className="p-6 space-y-4"> */}
        <p className="mt-4 text-md font-semibold text-text leading-relaxed">{product.name} 
        </p>
        <div className="flex gap-5">
        <h1 className="font-extrabold text-lg md:text-2xl">${product.price}</h1>
          </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}




