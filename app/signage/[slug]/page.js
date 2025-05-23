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
import SignageExperts from "@/src/components/signageComponents/SignageExperts";

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
  const [heroSection, setHeroSection] = useState(null);
  const [sections, setSections] = useState(null);
  const [cta, setCta] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProductData = async () => {
      try {
        const response = await GetProductData(slug);
        if (response) {
          setData(response);
          setHeroSection(response?.herosection);
          setFaqs(response?.faqs);
          setProductTypes(response?.productTypes);
          setWhyChooseUs(response?.whychooseus);
          setGalleries(response?.galleries);
          setOurFeatures(response?.ourFeatures);
          setTestimonialData(response?.testimonials);
          setSections(response?.sections);
          setCta(response?.cta);
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
      <HeroSection heroSection={heroSection} />
      <TrustValueProps />
      {data?.product_title && data?.product_content && (
        <SignageExperts data={data} loading={loading} />
      )}
      {ourFeatures?.features?.length > 0 && (
        <SignsInLondon ourFeatures={ourFeatures} loading={loading} />
      )}
      {whyChooseUs?.reasons?.length > 0 && (
        <WhyChooseUs whyChooseUs={whyChooseUs} />
      )}
      <IdealShop sections={sections} />
      {testimonialData && <Testimonials testimonialData={testimonialData} />}
      {faqs?.length > 0 && <FaqSection faqs={faqs} loading={loading} />}
      {cta?.length > 0 && <CallToAction cta={cta} />}
    </>
  );
};

export default page;
