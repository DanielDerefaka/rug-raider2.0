"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { TemplateCard } from "./cards"

const industries = ["E-Commerce", "Education", "Health Care", "Financial", "HR", "Tourism"]

const templates = [
  {
    title: "Chatbot for Marketing",
    description: "Provide recommendations and process transactions in a chat.",
    gradient: "bg-gradient-to-br from-blue-300 to-cyan-300",
    messages: [
      {
        text: "Great Happy yo help find the right plan for you 😊",
        isUser: false,
      },
      {
        text: "What are you lookin to do with Rotar AI",
        isUser: false,
      },
      {
        text: "Get more customer on my website page",
        isUser: true,
      },
    ],
  },
  {
    title: "Chatbot for HR",
    description: "Find talent and interact with candidates in an innovative way",
    gradient: "bg-gradient-to-br from-green-300 to-emerald-300",
    messages: [
      {
        text: "You have qualified for the next round of interview, Alvarez! Please let me know your availability 😊",
        isUser: false,
      },
      {
        text: "Any time between 2 to 5 PM tomorrow",
        isUser: true,
      },
    ],
  },
 
  {
    title: "Chatbot for Support",
    description: "Optimize your customer support and give your customers the best experience",
    gradient: "bg-gradient-to-br from-emerald-400 to-green-600",
    messages: [
      {
        text: "How can I help you today?",
        isUser: false,
      },
      {
        text: "I need help with my account settings",
        isUser: true,
      },
    ],
  },
]

export function TemplatesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="z-20 py-24 hidden md:block">
      <div className="container px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-medium leading-tight tracking-tight lg:text-6xl">
            Use <span className="inline-block rounded-lg bg-[#8A2BE2] px-3 py-1">templates</span> to get started{" "}
            <span className="block">your project</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <Button key={industry} variant="outline" className="rounded-full border-2">
                {industry}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {templates.map((template, index) => (
              <div key={index} className="snap-start" style={{ scrollSnapAlign: "start" }}>
                <TemplateCard {...template} />
              </div>
            ))}
          </div>

          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={() => scroll("left")}>
              ←
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={() => scroll("right")}>
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

