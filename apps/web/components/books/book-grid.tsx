"use client"

import { useSearchParams } from "next/navigation"
import { books } from "@/lib/books-data"
import { BookCard } from "./book-card"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { Book } from "@/lib/types/book"

export function BookGrid() {
  const searchParams = useSearchParams()
  const grade = searchParams.get("grade")
  const subject = searchParams.get("subject")
  const search = searchParams.get("search")?.toLowerCase()

  const [loading, setLoading] = useState(true)
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [cachedResults, setCachedResults] = useState<Record<string, Book[]>>({})

  useEffect(() => {
    // Create a cache key based on the current filters
    const cacheKey = `${grade || 'all'}-${subject || 'all'}-${search || ''}`

    // Check if we have cached results for this filter combination
    if (cachedResults[cacheKey]) {
      setFilteredBooks(cachedResults[cacheKey])
      setLoading(false)
      return
    }

    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const filtered = books.filter(book => {
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

      // Cache the results
      setCachedResults(prev => ({
        ...prev,
        [cacheKey]: filtered
      }))

      setFilteredBooks(filtered)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [grade, subject, search])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(12).fill(0).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    )
  }

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}