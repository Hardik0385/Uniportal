import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FCFBF8] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Navbar title="Admin Portal" />
        <main className="flex-1 p-8 pb-20">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
