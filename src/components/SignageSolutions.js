"use client";
import React from "react";
import Slider from "react-slick";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    Avatar,
} from "@mui/material";
import {
    Storefront,
    FormatShapes,
    EmojiObjects,
    Layers,
    Highlight,
    VerticalAlignTop,
    LocationOn,
    Business,
    ColorLens,
    Umbrella,
    Window,
    MeetingRoom,
    TextFields,
    LocalOffer,
    Map,
    Tv,
    Wallpaper,
    GridOn,
    WbIncandescent,
} from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
    { name: "Shop Front", icon: Storefront },
    { name: "3D Built-Up Letters", icon: FormatShapes },
    { name: "Halo Signs", icon: EmojiObjects },
    { name: "Stencil & Fret Cut", icon: Layers },
    { name: "NEON Signs", icon: Highlight },
    { name: "Projecting Signs", icon: VerticalAlignTop },
    { name: "Totem Signs", icon: LocationOn },
    { name: "Business Signs", icon: Business },
    { name: "Bespoke Colour Signage", icon: ColorLens },
    { name: "Canopies & Awnings", icon: Umbrella },
    { name: "Window Manifestation", icon: Window },
    { name: "Internal Signages", icon: MeetingRoom },
    { name: "Free Standing Letters", icon: TextFields },
    { name: "Counter Signs", icon: LocalOffer },
    { name: "Wayfinding Signs", icon: Map },
    { name: "Projection Boxes", icon: Tv },
    { name: "Wall Graphics", icon: Wallpaper },
    { name: "Window Graphics", icon: GridOn },
    { name: "3D Backlit Letters", icon: WbIncandescent },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2,
            },
        },
    ],
};

const SignageSolutions = () => {
    return (
        <Box
            id="signageSolutions"
            sx={{
                py: 8,
                backgroundColor: "#fff",
                ".slick-dots": {
                    bottom: "-40px",
                    "& li": {
                        margin: "0 6px",
                    },
                    "& button:before": {
                        fontSize: "14px",
                        color: "#000",
                    },
                    "& .slick-active button:before": {
                        color: "#E22929",
                        fontSize: "16px",
                    },
                },
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    Full-Service Signage Solutions
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 5 }}>
                    A complete range of custom signage to elevate your brand presence.
                </Typography>

                <Box sx={{ mx: -1.5 }}>
                    <Slider {...sliderSettings}>
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Box px={1.5} py={1} key={index}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            borderRadius: 3,
                                            boxShadow: 3,
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: 6,
                                            },
                                        }}
                                    >
                                        <CardActionArea
                                            href={`/services/${service.name
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                        >
                                            <CardContent
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: 2,
                                                    py: 2,
                                                }}
                                            >
                                                <Avatar
                                                    sx={{
                                                        width: 60,
                                                        height: 60,
                                                        background: `linear-gradient(to left, #D9B768, #fdf496, #ddb475, #E22929, #8E8B2C)`,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        transition: "transform 0.3s",
                                                        "&:hover": {
                                                            transform: "scale(1.1)",
                                                        },
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 36,
                                                            height: 36,
                                                            borderRadius: "50%",
                                                            backgroundColor: "#fff",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            transition: "all 0.3s ease",
                                                            "&:hover svg": {
                                                                color: "#E22929",
                                                                transform: "scale(1.2)",
                                                            },
                                                        }}
                                                    >
                                                        <Icon
                                                            fontSize="small"
                                                            sx={{
                                                                color: "#000",
                                                                transition: "all 0.3s ease",
                                                            }}
                                                        />
                                                    </Box>
                                                </Avatar>
                                                <Typography variant="subtitle1" fontWeight={500} align="center">
                                                    {service.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>
                            );
                        })}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default SignageSolutions;
