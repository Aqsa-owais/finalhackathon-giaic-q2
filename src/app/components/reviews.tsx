'use client'

import { useState } from "react"
import Image from "next/image"
import reviews from "@/../../public/reviews.png"
import flower from "@/../../public/flower.png"

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

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="min-h-screen bg-black text-white py-16 relative overflow-hidden">
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
          <p className="text-orange-400 font-medium mb-2 mr-[900px]">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mr-[550px]">
            What our client are saying
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
  )
}
