import { X, CheckCircle, Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { TeamMember } from "../../types"

interface TeamSummaryProps {
  members: TeamMember[]
}

export function TeamSummary({ members }: TeamSummaryProps) {
  const renderStatusIcon = (status: "absent" | "present", hasIssue?: boolean) => {
    if (status === "absent") {
      return <X className="w-4 h-4 text-red-500" />
    }
    return (
      <div className="flex items-center gap-1">
        <CheckCircle className="w-4 h-4 text-blue-500" />
        {hasIssue && <Download className="w-3 h-3 text-blue-500" />}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="bg-primary text-primary-foreground px-4 py-2 rounded-md inline-block">
          My Team Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>Behavioral</TableHead>
              <TableHead>Design</TableHead>
              <TableHead>Coding</TableHead>
              <TableHead>Total Participation</TableHead>
              <TableHead>25th Apr</TableHead>
              <TableHead>15th May</TableHead>
              <TableHead>23rd June</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">{member.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    {member.name}
                  </div>
                </TableCell>
                <TableCell>
                  {member.behavioral ? <Badge variant="secondary">Yes</Badge> : <Badge variant="outline">No</Badge>}
                </TableCell>
                <TableCell>
                  {member.design ? <Badge variant="secondary">Yes</Badge> : <Badge variant="outline">No</Badge>}
                </TableCell>
                <TableCell>
                  {member.coding ? <Badge variant="secondary">Yes</Badge> : <Badge variant="outline">No</Badge>}
                </TableCell>
                <TableCell>{member.totalParticipation}</TableCell>
                <TableCell>{member.apr25}</TableCell>
                <TableCell>{renderStatusIcon(member.may15.status, member.may15.hasIssue)}</TableCell>
                <TableCell>{renderStatusIcon(member.june23.status, member.june23.hasIssue)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
