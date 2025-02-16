import { Book } from "./types"

export const books: Book[] = [
  {
    id: "math-g12-1",
    title: "Mathematics Grade 12",
    description: "Official Grade 12 Mathematics textbook covering advanced topics in algebra, calculus, and geometry",
    grade: "grade-12",
    subject: "Mathematics",
    stream: "Natural Science",
    type: "Textbook",
    format: "PDF",
    coverUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    downloadUrl: "/books/math-g12.pdf",
    pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
    chapters: [
      "Functions and Graphs",
      "Limits and Continuity",
      "Differentiation",
      "Integration",
      "Vectors in 3D"
    ],
    recentlyViewed: true,
    favorite: false,
    publisher: "Ministry of Education, Ethiopia",
    publishYear: 2024,
    language: "English",
    pages: 324,
    fileSize: "15.2 MB",
    curriculum: "Ethiopian Secondary Education"
  },
]