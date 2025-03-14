import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'res.cloudinary.com',
      },
      {
        protocol:'https',
        hostname: "lh3.googleusercontent.com",
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Limit the size of req:body can send
    },
  }
};

export default nextConfig;