"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/src/components/HeroSection";
import TrustValueProps from "@/src/components/TrustValueProps";
import { Box } from "@mui/material";
import FeaturedWork from "@/src/components/FeaturedWork";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import Testimonials from "@/src/components/Testimonials";
import OurServices from "@/src/components/OurServices";
import { HomePage } from "../lib/api/api";
import ContactUs from "@/src/components/ContactUs";

export default function Home() {
  const [heroSection, setHeroSection] = useState(null);
  const [trustExperience, setTrustExperience] = useState(null);
  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await HomePage();
        if (response) {
          setHeroSection(response?.herosection);
          setTrustExperience(response?.trustExperience);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHomePage();
  }, []);
  return (
    <>
      <HeroSection />
      <TrustValueProps trustExperience={trustExperience} />
      <OurServices />
      <FeaturedWork />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
    </>
  );
}
