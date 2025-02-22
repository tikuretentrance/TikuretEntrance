import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/book-main-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Book, BookOpen, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Book as BookType } from "@/lib/types"

interface BookCardProps {
    book: BookType
}

export function BookCard({ book }: BookCardProps) {
    return (
        <Card className="flex flex-col card-hover">
            <CardHeader>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                        src={book.coverUrl}
                        alt={book.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{book.grade}</Badge>
                    <Badge variant="outline">{book.subject}</Badge>
                </div>
                <h3 className="text-xl font-semibold">{book.title}</h3>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{book.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <Book className="mr-2 h-4 w-4 text-primary" />
                        {book.type}
                    </div>
                    <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-primary" />
                        {book.chapters.length} chapters
                    </div>
                </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
                <Button variant="outline" asChild>
                    <Link href={`/books/${book.id}`}>
                        View Details
                    </Link>
                </Button>
                <Button asChild>
                    <a href={book.downloadUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}