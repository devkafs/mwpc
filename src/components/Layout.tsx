import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-sidebar">
        <div className="p-6">
          <h1 className="text-xl font-bold">MWPC System</h1>
        </div>
        <MainNav />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;