import Image from "next/image";
import secondlast from "@/../../public/secondlast.png";

export default function Secondlast() {
  return (
    <div
      className=" h-[400px] relative bg-black text-white flex items-center justify-end"
      style={{
        backgroundImage: `url(${secondlast.src})`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-0 flex flex-col items-end text-right space-y-6">
        <p className="text-orange-400 font-medium mb-2">Restaurant Time Process</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-orange-400">We</span> Document Every Food
          <br />
          Bean Process Until It Is Saved
        </h1>
        <p className="text-gray-300 max-w-lg">
          {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.`}
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-end">
          <button className="px-8 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Read More
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
            <span className="font-medium">Play Video</span>
          </button>
        </div>
      </div>
    </div>
  );
}
