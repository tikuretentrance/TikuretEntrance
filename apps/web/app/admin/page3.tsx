'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  UserCheck,
  Clock,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,

  Calendar
} from "lucide-react";
import Link from "next/link";
import PaymentPage from "../payment/page";
import AdminPaymentsPage from "./payments/page";

export default function AdminOverviewPage() {
  // Mock data - replace with real data from your API
  const stats = {
    totalUsers: 10542,
    paidUsers: 8234,
    pendingPayments: 156,
    verifiedToday: 45,
    dailyActive: 3256,
    questionsAnswered: 156789,
    averageScore: 85,
  };

  const recentActivity = [
    { type: 'payment', status: 'pending', user: 'Kidus Abebe', time: '5 minutes ago' },
    { type: 'signup', user: 'Sara Tesfaye', time: '15 minutes ago' },
    { type: 'payment', status: 'verified', user: 'Mohammed Ahmed', time: '30 minutes ago' },
  ];

  return (
    <div className="space-y-8">
      {/* <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button asChild>
          <Link href="/admin/payments">View Pending Payments</Link>
        </Button>
      </div> */}

      {/* Quick Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>12% increase</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Paid Users</p>
                <p className="text-2xl font-bold">{stats.paidUsers.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-green-500/10 rounded-full">
                <UserCheck className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>8% increase</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
                <p className="text-2xl font-bold">{stats.pendingPayments}</p>
              </div>
              <div className="p-3 bg-orange-500/10 rounded-full">
                <Clock className="h-5 w-5 text-orange-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-orange-600">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>Needs attention</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Verified Today</p>
                <p className="text-2xl font-bold">{stats.verifiedToday}</p>
              </div>
              <div className="p-3 bg-green-500/10 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Today's progress</span>
            </div>
          </CardContent>
        </Card>
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