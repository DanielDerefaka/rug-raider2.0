import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface TemplateCardProps {
  title: string
  description: string
  messages: { text: string; isUser: boolean }[]
  gradient: string
}

export function TemplateCard({ title, description, messages, gradient }: TemplateCardProps) {
  return (
    <Card className="w-[400px] flex-shrink-0 overflow-hidden rounded-3xl border-0 bg-white shadow-lg">
      <div className={`relative h-[200px] ${gradient} p-6`}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.isUser ? "bg-[#BDFFC9] text-black" : "bg-white text-black"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        <Button variant="default" className="w-full rounded-full bg-black text-white hover:bg-black/90">
          Try template for free
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

