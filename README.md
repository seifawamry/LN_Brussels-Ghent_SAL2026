# Liptis Nutrition Brussels & Ghent Standalone Program
### Interactive Executive Manual for Egypt Eminent Pediatricians
**Dates:** 8 – 11 October 2026 &bull; Brussels & Ghent, Belgium  
**Base Hotel:** Renaissance Brussels Hotel (Rue du Parnasse 19, 1050 Brussels)  
**Flights:** EgyptAir MS 725 (Cairo → Brussels) & MS 726 (Brussels → Cairo)  
**Branded Theme:** Pediamil Super Premium Infant Nutrition ([www.pediamil.com](https://www.pediamil.com))

---

## 🌟 Overview & Purpose

This standalone, mobile-and-tablet-optimized web application serves as the executive digital companion for Egypt's eminent pediatricians attending the **Liptis Nutrition Brussels & Ghent Standalone Event 2026**.

It incorporates the entire content of the official Canva travel manual while seamlessly integrating:
1. **Official Pediamil & Liptis Branding**: Featuring the official high-resolution gold logos (`Pediamil`, `Pediamum`, and `Pedia-Start`), metallic gradients, and royal navy palette.
2. **Interactive 4-Day Itinerary**: Hourly schedule with venue maps, .ics calendar export, and coordinator pacing insights (`[EE1]`, `[EE2]`, `[EE3]`).
3. **Step-by-Step Belgian Tax Refund (VAT) Guide**: With an interactive VAT calculator (converting to EGP) and an interactive departure checklist.
4. **Islamic Prayer Times & Qibla Compass**: Daily astronomical prayer times for Brussels and Ghent, Friday Jumu'ah guide, nearby mosques directory with GPS routing, and traveler prayer concessions (*Jam' & Qasr*).
5. **Base Hotel & Hosted Dining Directory**: Renaissance Brussels Hotel details, halal-certified dining (*Steak 'n' Chill*, *Le Mignon*, *De Witte Leeuw*), and Belgian culinary guide.
6. **Pediamil Scientific Portfolio Showcase**: Detailed clinical specifications, composition (DHA/ARA, prebiotics, nucleotides), and pediatric indications for the complete Pediamil product lineup.

---

## 📱 Mobile & Tablet Compatibility

- **Mobile First**: Built with responsive viewport controls, fluid layout, and a fixed bottom thumb navigation bar on mobile phones.
- **Tablet / iPad Optimized**: Adapts to multi-column cards and split-screen layouts on iPads and Android tablets.
- **Standalone PWA**: Includes a Web App Manifest (`manifest.json`) and Service Worker (`sw.js`) allowing doctors to tap "Add to Home Screen" on Safari (iOS) or Chrome (Android) for full offline use without needing internet connectivity.

---

## 🚀 How to Launch

### Option 1: Direct Double-Click (Zero Setup)
- Double-click `launch-program.bat` or open `index.html` directly in any web browser (Chrome, Safari, Edge, Firefox).

### Option 2: Local Web Server
If you prefer running through a local HTTP server:
```powershell
# Using Python (if available):
python -m http.server 8080

# Or simply open directly in browser:
start index.html
```

---

## 🗂️ File Structure

```
liptis-brussels-ghent/
├── index.html                 # Master responsive Single Page Application
├── manifest.json              # PWA manifest for iOS/Android home screen install
├── sw.js                      # Service worker for offline caching
├── launch-program.bat         # 1-click Windows desktop launcher
├── README.md                  # Comprehensive documentation
├── css/
│   ├── main.css               # Pediamil gold & royal navy design system
│   └── responsive.css         # Phone and tablet responsive media queries
├── js/
│   ├── app.js                 # App controller (dual clocks, countdown, tabs, search)
│   ├── itinerary-data.js      # Complete 4-day itinerary & coordinator notes
│   ├── vat-calculator.js      # Tax refund engine, calculator & checklist
│   ├── prayer-times.js        # Astronomical prayer times, Qibla compass & mosques
│   └── pediamil-products.js   # Pediatric scientific portfolio & clinical formulas
└── assets/
    └── images/
        ├── pediamil-logo.png  # Official Pediamil Gold Logo
        ├── pediamum-logo.png  # Official Pediamum Gold Logo
        └── pediastart-logo.png# Official Pedia-Start Red Logo
```

---

## ⚖️ License & Credits
Designed exclusively for **LIPTIS Nutrition** and **Egypt's Eminent Pediatricians**. All logos and trademarks belong to Liptis Nutrition.
