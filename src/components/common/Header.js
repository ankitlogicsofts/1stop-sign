import React, { useEffect, useState } from "react";
import { Box, IconButton, Skeleton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CallIcon from '@mui/icons-material/Call';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Sticky header logic
    useEffect(() => {
        const isSticky = () => {
            const header = document.querySelector(".header-section");
            const scrollTop = window.scrollY;
            if (header) {
                scrollTop >= 1
                    ? header.classList.add("is-sticky")
                    : header.classList.remove("is-sticky");
            }
        };

        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    // Page load logic
    useEffect(() => {
        setIsOpen(false);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [router.asPath]);

    const logoanimationProps = {
        initial: { opacity: 0, x: "-100vw" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "-100vw" },
        transition: {
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
        },
    };

    return (
        <>
            <header className="header-section d-none d-xl-block">
                <Box className="headerSec">
                    <Box className="container">
                        <Box className="headerWrp">
                            <Box className="innerHeader">
                                <Link href="/" passHref>
                                    <Box className="logo">
                                        {isLoading ? (
                                            <Skeleton
                                                variant="rectangle"
                                                width={180}
                                                height={72}
                                                className="logo"
                                                animation="wave"
                                            />
                                        ) : (
                                            <motion.div {...logoanimationProps}>
                                                <Image
                                                    src="/assets/images/logo.png"
                                                    alt="1stopsigns"
                                                    width={241}
                                                    height={97}
                                                    className="logo"
                                                />
                                            </motion.div>
                                        )}
                                    </Box>
                                </Link>

                                <IconButton
                                    onClick={toggleMenu}
                                    style={{
                                        fontSize: "2rem",
                                        transition: "transform 0.3s ease-in-out",
                                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                                        color: "#E41E26",
                                        display: "none", // visible only on mobile, override with media queries
                                    }}
                                    className={`menuIcon ${isOpen ? "collapsed" : ""}`}
                                    aria-expanded={isOpen ? "true" : "false"}
                                >
                                    {isOpen ? (
                                        <CloseIcon style={{ fontSize: "2.5rem" }} />
                                    ) : (
                                        <MenuIcon style={{ fontSize: "2.5rem" }} />
                                    )}
                                </IconButton>
                            </Box>

                            <Box
                                id="navSec"
                                className={`navSection ${isOpen ? "open" : "closed"}`}
                            >
                                <Navbar setIsOpen={setIsOpen} />
                            </Box>

                            <Box className="navbar-right">
                                <Link href="#" className="common_btn Quote">
                                    Get a Free Quote  <i className="fa-regular fa-circle-right"></i>
                                </Link>
                                <Link href="tel:02081680001" className="common_btn phone">
                                    <i className="fa-solid fa-phone"></i> 020 8168 0001
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </header>

        </>
    );
};

export default Header;
