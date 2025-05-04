import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/theme-provider";
import {Providers} from '@/react-query'
import { Toaster } from "sonner";
import TokenApiDebugger from "@/RugcheckDebugger";




const lufga = localFont({
  src: [
    {
      path: './lufga/LufgaLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './lufga/LufgaRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './lufga/LufgaMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './lufga/LufgaBold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: "--font-lufga"
});

export const metadata: Metadata = {
  title: "Linkedin Carousel ",
  description:
    "Linkedin Carousel generator",
  openGraph: {
    images: ["/mylo-banner.jpg"],
  },
  icons: {
    icon: "/main/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en"  suppressHydrationWarning>

        <body

          className={cn(
            lufga.className,
            " dark:bg-black antialiased h-full w-full"
          )}
        >
          
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="light"
          >
      
             <Providers>
   
      {children}
      {process.env.NODE_ENV === "development" && <TokenApiDebugger />}
  
            <Toaster />
              </Providers>
    
          </ThemeProvider>

        </body>
      
      </html>


  );
}

