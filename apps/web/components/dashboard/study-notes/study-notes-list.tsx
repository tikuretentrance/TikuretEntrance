"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { BookOpen, ArrowRight, Bookmark } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { StudyNoteListInterface } from "@/lib/types/study-note"
import { noteListData } from "@/lib/study-notes"

interface StudyNotesListProps {
  searchQuery: string
}


export function StudyNotesList({ searchQuery }: StudyNotesListProps) {
  const [notes, setNotes] = useState<StudyNoteListInterface[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setNotes(noteListData)
      } catch (error: any) {
        toast.error("Error fetching notes:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, [])

  const toggleBookmark = (noteId: string) => {
    setNotes(prev => prev.map(note =>
      note.id === noteId
        ? { ...note, bookmarked: !note.bookmarked }
        : note
    ))
  }

  const filteredNotes = notes.filter(note => {
    if (!searchQuery) return true
    const searchText = `${note.title} ${note.subject} ${note.topic} ${note.summary}`.toLowerCase()
    return searchText.includes(searchQuery.toLowerCase())
  })

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {Array(4).fill(0).map((_, i) => (
          <Card key={i} className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-x-2">
                <Skeleton className="h-5 w-20 inline-block" />
                <Skeleton className="h-5 w-20 inline-block" />
              </div>
              <Skeleton className="h-20 w-full" />
            </div>
          </Card>
        ))}
      </div>
    )
  }

  if (filteredNotes.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-muted-foreground">No study notes found matching your search.</p>
      </Card>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filteredNotes.map((note) => (
        <Card key={note.id} className="p-6 hover:bg-muted/50 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">{note.title}</h3>
              </div>
              <Button
                variant={note.bookmarked ? "secondary" : "ghost"}
                size="icon"
                onClick={() => toggleBookmark(note.id)}
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Badge>{note.subject}</Badge>
              <Badge variant="outline">{note.topic}</Badge>
            </div>

            <p className="text-muted-foreground">{note.summary}</p>

            <div className="flex items-center justify-between pt-4">
              <span className="text-sm text-muted-foreground">
                Updated {new Date(note.lastUpdated).toLocaleDateString()}
              </span>
              <Button asChild>
                <Link href={`/dashboard/study-notes/${note.id}`}>
                  Read Notes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}