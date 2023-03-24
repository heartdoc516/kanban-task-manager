import Sidebar from "@/components/Sidebar";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />

      {children}
    </div>
  );
}
