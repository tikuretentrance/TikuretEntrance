import Link from "next/link";
import { Frown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-2">
            <Frown className="w-10 text-gray-400" />
            <h2 className="text-xl font-semibold text-muted-foreground">404 Not Found</h2>
            <p className="text-muted-foreground">The book you're looking for doesn't exist or has been removed.</p>

            <Link href="/books">
                <Button size="default" className="mt-4 shadow-lg hover:shadow-primary/25">
                    Back to Books
                </Button>
            </Link>
        </main>
    );
}
