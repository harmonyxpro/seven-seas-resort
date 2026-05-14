import { ATTRACTIONS } from '../data/content'

export default function Attractions() {
  return (
    <section
      id="attractions"
      className="py-20 lg:py-28 bg-gradient-to-b from-ocean-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Sidebar text */}
          <div className="lg:col-span-2">
            <p className="section-label">Explore the Area</p>
            <h2 className="section-title">Daytona Beach Shores &amp; Beyond</h2>
            <div className="divider" />
            <p className="font-body text-lg text-slate-500 leading-relaxed mb-8">
              Seven Seas Resort is your gateway to everything the Daytona Beach
              area has to offer — from world-famous white sand beaches to
              deep-sea fishing, live entertainment, and a short drive to
              Florida's world-class theme parks.
            </p>
            <a
              href="https://www.daytonachamber.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Daytona Events Calendar ↗
            </a>
          </div>

          {/* Attraction cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ATTRACTIONS.map(({ icon, title, desc }) => (
              <div key={title} className="card p-5">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-display text-base font-semibold text-ocean-900 mb-2 leading-tight">
                  {title}
                </h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
