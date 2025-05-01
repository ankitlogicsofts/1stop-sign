"use client";
import React, { useEffect, useState } from "react";
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
import { GetProductData } from "@/lib/api/api";
import { usePathname } from "next/navigation";

const Signage = () => {
  const pathname = usePathname();
  const [page, setSlug] = useState("");

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    setSlug(segments[0]);
  }, [pathname]);

  const [data, setData] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!page) return;

    const fetchProductData = async () => {
      try {
        const response = await GetProductData(page);
        if (response) {
          setData(response);
          setFaqs(response?.faqs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [page]);

  return (
    <>
      <HeroSection />
      <TrustValueProps />
      <SignageExperts data={data} loading={loading} />
      <OurGallery />
      <TypesOfSignage />
      <VehicleGraphics />
      <PerfectSign data={data} loading={loading} />
      <WhyChooseUs />
      <RecentWork />
      <FaqSection faqs={faqs} loading={loading} />
      <CallToAction />
    </>
  );
};

export default Signage;
