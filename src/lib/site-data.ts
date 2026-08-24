export const images = {
  portrait: "/images/Screenshot_20260730_164454_Instagram.jpg",
  tanpuraBw: "/images/Screenshot_20260730_164423_Instagram.jpg",
  poster: "/images/Screenshot_20260730_164342_Instagram.jpg",
  saree: "/images/Screenshot_20260730_164438_Instagram.jpg",
  field: "/images/Screenshot_20260730_164430_Instagram.jpg",
  blackDress: "/images/Screenshot_20260730_164406_Instagram.jpg",
  candid: "/images/Screenshot_20260730_164401_Instagram.jpg",
};


// export const images = {
//   portrait: "/images/lookback.webp",
//   tanpuraBw: "/images/mirror.webp",
//   poster: "/images/poster.webp",
//   saree: "/images/saree.webp",
//   field: "/images/studio.webp",
//   blackDress: "/images/mirror2.webp",
//   candid: "/images/veena.webp",
// };




export const artist = {
  name: "Niranjana Rema",
  role: "Playback & Carnatic Vocalist · Vocal Coach",
  phone: "+918921467689",
  phoneDisplay: "+91 89214 67689",
  email: "npushpamgathan@gmail.com",
  location: "Tripunithura, Kochi, Kerala",
  whatsapp: "918921467689",
  // Web3Forms Key for direct background email delivery (Get free key at https://web3forms.com)
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || "",
};

export const whatsappLink = (msg: string) =>
  `https://wa.me/${artist.whatsapp}?text=${encodeURIComponent(msg)}`;

export const stats = [
  { value: 15, suffix: "+", label: "Years on stage" },
  { value: 300, suffix: "+", label: "Live concerts" },
  { value: 250, suffix: "+", label: "Students trained" },
  { value: 8, suffix: "", label: "Languages performed" },
];

export const genres = [
  "Carnatic Classical",
  "Devotional",
  "Malayalam Playback",
  "Ghazal",
  "Bollywood",
  "Light Music",
  "Fusion",
  "Pop",
];

export const services = [
  {
    title: "Live Concerts",
    desc: "Full-band or classical Kacheri formats for auditoriums and festivals.",
  },
  {
    title: "Wedding Performances",
    desc: "Reception sets, temple ceremonies and intimate sangeet evenings.",
  },
  { title: "Corporate Events", desc: "Curated sets for launches, galas and annual celebrations." },
  { title: "Private Shows", desc: "House concerts and salon performances for small gatherings." },
  { title: "Studio Recording", desc: "Playback, jingles, scratch vocals and devotional albums." },
  {
    title: "Music Collaboration",
    desc: "Guest vocals for independent releases and film projects.",
  },
  { title: "Online Classes", desc: "Live one-to-one sessions for students across the world." },
  { title: "Offline Classes", desc: "In-person training at the Tripunithura studio." },
  { title: "Vocal Coaching", desc: "Breath, sruthi, voice culture and stage-performance craft." },
];

export const courses = [
  {
    name: "Beginner Foundation",
    duration: "6 months · 2 classes / week",
    fee: "₹2,500 / month",
    timing: "Weekday evenings",
    syllabus: [
      "Sarali & Janta varisai",
      "Sruthi and breath control",
      "Basic tala awareness",
      "Simple keerthanas",
    ],
  },
  {
    name: "Intermediate Carnatic",
    duration: "9 months · 2 classes / week",
    fee: "₹3,500 / month",
    timing: "Weekday / weekend",
    syllabus: [
      "Geethams & swarajathis",
      "Varnams in 2 speeds",
      "Raga alapana basics",
      "Devotional repertoire",
    ],
  },
  {
    name: "Advanced Vocal Training",
    duration: "12 months · 3 classes / week",
    fee: "₹5,000 / month",
    timing: "By schedule",
    syllabus: [
      "Manodharma & niraval",
      "Kalpana swaram",
      "Thillana & ragam-tanam-pallavi",
      "Concert preparation",
    ],
  },
  {
    name: "Kids Batch (5–12 yrs)",
    duration: "Ongoing · 2 classes / week",
    fee: "₹2,000 / month",
    timing: "Evenings & Saturday",
    syllabus: [
      "Playful voice training",
      "Bhajans & rhymes in raga",
      "Exam & stage prep",
      "Confidence building",
    ],
  },
  {
    name: "Adults & Hobby Batch",
    duration: "Flexible · 1–2 classes / week",
    fee: "₹2,800 / month",
    timing: "Late evenings",
    syllabus: [
      "Light music & film songs",
      "Pitch and tone repair",
      "Karaoke performance",
      "Ghazal basics",
    ],
  },
  {
    name: "One-to-One Personal Training",
    duration: "Custom · 45 min sessions",
    fee: "₹1,200 / session",
    timing: "On request",
    syllabus: [
      "Fully personalised plan",
      "Recording feedback",
      "Audition coaching",
      "Worldwide online slots",
    ],
  },
];

export const songs = [
  { title: "Poomale Pothiyamme", meta: "Chaaver (2023) · Justin Varghese", tag: "Film" },
  { title: "Chemrantham", meta: "The Great Indian Kitchen (2021) · Mathews Pulickan", tag: "Film" },
  { title: "Pournami Chandrika", meta: "Freedom Fight (2022)", tag: "Film" },
  { title: "Chandrachooda", meta: "Ragamalika · Purandara Dasa", tag: "Classical" },
  { title: "Nagumomu", meta: "Madhyamavathi · Tyagaraja", tag: "Classical" },
  { title: "Samaja Vara Gamana", meta: "Hindolam · Tyagaraja", tag: "Classical" },
  {
    title: "Brindavani Thillana",
    meta: "Brindavansaranga · Dr. M. Balamuralikrishna",
    tag: "Classical",
  },
  { title: "Vallabha", meta: "Begada", tag: "Single" },
  { title: "Bhavamulona", meta: "Suddha Dhanyasi", tag: "Single" },
  { title: "Sree Hariharasutha", meta: "Saaramathi", tag: "Devotional" },
  { title: "Sree Hare Janardhana", meta: "Revathi", tag: "Devotional" },
];

export const events = [
  {
    date: "12 Sep",
    year: "2026",
    title: "Navaratri Kutcheri",
    venue: "Sree Poornathrayeesa Temple, Tripunithura",
    status: "Tickets open",
  },
  {
    date: "04 Oct",
    year: "2026",
    title: "Melodies of Kerala — Film Hits Live",
    venue: "Kochi Marriott Grand Ballroom",
    status: "Few seats",
  },
  {
    date: "22 Nov",
    year: "2026",
    title: "Ragas & Ghazals Evening",
    venue: "Bharat Bhavan, Thiruvananthapuram",
    status: "Tickets open",
  },
  {
    date: "19 Dec",
    year: "2026",
    title: "Student Annual Showcase",
    venue: "Academy Auditorium, Tripunithura",
    status: "Invite only",
  },
  {
    date: "10 Jan",
    year: "2027",
    title: "Gulf Tour — Carnatic Nights",
    venue: "Dubai · Abu Dhabi · Muscat",
    status: "Booking",
  },
];

export const testimonials = [
  {
    quote:
      "Her Chemrantham still gives me goosebumps. On stage she carries a rare stillness — the raga simply arrives.",
    name: "Anand Menon",
    role: "Music Director, Kochi",
  },
  {
    quote:
      "My daughter joined the kids batch unable to hold a note. In a year she performed a full keerthana at the temple.",
    name: "Lakshmi Nair",
    role: "Parent, Tripunithura",
  },
  {
    quote:
      "We booked her for our reception. Flawless coordination, and the ghazal set had guests in tears.",
    name: "Rahul & Divya",
    role: "Wedding clients",
  },
  {
    quote:
      "Online classes from Dubai felt as personal as sitting in her room. Her feedback is precise and kind.",
    name: "Sruthi Venkat",
    role: "Student, UAE",
  },
  {
    quote:
      "One of the most reliable voices we've worked with for corporate galas — professional to the last minute.",
    name: "Vinod Kumar",
    role: "Event Producer",
  },
  {
    quote:
      "The Brindavani Thillana recording was a masterclass in control. A voice built for the studio.",
    name: "Ratheesh Vega",
    role: "Music Producer",
  },
];

export const faqs = [
  {
    q: "Do I need prior experience to join?",
    a: "Not at all. The Beginner Foundation batch starts from sruthi, breath and the very first varisai exercises.",
  },
  {
    q: "How do online classes work?",
    a: "Live one-to-one or small-group sessions over Zoom or Google Meet, with recorded practice notes shared after each class.",
  },
  {
    q: "What are the payment terms?",
    a: "Fees are paid monthly in advance via UPI or bank transfer. Performance bookings require a 40% advance to confirm the date.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Classes cancelled 12 hours in advance are rescheduled free. Event bookings cancelled within 15 days retain the advance.",
  },
  {
    q: "How far do you travel for performances?",
    a: "Across India and internationally. Travel and accommodation are arranged by the host for outstation events.",
  },
  {
    q: "Can you perform in languages other than Malayalam?",
    a: "Yes — Malayalam, Tamil, Telugu, Kannada, Sanskrit, Hindi, Urdu and English.",
  },
];

export const awards = [
  { title: "MA in Music (Carnatic Vocal)", org: "University Gold Medallist" },
  { title: "Featured Playback Voice", org: "Chaaver · The Great Indian Kitchen · Freedom Fight" },
  {
    title: "Kalabhavan Mani Memorial Award — 2021",
    org: "State Award — The Great Indian Kitchen"
  },
  { title: "Carnatic Revival Series with Ratheesh Vega", org: "8 singles released" },

];

export const streaming = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0Dne0wWKxSCa9lHm8ymvsM" },
  { name: "Apple Music", url: "https://music.apple.com/search?term=Niranjana%20Rema" },
  { name: "YouTube Music", url: "https://music.youtube.com/search?q=Niranjana+Rema" },
  { name: "Amazon Music", url: "https://music.amazon.com/search/Niranjana+Rema" },
];

export const news = [
  {
    id: "oAp2XxEyvN8",
    outlet: "MediaOne TV",
    date: "Feature interview",
    title: "From a Facebook music circle to playback singing",
    summary:
      "MediaOne TV features Niranjana Rema's journey — how a Facebook music group led her to the recording studio and her first Malayalam film playback songs.",
  },
];

export const press = [
  {
    outlet: "Chaaver (2023)",
    title: "\u201cPoomale Pothiyamme\u201d released as a lead single",
    summary:
      "Composed by Justin Varghese, the track became one of the most-streamed songs from the film's album.",
  },
  {
    outlet: "The Great Indian Kitchen (2021)",
    title: "\u201cChemrantham\u201d wins wide critical praise",
    summary:
      "Her voice on Mathews Pulickan's composition was widely noted in reviews of the National Award-winning film.",
  },
  {
    outlet: "Carnatic revival singles",
    title: "Classical and devotional releases across streaming platforms",
    summary:
      "Kritis and thillanas including Nagumomu, Chandrachooda and Brindavani Thillana released on Spotify, Apple Music and YouTube.",
  },
];
