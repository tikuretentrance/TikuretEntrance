import { books } from "@/lib/books-data"
import { notFound } from "next/navigation"
import { BookDetails } from "@/components/books/book-details"
import { Metadata } from "next"

interface BookPageProps {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    return books.map((book) => ({
        id: book.id,
    }))
}

export function generateMetadata({ params }: BookPageProps): Metadata {
    const book = books.find((b) => b.id === params.id)

    if (!book) {
        return {
            title: 'Book Not Found',
        }
    }

    return {
        title: `${book.title} - TikuretEntrance`,
        description: book.description,
    }
}

export default function BookPage({ params }: BookPageProps) {
    const book = books.find((b) => b.id === params.id)

    if (!book) {
        notFound()
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <BookDetails book={book} />
        </div>
    )
}