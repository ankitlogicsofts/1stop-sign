import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";

const IdealShop = ({ sections }) => {
  return (
    <section className="bg1" id="IdealShop">
      <Box className="container" sx={{ maxWidth: "100%" }}>
        {sections?.map((section, index) => (
          <Grid container spacing={4} key={index} alignItems="center">
            {section.image_position === "left" && (
              <Grid item xs={12} sm={6}>
                <img
                  src={
                    section?.image ||
                    "https://www.1stopsigns.co.uk/wp-content/uploads/2024/01/img01.png"
                  }
                  alt="Shop Signage"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            )}

            <Grid item xs={12} sm={6} className="contentArea">
              <Typography variant="h2">{section?.heading}</Typography>
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: section?.paragraphs,
                }}
              />
              <Button
                // href="tel:02081680001"
                href={`tel:${section?.cta_number}`}
                className="common_btn book_btn"
                variant="contained"
                color="primary"
                startIcon={<i className="fa fa-phone" />}
              >
                {section?.cta_text}
              </Button>
            </Grid>

            {section.image_position === "right" && (
              <Grid item xs={12} sm={6}>
                <img
                  src={
                    section?.image ||
                    "https://www.1stopsigns.co.uk/wp-content/uploads/2024/01/img01.png"
                  }
                  alt="Shop Signage"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            )}
          </Grid>
        ))}
      </Box>
    </section>
  );
};

export default IdealShop;
