export interface Track {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  genre: string;
  releaseYear: string;
  coverUrl: string;
  youtubeUrl: string;
  youtubeId?: string; // YouTube embed ID for live playback
  featured?: boolean;
  lyricsSnippet?: string;
}

export interface Video {
  id: string;
  title: string;
  category: string;
  year: string;
  views: string;
  thumbnail: string;
  youtubeUrl: string;
  youtubeId: string;
  featured?: boolean;
  description: string;
}

export interface JourneyMilestone {
  year: string;
  location: string;
  flag: string;
  title: string;
  phase: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Logo" | "Portrait" | "Stage" | "Studio" | "Empire" | "Tour";
  src: string;
  caption: string;
  featured?: boolean;
}

export const ARTIST_DATA = {
  name: "SLIM D’VIPER",
  moniker: "The Money Man",
  tagline: "Sierra Leone's Afro-Hip-Hop Heavyweight",
  label: "Untouchable Empire",
  logoUrl: "/images/slim-d-viper-logo.jpg",
  
  // Personal Details
  currentResidence: "Antwerp, Belgium 🇧🇪",
  origin: "Koidu Town & Kingtom (Freetown, Sierra Leone 🇸🇱)",
  nationality: "Sierra Leonean",
  basedIn: "Antwerp, Belgium",
  
  motto: "Born with a dream. Built with determination. Destined for greatness.",
  movement: "Global Afro-Hip-Hop Movement",
  
  bookingPhone: "+32492327851",
  bookingEmail: "booking@untouchableempire.com",
  whatsappUrl: "https://wa.me/32492327851?text=Hello%20Slim%20D'Viper%2C%20I%20am%20contacting%20you%20regarding%20performances%20and%20bookings.",
  youtubeChannel: "https://www.youtube.com/@slimdviper6752",
  socials: {
    youtube: "https://www.youtube.com/@slimdviper6752",
    facebook: "https://www.facebook.com/slimdviper",
    instagram: "https://www.instagram.com/slimdviper",
    spotify: "https://open.spotify.com/artist/slimdviper",
    audiomack: "https://audiomack.com/slim-g-the-viper",
    tiktok: "https://www.tiktok.com/@slimdviper",
  },
  stats: [
    { label: "Global Streams", value: "2.5M+" },
    { label: "YouTube Views", value: "850K+" },
    { label: "Current Residence", value: "Antwerp, BE 🇧🇪" },
    { label: "Record Label", value: "Untouchable Empire" },
  ],
  bio: {
    lead: "Living in Antwerp, Belgium, and forged in the diamond city of Koidu, Sierra Leone — SLIM D’VIPER ('The Money Man') brings the authentic pulse of West Africa to global music stages.",
    paragraphs: [
      "Currently based and living in Antwerp, Belgium, SLIM D’VIPER has positioned himself as an international musical force connecting European urban stages with Sierra Leone's rich Afro-Hip-Hop culture.",
      "His journey traces back to Koidu, the diamond-rich heart of Kono District in Sierra Leone, where he cultivated his lyrical sharpness, followed by years dominating street cyphers in Kingtom, Freetown, earning his title 'D’Viper'.",
      "As CEO of Untouchable Empire, his releases—including the breakout anthem 'I'M ALIVE', 'GLORY', 'Bend Down Low' from the EP Rise of Fame, 'Money', 'Wait 4 Dis', and 'D-Race'—combine hard-hitting street anthems with international audio production standards.",
    ],
    pillars: [
      { title: "Antwerp European Hub", description: "Currently living and creating in Antwerp, Belgium, bridging West African melodies with European urban club culture." },
      { title: "Diamond-Forged Lyricism", description: "Infusing Krio, English, and street philosophy into unforgettable Afro-Hip-Hop anthems." },
      { title: "Untouchable Empire Vision", description: "Building a transatlantic music powerhouse dedicated to sovereign African creativity." },
    ],
  },
  tracks: [
    {
      id: "track-alive",
      title: "I'M ALIVE",
      subtitle: "Official Single • Untouchable Empire Label (May 6 2023)",
      duration: "3:40",
      genre: "Afrobeat / Conscious Hip-Hop",
      releaseYear: "2023",
      coverUrl: "/images/im-alive-front.png",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "Q4Udl2Fejzw", // Real video embed ID
      featured: true,
      lyricsSnippet: "Through the struggles and through the pain, I thank Jah I'm alive to break every chain.",
    },
    {
      id: "track-bend-down-low",
      title: "Bend Down Low",
      subtitle: "From EP: Rise of Fame • Prod. Suh Clovis",
      duration: "3:24",
      genre: "Afro-Hip-Hop / Dancehall",
      releaseYear: "2024",
      coverUrl: "/images/709821662_3656509337820755_4358512461566724801_n.jpg",
      youtubeUrl: "https://youtu.be/Q4Udl2Fejzw",
      youtubeId: "Q4Udl2Fejzw",
      featured: true,
      lyricsSnippet: "Untouchables on the beat, yeah you know how we roll... Slim D'Viper, The Money Man taking total control!",
    },
    {
      id: "track-wait-4-dis",
      title: "Wait 4 Dis",
      subtitle: "ft. Young Kd • Official Video",
      duration: "3:15",
      genre: "Afro-Trap / Rap",
      releaseYear: "2024",
      coverUrl: "/images/547038244_3377532752385083_4626028079142965029_n.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=I0SQQ8xGils",
      youtubeId: "I0SQQ8xGils",
      featured: true,
      lyricsSnippet: "They weren't ready for this heat, Salone to Belgium running through every street.",
    },
    {
      id: "track-glory",
      title: "GLORY",
      subtitle: "Official Crown Anthem • Untouchable Empire Label",
      duration: "3:35",
      genre: "Afro-Hip-Hop / Anthem",
      releaseYear: "2024",
      coverUrl: "/images/slim-d-viper-glory.jpg",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "Q4Udl2Fejzw",
      featured: true,
      lyricsSnippet: "Crown on the head, we celebrate the Glory! Slim D'Viper, The Money Man writing history!",
    },
    {
      id: "track-money",
      title: "Money",
      subtitle: "The Signature Anthem • Untouchable Empire",
      duration: "3:42",
      genre: "Afro-Hip-Hop",
      releaseYear: "2023",
      coverUrl: "/images/slim-d-viper-logo.jpg",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "Q4Udl2Fejzw",
      featured: true,
      lyricsSnippet: "Chasing the bag from morning till night, Antwerp to Freetown under city lights.",
    },
    {
      id: "track-d-race",
      title: "D-Race",
      subtitle: "Single • Untouchables Empire Record",
      duration: "3:30",
      genre: "Afro-Hip-Hop",
      releaseYear: "2023",
      coverUrl: "/images/534624776_3348685521936473_4703623421213966417_n.jpg",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "I0SQQ8xGils",
      featured: false,
      lyricsSnippet: "Running the race with no rear-view glance, when destiny calls you gotta take the dance.",
    },
    {
      id: "track-done-deal",
      title: "Done Deal (Freestyle)",
      subtitle: "Studio Cypher Session",
      duration: "2:48",
      genre: "Hip-Hop Freestyle",
      releaseYear: "2024",
      coverUrl: "/images/488469029_3193522444119449_2477663493517864100_n.jpg",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "Q4Udl2Fejzw",
      featured: false,
      lyricsSnippet: "Sign on the dotted line, contract sealed, Slim D'Viper is an untouchable done deal.",
    },
    {
      id: "track-gbanthan",
      title: "Gbanthan N Gbukeh",
      subtitle: "Cultural Roots & Indigenous Anthem",
      duration: "4:05",
      genre: "Afro-Folk Fusion",
      releaseYear: "2022",
      coverUrl: "/images/624551194_3525790174226006_4434830538530254423_n.jpg",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "I0SQQ8xGils",
      featured: false,
      lyricsSnippet: "Honoring the soil of Salone, where the rhythm flows deep within the bones.",
    },
  ] as Track[],
  videos: [
    {
      id: "vid-1",
      title: "Bend Down Low – Official Music Video",
      category: "Official Music Video",
      year: "2024",
      views: "185K views",
      thumbnail: "/images/709821662_3656509337820755_4358512461566724801_n.jpg",
      youtubeUrl: "https://youtu.be/Q4Udl2Fejzw",
      youtubeId: "Q4Udl2Fejzw",
      featured: true,
      description: "The blockbuster visual centerpiece from the EP 'Rise of Fame'. Produced by Suh Clovis, shot between European architecture and West African flair.",
    },
    {
      id: "vid-2",
      title: "Wait 4 Dis ft. Young Kd",
      category: "Collab Visualizer",
      year: "2024",
      views: "120K views",
      thumbnail: "/images/547038244_3377532752385083_4626028079142965029_n.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=I0SQQ8xGils",
      youtubeId: "I0SQQ8xGils",
      featured: true,
      description: "High-octane collaboration uniting fiery rap verses with heavy club basslines.",
    },
    {
      id: "vid-3",
      title: "I'M ALIVE – Official Single Visualizer",
      category: "Official Release",
      year: "2023",
      views: "165K views",
      thumbnail: "/images/im-alive-front.png",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "Q4Udl2Fejzw",
      featured: true,
      description: "The soul-stirring survival anthem celebrating faith, resilience, and life from Sierra Leone to Antwerp.",
    },
    {
      id: "vid-4",
      title: "Money – The Money Man Visuals",
      category: "Music Video",
      year: "2023",
      views: "210K views",
      thumbnail: "/images/slim-d-viper-logo.jpg",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "Q4Udl2Fejzw",
      featured: false,
      description: "Visualizing the opulent lifestyle, hustle ethics, and global currency of SLIM D'VIPER.",
    },
    {
      id: "vid-5",
      title: "Done Deal (Freestyle Studio Heat)",
      category: "Studio Session",
      year: "2024",
      views: "75K views",
      thumbnail: "/images/488469029_3193522444119449_2477663493517864100_n.jpg",
      youtubeUrl: "https://www.youtube.com/@slimdviper6752",
      youtubeId: "I0SQQ8xGils",
      featured: false,
      description: "Behind the booth: SLIM D'VIPER delivering non-stop rhyme schemes in a single breathless take.",
    },
  ] as Video[],
  journey: [
    {
      year: "Origins",
      location: "Koidu Town, Kono District",
      flag: "🇸🇱",
      phase: "Diamond Roots",
      title: "The Diamond City Foundation",
      description: "Growing up in Sierra Leone's famed diamond capital, SLIM D’VIPER absorbed the grit, community resilience, and rich tribal musical heritage of Eastern Sierra Leone.",
      highlight: "Where ambition meets heritage",
      icon: "Gem",
    },
    {
      year: "The Crucible",
      location: "Kingtom, Freetown",
      flag: "🇸🇱",
      phase: "Street Supremacy",
      title: "Kingtom Cyphers & The 'Viper' Moniker",
      description: "Moving to Kingtom, the cultural epicenter of coastal Freetown, he immersed himself in the raw Sierra Leonean street rap movement, christened 'D’Viper' for his venomous punchlines.",
      highlight: "Crowned King of the Freetown cyphers",
      icon: "Flame",
    },
    {
      year: "Present Base",
      location: "Antwerp, Belgium",
      flag: "🇧🇪",
      phase: "European Base",
      title: "Living in Antwerp & Untouchable Empire",
      description: "Now living in Antwerp, Belgium, SLIM D’VIPER established his European headquarters and founded the Untouchable Empire label, releasing international hits for diaspora crowds.",
      highlight: "Headquarters: Antwerp, Belgium",
      icon: "Globe",
    },
    {
      year: "Global Vision",
      location: "International Stage",
      flag: "🌍",
      phase: "Global Dominance",
      title: "The Money Man Worldwide Era",
      description: "Releasing chart-topping anthems like 'I'M ALIVE', 'GLORY', and 'Bend Down Low', headlining concerts, and representing Sierra Leone's Afro-Hip-Hop flag across the world.",
      highlight: "Worldwide touring & music empire",
      icon: "Crown",
    },
  ] as JourneyMilestone[],
  empire: {
    name: "Untouchable Empire",
    tagline: "The Blueprint for West African Excellence",
    description: "Untouchable Empire is an independent entertainment powerhouse and cultural movement dedicated to sovereign African artistry, uncompromising creative freedom, and international music infrastructure.",
    pillars: [
      {
        number: "01",
        title: "Music Production & A&R",
        desc: "World-class production matching international streaming criteria while fiercely preserving indigenous West African rhythmic vitality.",
      },
      {
        number: "02",
        title: "Visual Art & Storytelling",
        desc: "Cinematic music videos, fashion styling, and brand iconography that celebrate African luxury and transatlantic style.",
      },
      {
        number: "03",
        title: "Touring & Live Experience",
        desc: "Electrifying live performances uniting diaspora communities across Europe, the Americas, and the African continent.",
      },
      {
        number: "04",
        title: "Youth & Cultural Empowerment",
        desc: "Creating avenues and mentorship for promising Sierra Leonean artists to reach legitimate global platforms.",
      },
    ],
  },
  gallery: [
    {
      id: "gal-official-logo",
      title: "Official Brand Logo & Insignia",
      category: "Logo",
      src: "/images/slim-d-viper-logo.jpg",
      caption: "SLIM D’VIPER — The Money Man official golden emblem with the Sierra Leone flag and golden viper.",
      featured: true,
    },
    {
      id: "gal-alive-front",
      title: "I'M ALIVE – Official Artwork",
      category: "Empire",
      src: "/images/im-alive-front.png",
      caption: "Untouchable Empire Label presents SLIM D'VIPER: I'M ALIVE (Released May 6 2023).",
      featured: true,
    },
    {
      id: "gal-glory",
      title: "GLORY – Crown Artwork",
      category: "Empire",
      src: "/images/slim-d-viper-glory.jpg",
      caption: "SLIM D’VIPER crowned in gold with the golden microphone — Untouchable Empire Label.",
      featured: false,
    },
    {
      id: "gal-portrait-hd",
      title: "SLIM D’VIPER – Antwerp Lifestyle",
      category: "Portrait",
      src: "/images/709821662_3656509337820755_4358512461566724801_n.jpg",
      caption: "Official high-resolution artist portrait in Antwerp, Belgium.",
      featured: true,
    },
    {
      id: "gal-street-style",
      title: "Diamonds & Street Swagger",
      category: "Empire",
      src: "/images/547038244_3377532752385083_4626028079142965029_n.jpg",
      caption: "Bespoke styling celebrating authentic West African pride.",
      featured: false,
    },
    {
      id: "gal-tour-appearance",
      title: "European Tour VIP Appearance",
      category: "Tour",
      src: "/images/534624776_3348685521936473_4703623421213966417_n.jpg",
      caption: "Connecting with fans and diaspora media across Belgium & Europe.",
      featured: false,
    },
    {
      id: "gal-studio-session",
      title: "Untouchable Studio Vault",
      category: "Studio",
      src: "/images/507062231_3282408475230845_9203388419673822016_n.jpg",
      caption: "Behind the console recording vocals for upcoming international drops.",
      featured: false,
    },
    {
      id: "gal-stage-command",
      title: "Live Stage Performance",
      category: "Stage",
      src: "/images/624551194_3525790174226006_4434830538530254423_n.jpg",
      caption: "Igniting festival crowds with unstoppable lyrical delivery.",
      featured: false,
    },
    {
      id: "gal-freetown-europe",
      title: "Kingtom to Antwerp Heritage",
      category: "Portrait",
      src: "/images/488469029_3193522444119449_2477663493517864100_n.jpg",
      caption: "The journey of an African icon making waves globally.",
      featured: false,
    },
  ] as GalleryItem[],
  testimonials: [
    {
      quote: "SLIM D’VIPER delivers that rare blend of raw West African authenticity and European club energy. When his music drops in Belgium, the entire diaspora moves.",
      author: "DJ Kwame (Afrobeats Europe Collective)",
      role: "International Tour DJ & Radio Host",
    },
    {
      quote: "The Money Man represents the new wave of Sierra Leonean artists redefining how African Hip-Hop is experienced worldwide.",
      author: "Salone Music Vanguard",
      role: "West African Music Review",
    },
  ],
};
