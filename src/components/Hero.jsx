import { scrollToSection } from '../hooks/useScrollSpy'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-500 z-0" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.8) 40px,rgba(255,255,255,0.8) 41px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(255,255,255,0.5) 80px,rgba(255,255,255,0.5) 81px)',
        }}
      />

      {/* Sand horizon gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-200/10 to-transparent z-[2]" />

      {/* Right-side image placeholder */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 z-[1] hidden lg:flex img-placeholder opacity-20">
        <span className="text-white/60">Resort Beach Photo</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">

          <p className="animate-fade-up font-body text-[11px] tracking-[4px] uppercase text-ocean-200 mb-6">
            ✦ &nbsp;Daytona Beach Shores, Florida&nbsp; ✦
          </p>

          <h1 className="animate-fade-up-delay-1 font-display text-5xl lg:text-7xl font-bold text-white leading-[1.06] mb-7">
            Make Seven Seas<br />
            <em className="italic text-ocean-200">Your</em> Daytona<br />
            Beach Getaway
          </h1>

          <p className="animate-fade-up-delay-2 font-body text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
            Enjoy direct beach access, oceanfront relaxation, spacious
            condo-style accommodations, and family-friendly amenities in
            sunny Daytona Beach Shores.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Vacation With Us
            </button>
            <button
              onClick={() => scrollToSection('rooms')}
              className="btn-outline-white"
            >
              View Rooms
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-outline-white"
            >
              Contact Resort
            </button>
          </div>
        </div>
      </div>

      {/* Floating quick-info card */}
      <div className="absolute bottom-10 right-8 z-10 hidden xl:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 w-64">
          <p className="font-body text-[10px] tracking-[2px] uppercase text-ocean-200 mb-3">
            Quick Info
          </p>
          <div className="font-body text-sm text-white/90 space-y-1.5 leading-relaxed">
            <div>📍 2433 S. Atlantic Ave.</div>
            <div>📞 (386) 257-1180</div>
            <div>🗓 Check-In: Sat after 3 PM</div>
            <div>🔑 Check-Out: Sat before 10 AM</div>
          </div>
        </div>
      </div>

      {/* Wave SVG divider */}
      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 lg:h-14">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
