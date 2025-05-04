import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <div className="w-full min-h-screen bg-white p-12 flex items-center justify-center">
      <div className="w-full max-w-[1400px] relative">
        <div
          className="relative bg-purple-500 p-16"
          style={{
            clipPath:
              "path('M60 0H1340C1373.14 0 1400 26.8629 1400 60V240C1400 273.137 1373.14 300 1340 300H60C26.8629 300 0 273.137 0 240V60C0 26.8629 26.8629 0 60 0Z')",
            borderRadius: "32px",
          }}
        >
          <div className="max-w-4xl">
            <h1 className="text-[64px] leading-[1.1] font-normal text-black mb-6">
              Take control of your productivity with a GPT-4 chatbot now
            </h1>
            <p className="text-black/80 text-xl max-w-2xl mb-12">
              Transform your Customer Service with Rotar's AI and GPT-4 Powered Chatbot Solution. Try it free now.
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-black text-white hover:bg-black/90 text-base font-normal px-6 py-6 rounded-full flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-black/10 bg-transparent text-black hover:bg-transparent hover:border-black/20 text-base font-normal px-6 py-6 rounded-full flex items-center gap-2"
              >
                Contact Us
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

