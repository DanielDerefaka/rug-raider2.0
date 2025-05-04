"use client"
import { useState, useEffect, useRef } from "react"
import { Bell, Book, Check, X, CheckCircle, XCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useOnClickOutside } from "@/lib/use-onclick"
import { WalletConnectButton } from "@/components/Wallet/WalletConnectButton"

type Props = {
  workspaceId: string // Pass workspaceId as a prop
}

type Notification = {
  id: string
  message: string
  createdAt: string
  read?: boolean
  type?: "INVITATION" | "MESSAGE" | "BOOKING" | "CAMPAIGN" // Add a type to distinguish notification types
  invitationId?: string // Add invitationId for invitation notifications
}

const InfoBar = ({ workspaceId }: Props) => {
  // Dummy notifications data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      message: "John Doe invited you to collaborate on Project X",
      createdAt: "2024-05-03T14:30:00Z",
      read: false,
      type: "INVITATION",
      invitationId: "inv_123"
    },
    {
      id: "2",
      message: "New message from Sarah: 'Can we discuss the design tomorrow?'",
      createdAt: "2024-05-03T12:15:00Z",
      read: false,
      type: "MESSAGE"
    },
    {
      id: "3",
      message: "Meeting scheduled: Project Review on May 6th at 2 PM",
      createdAt: "2024-05-02T09:45:00Z",
      read: true,
      type: "BOOKING"
    },
    {
      id: "4",
      message: "Your email campaign 'Summer Sale' has been sent to 1,245 subscribers",
      createdAt: "2024-05-01T16:20:00Z",
      read: true,
      type: "CAMPAIGN"
    },
    {
      id: "5",
      message: "Alex Wang invited you to join Workspace 'Design Team'",
      createdAt: "2024-04-30T11:05:00Z",
      read: false,
      type: "INVITATION",
      invitationId: "inv_456"
    }
  ]);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Calculate unread count
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Toggle notification menu
  const toggleNotificationMenu = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  // Handle invitation acceptance
  const handleAcceptInvitation = (invitationId: string) => {
    console.log(`Accepted invitation: ${invitationId}`);
    // Mark this notification as read
    setNotifications(notifications.map(notification => 
      notification.invitationId === invitationId 
        ? { ...notification, read: true } 
        : notification
    ));
  };

  // Handle invitation rejection
  const handleRejectInvitation = (invitationId: string) => {
    console.log(`Rejected invitation: ${invitationId}`);
    // Mark this notification as read
    setNotifications(notifications.map(notification => 
      notification.invitationId === invitationId 
        ? { ...notification, read: true } 
        : notification
    ));
  };

  // Close notification menu when clicking outside
  useOnClickOutside(notificationRef, () => setIsNotificationOpen(false));

  return (
    <div className="flex items-center justify-end gap-6 p-4">
      {/* Credits Section */}
      {/* <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Credits</span>
        <Badge variant="outline" className="bg-primary/10">250</Badge>
      </div> */}

      {/* Notification Section */}
      <div className="relative">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                onClick={toggleNotificationMenu}
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </Badge>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Notification Menu */}
        {isNotificationOpen && (
          <div
            ref={notificationRef}
            className="absolute z-40 right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex items-center justify-between p-3 bg-muted/50">
              <h3 className="font-medium">Notifications</h3>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={markAllAsRead}>
                  <Check className="h-3.5 w-3.5 mr-1" />
                  Mark all as read
                </Button>
              )}
            </div>

            <Separator />

            <ScrollArea className="max-h-[350px]">
              {notifications.length > 0 ? (
                <div className="py-1">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 hover:bg-muted/50 transition-colors ${!notification.read ? "bg-muted/20" : ""}`}
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${!notification.read ? "bg-primary" : "bg-transparent"}`}
                        />
                        <div className="flex-1">
                          <p className="text-sm">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date(notification.createdAt).toLocaleString(undefined, {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                          {notification.type === "INVITATION" && (
                            <div className="flex gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 text-xs"
                                onClick={() => handleAcceptInvitation(notification.invitationId!)}
                              >
                                <CheckCircle className="h-3.5 w-3.5 mr-1" />
                                Accept
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 text-xs"
                                onClick={() => handleRejectInvitation(notification.invitationId!)}
                              >
                                <XCircle className="h-3.5 w-3.5 mr-1" />
                                Reject
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                  <Bell className="h-10 w-10 text-muted-foreground mb-2 opacity-40" />
                  <p className="text-sm font-medium">No new notifications</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    We'll notify you when something important happens
                  </p>
                </div>
              )}
            </ScrollArea>

            <Separator />

            <div className="p-2">
              <Button variant="ghost" size="sm" className="w-full text-xs justify-center">
                View all notifications
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Guide Section */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="p-2">
            <WalletConnectButton
        variant="custom"
        className="ml-auto"
      />
            </div>
          </TooltipTrigger>
          <TooltipContent>
          {/* <WalletConnectButton
        variant="custom"
        className="ml-auto"
      /> */}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    
    </div>
  )
}

export default InfoBar
