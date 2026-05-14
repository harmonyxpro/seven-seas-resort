import { ROOMS } from '../data/content'
import { scrollToSection } from '../hooks/useScrollSpy'

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Accommodations</p>
          <h2 className="section-title mx-auto">Find Your Perfect Unit</h2>
          <div className="divider mx-auto" />
          <p className="section-sub mx-auto">
            From cozy studios to penthouse suites, every unit features a full
            kitchen and full resort access.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROOMS.map(({ type, occ, kitchen, view, desc, featured }) => (
            <div
              key={type}
              className={`card flex flex-col ${featured ? 'ring-2 ring-ocean-400' : ''}`}
            >
              {/* Image placeholder */}
              <div className="img-placeholder h-44 relative">
                <span>{view}</span>
                {featured && (
                  <span className="absolute top-3 right-3 bg-ocean-600 text-white font-body text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                    Penthouse
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold text-ocean-900 mb-3 leading-tight">
                  {type}
                </h3>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-body text-[10px] bg-ocean-50 text-ocean-700 px-3 py-1 rounded-full tracking-wide">
                    {occ}
                  </span>
                  <span className="font-body text-[10px] bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full tracking-wide">
                    {kitchen}
                  </span>
                </div>

                <p className="font-body text-sm text-slate-500 leading-relaxed flex-1 mb-5">
                  {desc}
                </p>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-dark text-center w-full"
                >
                  Request Info
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
