import { useState, useEffect, useCallback } from "react"

export function useExamTimer(duration: number, onTimeUp: () => void) {
    const [timeLeft, setTimeLeft] = useState(duration * 60)
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null)

    const startTimer = useCallback(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    onTimeUp()
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        setTimerInterval(timer)
    }, [onTimeUp])

    const stopTimer = useCallback(() => {
        if (timerInterval) clearInterval(timerInterval)
    }, [timerInterval])

    useEffect(() => {
        return () => stopTimer()
    }, [stopTimer])

    return { timeLeft, startTimer, stopTimer }
}