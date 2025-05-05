import HeroSection from '@/src/components/HeroSection'
import OurCompetitive from '@/src/components/sevices/OurCompetitive'
import PromotionalPrintingServices from '@/src/components/sevices/PromotionalPrintingServices'
import SignagePrinting from '@/src/components/sevices/SignagePrinting'
import ServiceFaq from '@/src/components/sevices/ServiceFaq'
import TrustValueProps from '@/src/components/TrustValueProps'
import { Box, Divider, Grid, Typography, Button } from '@mui/material';
import React from 'react'
import Testimonials from '@/src/components/Testimonials'
import ExperienceServices from '@/src/components/sevices/ExperienceServices'
import { CustomerService } from '@/src/components/sevices/CustomerService'

const page = () => {
  return (
    <>
    <HeroSection />
    <TrustValueProps />
    <OurCompetitive/>
    <SignagePrinting/>
    <Divider/>
    <PromotionalPrintingServices/>
    <ExperienceServices/>
    <section className="bg2 mb-0" id="IdealShop">
      <Box className="container" sx={{ maxWidth: "100%" }}>
        <Grid container spacing={4}>
          {/* First Row */}
          <Grid item xs={12} sm={6} className="contentArea">
            <Typography variant="h2">
            Your Go-To Print Shop in London: Transforming Ideas into Impeccable Prints
            </Typography>
            <Typography variant="body1" paragraph> Welcome to 1StopSigns, your trusted local print shop based in London, where expertise meets innovation, and your printing needs find the perfect solution.</Typography>
            <Typography variant="body1" paragraph> With over a decade of experience, our team of experienced professionals is committed to delivering the highest quality prints, meeting even the tightest deadlines.</Typography>
            <Typography variant="body1" paragraph>Our print shop combines ease of access with the assurance of top-notch services. We understand the importance of professional quality in every print job, and that’s why our team of experts is dedicated to ensuring that each project meets the highest standards. </Typography>
            <Typography variant="body1" paragraph> Order online and experience the convenience of same-day delivery, ensuring your prints are in your hands precisely when you need them.</Typography>
            <Typography variant="body1" paragraph> Our extensive list of print services caters to a wide range of needs – from signage to banners, adding that extra sparkle to your documents.</Typography>
            <Typography variant="body1" paragraph> Express your unique style and creativity by choosing us for all your printing needs in London. Our dedicated team ensures that every project reflects your distinct vision, making each piece a masterpiece of your own design.</Typography>
            <Typography variant="body1" paragraph> Be it digital printing, or printing your promotional materials, we promise you high quality speedy service with same-day delivery for your businesses.</Typography>
            
            <Button
              href="tel:02081680001"
              className="common_btn book_btn"
              variant="contained"
              color="primary"
              startIcon={<i className="fa fa-phone" />}
            >
              020 8168 0001
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <img
              src="https://www.1stopsigns.co.uk/wp-content/uploads/2024/01/img01.png"
              alt="Shop Signage"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {/* Second Row */}
          <Grid item xs={12} sm={6}>
            <img
              src="https://www.1stopsigns.co.uk/wp-content/uploads/2024/01/img02.png"
              alt="Shop Signage"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>

          <Grid item xs={12} sm={6} className="contentArea">
            <Typography variant="h2">
            Our Simple Process
            </Typography>
            <Typography variant="body1" paragraph>At 1 Stop Signs, we believe in simplicity without compromising quality. Our easy process ensures that your printing job is done seamlessly, right from the comfort of your screen to the final product in your hands, all on the same day.</Typography>
            <Typography variant="body1" paragraph>All you have to do is share your ideas with us, and our team will create stunning designs and graphics to project and highlight your product in the best possible way, to make a positive impact on your potential customers.</Typography>
            <Typography variant="body1" paragraph>Either fill in the query form or call us on 020 8168 0001.</Typography>
            <Typography variant="h6" paragraph>Same-Day Service</Typography>
            <Typography variant="body1" paragraph>At 1 Stop Signs, we understand the urgency of your projects. Benefit from our commitment to efficiency with our same-day service. Your order moves swiftly through our advanced printing process, ensuring you receive your prints promptly without compromising on quality.</Typography>
            <Typography variant="body1" paragraph>We offer a same day pick up and 24-hour express delivery service if you order before 11am*.</Typography>
            <Typography variant="body1" paragraph>Embrace the simplicity of our easy process and discover the unmatched convenience of ordering from the best Print Shop in London. Your vision, our expertise – all on the same day!</Typography>
            <Typography variant="body1" paragraph>Our London Printing offers a spectrum of high-quality printing services, combining expertise and efficiency to bring your projects to life with exceptional results.</Typography>
             
            <Button
              href="/contact"
              className="common_btn book_btn"
              variant="contained"
              color="primary"
              startIcon={<i className="fa fa-phone" />}
            >
              Call Now
            </Button>
          </Grid>
        </Grid>
        
      
      </Box>
      <Box className="padM pb-0">
        
      <Box className="container MainHead" id="PrintingService">
        <Typography variant="h2" xs={{marginBottom:"1rem"}}>
            1 Stop Signs – A Printing Service You Can Trust for Your Same Day Printing Needs
            </Typography>
           </Box>
      <Grid container spacing={4}>
          {/* First Row */}
          <Grid item xs={12} sm={6} className="contentArea">
            
            <div className="contentSec">  
              <Typography variant="body1" paragraph>Since our establishment, we have become the personal favourite of business owners and retailers across London. At 1 Stop Signs, we take pride in offering a comprehensive range of exceptional services to meet all your signage needs with the utmost quality and care.</Typography>
             <Typography variant="body1" paragraph>As your London-based local printing company, we specialize in large-format printing, ensuring your printing jobs are executed precisely and delivered to perfection.</Typography>
            <Typography variant="body1" paragraph>From eye-catching Estate Agent Boards to captivating Signage and Sign Makers services in London, our expertise extends to Vehicle Signage, Window Graphics, Vinyl Print Cut, Wallpaper, CNC Cutting and fabrication, Hoarding Printing, and meticulous Mounting and finishing.</Typography>
                      
<Typography>We promise to deliver excellence in every aspect, ensuring your vision is brought to life with precision and professionalism. Trust us for a seamless, high-quality experience in fulfilling your printing requirements.</Typography>
<Typography>Our two most crucial services that set us apart from other printers are <strong>advanced printing technology and effective communication</strong>. We firmly believe that these two factors are the key reasons why 1 Stop Signs is cherished by all. We have a firm grasp on ensuring excellence in both, making us a preferred choice in the industry.</Typography>
<Typography variant='h3'>Advanced Printing Technology</Typography>
<Typography>We only use advanced printing technology and high-quality printers to ensure we provide you with the best results imaginable.</Typography>
<Typography>We use UV resistant and eco-solvent inks, which makes the final print output withstand high light exposure, smudges and scratches and of course makes it long-lasting.</Typography>
<Typography variant='h3'>The Vital Role of Communication</Typography>
<Typography>Effective communication is extremely crucial in today’s highly competitive marketing environment.</Typography>
<Typography>Our team gathers your input on design ideas, wordings and style preferences, to create the most impactful and visually powerful images within no time.</Typography>
<Typography>With our sophisticated printing machinery, 1 Stop Signs offers a wide range of the best online printing services in and around London. All our printing services are affordably priced, and we are well equipped to ensure a fast turnaround time.</Typography>
</div>    
          </Grid>

          <Grid item xs={12} sm={6}>
            <img
              src="https://www.1stopsigns.co.uk/wp-content/uploads/2024/01/img03.png"
              alt="Shop Signage"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
    </section>
<CustomerService/>
    <ServiceFaq/>
    <Box className="padM">
    <Testimonials/>
    </Box>
    </>
  )
}

export default page