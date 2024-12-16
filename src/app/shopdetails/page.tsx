import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Star } from "lucide-react";
import main from "@/../../public/Rectangle 8883.png"
import one from "@/../../public/Rectangle 8884.png"
import mashrooms from "@/../../public/Fresh Lime.png";
import donat from "@/../../public/Fresh Lime.png";
import burger from "@/../../public/Fresh Lime (1).png";
import chart from "@/../../public/Fresh Lime (2).png";

const foodItems = [
  {
    id: 1,
    image: mashrooms,
    discount: "Save 30%",
  },
  {
    id: 2,
    image: burger,
  },
  {
    id: 3,
    image: chart,
  },
  {
    id: 4,
    image: donat,
  },
];


const ShopDetails = () => {
  const thumbnails = [
    "/Rectangle 8884.png",
    "/Rectangle 8885.png",
    "/Rectangle 8886.png",
    "/Rectangle 8887.png",
  ];

  return (
    <>
    <div>
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
            Shop Details
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">Home</p>
            <div className="flex items-center">
              <IoIosArrowForward />
              <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D] text-[20px]">
                Shop details
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* shop details */}
      <div className="container mx-auto px-4 py-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-[120px]">
          {/* Product Images */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-7">
              {thumbnails.map((src, index) => (
                <button
                  key={index}
                  className="w-20 h-20 border rounded-lg overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Product thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-square">
              <Image
                src={main}
                alt="Product main image"
                
                className="rounded-lg w-[421px] h-[416px]"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-1 mr-[100px]">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                Featured
              </span>
              <h1 className="text-3xl font-bold">Yummy Chicken Chup</h1>
              <p className="text-gray-600">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam elementum blandit nec dui aliquet rhoncus placerat. Urna,
                urna consequat amet. Elementum sit mauris nisi, eros volutpat ut
                fringilla nisi risus. Lacus nisi, et ac dapibus et ea velit in
                consequat.`}
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-3xl font-bold">{`54.00$`}</div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500">
                  (5.0 Rating / 23 Review)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  className="px-4 py-2 text-lg"
                  aria-label="Decrease quantity"
                >
                 {` -`}
                </button>
                <input
                  type="number"
                  min="1"
                  value="1"
                  className="w-16 text-center border-x py-2"
                  readOnly
                />
                <button
                  className="px-4 py-2 text-lg"
                  aria-label="Increase quantity"
                >
                 {` +`}
                </button>
              </div>
              <button className="px-8 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                Add to cart
              </button>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <div className="flex gap-2">
                <span className="font-medium">{`Category:`}</span>
                <span className="text-gray-600">Pizza</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">{`Tag:`}</span>
                <span className="text-gray-600">Our Shop</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="font-medium">{`Share:`}</span>
              <div className="flex gap-2">
                {["Facebook", "Twitter", "Pinterest", "LinkedIn"].map(
                  (social) => (
                    <button
                      key={social}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      aria-label={`Share on ${social}`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 mr-[120px] ml-[120px]">
          <div className="border-b">
            <button className="px-6 py-3 text-white bg-orange-500 border-b-2 border-orange-500">
              Description
            </button>
            <button className="px-6 py-3 text-gray-500">Reviews (24)</button>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-gray-600">{`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam odit, id delectus illo, voluptatem voluptas enim ratione nisi perspiciatis itaque impedit ipsam tempora nam veritatis! Officia at nihil dolor accusamus velit placeat reprehenderit quae aliquid illo consectetur iusto maiores obcaecati natus, soluta adipisci voluptates sunt unde id ratione deleniti neque!`}</p>

            <p className="text-gray-600">{`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam odit, id delectus illo, voluptatem voluptas enim ratione nisi perspiciatis itaque impedit ipsam tempora nam veritatis! Officia at nihil dolor accusamus velit placeat reprehenderit quae aliquid illo consectetur iusto maiores obcaecati natus, soluta adipisci voluptates sunt unde id ratione deleniti neque!`}</p>

            <h2 className="font-bold text-xl">Key Benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}</li>
              <li>{`Maecenas elementum dui ut rhoncus maximus tempus`}</li>
              <li>
                {`Vestibulum sed tortor eu lacus. Quisque ut elementum ut tellus
                id`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* new food */}

    <div className="text-black py-16 mb-7">
          <div className="container mx-auto px-4">
            <div className="text-left ml-[120px] mb-12">
              <h2 className="text-3xl md:text-4xl text-black font-bold">
                Similar Products
              </h2>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-[120px] mr-[120px]">
              {foodItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={item.image}
                      alt="img"
                      fill
                      className=""
                    />
                    {item.discount && (
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.discount}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default ShopDetails;
