"use client"

import { useState } from "react"
import { MapPin, Link, Calendar, Clock, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface CreateEventModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const eventColors = [
  { name: "Blue", value: "#6366f1", class: "bg-blue-500" },
  { name: "Pink", value: "#ec4899", class: "bg-pink-500" },
  { name: "Teal", value: "#06b6d4", class: "bg-teal-500" },
  { name: "Purple", value: "#8b5cf6", class: "bg-purple-500" },
  { name: "Orange", value: "#f97316", class: "bg-orange-500" },
]

export function CreateEventModal({ open, onOpenChange }: CreateEventModalProps) {
  const [selectedColor, setSelectedColor] = useState(eventColors[0])
  const [formData, setFormData] = useState({
    eventName: "VP Hiring Drive - 21st August",
    location: "Zoom: 999 999 9999",
    onlineLink: "go/cohorthiring",
    date: "TUE, JUL 18",
    startTime: "01:00 PM",
    endTime: "05:00 PM",
    technology: "Java, Full Stack, AWS",
    edPanelists: "6",
    vpPanelists: "10",
    associatePanelists: "12",
    description: "VP Hiring Drive for renegs",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData, selectedColor)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm">1</div>
            Event Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="eventName">Event Name</Label>
            <Input
              id="eventName"
              value={formData.eventName}
              onChange={(e) => handleInputChange("eventName", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="onlineLink">Online Event Link</Label>
              <div className="relative">
                <Input
                  id="onlineLink"
                  value={formData.onlineLink}
                  onChange={(e) => handleInputChange("onlineLink", e.target.value)}
                />
                <Button variant="ghost" size="icon" className="absolute right-1 top-1 h-8 w-8">
                  <Link className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <Badge variant="outline">{formData.date}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <Badge variant="outline">{formData.startTime}</Badge>
              <ArrowRight className="w-4 h-4" />
              <Badge variant="outline">{formData.endTime}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="technology">Technology</Label>
              <Input
                id="technology"
                value={formData.technology}
                onChange={(e) => handleInputChange("technology", e.target.value)}
              />
            </div>
            <div>
              <Label>Event Color</Label>
              <div className="flex gap-2 mt-1">
                {eventColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full ${color.class} ${
                      selectedColor.value === color.value ? "ring-2 ring-offset-2 ring-primary" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="edPanelists">ED Panelists</Label>
              <Input
                id="edPanelists"
                value={formData.edPanelists}
                onChange={(e) => handleInputChange("edPanelists", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="vpPanelists">VP Panelists</Label>
              <Input
                id="vpPanelists"
                value={formData.vpPanelists}
                onChange={(e) => handleInputChange("vpPanelists", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="associatePanelists">Associate Panelists</Label>
              <Input
                id="associatePanelists"
                value={formData.associatePanelists}
                onChange={(e) => handleInputChange("associatePanelists", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
              Next →
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
