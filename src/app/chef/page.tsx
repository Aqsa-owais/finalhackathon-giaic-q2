import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

interface Chef {
  name: string
  image: string
  title: string
}

export default function ChefsGrid() {
  const chefs: Chef[] = [
    { name: 'Tanvima Rumi', image: '/cheff1.png', title: 'Chef' },
    { name: 'Jorina Begum', image: '/cheff2.png', title: 'Chef' },
    { name: 'M Mohammad', image: '/cheff3.png', title: 'Chef' },
    { name: 'Munna Kathy', image: '/cheff4.png', title: 'Chef' },
    { name: 'Tanvima Rumi', image: '/cheff5.png', title: 'Chef' },
    { name: 'Bishu Begum', image: '/cheff6.png', title: 'Chef' },
    { name: 'Motin Mofizul', image: '/cheff7.png', title: 'Chef' },
    { name: 'William Rumi', image: '/cheff8.png', title: 'Chef' },
    { name: 'Kala william roy', image: '/cheff9.png', title: 'Chef' },
    { name: 'Mahmud Kholi', image: '/cheff10.png', title: 'Chef' },
    { name: 'Absar Rahman', image: '/cheff11.png', title: 'Chef' },
    { name: 'Moralisa holly', image: '/cheff12.png', title: 'Chef' },
  ]

  return (
<>
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
            Our Chef
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">
                Home
              </p>
              <div className="flex items-center">
                <IoIosArrowForward />
                <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D] text-[20px]">
                Chef
                </p>
              </div>
            </div>
          </div>
        </div>

    {/*  headersection */}
    <section className="py-12 px-4 md:py-16 lg:py-20 bg-white mr-[120px] ml-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg mb-4 group">
                <Image
                  src={chef.image}
                  alt={`Chef ${chef.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {chef.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {chef.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

