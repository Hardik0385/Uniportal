"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/store/AuthContext";
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  Tags, 
  Route, 
  LogOut,
  Layers,
  Inbox
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  const studentLinks = [
    { href: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/student/queries", label: "My Queries", icon: FileText },
    { href: "/student/new-query", label: "New Query", icon: PlusCircle },
  ];

  const adminLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/categories", label: "Categories", icon: Tags },
    { href: "/admin/routing", label: "Routing Rules", icon: Route },
  ];

  const teacherLinks = [
    { href: "/teacher/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/teacher/queries", label: "Assigned Queries", icon: Inbox },
  ];

  const links = user.role === "admin" ? adminLinks : user.role === "teacher" ? teacherLinks : studentLinks;

  return (
    <div className="w-64 bg-white border-r border-stone-200 h-screen flex flex-col fixed inset-y-0 left-0 z-20 shadow-sm font-sans">
      <div className="p-6 flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg text-white shadow-sm shadow-orange-500/20">
          <Layers size={24} strokeWidth={2} />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-stone-900 to-stone-600">
          UniPortal
        </span>
      </div>

      <div className="px-6 py-4">
        <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
          Menu
        </h3>
        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-200",
                  isActive 
                    ? "bg-orange-50 text-orange-700 font-semibold" 
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                )}
              >
                <link.icon size={20} className={isActive ? "text-orange-600" : "text-stone-400"} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <button 
          onClick={logout}
          className="flex items-center gap-3 text-stone-500 hover:text-red-500 transition-colors w-full px-3 py-2 font-medium bg-stone-50 hover:bg-red-50 rounded-xl"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
}
