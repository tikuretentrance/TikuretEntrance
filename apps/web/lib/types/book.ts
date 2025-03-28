export interface Book {
    id: string
    title: string
    description: string
    grade: string
    subject: string
    stream?: string
    type: "Textbook" | "Study Guide" | "Workbook"
    format: "PDF" | "Interactive"
    coverUrl: string
    downloadUrl: string
    chapters: string[]
    recentlyViewed: boolean
    favorite: boolean
    publisher: string
    publishYear: number
    language: string
    pages: number
    fileSize: string
    curriculum: string
    pdfUrl: string
}