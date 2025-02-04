import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  Users, 
  DollarSign, 
  Calendar,
  UserCheck,
  FileCheck,
  Plane,
  Building2
} from "lucide-react"
import { CPMIStats } from "@/components/dashboard/CPMIStats"
import { FinanceReport } from "@/components/dashboard/FinanceReport"
import { AttendanceReport } from "@/components/dashboard/AttendanceReport"

const Index = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard MWPC System</h1>
        <span className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('id-ID', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </span>
      </div>

      <CPMIStats />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FinanceReport />
        <AttendanceReport />
      </div>
    </div>
  )
}

export default Index