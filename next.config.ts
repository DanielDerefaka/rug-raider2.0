import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth/nextjs"

const nextConfig: NextConfig = {
 /* config options here */
 images: {
  loader: 'custom',
  loaderFile: './my-image-loader.ts',
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
    {
      protocol: 'http',
      hostname: '**',
    },
  ],
},


 typescript: {
   // Ignoring TypeScript errors during build
   ignoreBuildErrors: true,
 },

 eslint:{
   ignoreDuringBuilds: true
},
};



const withCivicAuth = createCivicAuthPlugin({
  clientId: "2d27f3a7-8c99-4f42-a9ad-00894198ebe9"
});

export default withCivicAuth(nextConfig) ;
