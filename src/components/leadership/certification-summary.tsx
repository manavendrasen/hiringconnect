import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { CertificationData } from "../../types"

interface CertificationSummaryProps {
  data: CertificationData[]
}

export function CertificationSummary({ data }: CertificationSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="bg-primary text-primary-foreground px-4 py-2 rounded-md inline-block">
          Cohort Certification Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Certification Type</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>10th Feb</TableHead>
              <TableHead>10th Mar</TableHead>
              <TableHead>10th Apr</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.type}</TableCell>
                <TableCell>{row.target}</TableCell>
                <TableCell>{row.feb}</TableCell>
                <TableCell>{row.mar}</TableCell>
                <TableCell className="text-primary font-medium">{row.apr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
