import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TestNotFound() {
    return (
        <div className="container px-4 mx-auto py-8">
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h1 className="text-3xl font-bold mb-2">Test Not Found</h1>
                <p className="text-muted-foreground mb-6">
                    The practice test you're looking for doesn't exist or has been removed.
                </p>
                <Link href="/dashboard/practice-zone">
                    <Button size="default" className="shadow-lg hover:shadow-primary/25">
                        Back To Practice Zone
                    </Button>
                </Link>
            </div>
        </div>
    )
}