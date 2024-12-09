const Sidebar = () => {
    return (
      <div className="w-full lg:w-1/4 bg-gray-100 p-4">
        <h2 className="font-bold text-lg mb-4">Filters</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          <ul>
            {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item) => (
              <li key={item} className="text-gray-700 mb-1">
                <input type="checkbox" id={item} />
                <label htmlFor={item} className="ml-2">
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>
          <input type="range" min="50" max="200" className="w-full" />
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="flex gap-2">
            {["red", "green", "blue", "yellow", "pink", "black"].map((color) => (
              <div
                key={color}
                className={`w-6 h-6 rounded-full bg-${color}-500`}
              ></div>
            ))}
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">Apply Filter</button>
      </div>
    );
  };
  
  export default Sidebar;
  