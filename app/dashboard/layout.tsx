import Sidebar from "@/components/Sidebar";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div id="modal"></div>
      <div id="new-task-modal"></div>
      <div id="view-task-modal"></div>
      <div id="delete-task-modal"></div>

      <Sidebar />

      {children}
    </div>
  );
}
