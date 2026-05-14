import { NAV_LINKS, RESORT_INFO } from '../data/content'
import { scrollToSection } from '../hooks/useScrollSpy'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ocean-900 text-white/65 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-display text-2xl font-bold text-white mb-1">
              Seven Seas Resort
            </h2>
            <p className="font-body text-[10px] tracking-[3px] uppercase text-ocean-200 mb-5">
              Daytona Beach Shores, Florida
            </p>
            <p className="font-body text-sm leading-relaxed mb-6 max-w-xs">
              Your beachfront home away from home on the Atlantic Ocean.
              Condo-style comfort, resort-style amenities, and Florida sunshine
              year-round.
            </p>
            <div className="font-body text-sm space-y-2">
              <a href={`tel:${RESORT_INFO.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 hover:text-ocean-200 transition-colors">
                <span>📞</span> {RESORT_INFO.phone}
              </a>
              <a href={`mailto:${RESORT_INFO.email}`} className="flex items-center gap-2 hover:text-ocean-200 transition-colors">
                <span>✉️</span> {RESORT_INFO.email}
              </a>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>{RESORT_INFO.address}, {RESORT_INFO.city}</span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[10px] tracking-[3px] uppercase text-ocean-200 mb-5">
              Navigation
            </p>
            <nav className="space-y-2.5">
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block font-body text-sm text-white/65 hover:text-ocean-200 transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Office Hours */}
          <div>
            <p className="font-body text-[10px] tracking-[3px] uppercase text-ocean-200 mb-5">
              Office Hours
            </p>
            <div className="font-body text-sm space-y-1.5 mb-6">
              {RESORT_INFO.hours.map(({ days, time }) => (
                <p key={days}>
                  <span className="text-white/90">{days}:</span> {time}
                </p>
              ))}
            </div>
            <div className="border-t border-white/10 pt-5 font-body text-sm space-y-2">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-ocean-300 block mb-0.5">
                  Check-In
                </span>
                {RESORT_INFO.checkin}
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-ocean-300 block mb-0.5">
                  Check-Out
                </span>
                {RESORT_INFO.checkout}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 font-body text-xs text-white/40">
          <p>© {year} Seven Seas Resort. All rights reserved.</p>
          <p>
            Proudly managed by{' '}
            <span className="text-ocean-300">{RESORT_INFO.management}</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
