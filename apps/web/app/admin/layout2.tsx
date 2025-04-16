"use client";

import { AdminSidebar } from "@/components/dashboard/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen pt-20">
      {/* <AdminSidebar /> */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}