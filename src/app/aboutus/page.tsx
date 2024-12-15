'use client'
import Image from "next/image";
import upper from "@/../../public/signin.png";
import lemon from "@/../../public/lemon.png";
import yogurt from "@/../../public/friedchicken.png";
import pasta from "@/../../public/pasta.png";
import person from "@/../../public/student.png";
import choose from "@/../../public/choose.png";
import TestimonialsSection from "../components/reviews";
import { useState } from "react"
import reviews from "@/../../public/reviews.png"
import flower from "@/../../public/flower.png"
import Link from "next/link";
const testimonials = [
  {
    id: 1,
    name: "Alamin Hasan",
    role: "Food Specialist",
    image: "/placeholder.svg",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mua neus. Lacus nec et ac dapibus sit eu velit in consequat."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    image: "/placeholder.svg",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Chef",
    image: "/placeholder.svg",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec."
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Food Critic",
    image: "/placeholder.svg",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna."
  }
]
const menuCategories = [
  { name: 'Breakfast', href: '#breakfast' },
  { name: 'Lunch', href: '#lunch' },
  { name: 'Dinner', href: '#dinner' },
  { name: 'Dessert', href: '#dessert' },
  { name: 'Drink', href: '#drink' },
  { name: 'Snack', href: '#snack' },
]

const menuItems = [
  {
    name: 'Alder Grilled Chinook Salmon',
    description: 'Toasted French bread topped with romano, cheddar',
    calories: '860 CAL',
    price: 25,
  },
  {
    name: 'Alder Grilled Chinook Salmon',
    description: 'Toasted French bread topped with romano, cheddar',
    calories: '860 CAL',
    price: 25,
  },
  {
    name: 'Alder Grilled Chinook Salmon',
    description: 'Toasted French bread topped with romano, cheddar',
    calories: '860 CAL',
    price: 25,
  },
  {
    name: 'Alder Grilled Chinook Salmon',
    description: 'Toasted French bread topped with romano, cheddar',
    calories: '860 CAL',
    price: 25,
  },
]

export default function About() {
  const features = [
    {
      icon: "/Student copy 2.png",
      title: "Best Chef",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
    {
      icon: "/Coffee copy.png",
      title: "120 Item food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
    {
      icon: "/Person copy.png",
      title: "Clean Environment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <>
    <div>
      {/* First Section: Image and Breadcrumb */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={upper}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
          layout="fill"
        />
        <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            About Us
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <a href="/" className="text-white">
              Home
            </a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500">
              About
            </a>
          </div>
        </div>
      </div>

      {/* Second Section: Content and Buttons */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 items-center justify-between flex-wrap md:flex-nowrap">
          {/* Left Images Section */}
          <div className="w-full md:w-3/10 flex flex-col items-center md:items-start ml-[120px]">
            <div className="grid grid-cols-2 gap-4">
              {/* First Two Images Side by Side */}
              <Image
                className="object-cover w-full h-[200px] rounded-lg"
                alt="image1"
                src={lemon}
                layout="intrinsic"
              />
              <Image
                className="object-cover w-full h-[200px] rounded-lg"
                alt="image2"
                src={yogurt}
                layout="intrinsic"
              />
            </div>
            {/* Third Image Below */}
            <div className="mt-4">
              <Image
                className="object-cover w-full h-[200px] rounded-lg"
                alt="image3"
                src={pasta}
                layout="intrinsic"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-7/10 flex flex-col items-center md:items-start text-center md:text-left mr-[120px] ml-[200px]">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              {`About us _____`}
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-black">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.`}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="flex items-center gap-3">
                <span className="relative flex h-14 w-14">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-20"></span>
                  <span className="relative inline-flex rounded-full h-14 w-14 bg-orange-400 items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                <span className="font-medium">Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Why Choose Us */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="text-black text-3xl font-bold mt-3 mb-6">
            Why Choose Us
          </h1>
          <p className="text-center mb-8 text-black">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam <br /> pellentesque bibendum non dui volutpat fringilla bibendum.`}
          </p>
          <Image
            className="mb-10 object-cover object-center w-full md:w-3/4 lg:w-2/3 h-[300px] md:h-[400px]" // Responsive width and height
            alt="Why Choose Us"
            src={choose}
            width={1320}
            height={480}
          />
        </div>
      </section>

      {/* new */}

      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 relative w-12 h-12">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section: Features */}
      <div
        className="w-full  bg-no-repeat bg-center flex justify-center mb-[200px]"
        style={{
          backgroundImage: "url('/Bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          width: "100%",
          height: "400px",
        }}
      ><section className="text-black body-font">
      <div className="container px-3 mx-auto">
        <div className="flex flex-wrap -m-4 mr-[120px] ml-[120px] mt-[100px]">
          {/* Feature 1 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full border-2 rounded-lg overflow-hidden">
              <Image
                className="lg:h-36 md:h-36 w-full object-cover object-center"
                src={person}
                alt="Best Chef"
                width={400}
                height={200}
                layout="intrinsic"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                  BEST CHEF
                </h1>
                <p className="leading-relaxed mb-3 text-center text-black">
                  {`Owner`}
                </p>
              </div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full border-2 rounded-lg overflow-hidden">
              <Image
                className="lg:h-36 md:h-36 w-full object-cover object-center"
                src={person}
                alt="120 Item Food"
                width={400}
                height={200}
                layout="intrinsic"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                  {`120 Item Food`}
                </h1>
                <p className="leading-relaxed mb-3 text-center text-black">
                  {`Chef`}
                </p>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full border-2 rounded-lg overflow-hidden">
              <Image
                className="lg:h-36 md:h-36 w-full object-cover object-center"
                src={person}
                alt="Clean Environment"
                width={400}
                height={200}
                layout="intrinsic"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                  Clean Environment
                </h1>
                <p className="leading-relaxed mb-3 text-center text-black">
                  {`Founder`}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className="h-full border-2 rounded-lg overflow-hidden">
              <Image
                className="lg:h-36 md:h-36 w-full object-cover object-center"
                src={person}
                alt="120 Item Food"
                width={400}
                height={200}
                layout="intrinsic"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                  {`120 Item Food`}
                </h1>
                <p className="leading-relaxed mb-3 text-center text-black">
                  {`Specialist`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
    <div className="min-h-screen  text-white py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 ">
        <Image
          src={flower}
          alt="Decorative flower"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-20 left-0 w-64 h-64 ">
        <Image
          src={flower}
          alt="Decorative flower"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ">
          <p className="text-orange-400 font-medium mb-2 mr-[900px] mt-11">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mr-[550px] text-black">
            {`What our client are saying`}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-[90px]">
          <div className="relative bg-white rounded-2xl p-8 pt-16 text-black">
            {/* Client Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src={reviews}
                  alt={testimonials[currentSlide].name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <svg
                className="w-8 h-8 text-orange-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-6">
                {testimonials[currentSlide].text}
              </p>
              
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonials[currentSlide].rating
                        ? "text-orange-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h3 className="font-semibold text-xl">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-gray-500">{testimonials[currentSlide].role}</p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentSlide === index ? "bg-orange-400" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            Our Food Menu
            <span className="text-yellow-400 text-2xl">★</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed placerat lacus nulla tempus.
          </p>
        </div>

        {/* Navigation Tabs */}
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-8 border-b border-gray-200">
            {menuCategories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className={`inline-block px-3 py-2 text-sm sm:text-base ${
                    category.name === 'Breakfast'
                      ? 'text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
                  }`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mr-[120px] ml-[120px]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-1">{item.description}</p>
                <p className="text-gray-400 text-xs">{item.calories}</p>
              </div>
              <div className="ml-4">
                <span className="text-yellow-400 font-medium">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mr-[120px] ml-[120px]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-1">{item.description}</p>
                <p className="text-gray-400 text-xs">{item.calories}</p>
              </div>
              <div className="ml-4">
                <span className="text-yellow-400 font-medium">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
        

        {/* View More Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-2 border border-yellow-400 text-sm font-medium rounded-md text-yellow-400 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
            View more
          </button>
        </div>
      </div>
    </div>

    </>
  );
}
