"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export type Role = "student" | "admin" | null;

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
  const router = useRouter();
  const pathname = usePathname();

  // Basic mock implementation for persistence
  useEffect(() => {
    const storedUser = localStorage.getItem("uqms_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (role: Role) => {
    let newUser: User;
    if (role === "admin") {
      newUser = { id: "a1", name: "Michael Chen", role: "admin", email: "admin@university.edu" };
    } else {
      newUser = { id: "s1", name: "Alex Johnson", role: "student", email: "alex.j@university.edu" };
    }
    
    setUser(newUser);
    localStorage.setItem("uqms_user", JSON.stringify(newUser));
    router.push(`/${role}/dashboard`);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("uqms_user");
    router.push("/");
  };

  // RBAC routing protection mock
  useEffect(() => {
    if (!user) {
      if (pathname !== "/" && !pathname.startsWith("/api")) {
        router.push("/");
      }
    } else {
      if (pathname.startsWith("/student") && user.role !== "student") {
        router.push(`/${user.role}/dashboard`);
      }
      if (pathname.startsWith("/admin") && user.role !== "admin") {
        router.push(`/${user.role}/dashboard`);
      }
    }
  }, [user, pathname, router]);

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
