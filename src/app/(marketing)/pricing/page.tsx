import { Container } from "@/components/shared/container";
import { Background } from "@/components/shared/background";
import { Heading } from "@/components/shared/heading";
import { Subheading } from "@/components/shared/subheading";
import { Pricing } from "@/components/shared/pricing";
import { PricingTable } from "./pricing-table";
import { Companies } from "@/components/shared/companies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Chatbot Pro",
  description:
    "Chatbot Pro is an AI-powered chatbot platform that helps businesses automate customer support, generate leads, and improve engagement. Choose a plan that fits your needs and get started today.",
  openGraph: {
    images: ["https://yourdomain.com/banner.png"], // Update with your chatbot's banner image
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Simple Pricing for Your Chatbot Needs</Heading>
          <Subheading className="text-center">
            Chatbot Pro offers flexible plans to help you automate customer support, generate leads, and improve engagement. Choose the plan that suits your business and get started instantly.
          </Subheading>
        </div>
        <Pricing />
        <PricingTable />
        <Companies />
      </Container>
    </div>
  );
}