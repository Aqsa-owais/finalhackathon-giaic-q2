import Image from "next/image"
import egg from "@/../../public/egg.png"
import sause from "@/../../public/sause.png"
import sandwitch from "@/../../public/sandwitch.png"

export default function LandingPage() {
  return (
    <div className=" min-h-screen bg-black text-white w-full flex justify-center items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <p className="ml-[120px]">{`About us`}</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight ml-[120px]">
              We <span className="text-orange-500">Create</span> the best<br />
              foody product
            </h1>
            <p className="text-gray-400 max-w-xl ml-[120px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit, aliquam vitae vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae non risus. Lacus nec ac accumsan, et ac euismod in consequat.
            </p>
            <ul className="space-y-3 ml-[120px]">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Lorem vitae ut et dolore sit will increpatorily</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Quisque diam pellentesque bibendum non dui volutpat fringilla</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
              </li>
            </ul>
            <button className="ml-[120px] bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Read More
            </button>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid gap-4 grid-cols-2 grid-rows-2 h-[500px] ml-[120px] mr-[120px]">
            <div className="col-span-2 relative rounded-2xl overflow-hidden">
              <Image
                src={egg}
                alt="Food dish with eggs"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden ">
              <Image
                src={sause}
                alt="Plated dish"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={sandwitch}
                alt="Stacked sandwich"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

