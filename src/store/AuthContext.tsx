"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";

export type Role = "student" | "admin" | "teacher" | null;

interface User {
  id: string;
  name: string;
  role: Role;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Basic mock implementation for persistence
  useEffect(() => {
    const storedUser = localStorage.getItem("uqms_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password?: string) => {
    setIsLoading(true);
    try {
      // Basic demonstrational password validation layer
      if (password !== "password123") {
        alert("Invalid email or password!");
        setIsLoading(false);
        return;
      }

      if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project-id")) {
        const { data: users, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', email)
          .limit(1);
          
        if (error || !users || users.length === 0) {
          alert("Invalid credentials or user not found!");
          setIsLoading(false);
          return;
        }
        
        const dbUser = users[0] as User;
        setUser(dbUser);
        localStorage.setItem("uqms_user", JSON.stringify(dbUser));
        router.replace(`/${dbUser.role}/dashboard`);
        
      } else {
        let newUser: User;
        if (email.includes('admin')) {
          newUser = { id: "11111111-1111-1111-1111-111111111111", name: "Aarav Sharma", role: "admin", email: "admin@university.edu.in" };
        } else if (email.includes('teacher')) {
          newUser = { id: "22222222-2222-2222-2222-222222222222", name: "Prof. Priya Patel", role: "teacher", email: "teacher@university.edu.in" };
        } else {
          newUser = { id: "33333333-3333-3333-3333-333333333333", name: "Rohan Gupta", role: "student", email: "student@university.edu.in" };
        }
        setUser(newUser);
        localStorage.setItem("uqms_user", JSON.stringify(newUser));
        router.replace(`/${newUser.role}/dashboard`);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("uqms_user");
    router.replace("/");
  };

  // RBAC routing protection mock
  useEffect(() => {
    if (isLoading) return;
    
    if (!user) {
      if (pathname !== "/" && !pathname.startsWith("/api") && pathname !== "/admin-login") {
        router.replace("/");
      }
    } else {
      // Prevent logged in users from seeing login pages
      if (pathname === "/" || pathname === "/admin-login") {
        router.replace(`/${user.role}/dashboard`);
        return;
      }

      if (pathname.startsWith("/student") && user.role !== "student") {
        router.replace(`/${user.role}/dashboard`);
      }
      if (pathname.startsWith("/admin") && user.role !== "admin") {
        router.replace(`/${user.role}/dashboard`);
      }
      if (pathname.startsWith("/teacher") && user.role !== "teacher") {
        router.replace(`/${user.role}/dashboard`);
      }
    }
  }, [user, pathname, router, isLoading]);

  if (isLoading) {
    return <div className="min-h-screen bg-[#FCFBF8] flex items-center justify-center"></div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
