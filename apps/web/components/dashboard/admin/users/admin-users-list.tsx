import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";

export interface ClerkUser {
    id: string;
    firstName: string;
    lastName: string;
    emailAddresses: { emailAddress: string }[];
    imageUrl: string;
    createdAt: string;
    lastSignInAt: string;
    accountStatus: string;
    twoFactorEnabled: string;
    emailVerificationStatus: string;
}

export function AdminUsersList() {
    const [users, setUsers] = useState<ClerkUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('/api/getUsers');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const userList = await response.json();
                if (!Array.isArray(userList)) {
                    throw new Error('Fetched data is not an array');
                }
                setUsers(userList);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                <p className="text-lg font-medium">Loading users...</p>
            </div>
        );
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Last Sign In</TableHead>
                    <TableHead>2FA</TableHead>
                    <TableHead>Email Verification</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={user.imageUrl} />
                                <AvatarFallback>
                                    {user.firstName?.[0]}
                                    {user.lastName?.[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">
                                    {user.firstName} {user.lastName}
                                </p>
                            </div>
                        </TableCell>
                        <TableCell>{user.emailAddresses[0]?.emailAddress}</TableCell>
                        <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                {user.accountStatus}
                            </span>
                        </TableCell>
                        <TableCell>
                            {new Date(user.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                            {user.lastSignInAt
                                ? new Date(user.lastSignInAt).toLocaleDateString()
                                : "Never"}
                        </TableCell>
                        <TableCell>{user.twoFactorEnabled}</TableCell>
                        <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${user.emailVerificationStatus === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {user.emailVerificationStatus === 'Verified' ? 'Verified' : 'Not Verified'}
                            </span>
                        </TableCell>
                        <TableCell>
                            <Button variant="ghost" size="sm">
                                View Details
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <p className="text-sm text-muted-foreground">
                Showing {users?.length} users
            </p>
        </Table>
    );
}