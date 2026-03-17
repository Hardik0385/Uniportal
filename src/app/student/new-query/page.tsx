"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Send, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewQueryPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission delay
    setTimeout(() => {
      router.push("/student/queries");
    }, 600);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">New Query</h1>
        <p className="text-stone-500">Submit a new issue to the administration.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card className="p-8">
          <div className="mb-8 border-b border-stone-100 pb-6">
            <h2 className="text-xl font-bold text-stone-900 mb-2">Raise New Query</h2>
            <p className="text-stone-500 text-sm">Submit a new support ticket. We usually respond within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Category</label>
                <select className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer font-medium appearance-none">
                  <option value="" disabled selected>Select Category</option>
                  <option value="academic">Academic Affairs</option>
                  <option value="admission">Admission</option>
                  <option value="finance">Finance & Fees</option>
                  <option value="technical">Technical Support</option>
                  <option value="hostel">Hostel & Accommodation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Priority</label>
                <select className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer font-medium appearance-none">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Subject</label>
              <input 
                required
                type="text" 
                placeholder="Brief summary of your issue"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Description</label>
              <textarea 
                required
                rows={6} 
                placeholder="Provide detailed information about your inquiry or issue..."
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700">Attachments (Optional)</label>
              <div className="w-full border-2 border-dashed border-stone-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-stone-50 hover:bg-stone-100/50 transition-colors cursor-pointer group">
                <div className="p-3 bg-white rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform text-orange-500">
                  <UploadCloud size={24} />
                </div>
                <p className="text-sm font-medium text-stone-700 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-stone-500">SVG, PNG, JPG or PDF (max. 5MB)</p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-4 border-t border-stone-100">
              <button 
                type="button" 
                onClick={() => router.back()}
                className="px-6 py-3 text-stone-600 font-medium hover:bg-stone-50 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 active:scale-[0.98]"
              >
                Submit Query
                <Send size={18} />
              </button>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
