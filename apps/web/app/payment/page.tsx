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
  QrCode
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

export default function PaymentPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [language, setLanguage] = useState<'en' | 'am'>('en');

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
      selectFile: "Select Screenshot",
      upload: "Upload Proof",
      uploading: "Uploading...",
      instructions: "Payment Instructions",
      support: "Need help? Contact our support team"
    },
    am: {
      title: "ክፍያዎን ያጠናቅቁ",
      subtitle: "የተሻለ የጥናት ቁሳቁሶችን ለማግኘት የሚፈልጉትን የክፍያ መንገድ ይምረጡ",
      bankTransfer: "በባንክ ያስተላልፉ",
      mobilePayment: "በሞባይል ይክፈሉ",
      uploadProof: "የክፍያ ማረጋገጫ ይስቀሉ",
      selectFile: "ስክሪንሾት ይምረጡ",
      upload: "ማረጋገጫ ይስቀሉ",
      uploading: "በመስቀል ላይ...",
      instructions: "የክፍያ መመሪያዎች",
      support: "እርዳታ ይፈልጋሉ? የድጋፍ ቡድናችንን ያግኙ"
    }
  };

  const t = translations[language];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(language === 'en' ? "Copied to clipboard!" : "ወደ ቅንጥብ ሰሌዳ ተቀድቷል!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error(language === 'en' ? "Please select a file first" : "እባክዎ መጀመሪያ ፋይል ይምረጡ");
      return;
    }

    setIsUploading(true);
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success(language === 'en' 
      ? "Payment proof uploaded successfully! We'll verify your payment within 24 hours."
      : "የክፍያ ማረጋገጫው በተሳካ ሁኔታ ተልክዏል! ክፍያዎን በ24 ሰዓታት ውስጥ እናረጋግጣለን።");
    setIsUploading(false);
    setSelectedFile(null);
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

          {/* CBE Content */}
          <TabsContent value="cbe">
            <Card className="p-6">
              <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">CBE Bank Transfer</h3>
                    <div className="space-y-3">
                      {Object.entries(bankDetails.cbe).slice(0, -1).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <p className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
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
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t.uploadProof}</h3>
                    <div className="space-y-4">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="payment-proof">{t.selectFile}</Label>
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
                            {t.uploading}
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            {t.upload}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold mb-4">CBE QR Code</h4>
                      <div className="bg-white p-4 rounded-lg inline-block">
                        <QrCode className="h-32 w-32 mx-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Scan with CBE Mobile Banking
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 bg-muted">
                    <h4 className="font-semibold mb-2">{t.instructions}</h4>
                    <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Open CBE Mobile Banking app</li>
                      <li>Select "Transfer to Account"</li>
                      <li>Enter the account number</li>
                      <li>Enter amount: ETB 999</li>
                      <li>Take screenshot of confirmation</li>
                      <li>Upload the screenshot here</li>
                    </ol>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Awash Content */}
          <TabsContent value="awash">
            <Card className="p-6">
              {/* Similar structure to CBE but with Awash Bank details */}
              <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Awash Bank Transfer</h3>
                    <div className="space-y-3">
                      {Object.entries(bankDetails.awash).slice(0, -1).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <p className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
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
                      ))}
                    </div>
                  </div>

                  {/* Upload section - same as CBE */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t.uploadProof}</h3>
                    <div className="space-y-4">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="awash-payment-proof">{t.selectFile}</Label>
                        <Input
                          id="awash-payment-proof"
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
                            {t.uploading}
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            {t.upload}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold mb-4">Awash QR Code</h4>
                      <div className="bg-white p-4 rounded-lg inline-block">
                        <QrCode className="h-32 w-32 mx-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Scan with Awash Mobile Banking
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 bg-muted">
                    <h4 className="font-semibold mb-2">{t.instructions}</h4>
                    <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Open Awash Mobile Banking app</li>
                      <li>Select "Transfer"</li>
                      <li>Enter the account number</li>
                      <li>Enter amount: ETB 999</li>
                      <li>Take screenshot of confirmation</li>
                      <li>Upload the screenshot here</li>
                    </ol>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Telebirr Content */}
          <TabsContent value="telebirr">
            <Card className="p-6">
              <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Telebirr Payment</h3>
                    <div className="space-y-3">
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
                    </div>
                  </div>

                  {/* Upload section - same as others */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{t.uploadProof}</h3>
                    <div className="space-y-4">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="telebirr-payment-proof">{t.selectFile}</Label>
                        <Input
                          id="telebirr-payment-proof"
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
                            {t.uploading}
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            {t.upload}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold mb-4">Telebirr QR Code</h4>
                      <div className="bg-white p-4 rounded-lg inline-block">
                        <QrCode className="h-32 w-32 mx-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Scan with Telebirr App
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 bg-muted">
                    <h4 className="font-semibold mb-2">{t.instructions}</h4>
                    <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Open Telebirr app</li>
                      <li>Select "Pay"</li>
                      <li>Enter the phone number</li>
                      <li>Enter amount: ETB 999</li>
                      <li>Take screenshot of confirmation</li>
                      <li>Upload the screenshot here</li>
                    </ol>
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
                  {language === 'en' 
                    ? "After we verify your payment, you'll receive an email confirmation and your account will be automatically upgraded to access all premium features. This usually takes less than 24 hours during business days."
                    : "ክፍያዎን ካረጋገጥን በኋላ፣ የኢሜይል ማረጋገጫ ይደርስዎታል እና መለያዎ በራስ-ሰር ወደ ሁሉም ፕሪሚየም ባህሪያት ይዘምናል። ይህ በስራ ቀናት ከ24 ሰዓታት ያነስ ይወስዳል።"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}