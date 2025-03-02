import { useEffect, useCallback } from "react"
import { toast } from "sonner"

export function useExamSecurity(started: boolean, examLocked: boolean, terminateExam: (reason: string) => void) {
    const preventNavigation = useCallback((e: BeforeUnloadEvent) => {
        if (started && !examLocked) {
            e.preventDefault()
            e.returnValue = "You are in the middle of an exam. Are you sure you want to leave?"
            return e.returnValue
        }
    }, [started, examLocked])

    const handleVisibilityChange = useCallback(() => {
        if (document.visibilityState === "hidden" && started && !examLocked) {
            toast.error("Tab switching detected. Exam terminated.", { position: "top-center" })
            terminateExam("Tab switching detected")
        }
    }, [started, examLocked, terminateExam])

    const preventContextMenu = useCallback((e: MouseEvent) => {
        if (started && !examLocked) {
            e.preventDefault()
        }
    }, [started, examLocked])

    useEffect(() => {
        if (started && !examLocked) {
            document.body.style.userSelect = "none"
            window.addEventListener("beforeunload", preventNavigation)
            document.addEventListener("visibilitychange", handleVisibilityChange)
            document.addEventListener("contextmenu", preventContextMenu)
        }

        return () => {
            document.body.style.userSelect = ""
            window.removeEventListener("beforeunload", preventNavigation)
            document.removeEventListener("visibilitychange", handleVisibilityChange)
            document.removeEventListener("contextmenu", preventContextMenu)
        }
    }, [started, examLocked, preventNavigation, handleVisibilityChange, preventContextMenu])
}