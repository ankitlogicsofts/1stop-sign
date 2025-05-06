"use client";
import { Box, Typography, Skeleton } from "@mui/material";
import React, { useState } from "react";


const page = () => {
 const [loading, setLoading] = useState(0);

 const [activeIndex, setActiveIndex] = useState(0);

 const handleToggle = (index) => {
   setActiveIndex(activeIndex === index ? null : index);
 };
 const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of digital services including web development, UI/UX design, SEO optimization, and digital marketing.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "Project duration varies depending on the scope. Most websites are completed within 2 to 6 weeks.",
    },
    {
      question: "Do you provide support after project completion?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure your project continues to perform well.",
    },
    {
      question: "Can I request changes after the design is finalized?",
      answer:
        "Yes, you can request changes, but major revisions may affect the timeline and cost.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "You can get started by contacting us via our website form or sending an email. We'll schedule a consultation to discuss your needs.",
    },
  ];
  return (

    <>
    <section className="faqSection" style={{clear:"both"}}>
          <Box className="container containerSmall">
            <Box className="MainHead">
              <Typography variant="h2">Frequently Asked Questions</Typography>
            </Box>
    
            {loading
              ? [...Array(4)].map((_, index) => (
                  <Box className="faqItem" key={index} sx={{ mb: 2 }}>
                    <Skeleton
                      variant="rectangular"
                      height={30}
                      width="80%"
                      sx={{ mb: 1 }}
                    />
                    <Skeleton variant="text" className="faqQuestion" width="100%" />
                    <Skeleton variant="text" className="faqAnswer" width="90%" />
                  </Box>
                ))
              : faqs?.map((item, index) => (
                  <Box
                    className={`faqItem ${activeIndex === index ? "active" : ""}`}
                    key={index}
                  >
                    <button
                      className="faqQuestion"
                      onClick={() => handleToggle(index)}
                    >
                      {item.question}
                      <span className="faqToggle">
                        {activeIndex === index ? "-" : "+"}
                      </span>
                    </button>
                    <Box
                      className="faqAnswer"
                      style={{
                        maxHeight: activeIndex === index ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <p>{item.answer}</p>
                    </Box>
                  </Box>
                ))}
          </Box>
        </section>
    </>
  )
}

export default page