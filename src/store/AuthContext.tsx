"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export type Role = "student" | "admin" | "teacher" | null;

interface User {
  id: string;
  name: string;
  role: Role;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: Role) => void;
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

  const login = (role: Role) => {
    let newUser: User;
    if (role === "admin") {
      newUser = { id: "a1", name: "Michael Chen", role: "admin", email: "admin@university.edu" };
    } else if (role === "teacher") {
      newUser = { id: "t1", name: "Prof. Sarah Miller", role: "teacher", email: "sarah.m@university.edu" };
    } else {
      newUser = { id: "s1", name: "Alex Johnson", role: "student", email: "alex.j@university.edu" };
    }
    
    setUser(newUser);
    localStorage.setItem("uqms_user", JSON.stringify(newUser));
    router.replace(`/${role}/dashboard`);
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
