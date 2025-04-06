'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Building2,
    CreditCard,
    Upload,
    CheckCircle2,
    AlertCircle,
    Copy,
    ExternalLink
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

export default function PaymentPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const bankDetails = {
        name: "TikuretEntrance Education PLC",
        accountNumber: "1000123456789",
        bankName: "Commercial Bank of Ethiopia",
        branch: "Bole Branch"
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            toast.error("Please select a file first");
            return;
        }

        setIsUploading(true);
        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        toast.success("Payment proof uploaded successfully! We'll verify your payment within 24 hours.");
        setIsUploading(false);
        setSelectedFile(null);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-gradient">Complete Your Payment</h1>
                    <p className="text-lg text-muted-foreground">
                        Choose your preferred payment method to access premium study materials
                    </p>
                </div>

                <Tabs defaultValue="bank" className="space-y-8">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="bank" className="space-x-2">
                            <Building2 className="h-4 w-4" />
                            <span>Bank Transfer</span>
                        </TabsTrigger>
                        <TabsTrigger value="mobile" className="space-x-2">
                            <CreditCard className="h-4 w-4" />
                            <span>Mobile Banking</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="bank">
                        <Card className="p-6">
                            <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Bank Transfer Details</h3>
                                        <div className="space-y-3">
                                            {Object.entries(bankDetails).map(([key, value]) => (
                                                <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                                    <div>
                                                        <p className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                                        <p className="font-medium">{value}</p>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleCopy(value)}
                                                    >
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Upload Payment Proof</h3>
                                        <div className="space-y-4">
                                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                                <Label htmlFor="payment-proof">Payment Screenshot</Label>
                                                <Input
                                                    id="payment-proof"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                            <Button
                                                onClick={handleUpload}
                                                disabled={!selectedFile || isUploading}
                                                className="w-full md:w-auto"
                                            >
                                                {isUploading ? (
                                                    <>
                                                        <Upload className="mr-2 h-4 w-4 animate-spin" />
                                                        Uploading...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Upload className="mr-2 h-4 w-4" />
                                                        Upload Proof
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 mt-11">
                                    <Card className="p-4 bg-muted">
                                        <h4 className="font-semibold mb-2">Payment Instructions</h4>
                                        <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                                            <li>Copy the account details above</li>
                                            <li>Make the transfer using your bank app or visit a branch</li>
                                            <li>Take a screenshot or photo of the payment confirmation</li>
                                            <li>Upload the proof of payment</li>
                                            <li>Wait for our verification (usually within 24 hours)</li>
                                        </ol>
                                    </Card>

                                    <Card className="p-4">
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <p className="text-sm text-muted-foreground">
                                                Need help? Contact our support team via{" "}
                                                <Link href="/contact" className="text-primary hover:underline">
                                                    WhatsApp or Telegram
                                                </Link>
                                            </p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="mobile">
                        <Card className="p-6">
                            <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Mobile Banking Options</h3>
                                        <div className="grid gap-4">
                                            {[
                                                {
                                                    bank: "CBE Birr",
                                                    number: "*847#",
                                                    logo: "/images/cbe-birr.png"
                                                },
                                                {
                                                    bank: "Amole",
                                                    number: "*999#",
                                                    logo: "/images/amole.png"
                                                },
                                                {
                                                    bank: "HelloCash",
                                                    number: "*912#",
                                                    logo: "/images/hellocash.png"
                                                }
                                            ].map((option) => (
                                                <div key={option.bank} className="flex items-center gap-4 p-4 border rounded-lg">
                                                    <div className="h-12 w-12 relative rounded-lg overflow-hidden bg-muted">
                                                        {/* Placeholder for bank logos */}
                                                        <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                                                            <Building2 className="h-6 w-6 text-primary" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-medium">{option.bank}</h4>
                                                        <p className="text-sm text-muted-foreground">Dial {option.number}</p>
                                                    </div>
                                                    <Button variant="outline" size="sm">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold">Upload Payment Proof</h3>
                                        <div className="space-y-4">
                                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                                <Label htmlFor="mobile-payment-proof">Payment Screenshot</Label>
                                                <Input
                                                    id="mobile-payment-proof"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                            <Button
                                                onClick={handleUpload}
                                                disabled={!selectedFile || isUploading}
                                                className="w-full md:w-auto"
                                            >
                                                {isUploading ? (
                                                    <>
                                                        <Upload className="mr-2 h-4 w-4 animate-spin" />
                                                        Uploading...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Upload className="mr-2 h-4 w-4" />
                                                        Upload Proof
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <Card className="p-4 bg-muted">
                                        <h4 className="font-semibold mb-2">Mobile Banking Steps</h4>
                                        <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                                            <li>Open your mobile banking app</li>
                                            <li>Select "Transfer to Account"</li>
                                            <li>Enter our account number</li>
                                            <li>Take a screenshot of the confirmation</li>
                                            <li>Upload the proof here</li>
                                        </ol>
                                    </Card>

                                    <Card className="p-4">
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <p className="text-sm text-muted-foreground">
                                                Having trouble? Our support team is available 24/7 via{" "}
                                                <Link href="/contact" className="text-primary hover:underline">
                                                    WhatsApp or Telegram
                                                </Link>
                                            </p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="mt-8">
                    <Card className="p-6 bg-primary/5 border-primary/20">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold mb-2">What happens next?</h3>
                                <p className="text-muted-foreground">
                                    After we verify your payment, you'll receive an email confirmation and your account will be automatically upgraded to access all premium features. This usually takes less than 24 hours during business days.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}