'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material';

const SignagePrinting = () => {
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
        <section className="padM SignsInLondon bg1" id="SignMakers">
            <Box className="container">
                <Box className="MainHead">
                    <Typography variant="h2">
                    Our Printing Services
                    </Typography>
                    
                    <Typography variant='h3' className='subTitle'>
                   <span>Signage Printing</span> 
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
                            title: 'Foamex Boards',
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Window-stickers-copy.jpg',
                            title: 'Window Stickers',
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Roll-up-Banners-copy.jpg',
                            title: 'Roll-up Banners',
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/FEATHER-fLAGS-copy.jpg',
                            title: 'Feather Flags',
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

export default SignagePrinting;
