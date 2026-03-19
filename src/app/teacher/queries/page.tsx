"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { MessageSquare, MoreVertical, Search, Filter } from "lucide-react";
import { decryptData } from "@/lib/encryption";

export default function TeacherQueriesPage() {
  const [queries] = useState([
    { id: "cccccccc-cccc-cccc-cccc-cccccccccccc", student: "Rohan Gupta", title: "Hostel Fee Payment Issue", status: "PENDING", date: "Oct 24, 2023", priority: "High" },
    { id: "dddddddd-dddd-dddd-dddd-dddddddddddd", student: "Ananya Desai", title: "Library Due Fine Discrepancy", status: "IN_PROGRESS", date: "Oct 23, 2023", priority: "Medium" },
    { id: "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee", student: "Karan Singh", title: "Scholarship Form Inquiry", status: "RESOLVED", date: "Oct 21, 2023", priority: "Low" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">Assigned Queries</h1>
          <p className="text-stone-500">Manage and respond to student issues in your category.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
            <input 
              type="text" 
              placeholder="Search queries..." 
              className="pl-9 pr-4 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-full md:w-64"
            />
          </div>
          <button className="p-2 border border-stone-200 text-stone-600 rounded-xl hover:bg-stone-50 transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="!p-0 overflow-hidden border-stone-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-500 uppercase bg-stone-50/80 border-b border-stone-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Query ID</th>
                  <th className="px-6 py-4 font-semibold">Student</th>
                  <th className="px-6 py-4 font-semibold">Issue Title</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Priority</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                {queries.map((q) => (
                  <tr key={q.id} className="hover:bg-stone-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono text-stone-500" title={q.id}>{q.id.slice(0, 8)}...</td>
                    <td className="px-6 py-4 font-medium text-stone-900">{decryptData(q.student)}</td>
                    <td className="px-6 py-4 text-stone-700">{decryptData(q.title)}</td>
                    <td className="px-6 py-4 text-stone-500">{q.date}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                        q.priority === 'High' ? 'bg-red-50 text-red-600' : 
                        q.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-stone-100 text-stone-600'
                      }`}>
                        {q.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge dot={true} variant={
                        q.status === "RESOLVED" ? "success" : 
                        q.status === "IN_PROGRESS" ? "warning" : "default"
                      }>
                        {q.status.replace("_", " ")}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Respond">
                          <MessageSquare size={16} />
                        </button>
                        <button className="p-1.5 text-stone-400 hover:text-stone-600 hover:bg-stone-50 rounded-lg transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {queries.length === 0 && (
            <div className="p-12 text-center text-stone-500">
              <p>No queries found matching your criteria.</p>
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
