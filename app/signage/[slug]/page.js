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
  const { slug } = params;
  const [data, setData] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await GetProductData(slug);
        if (response) {
          setData(response);
          setFaqs(response?.faqs);
        } else {
          notFound();
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        notFound();
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
      <SignsInLondon />
      <WhyChooseUs />
      <IdealShop />
      <Testimonials />
      <FaqSection faqs={faqs} loading={loading} />
      <CallToAction />
    </>
  );
};

export default page;
