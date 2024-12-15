'use client'
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import friedchiken from "@/../../public/bigfried.png";
import smoothy from "@/../../public/smoothy.png";
import tomato from "@/../../public/tomatoburger.png";
import img from "@/../../public/img.png";
import eggs from "@/../../public/eggs.png"
import { IoIosArrowForward } from "react-icons/io";
import { FormEvent } from 'react';
export default function BlogPost() {
const menuItems = [
  { name: "Chicken Fry", count: 20, image: "/fry.png" },
  { name: "Burger Food", count: 46, image: "/dish.png" },
  { name: "Pizza", count: 16, image: "/pizzza.png" },
  { name: "Fresh Fruits", count: 36, image: "/burg.png" },
  { name: "Vegetables", count: 16, image: "/sandd.png" },
]

const tags = [
  "Sandwich",
  "Pizza",
  "BBQ",
  "Restaurant",
  "Chicken Sharma",
  "Health",
  "Fastfood",
  "Food",
  "Burger",
  "Chicken",
]

// new

const comments = [
  {
    id: 1,
    name: "MD Sajib Khan",
    avatar: "/r.png",
    date: "June 20, 2023",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi tellus, fermentum nec imperdiet sed, pulvinar at sem. Fusce hendrerit faucibus sollicitudin.",
    replies: [],
  },
  {
    id: 2,
    name: "MD Moon Khan",
    avatar: "/m.png",
    date: "June 22, 2023",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi tellus, fermentum nec imperdiet sed, pulvinar at sem. Fusce hendrerit faucibus sollicitudin.",
    replies: [],
  },
  {
    id: 3,
    name: "MD Gulit Khan",
    avatar: "/n.png",
    date: "June 25, 2023",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi tellus, fermentum nec imperdiet sed, pulvinar at sem. Fusce hendrerit faucibus sollicitudin.",
    replies: [],
  },
]

const tagss = ["Restaurant", "Group", "Pizza", "Yummy"]

const imagePaths = ["/drinks.png", "/cheez.png", "/eggs.png"];
const gallery = Array(6).fill(null).map((_, index) => imagePaths[index % imagePaths.length]);


const socialLinks = [
  { name: "Twitter", icon: "X", href: "#" },
  { name: "YouTube", icon: "YT", href: "#" },
  { name: "Instagram", icon: "IG", href: "#" },
  { name: "Facebook", icon: "FB", href: "#" },
]

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // Handle form submission
}


  return (
    <>
      <div
        className="w-full  bg-no-repeat bg-center flex justify-center"
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
          Blog Details
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">Home</p>
            <div className="flex items-center">
              <IoIosArrowForward />
              <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]   text-[20px]">
              Blog details
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* header section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex gap-2">
            <input
              type="search"
              placeholder="Search Your Keyword..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
              <span className="sr-only">Search</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-sm">
              <Image
                src={friedchiken}
                alt="Blog post featured image"
                width={1000}
                height={1000}
                className="w-full rounded-t-lg h-[400px]"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <time>{`Feb 14, 2023`}</time>
                  <span>{`•`}</span>
                  <span>3</span>
                  <span>{`•`}</span>
                  <span>Admin</span>
                </div>

                <h1 className="text-2xl font-bold mb-4">
                  {`10 Reasons To Do A Digital Detox Challenge`}
                </h1>

                <p className="text-gray-600 mb-6">
                  {`Neque pariatur tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Est praesent cosa vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum exercitation has integer leo erat iaculumn et hendrerit.`}
                </p>

                <div className="bg-orange-500 text-white p-6 rounded-lg mb-6">
                  <blockquote className="flex gap-4">
                    <span className="text-4xl">{`"`}</span>
                    <p>
                      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip.`}
                    </p>
                  </blockquote>
                </div>

                <p className="text-gray-600">
                  {`Ac tinca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
                Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat
                himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.`}
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author Profile */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={img}
                  alt="Author profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-1">Prince Miyako</h2>
              <p className="text-gray-600 text-sm mb-3">{`Blogger/Photographer`}</p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-orange-500 text-orange-500"
                  />
                ))}
                <span className="text-sm text-gray-600 ml-1">(1 Review)</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing est.Vestibis distinctio, odio eligendi suscipit independent dicta`}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {["facebook", "twitter", "instagram", "globe"].map((social) => (
                  <Link
                    key={social}
                    href={`#${social}`}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={tomato}
                        alt={`Recent post ${i + 1}`}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <time className="text-sm text-gray-600">
                        June {20 + i} 2020
                      </time>
                      <h4 className="font-medium hover:text-orange-500 transition-colors">
                        <Link href="#">
                          {`Lorem ipsum dolor sit cing elit, sed do.`}
                        </Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      {/* new code */}
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-600 leading-relaxed">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`}
          </p>

          <div className="relative aspect-video w-full max-w-2xl mx-auto">
            <Image
              src={eggs}
              alt="Food bowl"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <p className="text-gray-600 leading-relaxed">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`}
          </p>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Filter By Menu */}
          <div>
            <h2 className="text-xl font-bold mb-4">Filter By Menu</h2>
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.name} className="flex items-center gap-3 group cursor-pointer">
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
        </aside>
      </div>
    </div>

    {/* new */}

    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tags */}
          <div className="mb-8">
            <span className="text-gray-600 mr-2">Tags:</span>
            {tagss.map((tag) => (
              <span key={tag} className="text-gray-600 hover:text-gray-900 cursor-pointer mr-2">
                {tag}
              </span>
            ))}
          </div>

          {/* Comments Section */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Comments - {comments.length.toString().padStart(2, '0')}</h2>
            
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src={comment.avatar}
                    alt={comment.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium">{comment.name}</h3>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{comment.content}</p>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Reply</button>
                </div>
              </div>
            ))}

            {/* Comment Form */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Post a comment</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <textarea
                  placeholder="Write a comment"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                >
                  Post a comment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Photo Gallery */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {gallery.map((src, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}
