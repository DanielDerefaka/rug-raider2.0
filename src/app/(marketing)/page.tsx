import { DotBackgroundDemo } from "@/components/acternity/dot-background";
// import CivicAuthButton from "@/components/Cicic";
import { Background } from "@/components/shared/background";
import { BackgroundLines } from "@/components/shared/background-lines";
import CTASection from "@/components/shared/call-to-action";
import { Companies } from "@/components/shared/companies";
import { Container } from "@/components/shared/container";
import { Footer } from "@/components/shared/Footer";
// import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/HeroSection";
import Section1 from "@/components/shared/Section1";
import Section2 from "@/components/shared/Section2";
import { TemplatesSection } from "@/components/shared/Template";
import { Testimonials } from "@/components/shared/testimonials";
import { cn } from "@/lib/utils";



export default function Home() {
  return (
    <div className="relative font-sans ">
      {/* <BackgroundLines> */}
    <div className="absolute inset-0 h-full w-full overflow-hidden ">
 
    </div>
    <Container className="flex min-h-screen flex-col items-center justify-between ">
    <div className=" bg-white dark:bg-black">
      {/* <div
        className={cn(
       "absolute absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      /> */}
       {/* <div className=" [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
       <Hero/>
       {/* <CivicAuthButton/> */}
       <Companies/>
       <Section1/>
       <Section2/>
       <TemplatesSection/> 
       <Testimonials/>
      </div>
     
       
    </Container>
   
     <div className="relative">
     

      <Footer/>
    </div> 
    {/* </BackgroundLines> */}

  </div> 

  );
}
