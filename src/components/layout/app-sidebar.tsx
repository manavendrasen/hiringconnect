import { Settings, Users, User, BarChart3, RefreshCw, Zap } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { nextEvent } from "../../data/mockData"

const menuItems = [
  {
    title: "Leadership View",
    url: "/leadership",
    icon: BarChart3,
  },
  {
    title: "HR View",
    url: "/",
    icon: Users,
  },
  {
    title: "Employee View",
    url: "/employee",
    icon: User,
  },
  {
    title: "Admin View",
    url: "/admin",
    icon: Settings,
  },
  {
    title: "Data Refresh",
    url: "/data-refresh",
    icon: RefreshCw,
  },
  {
    title: "Workflows",
    url: "/workflows",
    icon: Zap,
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader className="p-4 h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">HC</span>
          </div>
          <span className="font-semibold text-lg">Hiring Connect</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    className={location.pathname === item.url ? "bg-primary text-primary-foreground" : ""}
                  >
                    <Link to={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Card className="bg-pink-50 border-pink-200">
          <CardContent className="p-3">
            <div className="text-xs font-medium text-pink-600 mb-1">Next Event</div>
            <div className="text-sm font-semibold text-pink-800 mb-1">{nextEvent.title}</div>
            <div className="text-xs text-pink-600 mb-2">{nextEvent.time}</div>
            <div className="text-xs text-pink-600 mb-1">📍 {nextEvent.room}</div>
            <div className="text-xs text-blue-600 mb-2">🔗 {nextEvent.link}</div>
            <div className="flex items-center gap-1">
              {nextEvent.attendees.map((avatar, index) => (
                <Avatar key={index} className="w-5 h-5">
                  <AvatarImage src={avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">U</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </CardContent>
        </Card>
      </SidebarFooter>

    </Sidebar>
  )
}
