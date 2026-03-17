import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "danger" | "info" | "default";
  className?: string;
  dot?: boolean;
}

export function Badge({ children, variant = "default", className, dot = true }: BadgeProps) {
  const variants = {
    success: { bg: "bg-emerald-50 text-emerald-700 ring-emerald-500/20", dotColor: "bg-emerald-500" },
    warning: { bg: "bg-amber-50 text-amber-700 ring-amber-500/20", dotColor: "bg-amber-500" },
    danger: { bg: "bg-red-50 text-red-700 ring-red-500/20", dotColor: "bg-red-500" },
    info: { bg: "bg-blue-50 text-blue-700 ring-blue-500/20", dotColor: "bg-blue-500" },
    default: { bg: "bg-stone-100 text-stone-700 ring-stone-500/20", dotColor: "bg-stone-500" },
  };

  return (
    <span className={cn(
      "px-2.5 py-1 text-xs font-semibold rounded-full ring-1 ring-inset inline-flex items-center gap-1.5 shadow-sm",
      variants[variant].bg,
      className
    )}>
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full", variants[variant].dotColor)} />}
      <span className="uppercase tracking-wider">{children}</span>
    </span>
  );
}
