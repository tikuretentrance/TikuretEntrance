'use client';

import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
    CheckCircle2,
    XCircle,
    Clock,
    Search,
    Download,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    Filter
} from "lucide-react";
import { format } from 'date-fns';
import { toast } from "sonner";
import Image from "next/image";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { checkRole } from '@/lib/utils/checkRoles';

interface PaymentProof {
    id: string;
    fullName: string;
    phone: string;
    amount: number;
    screenshotUrl: string;
    status: 'pending' | 'approved' | 'declined';
    submittedAt: string;
    paymentMethod: string;
}

export default function AdminPaymentsPage() {
    const { isLoaded, userId } = useAuth();
    const [payments, setPayments] = useState<PaymentProof[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPayment, setSelectedPayment] = useState<PaymentProof | null>(null);
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { user } = useUser();
    const router = useRouter();
    const { getToken } = useAuth();

    const handleApprove = async (paymentId: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/${paymentId}/approve`, {
                method: 'PATCH',
            });

            if (!response.ok) throw new Error('Failed to approve payment');

            toast.success('Payment approved successfully');
            // Refresh payments list
            fetchPayments();
        } catch (error) {
            toast.error('Failed to approve payment');
        }
    };

    const handleDecline = async (paymentId: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/${paymentId}/reject`, {
                method: 'PATCH',
            });

            if (!response.ok) throw new Error('Failed to reject payment');

            toast.success('Payment declined');
            // Refresh payments list
            fetchPayments();
        } catch (error) {
            toast.error('Failed to decline payment');
        }
    };

    const fetchPayments = async () => {
        try {
            const token = await getToken();
            if (!token) {
                router.push('/sign-in');
                return;
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/payments/?page=${page}&filter=${filter}&search=${search}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include' // Important for cookies
                }
            );

            if (response.status === 401) {
                router.push('/sign-in');
                return;
            }

            if (!response.ok) throw new Error('Failed to fetch payments');

            const data = await response.json();
            setPayments(data?.data || []);
            setTotalPages(data?.last_page || 1);
        } catch (error) {
            toast.error('Failed to fetch payments');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isLoaded) {
            // Check if the user is logged in and has the admin role
            if (!userId || user?.publicMetadata?.role !== "admin") {
                // Redirect to a "not authorized" page or login page
                router.push("/not-authorized");
            } else {
                setLoading(false); // Allow access if the user is an admin
            }
        }
    }, [isLoaded, userId, user, router]);

    useEffect(() => {
        fetchPayments();
    }, [page, filter, search]);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved':
                return 'text-green-600 bg-green-100 dark:bg-green-900/20';
            case 'rejected':
                return 'text-red-600 bg-red-100 dark:bg-red-900/20';
            default:
                return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'approved':
                return <CheckCircle2 className="h-4 w-4" />;
            case 'rejected':
                return <XCircle className="h-4 w-4" />;
            default:
                return <Clock className="h-4 w-4" />;
        }
    };

    if (loading) {
        return <p>Loading payments...</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Payment Verifications</h1>
                <div className="flex gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search by name or phone..."
                            className="pl-9"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Select value={filter} onValueChange={setFilter}>
                        <SelectTrigger className="w-[180px]">
                            <Filter className="h-4 w-4 mr-2" />
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Payments</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="declined">Declined</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                {/* <th className="text-left p-4">No.</th> */}
                                <th className="text-left p-4">Name</th>
                                <th className="text-left p-4">Phone</th>
                                <th className="text-left p-4">Amount</th>
                                <th className="text-left p-4">Method</th>
                                <th className="text-left p-4">Date</th>
                                <th className="text-left p-4">Status</th>
                                <th className="text-right p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments?.length > 0 ? payments.map((payment) => (
                                <tr key={payment.id} className="border-b hover:bg-muted/50">
                                    {/* <td className="p-4"> {payments.indexOf(payment) + 1}</td> */}
                                    <td className="p-4">{payment.fullName}</td>
                                    <td className="p-4">{payment.phone}</td>
                                    <td className="p-4">ETB {payment.amount}</td>
                                    <td className="p-4">{payment.paymentMethod}</td>
                                    <td className="p-4">{format(new Date(payment.submittedAt), 'MMM d, yyyy')}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                                            {getStatusIcon(payment.status)}
                                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm" onClick={() => setSelectedPayment(payment)}>
                                                    View Details
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-2xl">
                                                <DialogHeader>
                                                    <DialogTitle>Payment Details</DialogTitle>
                                                </DialogHeader>
                                                <div className="grid gap-6">
                                                    <div className="aspect-[3/2] relative rounded-lg overflow-hidden">
                                                        <Image
                                                            src={payment.screenshotUrl}
                                                            alt="Payment screenshot"
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <Label>Full Name</Label>
                                                            <p className="mt-1">{payment.fullName}</p>
                                                        </div>
                                                        <div>
                                                            <Label>Phone</Label>
                                                            <p className="mt-1">{payment.phone}</p>
                                                        </div>
                                                        <div>
                                                            <Label>Amount</Label>
                                                            <p className="mt-1">ETB {payment.amount}</p>
                                                        </div>
                                                        <div>
                                                            <Label>Payment Method</Label>
                                                            <p className="mt-1">{payment.paymentMethod}</p>
                                                        </div>
                                                        <div>
                                                            <Label>Submitted At</Label>
                                                            <p className="mt-1">{format(new Date(payment.submittedAt), 'PPP')}</p>
                                                        </div>
                                                        <div>
                                                            <Label>Status</Label>
                                                            <p className="mt-1">
                                                                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                                                                    {getStatusIcon(payment.status)}
                                                                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {payment.status === 'pending' && (
                                                        <div className="flex gap-4">
                                                            <Button
                                                                className="w-full"
                                                                onClick={() => handleApprove(payment.id)}
                                                            >
                                                                <CheckCircle2 className="h-4 w-4 mr-2" />
                                                                Approve Payment
                                                            </Button>
                                                            <Button
                                                                variant="destructive"
                                                                className="w-full"
                                                                onClick={() => handleDecline(payment.id)}
                                                            >
                                                                <XCircle className="h-4 w-4 mr-2" />
                                                                Decline Payment
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </td>
                                </tr>
                            )) : []}
                        </tbody>
                        {payments?.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center p-4">
                                    No payments found.
                                </td>
                            </tr>
                        )}
                    </table>
                </div>
            </Card>

            <div className="flex justify-between items-center mt-6">
                <p className="text-sm text-muted-foreground">
                    Showing {payments?.length} payments
                </p>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}