"use client";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

import "../public/assets/sass/main.scss";
import "../public/assets/sass/responsive.scss";
import "../public/assets/css/main.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Meta tag for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>1stopsigns</title>
        <link rel="icon" href="/fav.png" sizes="32x32" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
