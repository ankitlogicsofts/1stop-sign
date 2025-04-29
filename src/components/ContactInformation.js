import React, { useState, useEffect } from "react";
import { GetContactInformation } from "@/lib/api/api";
import { Box, Grid, Button } from "@mui/material";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";

const ContactInformation = ({ pageType }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchContactInformation = async () => {
      try {
        const response = await GetContactInformation();
        if (response) {
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchContactInformation();
  }, []);
  return (
    <Grid item xs={12} md={6}>
      <Box className="conactBox col01">
        <h3>Contact Information</h3>
        <Box className="contInfoWrap">
          <Box className="contInfo">
            <Phone className="icon" />
            <Box className="iconTxt">
              <Box className="bold">Phone</Box>
              <Box>
                <a href={`tel:${data?.phone}`}>{data?.phone}</a>
              </Box>
            </Box>
          </Box>

          <Box className="contInfo">
            <Email className="icon" />
            <Box className="iconTxt">
              <Box className="bold">Email</Box>
              <Box>
                <a href={`tel:${data?.email}`}>{data?.email}</a>
              </Box>
            </Box>
          </Box>

          <Box className="contInfo">
            <LocationOn className="icon" />
            <Box className="iconTxt">
              <Box className="bold">Address</Box>
              <Box>{data?.address}</Box>
            </Box>
          </Box>

          <Box className="contInfo">
            <AccessTime className="icon" />
            <Box className="iconTxt">
              <Box className="bold">Business Hours</Box>
              <Box>
                {data?.business_hours?.map((item, index) => (
                  <Box key={index}>
                    {item.day}: {item.timing ? item.timing : "Closed"}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {pageType == "contactUs" && (
        <Box className="conactBox col02">
          <h3>24/7 Signage Assistance</h3>
          <p>
            For urgent signage requirements, contact our 24/7 emergency hotline.
          </p>
          <Button
            variant="contained"
            color="secondary"
            href={`tel:${data?.phone}`}
            className="common_btn"
            startIcon={<Phone />}
          >
            {data?.phone}
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default ContactInformation;
