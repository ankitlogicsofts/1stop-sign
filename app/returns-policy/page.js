import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <Box className="padM container policyWrp">
        <Box className="MainHead">
          <Typography variant="h1" marginBottom={"1em"}>
            Returns Policy
          </Typography>
        </Box>

        <Typography gutterBottom>
          We hope you are happy with your purchase. However, if you are not completely satisfied, you may return the item to us subject to the terms and conditions below.
        </Typography>

        <Typography variant="h3" gutterBottom>
          Returns
        </Typography>
        <Typography gutterBottom>
          You have 14 calendar days from the date you received your item to request a return. To be eligible for a return, your item must be unused and in the same condition you received it. It must also be in the original packaging.
        </Typography>

        <Typography variant="h3" gutterBottom>
          Non-returnable items
        </Typography>
        <Typography gutterBottom>
          Several types of goods are exempt from being returned. Custom or personalised items, digital downloads, and gift cards cannot be returned.
        </Typography>

        <Typography variant="h3" gutterBottom>
          How to return an item
        </Typography>
        <Typography gutterBottom>
          To initiate a return, please contact us first by email at <strong>sales@1stopsigns.co.uk</strong> with your order number and reason for return. We will provide instructions on how to return your item.
        </Typography>
        <Typography gutterBottom>
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable unless the return is due to our error (e.g., wrong or defective item).
        </Typography>

        <Typography variant="h3" gutterBottom>
          Refunds
        </Typography>
        <Typography gutterBottom>
          Once your return is received and inspected, we will notify you via email of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will be applied to your original method of payment within 7–10 business days.
        </Typography>

        <Typography variant="h3" gutterBottom>
          Exchanges
        </Typography>
        <Typography gutterBottom>
          We only replace items if they are defective or damaged. If you need to exchange it for the same item, contact us at <strong>sales@1stopsigns.co.uk</strong> with your request.
        </Typography>

        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography gutterBottom>
          If you have any questions about our returns policy, please contact us at:
        </Typography>
        <Typography gutterBottom>
          <strong>Email:</strong> <a href="mailto:sales@1stopsigns.co.uk">sales@1stopsigns.co.uk</a><br />
          <strong>Phone:</strong> <a href="tel:02081680001">020 8168 0001</a><br />
          <strong>Address:</strong> 1Stop Signs Ltd, 258 Green Lane, Ilford, IG1 1YF
        </Typography>
      </Box>
    </>
  );
};

export default page;
