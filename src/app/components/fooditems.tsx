import Image from "next/image";
import mashrooms from "@/../../public/mashrooms.png";
import donat from "@/../../public/donat.png";
import burger from "@/../../public/burger.png";
import chart from "@/../../public/chart.png";

const foodItems = [
  {
    id: 1,
    title: "Fast Food Dish",
    image: mashrooms,
    discount: "Save 30%",
  },
  {
    id: 2,
    title: "Gourmet Burger",
    image: burger,
  },
  {
    id: 3,
    title: "Fresh Salad",
    image: chart,
  },
  {
    id: 4,
    title: "Dessert Donuts",
    image: donat,
  },
];

export default function FoodCategory() {
  return (
    <div className="min-h-screen bg-black text-white py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-400 font-medium mb-2">Food Category</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-orange-400">Ch</span>oose Food Item
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-[120px] mr-[120px]">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-square relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {item.discount && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.discount}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
