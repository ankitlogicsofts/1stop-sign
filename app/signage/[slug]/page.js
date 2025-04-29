import CallToAction from "@/src/components/CallToAction";
import FaqSection from "@/src/components/signageComponents/FaqSection";
import HeroSection from "@/src/components/HeroSection";
import IdealShop from "@/src/components/IdealShop";
import SignsInLondon from "@/src/components/SignsInLondon";
import Testimonials from "@/src/components/Testimonials";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import { Typography } from "@mui/material";
import React from "react";

const page = ({ params }) => {
  const { slug } = params;
  return (
    <>
      <HeroSection />
      <SignsInLondon />
      <WhyChooseUs />
      <IdealShop />
      <Testimonials />
      <FaqSection />
      <CallToAction />
    </>
  );
};

export default page;
