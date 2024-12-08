import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import FoodItems from "./components/fooditems";
import LandingPage from "./components/hero2";
import ExperienceSection from "./components/experiencesection";
import RestaurantPage from "./components/menu";
import BlogSection from "./components/blogcompo";
import Secondlast from "./components/secondlast";
import TestimonialsSection from "./components/reviews";
import Stats from "./components/states";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <LandingPage/>
   <FoodItems/>
   <Stats/>
   <ExperienceSection/>
   <RestaurantPage/>
   <TestimonialsSection/>
   <Secondlast/>
   <BlogSection/>
   <Footer/>
   </>
  )
}
