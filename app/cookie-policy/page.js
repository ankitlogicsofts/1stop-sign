import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const page = () => {
  const listItems = [
    'Ensuring the website functions properly',
    'Remembering your preferences',
    'Improving site performance and usability',
    'Tracking analytics to better understand visitor behavior',
    'Delivering targeted advertisements',
  ];
  const listItems2 = [
    'Essential cookies: Required for basic site functionality',
    'Performance cookies: Help us understand how visitors interact with our site',
    'Functionality cookies: Remember choices you’ve made to personalize your experience',
    'Advertising cookies: Deliver advertisements more relevant to your interests',
  ];
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
        <List className="ListWrp">
                        {listItems.map((text, index) => (
                          <ListItem key={index} disableGutters>
                            <ListItemIcon sx={{ minWidth: '30px', color: 'green' }}>
                              <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        ))}
        </List>
        <Typography variant="h3" gutterBottom>
          Types of cookies we use
        </Typography>
        <List className="ListWrp">
                        {listItems2.map((text, index) => (
                          <ListItem key={index} disableGutters>
                            <ListItemIcon sx={{ minWidth: '30px', color: 'green' }}>
                              <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        ))}
        </List>
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
