import { useState } from 'react'
import { RESORT_INFO } from '../data/content'

const infoRows = [
  { icon: '📍', label: 'Address',              value: `${RESORT_INFO.address}\n${RESORT_INFO.city}` },
  { icon: '📞', label: 'Phone',                value: RESORT_INFO.phone,  href: `tel:${RESORT_INFO.phone.replace(/\D/g,'')}` },
  { icon: '📠', label: 'Fax',                  value: RESORT_INFO.fax },
  { icon: '✉️', label: 'Email',                value: RESORT_INFO.email,  href: `mailto:${RESORT_INFO.email}` },
  { icon: '🕐', label: 'Office Hours',         value: RESORT_INFO.hours.map(h => `${h.days}: ${h.time}`).join('\n') },
  { icon: '🗓', label: 'Check-In / Check-Out', value: `Check-In: ${RESORT_INFO.checkin}\nCheck-Out: ${RESORT_INFO.checkout}` },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title mx-auto">Contact Seven Seas Resort</h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Info panel */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-ocean-900 mb-7">
              Resort Information
            </h3>

            <div className="space-y-6 mb-8">
              {infoRows.map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="text-xl mt-0.5 shrink-0">{icon}</div>
                  <div>
                    <div className="font-body text-[10px] tracking-widest uppercase text-ocean-500 mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm text-ocean-900 whitespace-pre-line leading-relaxed hover:text-ocean-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-ocean-900 whitespace-pre-line leading-relaxed">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-slate-100">
              <iframe
                title="Seven Seas Resort Location"
                src={RESORT_INFO.mapEmbed}
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-ocean-900 mb-7">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-10 text-center">
                <div className="text-5xl mb-4">🌊</div>
                <h4 className="font-display text-2xl text-ocean-900 mb-3">Message Sent!</h4>
                <p className="font-body text-slate-500 leading-relaxed">
                  Thank you for reaching out. Our office team will be in touch
                  with you shortly. We look forward to welcoming you to
                  Seven Seas Resort!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name',    label: 'Full Name',        type: 'text',   placeholder: 'Your name',        required: true },
                  { id: 'email',   label: 'Email Address',    type: 'email',  placeholder: 'your@email.com',   required: true },
                  { id: 'phone',   label: 'Phone Number',     type: 'tel',    placeholder: '(555) 555-5555',   required: false },
                  { id: 'guests',  label: 'Number of Guests', type: 'number', placeholder: '2',                required: false },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block font-body text-[10px] tracking-widest uppercase text-slate-400 mb-1.5"
                    >
                      {label}{required && ' *'}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      value={form[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="form-input"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-[10px] tracking-widest uppercase text-slate-400 mb-1.5"
                  >
                    Requested Dates / Questions
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your desired travel dates, unit preferences, or any questions you have..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input resize-y"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-center py-4 text-sm">
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
