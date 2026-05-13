import { useEffect, useMemo, useState } from 'react'

type TypeWriterProps = {
  phrases: string[]
}

const pauseAfterTypingSeconds = .5
const deleteSpeedSeconds = 0.034
const typeSpeedSeconds = 0.05

function secondsToMilliseconds(seconds: number) {
  return seconds * 1000
}

export default function TypeWriter({ phrases }: TypeWriterProps) {
  const cleanPhrases = useMemo(
    () => phrases.filter((phrase) => phrase.trim().length > 0),
    [phrases],
  )
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visibleCharacters, setVisibleCharacters] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (cleanPhrases.length === 0) {
      return
    }

    const phrase = cleanPhrases[phraseIndex]
    const atEnd = visibleCharacters === phrase.length
    const atStart = visibleCharacters === 0
    const delay = secondsToMilliseconds(
      atEnd
        ? pauseAfterTypingSeconds
        : isDeleting
          ? deleteSpeedSeconds
          : typeSpeedSeconds,
    )

    const timer = window.setTimeout(() => {
      if (atEnd && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (atStart && isDeleting) {
        setIsDeleting(false)
        setPhraseIndex((current) => (current + 1) % cleanPhrases.length)
        return
      }

      setVisibleCharacters((current) => current + (isDeleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [cleanPhrases, isDeleting, phraseIndex, visibleCharacters])

  if (cleanPhrases.length === 0) {
    return null
  }

  return (
    <span aria-live="polite">
      {cleanPhrases[phraseIndex].slice(0, visibleCharacters)}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 bg-[var(--color-secondary)]" />
    </span>
  )
}
