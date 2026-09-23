export interface GalleryPhoto {
  id: string;
  titleEn: string;
  titleEs: string;
  categoryEn: string;
  categoryEs: string;
  src: string;
  date: string;
  likes: number;
  captionEn: string;
  captionEs: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-1",
    titleEn: "Sensory Watercolor Painting",
    titleEs: "Pintura Sensorial con Acuarelas",
    categoryEn: "Creative Arts",
    categoryEs: "Arte Creativo",
    src: "/src/assets/images/gallery_crafts_painting_1790173691719.jpg",
    date: "Dorchester Studio",
    likes: 48,
    captionEn: "Exploring bright pigments, fine motor brush control, and freedom of expression at our toddler art table.",
    captionEs: "Explorando colores vibrantes, control del pincel y libertad de expresión en nuestra mesita de arte."
  },
  {
    id: "photo-2",
    titleEn: "Thanksgiving Gratitude Celebration",
    titleEs: "Celebración de Acción de Gracias",
    categoryEn: "Celebrations",
    categoryEs: "Celebraciones",
    src: "/src/assets/images/gallery_thanksgiving_craft_1790173709135.jpg",
    date: "November Tradition",
    likes: 62,
    captionEn: "Handprint turkeys, autumn leaf collages, and sharing gratitude for our wonderful daycare family.",
    captionEs: "Pavitos con huellas de manos, hojas de otoño y compartiendo momentos de gratitud en familia."
  },
  {
    id: "photo-3",
    titleEn: "Christmas & Holiday Magic",
    titleEs: "Navidad y Magia Festiva",
    categoryEn: "Holidays",
    categoryEs: "Días Festivos",
    src: "/src/assets/images/gallery_christmas_celebration_1790173726194.jpg",
    date: "December Festivity",
    likes: 74,
    captionEn: "Festive songs in Spanish & English, handcrafted ornaments, and holiday storybook reading by the glowing tree.",
    captionEs: "Villancicos en inglés y español, adornos hechos a mano y cuentos navideños junto al arbolito."
  },
  {
    id: "photo-4",
    titleEn: "Montessori Wooden Blocks & Architecture",
    titleEs: "Construcción Montessori con Bloques",
    categoryEn: "Montessori",
    categoryEs: "Montessori",
    src: "/src/assets/images/hero_daycare_montessori_1790173657765.jpg",
    date: "STEM Play",
    likes: 55,
    captionEn: "Spatial balance, focus, and engineering foundations on our cozy classroom rug.",
    captionEs: "Equilibrio espacial, concentración y nociones tempranas de arquitectura en nuestra alfombra."
  },
  {
    id: "photo-5",
    titleEn: "Bilingual Storytime Circle",
    titleEs: "Círculo de Cuentos Bilingües",
    categoryEn: "Language",
    categoryEs: "Lenguaje",
    src: "/src/assets/images/gallery_story_time_circle_1790173849561.jpg",
    date: "Daily Circle",
    likes: 51,
    captionEn: "Interactive dual-language reading sparking curiosity, vocabulary, and active listening.",
    captionEs: "Lectura interactiva en dos idiomas estimulando vocabulario, imaginación y escucha activa."
  },
  {
    id: "photo-6",
    titleEn: "Outdoor Patio & Sensory Garden",
    titleEs: "Patio y Jardín Sensorial al Aire Libre",
    categoryEn: "Outdoor Play",
    categoryEs: "Al Aire Libre",
    src: "/src/assets/images/gallery_outdoor_sensory_play_1790173832138.jpg",
    date: "Nature Walks",
    likes: 39,
    captionEn: "Connecting with nature, fresh air, planting herbs, and gross motor outdoor fun in our secure area.",
    captionEs: "Conectando con la naturaleza, aire puro, cuidado de plantitas y movimiento al aire libre."
  },
  {
    id: "photo-7",
    titleEn: "Music, Rhythm & Silk Scarves",
    titleEs: "Música, Ritmo y Cintas de Seda",
    categoryEn: "Music & Movement",
    categoryEs: "Música y Movimiento",
    src: "/src/assets/images/gallery_music_rhythm_dance_1790173865014.jpg",
    date: "Sensory Rhythm",
    likes: 58,
    captionEn: "Spanish folk songs, percussion maracas, and joyful sensory movement that develop coordination.",
    captionEs: "Canciones tradicionales, maracas de madera y movimiento rítmico alegre para la coordinación."
  },
  {
    id: "photo-8",
    titleEn: "Warm Individualized Reading Sanctuary",
    titleEs: "Rincón Acogedor de Lectura Individual",
    categoryEn: "Montessori Nook",
    categoryEs: "Rincón Montessori",
    src: "/src/assets/images/about_elvira_educator_1790173674805.jpg",
    date: "Nurturing Care",
    likes: 67,
    captionEn: "One-on-one attention, patient emotional coaching, and fostering a lifelong love of books with Elvira.",
    captionEs: "Atención individualizada, contención amorosa y fomentando el amor por los libros junto a Elvira."
  },
  {
    id: "photo-9",
    titleEn: "Plan Curricular Mensual Binder",
    titleEs: "Carpeta del Plan Curricular Mensual",
    categoryEn: "Curriculum",
    categoryEs: "Currículo",
    src: "/src/assets/images/curriculum_binder_plan_1790174324280.jpg",
    date: "Monthly Themes",
    likes: 83,
    captionEn: "Practical monthly curriculum plan ('Práctico para el aprendizaje de los niños') featuring watercolor arts, literacy, and Montessori exploration.",
    captionEs: "Plan curricular mensual práctico para el aprendizaje de los niños con proyectos de acuarela, lenguaje y método Montessori."
  },
  {
    id: "photo-10",
    titleEn: "CDA Lead Educator & Certified Assistant Team",
    titleEs: "Equipo de Educadora Líder CDA y Asistente",
    categoryEn: "Our Team",
    categoryEs: "Nuestro Equipo",
    src: "/src/assets/images/team_assistant_cert_1790174311107.jpg",
    date: "Certified Care",
    likes: 91,
    captionEn: "Compassionate certified early childhood professionals dedicated to guiding every milestone with love, patience, and safety.",
    captionEs: "Profesionales certificadas en primera infancia dedicadas a guiar cada hito con amor, paciencia y valores."
  }
];
