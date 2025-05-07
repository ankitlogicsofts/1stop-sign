import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const page = () => {
  const listItems = [
    'Contact you regarding queries raised in the contact form;',
    'Progress an order you have submitted and send you information directly related to this;',
    'Carry out our obligations arising from any contracts entered into by you and us;',
    'Seek your views or comments on the services we provide;',
    'Notify you of changes to our services;',
    'Send you communications which you have requested and that may be of interest to you;',
    'These may include information about campaigns, promotions of our associated companies goods and services;',
  ];
  return (
    <>
      <Box className="padM container policyWrp">
        <Box className="MainHead">
          <Typography variant="h2" marginBottom={"1em"}>
            Privacy Policy
          </Typography>
        </Box>
        <Typography>
          At 1Stop Signs Ltd, we are committed to protecting and respecting your
          privacy.
        </Typography>
        <Typography>
          This Policy explains when and why we collect personal information
          about people who visit our website, how we use it, the conditions
          under which we may disclose it to others and how we keep it secure. We
          may change this Policy from time to time so please check this page
          occasionally to ensure that you’re happy with any changes. By using
          our website, you’re agreeing to be bound by this Policy. Any questions
          regarding this Policy and our privacy practices should be sent by
          email to <Link href="mailto:sales@1stopsigns.co.uk"> sales@1stopsigns.co.uk</Link> or by writing to 1Stop Signs Ltd, 258
          Green Lane, Ilford, IG1 1YF. Alternatively, you can telephone <Link href="tel:02081680001"> 020 8168 0001</Link>.
        </Typography>
        <Typography variant="h2">Who are we?</Typography>
        <Typography>1Stop Signs Ltd is a Graphic Design, Printing and Website Design company based in IIford, London. 1Stop Signs Ltd is the data controller. This means we decide how your personal data is processed and for what purposes.</Typography>
        <Typography variant="h2">How do we collect information from you?</Typography>
        <Typography>We obtain information about you when you use our website, for example, when you complete the contact form, when you complete the site registration form, purchase a product from our store or engage with other forms within our site.</Typography>
        <Typography variant="h2">What type of information is collected from you?</Typography>
        <Typography>The personal information we collect might include your name, address, email address, IP address, and information regarding what pages are accessed and when. If you make a donation online or purchase a product from us, your card information is not held by us, it is collected by our third-party payment processors, who specialise in the secure online capture and processing of credit/debit card transactions, as explained below.</Typography>
      
        <Typography variant="h2">Use of ‘cookies’</Typography>
        <Typography>Like many other websites, the 1Stop Signs Ltd website uses cookies. ‘Cookies’ are small pieces of information sent by an organisation to your computer and stored on your hard drive to allow that website to recognise you when you visit. They collect statistical data about your browsing actions and patterns and do not identify you as an individual. For example, we use cookies to store your country preference. This helps us to improve our website and deliver a better more personalised service.</Typography>
        <Typography>It is possible to switch off cookies by setting your browser preferences. For more information on how to switch off cookies on your computer, visit our full cookies policy. Turning cookies off may result in a loss of functionality when using our website.</Typography>
        <Typography variant="h2">Main Cookies used on our site</Typography>
        <Typography><strong> Google Privacy Policy</strong></Typography>
        <Typography>These cookies are used to collect information about how visitors use our site. We use the information to compile reports and to help us improve the site. The cookies collect information in an anonymous form, including the number of visitors to the site, where visitors have come to the site from and the pages they visited.</Typography>
        <Typography>For more information on Google privacy policy visit here – Google Privacy Policy</Typography>
        <Typography><strong>Google Maps</strong></Typography>
        <Typography>These are Google Maps third party cookies, which are unique identifiers to allow traffic analysis to Google Maps.</Typography>
        <Typography variant="h2">How is your information used?</Typography>
        <Typography><strong>We may use your information to:</strong></Typography>
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
      <Typography>We review our retention periods for personal information on a regular basis. We are legally required to hold some types of information to fulfil our statutory obligations. We will hold your personal information on our systems for as long as is necessary for the relevant activity, or as long as is set out in any relevant contract you hold with us.</Typography>                
      <Typography variant="h2">Who has access to your information?</Typography>
      <Typography>We will not sell or rent your information to third parties.</Typography>
<Typography>We will not share your information with third parties for marketing purposes.</Typography>
<Typography>Third Party Service Providers working on our behalf: We may pass your information to our third-party service providers, agents subcontractors and other associated organisations for the purposes of completing tasks and providing services to you on our behalf (for example to send you mailings).</Typography>
<Typography>However, when we use third party service providers, we disclose only the personal information that is necessary to deliver the service and we have a contract in place that requires them to keep your information secure and not to use it for their own direct marketing purposes. Please be reassured that we will not release your information to third parties beyond the company for them to use for their own direct marketing purposes, unless you have requested us to do so, or we are required to do so by law, for example, by a court order or for the purposes of prevention of fraud or other crime.</Typography>
<Typography>When you are using our secure store pages, your payments are processed by a third-party payment processor, who specialises in the secure online capture and processing of credit/debit card transactions. If you have any questions regarding secure transactions, please contact us.</Typography>
<Typography>We may transfer your personal information to a third party as part of a sale of some or all of our business and assets to any third party or as part of any business restructuring or reorganisation, or if we’re under a duty to disclose or share your personal data in order to comply with any legal obligation or to enforce or apply our terms of use or to protect the rights, property or safety of our supporters and customers. However, we will take steps with the aim of ensuring that your privacy rights continue to be protected.</Typography>
<Typography variant="h3">Your choices</Typography>
<Typography>You have a choice about whether or not you wish to receive information from us. If you do not want to receive direct marketing communications from us about our exciting products and services, then you can select your choices by ticking the relevant boxes situated on the form on which we collect your information.</Typography>
<Typography>We will not contact you for marketing purposes by email, phone or text message unless you have given your prior consent. We will not contact you for marketing purposes by post if you have indicated that you do not wish to be contacted. You can change your marketing preferences at any time by contacting us by email: <Link href="mailto:sales@1stopsigns.co.uk"> sales@1stopsigns.co.uk</Link> or telephone on <Link href="tel:02081680001"> 020 8168 0001</Link></Typography>
<Typography variant="h3">How you can access and update your information</Typography>
<Typography>The accuracy of your information is important to us. You have the right to request a copy of the information we hold about you so that you can ensure its accuracy. You can do this by the following methods:</Typography>
<Typography>You can send an email to <Link href="mailto:sales@1stopsigns.co.uk"> sales@1stopsigns.co.uk</Link> and request the information held about you. Alternatively you can write to us at 1Stop Signs Ltd, 258 Green Lane, Ilford, IG1 1YF.</Typography>
<Typography variant="h3">Right to erasure</Typography>
<Typography>If you want to request deletion of your personal information, you can email us at <Link href="mailto:sales@1stopsigns.co.uk"> sales@1stopsigns.co.uk</Link>.</Typography>
<Typography>Security precautions in place to protect the loss, misuse or alteration of your information.</Typography>
<Typography>When you give us personal information, we take steps to ensure that it’s treated securely. Any sensitive information (such as credit or debit card details) is encrypted and protected with the following software 128 Bit encryption on SSL. When you are on a secure page, a lock icon will appear on the bottom of web browsers such as Microsoft Internet Explorer.</Typography>
<Typography>Non-sensitive details (your email address etc.) are transmitted normally over the Internet, and this can never be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we cannot guarantee the security of any information you transmit to us, and you do so at your own risk. Once we receive your information, we make our best effort to ensure its security on our systems. Where we have given (or where you have chosen) a password which enables you to access certain parts of our websites, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.</Typography>
<Typography variant="h3">Profiling</Typography>
<Typography>We may analyse your personal information to create a profile of your interests and preferences so that we can contact you with information relevant to you. We may make use of additional information about you when it is available from external sources to help us do this effectively. We may also use your personal information to detect and reduce fraud and credit risk.</Typography>
<Typography variant="h3">Links to other websites</Typography>
<Typography>Our website may contain links to other websites run by other organisations. This privacy policy applies only to our website‚ so we encourage you to read the privacy statements on the other websites you visit. We cannot be responsible for the privacy policies and practices of other sites even if you access them using links from our website.</Typography>
<Typography>In addition, if you linked to our website from a third-party site, we cannot be responsible for the privacy policies and practices of the owners and operators of that third-party site and recommend that you check the policy of that third-party site.</Typography>
<Typography variant="h3">16 or Under</Typography>
<Typography>We are concerned to protect the privacy of children aged 16 or under. If you are aged 16 or under‚ please get your parent/guardian&#8217;s permission beforehand whenever you provide us with personal information.</Typography>
<Typography variant="h3">Transferring your information outside of Europe</Typography>
<Typography>As part of the services offered to you through this website, the information which you provide to us may be transferred to countries outside the European Union (“EU”). By way of example, this may happen if any of our servers are from time to time located in a country outside of the EU. These countries may not have similar data protection laws to the UK. By submitting your personal data, you’re agreeing to this transfer, storing or processing. If we transfer your information outside of the EU in this way, we will take steps to ensure that appropriate security measures are taken with the aim of ensuring that your privacy rights continue to be protected as outlined in this Policy.</Typography>
<Typography>If you use our services while you are outside the EU, your information may be transferred outside the EU in order to provide you with those services.</Typography>
<Typography variant="h3">Review of this Policy</Typography>
<Typography>We keep this Policy under regular review. This Policy was last updated in July 2019.</Typography>
      </Box>
    </>
  );
};

export default page;
