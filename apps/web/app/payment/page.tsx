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
  ExternalLink,
  Smartphone,
  QrCode,
  X
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UploadDropzone } from "@/lib/uploadthing";
import { useAuth } from '@clerk/nextjs';
import "@uploadthing/react/styles.css";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\+251[0-9]{9}$/, "Please enter a valid Ethiopian phone number"),
});

type FormData = z.infer<typeof formSchema>;

export default function PaymentPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [language, setLanguage] = useState<'en' | 'am'>('en');
  const [isUploading, setIsUploading] = useState(false);
  const { userId } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const bankDetails = {
    cbe: {
      name: "Dagim Wallelgne Yitayew",
      accountNumber: "1000123456789",
      bankName: "Commercial Bank of Ethiopia",
      branch: "Bole Branch",
      qrCode: "/images/cbe-qr.png"
    },
    awash: {
      name: "Dagim Wallelgne Yitayew",
      accountNumber: "0770123456789",
      bankName: "Awash Bank",
      branch: "Bole Branch",
      qrCode: "/images/awash-qr.png"
    },
    telebirr: {
      name: "Dagim Wallelgne",
      phoneNumber: "+251961343490",
      qrCode: "/images/telebirr-qr.png"
    }
  };

  const translations = {
    en: {
      title: "Complete Your Payment",
      subtitle: "Choose your preferred payment method to access premium study materials",
      bankTransfer: "Bank Transfer",
      mobilePayment: "Mobile Payment",
      uploadProof: "Upload Payment Proof",
      fullName: "Full Name",
      phone: "Phone Number",
      submit: "Submit Payment Proof",
      submitting: "Submitting...",
      instructions: "Payment Instructions",
      support: "Need help? Contact our support team"
    },
    am: {
      title: "ክፍያዎን ያጠናቅቁ",
      subtitle: "የተሻለ የጥናት ቁሳቁሶችን ለማግኘት የሚፈልጉትን የክፍያ መንገድ ይምረጡ",
      bankTransfer: "በባንክ ያስተላልፉ",
      mobilePayment: "በሞባይል ይክፈሉ",
      uploadProof: "የክፍያ ማረጋገጫ ይስቀሉ",
      fullName: "ሙሉ ስም",
      phone: "ስልክ ቁጥር",
      submit: "የክፍያ ማረጋገጫ ያስገቡ",
      submitting: "በማስገባት ላይ...",
      instructions: "የክፍያ መመሪያዎች",
      support: "እርዳታ ይፈልጋሉ? የድጋፍ ቡድናችንን ያግኙ"
    }
  };

  const t = translations[language];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(language === 'en' ? "Copied to clipboard!" : "ወደ ቅንጥብ ሰሌዳ ተቀድቷል!");
  };

  const onSubmit = async (data: FormData) => {
    if (!selectedFile) {
      toast.error(language === 'en' ? "Please upload a payment screenshot" : "እባክዎ የክፍያ ማረጋገጫ ስክሪንሾት ይስቀሉ");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          paymentMethod: 'cbe', // or 'awash' or 'telebirr'
          userId: userId,
          screenshotUrl: selectedFile,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Submission failed');

      toast.success(language === 'en'
        ? "Payment proof submitted successfully! We'll verify your payment within 24 hours."
        : "የክፍያ ማረጋገጫው በተሳካ ሁኔታ ተልክዏል! ክፍያዎን በ24 ሰዓታት ውስጥ እናረጋግጣለን።");

      reset();
      setSelectedFile(null);
    } catch (error) {
      toast.error(language === 'en'
        ? "Failed to submit payment proof. Please try again."
        : "የክፍያ ማረጋገጫውን ማስገባት አልተሳካም። እባክዎ እንደገና ይሞክሩ።");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(lang => lang === 'en' ? 'am' : 'en')}
          >
            {language === 'en' ? 'አማርኛ' : 'English'}
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">{t.title}</h1>
          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <Tabs defaultValue="cbe" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cbe" className="space-x-2">
              <Building2 className="h-4 w-4" />
              <span>CBE</span>
            </TabsTrigger>
            <TabsTrigger value="awash" className="space-x-2">
              <Building2 className="h-4 w-4" />
              <span>Awash</span>
            </TabsTrigger>
            <TabsTrigger value="telebirr" className="space-x-2">
              <Smartphone className="h-4 w-4" />
              <span>Telebirr</span>
            </TabsTrigger>
          </TabsList>

          {/* Payment Details Content */}
          {["cbe", "awash", "telebirr"].map((method) => (
            <TabsContent key={method} value={method}>
              <Card className="p-6">
                <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        {method === "telebirr" ? "Telebirr Payment" : `${method.toUpperCase()} Bank Transfer`}
                      </h3>
                      <div className="space-y-3">
                        {method === "telebirr" ? (
                          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div>
                              <p className="text-sm text-muted-foreground">Phone Number</p>
                              <p className="font-medium">{bankDetails.telebirr.phoneNumber}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleCopy(bankDetails.telebirr.phoneNumber)}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          Object.entries(bankDetails[method as "cbe" | "awash"])
                            .slice(0, -1)
                            .map(([key, value]) => (
                              <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <div>
                                  <p className="text-sm text-muted-foreground capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </p>
                                  <p className="font-medium">{value}</p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleCopy(value.toString())}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            ))
                        )}
                      </div>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="fullName">{t.fullName}</Label>
                          <Input
                            id="fullName"
                            {...register("fullName")}
                            className="mt-1"
                          />
                          {errors.fullName && (
                            <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="phone">{t.phone}</Label>
                          <Input
                            id="phone"
                            {...register("phone")}
                            placeholder="+251"
                            className="mt-1"
                          />
                          {errors.phone && (
                            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                          )}
                        </div>

                        <div>
                          <Label>{t.uploadProof}</Label>
                          <div className="mt-1">
                            <UploadDropzone
                              endpoint="paymentProof"
                              onUploadBegin={() => {
                                setIsUploading(true);
                                toast.info(language === 'en' ? "Uploading screenshot..." : "ስክሪንሾት እየተላለፈ ነው...");
                              }}
                              onClientUploadComplete={(res) => {
                                setIsUploading(false);
                                if (res?.[0]) {
                                  setSelectedFile(res[0].ufsUrl);
                                  toast.success(language === 'en'
                                    ? "Screenshot uploaded successfully!"
                                    : "ስክሪንሾት በተሳካ ሁኔታ ተልክዏል!");
                                }
                              }}
                              onUploadError={(error: Error) => {
                                setIsUploading(false);
                                toast.error(error.message);
                              }}
                            />

                          </div>
                        </div>

                        {selectedFile && (
                          <div className="relative">
                            <img
                              src={selectedFile}
                              alt="Payment proof"
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2"
                              onClick={() => setSelectedFile(null)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting || isUploading || !selectedFile}
                      >
                        {isSubmitting || isUploading ? (
                          <>
                            <Upload className="mr-2 h-4 w-4 animate-spin" />
                            {isUploading
                              ? (language === 'en' ? "Uploading screenshot..." : "እየተላለፈ ነው...")
                              : t.submitting}
                          </>
                        ) : (
                          t.submit
                        )}
                      </Button>
                    </form>
                  </div>

                  {/* Instructions and QR Code */}
                  <div className="space-y-6">
                    <Card className="p-4">
                      <div className="text-center">
                        <h4 className="font-semibold mb-4">
                          {method === "telebirr" ? "Telebirr" : `${method.toUpperCase()}`} QR Code
                        </h4>
                        <div className="bg-white p-4 rounded-lg inline-block">
                          <QrCode className="h-32 w-32 mx-auto" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {method === "telebirr"
                            ? "Scan with Telebirr App"
                            : `Scan with ${method.toUpperCase()} Mobile Banking`}
                        </p>
                      </div>
                    </Card>

                    <Card className="p-4 bg-muted">
                      <h4 className="font-semibold mb-2">{t.instructions}</h4>
                      <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                        {method === "telebirr" ? (
                          <>
                            <li>Open Telebirr app</li>
                            <li>Select "Pay"</li>
                            <li>Enter the phone number</li>
                            <li>Enter amount: ETB 999</li>
                            <li>Take screenshot of confirmation</li>
                            <li>Upload the screenshot here</li>
                          </>
                        ) : (
                          <>
                            <li>Open {method.toUpperCase()} Mobile Banking app</li>
                            <li>Select {method === "cbe" ? '"Transfer to Account"' : '"Transfer"'}</li>
                            <li>Enter the account number</li>
                            <li>Enter amount: ETB 999</li>
                            <li>Take screenshot of confirmation</li>
                            <li>Upload the screenshot here</li>
                          </>
                        )}
                      </ol>
                    </Card>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? "After we verify your payment, you'll receive an email confirmation and your account will be automatically upgraded to access all premium features. This usually takes less than 24 hours during business days."
                    : "ክፍያዎን ካረጋገጥን በኋላ፣ የኢሜይል ማረጋገጫ ይደርስዎታል እና መለያዎ በራስ-ሰር ወደ ሁሉም ፕሪሚየም ባህሪያት ይዘምናል። ይህ በስራ ቀናት ከ24 ሰዓታት ያነስ ይወስዳል።"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div >
  );
}