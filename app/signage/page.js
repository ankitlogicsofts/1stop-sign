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
  const [productTypes, setProductTypes] = useState(null);
  const [whyChooseUs, setWhyChooseUs] = useState(null);
  const [galleries, setGalleries] = useState(null);
  const [ourFeatures, setOurFeatures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [heroSection, setHeroSection] = useState(null);
  const [cta, setCta] = useState(null);

  useEffect(() => {
    if (!page) return;

    const fetchProductData = async () => {
      try {
        const response = await GetProductData(page);
        if (response) {
          setData(response);
          setHeroSection(response?.herosection);
          setFaqs(response?.faqs);
          setProductTypes(response?.productTypes);
          setWhyChooseUs(response?.whychooseus);
          setGalleries(response?.galleries);
          setOurFeatures(response?.ourFeatures);
          setCta(response?.cta);
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
      <HeroSection heroSection={heroSection} />
      <TrustValueProps />
      <SignageExperts data={data} loading={loading} />
      <OurGallery galleries={galleries} />
      <TypesOfSignage productTypes={productTypes} />
      <VehicleGraphics ourFeatures={ourFeatures} />
      <PerfectSign data={data} loading={loading} />
      <WhyChooseUs whyChooseUs={whyChooseUs} />
      <RecentWork />
      {faqs?.length > 0 && <FaqSection faqs={faqs} loading={loading} />}
      {cta?.length > 0 && <CallToAction cta={cta} />}
    </>
  );
};

export default Signage;
