import { Clock, Users, Tag, Copy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { HiringEvent } from "../../types"

interface EventCardProps {
  event: HiringEvent
}

const eventTypeColors = {
  cohort: {
    border: "border-l-cohort",
    bg: "bg-cohort/10",
    text: "text-cohort-dark",
  },
  bau: {
    border: "border-l-bau",
    bg: "bg-bau/10",
    text: "text-bau-dark",
  },
  vp: {
    border: "border-l-vp",
    bg: "bg-vp/10",
    text: "text-vp-dark",
  },
}

export function EventCard({ event }: EventCardProps) {
  const colors = eventTypeColors[event.type]

  return (
    <Card className={`${colors.border} border-l-4 hover:shadow-md transition-shadow`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg">{event.title}</h3>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Copy className="h-3 w-3" />
          </Button>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>
              {event.startTime} - {event.endTime}
            </span>
            <span>•</span>
            <span>{event.duration} Mins</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{event.panelists} Panelists</span>
          </div>

          <div className="text-sm text-muted-foreground">{event.day}</div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Technology:</span>
            {event.technology.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Tags:</span>
          <span className="text-sm">{event.tags.join(", ")}</span>
          <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto">
            <Copy className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
