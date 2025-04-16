'use client';

import { AdminOverview } from "@/components/dashboard/admin/admin-overview";
import { AdminReportsCharts } from "@/components/dashboard/admin/admin-report-charts";
import { AdminSidebar } from "@/components/dashboard/admin/admin-sidebar";
import { PageHeader } from "@/components/layout/page-header";

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
            <main className="flex-1 p-6">
                <PageHeader
                    title="Admin Dashboard"
                    description="Manage and monitor the system effectively"
                />
                {children}
                <AdminOverview />
                <AdminReportsCharts />
            </main>
        </div>
    );
}