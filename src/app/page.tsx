"use client";

import BackgroundDoodles from "@/components/BackgroundDoodles";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/store/AuthContext";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("student@university.edu.in");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await login(email, password);
    setIsSubmitting(false);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center w-full overflow-hidden bg-[#FCFBF8]">
      <BackgroundDoodles />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8 py-12 flex items-center justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[850px] flex flex-col md:flex-row bg-white/70 backdrop-blur-2xl rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/10 min-h-[500px] border border-white/50"
        >
          {/* Left Side */}
          <div className="relative w-full md:w-5/12 min-h-[220px] md:min-h-full flex flex-col items-center justify-center p-8 overflow-hidden">
            <Image 
              src="/campus.png" 
              alt="University Campus" 
              fill
              className="object-cover opacity-80 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-800/40 to-orange-600/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent" />
            
            <div className="relative z-10 text-center text-white mt-auto md:mb-10 drop-shadow-md">
              <h2 className="text-3xl font-bold mb-3 tracking-wide" style={{ fontFamily: "cursive" }}>
                UniPortal
              </h2>
              <p className="text-orange-50 text-sm font-medium max-w-[220px] mx-auto leading-relaxed">
                Streamlining campus support with intelligent issue tracking and fast resolutions.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-cover bg-bottom opacity-60" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'1\' d=\'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,304C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")' }} />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-transparent">
            
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-2 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-stone-500 text-sm font-medium">Login to your account</p>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-[340px] mx-auto">
              <AnimatePresence mode="popLayout">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-500 ml-1 tracking-wide uppercase">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-white/60 backdrop-blur-md border border-stone-200 rounded-xl text-stone-800 font-medium focus:outline-none focus:ring-4 transition-all shadow-sm focus:border-opacity-50 focus:border-orange-400 focus:ring-orange-500/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-500 ml-1 tracking-wide uppercase">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                      <input 
                        type={showPassword ? "text" : "password"} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full pl-11 pr-12 py-3 bg-white/60 backdrop-blur-md border border-stone-200 rounded-xl text-stone-800 font-medium focus:outline-none focus:ring-4 transition-all shadow-sm focus:border-opacity-50 focus:border-orange-400 focus:ring-orange-500/10"
                      />
                      <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 focus:outline-none transition-colors duration-200"
                        title={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between items-center mt-6 mb-8">
                <a href="#" className="text-xs font-semibold text-stone-400 hover:text-stone-600 transition-colors">Forgot password?</a>
                <Link href="/admin-login" className="text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1 group">
                  Admin Login <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 shadow-orange-500/30 ring-2 ring-transparent focus:ring-orange-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'VERIFYING...' : 'SIGN IN'}
                {!isSubmitting && <ArrowRight size={18} strokeWidth={2.5} />}
              </button>
            </form>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
