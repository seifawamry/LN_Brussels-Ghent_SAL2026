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
    title: "Arrival, Brussels Old Town Tour & Welcome Dinner",
    summary: "Corporate delegation departure from Cairo on EgyptAir MS 725, airport meet & assist in Brussels, private coach transfer to Renaissance Brussels Hotel, fast-track check-in, Grand-Place tour, and 100% Halal seafood dinner at Le Mignon.",
    highlights: ["EgyptAir MS 725 Flight", "Renaissance Brussels Hotel", "UNESCO Grand-Place Tour", "100% Halal Seafood Dinner at Le Mignon"],
    events: [
      {
        time: "08:00",
        title: "Gathering at Cairo International Airport Terminal 3",
        category: "flight",
        location: "Cairo International Airport (CAI), Terminal 3",
        mapsUrl: "https://maps.google.com/?q=Cairo+International+Airport+Terminal+3",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
        description: "Gathering at Cairo International Airport Terminal 3 for check-in and departure procedures.",
        notes: "Delegates should have passports valid for at least 6 months and Belgian Schengen visas readily accessible. Liptis event coordinators on site for assistance."
      },
      {
        time: "11:05",
        title: "Departure time of EgyptAir flight MS 725 directly from Cairo International Airport (CAI) to Brussels Airport (BRU)",
        category: "flight",
        location: "EgyptAir Flight MS 725 (Cairo → Brussels)",
        mapsUrl: "https://www.google.com/travel/flights",
        image: "assets/images/flight-departure.jpg",
        description: "Departure time of EgyptAir flight MS 725 directly from Cairo International Airport (CAI) to Brussels Airport (BRU). Direct flight duration approx. 4 hours 40 minutes.",
        notes: "Direct flight operation on EgyptAir MS 725 with inflight hospitality service."
      },
      {
        time: "14:45",
        title: "Arrival at Brussels Airport",
        category: "flight",
        location: "Brussels Airport (BRU)",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80",
        description: "Arrival at Brussels Airport (BRU) on board EgyptAir flight MS 725.",
        notes: "Prepare for passport control, baggage collection, and meet-and-assist reception."
      },
      {
        time: "14:45",
        endTime: "16:00",
        title: "Meet and assist at Brussels Airport",
        category: "transfer",
        location: "Brussels Airport (BRU), Arrival Hall",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80",
        description: "Meet and assist at Brussels Airport. Immigration clearance, baggage collection, and warm welcome by the dedicated Belgian travel operations team.",
        notes: "Bilingual Liptis coordinators will assist doctors and guide the group directly to the private coaches."
      },
      {
        time: "16:00",
        endTime: "16:30",
        title: "Transfer to Renaissance Brussels Hotel",
        category: "transfer",
        location: "Brussels Airport (BRU) → Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Transfer to Renaissance Brussels Hotel via private luxury motorcoaches.",
        notes: "Comfortable scenic drive entering Brussels and the European Quarter."
      },
      {
        time: "16:30",
        endTime: "16:45",
        title: "Fast Track check-in at Renaissance Brussels Hotel",
        category: "hotel",
        location: "Renaissance Brussels Hotel, Rue du Parnasse 19",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Fast Track check-in at Renaissance Brussels Hotel. Pre-assigned room keycards distributed at the private Liptis welcome desk.",
        notes: "Welcome kits and room keys handed directly to delegates for immediate, smooth access."
      },
      {
        time: "16:45",
        endTime: "18:00",
        title: "Free time",
        category: "leisure",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Free time for delegates to settle in comfortably, unpack, and refresh in their rooms.",
        notes: "Relaxing time for doctors to unwind after travel before the evening program."
      },
      {
        time: "18:00",
        endTime: "18:15",
        title: "Meet at the hotel lobby for Brussels Old Town tour and the outdoor dinner",
        category: "transfer",
        location: "Renaissance Brussels Hotel Lobby",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Meet at the hotel lobby for Brussels Old Town tour and the outdoor dinner.",
        notes: "Delegation assembly before boarding the tour buses."
      },
      {
        time: "18:15",
        title: "Buses depart for Brussels Old Town tour",
        category: "transfer",
        location: "Renaissance Brussels Hotel → Grand-Place",
        mapsUrl: "https://maps.google.com/?q=Grand+Place+Brussels",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Buses depart for Brussels Old Town tour.",
        notes: "Transit to the UNESCO World Heritage historical center of Brussels."
      },
      {
        time: "18:30",
        endTime: "19:45",
        title: "Immersive walking tour through the UNESCO World Heritage Grand-Place",
        category: "culture",
        location: "Grand-Place (Grote Markt), Brussels",
        mapsUrl: "https://maps.google.com/?q=Grand+Place+Brussels",
        image: "assets/images/venues/sightseeing-grand-place.jpg",
        description: "Immersive walking tour through the UNESCO World Heritage Grand-Place, exploring ornate guildhalls, historical monuments, and the Gothic Town Hall.",
        notes: "Prime photo opportunity as the gilded facade lighting activates at dusk."
      },
      {
        time: "19:45",
        endTime: "20:00",
        title: "Walk to Le Mignon Restaurant for dinner",
        category: "transfer",
        location: "Quai aux Briques 20, Brussels (Sainte-Catherine)",
        mapsUrl: "https://maps.google.com/?q=Quai+aux+Briques+20,+1000+Bruxelles",
        image: "assets/images/venues/dining-le-mignon.jpg",
        description: "Walk to Le Mignon Restaurant for dinner.",
        notes: "Pleasant short stroll through the historic Sainte-Catherine fish market district."
      },
      {
        time: "20:00",
        endTime: "22:00",
        title: "Seafood Dinner at the authentic Belgian Le Mignon Restaurant",
        category: "dining",
        location: "Le Mignon Restaurant, Quai aux Briques 20",
        mapsUrl: "https://maps.google.com/?q=Le+Mignon+Quai+aux+Briques+20+Brussels",
        image: "assets/images/venues/dining-le-mignon.jpg",
        description: "Seafood Dinner at the authentic Belgian Le Mignon Restaurant. Official welcome dinner hosted by Liptis Nutrition leadership, celebrating fresh North Sea seafood, gourmet fish, and signature Belgian culinary specialties. Strictly 100% Halal.",
        notes: "Opening remarks by Liptis Nutrition delegation leaders. All food served is strictly 100% Halal."
      },
      {
        time: "22:00",
        endTime: "22:30",
        title: "Buses depart back to the hotel",
        category: "transfer",
        location: "Sainte-Catherine → Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Buses depart back to the hotel.",
        notes: "Private coach transfer back to the Renaissance Brussels Hotel for overnight rest. Rest well ahead of Day 2."
      }
    ]
  },
  {
    dayNumber: 2,
    dayName: "Friday",
    date: "9 October 2026",
    title: "Scientific Symposium, Brussels City Tour & Steak N' Chill Dinner",
    summary: "Buffet breakfast, Liptis Nutrition Symposium in Ballroom 1+2, Atomium guided tour, Royal Palace exterior historical tour, Manneken Pis, shopping at Rue Neuve & City2, and 100% Halal dinner at Steak N' Chill.",
    highlights: ["Liptis Nutrition Symposium", "Atomium Tour & Group Photo", "Royal Palace Exterior", "Manneken Pis & Chocolates", "Rue Neuve & City2 Shopping", "100% Halal Dinner at Steak N' Chill"],
    events: [
      {
        time: "07:00",
        endTime: "09:00",
        title: "Breakfast in Renaissance Brussels Hotel main restaurant on the ground floor",
        category: "hotel",
        location: "Renaissance Brussels Hotel, Ground Floor Main Restaurant",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Breakfast in Renaissance Brussels Hotel main restaurant on the ground floor. Rich international morning buffet before the symposium.",
        notes: "Delegates are invited to enjoy breakfast before the scientific sessions start at 09:00."
      },
      {
        time: "09:00",
        endTime: "12:00",
        title: "Liptis Nutrition Symposium in Ballroom 1+2 on the ground floor",
        category: "scientific",
        location: "Renaissance Brussels Hotel, Ballroom 1+2 (Ground Floor)",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
        description: "Liptis Nutrition Symposium in Ballroom 1+2 on the ground floor.",
        notes: "Latest scientific data with our eminent speakers with interactive Q&A Session"
      },
      {
        time: "12:00",
        endTime: "12:45",
        title: "Liptis Nutrition Coffee Break",
        category: "scientific",
        location: "Renaissance Brussels Hotel Foyer",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
        description: "Liptis Nutrition Coffee Break. Artisanal coffee, Belgian refreshments, and informal collegial networking among attending pediatricians.",
        notes: "Gourmet coffee, artisan Belgian pastries, and informal collegial networking among attending doctors."
      },
      {
        time: "12:45",
        endTime: "13:00",
        title: "Meet at the hotel lobby for Brussels City Tour",
        category: "transfer",
        location: "Renaissance Brussels Hotel Lobby",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Meet at the hotel lobby for Brussels City Tour.",
        notes: "Get ready for the amazing tour and group photo"
      },
      {
        time: "13:00",
        title: "Buses depart for Brussels City Tour",
        category: "transfer",
        location: "Renaissance Brussels Hotel → Atomium",
        mapsUrl: "https://maps.google.com/?q=Atomium+Brussels",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Buses depart for Brussels City Tour.",
        notes: "Please ensure your badges and personal essentials are with you."
      },
      {
        time: "13:00",
        endTime: "13:45",
        title: "Atomium guided architectural tour and group photo",
        category: "culture",
        location: "Atomium, Square de l'Atomium, Brussels",
        mapsUrl: "https://maps.google.com/?q=Atomium+Brussels",
        image: "assets/images/venues/sightseeing-atomium.jpg",
        description: "Atomium guided architectural tour and group photo. Exploring the iconic 1958 World's Fair monument symbolizing European scientific optimism.",
        notes: "Iconic Belgian landmark depicting an iron crystal enlarged 165 billion times."
      },
      {
        time: "13:45",
        endTime: "14:15",
        title: "Transfer to Royal Palace of Brussels",
        category: "transfer",
        location: "Atomium → Royal Palace of Brussels",
        mapsUrl: "https://maps.google.com/?q=Royal+Palace+of+Brussels",
        image: "assets/images/venues/sightseeing-royal-palace.jpg",
        description: "Transfer to Royal Palace of Brussels.",
        notes: "Coach transit through northern Brussels toward the royal district and Brussels Park."
      },
      {
        time: "14:15",
        endTime: "15:00",
        title: "Royal Palace exterior historical tour",
        category: "culture",
        location: "Palais Royal de Bruxelles, Place des Palais",
        mapsUrl: "https://maps.google.com/?q=Royal+Palace+of+Brussels",
        image: "assets/images/venues/sightseeing-royal-palace.jpg",
        description: "Royal Palace exterior historical tour in the Park of Brussels, highlighting the administration and royal heritage of the Belgian monarchy.",
        notes: "Official palace of the King and Queen of the Belgians."
      },
      {
        time: "15:00",
        endTime: "15:30",
        title: "Manneken Pis and traditional Belgian chocolate boutiques",
        category: "culture",
        location: "Corner of Rue de l'Étuve & Rue du Chêne",
        mapsUrl: "https://maps.google.com/?q=Manneken+Pis",
        image: "assets/images/venues/sightseeing-manneken-pis.jpg",
        description: "Manneken Pis and traditional Belgian chocolate boutiques.",
        notes: "Sample warm artisan Brussels waffles or fine Belgian pralines nearby."
      },
      {
        time: "15:30",
        title: "Buses depart for the shopping area and City2 Mall of Brussels",
        category: "transfer",
        location: "Historic Center → Rue Neuve / City2",
        mapsUrl: "https://maps.google.com/?q=City+2+Shopping+Mall+Brussels",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Buses depart for the shopping area and City2 Mall of Brussels.",
        notes: "Coaches drop off directly adjacent to Brussels' primary shopping district."
      },
      {
        time: "16:00",
        endTime: "19:00",
        title: "Free time for shopping at Rue Neuve and City2 Mall of Brussels",
        category: "shopping",
        location: "Rue Neuve & City2 Mall of Brussels",
        mapsUrl: "https://maps.google.com/?q=City+2+Shopping+Mall+Brussels",
        image: "assets/images/venues/shopping-rue-neuve.jpg",
        description: "Free time for shopping at Rue Neuve and City2 Mall of Brussels.",
        notes: "Over 100 international boutiques, European brands, and department stores. Tax Free forms available at major fashion stores."
      },
      {
        time: "19:00",
        endTime: "19:15",
        title: "Group gathering and walk to Steak N' Chill restaurant for dinner",
        category: "transfer",
        location: "City2 / Botanique → Steak N' Chill Restaurant",
        mapsUrl: "https://maps.google.com/?q=Steak+n+Chill+Boulevard+du+Jardin+Botanique+7+Bruxelles",
        image: "assets/images/venues/dining-steak-n-chill.jpg",
        description: "Group gathering and walk to Steak N' Chill restaurant for dinner.",
        notes: "Meeting at the designated gathering point for a short stroll to the restaurant."
      },
      {
        time: "19:30",
        endTime: "21:30",
        title: "Dinner at the Turkish Halal steakhouse Steak N' Chill restaurant",
        category: "dining",
        location: "Steak N' Chill, Boulevard du Jardin Botanique 7",
        mapsUrl: "https://maps.google.com/?q=Steak+n+Chill+Boulevard+du+Jardin+Botanique+7+Bruxelles",
        image: "assets/images/venues/dining-steak-n-chill.jpg",
        description: "Dinner at the Turkish Halal steakhouse Steak N' Chill restaurant. Top-tier steakhouse located conveniently near City2 and Rue Neuve. Strictly 100% Halal certified, offering dry-aged Angus cuts, prime grilled steaks, gourmet ribs, and signature burgers in an elegant ambient dining atmosphere.",
        notes: "All food served is strictly 100% Halal certified."
      },
      {
        time: "21:30",
        endTime: "22:00",
        title: "Buses depart back to the hotel",
        category: "transfer",
        location: "Botanique → Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Buses depart back to the hotel.",
        notes: "Evening motorcoach transfer back to the hotel for overnight rest."
      }
    ]
  },
  {
    dayNumber: 3,
    dayName: "Saturday",
    date: "10 October 2026",
    title: "Full-Day Ghent Heritage Excursion & De Witte Leeuw Dinner",
    summary: "Buffet breakfast, coach departure to Ghent, Gravensteen castle tour, St Bavo's Cathedral, Oud Gerechtsgebouw, Graslei & Korenlei walking tour, private Leie river canal cruise, Veldstraat shopping, and 100% Halal dinner at De Witte Leeuw.",
    highlights: ["Gravensteen Castle", "St Bavo's Cathedral", "Oud Gerechtsgebouw", "Graslei & Korenlei Walk", "Private Leie River Cruise", "De Witte Leeuw Halal Dinner"],
    events: [
      {
        time: "07:00",
        endTime: "09:45",
        title: "Breakfast in Renaissance Brussels Hotel main restaurant on the ground floor",
        category: "hotel",
        location: "Renaissance Brussels Hotel, Ground Floor Main Restaurant",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Breakfast in Renaissance Brussels Hotel main restaurant on the ground floor. Energizing morning buffet before departing on the full-day Ghent excursion.",
        notes: "Delegates are kindly requested to complete breakfast before the 09:45 lobby gathering."
      },
      {
        time: "09:45",
        endTime: "10:00",
        title: "Meet at the hotel lobby for Ghent full-day trip",
        category: "transfer",
        location: "Renaissance Brussels Hotel Lobby",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Meet at the hotel lobby for Ghent full-day trip.",
        notes: "Prompt assembly in the lobby. Please carry comfortable walking shoes and personal essentials."
      },
      {
        time: "10:00",
        title: "Buses depart for Ghent",
        category: "transfer",
        location: "Brussels → Ghent (approx. 55 km)",
        mapsUrl: "https://maps.google.com/?q=Ghent+Belgium",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Buses depart for Ghent. Scenic highway journey through the picturesque Flemish countryside.",
        notes: "Complimentary bottled water and onboard Wi-Fi available during transit."
      },
      {
        time: "11:15",
        endTime: "12:00",
        title: "Gravensteen exterior and courtyard heritage tour",
        category: "culture",
        location: "Gravensteen, Sint-Veerleplein 11, Ghent",
        mapsUrl: "https://maps.google.com/?q=Gravensteen+Ghent",
        image: "assets/images/venues/sightseeing-gravensteen.jpg",
        description: "Gravensteen exterior and courtyard heritage tour. Imposing 12th-century 'Castle of the Counts' surrounded by historic moats.",
        notes: "Magnificent medieval stone fortress offering exceptional historic perspectives."
      },
      {
        time: "12:10",
        endTime: "13:00",
        title: "St Bavo's Cathedral and Ghent Altarpiece",
        category: "culture",
        location: "Sint-Baafskathedraal, Sint-Baafsplein, Ghent",
        mapsUrl: "https://maps.google.com/?q=Saint+Bavo's+Cathedral+Ghent",
        image: "assets/images/venues/sightseeing-st-bavo.jpg",
        description: "St Bavo's Cathedral and Ghent Altarpiece. Guided visit inside the majestic Gothic cathedral housing the renowned Van Eyck brothers' masterwork.",
        notes: "Recognized as one of the world's most influential and frequently stolen masterworks of Western art (Adoration of the Mystic Lamb, 1432)."
      },
      {
        time: "13:10",
        endTime: "13:40",
        title: "Oud Gerechtsgebouw and surroundings",
        category: "culture",
        location: "Koophandelsplein, Ghent",
        mapsUrl: "https://maps.google.com/?q=Oud+Gerechtsgebouw+Ghent",
        image: "assets/images/venues/sightseeing-oud-gerechtsgebouw.jpg",
        description: "Oud Gerechtsgebouw and surroundings. Guided cultural visit to Oud Gerechtsgebouw and surrounding.",
        notes: "Stately Neoclassical Old Courthouse designed by Louis Roelandt along the picturesque waterways of Koophandelsplein."
      },
      {
        time: "13:40",
        endTime: "14:20",
        title: "Graslei & Korenlei scenic walking tour",
        category: "culture",
        location: "Graslei & Korenlei, Ghent",
        mapsUrl: "https://maps.google.com/?q=Graslei+Ghent",
        image: "assets/images/venues/sightseeing-graslei.jpg",
        description: "Graslei & Korenlei scenic walking tour. Scenic walking tour along the historic Graslei and Korenlei harbor quays framed by magnificent medieval guild houses and historic merchant storehouses.",
        notes: "Voted one of the most picturesque urban waterfronts in Western Europe."
      },
      {
        time: "14:30",
        endTime: "15:30",
        title: "Private canal cruise along the Leie River with snacks and soft drinks",
        category: "culture",
        location: "Boat Jetty at Graslei, Ghent",
        mapsUrl: "https://maps.google.com/?q=Graslei+Gent+boat+tours",
        image: "assets/images/venues/sightseeing-ghent-cruise.jpg",
        description: "Private canal cruise along the Leie River with snacks and soft drinks. Relaxing guided private canal cruise along the Leie River offering unique water-level perspectives of medieval architecture.",
        notes: "Covered or open-air boats depending on weather; great relaxing moment for the doctors."
      },
      {
        time: "16:00",
        endTime: "19:00",
        title: "Free time for shopping at Veldstraat pedestrian avenue, and exploring Ghent's scenic old town squares",
        category: "shopping",
        location: "Veldstraat & Ghent Old Town Squares",
        mapsUrl: "https://maps.google.com/?q=Veldstraat+Ghent",
        image: "assets/images/venues/shopping-veldstraat.jpg",
        description: "Free time for shopping at Veldstraat pedestrian avenue, and exploring Ghent's scenic old town squares. Leisurely boutique shopping window along Veldstraat pedestrian avenue, browsing high-end Belgian design stores and sampling local Cuberdon raspberry cones and pralines. Then free time for delegates to explore Ghent's scenic old town squares, historic street art alleys, and local antique shops at their own comfortable pace.",
        notes: "Tax Free forms available at major fashion stores. Ask merchants before checkout."
      },
      {
        time: "19:00",
        endTime: "19:15",
        title: "Group gathering and walk to De Witte Leeuw Restaurant for dinner",
        category: "transfer",
        location: "Graslei Waterfront, Ghent",
        mapsUrl: "https://maps.google.com/?q=Graslei+6+Gent",
        image: "assets/images/venues/dining-de-witte-leeuw.jpg",
        description: "Group gathering and walk to De Witte Leeuw Restaurant for dinner.",
        notes: "Short walk to De Witte Leeuw Restaurant (Graslei 6) located right along the historic Ghent harbor quays. Ghent's waterfront is magically illuminated at twilight."
      },
      {
        time: "19:30",
        endTime: "21:00",
        title: "Dinner at the traditional Belgian De Witte Leeuw Restaurant in Ghent with iconic waterfront views of the Leie River",
        category: "dining",
        location: "De Witte Leeuw Restaurant, Graslei 6, Ghent",
        mapsUrl: "https://maps.google.com/?q=Graslei+6+Gent",
        image: "assets/images/venues/dining-de-witte-leeuw.jpg",
        description: "Dinner at the traditional Belgian De Witte Leeuw Restaurant in Ghent with iconic waterfront views of the Leie River. Official farewell dinner celebrating the scientific and cultural success of the 2026 Standalone. Situated right on the medieval waterfront, offering exquisite 100% Halal fresh seafood and European cuisine.",
        notes: "All menu selections are strictly 100% Halal. Honoring the eminent pediatricians with commemorative gift presentations."
      },
      {
        time: "21:00",
        endTime: "22:00",
        title: "Buses depart back to the hotel in Brussels",
        category: "transfer",
        location: "Ghent → Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Buses depart back to the hotel in Brussels.",
        notes: "Comfortable evening motorcoach transfer from Ghent back to the Renaissance Brussels Hotel for overnight rest following a successful full-day regional excursion."
      }
    ]
  },
  {
    dayNumber: 4,
    dayName: "Sunday",
    date: "11 October 2026",
    title: "Breakfast, Check-Out & Flight MS 726 to Cairo",
    summary: "Buffet breakfast at Renaissance Brussels Hotel, room check-out assistance, private coach transfer to Brussels Airport (BRU), Belgian Customs VAT refund stamping, and EgyptAir MS 726 flight back to Cairo.",
    highlights: ["Renaissance Buffet Breakfast", "Hotel Check-Out", "Coach Transfer to BRU Airport", "Customs VAT Refund Processing", "EgyptAir MS 726 Flight to Cairo"],
    events: [
      {
        time: "07:00",
        endTime: "10:00",
        title: "Breakfast in Renaissance Brussels Hotel main restaurant on the ground floor",
        category: "hotel",
        location: "Renaissance Brussels Hotel, Ground Floor Main Restaurant",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Breakfast in Renaissance Brussels Hotel main restaurant on the ground floor. Leisurely morning breakfast buffet at the Renaissance Brussels Hotel.",
        notes: "Leisurely morning breakfast before proceeding with room check-out."
      },
      {
        time: "10:00",
        endTime: "12:00",
        title: "Check-out",
        category: "hotel",
        location: "Renaissance Brussels Hotel",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Check-out from Renaissance Brussels Hotel. Luggage consolidation, final room settlement, and concierge baggage handling.",
        notes: "Official hotel check-out is completed smoothly. Luggage safely held in the hospitality suite until coach departure."
      },
      {
        time: "12:00",
        endTime: "12:15",
        title: "Meet at the hotel lobby for the airport transfer",
        category: "transfer",
        location: "Renaissance Brussels Hotel Lobby",
        mapsUrl: "https://maps.google.com/?q=Renaissance+Brussels+Hotel",
        image: "assets/images/venues/hotel-renaissance.jpg",
        description: "Meet at the hotel lobby for the airport transfer.",
        notes: "Delegates gather with passports, boarding passes, and tax refund receipts."
      },
      {
        time: "12:15",
        title: "Buses depart for Brussels Airport",
        category: "transfer",
        location: "Renaissance Brussels Hotel → Brussels Airport (BRU)",
        mapsUrl: "https://maps.google.com/?q=Brussels+Airport+Departures",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        description: "Buses depart for Brussels Airport. Private scheduled coach transfer directly to Brussels Airport (BRU) departure terminal.",
        notes: "Please double check you have your passport, boarding passes, and tax refund receipts."
      },
      {
        time: "16:15",
        title: "Departure time of EgyptAir flight MS 726 directly to Cairo",
        category: "flight",
        location: "EgyptAir Flight MS 726 (Brussels → Cairo)",
        mapsUrl: "https://www.google.com/travel/flights",
        image: "assets/images/flight-departure.jpg",
        description: "Departure time of EgyptAir flight MS 726 directly to Cairo. Concluding the four-day executive program with EgyptAir direct flight service to Cairo International Airport.",
        notes: "Direct flight duration approx. 4 hours 20 minutes with inflight dinner service. Important: Complete Belgian Customs VAT refund stamping prior to security."
      },
      {
        time: "21:35",
        title: "Arrival at Cairo Airport, Terminal 3",
        category: "flight",
        location: "Cairo International Airport (CAI), Terminal 3",
        mapsUrl: "https://maps.google.com/?q=Cairo+International+Airport+Terminal+3",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80",
        description: "Arrival at Cairo Airport, Terminal 3. Baggage claim, customs, and conclusion of the Liptis Nutrition Standalone Event.",
        notes: "Thank you for joining Liptis Nutrition in Belgium. Wishing all our Eminent Pediatricians a safe journey home!"
      }
    ]
  }
];
