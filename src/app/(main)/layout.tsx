import type { Metadata } from "next";
import Sidebar from '@/components/main/sidebar'
import InfoBar from '@/components/main/infobar'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: "Rug Raider | Dashboard ",
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
  <div  className={cn("flex  overflow-hidden h-screen")}>
      <Sidebar />
      <div className="w-full overflow-y-auto">
        <InfoBar />
        {children}
      </div>
    </div>
    </main>
  );
}
