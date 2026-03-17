"use client";
import React from "react";
import { useAuth } from "@/store/AuthContext";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Users, FileText, Clock, TrendingUp, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    { title: "Total Queries (System)", value: "1,248", icon: FileText, color: "text-orange-500", bg: "bg-orange-50" },
    { title: "Avg. Resolution Time", value: "18h", icon: Clock, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Pending Triage", value: "32", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Active Students", value: "4,902", icon: Users, color: "text-amber-500", bg: "bg-amber-50" },
  ];

  const recentQueries = [
    { id: "#1023", subject: "Grade Discrepancy in Calculus", student: "Alex Johnson", category: "Academic", priority: "High", status: "In Progress", statusVariant: "info" },
    { id: "#1024", subject: "Unable to pay fee semester 2", student: "Maria Garcia", category: "Finance", priority: "Urgent", status: "Open", statusVariant: "danger" },
    { id: "#1025", subject: "Wi-Fi not working in Block B", student: "Liam Smith", category: "Technical", priority: "Medium", status: "Open", statusVariant: "default" },
    { id: "#1026", subject: "Change of minor subject", student: "Emma Brown", category: "Academic", priority: "Low", status: "Resolved", statusVariant: "success" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">
          System Overview
        </h1>
        <p className="text-stone-500">
          Monitor system performance and unresolved escalations.
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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-stone-800">Queries Needing Attention</h2>
          <button className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">
            View All Open
          </button>
        </div>
        <Card className="!p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-500 uppercase bg-stone-50 border-b border-stone-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Query ID</th>
                  <th className="px-6 py-4 font-semibold">Subject</th>
                  <th className="px-6 py-4 font-semibold">Student</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
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
                    <td className="px-6 py-4 text-stone-500">{query.student}</td>
                    <td className="px-6 py-4 text-stone-500">{query.category}</td>
                    <td className={`px-6 py-4 ${
                      query.priority === "Urgent" ? "text-red-600 font-bold" : 
                      query.priority === "High" ? "text-red-500 font-medium" : 
                      query.priority === "Medium" ? "text-amber-600 font-medium" : "text-stone-500 font-medium"
                    }`}>{query.priority}</td>
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
