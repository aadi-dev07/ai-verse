
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Home, PenLine, MessageSquare, Users, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  {
    title: "Home",
    icon: Home,
    href: "/dashboard"
  },
  {
    title: "My Automations",
    icon: Users,
    href: "/dashboard/automations"
  },
  {
    title: "My Prompts",
    icon: MessageSquare,
    href: "/dashboard/prompts"
  },
  {
    title: "Custom Requests",
    icon: PenLine,
    href: "/dashboard/custom-requests"
  },
  {
    title: "New Prompt",
    icon: PenLine,
    href: "/new-prompt"
  },
  {
    title: "Profile",
    icon: Settings,
    href: "/dashboard/profile"
  }
];

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-tech-purple to-autoverse-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-heading font-bold">Autoverse</span>
        </Link>
      </div>
      
      <nav className="flex-1 pt-6 pb-4 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
                    isActive && "bg-autoverse-50 text-autoverse-600 font-medium"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-100">
        <Button 
          variant="outline" 
          className="w-full justify-start text-gray-600 hover:text-red-600" 
          onClick={() => logout()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
