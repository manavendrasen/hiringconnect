import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { WorkflowTemplate } from "../../types"

interface WorkflowCardProps {
  workflow: WorkflowTemplate
}

const colorClasses = {
  cohort: "border-l-cohort bg-cohort/5",
  bau: "border-l-bau bg-bau/5",
  vp: "border-l-vp bg-vp/5",
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  const colorClass = colorClasses[workflow.color as keyof typeof colorClasses] || colorClasses.cohort

  return (
    <Card className={`${colorClass} border-l-4 hover:shadow-md transition-shadow`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{workflow.icon}</div>
          <div className="flex-1 space-y-3">
            <h3 className="font-semibold text-lg">{workflow.title}</h3>
            <p className="text-sm text-muted-foreground">{workflow.description}</p>
            <Button
              variant="outline"
              size="sm"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Use workflow
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
