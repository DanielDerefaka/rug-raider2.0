import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, ArrowRight, Stars } from "lucide-react";

export default function Hero() {
  return (
    <main className=" md:pt-20 mt-20 relative p-5 overflow-hidden dark:bg-transparent rounded-[30px] ">
      <div className="mx-auto">
        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-[2.75rem] font-medium leading-tight tracking-tight lg:text-6xl">
                The Ultimate Token{" "}
                <span className="block">
                  Security Analysis{" "}
                  <span className="relative inline-block">
                    Platform
                    <div className="absolute -right-16 top-1/2 -translate-y-1/2">
                      <div className="h-8 w-14 rounded-full bg-black p-1">
                        <div className="h-6 w-6 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </span>
                </span>
              </h1>
              <div className="flex gap-2">
                <Badge variant="outline" className="rounded-full border-2">
                  <span className="mr-1">🛡️</span> Security Scanner
                </Badge>
                <Badge variant="outline" className="rounded-full border-2">
                  <span className="mr-1">🔍</span> Network Analysis
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Rug Raider is an advanced token security platform that helps you identify
                potential scams and rug pulls before they happen. Using network analysis
                and wallet profiling, it offers real-time risk assessment and protection
                for crypto investors.
              </p>
            </div>

            {/* Guide Card */}
            <Card className="overflow-hidden rounded-3xl">
              <div className="grid gap-6 p-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Guide: Official Rug Raider Platform Tutorial
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to use Rug Raider's advanced features to detect suspicious
                    token patterns and protect your investments from potential scams.
                  </p>
                  <Button variant="link" className="p-0">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {/* <div className="relative h-32 sm:h-full">
                  <Image
                    src='/security-analysis.jpg'
                    alt="Token security visualization"
                    fill
                    className="object-cover"
                  />
                </div> */}
              </div>
            </Card>
          </div>

          {/* Right Side Content */}
          <div className="relative space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/rugcheck-banner.jpg"
                alt="Token security analysis dashboard"
                fill
                className="object-cover"
              />
              <Button
                className="absolute bottom-6 right-6 rounded-full bg-[#a751f7] text-black hover:bg-[#a751f7]/90"
                size="lg"
              >
                Watch Tutorial <Play className="ml-2 h-4 w-4 fill-current" />
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#a751f7]/40 p-6">
                <div className="text-5xl font-semibold">10K+</div>
                <p className="mt-2 text-muted-foreground">
                  Tokens analyzed daily for security vulnerabilities
                </p>
              </div>
              <div className="rounded-3xl bg-black p-6 text-white">
                <div className="mb-2 flex gap-1">
                  <Stars className="h-6 w-6" />
                  <Stars className="h-6 w-6" />
                  <Stars className="h-6 w-6" />
                </div>
                <div className="text-xl font-medium leading-tight">
                  AI-powered scam detection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}