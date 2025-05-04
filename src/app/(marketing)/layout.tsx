import type { Metadata } from "next";
import "../globals.css";

// import { cn } from "@/lib/utils";
import { NavBar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
// import Footer from "@/components/shared/Footer";
// import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Rug Raider",
  description:
    "Rug Raider is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["/mylo-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <NavBar />
      {children}
      <div className="absolute bottom-0">{/* <Footer /> */}</div>
    </main>
  );
}
