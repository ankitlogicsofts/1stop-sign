"use client";
import HeroSection from "@/src/components/HeroSection";
import OurCompetitive from "@/src/components/sevices/OurCompetitive";
import PromotionalPrintingServices from "@/src/components/sevices/PromotionalPrintingServices";
import SignagePrinting from "@/src/components/sevices/SignagePrinting";
import ServiceFaq from "@/src/components/sevices/ServiceFaq";
import TrustValueProps from "@/src/components/TrustValueProps";
import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Testimonials from "@/src/components/Testimonials";
import ExperienceServices from "@/src/components/sevices/ExperienceServices";
import { CustomerService } from "@/src/components/sevices/CustomerService";
import { GetPrintingServicesLondonData } from "@/lib/api/api";

const PrintingServicesLondon = () => {
  const [data, setData] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);
  const [section3, setSection3] = useState(null);
  const [section4, setSection4] = useState(null);
  const [section2, setSection2] = useState(null);
  const [sections, setSections] = useState(null);
  const [section1, setSection1] = useState(null);
  const [ourFeatures, setOurFeatures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [heroSection, setHeroSection] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await GetPrintingServicesLondonData();
        if (response) {
          setData(response);
          setHeroSection(response?.herosection);
          setFaqs(response?.faqs);
          setTestimonialData(response?.testimonials);
          setSection3(response?.section3);
          setSection2(response?.section2);
          setSection4(response?.section4);
          setSection1(response?.section1);
          setSections(response?.sections);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      <HeroSection heroSection={heroSection} />
      <TrustValueProps />
      <OurCompetitive section1={section1} />
      <SignagePrinting />
      <Divider />
      <PromotionalPrintingServices />
      <ExperienceServices section2={section2} />
      <section className="bg2 mb-0" id="IdealShop">
        <Box className="container" sx={{ maxWidth: "100%" }}>
          {sections?.map((section, index) => (
            <Grid container spacing={4} key={index} alignItems="center">
              {section.image_position === "left" && (
                <Grid item xs={12} sm={6}>
                  <img
                    src={
                      section?.image ||
                      "https://www.1stopsigns.co.uk/wp-content/uploads/2024/01/img01.png"
                    }
                    alt="Shop Signage"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
              )}

              <Grid item xs={12} sm={6} className="contentArea">
                <Typography variant="h2">{section?.heading}</Typography>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: section?.paragraphs,
                  }}
                />
                <Button
                  // href="tel:02081680001"
                  href={`tel:${section?.cta_number}`}
                  className="common_btn book_btn"
                  variant="contained"
                  color="primary"
                  startIcon={<i className="fa fa-phone" />}
                >
                  {section?.cta_text}
                </Button>
              </Grid>

              {section.image_position === "right" && (
                <Grid item xs={12} sm={6}>
                  <img
                    src={
                      section?.image ||
                      "https://www.1stopsigns.co.uk/wp-content/uploads/2024/01/img01.png"
                    }
                    alt="Shop Signage"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
              )}
            </Grid>
          ))}
        </Box>

        <Box className="padM pb-0">
          <Box className="container MainHead" id="PrintingService">
            <Typography variant="h2" xs={{ marginBottom: "1rem" }}>
              {section4?.section_4_heading}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {/* First Row */}
            <Grid item xs={12} sm={6} className="contentArea">
              <Box className="contentSec">
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: section4?.section_4_content,
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <img
                src={
                  section4?.section_4_image ||
                  "https://www.1stopsigns.co.uk/wp-content/uploads/2024/01/img03.png"
                }
                alt={section4?.section_4_heading}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </section>
      <CustomerService section3={section3} />
      <ServiceFaq faqs={faqs} />
      <Box className="padM">
        <Testimonials testimonialData={testimonialData} />
      </Box>
    </>
  );
};

export default PrintingServicesLondon;
