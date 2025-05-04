import React from 'react'
import { ArrowUpRight, Clock, DollarSign, MoreHorizontal, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const page = () => {
  return (
    <div>
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b font-semibold">
        Dashboard
      </h1>
    </div>
    <div className="flex flex-col gap-4 p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dark:bg-black" >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue Generated</CardTitle>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">1</div>
            </div>
            <p className="text-xs text-muted-foreground">Balance</p>
            
          </CardContent>
        </Card>
        <Card  className="dark:bg-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Number of clients</CardTitle>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold"> 1 </div>
            </div>
            <p className="text-xs text-muted-foreground">Number of clients</p>
          </CardContent>
        </Card>
        <Card  className="dark:bg-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Number of domains</CardTitle>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Number of domains</p>
          </CardContent>
        </Card>
        <Card  className="dark:bg-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Number of members</CardTitle>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">2 </div>
            </div>
            <p className="text-xs text-muted-foreground">members</p>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default page
