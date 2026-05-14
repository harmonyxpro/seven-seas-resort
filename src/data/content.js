export const NAV_LINKS = [
  { label: 'Home',        id: 'home' },
  { label: 'About',       id: 'about' },
  { label: 'Amenities',   id: 'amenities' },
  { label: 'Rooms',       id: 'rooms' },
  { label: 'Attractions', id: 'attractions' },
  { label: 'Owners',      id: 'owners' },
  { label: 'Contact',     id: 'contact' },
]

export const AMENITIES = [
  { icon: '🏖️', title: 'Direct Beach Access',         desc: 'Step right onto the Atlantic sand from our resort — the ocean is your backyard.' },
  { icon: '🏊', title: 'Oceanfront Pool',              desc: 'Sparkling outdoor pool overlooking the Atlantic Ocean.' },
  { icon: '🎮', title: 'Game Room / Arcade',           desc: 'Fun for all ages with our on-site video arcade and game room.' },
  { icon: '🍳', title: 'Full Kitchens',                desc: 'All units include fully equipped kitchens for home-style comfort.' },
  { icon: '❄️', title: 'Air Conditioning',             desc: 'Stay cool year-round with central air conditioning in every unit.' },
  { icon: '🔥', title: 'Gas Grills',                   desc: 'Fire up a cookout with our outdoor gas grills — perfect for fresh catches.' },
  { icon: '👕', title: 'Laundry Facilities',           desc: 'Convenient on-site laundry so you can pack light and stay longer.' },
  { icon: '🎣', title: 'Fishing Nearby',               desc: 'World-class fishing with charters available at local marinas.' },
  { icon: '⛵', title: 'Boating Nearby',               desc: 'Local marinas offer charters, rentals, and ocean adventures.' },
  { icon: '⛳', title: 'Golf Nearby',                  desc: 'Tee off at acclaimed courses just minutes from the resort.' },
  { icon: '🎾', title: 'Tennis Nearby',                desc: 'Courts nearby for a friendly match on your vacation.' },
  { icon: '🏄', title: 'Water Sports',                 desc: 'Sailing, snorkeling, jet skis, and more at your fingertips.' },
  { icon: '🛍️', title: 'Shopping & Dining',            desc: 'Restaurants, shops, and entertainment just minutes away.' },
]

export const ROOMS = [
  {
    type: 'Studio / Hotel Unit',
    occ: 'Max 4 guests',
    kitchen: 'Full Kitchen',
    view: 'Various Views',
    desc: 'Cozy and efficient, our studio units are perfect for couples or small families looking for a comfortable beach retreat.',
  },
  {
    type: '1 Bedroom Condo',
    occ: 'Private 2 / Max 4',
    kitchen: 'Full Kitchen',
    view: 'Condo View',
    desc: 'A spacious one-bedroom condo with a separate living area, giving you room to relax after a full day in the sun.',
  },
  {
    type: '1 Bedroom Ocean View',
    occ: 'Private 2 / Max 4',
    kitchen: 'Full Kitchen',
    view: 'Ocean View',
    desc: 'Wake up to stunning Atlantic views from your private one-bedroom condo with full kitchen and open living space.',
  },
  {
    type: '1 Bedroom Ocean Front',
    occ: 'Private 2 / Max 4',
    kitchen: 'Full Kitchen',
    view: 'Oceanfront',
    desc: 'Premium oceanfront units with unobstructed views of the Atlantic — fall asleep to the sound of the waves.',
  },
  {
    type: '2 Bedroom Condo',
    occ: 'Private 4 / Max 6',
    kitchen: 'Full Kitchen',
    view: 'Condo View',
    desc: 'Ideal for families, this two-bedroom condo offers generous space and comfortable accommodations for everyone.',
  },
  {
    type: '2 Bedroom Ocean View',
    occ: 'Private 4 / Max 6',
    kitchen: 'Full Kitchen',
    view: 'Ocean View',
    desc: 'Two bedrooms with beautiful ocean views — plenty of room for the whole family to enjoy a Florida vacation.',
  },
  {
    type: '2BR/2BA Penthouse Ocean View',
    occ: 'Private 4 / Max 6',
    kitchen: 'Full Kitchen',
    view: 'Penthouse Ocean View',
    desc: 'Top-floor luxury penthouse with panoramic ocean views, two full baths, and upscale finishes throughout.',
    featured: true,
  },
  {
    type: '2BR/2BA Penthouse Street Side',
    occ: 'Private 4 / Max 6',
    kitchen: 'Full Kitchen',
    view: 'Penthouse Street Side',
    desc: 'Spacious penthouse-level suite with resort and coastal views on the street side of the property.',
    featured: true,
  },
]

export const ATTRACTIONS = [
  { icon: '🌊', title: 'World-Famous Daytona Beach',  desc: 'Miles of iconic hard-packed sand beach — perfect for swimming, sunbathing, and beach driving.' },
  { icon: '🚤', title: 'Boating & Water Sports',      desc: 'Rent boats or book charters from local marinas. Sailing, jet skiing, snorkeling, and more.' },
  { icon: '⛳', title: 'Golf',                        desc: 'Daytona\'s area courses are among Florida\'s finest. Tee up in paradise.' },
  { icon: '🐟', title: 'Deep-Sea Fishing',            desc: 'Book a charter at local marinas for world-class deep-sea and inshore fishing.' },
  { icon: '🎡', title: 'Live Entertainment & Shopping', desc: 'From boardwalk fun to upscale boutiques, Daytona Beach has it all.' },
  { icon: '🏰', title: 'Orlando Theme Parks',         desc: 'Walt Disney World, Universal Studios, EPCOT, and SeaWorld are about one hour away.' },
  { icon: '🚀', title: 'Kennedy Space Center',        desc: 'Explore America\'s space legacy at Kennedy Space Center, a short drive south.' },
  { icon: '🛒', title: 'Grocery & Dining',            desc: 'Supermarkets and world-class restaurants are just minutes from the resort.' },
]

export const OWNER_RESOURCES = [
  { icon: '📄', title: 'Owner Documents',           desc: 'Access important resort ownership documents and agreements.', href: '#' },
  { icon: '📰', title: 'Newsletters',               desc: 'Stay up to date with the latest resort news and owner updates.', href: '#' },
  { icon: '📋', title: 'Miscellaneous Forms',       desc: 'Download additional owner forms as needed.', href: '#' },
  { icon: '📅', title: 'Timeshare Calendar',        desc: 'View and manage your ownership calendar and check-in schedule.', href: '#' },
  { icon: '👥', title: 'Guest Authorization Form',  desc: 'Authorize a guest to use your timeshare week on your behalf.', href: '#' },
  { icon: '🤝', title: 'Rental Agreement',          desc: 'Download and complete the rental agreement form for your unit.', href: '#' },
]

export const RESORT_INFO = {
  name:    'Seven Seas Resort',
  address: '2433 S. Atlantic Ave.',
  city:    'Daytona Beach Shores, FL 32118',
  phone:   '(386) 257-1180',
  fax:     '(386) 258-5963',
  email:   'sevenseas1@cfl.rr.com',
  hours: [
    { days: 'Sunday – Friday', time: '9:00 AM – 5:00 PM' },
    { days: 'Saturday',        time: '8:00 AM – 7:00 PM' },
  ],
  checkin:  'Saturday after 3:00 PM',
  checkout: 'Saturday before 10:00 AM',
  management: 'TJW Management Company',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.059!2d-80.9901!3d29.1712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d7d20a4e9d4b%3A0x0!2s2433+S+Atlantic+Ave%2C+Daytona+Beach+Shores%2C+FL+32118!5e0!3m2!1sen!2sus!4v1',
}
