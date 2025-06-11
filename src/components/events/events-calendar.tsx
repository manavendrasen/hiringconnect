"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EventCard } from "./event-card"
import type { HiringEvent } from "../../types"

interface EventsCalendarProps {
  events: HiringEvent[]
}

export function EventsCalendar({ events }: EventsCalendarProps) {
  const [currentYear] = useState(2025)
  const [viewMode, setViewMode] = useState<"week" | "month">("month")
  const [expandedMonths, setExpandedMonths] = useState<Record<string, boolean>>({
    JULY: true,
    AUG: true,
    SEP: false,
  })

  // Group events by month
  const eventsByMonth = events.reduce(
    (acc, event) => {
      const date = new Date(event.date)
      const monthKey = date.toLocaleString("default", { month: "short" }).toUpperCase()
      if (!acc[monthKey]) {
        acc[monthKey] = []
      }
      acc[monthKey].push(event)
      return acc
    },
    {} as Record<string, HiringEvent[]>,
  )

  const toggleMonth = (month: string) => {
    setExpandedMonths((prev) => ({
      ...prev,
      [month]: !prev[month],
    }))
  }

  const getEventCount = (month: string) => {
    return eventsByMonth[month]?.length || 0
  }

  return (
    <>
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{currentYear}</span>
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <Badge variant="outline" className="text-primary">
            This Month
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button variant={viewMode === "week" ? "default" : "outline"} onClick={() => setViewMode("week")} size="sm">
            Week
          </Button>
          <Button
            variant={viewMode === "month" ? "default" : "outline"}
            onClick={() => setViewMode("month")}
            size="sm"
            className="bg-primary text-primary-foreground"
          >
            Month
          </Button>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>
      </div>

      {/* Events by Month */}
      <div className="space-y-6">
        {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
          <div key={month} className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold">{month}</h2>
              <Badge variant="secondary">
                {getEventCount(month)} Event{getEventCount(month) !== 1 ? "s" : ""}
              </Badge>
              <Button variant="ghost" size="icon" onClick={() => toggleMonth(month)} className="h-6 w-6">
                {expandedMonths[month] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>

            {expandedMonths[month] && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {monthEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
