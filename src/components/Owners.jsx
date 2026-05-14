import { OWNER_RESOURCES } from '../data/content'
import { scrollToSection } from '../hooks/useScrollSpy'

export default function Owners() {
  return (
    <section id="owners" className="py-20 lg:py-28 bg-ocean-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-[11px] tracking-[3px] uppercase text-ocean-200 mb-3">
            Timeshare Owners
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Owner Resources
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-ocean-300 to-ocean-500 rounded mx-auto mb-6" />
          <p className="font-body text-base text-white/60 max-w-lg mx-auto leading-relaxed">
            This area is for Seven Seas Resort timeshare owners and returning
            guests. Access your documents, newsletters, and forms below.
          </p>
        </div>

        {/* Resource cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {OWNER_RESOURCES.map(({ icon, title, desc, href }) => (
            <a
              key={title}
              href={href}
              className="block bg-white/7 border border-white/12 rounded-lg p-6
                         transition-all duration-200 no-underline
                         hover:bg-ocean-200/10 hover:border-ocean-300/40 hover:-translate-y-0.5"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
                {desc}
              </p>
              <span className="font-body text-xs text-ocean-300 uppercase tracking-widest">
                Access Document →
              </span>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center">
          <p className="font-body text-sm text-white/40 mb-4">
            Questions about your ownership? Contact the resort office.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-outline-white"
          >
            Contact the Office
          </button>
        </div>

      </div>
    </section>
  )
}
