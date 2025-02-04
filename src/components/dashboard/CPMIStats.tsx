import { Card } from "@/components/ui/card"
import { Users, UserCheck, FileCheck, Plane } from "lucide-react"

export function CPMIStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <Users className="h-8 w-8 text-blue-500" />
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Pendaftaran</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <UserCheck className="h-8 w-8 text-green-500" />
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Seleksi</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <FileCheck className="h-8 w-8 text-yellow-500" />
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Pemberkasan</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <Plane className="h-8 w-8 text-purple-500" />
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Siap Berangkat</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </Card>
    </div>
  )
}