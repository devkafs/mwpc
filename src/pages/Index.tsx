import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">MWPC System Dashboard</h1>
      
      {/* CPMI Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <h3 className="font-semibold text-sm text-gray-500">Pendaftaran</h3>
          <p className="text-2xl font-bold">0</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold text-sm text-gray-500">Seleksi</h3>
          <p className="text-2xl font-bold">0</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold text-sm text-gray-500">Pemberkasan</h3>
          <p className="text-2xl font-bold">0</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold text-sm text-gray-500">Siap Berangkat</h3>
          <p className="text-2xl font-bold">0</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Financial Summary */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Ringkasan Keuangan</h2>
          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Pemasukan</span>
              <span className="font-semibold">Rp 0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Pengeluaran</span>
              <span className="font-semibold">Rp 0</span>
            </div>
          </div>
        </Card>

        {/* Attendance Summary */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Ringkasan Absensi LPK</h2>
          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total CPMI Aktif</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Kehadiran Hari Ini</span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;