"use client";
import React, { useEffect, useState, use } from "react";
import CallToAction from "@/src/components/CallToAction";
import FaqSection from "@/src/components/signageComponents/FaqSection";
import HeroSection from "@/src/components/HeroSection";
import IdealShop from "@/src/components/IdealShop";
import SignsInLondon from "@/src/components/SignsInLondon";
import Testimonials from "@/src/components/Testimonials";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import { notFound } from "next/navigation";
import { GetProductData } from "@/lib/api/api";
import TrustValueProps from "@/src/components/TrustValueProps";

const page = ({ params }) => {
  const { slug } = use(params);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const [productTypes, setProductTypes] = useState(null);
  const [whyChooseUs, setWhyChooseUs] = useState(null);
  const [galleries, setGalleries] = useState(null);
  const [ourFeatures, setOurFeatures] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProductData = async () => {
      try {
        const response = await GetProductData(slug);
        if (response) {
          setData(response);
          setFaqs(response?.faqs);
          setProductTypes(response?.productTypes);
          setWhyChooseUs(response?.whychooseus);
          setGalleries(response?.galleries);
          setOurFeatures(response?.ourFeatures);
          setTestimonialData(response?.testimonials);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [slug]);
  return (
    <>
      <HeroSection />
      <TrustValueProps />
      <SignsInLondon ourFeatures={ourFeatures} loading={loading} />
      <WhyChooseUs whyChooseUs={whyChooseUs} />
      <IdealShop />
      <Testimonials testimonialData={testimonialData} />
      <FaqSection faqs={faqs} loading={loading} />
      <CallToAction />
    </>
  );
};

export default page;
