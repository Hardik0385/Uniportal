"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Edit2, Trash2 } from "lucide-react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: "CAT-001", name: "Academic Affairs", status: "ACTIVE" },
    { id: "CAT-002", name: "Admission", status: "ACTIVE" },
    { id: "CAT-003", name: "Finance & Fees", status: "ACTIVE" },
    { id: "CAT-004", name: "Technical Support", status: "INACTIVE" },
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">Categories</h1>
        <p className="text-stone-500">Manage support query categories.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="!p-0 overflow-hidden border-stone-200">
          <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white">
            <h2 className="text-lg font-bold text-stone-800">Categories</h2>
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
              Add Category
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-500 uppercase bg-stone-50/80 border-b border-stone-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">ID</th>
                  <th className="px-6 py-4 font-semibold">Name</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                {categories.map((cat, idx) => (
                  <tr key={cat.id} className="hover:bg-stone-50/50 transition-colors">
                    <td className="px-6 py-4 text-stone-500">{cat.id}</td>
                    <td className="px-6 py-4 font-medium text-stone-900">{cat.name}</td>
                    <td className="px-6 py-4">
                      <Badge dot={false} variant={cat.status === "ACTIVE" ? "success" : "default"} className={cat.status === "INACTIVE" ? "text-stone-400 bg-stone-100 ring-stone-200" : ""}>
                        {cat.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3 text-stone-400">
                        <button className="hover:text-orange-600 transition-colors"><Edit2 size={16} /></button>
                        <button className="hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                      </div>
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
