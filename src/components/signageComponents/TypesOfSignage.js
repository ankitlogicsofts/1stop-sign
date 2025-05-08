'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick'; // Import the React Slick component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material';

const ServiceSlider = () => {
    // Slick slider settings
    const settings = {
        dots: false,        // Enable dot navigation
        infinite: true,    // Infinite looping
        speed: 500,        // Transition speed
        slidesToShow: 3,   // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        prevArrow: <button type="button" className="slick-prev">Previous</button>,
        nextArrow: <button type="button" className="slick-next">Next</button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true,
                },
            },
        ],
    };

    // Function to set equal height for all items
    const setEqualHeight = () => {
        const items = document.querySelectorAll('.service_slider .item');
        let maxHeight = 0;

        // Reset heights before calculation
        items.forEach(item => {
            item.style.height = 'auto';
        });

        // Find the tallest item
        items.forEach(item => {
            const itemHeight = item.offsetHeight;
            if (itemHeight > maxHeight) {
                maxHeight = itemHeight;
            }
        });

        // Set all items to the tallest height
        items.forEach(item => {
            item.style.height = `${maxHeight}px`;
        });
    };

    useEffect(() => {
        // Set equal height on initial render
        setEqualHeight();

        // Recalculate height when the window is resized
        window.addEventListener('resize', setEqualHeight);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', setEqualHeight);
        };
    }, []);

    return (
        <Box className="padM bg1" id="TypesOfSignage">
            <Box className="container">
                <Box className="MainHead">
                    <Typography variant='h2'>Types of Signage</Typography>
                </Box>
                <Slider {...settings} className="service_slider">
                    <Box className="item">
                        <Box className="GridBox">
                            <Box className="img">
                                <img src="https://www.1stopsigns.co.uk/wp-content/uploads/2019/07/vehicle-signage-4.jpg" alt="Vehicle Signage" />
                            </Box>
                            <Box className="desc">
                                <Typography variant="h3">Vehicle Signage</Typography>
                                <Typography variant="body1">
                                    Looking for impressive digital graphics for your vehicles? Opt for our highest quality signage services.
                                    Give a touch of creativity and beautify your cars, vehicles and transform them into mobile billboards
                                    which will advertise your brand wherever they go. Our professional service will make your vehicle stand apart
                                    in a unique and appealing manner.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="GridBox">
                            <Box className="img">
                                <img src="https://www.1stopsigns.co.uk/wp-content/uploads/2019/08/PHOTO-2019-08-07-11-20-21.jpg" alt="Internal and Architectural Signage" />
                            </Box>
                            <Box className="desc">
                                <Typography variant="h3">Internal and Architectural Signage</Typography>
                                <Typography variant="body1">
                                    We can provide you internal signage at any size with impeccable designs which can grab everyone’s attention.
                                    Let us know whether you need internal signs in metal, fabric, wood or acrylic. You have ideas and we have the
                                    solution. We are the best signage company you have been searching for in London. Our team works very hard to create
                                    the signage as per your expectations, deliver it on time, and even ensure its safe installation.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="GridBox">
                            <Box className="img">
                                <img src="https://www.1stopsigns.co.uk/wp-content/uploads/2019/08/PHOTO-2019-08-10-16-18-22.jpg" alt="Signage for Shops Front" />
                            </Box>
                            <Box className="desc">
                                <Typography variant="h3">Signage for Shops Front</Typography>
                                <Typography variant="body1">
                                    Imagine something which can transform the way your shop looks! Storefront signs are the best way to make it happen.
                                    We do both the work, production, and installation of all sorts of shops front signage. Enhance the business
                                    prospects for your shop by opting for our highest standard shop front signs to attract more customers. Our
                                    sign-making experts will work closely with you to understand your shop signage needs and offer the best solutions
                                    accordingly. It’s time to transform your brand with an expert outdoor signage company in London.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="GridBox">
                            <Box className="img">
                                <img src="https://www.1stopsigns.co.uk/wp-content/uploads/2019/08/PHOTO-2019-07-30-14-23-10.jpg" alt="Tray Signs" />
                            </Box>
                            <Box className="desc">
                                <Typography variant="h3">Tray Signs</Typography>
                                <Typography variant="body1">
                                    At Sign shop London, we have expertise in designing and making aluminum composite tray signs. All you need to do
                                    is provide us with your initial design and graphics and we will provide you with tray signs, fixed with everything
                                    from glued butt joints to hanging angles. Our expertise in sign-making enables us to provide you with highly
                                    attractive interior and exterior signs tailored to match your business needs.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Slider>
            </Box>
        </Box>
    );
};

export default ServiceSlider;
