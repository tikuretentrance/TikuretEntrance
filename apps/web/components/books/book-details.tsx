"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Info, BookOpen, Download, Heart } from "lucide-react"
import { Book as BookType } from "@/lib/types"
import Image from "next/image"
import { Document, Page, pdfjs } from "react-pdf"
import '@react-pdf-viewer/core/lib/styles/index.css'

// PDF.js worker config
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

interface BookDetailsProps {
    book: BookType
}

export function BookDetails({ book }: BookDetailsProps) {
    const [numPages, setNumPages] = useState<number | null>(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [scale, setScale] = useState(1.0)
    const [viewMode, setViewMode] = useState("single") // "single" or "continuous"

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                <Card className="p-6">
                    <Tabs defaultValue="reader" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="reader" className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                PDF Reader
                            </TabsTrigger>
                            <TabsTrigger value="info" className="flex items-center gap-2">
                                <Info className="h-4 w-4" />
                                Book Info
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="reader" className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setScale(scale - 0.1)}
                                        disabled={scale <= 0.5}
                                    >
                                        Zoom Out
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setScale(scale + 0.1)}
                                        disabled={scale >= 1.2}
                                    >
                                        Zoom In
                                    </Button>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Page {pageNumber} of {numPages}
                                </div>
                            </div>

                            {/* Toggle between single page and continuous scroll */}
                            <div className="flex justify-end space-x-2">
                                <Button
                                    variant={viewMode === "single" ? "default" : "outline"}
                                    onClick={() => setViewMode("single")}
                                >
                                    Single Page
                                </Button>
                                <Button
                                    variant={viewMode === "continuous" ? "default" : "outline"}
                                    onClick={() => setViewMode("continuous")}
                                >
                                    Continuous Scroll
                                </Button>
                            </div>

                            <div className="border rounded-lg p-4 bg-white overflow-hidden">
                                {viewMode === "single" ? (
                                    <Document
                                        file={book.pdfUrl}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                        <Page pageNumber={pageNumber} scale={scale} 
                                        
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                        />
                                    </Document>
                                ) : (
                                    <Document
                                        file={book.pdfUrl}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                        {/* Display all pages for continuous scroll */}
                                        {Array.from(new Array(numPages), (el, index) => (
                                            <Page key={index} pageNumber={index + 1} scale={scale}  renderTextLayer={false}
                                            renderAnnotationLayer={false} />
                                        ))}
                                    </Document>
                                )}
                            </div>

                            {viewMode === "single" && (
                                <div className="flex justify-between">
                                    <Button
                                        variant="outline"
                                        onClick={() => setPageNumber(pageNumber - 1)}
                                        disabled={pageNumber <= 1}
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        onClick={() => setPageNumber(pageNumber + 1)}
                                        disabled={pageNumber >= (numPages || 1)}
                                    >
                                        Next
                                    </Button>
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="info">
                            <div className="space-y-6">
                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                    <Image
                                        src={book.coverUrl}
                                        alt={book.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold">{book.title}</h2>
                                    <p className="text-muted-foreground">{book.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">{book.grade}</Badge>
                                        <Badge variant="outline">{book.subject}</Badge>
                                        {book.stream && <Badge>{book.stream}</Badge>}
                                    </div>

                                    <div className="grid gap-4 text-sm">
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="font-medium">Publisher</div>
                                            <div>{book.publisher}</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="font-medium">Publish Year</div>
                                            <div>{book.publishYear}</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="font-medium">Language</div>
                                            <div>{book.language}</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="font-medium">Pages</div>
                                            <div>{book.pages}</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="font-medium">File Size</div>
                                            <div>{book.fileSize}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </Card>

                <div className="space-y-6">
                    <Card className="p-6">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">Chapters</h3>
                                <span className="text-sm text-muted-foreground">
                                    {book.chapters.length} chapters
                                </span>
                            </div>

                            <div className="space-y-2">
                                {book.chapters.map((chapter, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-2">
                                            <BookOpen className="h-4 w-4 text-primary" />
                                            <span>{chapter}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    <div className="flex gap-4">
                        <Button className="flex-1" asChild>
                            <a href={book.downloadUrl} download>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                            </a>
                        </Button>
                        <Button variant="outline" className="flex-1">
                            <Heart className="mr-2 h-4 w-4" />
                            Favorite
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
