import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import friedchiken from "@/../../public/friedchicken.png"
import smoothy from "@/../../public/smoothy.png"
import tomato from "@/../../public/tomatoburger.png"
import img from "@/../../public/img.png"

export default function BlogPost() {
  return (
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
              {['facebook', 'twitter', 'instagram', 'globe'].map((social) => (
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
                    <time className="text-sm text-gray-600">June {20 + i} 2020</time>
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
  )
}
