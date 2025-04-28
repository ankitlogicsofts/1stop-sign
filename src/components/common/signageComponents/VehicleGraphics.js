'use client';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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

const VehicleGraphics = () => {
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
        <section className="padM" id="SignMakers">
            <Box className="container">
                <Box className="gridHead">
                    <Box className="gridCol left">
                        <h3>Vehicle Graphics</h3>
                        <p>
                            At 1 Stop Signs, we are the pioneers in professional signage design and printing, equipped with the latest signage machines, our elite team of graphic designers and signwriters. We produce a wide range of customised display solutions, crafted out specifically for your unique needs and request. Our services include all kinds of displays, vehicle graphics, window graphics, roadside signage, vehicle graphics, digital graphics, point of sale and much more. We have quite the reputation of being the most attentive, friendly and top quality sign company in London. We take pride in providing you with the best sign services for countless clients, seeking all types of interior and outdoor signs, office signs, and other such services.
                        </p>
                    </Box>
                </Box>

                <Slider {...settings} className="GridWrap">
                    {[
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Correx-Boards-copy.jpg',
                            title: 'Correx Boards',
                            features: ['Indoor & outdoor use', 'Single or double sided', 'Attractive design', 'Available in 4 mm thickness'],
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Foamex-Boards-copy.jpg',
                            title: 'Foamex Signs Boards Printing in the London',
                            features: ['Indoor & outdoor use', 'Double-sided printing', 'Eye catchy design', '3, 5 & 10 mm thickness'],
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Window-stickers-copy.jpg',
                            title: 'Window Graphics',
                            features: ['High resolution printing', 'Perfect for marketing', 'Weatherproof material', 'Any custom Sizes'],
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Roll-up-Banners-copy.jpg',
                            title: 'Roll Up Banners',
                            features: ['Good for advertisements', 'Cost effective', 'High resolution printing', 'Available in 4 sizes'],
                        },
                        {
                            img: 'https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/FEATHER-fLAGS-copy.jpg',
                            title: 'Feather Flags',
                            features: ['Cost effective', 'Indoor & outdoor use', 'Good for promotions', 'Any custom sizes'],
                        },
                    ].map((item, i) => (
                        <Box key={i} className="item">
                            <Box className="GridBox">
                                <Box className="img">
                                    <a href="#">
                                        <img src={item.img} alt={item.title} />
                                    </a>
                                </Box>
                                <Box className="desc">
                                    <h3>
                                        <a href="#">{item.title}</a>
                                    </h3>
                                    <ul>
                                        {item.features.map((f, idx) => (
                                            <li key={idx}>{f}</li>
                                        ))}
                                    </ul>
                                    <Box className="Explore">
                                        <a href="#">
                                            View More <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </section>
    );
};

export default VehicleGraphics;
