"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { menuOptions } from "@/lib/constant"
import clsx from "clsx"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { ModeToggle } from "@/components/shared/mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Check if we're on mobile and set initial state
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Only auto-close on mobile
      if (mobile) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const renderNavContent = () => (
    <div className="flex items-center justify-center flex-col gap-8 w-full h-full">
      <Link className={clsx("flex font-bold", isOpen || isMobile ? "text-lg" : "text-sm")} href="/">
        {isOpen || isMobile ? "Rug Raider." : "Rug."}
      </Link>

      <div className="w-full">
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <div key={menuItem.name} className="mb-2">
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={menuItem.href}
                    className={clsx("group h-10 flex items-center rounded-lg p-2 cursor-pointer transition-colors", {
                      "dark:bg-[#2F006B] bg-[#EEE0FF]": pathName === menuItem.href,
                      "hover:bg-accent": pathName !== menuItem.href,
                      "justify-center": !isOpen && !isMobile,
                      "justify-start gap-3": isOpen || isMobile,
                    })}
                    onClick={() => isMobile && setIsSheetOpen(false)}
                  >
                    <div
                      className={clsx(
                        "flex items-center justify-center",
                        isOpen || isMobile ? "scale-100" : "scale-[1.2]",
                      )}
                    >
                      <menuItem.Component selected={pathName === menuItem.href} />
                    </div>
                    {(isOpen || isMobile) && <span className="truncate">{menuItem.name}</span>}
                  </Link>
                </TooltipTrigger>
                {!isOpen && !isMobile && (
                  <TooltipContent side="right" className="bg-black/10 backdrop-blur-xl">
                    <p>{menuItem.name}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </div>
          ))}
        </TooltipProvider>
      </div>

      <Separator className={isOpen || isMobile ? "w-full" : "w-[50px]"} />

      <div className="flex items-center justify-center flex-col gap-4 mt-auto w-full">
        <Separator className={isOpen || isMobile ? "w-full" : "w-[50px]"} />
        <ModeToggle />
      </div>
    </div>
  )

  // Mobile drawer
  if (isMobile) {
    return (
      <div className="relative">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-3 left-3 z-50 h-10 w-10 rounded-full border shadow-md bg-background"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[280px]">
            <nav className="h-full flex flex-col py-6 px-4">{renderNavContent()}</nav>
          </SheetContent>
        </Sheet>
      </div>
    )
  }

  // Desktop sidebar
  return (
    <div className="relative flex h-screen">
      <nav
        className={clsx(
          "dark:bg-black h-screen overflow-hidden transition-all duration-300 ease-in-out flex items-center flex-col gap-10 py-6 border-r dark:border-gray-800 relative",
          isOpen ? "w-[240px] px-4" : "w-[70px] px-2",
        )}
      >
        {renderNavContent()}
      </nav>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 -right-4 h-8 w-8 rounded-full border shadow-md bg-background z-10"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </Button>
    </div>
  )
}

export default MenuOptions
