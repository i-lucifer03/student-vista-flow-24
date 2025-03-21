
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  FileText, 
  Globe, 
  Home, 
  Settings, 
  Users
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [visaTypesOpen, setVisaTypesOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Applications", icon: FileText, path: "/applications" },
    { name: "Calendar", icon: Calendar, path: "/calendar" },
    { name: "Countries", icon: Globe, path: "/countries" },
    { name: "Clients", icon: Users, path: "/clients" },
    { name: "Reports", icon: BarChart3, path: "/reports" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  const visaTypes = [
    { name: "Education", path: "/applications/education" },
    { name: "Work", path: "/applications/work" },
    { name: "Visitor", path: "/applications/visitor" },
  ];

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 md:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 pt-16 h-full bg-white z-30 w-64 border-r border-gray-200 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="mb-6">
            <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider mb-3 pl-4">
              Main Menu
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `sidebar-link ${isActive ? "active" : ""}`
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <button
              onClick={() => setVisaTypesOpen(!visaTypesOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-700 rounded-md hover:bg-ocean-light/10 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5" />
                <span>Visa Types</span>
              </div>
              <ChevronRight
                className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                  visaTypesOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {visaTypesOpen && (
              <div className="ml-4 pl-4 border-l border-gray-200 mt-1">
                {visaTypes.map((visa) => (
                  <NavLink
                    key={visa.name}
                    to={visa.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 text-sm ${
                        isActive
                          ? "text-ocean font-medium"
                          : "text-gray-600 hover:text-ocean"
                      }`
                    }
                  >
                    {visa.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto mb-6">
            <div className="bg-ocean/5 rounded-lg p-4">
              <p className="text-sm font-medium text-ocean mb-2">Need help?</p>
              <p className="text-xs text-gray-600 mb-3">
                Access documentation and support
              </p>
              <button className="text-sm text-ocean font-medium hover:underline">
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
