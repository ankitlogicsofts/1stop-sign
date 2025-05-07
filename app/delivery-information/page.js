import React from 'react';
import { Box, Typography } from '@mui/material';

const page = () => {
  return (
    <>
      <Box className="padM container policyWrp">
        <Box className="MainHead">
          <Typography variant="h2" marginBottom={"1em"}>
            Delivery Information
          </Typography>
        </Box>

        <Typography>
          At 1Stop Signs Ltd, we strive to ensure your orders are delivered promptly and securely. Below you will find all relevant information regarding our delivery process.
        </Typography>

        <Typography variant="h3" marginTop={3}>
          Delivery Times
        </Typography>
        <Typography>
          We aim to dispatch all standard orders within 3–5 working days after confirmation. Custom or large-format orders may take longer depending on complexity and quantity. We will notify you with an estimated delivery date upon order confirmation.
        </Typography>

        <Typography variant="h3" marginTop={3}>
          Delivery Charges
        </Typography>
        <Typography>
          Delivery charges vary based on size, weight, and location. The final delivery cost will be calculated at checkout. Free delivery may be available for bulk or promotional orders—please check our website or contact our team for eligibility.
        </Typography>

        <Typography variant="h3" marginTop={3}>
          Delivery Methods
        </Typography>
        <Typography>
          We use reputable courier services such as Royal Mail, DPD, and UPS to ensure reliable and tracked delivery. You will receive a tracking number once your order has been dispatched.
        </Typography>

        <Typography variant="h3" marginTop={3}>
          Missed or Delayed Deliveries
        </Typography>
        <Typography>
          If you miss your delivery, the courier will typically leave a calling card with re-delivery or collection instructions. If your delivery is delayed beyond the expected timeframe, please contact us so we can investigate and resolve the issue promptly.
        </Typography>

        <Typography variant="h3" marginTop={3}>
          International Shipping
        </Typography>
        <Typography>
          We currently offer international shipping to selected countries. Delivery times and charges will vary based on destination. All international deliveries are subject to customs clearance, which may affect the delivery timeframe.
        </Typography>

        <Typography variant="h3" marginTop={3}>
          Contact Us
        </Typography>
        <Typography>
          For any queries related to delivery, please email us at <a href="mailto:sales@1stopsigns.co.uk">sales@1stopsigns.co.uk</a> or call us at <a href="tel:02081680001">020 8168 0001</a>.
        </Typography>
      </Box>
    </>
  );
};

export default page;
