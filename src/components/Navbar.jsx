import { useState } from 'react'
import { NAV_LINKS } from '../data/content'
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy()

  const handleNav = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-900/95 backdrop-blur-md border-b border-white/8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="text-left focus:outline-none group"
        >
          <div className="font-display text-xl font-bold text-white tracking-tight group-hover:text-ocean-200 transition-colors">
            Seven Seas Resort
          </div>
          <div className="font-body text-[9px] tracking-[3px] uppercase text-ocean-300 mt-0.5">
            Daytona Beach Shores, Florida
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`font-body text-[11px] tracking-[1.5px] uppercase transition-all duration-200 pb-0.5 border-b-2 ${
                activeId === id
                  ? 'text-ocean-200 border-ocean-300'
                  : 'text-white/80 border-transparent hover:text-ocean-200 hover:border-ocean-300/50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-ocean-900/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`font-body text-sm tracking-[1.5px] uppercase text-left transition-colors ${
                activeId === id ? 'text-ocean-200' : 'text-white/80 hover:text-ocean-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
