'use client'
import React from 'react';
import Slider from 'react-slick';
import { Container, Grid, Typography, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const SignsInLondon = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box id="SignsInLondon" className="CategoryWrp">
            <Box className="container CategoryWrp ">
                <Grid container spacing={4}>
                    <Grid item xs={12} sx={{ maxWidth: 'fit-content' }}>
                        <Box className="MainHead" >
                            <Typography variant='h2'>Transform Your Storefront with Eye-Catching Shop Front Signs in London</Typography>
                        </Box>
                        <Typography variant="body1" paragraph>
                            1 Stop Signs, your ultimate destination for bespoke shop front signs in London and across the UK. If you're looking to make a lasting impression and attract more customers to your business, our stunning signage solutions are exactly what you need. From initial design to installation, we provide a seamless experience that enhances the visibility and appeal of your shopfront.


                        </Typography>
                        <Typography variant="body1" paragraph>
                            At 1 Stop Signs, we understand the importance of cost-effective solutions for your business. Our shop front sign costs in the UK are competitive and transparent, with no hidden fees. Contact us today for a personalized quote based on your specific requirements. Trust the UK's leading shop front sign manufacturer to elevate your brand with unmatched quality and style.


                        </Typography>
                    </Grid>
                </Grid>
                <Slider {...settings}>
                    <Box className="GridBox categoryBox">
                        <Box className="img">
                            <Link href="">
                                <img
                                    src="https://www.1stopsigns.co.uk/wp-content/uploads/2024/07/PHOTO-2019-04-18-18-47-06-1.jpg"
                                    alt="Eye Care Signage Board"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Typography variant="h4">Eye Care Signage Board</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="GridBox categoryBox">
                        <Box className="img">
                            <Link href="">
                                <img
                                    src="https://www.1stopsigns.co.uk/wp-content/uploads/2024/07/PHOTO-2019-04-18-18-47-06-1.jpg"
                                    alt="Eye Care Signage Board"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Typography variant="h4">2 Eye Care Signage Board</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="GridBox categoryBox">
                        <Box className="img">
                            <Link href="">
                                <img
                                    src="https://www.1stopsigns.co.uk/wp-content/uploads/2024/07/PHOTO-2019-04-18-18-47-06-1.jpg"
                                    alt="Eye Care Signage Board"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Typography variant="h4">3Eye Care Signage Board</Typography>
                            </Link>
                        </Box>
                    </Box>



                    {/* Add more items as necessary */}
                </Slider>
            </Box>
        </Box>
    );
};

export default SignsInLondon;
