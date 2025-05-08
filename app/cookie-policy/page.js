import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <Box className="padM container policyWrp">
        <Box className="MainHead">
          <Typography variant="h1" marginBottom={"1em"}>
            Cookie Policy
          </Typography>
            </Box>

        <Typography gutterBottom>
          This Cookie Policy explains how 1Stop Signs Ltd uses cookies and similar technologies when you visit our website at <strong>1stopsigns.co.uk</strong>. By continuing to browse our site, you agree to our use of cookies as outlined below.
        </Typography>

        <Typography variant="h3" gutterBottom>
          What are cookies?
        </Typography>
        <Typography gutterBottom>
          Cookies are small text files stored on your device (computer, tablet, or mobile) by your web browser when you visit a website. They help us improve your experience by remembering your preferences and providing relevant content.
        </Typography>

        <Typography variant="h3" gutterBottom>
          How we use cookies
        </Typography>
        <Typography gutterBottom>
          We use cookies for various purposes including:
        </Typography>
        <ul>
          <li>Ensuring the website functions properly</li>
          <li>Remembering your preferences</li>
          <li>Improving site performance and usability</li>
          <li>Tracking analytics to better understand visitor behavior</li>
          <li>Delivering targeted advertisements</li>
        </ul>

        <Typography variant="h3" gutterBottom>
          Types of cookies we use
        </Typography>
        <ul>
          <li><strong>Essential cookies:</strong> Required for basic site functionality</li>
          <li><strong>Performance cookies:</strong> Help us understand how visitors interact with our site</li>
          <li><strong>Functionality cookies:</strong> Remember choices you’ve made to personalize your experience</li>
          <li><strong>Advertising cookies:</strong> Deliver advertisements more relevant to your interests</li>
        </ul>

        <Typography variant="h3" gutterBottom>
          Managing cookies
        </Typography>
        <Typography gutterBottom>
          Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, disabling cookies may affect your ability to use some features of our website.
        </Typography>

        <Typography variant="h3" gutterBottom>
          Third-party cookies
        </Typography>
        <Typography gutterBottom>
          We may use third-party services like Google Analytics, which use cookies to collect information about how visitors use the site. These cookies are governed by the third parties' own privacy policies.
        </Typography>

        <Typography variant="h3" gutterBottom>
          Updates to this policy
        </Typography>
        <Typography gutterBottom>
          We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </Typography>

        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography gutterBottom>
          If you have any questions about our use of cookies, please contact us at:
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
