import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/src/components/HeroSection";
import TrustValueProps from "@/src/components/TrustValueProps";
import { Box } from "@mui/material";
import FeaturedWork from "@/src/components/FeaturedWork";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import SignageSolutions from "@/src/components/SignageSolutions";
import Testimonials from "@/src/components/Testimonials";
import OurServices from "@/src/components/OurServices";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustValueProps />
      <OurServices />
      <FeaturedWork />
      <WhyChooseUs />
      {/*<SignageSolutions /> */}
      {/* <Testimonials /> */}
    </>
  );
}
