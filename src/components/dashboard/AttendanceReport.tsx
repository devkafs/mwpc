import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "lucide-react"

export function AttendanceReport() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold">Ringkasan Absensi LPK</CardTitle>
        <Calendar className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Separator className="my-4" />
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total CPMI Aktif</span>
            <span className="font-semibold">0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Kehadiran Hari Ini</span>
            <span className="font-semibold">0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Ketidakhadiran Bulan Ini</span>
            <span className="font-semibold">0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}