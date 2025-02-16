"use client"

import { useSearchParams } from "next/navigation"
import { books } from "@/lib/books-data"
import { BookCard } from "./book-card"

export function BookGrid() {
    const searchParams = useSearchParams()
    const grade = searchParams.get("grade")
    const subject = searchParams.get("subject")
    const search = searchParams.get("search")?.toLowerCase()

    const filteredBooks = books.filter(book => {
        if (grade && grade !== "all" && book.grade.toLowerCase() !== grade) {
            return false
        }

        if (subject && subject !== "all" && book.subject.toLowerCase() !== subject) {
            return false
        }

        if (search) {
            const searchableText = `${book.title} ${book.description} ${book.subject}`.toLowerCase()
            if (!searchableText.includes(search)) {
                return false
            }
        }

        return true
    })

    if (filteredBooks.length === 0) {
        return (
            <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No books found</h3>
                <p className="text-muted-foreground">
                    Try adjusting your filters or search to find more books
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    )
}