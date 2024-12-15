import React from "react";
import { FaClock, FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import footerimg from "/public/footerimg.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-thin">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-8">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold">
            <span className="text-[#FF9F0D]">Still</span>{` Need Our Support?`}
          </h2>
          <p className="mt-4 text-sm md:text-base">
            {`Don’t wait. Make a smart & logical quote here. It’s pretty easy.`}
          </p>
        </div>
        <div className="flex mt-6 md:mt-0 rounded-[3px]">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white p-2 md:p-3 w-52 md:w-64 rounded-[2px]"
          />
          <button className="bg-white text-[#FF9F0D] font-bold p-2 md:p-3 w-32 md:w-40 rounded-[2px] mr-2">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="border-t border-[#FF9F0D] mx-6 md:mx-16 my-8"></div>

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>
           {` Corporate clients and leisure travelers rely on Groundlink for
            dependable, safe, and professional chauffeured car service in
            major cities across the world.`}
          </p>
          <div className="flex items-center mt-6">
            <div className="bg-[#FF9F0D] p-4 rounded">
              <FaClock className="text-white text-2xl" />
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Opening Hours</h4>
              <p>Mon  Sat (8.00  6.00)</p>
              <p>Sunday  Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul>
            {["About", "News", "Partners", "Team", "Menu", "Contacts"].map((link) => (
              <li key={link} className="mb-2">
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-bold mb-4">{`Help?`}</h3>
          <ul>
            {[
              "FAQ",
              "Terms & Conditions",
              "Reporting",
              "Documentation",
              "Support Policy",
              "Privacy",
            ].map((help) => (
              <li key={help} className="mb-2">
                <a href="#" className="hover:underline">
                  {help}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center mb-4">
              <Image
                src={footerimg}
                alt={`Recent post image ${index + 1}`}
                width={50}
                height={50}
                className="rounded"
              />
              <div className="ml-4">
                <p className="hover:underline">Post Title Here</p>
                <p className="text-gray-400 text-sm">20 Feb 2022</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#4f4f4f] py-4 mt-[90px]">
        <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
          <p>{`&copy; 2022 by Ayeman. All Rights Reserved.`}</p>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube].map((Icon, idx) => (
              <Icon
                key={idx}
                className="bg-white text-gray-900 p-1 text-xl "
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
