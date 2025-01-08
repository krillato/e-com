import React from "react";

const categories = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "/images/product/6.svg", // Replace with actual image path
    buttonText: "Shop Now",
    size: "large", // Determines layout
  },
  {
    id: 2,
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image: "/images/product/6.svg", // Replace with actual image path
    buttonText: "Shop Now",
    size: "small", // Determines layout
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers.",
    image: "/images/product/6.svg", // Replace with actual image path
    buttonText: "Shop Now",
    size: "small", // Determines layout
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSEOUD EDP.",
    image: "/images/product/6.svg", // Replace with actual image path
    buttonText: "Shop Now",
    size: "small", // Determines layout
  },
];

const CategoryView = () => {
  return (
    <div className=" w-full py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Side (Large Card) */}
      <div className="relative  col-span-1 md:col-span-1">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={categories[0].image}
            alt={categories[0].title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{categories[0].title}</h2>
            <p className="text-sm mb-4">{categories[0].description}</p>
            <button className=" text-white px-4 underline py-2 rounded  transition">
              {categories[0].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (Small Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Card (Expands Full Width) */}
        <div className="relative h-96 overflow-hidden rounded-lg sm:col-span-2">
          <img
            src={categories[1].image}
            alt={categories[1].title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold">{categories[1].title}</h3>
            <p className="text-sm mb-4">{categories[1].description}</p>
            <button className="bg-white text-black px-4 py-2 rounded text-sm hover:bg-gray-200 transition">
              {categories[1].buttonText}
            </button>
          </div>
        </div>

        {/* Remaining Cards */}
        {categories.slice(2).map((category) => (
          <div
            key={category.id}
            className="relative h-48 overflow-hidden rounded-lg"
          >
            <img
              src={category.image}
              alt={category.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold">{category.title}</h3>
              <p className="text-xs mb-2">{category.description}</p>
              <button className="bg-white text-black px-3 py-1 rounded text-sm hover:bg-gray-200 transition">
                {category.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
