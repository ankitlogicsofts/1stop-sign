'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
            },
        },
    ],
};

const SignsInLondon = () => {
    // Equal height function
    const setEqualHeight = () => {
        const items = document.querySelectorAll('.GridBox');
        let maxHeight = 0;

        items.forEach((item) => {
            item.style.height = 'auto'; // Reset height
            const height = item.offsetHeight;
            if (height > maxHeight) maxHeight = height;
        });

        items.forEach((item) => {
            item.style.height = `${maxHeight}px`;
        });
    };

    useEffect(() => {
        setEqualHeight();
        window.addEventListener('resize', setEqualHeight);

        return () => {
            window.removeEventListener('resize', setEqualHeight);
        };
    }, []);

    return (
        <section className="padM SignsInLondon" id="SignMakers">
            <Box className="container">
                <Box className="MainHead">
                    <Typography variant="h2">
                        Transform Your Storefront with Eye-Catching Shop Front Signs in London
                    </Typography>
                    <Typography>1 Stop Signs, your ultimate destination for bespoke shop front signs in London and across the UK. If you're looking to make a lasting impression and attract more customers to your business, our stunning signage solutions are exactly what you need. From initial design to installation, we provide a seamless experience that enhances the visibility and appeal of your shopfront.
                    </Typography>
                    <Typography>At 1 Stop Signs, we understand the importance of cost-effective solutions for your business. Our shop front sign costs in the UK are competitive and transparent, with no hidden fees. Contact us today for a personalized quote based on your specific requirements. Trust the UK's leading shop front sign manufacturer to elevate your brand with unmatched quality and style.
                    </Typography>
                </Box>
                <Slider {...settings} className="GridWrap">
                    {[
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Correx-Boards-copy.jpg',
                            title: 'Correx Boards',
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Foamex-Boards-copy.jpg',
                            title: 'Correx Boards',
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Window-stickers-copy.jpg',
                            title: 'Correx Boards',
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Roll-up-Banners-copy.jpg',
                            title: 'Correx Boards',
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/FEATHER-fLAGS-copy.jpg',
                            title: 'Correx Boards',
                        },
                    ].map((item, i) => (
                        <Box key={i} className="item">
                            <Box className="GridBox">
                                <Box className="img">
                                    <a href="#">
                                        <img src={item.img} alt={item.title} />
                                        <h4>{item.title}</h4>
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </section>
    );
};

export default SignsInLondon;
