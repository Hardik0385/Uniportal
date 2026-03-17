"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Filter, Eye, Plus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MyQueriesPage() {
  const allQueries = [
    { id: "#1023", subject: "Grade Discrepancy in Calculus", category: "Academic", date: "2024-02-28", priority: "High", status: "In Progress", statusVariant: "info" },
    { id: "#1022", subject: "Hostel Wi-Fi Issue", category: "Technical", date: "2024-02-27", priority: "Medium", status: "Open", statusVariant: "default" },
    { id: "#1019", subject: "Library Fine Waiver", category: "Finance", date: "2024-02-25", priority: "Low", status: "Resolved", statusVariant: "success" },
    { id: "#1015", subject: "ID Card Replacement", category: "Admission", date: "2024-02-20", priority: "Low", status: "Resolved", statusVariant: "success" },
    { id: "#1010", subject: "Exam Schedule Conflict", category: "Academic", date: "2024-02-15", priority: "High", status: "Resolved", statusVariant: "success" },
    { id: "#1005", subject: "Bus Pass Renewal", category: "Transport", date: "2024-02-10", priority: "Low", status: "Resolved", statusVariant: "success" },
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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">My Queries</h1>
          <p className="text-stone-500">Track the status of your submitted requests.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-200 text-stone-700 font-medium rounded-xl hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm">
            <Filter size={18} />
            Filter
          </button>
          <Link 
            href="/student/new-query" 
            className="flex items-center gap-2 px-4 py-2.5 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-500 transition-colors shadow-sm shadow-orange-600/20"
          >
            New Query
          </Link>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="!p-0 overflow-hidden shadow-sm border-stone-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-500 uppercase bg-stone-50/80 border-b border-stone-200">
                <tr>
                  <th className="px-6 py-5 font-semibold">Query ID</th>
                  <th className="px-6 py-5 font-semibold">Subject</th>
                  <th className="px-6 py-5 font-semibold">Category</th>
                  <th className="px-6 py-5 font-semibold">Date</th>
                  <th className="px-6 py-5 font-semibold">Priority</th>
                  <th className="px-6 py-5 font-semibold">Status</th>
                  <th className="px-6 py-5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {allQueries.map((query) => (
                  <tr key={query.id} className="hover:bg-stone-50/50 transition-colors bg-white">
                    <td className="px-6 py-4.5 text-orange-600 font-semibold">{query.id}</td>
                    <td className="px-6 py-4.5 font-medium text-stone-900">{query.subject}</td>
                    <td className="px-6 py-4.5 text-stone-600">{query.category}</td>
                    <td className="px-6 py-4.5 text-stone-500">{query.date}</td>
                    <td className={`px-6 py-4.5 ${getPriorityColor(query.priority)}`}>{query.priority}</td>
                    <td className="px-6 py-4.5">
                      {/* @ts-ignore */}
                      <Badge variant={query.statusVariant}>{query.status}</Badge>
                    </td>
                    <td className="px-6 py-4.5 text-right">
                      <button className="p-2 text-stone-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors inline-flex items-center justify-center">
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
