import Image from "next/image"
import cheesburger from "@/../../public/cheesburger.png"
import fries from "@/../../public/fries.png"
import friedchicken from "@/../../public/friedchicken.png"
import lemon from "@/../../public/lemon.png"
import beefburger from "@/../../public/beefburger.png"

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-2 relative h-48 md:h-64">
              <Image
                src={lemon}
                alt="Mexican food"
                
                className="rounded-2xl object-cover ml-[120px] w-[262px] h-[356px]"
              />
            </div>
            <div className="relative h-40 md:h-48">
              <Image
                src={friedchicken}
                alt="Gourmet burger"
                className="rounded-2xl object-cover w-[214px] h-[206px] ml-[120px] mt-[100px]"
              />
            </div>
            <div className="relative h-40 md:h-48">
              <Image
                src={beefburger}
                alt="Plated dish"
                className="rounded-2xl object-cover w-[181px] h-[211px] ml-[120px] mr-[400px] mt-[-180px]"
              />
            </div>
            <div className="relative h-40 md:h-48">
              <Image
                src={cheesburger}
                alt="Burger close-up"
                className="rounded-2xl object-cover w-[111px] h-[116px] ml-[350px] mt-[-100px]"
              />
            </div>
            <div className="relative h-40 md:h-48">
              <Image
                src={fries}
                alt="Salad dish"
                className="rounded-2xl object-cover w-[111px] h-[148px] ml-[170px] mt-[-100px]"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 mr-[120px]">
            <div>
              <p className="text-orange-400 font-medium mb-2">Why Choose us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-orange-400">Ex</span>tra ordinary taste<br />
                And Experienced
              </h2>
              <p className="text-gray-400 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                alique urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                sed vitae non risus. Lacus nec, et ac dapibus sit eu velit in
                consequat.
              </p>
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h18v18H3z M3 9h18 M9 21V9"
                    />
                  </svg>
                </div>
                <span className="text-sm">Fast Food</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm">Lunch</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.5a2.5 2.5 0 01-2.5 2.5H5.5A2.5 2.5 0 013 15.5V9.5A2.5 2.5 0 015.5 7h13A2.5 2.5 0 0121 9.5v6z"
                    />
                  </svg>
                </div>
                <span className="text-sm">Dinner</span>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-cent bg-white rounded-2 px-6 py-3 space-x-4">
              <div className="text-3xl font-bold text-orange-400">30+</div>
              <div className="text-sm">
                <p className="text-gray-400">Years of</p>
                <p className="font-medium text-black">Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

