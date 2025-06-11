import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Header } from "@/components/layout/header"
import { WorkflowCard } from "@/components/workflows/workflow-card"
import { Button } from "@/components/ui/button"
import { workflowTemplates } from "../data/mockData"

export function Workflows() {
  const [activeTab, setActiveTab] = useState<"my-workflow" | "templates">("templates")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    before: true,
    after: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const beforeEventWorkflows = workflowTemplates.filter((w) => w.category === "before")
  const afterEventWorkflows = workflowTemplates.filter((w) => w.category === "after")

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Workflows" showCreateButton={true} />

      <main className="flex-1 p-6">
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex items-center gap-4">
            <Button
              variant={activeTab === "my-workflow" ? "default" : "ghost"}
              onClick={() => setActiveTab("my-workflow")}
            >
              My workflow
            </Button>
            <Button
              variant={activeTab === "templates" ? "default" : "ghost"}
              onClick={() => setActiveTab("templates")}
              className={activeTab === "templates" ? "bg-primary text-primary-foreground" : ""}
            >
              Templates
            </Button>
            <div className="ml-auto">
              <Button variant="outline" size="sm">
                Filter
              </Button>
            </div>
          </div>

          {/* Before Event/Meeting Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold">Before Event/Meeting</h2>
              <Button variant="ghost" size="icon" onClick={() => toggleSection("before")} className="h-6 w-6">
                {expandedSections["before"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>

            {expandedSections["before"] && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {beforeEventWorkflows.map((workflow) => (
                  <WorkflowCard key={workflow.id} workflow={workflow} />
                ))}
              </div>
            )}
          </div>

          {/* After Event/Meeting Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold">After Event/Meeting</h2>
              <Button variant="ghost" size="icon" onClick={() => toggleSection("after")} className="h-6 w-6">
                {expandedSections["after"] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>

            {expandedSections["after"] && (
              <div className="grid gap-4 md:grid-cols-2">
                {afterEventWorkflows.map((workflow) => (
                  <WorkflowCard key={workflow.id} workflow={workflow} />
                ))}
              </div>
            )}
          </div>

          {/* Show more button */}
          <div className="flex justify-start">
            <Button variant="outline">Show more</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
