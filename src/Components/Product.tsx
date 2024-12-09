const Products = () => {
    const products = [
      {
        name: "Gradient Graphic T-shirt",
        price: 145,
        image: "/tshirt1.jpg",
      },
      {
        name: "Polo with Tipping Details",
        price: 180,
        image: "/tshirt2.jpg",
      },
    ];
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Products;
  