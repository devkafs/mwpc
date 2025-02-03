import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar as CalendarIcon } from "lucide-react"

export function CPMIInterviews() {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_300px]">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Interview Schedule</h2>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>CPMI Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>2024-03-21</TableCell>
              <TableCell>10:00 AM</TableCell>
              <TableCell>Scheduled</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Update</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="rounded-lg border p-4">
        <Calendar mode="single" className="rounded-md border" />
      </div>
    </div>
  )
}