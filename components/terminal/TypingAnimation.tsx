'use client'

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
  speed?: number
  delay?: number
  onComplete?: () => void
  className?: string
}

export function TypingAnimation({
  text,
  speed = 20,
  delay = 0,
  onComplete,
  className = ''
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(delay === 0)

  useEffect(() => {
    if (delay > 0 && !started) {
      const delayTimeout = setTimeout(() => {
        setStarted(true)
      }, delay)
      return () => clearTimeout(delayTimeout)
    }
  }, [delay, started])

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete, started])

  return <span className={className}>{displayedText}</span>
}
