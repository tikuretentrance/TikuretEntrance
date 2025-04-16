"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";
import { AdminUsersList } from "@/components/dashboard/admin/users/admin-users-list";
import { useState } from "react";

export default function AdminUsersPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Users</h2>
                <Button>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add User
                </Button>
            </div>

            <Card className="p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        className="pl-10"
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </Card>

            <AdminUsersList />
        </div>
    );
}