/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "demo.digitalgood.com.au",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  