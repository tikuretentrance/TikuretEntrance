"use client";

import { AdminSidebar } from "@/components/dashboard/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" container flex py-8  min-h-screen bg-background mx-auto">
      <div className="hidden md:flex w-64 shrink-0 p-4 border-r">
        <AdminSidebar />
      </div>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}