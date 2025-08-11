import { useEffect } from 'react'

export function useScrollReveal(
  className = 'fade-up',
  showClass = 'show',
  stagger = 0.15
) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(`.${className}`)
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const index = elements.indexOf(target)
            const delay = index * stagger
            target.style.animationDelay = `${delay}s`
            target.classList.add(showClass)
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [className, showClass, stagger])
}
