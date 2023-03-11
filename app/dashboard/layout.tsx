import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Suspense } from "react";

import SidebarSkeleton from "@/components/SidebarSkeleton";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div id="modal"></div>
      <div id="new-task-modal"></div>
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>

      <Header />
      {/* {dashboard} */}
      <div className="p-4 lg:ml-64">{children}</div>
    </div>
  );
}
