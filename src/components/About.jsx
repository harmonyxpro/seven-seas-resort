import { scrollToSection } from '../hooks/useScrollSpy'

const stats = [
  { value: 'Direct', label: 'Beach Access' },
  { value: 'Oceanfront', label: 'Pool' },
  { value: 'Condo-Style', label: 'Living' },
]

const imagePlaceholders = [
  { label: 'Beach View',     tall: true },
  { label: 'Pool Deck',      tall: false },
  { label: 'Unit Interior',  tall: false },
  { label: 'Ocean Sunrise',  tall: false },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="section-label">About the Resort</p>
            <h2 className="section-title">A True Florida Beach Experience</h2>
            <div className="divider" />

            <p className="font-body text-lg text-slate-500 leading-relaxed mb-5">
              Located directly on the beach in Daytona Beach Shores,{' '}
              <strong className="text-ocean-800 font-bold">Seven Seas Resort</strong>{' '}
              offers a relaxed Florida vacation experience with condo-style
              accommodations, an outdoor pool, game room, fishing nearby, and
              easy access to shopping, dining, entertainment, golf, boating, and
              world-famous Daytona Beach.
            </p>

            <p className="font-body text-lg text-slate-500 leading-relaxed mb-5">
              Planning a longer adventure? Orlando's greatest theme parks —
              Walt Disney World, EPCOT, Universal Studios, and SeaWorld — are
              within an easy one-hour drive, as is the iconic Kennedy Space Center
              to the south.
            </p>

            <p className="font-body text-lg text-slate-500 leading-relaxed mb-10">
              Whether you're an owner returning for your annual week or a
              first-time guest discovering the Florida coast, Seven Seas Resort
              is your home away from home — where the only agenda is relaxation.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mb-10">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-ocean-600">
                    {value}
                  </div>
                  <div className="font-body text-[10px] tracking-widest uppercase text-slate-400 mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Plan Your Stay
            </button>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-3">
            {imagePlaceholders.map(({ label, tall }) => (
              <div
                key={label}
                className={`img-placeholder rounded-lg ${tall ? 'col-span-2 h-52' : 'h-40'}`}
              >
                <span>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
