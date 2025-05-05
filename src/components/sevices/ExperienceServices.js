
import { Box, Divider, Grid, Typography, Button } from '@mui/material';
import React from 'react'

const ExperienceServices = () => {
  return (
    <>
    <section className="padM" id="ExperienceServicesSec">
    <Box
  className="background-overlay"
  sx={{
    backgroundImage: 'url("https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/layered-waves-row-0.svg")',
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
          Experience Our Unparalleled Services
          </Typography>
        </Box>
        <Typography>1 Stop Sign is your one-stop solution for top-quality printing services.</Typography>
<Typography>We are highly recommended at providing an express service ensuring that high quality standards are maintained at all times.</Typography>
<Typography>You can get in touch with us by either completing our online form, calling our office, emailing us or placing an order online. We appreciate that time is of the essence and this is why we will deal with your order as swiftly as possible, ensuring that we can provide you with your product on time.</Typography>
<Typography><strong>We offer a same day pick up and 24-hour express delivery service if you order before 11am*. </strong></Typography>
<Typography>*Subject to availability – this will be confirmed once your order has been placed.</Typography>
<Typography>Experience the convenience of same-day printing service at our print shop, where excellence meets speed to bring your visions to life in the heart of London.</Typography>
        </Box>
        </section>
    </>
  )
}

export default ExperienceServices