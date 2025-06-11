export interface HiringEvent {
  id: string
  title: string
  date: string
  startTime: string
  endTime: string
  duration: number
  day: string
  panelists: number
  technology: string[]
  tags: string[]
  type: "cohort" | "bau" | "vp"
  location?: string
  onlineLink?: string
  description?: string
  color?: string
}

export interface CertificationData {
  type: string
  target: string
  feb: string
  mar: string
  apr: string
}

export interface TeamMember {
  id: string
  name: string
  avatar: string
  behavioral: boolean
  design: boolean
  coding: boolean
  totalParticipation: number
  apr25: number
  may15: {
    status: "absent" | "present"
    hasIssue?: boolean
  }
  june23: {
    status: "absent" | "present"
    hasIssue?: boolean
  }
}

export interface WorkflowTemplate {
  id: string
  title: string
  description: string
  category: "before" | "after"
  icon: string
  color: string
}

export interface NavigationItem {
  id: string
  label: string
  icon: string
  path: string
  isActive?: boolean
}

export interface NextEvent {
  title: string
  time: string
  room: string
  link: string
  attendees: string[]
}
