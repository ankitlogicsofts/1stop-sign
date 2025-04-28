"use client";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

import "../public/assets/sass/main.scss";
import "../public/assets/css/main.css";
import "../public/assets/sass/responsive.scss";
import { useEffect, useState } from "react";
import { GetContactInformation } from "@/lib/api/api";

export default function RootLayout({ children }) {
  const [headerMenuItems, setHeaderMenuItems] = useState([]);
  const [footerMenuItems, setFooterMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "https://demo.digitalgood.com.au/1stopsigns/wp-json/py/v2/menus"
        );
        const data = await response.json();

        setHeaderMenuItems(data.header);
        setFooterMenuItems(data.footer);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchContactInformation = async () => {
      try {
        const response = await GetContactInformation();
        if (response) {
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchContactInformation();
  }, []);

  const headerItems = headerMenuItems.menuitems || [];
  const footerItems = footerMenuItems.menuitems || [];

  return (
    <html lang="en">
      <head>
        {/* ✅ Meta tag for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>1stopsigns</title>
        <link rel="icon" href="/fav.png" sizes="32x32" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header headerItems={headerItems} />
        {children}
        <Footer footerItems={footerItems} data={data} />
      </body>
    </html>
  );
}
