import HeroSection from "@/src/components/HeroSection";
import ServiceFaq from "@/src/components/sevices/ServiceFaq";
import Testimonials from "@/src/components/Testimonials";
import TrustValueProps from "@/src/components/TrustValueProps";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    TextField,
    Button,
    Alert
  } from '@mui/material';
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const page = () => {
    const listItems = [
        'Experienced in-house graphic designers that can create eye-catching graphics to attract everyone in the room',
        'High-quality printing options with state of the art Hi-tech printers for large format print images.',
        'Assistance and advice in finding and hiring the right exhibition display space to get maximum attention.',
        'Seamless display, installation, and dismantling of exhibition displays on your behalf.',
        'Our site supervisors ensure smooth execution of venue installation and dismantling.',
        'One seamless display of gargantuan exhibition displays for one vibrant visual.',
        'Affordable pricing for large exhibition bundles.',
      ];

    const listItems2 = [
        'Unique, easy to install and dismantle pop up display signages.',
        'Vibrant designs and constructions that you can use to feature product videos and promotional content.',
        'Easy replacement of graphics for event changes or changes in promotional strategy at the last minute.',
        'Affordable pricing for all types of pop up displays regardless of event type and location.',
        'High-quality ink, lights and materials to place focus on the content of the display.',
        'Simple dismantling of the display to allow for flexibility and movement during the event.',
      ];
    const listItems3 = [
        'Choice of size: Your pop up is crucial. Therefore you have complete control over the customization. We can create small table-size pop-up displays or large ones.',
        'Choice of shape and colour: We can create straight, curved, backlit and 3D pop-up displays. We can also create booths with hanging structures with poster backgrounds to capture maximum attention.',
        'Choice of shape and colour: We can create straight, curved, backlit and 3D pop-up displays. We can also create booths with hanging structures with poster backgrounds to capture maximum attention.',
        'Choice of lighting: Catch the eye of the entire room by integrating bright lights into the pop-up display that act as backlit hanging structures for your booth.',
      ];
    const listItems4 = [
        'Flexible designing and printing options means you are in complete control of the banner.',
        'Option to use fabric structures instead of plastic or cardboard for roll-up banners.',
        'Fast printing service to accommodate last-minute requirements.',
        'Availability of temporary stickers to cover any change in ideas or strategy.',
        'Free size and shape control options for little trade stalls and open events.',
        'Flexible pricing for all roll-up banners regardless of size and shape.',
      ];
    const listItems5 = [
        'A team of in-house expert designers who have perfected the technique.',
        'Vibrant colour printing options to attract visitors to your promotional event.',
        'Fully customized flags that can be aligned to your promotional strategy.',
        'Three unique flag designs (teardrops, sail and feather) with unlimited customization options.',
        'High-tech equipment and materials are used for all flags.',
        'Simple pricing packages that are customized for your project.',
      ];
  return (
    <>
      <HeroSection />
      <TrustValueProps />
      <Box className="serviceSupPage">
      <Box className="bg2 mb-0 padM" id="suBpageWrp">
        <Box className="container">
        <Box className="MainHead">
                  <Typography
                    variant="h2"
                    marginBottom={"1em"}
                  >
                    Exhibition Signage & Events Display
                  </Typography>
                </Box>
          <Grid container spacing={4} style={{alignItems: "center"}}>
           
            <Grid item xs={12} sm={6}>

            <img
  src="https://www.1stopsigns.co.uk/wp-content/uploads/2019/08/Exhibition-Display.jpg"
  alt="Shop Signage"
  style={{ width: "100%", height: "auto", borderRadius:"5px",objectFit:"cover",maxHeight:"400px" }}
/>


            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className="contentSec">
                
                <Typography>1 Stop Signs is well-known for providing hassle-free signages for exhibition stands. We can design and develop signages and displays for all exhibition booths, large displays, and exhibition stands to help you meet your marketing goals. Understanding the audience is the vital key for the success of any exhibition graphics.</Typography>
                <Typography>The key to creating unique exhibition graphics is to determine your goal and what message you wish to give to the viewer. Once you’ve understood this goal, you can work with our team of exceptional designers and creative experts to create unique graphics. From exhibition signage banners to digital screen kiosks, we have experience designing unique signages from start to finish.</Typography>
                <Typography>Over the last 10 years, we have created unique displays for various events and exhibitions for many clients, including education, wholesale, e-commerce, travel, photographers and many more.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      
      <Box className="bg1 mb-0 padM" id="PrintingService">
        <Box className="container">
        <Box className="MainHead" style={{maxWidth:"100%"}}>
                  <Typography
                    variant="h2"
                    marginBottom={"1em"}
                  >
                    Why should you choose our Exhibition Signage Service?
                  </Typography>
                </Box>
          <Grid container spacing={4} style={{alignItems: "center"}}>
           
            <Grid item xs={12} sm={6}>
              <Box className="contentSec">
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
                <Typography>We have a client retention rate of 93% because we provide excellent exhibition displays for all types of events and exhibitions. An exhibition investment pays off when you choose an experienced signage expert, and 1 Stop Sign is exactly that.</Typography>
                <Typography>We offer 24-hour service for all customers and have the capacity to handle any last-minute requests for graphic productions. We provide an impressive structure for graphic development that ensures you can display your unique design concept without any hindrance.</Typography>
                <Typography>You can get in touch and see how we can create an exhibition display of your custom designs. Feel free to come into our shop to enjoy a firsthand experience of our unique techniques that create visually impactful displays.</Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6}>

            <img
  src="https://www.1stopsigns.co.uk/wp-content/uploads/2024/08/Snapinsta.app_324272296_469473205366534_1112045030552076264_n_1080.jpg"
  alt="Shop Signage"
  style={{ width: "100%", height: "auto", borderRadius:"5px",objectFit:"cover" }}
/>


            </Grid>
          </Grid>
        </Box>
      </Box>

      
      <Box className="bg2 mb-0 padM" id="PopUpDisplay">
        <Box className="container">
          <Grid container spacing={4} style={{alignItems: "center"}}>
           
             
            <Grid item xs={12} sm={6}>

            <img
  src="https://www.1stopsigns.co.uk/wp-content/uploads/2025/01/VehicleGraphics.jpg"
  alt="Shop Signage"
  style={{ width: "100%", height: "auto", borderRadius:"5px",objectFit:"cover" }}
/>


            </Grid>
            <Grid item xs={12} sm={6}>
        <Box className="MainHead" style={{maxWidth:"100%"}}>
                  <Typography
                    variant="h2"
                    marginBottom={".3em"}
                    textAlign={"left"}
                  >
                    Pop up Display
                  </Typography>
                </Box>
              <Box className="contentSec">
                <Typography>Pop up display booths are an excellent way to attract the attention of the entire room. At 1 Stop Sign, we can help you create unique pop-up display booths for all types of events and exhibitions. We can create all types of exhibition displays, from modular display systems for exhibition walls and freestanding digital screen kiosks to curved pop-up booths and promotional backdrop stands for maximum visual impact.</Typography>
                <Typography variant="h3">Why should you choose us?</Typography>
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
              </Box>
            </Grid>
           
          </Grid>

          
        </Box>
       
      </Box>

      <section className="padM customizationOptions" id="ExperienceServicesSec">
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
                  What are our customization options?
                  </Typography>
                </Box>
                <Typography>You can use our pop-up design services for all types of events, including trade shows, promotional exhibitions, etc. We provide excellent customization options that make us your first choice:</Typography>
                <List className="ListWrp">
                {listItems3.map((text, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: '30px', color: 'green' }}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
                </Box>
                </section>

                <Box className="bg1 mb-0 padM" id="suBpageWrp">
        <Box className="container">
          <Grid container spacing={4} style={{alignItems: "center"}}>
           
            <Grid item xs={12} sm={6}>
        <Box className="MainHead">
                  <Typography
                    variant="h2"
                    marginBottom={".5em"}
                    textAlign={"left"}
                  >
                    Rollup banner stands
                  </Typography>
                </Box>
              <Box className="contentSec">
                
                <Typography>Tired of using displays that require the stability of permanent flooring? We can help you create roller banners that are portable, lightweight and don’t require any effort on your part. Retractable banners are popular for encouraging interaction between customers and businesses.</Typography>
                <Typography>With our team of exceptional designers and creative experts, you can create a unique roll-up banner stand as your next event sign. The simple roll-up process folds the banner into a small rod, allowing you to carry it anywhere at any time.</Typography>
                <Typography variant="h3">Why should you pick us?</Typography>
                <List className="ListWrp">
                {listItems4.map((text, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: '30px', color: 'green' }}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>

            <img
  src="https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/Double-Sided-Rollup-Banners.jpg"
  alt="Shop Signage"
  style={{ width: "100%", height: "auto", borderRadius:"5px",objectFit:"cover" }}
/>


            </Grid>
          </Grid>
          <Grid container spacing={4} style={{alignItems: "center"}}>
           
            <Grid item xs={12} sm={6}>
            <img
  src="https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/FEATHER-fLAGS-copy.jpg"
  alt="Shop Signage"
  style={{ width: "100%", height: "auto", borderRadius:"5px",objectFit:"cover" }}
/>


            </Grid>
            
            <Grid item xs={12} sm={6}>
        <Box className="MainHead">
                  <Typography
                    variant="h2"
                    marginBottom={".5em"}
                    textAlign={"left"}
                  >
                   Flag banner
                  </Typography>
                </Box>
              <Box className="contentSec">
                <Typography>Ready to attract attention to your next event or for your booth?</Typography>
                <Typography>We provide excellent printed flag banners that you can use to attract the attention of everyone in the room. These unique fabric structures are custom printed according to your design and are the perfect addition to your promotional event.</Typography> <Typography>Our experience in designing unique flag banners is what you need to capture your audience’s attention.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="padM" id="ExceptionalCustomer">
            <Box className="container">
              <Box className="MainHead">
                <Typography variant="h2">
                Why should you choose our expertise?
                </Typography>
                <Box className="contentSec">
              <List className="ListWrp twoColumn">
                {listItems5.map((text, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: '30px', color: 'green' }}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              </Box>
              </Box>
            </Box>
            </Box>
      </Box>
      <ServiceFaq />
      <Box className="padM">
        <Testimonials />
      </Box>
    </>
  );
};

export default page;
