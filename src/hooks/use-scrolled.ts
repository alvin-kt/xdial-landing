import { useEffect, useState } from 'react'

/**
 * Tracks whether the page has scrolled past `threshold` pixels.
 *
 * Used to give the sticky header a border and backdrop only once it is
 * overlapping content — at the top of the page it stays flush with the hero,
 * exactly as in the reference design.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return scrolled
}
