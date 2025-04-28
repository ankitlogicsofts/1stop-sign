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
            <div className="iconTxt">
              <div className="bold">Phone</div>
              <div>
                <a href={`tel:${data?.phone}`}>{data?.phone}</a>
              </div>
            </div>
          </Box>

          <Box className="contInfo">
            <Email className="icon" />
            <div className="iconTxt">
              <div className="bold">Email</div>
              <div>
                <a href={`tel:${data?.email}`}>{data?.email}</a>
              </div>
            </div>
          </Box>

          <Box className="contInfo">
            <LocationOn className="icon" />
            <div className="iconTxt">
              <div className="bold">Address</div>
              <div>{data?.address}</div>
            </div>
          </Box>

          <Box className="contInfo">
            <AccessTime className="icon" />
            <div className="iconTxt">
              <div className="bold">Business Hours</div>
              <div>
                {/* Monday - Friday: 8:30 AM - 5:30 PM <br />
            Saturday: 9:00 AM - 1:00 PM <br />
            Sunday: Closed */}
                {data?.business_hours?.map((item, index) => (
                  <div key={index}>
                    {item.day}: {item.timing ? item.timing : "Closed"}
                  </div>
                ))}
              </div>
            </div>
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
