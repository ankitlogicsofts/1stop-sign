import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React from "react";

const ExperienceServices = ({ section2 }) => {
  return (
    <>
      <section className="padM" id="ExperienceServicesSec">
        <Box
          className="background-overlay"
          sx={{
            backgroundImage:
              'url("https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/layered-waves-row-0.svg")',
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.4,
            mixBlendMode: "overlay",
            transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 111,
          }}
        />

        <Box className="container">
          <Box className="MainHead">
            <Typography variant="h2">
              {section2?.experience_services_heading}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: section2?.experience_services_sub_heading,
            }}
          />
        </Box>
      </section>
    </>
  );
};

export default ExperienceServices;
