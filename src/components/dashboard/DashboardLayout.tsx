
import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <main className="pb-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
