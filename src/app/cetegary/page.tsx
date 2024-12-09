import Image from "next/image";

export default function Page() {
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
        <div className="w-4/5 mx-auto md:mx-none rounded-xl md:w-full lg:w-1/4 bg-white dark:bg-gray-800 shadow-md p-6">
          {/* Filters Header */}
          <h2 className="font-bold text-xl text-gray-800 dark:text-white mb-6">Filters</h2>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-4">Category</h3>
            <ul className="space-y-3">
              {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={item}
                    className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-0"
                  />
                  <label htmlFor={item} className="text-gray-600 dark:text-gray-300 text-sm cursor-pointer">
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-4">Price</h3>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-300 text-sm">$50</span>
              <input
                type="range"
                min="50"
                max="200"
                className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg cursor-pointer"
              />
              <span className="text-gray-600 dark:text-gray-300 text-sm">$200</span>
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-4">Colors</h3>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { color: "red", class: "bg-red-500" },
                { color: "green", class: "bg-green-500" },
                { color: "blue", class: "bg-blue-500" },
                { color: "yellow", class: "bg-yellow-500" },
                { color: "pink", class: "bg-pink-500" },
                { color: "black", class: "bg-black" },
              ].map(({ color, class: colorClass }) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full ${colorClass} cursor-pointer shadow-md`}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              {[
                "XX-Small",
                "X-Small",
                "Small",
                "Medium",
                "Large",
                "X-Large",
                "XX-Large",
                "3X-Large",
                "4X-Large",
              ].map((size) => (
                <button
                  key={size}
                  className="h-10 flex items-center w-20 rounded-full justify-center bg-stone-300 text-black dark:text-white text-sm hover:bg-gray-300"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="text-center">
            <button className="w-full bg-black text-white font-medium py-2 rounded-full hover:bg-gray-800 transition duration-300">
              Apply Filters
            </button>
          </div>
        </div>
        {/* Product Grid */}
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


      {/* Footer */}
      <footer className=" text-white py-2">
        <div className="text-center">
        </div>
      </footer>
    </div>
  );
}
