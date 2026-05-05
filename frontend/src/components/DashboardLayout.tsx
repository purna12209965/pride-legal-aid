import { useState, ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main
        className={cn(
          "transition-all duration-300",
          sidebarCollapsed ? "ml-20" : "ml-64"
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
