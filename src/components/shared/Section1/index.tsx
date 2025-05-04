import Image from "next/image";
import { MessagesSquare } from "lucide-react";

export default function Section1() {
  return (
    <main className="min-h-screen p-4 z-20 md:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-[2.75rem] font-medium leading-tight lg:text-6xl">
                Effortless Customer Service
                <div className="relative">
                  experience powered{" "}
                  <span className="relative inline-block">
                    by AI
                    {/* <div className="absolute -right-16 top-1/2 -translate-y-1/2">
                      <div className="flex h-8 w-20 items-center rounded-full bg-black p-1">
                        <div className="h-6 w-6 rounded-full bg-white transition-all"></div>
                        <div className="ml-1 h-6 w-6 rounded-full bg-white/20"></div>
                        <div className="ml-1 h-6 w-6 rounded-full bg-white/10"></div>
                      </div>
                    </div> */}
                  </span>
                </div>
              </h1>
              <p className="text-lg text-muted-foreground">
                Unlike regular customer service chatbots that rely on preset
                responses, Rug Raider helps you build a service agent that
                offers 24/7 assistance and automatically resolves customer
                issues. This way, you can focus on what matters most.
              </p>
            </div>

            {/* Integrations Section */}
            <div className="space-y-4">
              <div className="relative h-[300px] w-full overflow-hidden rounded-3xl bg-gray-100  dark:bg-[#8A2BE2]/10">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        src="/sec1/notion.png"
                        alt="Notion"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        src="/sec1/google-meet.png"
                        alt="Google Meet"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        src="/sec1/whatsapp.png"
                        alt="Evernote"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        src="/sec1/teams.webp"
                        alt="Teams"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  Automate your workflow with our integrations
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Create a no-code customer service AI that scans your website,
                  understands your use case, and delivers seamless support.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Chat Demo */}
            <div className="space-y-4 rounded-3xl bg-gray-50 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="/chatbot-hero.jpg"
                    alt="James"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-medium dark:text-black">
                  James Kokolomel
                </span>
              </div>
              <div className="w-fit rounded-2xl bg-[#8A2BE2]/10 p-4">
                <p className="dark:text-black">I've forgotten my password</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                  <span className="text-xs text-white">R</span>
                </div>
                <span className="font-medium dark:text-black">Rotar Robot</span>
              </div>
              <div className="max-w-[90%]">
                <p className="text-gray-600">
                  No worries, we've all been in a melancholy situation like
                  that. To reset your password, go to the login page and click
                  on "Forgot Password?" Then, enter the email address and follow
                  it.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid gap-4">
              <div className="rounded-3xl bg-[#8A2BE2]/10 p-6">
                <h3 className="text-2xl font-semibold">
                  Always accessible with our live chat.
                </h3>
                <p className="mt-2 text-gray-600">
                  Enhance Communication with Real-Time Live Chat.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div className="h-10 flex-1 rounded-xl bg-white"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div className="h-10 flex-1 rounded-xl bg-white"></div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-black p-6 text-white">
                  <h3 className="text-xl font-semibold">
                    Boost conversations 96% with AI
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Our AI-powered chatbots and automation tools are here to
                    help.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <div className="rounded-full bg-[#8A2BE2] p-2">
                      <MessagesSquare className="h-5 w-5" />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8A2BE2]">
                      <Image
                        src="/sec1/whatsapp.png"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8A2BE2]">
                      <Image
                        src="/sec1/insta.webp"
                        alt="Instagram"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8A2BE2]">
                      <Image
                        src="/sec1/x-logo.png"
                        alt="Twitter"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-[#8A2BE2]/10 p-6">
                  <div className="relative mb-4 flex justify-center">
                    <div className="relative h-32 w-32">
                      <svg
                        className="h-full w-full -rotate-90 transform"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="10"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#8A2BE2"
                          strokeWidth="10"
                          strokeDasharray="282.7"
                          strokeDashoffset="247.4"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold">12,5%</div>
                          <div className="text-xs uppercase">
                            Conversation Employee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Gain valuable insights from your audience
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Statistics provide valuable insights into how customers
                    interact with Rotar AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
