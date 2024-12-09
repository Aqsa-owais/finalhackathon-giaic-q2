import Hero from "./components/hero";
import FoodItems from "./components/fooditems";
import LandingPage from "./components/hero2";
import ExperienceSection from "./components/experiencesection";
import RestaurantPage from "./components/menu";
import BlogSection from "./components/blogcompo";
import Secondlast from "./components/secondlast";
import TestimonialsSection from "./components/reviews";
import Stats from "./components/states";
import ErrorPage from "@/../../src/app/error"
export default function Home() {
  return (
   <>
   <Hero/>
   <LandingPage/>
   <FoodItems/>
   <Stats/>
   <ExperienceSection/>
   <RestaurantPage/>
   <TestimonialsSection/>
   <Secondlast/>
   <ErrorPage/>
   <BlogSection/>
   </>
  )
}
