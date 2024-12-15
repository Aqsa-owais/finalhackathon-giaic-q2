import { IoIosArrowForward } from "react-icons/io";
import { Search } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import offer from "/offer.png";

const foodItems = [
  { id: 1, title: "Fresh Garden Salad", image: "/pic9.png", category: "Salads" },
  { id: 2, title: "Gourmet Burger", image: "/pic1.png", category: "Burgers" },
  { id: 3, title: "Grilled Seafood", image: "/pic2.png", category: "Seafood" },
  { id: 4, title: "Classic Cheeseburger", image: "/pic3.png", category: "Burgers" },
  { id: 5, title: "Mediterranean Platter", image: "/pic4.png", category: "Platters" },
  { id: 6, title: "Mushroom Burger", image: "/pic5.png", category: "Burgers" },
  { id: 7, title: "Vegan Burger", image: "/pic6.png", category: "Burgers" },
  { id: 8, title: "Special Chicken Burger", image: "/pic7.png", category: "Burgers" },
  { id: 9, title: "Spicy Fish Burger", image: "/pic8.png", category: "Seafood" },
];

const tags = [
  "Sandwich",
  "Pizza",
  "BBQ",
  "Restaurant",
  "Chicken Shawarma",
  "Health",
  "Fastfood",
  "Food",
  "Burger",
  "Chicken",
];

const menuItems = [
  { name: "Chicken Fry", count: 20, image: "/fry.png" },
  { name: "Burger Food", count: 46, image: "/dish.png" },
  { name: "Pizza", count: 16, image: "/pizza.png" },
  { name: "Fresh Fruits", count: 36, image: "/fruit.png" },
  { name: "Vegetables", count: 16, image: "/fruit.png" },
];

const categories = ["All", "Burgers", "Salads", "Seafood", "Platters"];

export default function ShopList() {
  return (
    <>
      {/* Header Section */}
      <div
        className="w-full bg-no-repeat bg-center flex justify-center"
        style={{
          backgroundImage: "url('/signin.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          width: "100%",
          height: "300px",
        }}
      >
        <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            Our Shop
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <p className="text-xl sm:text-2xl md:text-3xl">Home</p>
            <div className="flex items-center">
              <IoIosArrowForward />
              <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]">
                Shop
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mt-[100px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Products Section */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Suspense fallback={<LoadingGrid />}>
                {foodItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                  </div>
                ))}
              </Suspense>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search recipes..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Menu */}
            <div>
              <h2 className="text-xl font-bold mb-4">Filter By Menu</h2>
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                        sizes="(max-width: 768px) 25vw, 64px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium group-hover:text-gray-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-sm text-gray-500">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function LoadingGrid() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded-lg overflow-hidden"
        >
          <div className="aspect-square" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-3 bg-gray-300 rounded w-1/2" />
          </div>
        </div>
      ))}
    </>
  );
}
