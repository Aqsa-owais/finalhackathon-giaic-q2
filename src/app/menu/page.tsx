import Image from "next/image";
import drinks from "@/../../public/drinks.png";
import cupcake from "@/../../public/cupcake.png";
import fageeta from "@/../../public/fageeta.png";
import cheez from "@/../../public/cheez.png";
import { IoIosArrowForward } from "react-icons/io";
import Stats from "../components/states";

export default function MenuPage() {
  const partners = [
    { name: 'Restaurant', icon: '/frnd2.png' },
    { name: 'Bakery', icon: '/frnd6.png' },
    { name: 'Bar & Spices', icon: '/frnd1.png' },
    { name: 'Wolf Coffee', icon: '/frnd4.png' },
    { name: 'Bistro', icon: '/frnd3.png' },
    { name: 'Bakery', icon: '/frnd5.png' },
  ];
  return (
    <>
      <div className="min-h-screen bg-white">
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
          {/* Header Section */}
          <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            Our Menu
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">
                Home
              </p>
              <div className="flex items-center">
                <IoIosArrowForward />
                <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D] text-[20px]">
                Menu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <main className="min-h-screen bg-white p-4 md:p-8 lg:p-12 mt-[100px]">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Starter Menu Section */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative w-full aspect-square overflow-hidden ml-[120px]">
                <Image
                  src={fageeta}
                  alt="Starter dish with broccoli"
            
                  className=" w-[448px] h-[426px]"
                  priority
                />
              </div>
              <div className="space-y-11 mr-[120px] ml-[100px]">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Starter Menu
                </h2>
                <div className="space-y-11">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {`Alder Grilled Chinook Salmon`}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {`Served with fresh herbs and with orange + maple`}
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">385</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Berries and cereal tart
                        </h3>
                        <p className="text-sm text-gray-500">
                          Made with milk chocolate + honey
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium ">456</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Tormentoso Bush Pizza Pinotage
                        </h3>
                        <p className="text-sm text-gray-500">
                          Fresh tomato, mozzarella, basil and olive
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">148</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Spicy Vegan Potato Curry
                        </h3>
                        <p className="text-sm text-gray-500">
                          Made with fresh herbs and vegetables
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">365</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Course Section */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-11 order-2 md:order-1 ml-[120px]">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Main Course
                </h2>
                <div className="space-y-11">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Optic Big Breakfast Combo Menu
                        </h3>
                        <p className="text-sm text-gray-500">
                          Natural Fresh bread toasted with cheese
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">329</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Cashew Chicken With Stir-fry
                        </h3>
                        <p className="text-sm text-gray-500">
                          Made with fresh herbs and vegetables
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">429</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Vegetables & Green Salad
                        </h3>
                        <p className="text-sm text-gray-500">
                          Fresh salad with mixed herbs
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">145</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Spicy Vegan Potato Curry
                        </h3>
                        <p className="text-sm text-gray-500">
                          Made with fresh herbs and vegetables
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">289</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full aspect-square overflow-hidden order-1 md:order-2">
                <Image
                  src={cheez}
                  alt="Main course burger"
                  width={1000}
                  height={1000}
                  className="w-[448px] h-[426px]"
                />
              </div>
            </section>
          </div>
        </main>
        <Stats />
        <main className="min-h-screen bg-white p-4 md:p-8 lg:p-12 mt-[100px]">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Starter Menu Section */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative w-full aspect-square overflow-hidden ml-[120px]">
                <Image
                  src={cupcake}
                  alt="Starter dish with broccoli"
                  
                  className="w-[448px] h-[426px]"
                  priority
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Starter Menu
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Alder Grilled Chinook Salmon
                        </h3>
                        <p className="text-sm text-gray-500">
                          Served with fresh herbs and with orange + maple
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">385</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Berries and cereal tart
                        </h3>
                        <p className="text-sm text-gray-500">
                          Made with milk chocolate + honey
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">456</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Tormentoso Bush Pizza Pinotage
                        </h3>
                        <p className="text-sm text-gray-500">
                          Fresh tomato, mozzarella, basil and olive
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">148</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Spicy Vegan Potato Curry
                        </h3>
                        <p className="text-sm text-gray-500">
                          Made with fresh herbs and vegetables
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">365</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Course Section */}
            <section className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6 order-2 md:order-1 ml-[120px]">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Main Course
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Optic Big Breakfast Combo Menu
                        </h3>
                        <p className="text-sm text-gray-500">
                          Natural Fresh bread toasted with cheese
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">329</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Cashew Chicken With Stir-fry
                        </h3>
                        <p className="text-sm text-gray-500">
                          Made with fresh herbs and vegetables
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">429</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Vegetables & Green Salad
                        </h3>
                        <p className="text-sm text-gray-500">
                          Fresh salad with mixed herbs
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">145</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Spicy Vegan Potato Curry
                        </h3>
                        <p className="text-sm text-gray-500">
                          Made with fresh herbs and vegetables
                        </p>
                      </div>
                      <span className="text-amber-500 font-medium">289</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full aspect-square rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src={drinks}
                  alt="Main course burger"
                  
                  className="w-[448px] h-[426px] mr-[120px]"
                />
              </div>
            </section>
          </div>
        </main>
      </div>


      {/* friends */}



      <section className="py-12 px-4 md:py-16 lg:py-20 mr-[120px] ml-[120px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h4 className="text-gray-600 text-sm md:text-base mb-2">
            Partners & Clients
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            We work with the best people
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-opacity hover:opacity-75"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                  src={partner.icon}
                  alt={`${partner.name} logo`}
                  width={100}
                  height={100}
                  className=" filter grayscale w-[210.96px] h-[89.23px]"
                  sizes="(max-width: 768px) 80px, (max-width: 1200px) 96px, 96px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
