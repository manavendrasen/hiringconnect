import { Header } from "@/components/layout/header"
import { CertificationSummary } from "@/components/leadership/certification-summary"
import { TeamSummary } from "@/components/leadership/team-summary"
import { certificationData, teamMembers } from "@/data/mockData"

export function LeadershipView() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Hiring Events" showCreateButton={false} />

      <main className="flex-1 p-6 space-y-6">
        <CertificationSummary data={certificationData} />
        <TeamSummary members={teamMembers} />
      </main>
    </div>
  )
}
