import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={cn("bg-white rounded-2xl border border-stone-200 shadow-sm p-6 transition-all hover:shadow-md", className)}>
      {children}
    </div>
  );
}
