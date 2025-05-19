"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "@/src/components/HeroSection";
import TrustValueProps from "@/src/components/TrustValueProps";
import FeaturedWork from "@/src/components/FeaturedWork";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import Testimonials from "@/src/components/Testimonials";
import OurServices from "@/src/components/OurServices";
import ContactUs from "@/src/components/ContactUs";
import { HomePage } from "@/lib/api/api";

export default function Home() {
  const [heroSection, setHeroSection] = useState(null);
  const [trustExperience, setTrustExperience] = useState(null);
  const [whyChooseUs, setWhyChooseUs] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await HomePage();
        if (response) {
          setHeroSection(response?.herosection);
          setTrustExperience(response?.trustExperience);
          setWhyChooseUs(response?.whychooseus);
          setTestimonialData(response?.testimonials);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomePage();
  }, []);
  return (
    <>
      <HeroSection />
      <TrustValueProps />
      <OurServices />
      <FeaturedWork />
      <WhyChooseUs whyChooseUs={whyChooseUs} />
      <Testimonials testimonialData={testimonialData} />
      <ContactUs />
    </>
  );
}
