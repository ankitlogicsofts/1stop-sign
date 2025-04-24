"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import HeroBanner from "./HeroBanner";
import Link from "next/link";

const HeroSection = ({ heroSection }) => {
  return (
    <>
      <HeroBanner heroSection={heroSection} />
    </>
  );
};

export default HeroSection;
