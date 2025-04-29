import React from "react";
import HeroSection from "@/src/components/HeroSection";
import TrustValueProps from "@/src/components/TrustValueProps";
import SignageExperts from "@/src/components/signageComponents/SignageExperts";
import OurGallery from "@/src/components/signageComponents/OurGallery";
import TypesOfSignage from "@/src/components/signageComponents/TypesOfSignage";
import VehicleGraphics from "@/src/components/signageComponents/VehicleGraphics";
import PerfectSign from "@/src/components/signageComponents/PerfectSign";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import RecentWork from "@/src/components/signageComponents/RecentWork";
import FaqSection from "@/src/components/signageComponents/FaqSection";
import CallToAction from "@/src/components/CallToAction";
const Signage = () => {
  return (
    <>
      <HeroSection />
      <TrustValueProps />
      <SignageExperts />
      <OurGallery />
      <TypesOfSignage />
      <VehicleGraphics />
      <PerfectSign />
      <WhyChooseUs />
      <RecentWork />
      <FaqSection />
      <CallToAction />
    </>
  );
};

export default Signage;
