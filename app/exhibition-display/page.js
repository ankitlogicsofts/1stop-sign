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
import OurGallery from "@/src/components/signageComponents/OurGallery";

const page = ({ params }) => {
  const { slug } = use(params);

  const [blogDetail, setBlogDetail] = useState(null);
  const [sections, setSections] = useState(null);
  const [sections1, setSections1] = useState(null);
  const [sections2, setSections2] = useState(null);
  const [sections3, setSections3] = useState(null);
  const [customizationSections, setCustomizationSections] = useState(null);
  const [loading, setLoading] = useState(true);
  const [testimonialData, setTestimonialData] = useState(null);
  const [galleries, setGalleries] = useState(null);
  const [faqs, setFaqs] = useState(null);

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
          setTestimonialData(response?.testimonials);
          setFaqs(response?.faqs);
          setGalleries(response);
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
  console.log(customizationSections?.length);

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
                  {sections2?.provide_services?.length > 0 && (
                    <List className="ListWrp">
                      {sections2.provide_services.map((text, index) => (
                        <ListItem key={index} disableGutters>
                          <ListItemIcon
                            sx={{ minWidth: "30px", color: "green" }}
                          >
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText primary={text?.provide_service} />
                        </ListItem>
                      ))}
                    </List>
                  )}

                  <Typography
                    variant="body"
                    dangerouslySetInnerHTML={{
                      __html: sections2?.service_content,
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <img
                  src={sections2?.display_image}
                  alt="Shop sSignage"
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
        {galleries?.images?.length > 0 && <OurGallery galleries={galleries} />}

        {sections3?.service_content?.length > 0 && (
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
                    {sections3?.provide_services?.length > 0 && (
                      <Typography variant="h3">
                        Why should you choose us?
                      </Typography>
                    )}

                    <List className="ListWrp">
                      {/* {sections3?.provide_services.map((text, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: "30px", color: "green" }}>
                          <CheckCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={text?.provide_service} />
                      </ListItem>
                    ))} */}

                      {sections3?.provide_services?.length > 0 && (
                        <List className="ListWrp">
                          {sections3.provide_services.map((text, index) => (
                            <ListItem key={index} disableGutters>
                              <ListItemIcon
                                sx={{ minWidth: "30px", color: "green" }}
                              >
                                <CheckCircleIcon />
                              </ListItemIcon>
                              <ListItemText primary={text?.provide_service} />
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
        {customizationSections &&
          Array.isArray(customizationSections.customization_options) &&
          customizationSections.customization_options.length > 0 && (
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
                  transition:
                    "background 0.3s, border-radius 0.3s, opacity 0.3s",
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
          )}

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

        {sections?.length > 0 && (
          <>
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
                          <ListItemIcon
                            sx={{ minWidth: "30px", color: "green" }}
                          >
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
          </>
        )}
      </Box>
      {!blogDetail?.description_title && !blogDetail?.description && (
        <Box
          component="section"
          className="sec_1 bg2 padM"
          id="descriptionSection"
        >
          <Box className="container">
            <Box className="MainHead" textAlign="center" mb={4}>
              <Typography variant="h2">
                {blogDetail?.description_title ?? ""}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: blogDetail?.description,
              }}
            />
          </Box>
        </Box>
      )}

      {faqs?.length > 0 && <ServiceFaq faqs={faqs} />}

      {testimonialData?.lists?.length > 0 && (
        <Box className="padM">
          <Testimonials testimonialData={testimonialData} />
        </Box>
      )}
    </>
  );
};

export default page;
