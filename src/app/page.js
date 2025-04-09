import About from "@/components/about";
import Awards from "@/components/awards";
import { Banner } from "@/components/banner";
import Fbanner from "@/components/fbanner";
import Services from "@/components/Services";
import Slider from "@/components/slider";
import Testimonials from "@/components/testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <About />
      <Slider />
      <Services />
      <Testimonials />
      <Awards />
      <Fbanner />
    </>
  );
};

export default page;
