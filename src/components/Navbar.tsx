"use client";
import React from "react";
import { useAuth } from "@/store/AuthContext";
import { Bell, Search } from "lucide-react";

export default function Navbar({ title, subtitle }: { title: string; subtitle?: string }) {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-8 sticky top-0 z-10 w-full transition-all">
      <div className="flex-1 flex max-w-xl">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2 bg-[#FCFBF8] border border-stone-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-sans text-stone-800"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="relative text-stone-400 hover:text-stone-600 transition-colors">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse border border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 border-l border-stone-200 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-stone-800">{user?.name}</p>
            <p className="text-xs text-stone-500 font-medium">
              {user?.role === "student" ? "Computer Science, Year 3" : "System Administrator"}
            </p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold overflow-hidden border-2 border-stone-50 shadow-sm">
            {user?.name.charAt(0) || "U"}
          </div>
        </div>
      </div>
    </header>
  );
}
