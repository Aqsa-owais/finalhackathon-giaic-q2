import Image from "next/image";
import bgImage from "@/../../public/states.png";
import icon1 from "@/../../public/Group (1).png";
import icon2 from "@/../../public/Group (2).png";
import icon3 from "@/../../public/Group.png";
import icon4 from "@/../../public/Page-1.png";

export default function Stats() {
  const stats = [
    { id: 1, icon: icon1, title: "Professional Chefs", count: "420" },
    { id: 2, icon: icon2, title: "Items Of Food", count: "320" },
    { id: 3, icon: icon3, title: "Years Of Experienced", count: "30+" },
    { id: 4, icon: icon4, title: "Happy Customers", count: "220" },
  ];

  return (
    <div className="relative bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill" // Ensures full background coverage
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="space-y-4">
                {/* Icon */}
                <div className="flex justify-center">
                  <Image
                    src={stat.icon}
                    alt={stat.title}
                    width={64} // Set the width of the icon
                    height={64} // Set the height of the icon
                  />
                </div>
                {/* Title */}
                <h3 className="text-lg font-medium">{stat.title}</h3>
                {/* Count */}
                <p className="text-3xl font-bold">{stat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
