'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the active item
        } else {
            setActiveIndex(index); // Open the clicked item
        }
    };

    const faqData = [
        {
            question: "What types of signs do you offer?",
            answer: "We offer a wide range of signage including shop signs, illuminated signs, vehicle graphics, banners, window graphics, and more.",
        },
        {
            question: "Do you provide same-day printing?",
            answer: "Yes, we offer same-day printing services for many products depending on the order and design approval time.",
        },
        {
            question: "Can I get a custom design for my sign?",
            answer: "Absolutely! Our in-house designers work with you to create signage tailored to your brand and vision.",
        },
        {
            question: "Do you install the signage as well?",
            answer: "Yes, we provide full installation services across London, ensuring your signage is fitted securely and professionally.",
        },
    ];

    return (
        <section className="faqSection">
            <Box className="container">
                <Box className="MainHead">
                    <Typography variant='h2'>Frequently Asked Questions</Typography>
                </Box>

                {faqData.map((item, index) => (
                    <Box
                        className={`faqItem ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                    >
                        <button className="faqQuestion" onClick={() => handleToggle(index)}>
                            {item.question}
                            <span className="faqToggle">
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </button>
                        <Box
                            className="faqAnswer"
                            style={{
                                maxHeight: activeIndex === index ? '500px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease',
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
