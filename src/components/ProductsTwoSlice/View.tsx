import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    oldPrice: null,
    rating: 4.5,
    reviews: 35,
    badge: null,
    image: "/images/product/4.png",
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    oldPrice: "$500",
    rating: 5,
    reviews: 95,
    badge: "Add To Cart",
    image: "/images/product/4.png",
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    oldPrice: "$800",
    rating: 4.8,
    reviews: 325,
    badge: null,
    image: "/images/product/4.png",
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: "$500",
    oldPrice: "$600",
    rating: 4.2,
    reviews: 145,
    badge: null,
    image: "/images/product/4.png",
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: "$960",
    oldPrice: "$1160",
    rating: 4.8,
    reviews: 65,
    badge: "NEW",
    image: "/images/product/4.png",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    oldPrice: "$1260",
    rating: 4.7,
    reviews: 85,
    badge: null,
    image: "/images/product/4.png",
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    oldPrice: "$760",
    rating: 4.5,
    reviews: 55,
    badge: "NEW",
    image: "/images/product/4.png",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: "$660",
    oldPrice: "$860",
    rating: 4.6,
    reviews: 55,
    badge: null,
    image: "/images/product/4.png",
  },
];

const ProductsHorizontalScroll = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container mx-auto p-4 relative">
      {/* Horizontal Scrollable Container */}
      <div
        className={`${
          show ? "h-screen overflow-auto " : "h-[550px] overflow-hidden "
        } grid grid-cols-2   gap-6  scrollbar-hide scroll-smooth`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[300px] border rounded-lg shadow-md bg-white p-4 flex flex-col items-center text-center"
          >
            {/* Badge */}

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mb-4"
            />
            {/* Product Name */}
            <h3 className="text-sm font-medium mb-2">{product.name}</h3>
            {/* Product Price */}
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-500 line-through">
                  {product.oldPrice}
                </span>
              )}
            </div>
            {/* Product Rating */}
            <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm mt-2">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className="text-gray-500 text-xs">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          setShow(true);
        }}
        className={`${
          show && "hidden"
        } m-auto mt-10 bg-[#DB4444] text-white rounded-md flex justify-center items-center text-center p-3 w-[234px] cursor-pointer h-[56px]`}
      >
        <h3>View All Products</h3>
      </div>
    </div>
  );
};

export default ProductsHorizontalScroll;
