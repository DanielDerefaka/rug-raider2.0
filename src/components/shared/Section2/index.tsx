"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  MoreVertical,
  PaperclipIcon,
  Plus,
  Smile,
  Send,
} from "lucide-react";

export default function Section2() {
  // Remove this line
  // const [activeTab, setActiveTab] = useState("engage")

  const chatPreviews = {
    engage: {
      messages: [
        {
          sender: "Robert Fox",
          time: "9:28 AM",
          content: "I will let Krystal know",
          isUser: false,
        },
        {
          sender: "You",
          time: "9:30 AM",
          content:
            "Here is the latest spec doc we reviewed with the engineers this morning: New Feature Spec.docx",
          isUser: true,
        },
        {
          sender: "Rakob Yasir",
          time: "9:35 AM",
          content: "We haven't had a break in awhile",
          isUser: false,
        },
      ],
      buttons: ["Products", "Services", "Support", "Contact"],
    },
    nurture: {
      messages: [
        {
          sender: "AI Assistant",
          time: "Just now",
          content:
            "Based on your interests, you might like our premium features. Would you like to learn more?",
          isUser: false,
        },
      ],
      buttons: ["Learn More", "Pricing", "Book a Demo", "Features"],
    },
    qualify: {
      messages: [
        {
          sender: "Support",
          time: "Just now",
          content:
            "No worries, we've all been in a melancholy situation like that. To reset your password, go to the login page and click on Forgot Password? Then, enter the email address and follow it.",
          isUser: false,
        },
      ],
      buttons: ["Solutions", "Services", "Book a Call", "Complain"],
    },
  };

  return (
    <main className="min-h-screen z-20 bg-[#FAFAFA] dark:bg-zinc-900 p-4 rounded-[30px]  md:p-8 lg:p-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Rug Raider helps you grow your customer base by capturing emails
              from registered users on your website and allowing you to
              broadcast messages to all your leads at once.
            </p>
            <Button
              variant="default"
              className="rounded-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black"
              size="lg"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div>
            <h1 className="text-[3.5rem] font-medium leading-[1.1] tracking-tight lg:text-6xl dark:text-white">
              Lead{" "}
              <span className="inline-block rounded-lg bg-[#8A2BE2] px-3 py-1 text-white">
                Generation
              </span>{" "}
              and{" "}
              <span className="inline-block rounded-lg bg-[#8A2BE2] px-3 py-1 text-white">
                Email
              </span>{" "}
              Marketing
              <span className="ml-4 inline-flex">
                <div className="flex h-10 w-20 items-center rounded-full border-2 border-black dark:border-white p-1">
                  <div className="h-6 w-6 rounded-full bg-black dark:bg-white"></div>
                  <div className="ml-1 h-6 w-6 rounded-full border-2 border-black dark:border-white"></div>
                </div>
              </span>
            </h1>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Tabs defaultValue="Seamless Conversation" className="space-y-6">
            {" "}
            {/* Update: Removed onValueChange prop */}
            <TabsList className="grid w-full grid-cols-1 gap-4 bg-transparent p-0">
              {[
                "Seamless Conversation",
                "No-Code Creation",
                "Auto Resolution",
                "Availability",
                "Email Marketing",
              ].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="w-full rounded-3xl bg-gray-100 dark:bg-zinc-800 text-wrap p-6 justify-start text-left transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-700"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold capitalize dark:text-white">
                      {tab}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 justify-start">
                      {tab === "Seamless Conversation" &&
                        "Natural interactions with customers to detect and resolve issues."}
                      {tab === "No-Code Creation" &&
                        "Users can create their own customer service AI without codes, with Mylo's help."}
                      {tab === "Auto Resolution" &&
                        "The AI agent automatically solves customer problems with ease."}
                      {tab === "Availability" &&
                        "AI customer service is available 24/7."}
                      {tab === "Email Marketing" &&
                        "Broadcast messages to all customers at once."}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative overflow-hidden hidden md:block rounded-3xl bg-white dark:bg-zinc-800 p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between border-b pb-4 dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8A2BE2]">
                  <span className="text-sm font-medium text-white">IS</span>
                </div>
                <div>
                  <div className="font-medium dark:text-white">
                    Rug Raider Chatbot
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-4 w-4 rounded-full bg-gray-200 border-2 border-white dark:border-zinc-800"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">+14</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-500"
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Replace the chat preview mapping with static content */}
            <div className="h-[400px] space-y-6 overflow-y-auto">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-zinc-700" />
                <div className="max-w-[80%] space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium dark:text-white">
                      John Fox
                    </span>
                    <span className="text-gray-500">9:28 AM</span>
                  </div>
                  <div className="rounded-2xl bg-gray-100 dark:bg-zinc-700 dark:text-white p-3">
                    <p>I will let Krystal know</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 flex-row-reverse">
                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-zinc-700" />
                <div className="max-w-[80%] space-y-1 items-end">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium dark:text-white">You</span>
                    <span className="text-gray-500">9:30 AM</span>
                  </div>
                  <div className="rounded-2xl bg-[#8A2BE2] text-white p-3">
                    <p>
                      Here is the latest spec doc we reviewed with the engineers
                      this morning: New Feature Spec.docx
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-zinc-700" />
                <div className="max-w-[80%] space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium dark:text-white">
                      Rakob Yasir
                    </span>
                    <span className="text-gray-500">9:35 AM</span>
                  </div>
                  <div className="rounded-2xl bg-gray-100 dark:bg-zinc-700 dark:text-white p-3">
                    <p>We haven't had a break in awhile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t pt-4 dark:border-zinc-700">
              <div className="flex items-center gap-2 rounded-xl border bg-white dark:bg-zinc-800 dark:border-zinc-700 p-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700"
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <input
                  type="text"
                  placeholder="Type a new message"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 dark:text-white"
                />
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    <PaperclipIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    className="h-8 w-8 rounded-full bg-[#8A2BE2]"
                  >
                    <Send className="h-4 w-4 text-white dark:text-purple-500" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
