'use client'; // if you're using Next.js App Router

import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const images = [
    "/assets/images/card1.jpg",
    "/assets/images/card2.jpg",
    "/assets/images/card3.jpg",
    "/assets/images/card4.jpg",
    "/assets/images/card5.jpg",
    "/assets/images/card6.jpg",
    "/assets/images/card7.jpg",
    "/assets/images/card8.jpg",
];

const OurGallery = () => {
    return (
        <Box py={6} className="CategoryWrp">
            <Box className="container">
                <Box className="MainHead" >
                    <Typography variant='h2'>Our Gallery</Typography>
                </Box>
                <Grid container spacing={2} mt={2}>
                    {images.map((src, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box className="GridBox categoryBox">
                                <Box className="img">
                                    <Link href="#">
                                        <Image
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            width={400}
                                            height={300}
                                            layout="responsive"
                                            objectFit="cover"
                                        /></Link>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default OurGallery;
