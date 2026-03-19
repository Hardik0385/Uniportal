"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Trash2, UserPlus, X } from "lucide-react";
import { Role } from "@/store/AuthContext";

interface MockUser {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export default function UserManagementPage() {
  const [users, setUsers] = useState<MockUser[]>([
    { id: "a1", name: "Michael Chen", email: "admin@university.edu", role: "admin" },
    { id: "t1", name: "Prof. Sarah Miller", email: "sarah.m@university.edu", role: "teacher" },
    { id: "s1", name: "Alex Johnson", email: "alex.j@university.edu", role: "student" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState<Role>("student");

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName || !newUserEmail) return;

    const newUser: MockUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: newUserName,
      email: newUserEmail,
      role: newUserRole
    };

    setUsers([...users, newUser]);
    setNewUserName("");
    setNewUserEmail("");
    setNewUserRole("student");
    setShowAddForm(false);
  };

  const handleDeleteUser = (id: string, role: Role) => {
    if (role === "admin") return;
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">User Management</h1>
          <p className="text-stone-500">Create, view, and remove system users.</p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md active:scale-95"
        >
          <UserPlus size={18} /> Add User
        </button>
      </div>

      <AnimatePresence>
        {showAddForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }} 
            animate={{ opacity: 1, height: 'auto', y: 0 }} 
            exit={{ opacity: 0, height: 0, y: -20, overflow: 'hidden' }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Card className="!p-6 border-stone-200 bg-white shadow-sm mb-6 relative">
              <button 
                onClick={() => setShowAddForm(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors p-1"
                type="button"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-lg font-bold text-stone-800 mb-6 flex items-center gap-2">
                <UserPlus size={20} className="text-stone-400" /> New User Profile
              </h2>
              
              <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
                <div className="space-y-2 md:col-span-3">
                  <label className="text-xs font-bold text-stone-500 ml-1 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-all"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-4">
                  <label className="text-xs font-bold text-stone-500 ml-1 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    required
                    placeholder="jane@university.edu"
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-all"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-3">
                  <label className="text-xs font-bold text-stone-500 ml-1 uppercase tracking-wider">System Role</label>
                  <select 
                    value={newUserRole || "student"}
                    onChange={(e) => setNewUserRole(e.target.value as Role)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center] bg-[length:16px_16px]"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="w-full py-2.5 bg-stone-900 border border-stone-900 hover:bg-stone-800 text-white text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95"
                  >
                    Save
                  </button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="!p-0 overflow-hidden border-stone-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-stone-500 uppercase bg-stone-50/80 border-b border-stone-100">
                <tr>
                  <th className="px-6 py-4 font-semibold w-1/3">Full Name</th>
                  <th className="px-6 py-4 font-semibold w-1/3">Email Address</th>
                  <th className="px-6 py-4 font-semibold w-1/6">Role</th>
                  <th className="px-6 py-4 font-semibold w-1/6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 bg-white">
                <AnimatePresence>
                  {users.map((u) => (
                    <motion.tr 
                      key={u.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, backgroundColor: '#fef2f2' }}
                      className="hover:bg-stone-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            u.role === 'admin' ? 'bg-amber-100 text-amber-700' :
                            u.role === 'teacher' ? 'bg-blue-100 text-blue-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {u.name.charAt(0)}
                          </div>
                          <span className="font-bold text-stone-900">{u.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-stone-500 font-medium">{u.email}</td>
                      <td className="px-6 py-4">
                        <Badge dot={true} variant={
                          u.role === "admin" ? "warning" : 
                          u.role === "teacher" ? "info" : "default"
                        }>
                          {u.role ? u.role.charAt(0).toUpperCase() + u.role.slice(1) : ''}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {u.role !== "admin" ? (
                          <button 
                            onClick={() => handleDeleteUser(u.id, u.role)}
                            className="p-2 text-stone-400 opacity-0 group-hover:opacity-100 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all focus:opacity-100 focus:outline-none inline-block shadow-sm hover:shadow" 
                            title={`Remove ${u.role}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        ) : (
                          <span 
                            className="p-2 text-stone-300 inline-block cursor-not-allowed opacity-50" 
                            title="Cannot remove other administrators"
                          >
                            <Trash2 size={16} />
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-stone-500">
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-3 bg-stone-50 rounded-full mb-3 shadow-inner">
                          <Trash2 className="text-stone-300" size={24} />
                        </div>
                        <p className="font-medium">No users found.</p>
                        <p className="text-xs mt-1">Add users using the button above.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
