/**
 * Liptis Nutrition Brussels & Ghent Standalone Event
 * Islamic Prayer Times & Qibla Direction Engine (8 - 11 October 2026)
 */

const PRAYER_SCHEDULE = {
  brussels: {
    city: "Brussels",
    country: "Belgium",
    timezone: "UTC+2 (CEST)",
    qiblaBearing: 124.3, // degrees clockwise from North
    qiblaDirection: "South-East (ESE)",
    days: [
      {
        date: "2026-10-08",
        dayName: "Thursday, 8 Oct",
        fajr: "06:05 AM",
        sunrise: "07:49 AM",
        dhuhr: "01:34 PM",
        asr: "04:40 PM",
        maghrib: "07:07 PM",
        isha: "08:44 PM",
        notes: "Arrival day in Brussels. Sunset during Grand-Place walking tour."
      },
      {
        date: "2026-10-09",
        dayName: "Friday, 9 Oct (Jumu'ah)",
        fajr: "06:07 AM",
        sunrise: "07:51 AM",
        dhuhr: "01:34 PM",
        asr: "04:38 PM",
        maghrib: "07:05 PM",
        isha: "08:42 PM",
        isJumuah: true,
        jumuahInfo: "Friday Prayer khutbah usually starts 01:15 PM - 01:45 PM. See nearby mosques below.",
        notes: "Symposium concludes at 12:00 PM; networking break until 12:45 PM provides ideal prayer window."
      },
      {
        date: "2026-10-10",
        dayName: "Saturday, 10 Oct",
        fajr: "06:08 AM",
        sunrise: "07:52 AM",
        dhuhr: "01:34 PM",
        asr: "04:36 PM",
        maghrib: "07:03 PM",
        isha: "08:40 PM",
        notes: "Full-day excursion in Ghent (see Ghent specific times below)."
      },
      {
        date: "2026-10-11",
        dayName: "Sunday, 11 Oct",
        fajr: "06:10 AM",
        sunrise: "07:54 AM",
        dhuhr: "01:33 PM",
        asr: "04:35 PM",
        maghrib: "07:01 PM",
        isha: "08:38 PM",
        notes: "Departure day. Multi-faith prayer room available at Brussels Airport Pier B / Non-Schengen."
      }
    ]
  },
  ghent: {
    city: "Ghent (Gent)",
    country: "Belgium",
    timezone: "UTC+2 (CEST)",
    qiblaBearing: 124.8,
    qiblaDirection: "South-East (ESE)",
    days: [
      {
        date: "2026-10-10",
        dayName: "Saturday, 10 Oct (Ghent Day)",
        fajr: "06:11 AM",
        sunrise: "07:54 AM",
        dhuhr: "01:36 PM",
        asr: "04:40 PM",
        maghrib: "07:05 PM",
        isha: "08:42 PM",
        notes: "Canal cruise at 02:30 PM is between Dhuhr & Asr. Waterfront dining at 07:30 PM follows Maghrib."
      }
    ]
  }
};

const NEARBY_MOSQUES = [
  {
    name: "Great Mosque of Brussels (Grande Mosquée de Bruxelles)",
    arabicName: "المركز الإسلامي والثقافي في بلجيكا - المسجد الكبير",
    address: "Parc du Cinquantenaire 14, 1000 Bruxelles",
    proximity: "1.4 km from Renaissance Brussels Hotel (~18 min walk / 6 min taxi)",
    mapsUrl: "https://maps.google.com/?q=Great+Mosque+of+Brussels",
    features: "Historical grand mosque located inside the picturesque Cinquantenaire Park. Spacious main prayer hall, ablution (Wudu) facilities, Friday Jumu'ah khutbah in Arabic and French.",
    jumuahTime: "Khutbah: 01:15 PM"
  },
  {
    name: "Mosquée Al-Khalil (Molenbeek)",
    arabicName: "مسجد الخليل",
    address: "Rue de la Fraternité 7, 1080 Molenbeek-Saint-Jean, Bruxelles",
    proximity: "Largest Islamic complex in Belgium, easily accessible by taxi",
    mapsUrl: "https://maps.google.com/?q=Mosqu%C3%A9e+Al+Khalil+Bruxelles",
    features: "Large community capacity, extensive ablution areas, bookshop, Friday Jumu'ah prayer.",
    jumuahTime: "Khutbah: 01:15 PM"
  },
  {
    name: "Mosquée Assounnah (Near Central Station)",
    arabicName: "مسجد السنة",
    address: "Rue du Cureghem 18, 1000 Bruxelles",
    proximity: "Close to central Brussels and Rue Neuve shopping district",
    mapsUrl: "https://maps.google.com/?q=Mosquee+Assounnah+Bruxelles",
    features: "Convenient central location during Day 2 afternoon shopping and leisure window.",
    jumuahTime: "Khutbah: 01:30 PM"
  },
  {
    name: "Brussels Airport (BRU) Multi-Faith Prayer Room",
    arabicName: "مصلى مطار بروكسل الدولي",
    address: "Brussels Airport (BRU), Departures Level & Transit Area Pier B",
    proximity: "Directly inside terminal during Day 4 departure",
    mapsUrl: "https://maps.google.com/?q=Brussels+Airport",
    features: "Quiet dedicated Muslim prayer room with clean ablution facilities, prayer rugs, and Qibla indicator for travelers prior to EgyptAir MS 726 boarding.",
    jumuahTime: "Daily 24/7 Access"
  },
  {
    name: "Ghent Central Mosque (El Fath Moskee)",
    arabicName: "مسجد الفتح - غنت",
    address: "Kortrijksepoortstraat 34, 9000 Gent",
    proximity: "Near Ghent historic centre (~12 min walk from Graslei / Veldstraat)",
    mapsUrl: "https://maps.google.com/?q=Moskee+El+Fath+Gent",
    features: "Warm community mosque in central Ghent, ideal for Dhuhr and Asr prayers during Day 3 free time.",
    jumuahTime: "Daily & Jumu'ah"
  }
];

const TRAVELER_PRAYER_GUIDE = {
  title: "Traveler Concessions (رخصة المسافر - جمع وقصر الصلاة)",
  summary: "Under Islamic jurisprudence (Sharia), travelers covering a distance exceeding 80 km (such as Cairo to Brussels, and Brussels to Ghent) qualify for the travel prayer concessions (Rukhsa).",
  rules: [
    {
      title: "Shortening 4-Rak'ah Prayers (Qasr - قصر)",
      description: "Dhuhr, Asr, and Isha prayers are shortened from 4 Rak'ahs to 2 Rak'ahs each. Fajr remains 2 Rak'ahs, and Maghrib remains 3 Rak'ahs."
    },
    {
      title: "Combining Prayers (Jam' - جمع)",
      description: "You may combine Dhuhr with Asr (either at Dhuhr time as Jam' Taqdim, or delayed to Asr time as Jam' Ta'khir). Similarly, Maghrib and Isha may be combined."
    },
    {
      title: "Symposium & Excursion Practical Application",
      description: "On Friday 9 Oct (Symposium Day), delegates can perform Jumu'ah or combine Dhuhr (2) + Asr (2) before afternoon departures. On Saturday 10 Oct (Ghent Day), combining prayers ensures uninterrupted enjoyment of the canal cruise and heritage tours."
    },
    {
      title: "Qibla Finding Tip",
      description: "In Brussels and Ghent, face South-East (approx. 124° on a compass dial). In hotel rooms, phone compasses should be calibrated with a figure-8 motion away from metallic bedside furniture."
    }
  ]
};
