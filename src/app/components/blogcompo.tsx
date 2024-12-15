import Image from "next/image"
import burger2 from "@/../../public/burger5.png"
import lemon from "@/../../public/lemon.png"
import pizza from "@/../../public/pizza.png"
const blogPosts = [
  {
    id: 1,
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    date: "10 February 2022",
    image: burger2,
    slug: "#"
  },
  {
    id: 2,
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    date: "10 February 2022",
    image: pizza,
    slug: "#"
  },
  {
    id: 3,
    title: "Curabitur rutrum velit ac congue malesuada",
    date: "10 February 2022",
    image: lemon,
    slug: "#"
  }
]

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-400 font-medium mb-2">Blog Post</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-orange-400">La</span>test News & Blog
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-[120px] mr-[120px]">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-900/75 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3">{post.date}</div>
                <h3 className="text-xl font-semibold mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <a
                    href={post.slug}
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Learn More
                  </a>
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-orange-400 transition-colors">
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-orange-400 transition-colors">
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
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-orange-400 transition-colors">
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
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

