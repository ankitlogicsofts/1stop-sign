"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const sliderSettings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const testimonialData = [
        {
            name: "Alex Bates",
            role: "Highway Maintenance Manager",
            message: `"We've been using 1stopsigns for all our road signage needs for over 5 years. Their quality is exceptional, and delivery is always prompt. Highly recommended!"`,
        },
        {
            name: "Allie Grater",
            role: "Highway Maintenance Manager",
            message: `"We've been using 1stopsigns for all our road signage needs for over 5 years. Their quality is exceptional, and delivery is always prompt. Highly recommended!"`,
        },
        {
            name: "John Smith",
            role: "Highway Maintenance Manager",
            message: `"We've been using 1stopsigns for all our road signage needs for over 5 years. Their quality is exceptional, and delivery is always prompt. Highly recommended!"`,
        },
        {
            name: "Allie Grater",
            role: "Highway Maintenance Manager",
            message: `"We've been using 1stopsigns for all our road signage needs for over 5 years. Their quality is exceptional, and delivery is always prompt. Highly recommended!"`,
        },
    ];

    return (
        <section className="section ourClients">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="MainHead">
                            <h2>What Our Clients Say</h2>
                            <p>Don't just take our word for it - hear from our satisfied clients about their experience with 1stopsigns.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="client_outer">
                            <div id="client_slider" className="slide owl_slide owl-carousel owl-theme">
                                <Slider {...sliderSettings}>
                                    {testimonialData.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="client_content">
                                                <div className="stars">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i className="fa-solid fa-star" key={i}></i>
                                                    ))}
                                                </div>
                                                <p>{item.message}</p>
                                                <div className="clientAvtar">
                                                    <div>
                                                        <div className="name">{item.name}</div>
                                                        <div className="designation">{item.role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
