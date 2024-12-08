import Image from "next/image"
import menuplate from "@/../../public/menuplate.png"
import quofta from "@/../../public/qofta.png"
import spices from "@/../../public/spices.png"
import chees2 from "@/../../public/chees2.png"
import smoothy from "@/../../public/smoothy.png"
import potato from "@/../../public/potato.png"
import san2 from "@/../../public/sand2.png"
import custord from "@/../../public/custurm.png"
import burger2 from "@/../../public/burger2.png"
import chef1 from "@/../../public/chef1.png"
import chef2 from "@/../../public/chef2.png"
import chef3 from "@/../../public/chef3.png"
import chef4 from "@/../../public/chef4.png"

const menuCategories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"]

const menuItems = [
  {
    id: 1,
    name: "Lettuce Leaf",
    description: "Lorem elit, et ac dapibus sit in consequat",
    price: "9.95",
    image: quofta,
  },
  {
    id: 2,
    name: "Glow Cheese",
    description: "Lorem elit, et ac dapibus sit in consequat",
    price: "8.95",
    image: chees2
  },
  {
    id: 3,
    name: "Fresh Breakfast",
    description: "Lorem elit, et ac dapibus sit in consequat",
    price: "12.95",
    image: custord
  },
  {
    id: 4,
    name: "Italian Pizza",
    description: "Lorem elit, et ac dapibus sit in consequat",
    price: "15.95",
    image: potato
  },
  {
    id: 5,
    name: "Mini Butter",
    description: "Lorem elit, et ac dapibus sit in consequat",
    price: "6.95",
    image: burger2
  },
  {
    id: 6,
    name: "Slice Beef",
    description: "Lorem elit, et ac dapibus sit in consequat",
    price: "12.95",
    image: san2
  }
]

const chefs = [
  {
    id: 1,
    name: "D.Emanuel",
    role: "Head Chef",
    image: chef3
  },
  {
    id: 2,
    name: "D.Scarleth",
    role: "Executive Chef",
    image: chef2
  },
  {
    id: 3,
    name: "M. William",
    role: "Assistant Chef",
    image: chef1
  },
  {
    id: 4,
    name: "W.Readfroad",
    role: "Chef",
    image: chef4
  }
]

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Menu Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-medium mb-2">Choose to pick</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-orange-400">Fr</span>om Our Menu
            </h2>
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Item */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-gray-800">
                <Image
                  src={menuplate}
                  alt="Featured dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="lg:col-span-2 grid gap-4">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-gray-900/50 rounded-lg p-3 hover:bg-gray-900 transition-colors"
                >
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{item.description}</p>
                  </div>
                  <div className="text-orange-400 font-medium">${item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chefs Section */}
        <div>
          <div className="text-center mb-12">
            <p className="text-orange-400 font-medium mb-2">Chefs</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-orange-400">Me</span>et Our Chef
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6  ml-[120px] mr-[120px]">
            {chefs.map((chef) => (
              <div key={chef.id} className="group">
                <div className="relative aspect-[3/4] mb-3">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium">{chef.name}</h3>
                  <p className="text-sm text-gray-400">{chef.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border border-orange-400 text-orange-400 px-6 py-2 rounded-full hover:bg-orange-400 hover:text-white transition-colors">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

