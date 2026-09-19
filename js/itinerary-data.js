/**
 * Liptis Nutrition Brussels & Ghent Standalone Event
 * Official 4-Day Itinerary Data (8 - 11 October 2026)
 * All food and dining provided during the event is strictly 100% Halal.
 */

const ITINERARY_DATA = [
  {
    dayNumber: 1,
    dayName: "Thursday",
    date: "8 October 2026",
    title: "Arrival, Meet & Greet & Welcome Dinner",
    summary: "Corporate delegation departure from Cairo on EgyptAir MS 725, airport meet & assist in Brussels, luxury coach transfer to Renaissance Brussels Hotel, Grand-Place tour, and 100% Halal welcome dinner at Le Mignon.",
    highlights: ["EgyptAir MS 725 Flight", "Renaissance Brussels Hotel", "UNESCO Grand-Place Tour", "100% Halal Welcome Dinner at Le Mignon"],
    events: [
      {
        time: "08:00 AM",
        endTime: "11:05 AM",
        title: "Delegation Gathering & Check-in Procedures",
        category: "flight",
        location: "Cairo International Airport (CAI), Terminal 3",
        mapsUrl: "https://maps.google.com/?q=Cairo+International+Airport+Terminal+3",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
        description: "Corporate delegation gathering and check-in procedures at Cairo International Airport Terminal 3 prior to flight departure.",
        notes: "Delegates should have passports valid for at least 6 months and Belgian Schengen visas readily accessible. Liptis event coordinators on site for assistance."
      },
      {
        time: "11:05 AM",
        endTime: "02:45 PM",
        title: "Departure & Flight Operation CAI → BRU",
        category: "flight",
        location: "EgyptAir Flight MS 725 (Cairo → Brussels)",
        mapsUrl: "https://www.google.com/travel/flights",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80",
        description: "Departure and direct flight operation on EgyptAir MS 725 from Cairo International Airport (CAI) to Brussels Airport (BRU).",
        notes: "Direct flight duration approx. 4 hours 40 minutes with inflight meal service."
      },
      {
        time: "02:45 PM",
        endTime: "04:00 PM",
        title: "Airport Meet & Assist upon Landing",
        category: "transfer",
        location: "Brussels Airport (BRU), Arrival Hall",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80",
        description: "Airport meet and assist upon landing at Brussels Airport (BRU).",
        notes: "Immigration clearance, baggage collection, and warm welcome by the dedicated Belgian travel operations team."
      },
      {
        time: "04:00 PM",
        endTime: "04:30 PM",
        title: "Exclusive Private Luxury Motorcoach Transfer",
        category: "transfer",
        location: "Brussels Airport (BRU) → Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Exclusive private luxury motorcoach transfer from Brussels Airport (BRU) to the Renaissance Brussels Hotel (Rue du Parnasse 19) via the E40 ring road.",
        notes: "Scenic transfer entering the European Quarter."
      },
      {
        time: "04:30 PM",
        endTime: "04:45 PM",
        title: "Express Group Check-in & Key Distribution",
        category: "hotel",
        location: "Renaissance Brussels Hotel Lobby",
        mapsUrl: "https://maps.google.com/?q=Rue+du+Parnasse+19,+1050+Brussels",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Seamless express group check-in assistance, pre-arranged room key distribution.",
        notes: "Hotel Address: Rue du Parnasse 19, 1050 Brussels. Tel: +32 2 505 29 29."
      },
      {
        time: "04:45 PM",
        endTime: "06:15 PM",
        title: "Relaxing Settling-In & Refresh Period",
        category: "leisure",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Relaxing settling-in period for delegates to refresh in their rooms, unpack, and prepare for the evening corporate welcome program.",
        notes: "Delegates may refresh in their rooms, unpack, and settle in comfortably prior to the evening program."
      },
      {
        time: "06:15 PM",
        endTime: "07:45 PM",
        title: "Transfer to Grand Palace & Free Time for Photos",
        category: "culture",
        location: "Grand-Place (Grote Markt), Brussels",
        mapsUrl: "https://maps.google.com/?q=Grand+Place+Brussels",
        image: "assets/images/venues/sightseeing-grand-place.jpg",
        description: "Transfer to Grand Palace & free time for photos. Immersive walking tour through the UNESCO World Heritage Grand-Place (Grote Markt), exploring ornate guildhalls, historical monuments, and the Gothic Town Hall.",
        notes: "Prime photo opportunity as the gilded facade lighting activates at dusk."
      },
      {
        time: "07:45 PM",
        endTime: "08:00 PM",
        title: "Walk to Le Mignon Restaurant",
        category: "transfer",
        location: "Quai aux Briques 20, Brussels",
        mapsUrl: "https://maps.google.com/?q=Quai+aux+Briques+20,+1000+Bruxelles",
        image: "assets/images/venues/dining-le-mignon.jpg",
        description: "Walk to Le Mignon Restaurant (Quai aux Briques 20).",
        notes: "Pleasant short stroll through the historic Sainte-Catherine fish market district."
      },
      {
        time: "08:00 PM",
        endTime: "10:00 PM",
        title: "Dinner at Le Mignon Restaurant",
        category: "dining",
        location: "Le Mignon Restaurant, Quai aux Briques 20",
        mapsUrl: "https://maps.google.com/?q=Le+Mignon+Quai+aux+Briques+20+Brussels",
        image: "assets/images/venues/dining-le-mignon.jpg",
        description: "Dinner. Official welcome dinner hosted by Liptis Nutrition leadership, celebrating fresh North Sea seafood, gourmet fish, and signature Belgian culinary specialties. Strictly 100% Halal.",
        notes: "Opening remarks by Liptis Nutrition delegation leaders. All food served is strictly 100% Halal."
      },
      {
        time: "10:00 PM",
        endTime: "10:30 PM",
        title: "Transfer Back to Hotel",
        category: "transfer",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Transfer back to hotel.",
        notes: "Private coach pick-up and transfer back to the Renaissance Brussels Hotel for overnight rest. Rest well ahead of Day 2."
      }
    ]
  },
  {
    dayNumber: 2,
    dayName: "Friday",
    date: "9 October 2026",
    title: "Executive Symposium, Brussels City Tour & Evening Dining",
    summary: "LIPTIS pediatric symposium, Atomium architectural tour, Royal Palace exterior visit, Manneken Pis, shopping along Rue Neuve, and 100% Halal dinner at Steak 'n' Chill.",
    highlights: ["Liptis Scientific Symposium", "Atomium Exploration [EE1]", "Royal Palace Exterior", "Manneken Pis & Chocolates", "Rue Neuve Retail", "100% Halal Dinner at Steak 'n' Chill"],
    events: [
      {
        time: "09:00 AM",
        endTime: "12:00 PM",
        title: "Liptis Scientific Symposium",
        category: "scientific",
        location: "Renaissance Brussels Hotel, Executive Ballroom",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
        description: "LIPTIS Symposium",
        notes: "Latest scientific data with our eminent speakers with interactive Q&A Session"
      },
      {
        time: "12:15 PM",
        endTime: "12:30 PM",
        title: "Coffee Break",
        category: "scientific",
        location: "Renaissance Brussels Hotel Foyer",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
        description: "Coffee Break",
        notes: "Gourmet coffee, artisan Belgian pastries, and informal collegial networking among attending doctors."
      },
      {
        time: "12:45 PM",
        endTime: "01:00 PM",
        title: "Group Gathering in Hotel Lobby & Boarding Coaches",
        category: "transfer",
        location: "Renaissance Brussels Hotel Lobby",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Group gathering in the hotel lobby and swift boarding of private coaches for the afternoon Brussels cultural expedition.",
        notes: "Get ready for the amazing tour and group photo"
      },
      {
        time: "01:00 PM",
        endTime: "01:45 PM",
        title: "Atomium Guided Tour & Photo Session [EE1]",
        category: "culture",
        location: "Atomium, Square de l'Atomium, Brussels",
        mapsUrl: "https://maps.google.com/?q=Atomium+Brussels",
        image: "assets/images/venues/sightseeing-atomium.jpg",
        description: "Guided architectural tour and group photo session at the iconic Atomium, detailing its historic 1958 World's Fair heritage and structural design.",
        coordinatorNote: "[EE1] Organizer Pacing Insight: 'Too much time' — 45 minutes for exterior & esplanade group photo session is ample. Prioritize the grand exterior angle for the delegation photo.",
        notes: "Iconic Belgian landmark depicting an iron crystal enlarged 165 billion times."
      },
      {
        time: "01:45 PM",
        endTime: "02:15 PM",
        title: "Transfer to Royal Palace of Brussels",
        category: "transfer",
        location: "Heysel → Place des Palais",
        mapsUrl: "https://maps.google.com/?q=Royal+Palace+of+Brussels",
        image: "assets/images/venues/sightseeing-royal-palace.jpg",
        description: "Transfer to Royal Palace of Brussels.",
        notes: "Coach transit through northern Brussels toward the royal district and Brussels Park."
      },
      {
        time: "02:15 PM",
        endTime: "03:00 PM",
        title: "Royal Palace of Brussels Exterior Tour",
        category: "culture",
        location: "Palais Royal de Bruxelles, Place des Palais",
        mapsUrl: "https://maps.google.com/?q=Royal+Palace+of+Brussels",
        image: "assets/images/venues/sightseeing-royal-palace.jpg",
        description: "Exterior historical tour of the Royal Palace of Brussels in the Park of Brussels, highlighting the administration and royal heritage of the Belgian monarchy.",
        notes: "Official palace of the King and Queen of the Belgians."
      },
      {
        time: "03:00 PM",
        endTime: "03:30 PM",
        title: "Manneken Pis & Belgian Chocolates",
        category: "culture",
        location: "Corner of Rue de l'Étuve & Rue du Chêne",
        mapsUrl: "https://maps.google.com/?q=Manneken+Pis",
        image: "assets/images/venues/sightseeing-manneken-pis.jpg",
        description: "Visit the famous Manneken Pis monument and explore traditional Belgian chocolate boutiques.",
        notes: "Sample warm artisan Brussels waffles or speculoos cookies nearby."
      },
      {
        time: "04:00 PM",
        endTime: "07:00 PM",
        title: "Curated Retail Experience: Rue Neuve & City2",
        category: "shopping",
        location: "Rue Neuve & City2 Shopping Mall, Brussels",
        mapsUrl: "https://maps.google.com/?q=City+2+Shopping+Mall+Brussels",
        image: "assets/images/venues/shopping-rue-neuve.jpg",
        description: "Curated independent retail experience and leisure time along Rue Neuve and City2 shopping mall, exploring top European fashion flagships and artisanal chocolate shops.",
        notes: "Tax Refund reminder: Always ask the store cashier for your 'Tax Free Form' if you spend over €50.01! Carrefour Market is also inside City2 for local gourmet groceries."
      },
      {
        time: "07:00 PM",
        endTime: "07:15 PM",
        title: "Group Re-gathering & Walk to Dinner",
        category: "transfer",
        location: "Rogier Central Meeting Point",
        mapsUrl: "https://maps.google.com/?q=Boulevard+du+Jardin+Botanique+7+Brussels",
        image: "assets/images/venues/dining-steak-n-chill.jpg",
        description: "Convenient group re-gathering at the designated central meeting point followed by walk to Steak 'n' Chill (Boulevard du Jardin Botanique 7).",
        notes: "Short 3-minute stroll to the restaurant. Punctuality requested so dinner begins smoothly."
      },
      {
        time: "07:30 PM",
        endTime: "09:30 PM",
        title: "Dinner at Steak 'n' Chill Restaurant",
        category: "dining",
        location: "Steak 'n' Chill Restaurant, Boulevard du Jardin Botanique 7",
        mapsUrl: "https://maps.google.com/?q=Steak+n+Chill+Boulevard+du+Jardin+Botanique+7+Bruxelles",
        image: "assets/images/venues/dining-steak-n-chill.jpg",
        description: "Dinner at Steak 'n' Chill Restaurant. Specializing in high-grade grilled steaks, premium cuts, and gourmet burgers. The restaurant is strictly 100% Certified Halal, offering delegates complete peace of mind.",
        notes: "Strictly 100% Certified Halal. Enjoy relaxed scientific discussions and team reflections over dessert."
      },
      {
        time: "09:30 PM",
        endTime: "10:00 PM",
        title: "Transfer to Hotel",
        category: "transfer",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Transfer to hotel.",
        notes: "Private coach pick-up and transfer back to the Renaissance Brussels Hotel for overnight rest. Tomorrow is our exciting full-day regional trip to medieval Ghent!"
      }
    ]
  },
  {
    dayNumber: 3,
    dayName: "Saturday",
    date: "10 October 2026",
    title: "Full-Day Excursion to Historic Ghent & Farewell Dinner",
    summary: "Full day in Flanders: Gravensteen Castle, St. Bavo's Cathedral & Van Eyck Altarpiece, Oud Gerechtsgebouw, historic quays, private Leie river cruise, Veldstraat shopping, and 100% Halal farewell dinner at De Witte Restaurant on the waterfront.",
    highlights: ["Gravensteen Castle", "St. Bavo Cathedral & Ghent Altarpiece", "Oud Gerechtsgebouw", "Graslei & Korenlei", "Private Leie Canal Cruise", "100% Halal Dinner at De Witte"],
    events: [
      {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Scenic Morning Coach Transfer to Ghent",
        category: "transfer",
        location: "Brussels → Historic Ghent via E40",
        mapsUrl: "https://maps.google.com/?q=Ghent+Belgium",
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=800&auto=format&fit=crop&q=80",
        description: "Scenic morning coach transfer from Brussels via the E40 highway to historic Ghent.",
        notes: "Onboard commentary highlighting Ghent's history as an economic powerhouse of the Middle Ages (~55 km transfer)."
      },
      {
        time: "11:15 AM",
        endTime: "12:00 PM",
        title: "Gravensteen (Castle of the Counts) Heritage Tour",
        category: "culture",
        location: "Sint-Veerleplein 11, Ghent",
        mapsUrl: "https://maps.google.com/?q=Gravensteen+Ghent",
        image: "assets/images/venues/sightseeing-gravensteen.jpg",
        description: "Deep-dive medieval heritage tour of Ghent, featuring an exterior and courtyard exploration of the imposing 12th-century moated Gravensteen (Castle of the Counts).",
        notes: "Remarkable fortress built by Count Philip of Alsace with moat, battlements, and panoramic tower views."
      },
      {
        time: "12:10 PM",
        endTime: "01:00 PM",
        title: "St. Bavo's Cathedral & The Ghent Altarpiece",
        category: "culture",
        location: "Sint-Baafsplein, Ghent",
        mapsUrl: "https://maps.google.com/?q=St+Bavo's+Cathedral+Ghent",
        image: "assets/images/venues/sightseeing-st-bavo.jpg",
        description: "Guided cultural visit to the monumental Gothic St. Bavo's Cathedral (Sint-Baafskathedraal) to view the legendary Ghent Altarpiece by the Van Eyck brothers.",
        notes: "Recognized as one of the world's most influential and frequently stolen masterworks of Western art (Adoration of the Mystic Lamb, 1432)."
      },
      {
        time: "01:10 PM",
        endTime: "01:40 PM",
        title: "Guided Cultural Visit to Oud Gerechtsgebouw & Surrounding",
        category: "culture",
        location: "Koophandelsplein, Ghent",
        mapsUrl: "https://maps.google.com/?q=Oud+Gerechtsgebouw+Ghent",
        image: "assets/images/venues/sightseeing-oud-gerechtsgebouw.jpg",
        description: "Guided cultural visit to Oud Gerechtsgebouw and surrounding.",
        notes: "Stately Neoclassical Old Courthouse designed by Louis Roelandt along the picturesque waterways of Koophandelsplein."
      },
      {
        time: "01:40 PM",
        endTime: "02:20 PM",
        title: "Graslei & Korenlei Waterfront Walking Tour",
        category: "culture",
        location: "Graslei & Korenlei, Ghent",
        mapsUrl: "https://maps.google.com/?q=Graslei+Ghent",
        image: "assets/images/venues/sightseeing-graslei.jpg",
        description: "Scenic walking tour along the historic Graslei and Korenlei harbor quays framed by magnificent medieval guild houses and historic merchant storehouses.",
        notes: "Voted one of the most picturesque urban waterfronts in Western Europe."
      },
      {
        time: "02:30 PM",
        endTime: "03:30 PM",
        title: "Private Leie River Canal Cruise",
        category: "culture",
        location: "Boat Jetty at Graslei",
        mapsUrl: "https://maps.google.com/?q=Graslei+Gent+boat+tours",
        image: "assets/images/venues/sightseeing-ghent-cruise.jpg",
        description: "Relaxing guided private canal cruise along the Leie River with chilled soft drinks served on board, offering unique water-level perspectives of medieval architecture.",
        notes: "Covered or open-air boats depending on weather; great relaxing moment for the doctors."
      },
      {
        time: "04:00 PM",
        endTime: "07:00 PM",
        title: "Veldstraat Boutiques & Free Old Town Exploration",
        category: "shopping",
        location: "Veldstraat & Ghent Old Town",
        mapsUrl: "https://maps.google.com/?q=Veldstraat+Ghent",
        image: "assets/images/venues/shopping-veldstraat.jpg",
        description: "Leisurely boutique shopping window along Veldstraat pedestrian avenue, browsing high-end Belgian design stores and sampling local Cuberdon raspberry cones and pralines. Then free time for delegates to explore Ghent's scenic old town squares, historic street art alleys, and local antique shops at their own comfortable pace.",
        notes: "Tax Free forms available at major fashion stores. Ask merchants before checkout."
      },
      {
        time: "07:00 PM",
        endTime: "07:15 PM",
        title: "Short Walk to De Witte Restaurant",
        category: "transfer",
        location: "Graslei 6, Ghent",
        mapsUrl: "https://maps.google.com/?q=Graslei+6+Gent",
        image: "assets/images/venues/dining-de-witte-leeuw.jpg",
        description: "Short walk to De Witte Restaurant (Graslei 6) located right along the historic Ghent harbor quays.",
        notes: "Ghent's waterfront is magically illuminated at twilight."
      },
      {
        time: "07:30 PM",
        endTime: "09:00 PM",
        title: "Dinner Time at De Witte Restaurant",
        category: "dining",
        location: "De Witte Restaurant, Graslei 6, Ghent",
        mapsUrl: "https://maps.google.com/?q=Graslei+6+Gent",
        image: "assets/images/venues/dining-de-witte-leeuw.jpg",
        description: "Dinner Time. Official farewell dinner celebrating the scientific and cultural success of the 2026 Standalone. Situated right on the medieval waterfront, offering exquisite 100% Halal fresh seafood and European cuisine.",
        notes: "All menu selections are strictly 100% Halal. Honoring the eminent pediatricians with commemorative gift presentations."
      },
      {
        time: "09:00 PM",
        endTime: "10:00 PM",
        title: "Motorcoach Transfer from Ghent to Brussels",
        category: "transfer",
        location: "Ghent → Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Comfortable evening motorcoach transfer from Ghent back to the Renaissance Brussels Hotel for overnight rest following a successful full-day regional excursion.",
        notes: "Delegates are advised to organize packing and VAT refund forms before sleep."
      }
    ]
  },
  {
    dayNumber: 4,
    dayName: "Sunday",
    date: "11 October 2026",
    title: "Executive Departure & Airport Transfer",
    summary: "Buffet breakfast at Renaissance Brussels Hotel, room check-out assistance, private coach transfer to Brussels Airport (BRU), Belgian Customs VAT refund stamping, and EgyptAir MS 726 flight back to Cairo.",
    highlights: ["Renaissance Buffet Breakfast", "Coach Transfer to BRU Airport", "Customs VAT Refund Processing", "EgyptAir MS 726 Flight to Cairo"],
    events: [
      {
        time: "07:00 AM",
        endTime: "10:00 AM",
        title: "Executive Breakfast & Room Check-Out",
        category: "hotel",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Leisurely morning breakfast at the Renaissance Brussels Hotel, final room check-out assistance, luggage consolidation, and final billing clearance managed smoothly by tour leadership.",
        notes: "Official hotel check-out is completed smoothly. Luggage safely held in the hospitality suite until coach departure."
      },
      {
        time: "12:30 PM",
        endTime: "01:00 PM",
        title: "Private Scheduled Coach Transfer to BRU Airport",
        category: "transfer",
        location: "Renaissance Brussels Hotel → Brussels Airport (BRU)",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport+Departures",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Private scheduled coach transfer from the Renaissance Brussels Hotel directly to Brussels Airport (BRU) departure terminal.",
        notes: "Please double check you have your passport, boarding passes, and tax refund receipts."
      },
      {
        time: "01:00 PM",
        endTime: "04:15 PM",
        title: "Airport Check-in, Security, VAT Refund & Terminal Processing",
        category: "flight",
        location: "Brussels Airport (BRU), Departure Terminal (Level 3)",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport+Departures",
        image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop&q=80",
        description: "Airport check-in, security clearance, VAT Refund, and departure terminal processing for EgyptAir flight MS 726.",
        notes: "CRITICAL: Visit the Belgian Customs Desk (Level 3 Departures) BEFORE dropping checked luggage containing VAT refund items! Hand luggage VAT forms are stamped after security."
      },
      {
        time: "04:15 PM",
        endTime: "09:35 PM",
        title: "Departure of Flight MS 726 (BRU → CAI)",
        category: "flight",
        location: "EgyptAir Flight MS 726 (Brussels → Cairo)",
        mapsUrl: "https://www.google.com/travel/flights",
        image: "assets/images/flight-departure.jpg",
        description: "Departure of EgyptAir flight MS 726 from Brussels Airport (BRU) to Cairo International Airport (CAI), concluding the four-day executive program.",
        notes: "Thank you for joining Liptis Nutrition in Belgium. Wishing all our Eminent Pediatricians a safe journey home!"
      }
    ]
  }
];
