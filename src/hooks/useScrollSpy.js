import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/content'

export function useScrollSpy() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80
      let current = 'home'
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id)
        if (el && scrollY >= el.offsetTop) {
          current = link.id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeId
}

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
