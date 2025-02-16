import { BookGrid } from "@/components/books/book-grid"
import { BookSearch } from "@/components/books/book-search"
import { BookStats } from "@/components/books/book-stats"
import { GradeFilter } from "@/components/books/grade-filter"
import { SubjectFilter } from "@/components/books/subject-filter"
import { Suspense } from "react"

export default function BooksPage() {
    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Books Center</h1>
                    <p className="text-muted-foreground">
                        Access your curriculum books and supplementary study materials
                    </p>
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <BookSearch />
                </Suspense>
                
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="grid gap-6 md:grid-cols-[240px_1fr]">

                        <aside className="space-y-6">
                            <BookStats />
                            <GradeFilter />
                            <SubjectFilter />
                        </aside>

                        <main>
                            <BookGrid />
                        </main>
                    </div>
                </Suspense>
            </div>
        </div>
    )
}