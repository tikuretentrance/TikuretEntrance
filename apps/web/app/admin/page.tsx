'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  UserCheck,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  AlertCircle,
  Calendar
} from "lucide-react";
import AdminPaymentsPage from "./payments/page";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from 'sonner';

interface DashboardStats {
  totalUsers: number;
  paidUsers: number;
  pendingPayments: number;
  verifiedToday: number;
}

export default function AdminOverviewPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats/dashboard');
        if (!response.ok) throw new Error('Failed to fetch stats');
        const data = await response.json();
        setStats(data);
      } catch (error: any) {
        toast.error(`Failed to fetch stats: ${error.message}`, { position: "top-center" });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-8 w-[80px]" />
                </div>
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
              <div className="mt-4">
                <Skeleton className="h-4 w-[120px]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={stats?.totalUsers || 0}
          icon={<Users className="h-5 w-5 text-primary" />}
          trend="12% increase"
          trendPositive
        />

        <StatCard
          title="Paid Users"
          value={stats?.paidUsers || 0}
          icon={<UserCheck className="h-5 w-5 text-green-500" />}
          trend="8% increase"
          trendPositive
        />

        <StatCard
          title="Pending Payments"
          value={stats?.pendingPayments || 0}
          icon={<Clock className="h-5 w-5 text-orange-500" />}
          trend="Needs attention"
          trendPositive={false}
        />

        <StatCard
          title="Verified Today"
          value={stats?.verifiedToday || 0}
          icon={<CheckCircle2 className="h-5 w-5 text-green-500" />}
          trend="Today's progress"
        />
      </div>

      <AdminPaymentsPage />
      {/* ESSLCE Information */}
      {/* <Card>
        <CardHeader>
          <CardTitle>ESSLCE 2025 Overview</CardTitle>
          <CardDescription>Examination preparation status and statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">Exam Date</span>
              </div>
              <p className="text-2xl font-bold">June 22, 2025</p>
              <p className="text-sm text-muted-foreground">68 days remaining</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span className="font-medium">Questions Answered</span>
              </div>
              <p className="text-2xl font-bold">{stats.questionsAnswered.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Across all subjects</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-medium">Average Score</span>
              </div>
              <p className="text-2xl font-bold">{stats.averageScore}%</p>
              <p className="text-sm text-muted-foreground">Practice test results</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="font-medium">Daily Active</span>
              </div>
              <p className="text-2xl font-bold">{stats.dailyActive.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Students studying today</p>
            </div>
          </div>
        </CardContent>
      </Card> */}

      {/* Recent Activity */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest platform activities and verifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-4">
                  {activity.type === 'payment' ? (
                    <div className={`p-2 rounded-full ${
                      activity.status === 'pending' ? 'bg-orange-500/10' : 'bg-green-500/10'
                    }`}>
                      <CreditCard className={`h-4 w-4 ${
                        activity.status === 'pending' ? 'text-orange-500' : 'text-green-500'
                      }`} />
                    </div>
                  ) : (
                    <div className="p-2 rounded-full bg-primary/10">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{activity.user}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.type === 'payment' 
                        ? `Payment ${activity.status}` 
                        : 'New signup'}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}

function StatCard({ title, value, icon, trend, trendPositive }: {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: string;
  trendPositive?: boolean;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value.toLocaleString()}</p>
          </div>
          <div className="p-3 rounded-full bg-primary/10">
            {icon}
          </div>
        </div>
        <div className={`mt-4 flex items-center text-sm ${trendPositive === undefined
          ? 'text-muted-foreground'
          : trendPositive
            ? 'text-green-600'
            : 'text-orange-600'
          }`}>
          {trendPositive !== undefined && (
            <ArrowUpRight className={`h-4 w-4 mr-1 ${!trendPositive && 'rotate-180'
              }`} />
          )}
          <span>{trend}</span>
        </div>
      </CardContent>
    </Card>
  );
}