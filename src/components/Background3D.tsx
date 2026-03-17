"use client";

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#FCFBF8]">
      {/* Warm, soft gradients instead of heavy 3D */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/50 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-100/50 blur-[120px]" />
    </div>
  );
}
