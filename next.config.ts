import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth/nextjs"

const nextConfig: NextConfig = {
 /* config options here */
 images: { domains: ["i.pravatar.cc", "images.unsplash.com", "your-storage-service.com", "ucarecdn.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com", "prod-files-secure.s3.us-west-2.amazonaws.com", "prod-files-secure.s3.us-west-2.amazonaws.com"] },
 pageExtensions: ["ts", "tsx", "mdx"],



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
