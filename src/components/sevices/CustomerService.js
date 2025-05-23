import { Box, Typography } from "@mui/material";
import React from "react";

export const CustomerService = ({ section3 }) => {
  return (
    <>
      <Box className="padM" id="ExceptionalCustomer">
        <Box className="container">
          <Box className="MainHead">
            <Typography variant="h2">
              {section3?.exceptional_customer_heading}
            </Typography>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: section3?.exceptional_customer_content,
              }}
            />
            {/* <Typography variant="body1">
              We are well aware that printing needs vary with customers and
              brand positioning. No matter how complex your requirements are,
              our friendly and experienced staff will provide the right solution
              for all your marketing display needs!
            </Typography>
            <Typography variant="body1">
              Offering services round the clock, we are just a phone call away.
              Our company also provides a delivery service which can be tailored
              to your specific requirements.
            </Typography> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};
