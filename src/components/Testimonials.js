"use client";
import React from 'react';
import { Box, Container, Typography, Avatar, Card, CardContent, Rating, Grid } from '@mui/material';
import Slider from 'react-slick';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import Image from 'next/image';

const testimonials = [
    {
        name: "Lisa Paine",
        date: "2023-04-03",
        rating: 5,
        comment: "I can't thank Juan enough. His company is outstanding, excellent service and communication...",
        initial: "L"
    },
    {
        name: "Christopher Harvey",
        date: "2023-04-02",
        rating: 5,
        comment: "Juan at Highlands delivered some very fragile cargo from Sydney to Melbourne for our company...",
        initial: "C"
    },
    {
        name: "Maria Russell",
        date: "2023-03-31",
        rating: 5,
        comment: "Great communication and great service will definitely recommend using this company thanks",
        initial: "M"
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Box sx={{ py: 6, backgroundColor: '#f9f9f9' }} id="testimonialsSection">
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#002b5c' }}>
                    Testimonials
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Box textAlign="center">
                        <Typography variant="h6" fontWeight="bold">EXCELLENT</Typography>
                        <Box mt={1}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon key={i} sx={{ color: '#fbc02d' }} />
                            ))}
                        </Box>
                        <Typography variant="body2" mt={1}>Based on <strong>11 reviews</strong></Typography>
                        <Image src="/google-logo.png" alt="Google" width={100} height={30} />
                    </Box>
                </Box>

                <Slider {...settings}>
                    {testimonials.map((review, index) => (
                        <Card key={index} sx={{ mx: 2, boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Avatar sx={{ bgcolor: '#c5c5c5' }}>{review.initial}</Avatar>
                                    <Box ml={2}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {review.name}
                                            <VerifiedIcon fontSize="small" color="primary" sx={{ ml: 1 }} />
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">{review.date}</Typography>
                                    </Box>
                                </Box>
                                <Rating value={review.rating} readOnly size="small" />
                                <Typography variant="body2" mt={1}>{review.comment}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default Testimonials;
