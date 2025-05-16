"use client";
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
  Alert,
} from "@mui/material";
import React, { useEffect, useState, use } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getServiceBySlug } from "@/lib/api/api";

const page = ({ params }) => {
  const { slug } = use(params);

  const [blogDetail, setBlogDetail] = useState(null);
  const [sections, setSections] = useState(null);
  const [sections1, setSections1] = useState(null);
  const [sections2, setSections2] = useState(null);
  const [sections3, setSections3] = useState(null);
  const [customizationSections, setCustomizationSections] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getServiceBySlug(slug);
        if (response) {
          setBlogDetail(response);
          setSections1(response?.section1);
          setSections2(response?.section2);
          setSections3(response?.section3);
          setCustomizationSections(response?.customization_section);
          setSections(response?.sections);
        } else {
          notFound();
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  console.log(sections3);

  const listItems = [
    "Experienced in-house graphic designers that can create eye-catching graphics to attract everyone in the room",
    "High-quality printing options with state of the art Hi-tech printers for large format print images.",
    "Assistance and advice in finding and hiring the right exhibition display space to get maximum attention.",
    "Seamless display, installation, and dismantling of exhibition displays on your behalf.",
    "Our site supervisors ensure smooth execution of venue installation and dismantling.",
    "One seamless display of gargantuan exhibition displays for one vibrant visual.",
    "Affordable pricing for large exhibition bundles.",
  ];

  const listItems2 = [
    "Unique, easy to install and dismantle pop up display signages.",
    "Vibrant designs and constructions that you can use to feature product videos and promotional content.",
    "Easy replacement of graphics for event changes or changes in promotional strategy at the last minute.",
    "Affordable pricing for all types of pop up displays regardless of event type and location.",
    "High-quality ink, lights and materials to place focus on the content of the display.",
    "Simple dismantling of the display to allow for flexibility and movement during the event.",
  ];
  const listItems3 = [
    "Choice of size: Your pop up is crucial. Therefore you have complete control over the customization. We can create small table-size pop-up displays or large ones.",
    "Choice of shape and colour: We can create straight, curved, backlit and 3D pop-up displays. We can also create booths with hanging structures with poster backgrounds to capture maximum attention.",
    "Choice of shape and colour: We can create straight, curved, backlit and 3D pop-up displays. We can also create booths with hanging structures with poster backgrounds to capture maximum attention.",
    "Choice of lighting: Catch the eye of the entire room by integrating bright lights into the pop-up display that act as backlit hanging structures for your booth.",
  ];
  const listItems4 = [
    "Flexible designing and printing options means you are in complete control of the banner.",
    "Option to use fabric structures instead of plastic or cardboard for roll-up banners.",
    "Fast printing service to accommodate last-minute requirements.",
    "Availability of temporary stickers to cover any change in ideas or strategy.",
    "Free size and shape control options for little trade stalls and open events.",
    "Flexible pricing for all roll-up banners regardless of size and shape.",
  ];
  const listItems5 = [
    "A team of in-house expert designers who have perfected the technique.",
    "Vibrant colour printing options to attract visitors to your promotional event.",
    "Fully customized flags that can be aligned to your promotional strategy.",
    "Three unique flag designs (teardrops, sail and feather) with unlimited customization options.",
    "High-tech equipment and materials are used for all flags.",
    "Simple pricing packages that are customized for your project.",
  ];
  return (
    <>
      <HeroSection />
      <TrustValueProps />
      <Box className="serviceSupPage">
        <Box className="bg2 mb-0 padM" id="suBpageWrp">
          <Box className="container">
            <Box className="MainHead">
              <Typography variant="h2" marginBottom={"1em"}>
                {sections1?.service_title}
              </Typography>
            </Box>
            <Grid container spacing={4} style={{ alignItems: "center" }}>
              <Grid item xs={12} sm={6}>
                <img
                  src={sections1?.service_image}
                  alt={sections1?.service_title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "5px",
                    objectFit: "cover",
                    maxHeight: "400px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="contentSec">
                  <Typography
                    variant="body"
                    dangerouslySetInnerHTML={{
                      __html: sections1?.service_detail,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box className="bg1 mb-0 padM" id="PrintingService">
          <Box className="container">
            <Box className="MainHead" style={{ maxWidth: "100%" }}>
              <Typography variant="h2" marginBottom={"1em"}>
                {sections2?.why_you_choose_heading}
              </Typography>
            </Box>
            <Grid container spacing={4} style={{ alignItems: "center" }}>
              <Grid item xs={12} sm={6}>
                <Box className="contentSec">
                  <List className="ListWrp">
                    {sections2?.provide_services.map((text, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: "30px", color: "green" }}>
                          <CheckCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={text?.provide_service} />
                      </ListItem>
                    ))}
                  </List>
                  <Typography
                    variant="body"
                    dangerouslySetInnerHTML={{
                      __html: sections2?.service_content,
                    }}
                  />
                  {/* <Typography>
                    We have a client retention rate of 93% because we provide
                    excellent exhibition displays for all types of events and
                    exhibitions. An exhibition investment pays off when you
                    choose an experienced signage expert, and 1 Stop Sign is
                    exactly that.
                  </Typography>
                  <Typography>
                    We offer 24-hour service for all customers and have the
                    capacity to handle any last-minute requests for graphic
                    productions. We provide an impressive structure for graphic
                    development that ensures you can display your unique design
                    concept without any hindrance.
                  </Typography>
                  <Typography>
                    You can get in touch and see how we can create an exhibition
                    display of your custom designs. Feel free to come into our
                    shop to enjoy a firsthand experience of our unique
                    techniques that create visually impactful displays.
                  </Typography> */}
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <img
                  src={sections2?.display_image}
                  alt="Shop Signage"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box className="bg2 mb-0 padM" id="PopUpDisplay">
          <Box className="container">
            <Grid container spacing={4} style={{ alignItems: "center" }}>
              <Grid item xs={12} sm={6}>
                <img
                  src={sections3?.display_image}
                  alt="Shop Signage"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="MainHead" style={{ maxWidth: "100%" }}>
                  <Typography
                    variant="h2"
                    marginBottom={".3em"}
                    textAlign={"left"}
                  >
                    {sections3?.why_you_choose_heading}
                  </Typography>
                </Box>
                <Box className="contentSec">
                  <Typography
                    variant="body"
                    dangerouslySetInnerHTML={{
                      __html: sections3?.service_content,
                    }}
                  />
                  <Typography variant="h3">
                    Why should you choose us?
                  </Typography>
                  <List className="ListWrp">
                    {sections3?.provide_services.map((text, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: "30px", color: "green" }}>
                          <CheckCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={text?.provide_service} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <section
          className="padM customizationOptions"
          id="ExperienceServicesSec"
        >
          <Box
            className="background-overlay"
            sx={{
              // backgroundImage:
              //   'url("https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/layered-waves-row-0.svg")',
              backgroundImage: `${
                customizationSections?.customization_background_image
                  ? customizationSections?.customization_background_image
                  : 'url("https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/layered-waves-row-0.svg")'
              }`,
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
                {customizationSections?.customization_heading}
              </Typography>
            </Box>
            <Typography>
              {customizationSections?.customization_content}
            </Typography>
            <List className="ListWrp">
              {customizationSections?.customization_options?.map(
                (text, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: "30px", color: "green" }}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={text?.customization_option} />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </section>

        {/* <Box className="bg1 mb-0 padM" id="suBpageWrp">
          <Box className="container">
            <Grid container spacing={4} style={{ alignItems: "center" }}>
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
                  <Typography>
                    Tired of using displays that require the stability of
                    permanent flooring? We can help you create roller banners
                    that are portable, lightweight and don’t require any effort
                    on your part. Retractable banners are popular for
                    encouraging interaction between customers and businesses.
                  </Typography>
                  <Typography>
                    With our team of exceptional designers and creative experts,
                    you can create a unique roll-up banner stand as your next
                    event sign. The simple roll-up process folds the banner into
                    a small rod, allowing you to carry it anywhere at any time.
                  </Typography>
                  <Typography variant="h3">Why should you pick us?</Typography>
                  <List className="ListWrp">
                    {listItems4.map((text, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: "30px", color: "green" }}>
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
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} style={{ alignItems: "center" }}>
              <Grid item xs={12} sm={6}>
                <img
                  src="https://www.1stopsigns.co.uk/wp-content/uploads/2019/03/FEATHER-fLAGS-copy.jpg"
                  alt="Shop Signage"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
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
                  <Typography>
                    Ready to attract attention to your next event or for your
                    booth?
                  </Typography>
                  <Typography>
                    We provide excellent printed flag banners that you can use
                    to attract the attention of everyone in the room. These
                    unique fabric structures are custom printed according to
                    your design and are the perfect addition to your promotional
                    event.
                  </Typography>{" "}
                  <Typography>
                    Our experience in designing unique flag banners is what you
                    need to capture your audience’s attention.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box> */}

        <Box className="bg1 mb-0 padM" id="suBpageWrp">
          <Box className="container">
            {sections?.map((section, index) => (
              <Grid
                container
                spacing={4}
                key={index}
                style={{ alignItems: "center", marginBottom: "3rem" }}
              >
                {/* Image on LEFT */}
                {section.image_position === "left" && (
                  <Grid item xs={12} sm={6}>
                    <img
                      src={section.image}
                      alt={section.heading}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                )}

                <Grid item xs={12} sm={6}>
                  <Box className="MainHead">
                    <Typography
                      variant="h2"
                      marginBottom={".5em"}
                      textAlign={"left"}
                    >
                      {section.heading}
                    </Typography>
                  </Box>
                  <Box className="contentSec">
                    {section.paragraphs.map((para, i) => (
                      <Typography key={i}>{para}</Typography>
                    ))}

                    {section.sub_heading && (
                      <Typography variant="h3">
                        {section.sub_heading}
                      </Typography>
                    )}

                    {section.list_items &&
                      section.list_items.filter(Boolean).length > 0 && (
                        <List className="ListWrp">
                          {section.list_items.map((text, i) =>
                            text ? (
                              <ListItem key={i} disableGutters>
                                <ListItemIcon
                                  sx={{ minWidth: "30px", color: "green" }}
                                >
                                  <CheckCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            ) : null
                          )}
                        </List>
                      )}
                  </Box>
                </Grid>

                {/* Image on RIGHT */}
                {section.image_position === "right" && (
                  <Grid item xs={12} sm={6}>
                    <img
                      src={section.image}
                      alt={section.heading}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            ))}
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
                      <ListItemIcon sx={{ minWidth: "30px", color: "green" }}>
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
