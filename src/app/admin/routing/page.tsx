"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const Toggle = ({ checked, onChange }: { checked: boolean, onChange: () => void }) => (
  <div 
    onClick={onChange}
    className={`relative w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${checked ? 'bg-emerald-500' : 'bg-stone-300'}`}
  >
    <motion.div 
      layout
      className="bg-white w-4 h-4 rounded-full shadow-md"
      animate={{ x: checked ? 20 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  </div>
);

export default function RoutingRulesPage() {
  const [routingRules, setRoutingRules] = useState([
    { category: "Academic Affairs", department: "Dean's Office", autoAssign: true },
    { category: "Admissions", department: "Registrar Office", autoAssign: true },
    { category: "Finance & Fees", department: "Accounts Department", autoAssign: false },
    { category: "IT & Technical Support", department: "IT Helpdesk", autoAssign: true },
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">Routing Rules</h1>
        <p className="text-stone-500">Configure routing rules for auto-assignment.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="!p-0 overflow-hidden border-stone-200">
          <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white">
            <h2 className="text-lg font-bold text-stone-800">Routing Rules</h2>
            <button className="px-4 py-2 bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 text-sm font-medium rounded-lg transition-colors shadow-sm">
              Configure Rules
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-500 uppercase bg-stone-50/80 border-b border-stone-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Assigned Department</th>
                  <th className="px-6 py-4 font-semibold text-center">Auto-Assign</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                {routingRules.map((rule, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-stone-900">{rule.category}</td>
                    <td className="px-6 py-4 text-stone-500">{rule.department}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Toggle 
                          checked={rule.autoAssign} 
                          onChange={() => {
                            const newRules = routingRules.map((r, i) => 
                              i === idx ? { ...r, autoAssign: !r.autoAssign } : r
                            );
                            setRoutingRules(newRules);
                          }} 
                        />
                        <span className={`text-xs font-semibold ${rule.autoAssign ? 'text-emerald-600' : 'text-stone-400'}`}>
                          {rule.autoAssign ? 'On' : 'Off'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors">
                        Edit
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
