"use client";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from 'react';

const faqData = [
  {
    question: "How we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                FAQ Page
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                  <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">
                    Home
                  </p>
                  <div className="flex items-center">
                    <IoIosArrowForward />
                    <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D] text-[20px]">
                    faq
                    </p>
                  </div>
                </div>
              </div>
            </div>
    <div className="min-h-screen bg-white">
     
      <main className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Questions Looks Here</h2>
        <p className="text-center text-gray-600 mb-12">
         {` Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] p-6 rounded-lg shadow-lg transition-transform duration-200"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-2xl">
                  {openIndex === index ? '' : '+'}
                </span>
              </div>
              
                <p className="text-sm text-gray-600 mt-4">{faq.answer}</p>
             
            </div>
          ))}
        </div>
      </main>
    </div>
    </>
  );
};

export default Faq;