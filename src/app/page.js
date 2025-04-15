import About from "@/components/about";;
import Activitiestwo from "@/components/activities2";
import { Banner } from "@/components/banner";
import Fbanner from "@/components/fbanner";
import RestaurantSection from "@/components/RestaurantSection";
// import Services from "@/components/Services";
import Slider from "@/components/slider";
import Testimonials from "@/components/testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <About />
      <Slider />
      {/* <Services /> */}
      <RestaurantSection />
      <Activitiestwo />
      <Testimonials />
      
      {/* <Awards /> */}
      <Fbanner />
    </>
  );
};

export default page;
