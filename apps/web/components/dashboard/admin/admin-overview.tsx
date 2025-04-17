"use client";

import { Card } from "@/components/ui/card";
import { IconClockDollar, IconUserDollar } from "@tabler/icons-react";
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp 
} from "lucide-react";

export function AdminOverview() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      change: "+12%",
    },
    {
      title: "Paid Users",
      value: "123",
      icon: IconUserDollar,
      change: "+15%",
    },
    {
      title: "Pending Payments",
      value: "123",
      icon: IconClockDollar,
      change: "+15%",
    },
    // {
    //   title: "Verified Today",
    //   value: "45",
    //   icon: Activity,
    //   change: "+5%",
    // },
    {
      title: "Revenue",
      value: "$12.4k",
      icon: TrendingUp,
      change: "+23%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              <p className="text-sm text-emerald-600 mt-1">{stat.change}</p>
            </div>
            <div className="bg-primary/10 p-3 rounded-full">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}