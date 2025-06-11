"use client"

import { Bell, MessageSquare, Plus, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface HeaderProps {
  title: string
  onCreateClick?: () => void
  showCreateButton?: boolean
}

export function Header({ title, onCreateClick, showCreateButton = true }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 px-4">
      <SidebarTrigger className="-ml-1" />

      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        {showCreateButton && (
          <Button onClick={onCreateClick} className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Create
          </Button>
        )}

        <Button variant="ghost" size="icon">
          <Search className="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="icon">
          <Bell className="w-4 h-4" />
        </Button>

        <Button variant="ghost" size="icon">
          <MessageSquare className="w-4 h-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
