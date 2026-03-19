"use client";
import React from "react";
import { useAuth } from "@/store/AuthContext";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Inbox, FileText, CheckCircle2, Clock } from "lucide-react";

export default function TeacherDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: "Assigned to Me", value: "12", icon: Inbox, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "In Progress", value: "5", icon: Clock, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Pending Response", value: "3", icon: FileText, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Resolved Today", value: "4", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">Welcome, {user?.name}</h1>
        <p className="text-stone-500">Here's an overview of queries assigned to your department.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="!p-6 flex items-center gap-4">
              <div className={`p-4 rounded-2xl ${stat.bg}`}>
                <stat.icon className={stat.color} size={28} />
              </div>
              <div>
                <p className="text-4xl font-black text-stone-800 tracking-tight">{stat.value}</p>
                <p className="text-sm font-semibold text-stone-500 mt-1">{stat.label}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
        <Card className="!p-0 overflow-hidden border-stone-200">
          <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white">
            <h2 className="text-lg font-bold text-stone-800">Recent Assigned Queries</h2>
          </div>
          <div className="p-12 text-center text-stone-500">
            <Inbox size={48} className="mx-auto text-stone-300 mb-4" />
            <p className="font-medium text-stone-600">You have no new queries right now.</p>
            <p className="text-sm mt-1">When students submit queries in your category, they will appear here.</p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
