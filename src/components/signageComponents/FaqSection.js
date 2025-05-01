"use client";
import { Box, Typography, Skeleton } from "@mui/material";
import React, { useState } from "react";

const FaqSection = ({ faqs, loading }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqSection">
      <Box className="container">
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
  );
};

export default FaqSection;
