import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Bot, 
  BookOpen, 
  Scale, 
  Users, 
  FileText, 
  MessageCircle,
  Home,
  ChevronLeft,
  ChevronRight,
  Heart
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: any;
  label: string;
  path: string;
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: Bot,
    label: "AI Assistant",
    path: "/chat",
  },
  {
    icon: Scale,
    label: "Your Rights",
    path: "/dashboard/rights",
  },
  {
    icon: FileText,
    label: "Legal Cases",
    path: "/dashboard/cases",
  },
  {
    icon: BookOpen,
    label: "Terminology",
    path: "/dashboard/terminology",
  },
  {
    icon: Users,
    label: "Resources",
    path: "/resources",
  },
  {
    icon: MessageCircle,
    label: "Community",
    path: "/dashboard/community",
  },
];

interface DashboardSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const DashboardSidebar = ({ collapsed = false, onToggle }: DashboardSidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 z-40",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Scale className="w-6 h-6 text-pride-purple" />
              <Heart className="w-2 h-2 text-pride-pink absolute -bottom-0.5 -right-0.5" />
            </div>
            <span className="font-display text-lg font-bold gradient-text">
              PrideJustice
            </span>
          </Link>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {/* Home Link */}
        <Link
          to="/"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
            "hover:bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          <Home className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Home</span>}
        </Link>

        <div className="my-4 border-t border-border" />

        {/* Main Navigation */}
        {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors relative",
                isActive
                  ? "bg-pride-purple/10 text-pride-purple"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-pride-purple rounded-r" />
              )}
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <div className="flex items-center justify-between flex-1">
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-pride-purple/20 text-pride-purple">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="p-3 rounded-lg bg-gradient-to-br from-pride-purple/10 to-pride-pink/10 border border-pride-purple/20">
            <p className="text-xs text-muted-foreground mb-2">
              Need help?
            </p>
            <Link
              to="/resources"
              className="text-xs font-medium text-pride-purple hover:text-pride-pink transition-colors"
            >
              View Support Resources →
            </Link>
          </div>
        </div>
      )}
    </aside>
  );
};

export default DashboardSidebar;
