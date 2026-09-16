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
    summary: "Corporate delegation departure from Cairo, luxury arrival transfer in Brussels, Grand-Place walking experience, and 100% Halal welcome dinner at Le Mignon.",
    highlights: ["EgyptAir MS 725 Flight", "Renaissance Brussels Hotel", "UNESCO Grand-Place Tour", "100% Halal Welcome Dinner at Le Mignon"],
    events: [
      {
        time: "08:00 AM",
        endTime: "11:05 AM",
        title: "Delegation Gathering & Check-in",
        category: "flight",
        location: "Cairo International Airport (CAI), Terminal 3",
        mapsUrl: "https://maps.google.com/?q=Cairo+International+Airport+Terminal+3",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
        description: "Corporate delegation gathering and swift check-in procedures at Cairo International Airport Terminal 3 prior to flight departure. Liptis event coordinators on site for assistance.",
        notes: "Delegates should have passports valid for at least 6 months and Belgian Schengen visas readily accessible."
      },
      {
        time: "11:05 AM",
        endTime: "02:45 PM",
        title: "Flight Operation CAI → BRU",
        category: "flight",
        location: "EgyptAir Flight MS 725",
        mapsUrl: "https://www.google.com/travel/flights",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80",
        description: "Direct flight operation on EgyptAir MS 725 from Cairo (CAI) to Brussels Airport (BRU). Flight duration approx. 4 hours 40 minutes with inflight meal service.",
        notes: "Note the time zone change: Brussels is 1 hour behind Cairo during the event (UTC+2 vs UTC+3)."
      },
      {
        time: "02:45 PM",
        endTime: "04:00 PM",
        title: "Airport Meet & Assist upon Landing",
        category: "transfer",
        location: "Brussels Airport (BRU), Arrival Hall",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80",
        description: "Immigration clearance, baggage collection, and warm meet & assist greeting by the dedicated Belgian travel operations team at the arrivals gate.",
        notes: "Look for the Liptis Nutrition welcome banner at the terminal exit."
      },
      {
        time: "04:00 PM",
        endTime: "04:30 PM",
        title: "Private Luxury Coach Transfer",
        category: "transfer",
        location: "Brussels Airport → Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Exclusive private luxury motorcoach transfer from Brussels Airport to the Renaissance Brussels Hotel (Rue du Parnasse 19) via the E40 ring road.",
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
        description: "Seamless express group check-in assistance with pre-arranged room keys and welcome packets distributed in the hotel lobby.",
        notes: "Hotel Address: Rue du Parnasse 19, 1050 Brussels. Tel: +32 2 505 29 29."
      },
      {
        time: "04:45 PM",
        endTime: "06:15 PM",
        title: "Relaxing Settling-In & Refresh Period",
        category: "leisure",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        description: "Personal downtime for delegates to unpack, refresh in their executive rooms, connect to complimentary high-speed Wi-Fi, and prepare for the evening corporate welcome program.",
        notes: "Dress code for evening: Smart Casual / Business Elegant."
      },
      {
        time: "06:15 PM",
        endTime: "07:45 PM",
        title: "Grand-Place Walking & Photo Tour",
        category: "culture",
        location: "Grand-Place (Grote Markt), Brussels",
        mapsUrl: "https://maps.google.com/?q=Grand+Place+Brussels",
        image: "assets/images/venues/sightseeing-grand-place.jpg",
        description: "Coach transfer to Brussels city center followed by an immersive walking tour through the UNESCO World Heritage Grand-Place (Grote Markt). Explore the ornate 17th-century guildhalls, the Gothic Town Hall (Hôtel de Ville), and King's House (Maison du Roi).",
        notes: "Prime photo opportunity as the gilded facade lighting activates at dusk."
      },
      {
        time: "07:45 PM",
        endTime: "08:00 PM",
        title: "Short Walk to Dinner Venue",
        category: "transfer",
        location: "Quai aux Briques 20, Brussels",
        mapsUrl: "https://maps.google.com/?q=Quai+aux+Briques+20,+1000+Bruxelles",
        description: "Pleasant 15-minute group stroll through the historic Sainte-Catherine fish market district to Le Mignon Restaurant.",
        notes: "Flat cobblestone streets; comfortable walking footwear advised."
      },
      {
        time: "08:00 PM",
        endTime: "10:00 PM",
        title: "Hosted Welcome Dinner at Le Mignon",
        category: "dining",
        location: "Le Mignon Restaurant, Quai aux Briques 20",
        mapsUrl: "https://maps.google.com/?q=Le+Mignon+Quai+aux+Briques+20+Brussels",
        image: "assets/images/venues/dining-le-mignon.jpg",
        description: "Official welcome dinner hosted by Liptis Nutrition leadership. Celebrating fresh North Sea seafood, gourmet fish, and signature Belgian specialties. All food provided is strictly 100% Halal.",
        notes: "Opening remarks by Liptis Nutrition delegation leaders. 100% Halal menu."
      },
      {
        time: "10:00 PM",
        endTime: "10:30 PM",
        title: "Transfer Back to Base Hotel",
        category: "transfer",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        description: "Private coach pick-up at Sainte-Catherine and transfer back to the Renaissance Brussels Hotel for overnight rest.",
        notes: "Rest well ahead of tomorrow morning's Scientific Symposium."
      }
    ]
  },
  {
    dayNumber: 2,
    dayName: "Friday",
    date: "9 October 2026",
    title: "Executive Symposium, Brussels City Tour & Evening Dining",
    summary: "High-impact pediatric symposium, Atomium architectural tour, Royal Palace exterior visit, Manneken Pis, shopping along Rue Neuve, and dinner at 100% Halal Steak 'n' Chill.",
    highlights: ["LIPTIS Pediatric Symposium", "Atomium Exploration", "Royal Palace & Historic Center", "Rue Neuve & City2 Shopping", "100% Halal Dinner at Steak 'n' Chill"],
    events: [
      {
        time: "09:00 AM",
        endTime: "12:00 PM",
        title: "LIPTIS Scientific Symposium",
        category: "scientific",
        location: "Renaissance Brussels Hotel, Executive Ballroom",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
        description: "The premier scientific session: Advancing Infant Nutrition. Clinical updates, gut microbiome, specialized formulations (Pediamil portfolio, Pedia-Start, Pediamum), and keynote dialogues by Egypt's eminent pediatricians.",
        notes: "Interactive Q&A session; symposium folders and clinical dossiers provided on arrival."
      },
      {
        time: "12:15 PM",
        endTime: "12:30 PM",
        title: "Executive Coffee Break & Networking",
        category: "scientific",
        location: "Renaissance Brussels Hotel Foyer",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
        description: "Gourmet coffee break, artisan Belgian pastries, and informal peer networking among attending department chairs and senior consultants.",
        notes: "Brief time available for Friday Dhuhr prayers before afternoon departure."
      },
      {
        time: "12:45 PM",
        endTime: "01:00 PM",
        title: "Group Gathering in Lobby & Boarding",
        category: "transfer",
        location: "Renaissance Brussels Hotel Lobby",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        description: "Group gathering in the hotel lobby and swift boarding of private coaches for the afternoon Brussels cultural expedition.",
        notes: "Please have your cameras and light waterproof jackets ready."
      },
      {
        time: "01:00 PM",
        endTime: "01:45 PM",
        title: "Atomium Guided Tour & Photo Session",
        category: "culture",
        location: "Atomium, Square de l'Atomium",
        mapsUrl: "https://maps.google.com/?q=Atomium+Brussels",
        image: "assets/images/venues/sightseeing-atomium.jpg",
        description: "Guided architectural tour and group photo session at the world-famous Atomium, depicting an iron crystal enlarged 165 billion times. Learn about its 1958 World's Fair heritage and structural wonder.",
        coordinatorNote: "[EE1] Timing Insight: 45 minutes exterior & plaza photo session is ideal. If visiting interior panoramic spheres, allow extra transit time or prioritize the iconic exterior group photo on the esplanade to maintain afternoon momentum.",
        notes: "Iconic Belgian landmark. Great view of the Brussels skyline."
      },
      {
        time: "01:45 PM",
        endTime: "02:15 PM",
        title: "Transfer to Royal Palace of Brussels",
        category: "transfer",
        location: "Heysel → Place des Palais",
        mapsUrl: "https://maps.google.com/?q=Royal+Palace+of+Brussels",
        description: "Coach transit through northern Brussels toward the royal district and Brussels Park.",
        notes: "Pass by the Royal Greenhouses of Laeken and the Japanese Tower en route."
      },
      {
        time: "02:15 PM",
        endTime: "03:00 PM",
        title: "Royal Palace of Brussels Exterior Tour",
        category: "culture",
        location: "Palais Royal de Bruxelles, Place des Palais",
        mapsUrl: "https://maps.google.com/?q=Royal+Palace+of+Brussels",
        image: "assets/images/venues/sightseeing-royal-palace.jpg",
        description: "Exterior historical tour of the majestic Royal Palace of Brussels in the Park of Brussels, highlighting Belgian royal heritage, administrative state ceremonies, and neoclassic architecture.",
        coordinatorNote: "[EE2] Timing Insight: 45 minutes can feel brisk if exploring Brussels Park and the Place Royale views. Keep the group clustered around the palace gates and terrace for concise historical commentary.",
        notes: "Official palace of the King and Queen of the Belgians."
      },
      {
        time: "03:00 PM",
        endTime: "03:30 PM",
        title: "Cobblestone Stroll & Manneken Pis",
        category: "culture",
        location: "Corner of Rue de l'Étuve & Rue du Chêne",
        mapsUrl: "https://maps.google.com/?q=Manneken+Pis",
        image: "assets/images/venues/sightseeing-manneken-pis.jpg",
        description: "Stroll through the historic central cobblestone alleys to view Brussels' famous Manneken Pis bronze fountain and explore neighboring traditional Belgian chocolate boutiques.",
        coordinatorNote: "[EE3] Group Logistics Insight: The alleyways around Manneken Pis are narrow and heavily congested. For a large VIP delegation, coordinators recommend breaking into two smaller sub-groups or establishing a distinct meeting corner (e.g. corner of Rue du Chêne) to prevent bottlenecks.",
        notes: "Sample warm artisan Brussels waffles or speculoos cookies nearby."
      },
      {
        time: "04:00 PM",
        endTime: "07:00 PM",
        title: "Curated Retail Window: Rue Neuve & City2",
        category: "shopping",
        location: "Rue Neuve & City2 Shopping Mall",
        mapsUrl: "https://maps.google.com/?q=City+2+Shopping+Mall+Brussels",
        image: "assets/images/venues/shopping-rue-neuve.jpg",
        description: "Independent retail experience and leisure time along Rue Neuve and City2 shopping mall. Explore top European fashion flagships, Swiss & Belgian watches, boutique cosmetics, and artisanal chocolatiers.",
        notes: "Tax Refund reminder: Always ask the store cashier for your 'Tax Free Form' if you spend over €50.01! Carrefour Market is also inside City2 for local gourmet groceries."
      },
      {
        time: "07:00 PM",
        endTime: "07:15 PM",
        title: "Group Re-gathering & Walk to Dinner",
        category: "transfer",
        location: "Rogier Central Meeting Point",
        mapsUrl: "https://maps.google.com/?q=Boulevard+du+Jardin+Botanique+7+Brussels",
        description: "Convenient group re-gathering at the designated meeting point outside City2, followed by a short 3-minute walk to Steak 'n' Chill.",
        notes: "Punctuality requested so that table service commences promptly."
      },
      {
        time: "07:30 PM",
        endTime: "09:30 PM",
        title: "Hosted Dinner at Steak 'n' Chill",
        category: "dining",
        location: "Steak 'n' Chill, Boulevard du Jardin Botanique 7",
        mapsUrl: "https://maps.google.com/?q=Steak+n+Chill+Boulevard+du+Jardin+Botanique+7+Bruxelles",
        image: "assets/images/venues/dining-steak-n-chill.jpg",
        description: "Deluxe dinner at Steak 'n' Chill Restaurant. Specializing in high-grade grilled steaks, premium cuts, and gourmet burgers. The restaurant is strictly 100% Certified Halal, offering delegates complete peace of mind.",
        notes: "Strictly 100% Certified Halal. Enjoy relaxed scientific discussions and team reflections over dessert."
      },
      {
        time: "09:30 PM",
        endTime: "10:00 PM",
        title: "Transfer Back to Renaissance Hotel",
        category: "transfer",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        description: "Private coach pick-up and transfer back to the Renaissance Brussels Hotel for overnight rest.",
        notes: "Tomorrow is our exciting full-day regional trip to medieval Ghent!"
      }
    ]
  },
  {
    dayNumber: 3,
    dayName: "Saturday",
    date: "10 October 2026",
    title: "Full-Day Excursion to Historic Ghent & Farewell Dinner",
    summary: "Full day in Flanders: Gravensteen Castle, St. Bavo's Cathedral & Van Eyck Altarpiece, historic quays, private Leie river cruise, Veldstraat shopping, and 100% Halal farewell dinner on the waterfront at De Witte Leeuw.",
    highlights: ["Gravensteen Castle", "St. Bavo Cathedral & Ghent Altarpiece", "Private River Leie Boat Cruise", "Graslei & Korenlei", "100% Halal Farewell Dinner at De Witte Leeuw"],
    events: [
      {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Scenic Coach Transfer to Ghent",
        category: "transfer",
        location: "Brussels → Historic Ghent via E40",
        mapsUrl: "https://maps.google.com/?q=Ghent+Belgium",
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=800&auto=format&fit=crop&q=80",
        description: "Scenic morning motorcoach transfer from Brussels through the Flemish countryside via the E40 highway to historic Ghent (~55 km).",
        notes: "Onboard commentary highlighting Ghent's history as an economic powerhouse of the Middle Ages."
      },
      {
        time: "11:15 AM",
        endTime: "12:00 PM",
        title: "Gravensteen (Castle of the Counts) Heritage Tour",
        category: "culture",
        location: "Sint-Veerleplein 11, Ghent",
        mapsUrl: "https://maps.google.com/?q=Gravensteen+Ghent",
        image: "assets/images/venues/sightseeing-gravensteen.jpg",
        description: "Deep-dive medieval heritage tour of Ghent, featuring an exterior and courtyard exploration of the imposing 12th-century moated Gravensteen (Castle of the Counts) built by Count Philip of Alsace.",
        notes: "Remarkable fortress with moat, battlements, and panoramic tower views."
      },
      {
        time: "12:10 PM",
        endTime: "01:00 PM",
        title: "St. Bavo's Cathedral & The Ghent Altarpiece",
        category: "culture",
        location: "Sint-Baafsplein, Ghent",
        mapsUrl: "https://maps.google.com/?q=St+Bavo's+Cathedral+Ghent",
        image: "assets/images/venues/sightseeing-st-bavo.jpg",
        description: "Guided cultural visit to the monumental Gothic St. Bavo's Cathedral (Sint-Baafskathedraal) to view the celebrated 'Adoration of the Mystic Lamb' (Ghent Altarpiece, 1432) by Hubert and Jan van Eyck.",
        notes: "Recognized as one of the world's most influential and frequently stolen masterworks of Western art."
      },
      {
        time: "01:10 PM",
        endTime: "01:40 PM",
        title: "Oud Gerechtsgebouw & Surrounding Heritage",
        category: "culture",
        location: "Koophandelsplein, Ghent",
        mapsUrl: "https://maps.google.com/?q=Oud+Gerechtsgebouw+Ghent",
        image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800&auto=format&fit=crop&q=80",
        description: "Cultural exploration of the Neoclassical Old Court of Justice (Oud Gerechtsgebouw) and the neighboring scenic squares along the waterways.",
        notes: "Splendid photo vantage point bridging Ghent's classic and historic quarters."
      },
      {
        time: "01:40 PM",
        endTime: "02:20 PM",
        title: "Graslei & Korenlei Waterfront Walking Tour",
        category: "culture",
        location: "Graslei & Korenlei, Ghent",
        mapsUrl: "https://maps.google.com/?q=Graslei+Ghent",
        image: "assets/images/venues/sightseeing-graslei.jpg",
        description: "Scenic walking tour along the historic Graslei and Korenlei harbor quays framed by magnificent medieval guild houses, grain weigh houses, and historic merchant warehouses.",
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
        description: "Relaxing guided private canal cruise along the Leie River with chilled soft drinks served on board, offering unique water-level perspectives of medieval bridges and cloistered monasteries.",
        notes: "Covered or open-air boats depending on weather; great relaxing moment for the doctors."
      },
      {
        time: "04:00 PM",
        endTime: "07:00 PM",
        title: "Veldstraat Boutiques & Free Exploration",
        category: "shopping",
        location: "Veldstraat & Ghent Old Town",
        mapsUrl: "https://maps.google.com/?q=Veldstraat+Ghent",
        image: "assets/images/venues/shopping-veldstraat.jpg",
        description: "Leisurely boutique shopping along Veldstraat pedestrian avenue, browsing Belgian design stores and sampling local Ghent Cuberdon raspberry candies ('Gentse neuzekes') and artisan chocolates. Free time for delegates to explore old town squares and antique boutiques.",
        notes: "Tax Free forms available at major fashion stores. Ask merchants before checkout."
      },
      {
        time: "07:00 PM",
        endTime: "07:15 PM",
        title: "Walk to De Witte Leeuw Restaurant",
        category: "transfer",
        location: "Graslei 6, Ghent",
        mapsUrl: "https://maps.google.com/?q=De+Witte+Leeuw+Graslei+6+Ghent",
        description: "Short 5-minute evening walk back to the historic harbor quays of Graslei.",
        notes: "Ghent's waterfront is magically illuminated at twilight."
      },
      {
        time: "07:30 PM",
        endTime: "09:00 PM",
        title: "Official Farewell Dinner at De Witte Leeuw",
        category: "dining",
        location: "De Witte Leeuw / De Witte, Graslei 6",
        mapsUrl: "https://maps.google.com/?q=Graslei+6+Gent",
        image: "assets/images/venues/dining-de-witte-leeuw.jpg",
        description: "Gala farewell dinner celebrating the scientific and cultural success of the 2026 Standalone. Situated right on the medieval waterfront, offering exquisite 100% Halal fresh seafood and European cuisine.",
        notes: "All menu selections are strictly 100% Halal. Honoring the eminent pediatricians with commemorative gift presentations."
      },
      {
        time: "09:00 PM",
        endTime: "10:00 PM",
        title: "Motorcoach Transfer: Ghent → Renaissance Brussels",
        category: "transfer",
        location: "Ghent → Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        description: "Comfortable evening motorcoach transfer from Ghent back to the Renaissance Brussels Hotel for overnight rest.",
        notes: "Delegates are advised to organize packing and VAT refund forms before sleep."
      }
    ]
  },
  {
    dayNumber: 4,
    dayName: "Sunday",
    date: "11 October 2026",
    title: "Executive Check-Out, Belgian Customs VAT Processing & Homeward Flight",
    summary: "Buffet breakfast at Renaissance Brussels Hotel, luggage assistance, transfer to Brussels Airport (BRU), Belgian Customs VAT refund stamping, duty-free shopping, and EgyptAir MS 726 flight back to Cairo.",
    highlights: ["Renaissance Buffet Breakfast", "Coach Transfer to BRU Airport", "Customs VAT Refund Processing", "EgyptAir MS 726 Flight to Cairo"],
    events: [
      {
        time: "07:00 AM",
        endTime: "10:00 AM",
        title: "Executive Breakfast & Check-Out",
        category: "hotel",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Leisurely morning buffet breakfast at the Renaissance Brussels Hotel. Final room check-out assistance, luggage consolidation, and incidentals clearance managed smoothly by tour leadership.",
        notes: "Official hotel check-out is 12:00 PM. Luggage safely held in the hospitality room until coach departure."
      },
      {
        time: "12:30 PM",
        endTime: "01:00 PM",
        title: "Scheduled Coach Transfer to BRU Airport",
        category: "transfer",
        location: "Renaissance Brussels Hotel → Brussels Airport (BRU)",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport+Departures",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Private scheduled coach transfer from the Renaissance Brussels Hotel directly to Brussels Airport departure terminal (Level 3).",
        notes: "Please double check you have your passport, boarding passes, and tax refund receipts."
      },
      {
        time: "01:00 PM",
        endTime: "04:15 PM",
        title: "Check-in, Security, VAT Refund & Boarding",
        category: "flight",
        location: "Brussels Airport (BRU), Departure Terminal",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport+Departures",
        image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop&q=80",
        description: "Airport check-in for EgyptAir MS 726, security clearance, Belgian Customs VAT Refund stamp & counter processing, and pre-departure duty-free lounge time.",
        notes: "CRITICAL: Visit the Belgian Customs Desk (Level 3 Departures) BEFORE dropping checked luggage containing VAT refund items! Hand luggage VAT forms are stamped after security."
      },
      {
        time: "04:15 PM",
        endTime: "09:35 PM",
        title: "Flight Operation BRU → CAI",
        category: "flight",
        location: "EgyptAir Flight MS 726",
        mapsUrl: "https://www.google.com/travel/flights",
        image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=800&auto=format&fit=crop&q=80",
        description: "Departure of EgyptAir flight MS 726 from Brussels Airport (BRU) at 16:15 local time, arriving at Cairo International Airport (CAI) Terminal 3 at 21:35 local time, concluding the executive standalone program.",
        notes: "Thank you for joining Liptis Nutrition in Belgium. Wishing all our Eminent Pediatricians a safe journey home!"
      }
    ]
  }
];
