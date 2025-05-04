"use client"

import type React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Loader2 } from "lucide-react"

interface PlanCardProps {
  title: string
  price: string
  features: string[]
  onSelect: () => void
  loading?: boolean
  disabled?: boolean
  isCurrentPlan?: boolean
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  onSelect,
  loading = false,
  disabled = false,
  isCurrentPlan = false,
}) => {
  return (
    <Card className={`flex dark:bg-transparent flex-col h-full ${isCurrentPlan ? "border-primary" : ""}`}>
      <CardHeader className="pb-8">
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          {isCurrentPlan && <Badge variant="default">Current Plan</Badge>}
        </div>
        <div className="mt-2 text-3xl font-bold">{price}</div>
      </CardHeader>
      <CardContent className="flex-grow dark:bg-black">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={onSelect}
          disabled={disabled || isCurrentPlan}
          variant={isCurrentPlan ? "outline" : "default"}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : isCurrentPlan ? (
            "Current Plan"
          ) : (
            `Select ${title}`
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PlanCard

