import { scrollToSection } from '../hooks/useScrollSpy'

export default function CtaBanner() {
  return (
    <div className="bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-600 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl lg:text-5xl text-white mb-4 leading-tight">
          Ready to Plan Your Getaway?
        </h2>
        <p className="font-body text-lg text-white/70 mb-10 max-w-md mx-auto leading-relaxed">
          Contact our friendly office team to check availability and start
          planning your Seven Seas vacation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary bg-gradient-to-br from-ocean-200 to-ocean-300 !text-ocean-900 hover:from-ocean-100 hover:to-ocean-200"
          >
            Contact the Office
          </button>
          <a
            href="tel:3862571180"
            className="btn-outline-white"
          >
            📞 &nbsp;(386) 257-1180
          </a>
        </div>
      </div>
    </div>
  )
}
