import { AMENITIES } from '../data/content'

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-gradient-to-b from-ocean-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title mx-auto">Resort Amenities</h2>
          <div className="divider mx-auto" />
          <p className="section-sub mx-auto">
            Everything you need for the perfect beach vacation — all in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {AMENITIES.map(({ icon, title, desc }) => (
            <div key={title} className="card p-6">
              <div className="text-4xl mb-3">{icon}</div>
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
    </section>
  )
}
