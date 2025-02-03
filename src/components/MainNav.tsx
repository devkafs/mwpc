import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Calendar,
  KanbanSquare,
  WalletCards,
  Settings,
  Building2,
  Globe,
  MapPin
} from "lucide-react";

const MainNav = () => {
  const menuItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Master Data",
      icon: ClipboardList,
      submenu: [
        { title: "Agency", href: "/master/agency", icon: Building2 },
        { title: "Majikan", href: "/master/employer", icon: Users },
        { title: "Negara Penempatan", href: "/master/country", icon: Globe },
        { title: "Regional", href: "/master/regional", icon: MapPin },
      ],
    },
    {
      title: "CPMI Management",
      href: "/cpmi",
      icon: Users,
    },
    {
      title: "Absensi LPK",
      href: "/attendance",
      icon: Calendar,
    },
    {
      title: "Task Board",
      href: "/tasks",
      icon: KanbanSquare,
    },
    {
      title: "Finance",
      href: "/finance",
      icon: WalletCards,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <nav className="space-y-2 px-2">
      {menuItems.map((item, index) => (
        <div key={index} className="space-y-1">
          {item.submenu ? (
            <div className="space-y-1">
              <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-600">
                <item.icon className="h-4 w-4 mr-2" />
                {item.title}
              </div>
              <div className="pl-4 space-y-1">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.href}
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                  >
                    <subItem.icon className="h-4 w-4 mr-2" />
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              to={item.href}
              className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MainNav;