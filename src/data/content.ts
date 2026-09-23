export type Language = 'en' | 'es';

export interface ProgramItem {
  id: string;
  title: string;
  ageRange: string;
  ratio: string;
  description: string;
  highlights: string[];
  badgeColor: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  category: 'routine' | 'learning' | 'meal' | 'outdoor' | 'rest';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface TestimonialItem {
  name: string;
  child: string;
  neighborhood: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
}

export interface TeamMember {
  headerScript: string;
  name: string;
  role: string;
  roleDetail: string;
  image: string;
  quote: string;
  quoteOriginal?: string;
  credentials: string[];
}

export interface CurriculumPillar {
  title: string;
  desc: string;
}

export const daycareData = {
  business: {
    name: "Pasitos de Aprendizaje Family Child Care",
    shortName: "Pasitos de Aprendizaje",
    tagline: "Family Child Care",
    owner: "Elvira Castillo",
    title: "Director & Lead Educator, CDA",
    address: "4 Norfolk Terrace",
    city: "Dorchester",
    state: "MA",
    zip: "02124",
    fullAddress: "4 Norfolk Terrace, Dorchester, MA 02124",
    phone: "(857) 308-9764",
    phoneClean: "+18573089764",
    whatsappLink: "https://wa.me/18573089764?text=Hello%20Elvira,%20I%20am%20interested%20in%20Pasitos%20de%20Aprendizaje%20Family%20Child%20Care%20for%20my%20child.",
    whatsappLinkEs: "https://wa.me/18573089764?text=Hola%20Elvira,%20estoy%20interesado(a)%20en%20Pasitos%20de%20Aprendizaje%20Family%20Child%20Care%20para%20mi%20hijo(a).",
    email: "pasitosdeaprendizaje04@gmail.com",
    licenseNumber: "MA #9144837",
    licensingAgency: "Massachusetts Department of Early Education and Care (EEC)",
    hours: "8:00 AM – 5:00 PM",
    days: "Monday – Friday (Lunes a Viernes)",
    agesServed: "0 – 5 Years",
    certifications: [
      "EEC Licensed Provider (MA #9144837)",
      "CDA (Child Development Associate) Certified",
      "Pediatric CPR & First Aid Certified",
      "EEC Subsidy & Voucher Accepted",
      "Bilingual Dual-Language Immersion"
    ]
  },
  en: {
    nav: {
      about: "About Us",
      team: "Our Educators",
      curriculum: "Curriculum Plan",
      programs: "Programs",
      features: "Environment",
      schedule: "Daily Schedule",
      gallery: "Life at Pasitos",
      reviews: "Family Reviews",
      location: "Location & Map",
      contact: "Contact & Tour",
      scheduleTour: "Schedule a Tour",
      callUs: "Call (857) 308-9764"
    },
    hero: {
      kicker: "Dorchester, MA · EEC Licensed #9144837",
      titleStart: "Where Little Steps Grow in",
      titleHighlight: "Two Languages",
      subtitle: "A nurturing, Montessori-inspired family daycare in Dorchester. We combine the warmth of a loving home with rich dual-language English & Spanish learning for infants, toddlers, and preschoolers.",
      ctaTour: "Schedule a Private Tour",
      ctaCall: "Call Elvira directly",
      trustPill1: "Ages 0 to 5 Years",
      trustPill2: "Bilingual English / Spanish",
      trustPill3: "Vouchers Accepted",
      stats: [
        { value: "0–5", label: "Ages Nurtured" },
        { value: "100%", label: "Bilingual Immersion" },
        { value: "1:4", label: "Max Infant Ratio" },
        { value: "EEC #9144837", label: "Official MA License" }
      ]
    },
    trustBar: {
      title: "Why Boston Families Trust Pasitos de Aprendizaje",
      items: [
        { label: "MA EEC Licensed", sub: "License #9144837 verified" },
        { label: "Bilingual English & Spanish", sub: "Natural daily language fluency" },
        { label: "CPR, First Aid & CDA", sub: "Certified early childhood educator" },
        { label: "EEC Subsidies Accepted", sub: "Child care vouchers welcomed" },
        { label: "Private Driveway Drop-off", sub: "Easy parking on Norfolk Terrace" }
      ]
    },
    about: {
      badge: "Meet Your Educator",
      title: "Loving Care, Montessori Mindset & A Safe Second Home",
      storyP1: "Welcome to Pasitos de Aprendizaje! I am Elvira Castillo, the owner, director, and lead educator. For years, my life's mission has been providing Dorchester families with a nurturing haven where children are treated with the unconditional affection and respect of family.",
      storyP2: "Holding my Child Development Associate (CDA) credential and state EEC licensing, I structure every day around purposeful Montessori-inspired sensory exploration, music, reading, and Spanish-English bilingual learning. Here, children learn through touch, laughter, and guided play.",
      storyP3: "Located in a quiet, tree-lined residential corner with private driveway parking, a secure gated entrance, and a cozy reading sanctuary, our home offers parents total peace of mind every working day.",
      quote: "Every child takes their first steps at their own pace. Our role is to hold their hands with love, ignite their curiosity, and give them wings in two languages.",
      quoteAuthor: "Elvira Castillo",
      quoteRole: "Director & CDA Certified Educator",
      highlights: [
        "Certified Child Development Associate (CDA)",
        "Fully vetted & EEC Massachusetts Licensed #9144837",
        "Nutritious homemade breakfasts, lunches & healthy snacks",
        "Safe outdoor adventures, park visits & sensory garden",
        "Warm bilingual communication with daily parent updates"
      ]
    },
    team: {
      badge: "Our Certified Educators",
      title: "Who We Are / Quiénes Somos",
      subtitle: "Every child at Pasitos de Aprendizaje is surrounded by dedicated, certified early childhood educators with deep heart, verified safety credentials, and true bilingual warmth.",
      ratioNotice: "Dual-Educator Advantage: Lead CDA Teacher + Certified Assistant working together for optimal individualized care and safety.",
      director: {
        headerScript: "Quién soy",
        name: "Elvira Castillo",
        role: "Owner, Director & Lead Educator",
        roleDetail: "Maestra Certificada y Asociada en CDA",
        image: "/assets/images/team_director_cda_1790174292603.jpg",
        quote: "I am a CDA-certified associate teacher, deeply passionate about the care and early education of little ones. In my Family Child Care home, I provide an environment filled with love, learning, and safety, ensuring every child feels right at home.",
        quoteOriginal: "Soy maestra certificada y asociada en CDA, apasionada por el cuidado y la educación de los más pequeños. En mi Family Child Care ofrezco un espacio lleno de amor, aprendizaje y seguridad, para que los niños se sientan como en casa.",
        credentials: [
          "CDA (Child Development Associate) Credential",
          "MA EEC Licensed Family Child Care Provider #9144837",
          "Pediatric CPR & First Aid Certified",
          "Bilingual Spanish & English Early Immersion"
        ]
      },
      assistant: {
        headerScript: "Quién soy",
        name: "Certified Assistant",
        role: "Certified Family Child Care Assistant",
        roleDetail: "Asistente Certificada en Family Child Care",
        image: "/assets/images/team_assistant_cert_1790174311107.jpg",
        quote: "I am a certified Family Child Care assistant and proud member of the Pasitos de Aprendizaje Child Care team. My calling is to provide an environment filled with love, security, and joyful learning. I am dedicated to accompanying each child through their comprehensive development with patience, responsibility, and core values that foster their confidence and creativity.",
        quoteOriginal: "Soy asistente certificada en Family Child Care y formo parte del equipo de Pasitos de Aprendizaje Child Care. Mi vocación es brindar un ambiente lleno de amor, seguridad y aprendizaje. Estoy comprometida en acompañar a cada niño en su desarrollo integral, con paciencia, responsabilidad y valores que fortalezcan su confianza y creatividad.",
        credentials: [
          "MA EEC Certified Family Child Care Assistant",
          "Pediatric CPR, First Aid & Safety Certified",
          "Child Comprehensive Development & Milestone Coaching",
          "Creative Arts, Sensory Activities & Social Values"
        ]
      }
    },
    curriculum: {
      badge: "Authentic Educational Methodology",
      title: "Plan Curricular Mensual",
      subtitleTag: "Práctico para el aprendizaje de los niños",
      description: "Our structured Monthly Curriculum Plan ('Plan Curricular Mensual') bridges Montessori autonomy, bilingual literacy, hands-on sensory exploration, and early STEAM foundations. Children don't just spend time—they blossom with purpose.",
      binderImage: "/assets/images/curriculum_binder_plan_1790174324280.jpg",
      binderCaption: "Official Classroom Curriculum Plan — Pasitos de Aprendizaje Family Child Care",
      curriculumPoints: [
        {
          title: "Bilingual Literacy & Phonics",
          desc: "Interactive Spanish & English read-alouds, alphabet phonics, finger-plays, and vocabulary expansion through songs."
        },
        {
          title: "Creative Arts & Painting",
          desc: "Watercolor palettes, finger-paint sensory textures, crayons, seasonal holiday keepsakes, and fine motor craft projects."
        },
        {
          title: "Early Math & Motor Skills",
          desc: "Montessori stacking towers, counting counters, geometric shape sorting, tactile puzzles, and safe scissor readiness."
        },
        {
          title: "Sensory & Nature Exploration",
          desc: "Sensory water & seed bins, plant care in our backyard garden, weather observation, and tactile discovery."
        },
        {
          title: "Values, Autonomy & Social Habits",
          desc: "Gentle conflict resolution, sharing, table manners, independent handwashing, and positive emotional confidence."
        }
      ],
      monthsOverview: [
        { month: "September / October", theme: "Welcome, Emotions & Autumn Leaves", focus: "Dual-language greetings, colors of nature, sensory pumpkins" },
        { month: "November", theme: "Thanksgiving & Gratitude Family Project", focus: "Handprint crafts, family trees, sharing & thankfulness songs" },
        { month: "December", theme: "Winter Wonders & Holiday Traditions", focus: "Handmade ornament crafts, holiday songs in Spanish/English" },
        { month: "January / February", theme: "Shapes, Space & Community Helpers", focus: "Block architecture, building our neighborhood, safety helpers" },
        { month: "Spring & Summer", theme: "Garden Life, Animals & Water Discovery", focus: "Planting seeds, caterpillars to butterflies, splash science" }
      ]
    },
    programs: {
      badge: "Curriculum & Age Groups",
      title: "Thoughtfully Designed Programs (Ages 0 to 5)",
      subtitle: "Each stage of childhood has unique cognitive, motor, and emotional milestones. Our Montessori-inspired bilingual flow ensures every child thrives.",
      items: [
        {
          id: "infants",
          title: "Infant Care & Milestones",
          ageRange: "0 – 15 Months",
          ratio: "Dedicated 1-on-1 Nurturing",
          description: "A calm, gentle sensory haven focused on safety, secure emotional attachment, motor milestones (tummy time, crawling, first steps), and tender bilingual lullabies and baby sign language.",
          highlights: [
            "Individualized feeding & nap routines",
            "Safe, soft tactile floor mats & wooden grasping toys",
            "Continuous language exposure in Spanish & English",
            "Daily photo & milestone communication with parents"
          ],
          badgeColor: "border-pink-200 bg-pink-50/60 text-pink-700"
        },
        {
          id: "toddlers",
          title: "Toddler Discovery & Language",
          ageRange: "15 Months – 2.9 Years",
          ratio: "Small Group Play",
          description: "Toddlers explore their budding autonomy through hands-on Montessori activities, music circles, sensory bins, bilingual stories, and joyful social interactions.",
          highlights: [
            "Dual-language vocabulary expansion through songs & play",
            "Fine and gross motor development with stacking & balance",
            "Gentle social-emotional learning & sharing habits",
            "Outdoor nature walks to nearby park & fresh air"
          ],
          badgeColor: "border-blue-200 bg-blue-50/60 text-blue-700"
        },
        {
          id: "preschool",
          title: "Preschool & Kindergarten Prep",
          ageRange: "2.9 – 5 Years",
          ratio: "Curriculum & Independence",
          description: "Building confident, curious future scholars. We cultivate bilingual phonics, early math concepts, science curiosity, fine-motor scissor/writing skills, and social collaboration.",
          highlights: [
            "Bilingual literacy, alphabet phonics & early storytelling",
            "Math manipulatives, counting, patterns & spatial sorting",
            "Self-help skills: dressing, table manners & organizing",
            "Smooth transition to Boston Public & private kindergartens"
          ],
          badgeColor: "border-amber-200 bg-amber-50/60 text-amber-800"
        }
      ]
    },
    features: {
      badge: "Our Environment",
      title: "A Secure, Beautifully Prepared Home Daycare",
      subtitle: "Conveniently located at 4 Norfolk Terrace in Dorchester, designed from the ground up for safety, comfort, and active learning.",
      items: [
        {
          id: "bilingual",
          title: "Bilingual English & Spanish Immersion",
          description: "Children naturally absorb both languages every day through songs, interactive storytelling, mealtime conversations, and cultural celebrations.",
          tag: "Dual Language"
        },
        {
          id: "home-like",
          title: "Cozy Home-Like Warmth & Organic Care",
          description: "Not a sterile institutional warehouse. Our warm home setting helps young children feel secure, loved, and confident as an extended family.",
          tag: "Family Warmth"
        },
        {
          id: "reading-nook",
          title: "Montessori Reading & Sensory Sanctuary",
          description: "A dedicated sunlit corner filled with accessible wooden shelves, picture books, soft pillows, wooden building blocks, and tactile puzzles.",
          tag: "Montessori Nook"
        },
        {
          id: "parking-gate",
          title: "Private Driveway Drop-Off & Gated Security",
          description: "Never circle the block in Boston traffic. Enjoy our private driveway for effortless drop-off and pickup behind a secure gated entrance.",
          tag: "Safety & Ease"
        },
        {
          id: "parks-school",
          title: "Neighborhood Park & Elementary Proximity",
          description: "Close to local playgrounds and walking distance to the neighborhood elementary school, allowing safe nature walks and community connection.",
          tag: "Neighborhood"
        },
        {
          id: "subsidy",
          title: "State Subsidy & EEC Vouchers Accepted",
          description: "We believe quality early education must be accessible to all hardworking families. We proudly accept state child care vouchers.",
          tag: "Subsidy Accepted"
        }
      ]
    },
    schedule: {
      badge: "Daily Routine",
      title: "Predictable, Joyful Daily Rhythm",
      subtitle: "Children thrive when they know what to expect. Our daily schedule balances active physical movement, quiet Montessori focus, and nutritious meals.",
      hoursNotice: "Operating Hours: 8:00 AM – 5:00 PM, Monday through Friday",
      items: [
        {
          time: "8:00 AM – 8:45 AM",
          title: "Warm Welcome & Quiet Free Play",
          description: "Gentle drop-off, greetings in English and Spanish, fine motor play and self-selected puzzles.",
          category: "routine"
        },
        {
          time: "8:45 AM – 9:30 AM",
          title: "Nutritious Breakfast & Hygiene",
          description: "Wholesome oatmeal, fresh seasonal fruit, warm milk or water, followed by handwashing and personal care.",
          category: "meal"
        },
        {
          time: "9:30 AM – 10:15 AM",
          title: "Morning Circle Time & Bilingual Songs",
          description: "Greeting songs, calendar and weather check in both languages, group storytime, and rhythm games.",
          category: "learning"
        },
        {
          time: "10:15 AM – 11:15 AM",
          title: "Outdoor Exploration & Playground Walk",
          description: "Gross motor movement, fresh air, games in our secure yard or supervised strolls to the nearby park.",
          category: "outdoor"
        },
        {
          time: "11:15 AM – 12:15 PM",
          title: "Montessori Learning Centers & Creative Arts",
          description: "Hands-on math materials, watercolor painting, sensory sand/water bins, and language manipulative stations.",
          category: "learning"
        },
        {
          time: "12:15 PM – 1:00 PM",
          title: "Family-Style Hot Lunch",
          description: "Balanced, home-cooked nutritious meal fostering self-feeding, table manners, and cheerful table conversation.",
          category: "meal"
        },
        {
          time: "1:00 PM – 3:00 PM",
          title: "Rest & Recharging Nap Time",
          description: "Soft lullabies, dimmed lighting, individualized sanitized cots, and quiet soothing rest.",
          category: "rest"
        },
        {
          time: "3:00 PM – 3:45 PM",
          title: "Wake Up, Hygiene & Afternoon Snack",
          description: "Gentle wake up, diaper checks/potty routine, and a wholesome healthy snack (yogurt, fruit, crackers).",
          category: "meal"
        },
        {
          time: "3:45 PM – 4:30 PM",
          title: "Afternoon Storytelling & Sensory Music",
          description: "Interactive Spanish/English book reading, dancing with scarves, rhythm instruments, and building blocks.",
          category: "learning"
        },
        {
          time: "4:30 PM – 5:00 PM",
          title: "Quiet Play, Daily Debrief & Parent Pickup",
          description: "Cozy quiet centers, packing backpacks, and daily face-to-face updates with parents as you pick up.",
          category: "routine"
        }
      ]
    },
    gallery: {
      badge: "Photo Journal",
      title: "A Glimpse into Life at Pasitos",
      subtitle: "Capturing everyday magic: messy finger-painting, seasonal holiday celebrations, Thanksgiving gratitude crafts, and cozy story hours.",
      instagramNotice: "Follow our daily classroom journeys and creative adventures."
    },
    testimonials: {
      badge: "Parent Testimonials",
      title: "Loved by Dorchester & Boston Families",
      subtitle: "Nothing means more than the trust of parents who place their precious little ones in our hands each day.",
      items: [
        {
          name: "Sofia Mendez",
          child: "Mother of Mateo, age 2",
          neighborhood: "Dorchester (Ashmont)",
          quote: "Finding Elvira and Pasitos de Aprendizaje was an absolute miracle for our family. Mateo started at 14 months, and his speech in both Spanish and English took off immediately. Every morning he practically runs through her gated door to give her a hug. Her home is immaculately clean, peaceful, and filled with love.",
          rating: 5
        },
        {
          name: "Marcus & David Chen-Keller",
          child: "Parents of Camila, age 3.5",
          neighborhood: "Dorchester (Codman Square)",
          quote: "The private driveway on Norfolk Terrace is an everyday lifesaver—we never have to double-park or rush. Camila has blossomed with Elvira’s Montessori approach. She writes her letters, counts in Spanish, and helps set the table at home. Elvira’s CDA certification and deep expertise are evident in every detail.",
          rating: 5
        },
        {
          name: "Carmen Rosario",
          child: "Mother of Lucas, 11 months",
          neighborhood: "Mattapan / Dorchester Border",
          quote: "Returning to full-time work as a single mother was terrifying, but Elvira made me feel like family from our very first tour. She walked me through the state child care voucher paperwork step-by-step. The daily photos and updates she sends give me complete peace of mind while I am at work. 5 stars is not enough!",
          rating: 5
        }
      ]
    },
    location: {
      badge: "Find Us",
      title: "Conveniently Located in Dorchester, MA",
      subtitle: "Situated at 4 Norfolk Terrace on a quiet residential street with dedicated driveway parking for seamless drop-offs and pickups.",
      addressLabel: "Physical Address",
      addressText: "4 Norfolk Terrace, Dorchester, MA 02124",
      phoneLabel: "Direct Phone",
      hoursLabel: "Program Hours",
      hoursText: "8:00 AM – 5:00 PM (Monday – Friday)",
      licenseLabel: "EEC State License",
      licenseText: "MA License #9144837",
      features: [
        "Private driveway parking — zero street parking hassle",
        "Secure gated entry with buzzer",
        "Short walk to local neighborhood park and playground",
        "Close to neighborhood elementary school & public transit (Talbot Ave / Ashmont / Bus lines)",
        "Quiet, safe residential street"
      ]
    },
    form: {
      badge: "Enrollment & Inquiries",
      title: "Schedule a Private Tour",
      subtitle: "Spaces in our family child care are limited to maintain low educator-to-child ratios. Inquire today to secure your child's spot.",
      childName: "Child's Full Name",
      childAge: "Child's Age / Due Date",
      childAgePlaceholder: "e.g. 18 months, 3 years, or expecting July",
      parentName: "Parent / Guardian Name",
      phone: "Phone Number",
      email: "Email Address",
      preferredDate: "Preferred Tour Date",
      programInterest: "Program of Interest",
      selectProgram: "Select a program",
      infantOption: "Infant Care (0 – 15 months)",
      toddlerOption: "Toddler Program (15 months – 2.9 years)",
      preschoolOption: "Preschool Prep (2.9 – 5 years)",
      subsidyQuestion: "Do you plan to use a state child care voucher / subsidy?",
      subsidyYes: "Yes, I have or will apply for EEC voucher",
      subsidyNo: "No, private pay",
      notes: "Questions, Dietary Needs or Additional Notes",
      notesPlaceholder: "Tell Elvira about your child, schedule needs, or questions...",
      submitBtn: "Request Your Private Tour",
      submitting: "Submitting Request...",
      successTitle: "Tour Request Received!",
      successMessage: "Thank you! Elvira Castillo will review your details and contact you via phone or WhatsApp at (857) 308-9764 within 24 business hours to confirm your tour date.",
      closeBtn: "Close Window",
      directContactNotice: "Need an immediate answer? Feel free to call or WhatsApp Elvira directly:"
    },
    nutrition: {
      badge: "Healthy Nutrition & CACFP Standards",
      title: "Fresh, Wholesome Meals Cooked Daily",
      subtitle: "We believe wholesome nutrition fuels joyful learning and healthy milestones. Every meal is prepared fresh daily with whole grains, colorful organic produce, lean proteins, and zero artificial preservatives.",
      highlights: [
        {
          title: "All Meals & Snacks Included",
          desc: "Morning breakfast/snack, balanced hot family-style lunch, and afternoon snack are 100% provided at no additional cost."
        },
        {
          title: "USDA CACFP Nutritional Balance",
          desc: "Meets or exceeds all federal and Massachusetts early childhood dietary guidelines for optimal brain and body growth."
        },
        {
          title: "Nut-Free & Allergy-Conscious",
          desc: "Peanut-free home environment with individualized adaptations for milk intolerance, gluten allergies, or cultural preferences."
        },
        {
          title: "Lifelong Table Habits & Autonomy",
          desc: "Montessori-inspired self-feeding, cup drinking, handwashing hygiene, and joyful family-style conversations."
        }
      ],
      sampleMenu: [
        {
          day: "Monday / Lunes",
          morning: "Whole grain toast with natural apple slices & milk",
          lunch: "Arroz con Pollo, steamed sweet carrots & green beans",
          snack: "Creamy Greek yogurt with fresh blueberries"
        },
        {
          day: "Tuesday / Martes",
          morning: "Warm oatmeal with cinnamon & diced strawberries",
          lunch: "Mild lentil stew with brown rice, sweet potato & ripe avocado",
          snack: "Cheddar cheese cubes & whole wheat pita triangles"
        },
        {
          day: "Wednesday / Miércoles",
          morning: "Fresh banana muffins & cold pure water / milk",
          lunch: "Lean turkey meatballs with tomato sauce, penne & broccoli florets",
          snack: "Crisp cucumber coins & hummus dip"
        },
        {
          day: "Thursday / Jueves",
          morning: "Scrambled organic eggs with whole wheat toast",
          lunch: "Shredded chicken and corn soft tacos with fresh cantaloupe slices",
          snack: "Homemade applesauce & graham crackers"
        },
        {
          day: "Friday / Viernes",
          morning: "Whole grain berry cereal with cold milk",
          lunch: "Baked salmon or mild black bean rice bowl with steamed peas & plantains",
          snack: "Fresh orange wedges & animal crackers"
        }
      ]
    },
    safety: {
      badge: "Safety, Health & EEC Compliance",
      title: "Your Child’s Well-Being is Our Highest Sacred Trust",
      subtitle: "From secure gated entry to medical-grade hygiene, every corner of Pasitos de Aprendizaje is meticulously prepared to ensure children thrive in total peace and security.",
      protocols: [
        {
          title: "Massachusetts EEC Official License #9144837",
          desc: "Rigorously licensed, inspected, and held to the highest state standards by the Massachusetts Department of Early Education and Care."
        },
        {
          title: "100% Pediatric CPR & First Aid Certified",
          desc: "Both Elvira Castillo and our certified assistant hold active American Red Cross Pediatric CPR, AED, and First Aid certifications."
        },
        {
          title: "Comprehensive CORI / SORI & DCF Background Cleared",
          desc: "All adult educators and household members are thoroughly vetted and background-checked through Massachusetts state fingerprinting."
        },
        {
          title: "Gated Security & Verified Photo ID Pick-Up",
          desc: "Double-gated entrance with buzzer. Children are released exclusively to parents or pre-authorized adults with verified government ID."
        },
        {
          title: "Daily Medical-Grade Sanitization",
          desc: "Montessori wooden materials, cots, changing stations, and common surfaces are disinfected daily using hospital-grade EPA child-safe sanitizers."
        },
        {
          title: "HEPA Air Purifiers & Ample Natural Light",
          desc: "Continuous clean airflow and sunlit indoor rooms promote respiratory health, calm emotional regulation, and deep rest."
        }
      ]
    },
    steps: {
      badge: "Enrollment Roadmap",
      title: "How to Join Our Pasitos Family",
      subtitle: "We make the enrollment experience clear, supportive, and completely stress-free for working parents.",
      items: [
        {
          step: "01",
          title: "Schedule Your Private Tour",
          desc: "Book a 30-minute in-person tour to explore our Montessori spaces, meet Elvira and our assistant, and see our peaceful routines in action."
        },
        {
          step: "02",
          title: "Classroom Fit & Registration",
          desc: "Share your child’s temperament, sleep/feeding habits, and schedule needs. Complete the Massachusetts EEC registration packet."
        },
        {
          step: "03",
          title: "Tuition Plan or Voucher Verification",
          desc: "We accept state vouchers from Child Care Choices of Boston (CCCB) or arrange transparent private tuition with bi-weekly/monthly billing."
        },
        {
          step: "04",
          title: "Loving Gentle Transition Week",
          desc: "A gradual 2-to-3 day transition schedule to help your little one feel completely safe, loved, and at home before full days begin."
        }
      ]
    },
    tuition: {
      badge: "Affordability & State Vouchers",
      title: "Transparent Tuition & State Subsidy Support",
      subtitle: "High-quality bilingual education should be accessible to all Dorchester and Boston families. We proudly accept state child care vouchers.",
      voucherHeadline: "We Proudly Accept Massachusetts Child Care Vouchers",
      voucherBody: "If you have an EEC voucher from Child Care Choices of Boston (CCCB), DCF, or other regional agencies, we welcome your child! Elvira personally assists parents with all paperwork, renewals, and state confirmations.",
      allInclusiveTitle: "What is Always Included in Your Enrollment:",
      inclusions: [
        "Fresh hot home-cooked lunch and 2 nutritious daily snacks included",
        "All Montessori educational materials, arts, paints, and learning supplies",
        "Daily digital photo journals, milestone progress, and bilingual parent communication",
        "Low educator-to-child ratio with Lead CDA Teacher + Certified Assistant",
        "Reserved private driveway parking on Norfolk Terrace for easy drop-off and pickup"
      ],
      pricingTiers: [
        {
          category: "Infants (0 – 15 Months)",
          description: "Full-time personalized milestone care, feeding routines, tummy time & bilingual lullabies.",
          schedule: "Mon – Fri, 8:00 AM – 5:00 PM",
          voucherEligible: "100% Voucher Eligible (CCCB / EEC)"
        },
        {
          category: "Toddlers (15 Months – 2.9 Years)",
          description: "Hands-on Montessori exploration, sensory bins, fine motor skills & vocabulary explosion.",
          schedule: "Mon – Fri, 8:00 AM – 5:00 PM",
          voucherEligible: "100% Voucher Eligible (CCCB / EEC)"
        },
        {
          category: "Preschool Prep (2.9 – 5 Years)",
          description: "Pre-kindergarten bilingual literacy, phonics, math counters, social values & independence.",
          schedule: "Mon – Fri, 8:00 AM – 5:00 PM",
          voucherEligible: "100% Voucher Eligible (CCCB / EEC)"
        }
      ]
    },
    faq: {
      badge: "Got Questions?",
      title: "Frequently Asked Questions",
      subtitle: "Everything parents ask about our bilingual curriculum, state vouchers, health policies, and daily life at Pasitos de Aprendizaje.",
      items: [
        {
          q: "Do you accept Massachusetts state child care vouchers (EEC / CCCB)?",
          a: "Yes! We proudly accept state child care vouchers from Child Care Choices of Boston (CCCB), Massachusetts Department of Early Education and Care (EEC), and DCF. Elvira personally guides families through all paperwork and voucher verifications."
        },
        {
          q: "What age groups do you care for?",
          a: "We welcome infants as young as 4 weeks old, toddlers (15 months to 2.9 years), and preschoolers up to 5 years old. Our mixed-age family setting allows siblings to stay together while receiving individualized developmental coaching."
        },
        {
          q: "What is your educator-to-child ratio?",
          a: "Because we have both Elvira Castillo (Lead CDA Educator) and our Certified Assistant working together in the home, our children enjoy exceptional individual attention, warmth, and close supervision that large commercial centers cannot match."
        },
        {
          q: "How does bilingual immersion work if my child only speaks English?",
          a: "Children are natural linguistic geniuses! We practice natural, conversational dual-language immersion. We speak to each child with gentle warmth in both Spanish and English, using stories, songs, fingerplays, and daily routines. Monolingual English speakers quickly build bilingual comprehension without any stress."
        },
        {
          q: "What are your operating hours?",
          a: "We are open Monday through Friday from 8:00 AM to 5:00 PM year-round. We provide private driveway parking on Norfolk Terrace for easy, hassle-free morning drop-offs and evening pickups."
        },
        {
          q: "What should I pack for my child's first day?",
          a: "Please bring 2-3 complete weather-appropriate changes of clothes, a cozy crib sheet or small blanket for naptime, diapers and wipes (if applicable), and any specialty infant formula or bottles. We provide all meals, healthy snacks, whole milk, water cups, and educational supplies!"
        },
        {
          q: "What is your illness and fever policy?",
          a: "To protect all children and educators, a child must remain home if they have a fever of 100.4°F or higher, vomiting, diarrhea, or a contagious illness. Children may return once they have been symptom-free and fever-free for a full 24 hours without fever-reducing medication."
        },
        {
          q: "How can I schedule a private tour?",
          a: "You can click the 'Schedule a Tour' button anywhere on this page, or call / WhatsApp Elvira directly at (857) 308-9764. We offer tours on weekday mornings or late afternoons."
        }
      ]
    },
    footer: {
      aboutText: "A licensed, bilingual Montessori-inspired family child care offering loving, high-quality early childhood education for infants, toddlers, and preschoolers in Dorchester, MA.",
      quickLinks: "Quick Navigation",
      contactInfo: "Contact & Location",
      rights: "All rights reserved. Massachusetts EEC Licensed Facility #9144837.",
      bilingualNote: "Hablamos Español e Inglés con fluidez."
    }
  },
  es: {
    nav: {
      about: "Sobre Nosotras",
      team: "Educadoras",
      curriculum: "Plan Curricular",
      programs: "Programas",
      features: "Ambiente",
      schedule: "Horario Diario",
      gallery: "Vida en Pasitos",
      reviews: "Testimonios",
      location: "Ubicación",
      contact: "Contacto y Visita",
      scheduleTour: "Programar Visita",
      callUs: "Llamar (857) 308-9764"
    },
    hero: {
      kicker: "Dorchester, MA · Licencia EEC #9144837",
      titleStart: "Donde los pequeños dan sus primeros pasos en",
      titleHighlight: "Dos Idiomas",
      subtitle: "Un hogar de cuidado infantil con inspiración Montessori en Dorchester. Combinamos la calidez de una familia con una rica inmersión bilingüe en inglés y español para bebés, niños pequeños y preescolares.",
      ctaTour: "Programar Visita Privada",
      ctaCall: "Llamar a Elvira",
      trustPill1: "Edades de 0 a 5 Años",
      trustPill2: "Bilingüe Inglés / Español",
      trustPill3: "Aceptamos Vouchers",
      stats: [
        { value: "0–5", label: "Años de Edad" },
        { value: "100%", label: "Inmersión Bilingüe" },
        { value: "1:4", label: "Proporción Máxima" },
        { value: "EEC #9144837", label: "Licencia Oficial MA" }
      ]
    },
    trustBar: {
      title: "Por Qué las Familias de Boston Confían en Pasitos de Aprendizaje",
      items: [
        { label: "Licencia EEC de Massachusetts", sub: "Licencia #9144837 verificada" },
        { label: "Bilingüe Inglés y Español", sub: "Fluidez natural en ambos idiomas" },
        { label: "Certificación CPR, Primeros Auxilios y CDA", sub: "Educadora profesional certificada" },
        { label: "Aceptamos Subsidios y Vouchers", sub: "Ayuda financiera de cuidado infantil" },
        { label: "Estacionamiento Privado", sub: "Entrada con driveway en Norfolk Terrace" }
      ]
    },
    about: {
      badge: "Conoce a Tu Educadora",
      title: "Cuidado con Amor, Enfoque Montessori y un Segundo Hogar Seguro",
      storyP1: "¡Bienvenidos a Pasitos de Aprendizaje! Soy Elvira Castillo, propietaria, directora y educadora principal. Durante años, la misión de mi vida ha sido brindar a las familias de Dorchester un refugio acogedor donde los niños sean tratados con el cariño y respeto incondicional de una verdadera familia.",
      storyP2: "Con mi credencial de Child Development Associate (CDA) y la licencia del estado de Massachusetts (EEC), organizo cada día alrededor de actividades sensoriales Montessori, música, lectura y el aprendizaje bilingüe en español e inglés. Aquí los niños aprenden tocando, explorando y riendo.",
      storyP3: "Ubicados en una tranquila calle residencial con estacionamiento privado para fácil llegada, entrada con portón seguro y un rincón de lectura acogedor, ofrecemos a los padres total tranquilidad mientras trabajan.",
      quote: "Cada niño da sus primeros pasos a su propio ritmo. Nuestro rol es tomar sus manos con amor, despertar su curiosidad y darles alas en dos idiomas.",
      quoteAuthor: "Elvira Castillo",
      quoteRole: "Directora y Educadora Certificada CDA",
      highlights: [
        "Educadora Certificada Child Development Associate (CDA)",
        "Licenciada oficialmente por el Departamento EEC de MA #9144837",
        "Desayunos, almuerzos caseros calientes y meriendas saludables",
        "Paseos al parque cercano, patio seguro y jardín sensorial",
        "Comunicación bilingüe diaria y fotos de progreso a los padres"
      ]
    },
    team: {
      badge: "Nuestro Equipo Certificado",
      title: "Quiénes Somos / Nuestro Equipo",
      subtitle: "En Pasitos de Aprendizaje, tu hijo(a) cuenta con la dedicación de educadoras certificadas apasionadas por la primera infancia, con valores sólidos y un cuidado lleno de amor y seguridad.",
      ratioNotice: "Ventaja de Doble Educadora: Maestra Líder con credencial CDA + Asistente Certificada para atención personalizada y cuidado seguro.",
      director: {
        headerScript: "Quién soy",
        name: "Elvira Castillo",
        role: "Propietaria, Directora y Educadora Principal",
        roleDetail: "Maestra Certificada y Asociada en CDA",
        image: "/assets/images/team_director_cda_1790174292603.jpg",
        quote: "Soy maestra certificada y asociada en CDA, apasionada por el cuidado y la educación de los más pequeños. En mi Family Child Care ofrezco un espacio lleno de amor, aprendizaje y seguridad, para que los niños se sientan como en casa.",
        quoteOriginal: "Soy maestra certificada y asociada en CDA, apasionada por el cuidado y la educación de los más pequeños. En mi Family Child Care ofrezco un espacio lleno de amor, aprendizaje y seguridad, para que los niños se sientan como en casa.",
        credentials: [
          "Credencial CDA (Child Development Associate)",
          "Licencia Oficial de Massachusetts EEC #9144837",
          "Certificación en Primeros Auxilios y RCP Pediátrico",
          "Inmersión Bilingüe Temprana Español e Inglés"
        ]
      },
      assistant: {
        headerScript: "Quién soy",
        name: "Asistente Certificada",
        role: "Asistente Certificada en Family Child Care",
        roleDetail: "Equipo Pasitos de Aprendizaje",
        image: "/assets/images/team_assistant_cert_1790174311107.jpg",
        quote: "Soy asistente certificada en Family Child Care y formo parte del equipo de Pasitos de Aprendizaje Child Care. Mi vocación es brindar un ambiente lleno de amor, seguridad y aprendizaje. Estoy comprometida en acompañar a cada niño en su desarrollo integral, con paciencia, responsabilidad y valores que fortalezcan su confianza y creatividad.",
        quoteOriginal: "Soy asistente certificada en Family Child Care y formo parte del equipo de Pasitos de Aprendizaje Child Care. Mi vocación es brindar un ambiente lleno de amor, seguridad y aprendizaje. Estoy comprometida en acompañar a cada niño en su desarrollo integral, con paciencia, responsabilidad y valores que fortalezcan su confianza y creatividad.",
        credentials: [
          "Asistente Certificada EEC en Cuidado Infantil Familiar",
          "Certificada en RCP Pediátrico y Protocolos de Seguridad",
          "Acompañamiento en el Desarrollo Integral de la Primera Infancia",
          "Especialista en Actividades Creativas, Sensoriales y Valores"
        ]
      }
    },
    curriculum: {
      badge: "Metodología Educativa Auténtica",
      title: "Plan Curricular Mensual",
      subtitleTag: "Práctico para el aprendizaje de los niños",
      description: "Nuestro Plan Curricular Mensual estructurado combina autonomía Montessori, alfabetización bilingüe, exploración artística sensorial y matemáticas tempranas. Los niños no solo pasan el día: crecen y florecen con propósito.",
      binderImage: "/assets/images/curriculum_binder_plan_1790174324280.jpg",
      binderCaption: "Carpeta Oficial del Plan Curricular — Pasitos de Aprendizaje Family Child Care",
      curriculumPoints: [
        {
          title: "Lectura y Fonética Bilingüe",
          desc: "Lectura interactiva diaria en español e inglés, sonidos de las letras, rimas infantiles y ampliación natural del vocabulario."
        },
        {
          title: "Arte Creativo y Acuarelas",
          desc: "Paletas de acuarela, pintura sensorial con dedos, crayones, collages de la estación y recuerdos festivos hechos a mano."
        },
        {
          title: "Matemáticas Tempranas y Motricidad Fina",
          desc: "Torres y bloques Montessori, conteo con elementos táctiles, clasificación de figuras geométricas y uso guiado de tijeras."
        },
        {
          title: "Exploración Sensorial y Naturaleza",
          desc: "Juegos con agua y arena, cuidado de plantas en nuestro jardín, observación del clima y descubrimiento sensorial."
        },
        {
          title: "Valores, Autonomía y Hábitos Saludables",
          desc: "Paciencia, compartir, buenos modales en la mesa, lavado de manos independiente y fortalecimiento de la autoestima."
        }
      ],
      monthsOverview: [
        { month: "Septiembre / Octubre", theme: "Bienvenida, Emociones y Hojas de Otoño", focus: "Saludos bilingües, colores de la naturaleza, calabazas sensoriales" },
        { month: "Noviembre", theme: "Acción de Gracias y Proyecto Familiar de Gratitud", focus: "Pavitos con huellas, árbol de gratitud, canciones en familia" },
        { month: "Diciembre", theme: "Maravillas del Invierno y Tradiciones Festivas", focus: "Manualidades navideñas, villancicos en español e inglés" },
        { month: "Enero / Febrero", theme: "Formas, Espacio y Servidores Comunitarios", focus: "Arquitectura con bloques, nuestro vecindario, hábitos seguros" },
        { month: "Primavera y Verano", theme: "Vida del Jardín, Animales y Descubrimiento del Agua", focus: "Plantando semillas, ciclo de mariposas, ciencia y diversión con agua" }
      ]
    },
    programs: {
      badge: "Planes de Aprendizaje",
      title: "Programas Diseñados para Cada Etapa (0 a 5 Años)",
      subtitle: "Cada etapa infantil tiene hitos motores, cognitivos y emocionales únicos. Nuestro programa bilingüe con toques Montessori ayuda a cada niño a florecer.",
      items: [
        {
          id: "infants",
          title: "Cuidado de Bebés e Hitos Iniciales",
          ageRange: "0 – 15 Meses",
          ratio: "Atención 1 a 1 Amorosa",
          description: "Un ambiente tranquilo y seguro enfocado en el apego emocional, estimulación sensorial, tiempo boca abajo, primeros pasos, canciones de cuna y lenguaje de señas para bebés.",
          highlights: [
            "Horarios individualizados de siesta y alimentación",
            "Tapetes suaves y juguetes sensoriales de madera natural",
            "Exposición constante al español y al inglés con canciones",
            "Actualizaciones diarias con fotos a las mamás y papás"
          ],
          badgeColor: "border-pink-200 bg-pink-50/60 text-pink-700"
        },
        {
          id: "toddlers",
          title: "Descubrimiento y Lenguaje para Toddlers",
          ageRange: "15 Meses – 2.9 Años",
          ratio: "Juego en Grupos Pequeños",
          description: "Los niños pequeños exploran su creciente autonomía mediante actividades Montessori manipulativas, círculos de canciones, cuentos ilustrados e interacción social alegre.",
          highlights: [
            "Ampliación de vocabulario en inglés y español",
            "Desarrollo motor fino y grueso con bloques y balance",
            "Aprendizaje socioemocional, compartir y empatía",
            "Caminatas al aire libre y juegos en el parque cercano"
          ],
          badgeColor: "border-blue-200 bg-blue-50/60 text-blue-700"
        },
        {
          id: "preschool",
          title: "Preparación Preescolar y Kindergarten",
          ageRange: "2.9 – 5 Años",
          ratio: "Currículo e Independencia",
          description: "Formando futuros estudiantes seguros y curiosos. Desarrollamos fonética bilingüe, nociones matemáticas tempranas, ciencias, motricidad fina y colaboración en equipo.",
          highlights: [
            "Alfabetización bilingüe, sonidos de letras y cuentos",
            "Conteo, patrones y conceptos espaciales",
            "Habilidades de independencia: vestirse, guardar y modales",
            "Transición fluida a las escuelas públicas y privadas de Boston"
          ],
          badgeColor: "border-amber-200 bg-amber-50/60 text-amber-800"
        }
      ]
    },
    features: {
      badge: "Nuestro Espacio",
      title: "Un Hogar de Cuidado Seguro y Bellamente Preparado",
      subtitle: "Ubicado en 4 Norfolk Terrace en Dorchester, creado desde los cimientos para la seguridad, el confort y el aprendizaje activo.",
      items: [
        {
          id: "bilingual",
          title: "Inmersión Total en Inglés y Español",
          description: "Los niños absorben ambos idiomas de manera natural cada día mediante canciones, cuentos interactivos y conversaciones en la mesa.",
          tag: "Doble Idioma"
        },
        {
          id: "home-like",
          title: "Calidez Familiar y Cuidado Nutritivo",
          description: "Lejos de la frialdad de guarderías masivas. Nuestro cálido hogar hace que cada niño se sienta protegido, querido y seguro como en su propia casa.",
          tag: "Calor de Hogar"
        },
        {
          id: "reading-nook",
          title: "Rincón de Lectura y Espacio Sensorial Montessori",
          description: "Una acogedora esquina iluminada con estantes de madera a la altura del niño, libros ilustrados, cojines suaves y rompecabezas.",
          tag: "Rincón Montessori"
        },
        {
          id: "parking-gate",
          title: "Entrada con Driveway Privado y Portón Seguro",
          description: "Olvídate de buscar parqueo en la calle. Estaciona cómodamente en nuestro driveway privado con entrada de acceso seguro y portón.",
          tag: "Seguridad y Comodidad"
        },
        {
          id: "parks-school",
          title: "Parque Infantil Cercano y Escuela Elemental",
          description: "A pasos de un parque con juegos y a poca distancia de la escuela elemental del vecindario, permitiendo paseos seguros al aire libre.",
          tag: "Vecindario Amigable"
        },
        {
          id: "subsidy",
          title: "Aceptamos Subsidios Estatales y Vouchers EEC",
          description: "La educación temprana de calidad debe estar al alcance de toda familia trabajadora. Aceptamos con orgullo los vouchers del estado.",
          tag: "Vouchers Aceptados"
        }
      ]
    },
    schedule: {
      badge: "Rutina Diaria",
      title: "Un Ritmo Diario Armonioso y Predecible",
      subtitle: "Los niños crecen mejor cuando conocen su rutina. Nuestro horario equilibra juego dinámico, concentración Montessori y comidas nutritivas.",
      hoursNotice: "Horario de Atención: 8:00 AM – 5:00 PM, Lunes a Viernes",
      items: [
        {
          time: "8:00 AM – 8:45 AM",
          title: "Bienvenida Cálida y Juego Libre Tranquilo",
          description: "Recepción con cariño en español e inglés, rompecabezas de madera y actividades motrices suaves.",
          category: "routine"
        },
        {
          time: "8:45 AM – 9:30 AM",
          title: "Desayuno Nutritivo e Higiene",
          description: "Avena caliente, fruta fresca de temporada, leche o agua, seguido del lavado de manitos.",
          category: "meal"
        },
        {
          time: "9:30 AM – 10:15 AM",
          title: "Círculo Matutino y Canciones Bilingües",
          description: "Canción de bienvenida, calendario, estado del tiempo en ambos idiomas y cuentos grupales.",
          category: "learning"
        },
        {
          time: "10:15 AM – 11:15 AM",
          title: "Exploración al Aire Libre y Paseo al Parque",
          description: "Juego motriz, aire fresco, carreras en nuestro patio seguro o caminatas supervisadas al parque cercano.",
          category: "outdoor"
        },
        {
          time: "11:15 AM – 12:15 PM",
          title: "Centros de Aprendizaje Montessori y Arte",
          description: "Materiales sensoriales de madera, pintura de acuarela no tóxica, plastilina y letras táctiles.",
          category: "learning"
        },
        {
          time: "12:15 PM – 1:00 PM",
          title: "Almuerzo Casero Familiar",
          description: "Comida caliente balanceada que estimula comer de forma autónoma, buenos modales y plática amena.",
          category: "meal"
        },
        {
          time: "1:00 PM – 3:00 PM",
          title: "Hora de Descanso y Siesta Reparadora",
          description: "Música de cuna instrumental, luces tenues, camitas individuales higienizadas y descanso tranquilo.",
          category: "rest"
        },
        {
          time: "3:00 PM – 3:45 PM",
          title: "Despertar, Higiene y Merienda de la Tarde",
          description: "Despertar gradual con abrazos, cambio de pañal/baño y merienda saludable (yogur, fruta, galletitas).",
          category: "meal"
        },
        {
          time: "3:45 PM – 4:30 PM",
          title: "Cuentacuentos Bilingüe y Música Sensorial",
          description: "Lectura de libros en inglés y español, juego con instrumentos musicales infantiles y bloques.",
          category: "learning"
        },
        {
          time: "4:30 PM – 5:00 PM",
          title: "Juego Suave, Recogida y Resumen a Padres",
          description: "Preparación de mochilas y conversación directa con mamá o papá sobre las alegrías y logros del día.",
          category: "routine"
        }
      ]
    },
    gallery: {
      badge: "Galería de Momentos",
      title: "Un Vistazo a la Vida en Pasitos",
      subtitle: "Capturando la magia cotidiana: pintura con los deditos, celebraciones festivas, Acción de Gracias y horas de lectura acogedoras.",
      instagramNotice: "Sigue las aventuras y actividades creativas de nuestros pequeños alumnos."
    },
    testimonials: {
      badge: "Opiniones de Familias",
      title: "El Cariño de Familias en Dorchester y Boston",
      subtitle: "Nada nos llena más de orgullo que la confianza de las madres y padres que nos entregan lo más valioso de sus vidas.",
      items: [
        {
          name: "Sofía Méndez",
          child: "Mamá de Mateo, 2 años",
          neighborhood: "Dorchester (Ashmont)",
          quote: "Encontrar a Elvira y a Pasitos de Aprendizaje fue una bendición absoluta. Mateo empezó a los 14 meses y su vocabulario en español e inglés floreció de inmediato. Cada mañana corre feliz a abrazar a Elvira. Su casa está impecable, llena de paz y mucho amor.",
          rating: 5
        },
        {
          name: "Marcus y David Chen-Keller",
          child: "Papás de Camila, 3.5 años",
          neighborhood: "Dorchester (Codman Square)",
          quote: "Tener el driveway privado en Norfolk Terrace es una maravilla todos los días: jamás tenemos que dar vueltas buscando parqueo. Camila ha crecido muchísimo con la pedagogía Montessori de Elvira; ya escribe letras, cuenta en español y ayuda en casa. Se nota su certificación CDA en cada detalle.",
          rating: 5
        },
        {
          name: "Carmen Rosario",
          child: "Mamá de Lucas, 11 meses",
          neighborhood: "Límite Mattapan / Dorchester",
          quote: "Volver a trabajar me daba pánico, pero Elvira me hizo sentir en familia desde el primer día. Me ayudó paso a paso con el papeleo del voucher del estado. Las fotos que me manda a diario me permiten trabajar con el corazón en paz. ¡Recomendada al 100%!",
          rating: 5
        }
      ]
    },
    location: {
      badge: "Ubicación",
      title: "Fácilmente Accesible en Dorchester, MA",
      subtitle: "Ubicados en 4 Norfolk Terrace en una calle residencial apacible con entrada privada para estacionar sin estrés.",
      addressLabel: "Dirección Física",
      addressText: "4 Norfolk Terrace, Dorchester, MA 02124",
      phoneLabel: "Teléfono Directo",
      hoursLabel: "Horario de Cuidado",
      hoursText: "8:00 AM – 5:00 PM (Lunes a Viernes)",
      licenseLabel: "Licencia Estatal EEC",
      licenseText: "Licencia MA #9144837",
      features: [
        "Estacionamiento privado en el driveway — cero problemas de parqueo en la calle",
        "Portón de seguridad cerrado con timbre de acceso",
        "A poca distancia de un parque infantil con columpios y áreas verdes",
        "Cerca de la escuela elemental local y transporte público (Talbot Ave / Ashmont / Autobuses)",
        "Calle residencial tranquila y familiar"
      ]
    },
    form: {
      badge: "Inscripciones y Visitas",
      title: "Programa una Visita Privada",
      subtitle: "Los cupos en nuestro hogar de cuidado son limitados para asegurar una atención personalizada y grupos pequeños. Contáctanos hoy.",
      childName: "Nombre Completo del Niño(a)",
      childAge: "Edad del Niño(a) o Fecha Estimada",
      childAgePlaceholder: "ej. 18 meses, 3 años, o nacimiento en julio",
      parentName: "Nombre del Padre / Madre o Tutor",
      phone: "Número de Teléfono",
      email: "Correo Electrónico",
      preferredDate: "Fecha Deseada para la Visita",
      programInterest: "Programa de Interés",
      selectProgram: "Selecciona un programa",
      infantOption: "Cuidado de Bebés (0 – 15 meses)",
      toddlerOption: "Programa para Toddlers (15 meses – 2.9 años)",
      preschoolOption: "Preparación Preescolar (2.9 – 5 años)",
      subsidyQuestion: "¿Planeas utilizar un voucher o subsidio estatal de cuidado infantil?",
      subsidyYes: "Sí, tengo o solicitaré voucher EEC",
      subsidyNo: "No, pago privado",
      notes: "Preguntas, Alergias o Notas Adicionales",
      notesPlaceholder: "Cuéntale a Elvira sobre las necesidades de tu niño(a), horarios o dudas...",
      submitBtn: "Solicitar Visita Privada",
      submitting: "Enviando Solicitud...",
      successTitle: "¡Solicitud de Visita Recibida!",
      successMessage: "¡Muchas gracias! Elvira Castillo revisará tu información y te contactará por teléfono o WhatsApp al (857) 308-9764 dentro de 24 horas hábiles para coordinar el horario de tu visita.",
      closeBtn: "Cerrar Ventana",
      directContactNotice: "¿Necesitas respuesta inmediata? Llama o envía un WhatsApp a Elvira:"
    },
    nutrition: {
      badge: "Nutrición Saludable y Estándares CACFP",
      title: "Comida Casera, Fresca y Nutritiva Cada Día",
      subtitle: "Creemos firmemente que una buena nutrición alimenta el aprendizaje alegre y el crecimiento saludable. Cada platillo se prepara fresco a diario con granos enteros, vegetales orgánicos, proteínas limpias y sin conservantes artificiales.",
      highlights: [
        {
          title: "Todas las Comidas y Meriendas Incluidas",
          desc: "Desayuno/merienda matutina, almuerzo caliente servido estilo familiar y merienda de la tarde 100% incluidos sin costo extra."
        },
        {
          title: "Equilibrio Nutricional USDA CACFP",
          desc: "Cumplimos y superamos las pautas dietéticas de Massachusetts para el desarrollo cerebral y físico óptimo en la primera infancia."
        },
        {
          title: "Cocina Libre de Nueces y Alergias",
          desc: "Ambiente libre de cacahuates y nueces, con adaptaciones individuales para intolerancia a la lactosa, celiaquía o dietas familiares."
        },
        {
          title: "Hábitos Saludables y Autonomía en la Mesa",
          desc: "Inspiración Montessori: los niños aprenden a servirse agua, comer con cubiertos, lavarse las manos y convivir con alegría."
        }
      ],
      sampleMenu: [
        {
          day: "Lunes",
          morning: "Tostada integral con rodajas de manzana fresca y leche",
          lunch: "Arroz con pollo casero, zanahorias al vapor y ejotes tiernos",
          snack: "Yogurt griego cremoso con arándanos frescos"
        },
        {
          day: "Martes",
          morning: "Avena calientita con canela y fresas frescas picadas",
          lunch: "Guiso suave de lentejas con arroz integral, camote y aguacate maduro",
          snack: "Cubitos de queso cheddar y triangulitos de pan pita integral"
        },
        {
          day: "Miércoles",
          morning: "Muffins caseros de plátano y avena con leche o agua pura",
          lunch: "Alpóndigas magras de pavo en salsa de tomate natural, penne y brócoli",
          snack: "Rodajas crujientes de pepino con hummus suave"
        },
        {
          day: "Jueves",
          morning: "Huevos revueltos frescos con pan tostado 100% integral",
          lunch: "Tacos suaves de pollo deshebrado y maíz dulce con rebanadas de melón cantaloupe",
          snack: "Puré de manzana recién hecho y galletitas graham"
        },
        {
          day: "Viernes",
          morning: "Cereal integral con frutas del bosque y leche fría",
          lunch: "Filete de salmón horneado o tazón de frijoles negros con chícharos y platanitos maduros",
          snack: "Gajitos de naranja dulce y galletas de animalitos"
        }
      ]
    },
    safety: {
      badge: "Seguridad, Higiene y Licencia EEC",
      title: "El Bienestar de tu Hijo(a) es Nuestra Mayor Responsabilidad",
      subtitle: "Desde acceso seguro con timbre hasta desinfección de grado médico, cada espacio de Pasitos de Aprendizaje está preparado para que los pequeños crezcan en total tranquilidad y protección.",
      protocols: [
        {
          title: "Licencia Oficial de Massachusetts EEC #9144837",
          desc: "Guardería familiar rigurosamente inspeccionada, certificada y auditada por el Departamento de Educación y Cuidado Temprano de MA."
        },
        {
          title: "100% Certificadas en RCP Pediátrico y Primeros Auxilios",
          desc: "Tanto la directora Elvira Castillo como nuestra asistente certificada mantienen credenciales activas de la Cruz Roja Americana."
        },
        {
          title: "Verificación de Antecedentes CORI / SORI y Huellas Dactilares",
          desc: "Todas las educadoras y adultos en el hogar pasan por una exhaustiva verificación de seguridad del estado de Massachusetts."
        },
        {
          title: "Perímetro Enrejado y Salida con Identificación Oficial",
          desc: "Puerta de seguridad con timbre. Los niños únicamente se entregan a padres o tutores autorizados previamente con documento oficial con foto."
        },
        {
          title: "Sanitización Diaria de Grado Médico",
          desc: "Los juguetes Montessori de madera, cunas, estaciones de cambio y superficies se desinfectan a diario con productos aprobados por la EPA y seguros para niños."
        },
        {
          title: "Purificadores de Aire HEPA y Luz Natural Abundante",
          desc: "Ventilación continua y habitaciones llenas de luz solar que promueven la salud respiratoria, la calma emocional y un sueño reparador."
        }
      ]
    },
    steps: {
      badge: "Guía de Admisiones",
      title: "Cómo Inscribir a tu Pequeño en 4 Pasos",
      subtitle: "Hacemos que el proceso de integración a nuestra familia sea cálido, transparente y sin complicaciones para las familias trabajadoras.",
      items: [
        {
          step: "01",
          title: "Agenda tu Visita Privada",
          desc: "Reserva un recorrido en persona para conocer nuestro salón Montessori, las cunitas de descanso y conversar con Elvira y nuestra asistente."
        },
        {
          step: "02",
          title: "Evaluación y Registro",
          desc: "Platicamos sobre la personalidad, horarios de sueño y alimentación de tu niño(a). Completamos el paquete oficial de inscripción EEC."
        },
        {
          step: "03",
          title: "Plan de Matrícula o Verificación de Voucher",
          desc: "Aceptamos vouchers estatales de Child Care Choices of Boston (CCCB) o establecemos un plan de pago privado quincenal o mensual."
        },
        {
          step: "04",
          title: "Semana de Adaptación Amorosa",
          desc: "Un horario gradual y flexible durante los primeros días para que tu niño(a) se sienta 100% seguro, querido y en confianza antes de jornadas completas."
        }
      ]
    },
    tuition: {
      badge: "Precios y Subsidios Estatales",
      title: "Matrícula Clara y Aceptación de Vouchers de Massachusetts",
      subtitle: "La educación bilingüe de calidad debe estar al alcance de todas las familias de Dorchester y Boston. Aceptamos con orgullo vouchers estatales.",
      voucherHeadline: "Aceptamos Vouchers Estatales de Cuidado Infantil (EEC / CCCB)",
      voucherBody: "Si cuentas con un voucher de Child Care Choices of Boston (CCCB), DCF u otra entidad de Massachusetts, ¡tu niño(a) es bienvenido! Elvira te asesora personalmente con todo el trámite, renovaciones y confirmaciones estatales.",
      allInclusiveTitle: "Todo lo que Incluye tu Matrícula:",
      inclusions: [
        "Almuerzo caliente nutritivo y 2 meriendas diarias recién preparadas incluidos",
        "Todos los materiales didácticos Montessori, acuarelas, hojas y útiles de arte",
        "Reportes diarios con fotos, registro de logros y comunicación bilingüe continua",
        "Atención personalizada con Maestra Principal CDA + Asistente Certificada",
        "Espacio de estacionamiento privado en nuestro driveway en Norfolk Terrace"
      ],
      pricingTiers: [
        {
          category: "Bebés (0 – 15 Meses)",
          description: "Cuidado personalizado de hitos motores, horarios individuales de biberón/siesta y cantos bilingües.",
          schedule: "Lunes a Viernes, 8:00 AM – 5:00 PM",
          voucherEligible: "100% Elegible para Vouchers (CCCB / EEC)"
        },
        {
          category: "Toddlers (15 Meses – 2.9 Años)",
          description: "Exploración Montessori práctica, motricidad fina, cajas sensoriales y explosión de vocabulario.",
          schedule: "Lunes a Viernes, 8:00 AM – 5:00 PM",
          voucherEligible: "100% Elegible para Vouchers (CCCB / EEC)"
        },
        {
          category: "Preparación Preescolar (2.9 – 5 Años)",
          description: "Lectoescritura bilingüe, conteo matemático, valores sociales y preparación para Kindergarten.",
          schedule: "Lunes a Viernes, 8:00 AM – 5:00 PM",
          voucherEligible: "100% Elegible para Vouchers (CCCB / EEC)"
        }
      ]
    },
    faq: {
      badge: "¿Dudas Frecuentes?",
      title: "Preguntas Frecuentes de Familias",
      subtitle: "Respuestas claras a las preguntas que más nos hacen los padres sobre nuestro currículo bilingüe, subsidios y rutina diaria.",
      items: [
        {
          q: "¿Aceptan vouchers del estado de Massachusetts (EEC / CCCB)?",
          a: "¡Sí! Aceptamos con orgullo vouchers y subsidios de Child Care Choices of Boston (CCCB), Massachusetts Department of Early Education and Care (EEC) y DCF. Elvira te asesora personalmente con toda la documentación."
        },
        {
          q: "¿Qué edades reciben en la guardería?",
          a: "Recibimos bebés desde las 4 semanas de nacidos, toddlers (15 meses a 2.9 años) y preescolares hasta los 5 años. Nuestro entorno familiar permite que los hermanitos convivan juntos mientras reciben estímulo de acuerdo a su edad."
        },
        {
          q: "¿Cuál es la proporción educadora-niño?",
          a: "Contamos con Elvira Castillo (Educadora Principal CDA) y nuestra Asistente Certificada trabajando juntas en el hogar, lo que brinda una supervisión cercana, amorosa e individualizada que los grandes centros comerciales no pueden ofrecer."
        },
        {
          q: "¿Cómo funciona la inmersión bilingüe si mi hijo(a) solo habla inglés o solo español?",
          a: "Los niños pequeños aprenden idiomas de forma natural y asombrosa. Hablamos con calidez y paciencia tanto en inglés como en español a través de canciones, cuentos, juegos y rutinas cotidianas. Desarrollan comprensión bilingüe sin ninguna presión."
        },
        {
          q: "¿Cuáles son sus horarios de atención?",
          a: "Estamos abiertas de lunes a viernes, de 8:00 AM a 5:00 PM durante todo el año. Además, disponemos de driveway privado en Norfolk Terrace para que dejes y recojas a tu pequeño sin estrés de estacionamiento."
        },
        {
          q: "¿Qué debo traer el primer día de clases?",
          a: "Trae 2 a 3 cambios completos de ropa según la temporada, una sabanita o cobija suave para la cuna de siesta, pañales y toallitas húmedas (si aplica), y su fórmula o biberones. ¡Nosotras proveemos todas las comidas, meriendas, leche, agua y materiales educativos!"
        },
        {
          q: "¿Cuál es la política en caso de fiebre o enfermedad?",
          a: "Para proteger la salud de todos los pequeños y educadoras, si un niño presenta fiebre de 100.4°F (38°C) o más, vómito o malestar contagioso, debe descansar en casa. Puede regresar una vez que cumpla 24 horas continuas sin fiebre ni síntomas sin necesidad de medicamentos."
        },
        {
          q: "¿Cómo puedo agendar una visita guiada?",
          a: "Puedes hacer clic en el botón 'Agendar Visita' en esta página, o llamar/enviar un WhatsApp directamente a Elvira al (857) 308-9764. Ofrecemos visitas por las mañanas o al final de la tarde."
        }
      ]
    },
    footer: {
      aboutText: "Cuidado infantil familiar con licencia EEC e inspiración Montessori. Ofrecemos educación bilingüe temprana amorosa y de alta calidad para bebés, toddlers y preescolares en Dorchester, MA.",
      quickLinks: "Navegación Rápida",
      contactInfo: "Contacto y Ubicación",
      rights: "Todos los derechos reservados. Guardería familiar con Licencia MA #9144837.",
      bilingualNote: "We speak English and Spanish fluently."
    }
  }
};
