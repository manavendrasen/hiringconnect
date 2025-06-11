"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { EventsCalendar } from "@/components/events/events-calendar"
import { CreateEventModal } from "@/components/modals/create-event-modal"
import { hiringEvents } from "../data/mockData"

export function HRView() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-sidebar">
      <Header title="Hiring Events" onCreateClick={() => setIsCreateModalOpen(true)} showCreateButton={true} />

      <main className="flex-1 p-6 mr-4 ml-4 mb-4 pr-6 h-screen space-y-6 rounded-lg border border-gray-200 bg-background">
        <EventsCalendar events={hiringEvents} />
      </main>

      <CreateEventModal open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen} />
    </div>
  )
}
