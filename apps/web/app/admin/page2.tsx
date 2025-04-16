
import { AdminOverview } from "@/components/dashboard/admin/admin-overview";
import { AdminReportsCharts } from "@/components/dashboard/admin/admin-report-charts";
import { PageHeader } from "@/components/layout/page-header";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Admin Dashboard"
        description="Manage and monitor the system effectively"
      />
      <AdminOverview />
      <AdminReportsCharts />
    </div>
  );
}