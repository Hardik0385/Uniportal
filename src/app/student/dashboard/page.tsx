"use client";
import React from "react";
import { useAuth } from "@/store/AuthContext";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Clock, CheckCircle2, AlertCircle, FileText, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentDashboard() {
  const { user } = useAuth();

  const stats = [
    { title: "In Progress", value: "2", icon: Clock, color: "text-orange-500", bg: "bg-orange-50" },
    { title: "Resolved", value: "15", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Open", value: "1", icon: AlertCircle, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Total Queries", value: "18", icon: FileText, color: "text-amber-500", bg: "bg-amber-50" },
  ];

  const recentQueries = [
    { id: "#1023", subject: "Grade Discrepancy in Calculus", category: "Academic", date: "2024-02-28", priority: "High", status: "In Progress", statusVariant: "info" },
    { id: "#1022", subject: "Hostel Wi-Fi Issue", category: "Technical", date: "2024-02-27", priority: "Medium", status: "Open", statusVariant: "default" },
    { id: "#1019", subject: "Library Fine Waiver", category: "Finance", date: "2024-02-25", priority: "Low", status: "Resolved", statusVariant: "success" },
    { id: "#1015", subject: "ID Card Replacement", category: "Admission", date: "2024-02-20", priority: "Low", status: "Resolved", statusVariant: "success" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-500 font-medium";
      case "Medium": return "text-amber-600 font-medium";
      case "Low": return "text-stone-500 font-medium";
      default: return "text-stone-500";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">
          Welcome back, {user?.name.split(' ')[0]}!
        </h1>
        <p className="text-stone-500">
          Here's what's happening with your queries today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="flex flex-col h-full hover:-transtone-y-1 transition-transform duration-300">
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon size={24} />
                </div>
                <h3 className="text-stone-500 font-medium text-sm">{stat.title}</h3>
              </div>
              <div className="mt-auto">
                <span className="text-3xl font-bold text-stone-900">{stat.value}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold text-stone-800 mb-4">Recent Queries</h2>
        <Card className="!p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-500 uppercase bg-stone-50 border-b border-stone-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Query ID</th>
                  <th className="px-6 py-4 font-semibold">Subject</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Priority</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentQueries.map((query, idx) => (
                  <tr key={query.id} className="border-b border-stone-50 hover:bg-stone-50/50 transition-colors">
                    <td className="px-6 py-4 text-orange-600 font-medium">{query.id}</td>
                    <td className="px-6 py-4 font-medium text-stone-900">{query.subject}</td>
                    <td className="px-6 py-4 text-stone-500">{query.category}</td>
                    <td className="px-6 py-4 text-stone-500">{query.date}</td>
                    <td className={`px-6 py-4 ${getPriorityColor(query.priority)}`}>{query.priority}</td>
                    <td className="px-6 py-4">
                      {/* @ts-ignore */}
                      <Badge variant={query.statusVariant}>{query.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-stone-400 hover:text-orange-600 transition-colors">
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
