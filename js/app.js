/**
 * Liptis Nutrition Brussels & Ghent Standalone Event App
 * Main Controller & Interactive Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  initDualClocks();
  initCountdown();
  initNavigation();
  renderItinerary(1); // default to Day 1
  initVATCalculator();
  initVATChecklist();
  initPrayerTimes();
  initLivePrayerTicker();
  renderPediamilProducts("all");
  initSearch();

  // Escape key listener to dismiss open drawers, hub sheets, and product modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileDrawer();
      closeMobileHubSheet();
      closeProductSpecs();
      closeSearchOverlay();
    }
  });
});

// ==========================================
// 1. DUAL LIVE CLOCKS & COUNTDOWN
// ==========================================
function initDualClocks() {
  function updateClocks() {
    const now = new Date();

    // Brussels is UTC+2 during event / summer time
    const brusselsOptions = {
      timeZone: "Europe/Brussels",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const cairoOptions = {
      timeZone: "Africa/Cairo",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };

    const brusselsTimeEl = document.getElementById("clock-brussels");
    const cairoTimeEl = document.getElementById("clock-cairo");

    if (brusselsTimeEl) {
      brusselsTimeEl.textContent = new Intl.DateTimeFormat("en-US", brusselsOptions).format(now);
    }
    if (cairoTimeEl) {
      cairoTimeEl.textContent = new Intl.DateTimeFormat("en-US", cairoOptions).format(now);
    }
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

function initCountdown() {
  // Target: 8 October 2026 08:00 AM Cairo Time (UTC+3) -> 05:00 UTC
  const targetDate = new Date("2026-10-08T08:00:00+03:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (distance < 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      const banner = document.getElementById("event-status-badge");
      if (banner) banner.textContent = "Event in Progress / Concluded";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ==========================================
// 2. APP NAVIGATION (Tabs, Drawer, Bottom Bar & Hub)
// ==========================================
let currentTab = "overview";

function initNavigation() {
  const navButtons = document.querySelectorAll("[data-nav-tab]");
  navButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetTab = btn.getAttribute("data-nav-tab");
      switchTab(targetTab);
      closeMobileDrawer();
    });
  });

  // Mobile menu button
  const drawerToggle = document.getElementById("drawer-toggle-btn");
  const drawerClose = document.getElementById("drawer-close-btn");
  const drawer = document.getElementById("mobile-drawer");
  const drawerOverlay = document.getElementById("drawer-overlay");

  if (drawerToggle) {
    drawerToggle.addEventListener("click", () => {
      drawer.classList.add("active");
      drawerOverlay.classList.add("active");
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener("click", closeMobileDrawer);
  }
  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", closeMobileDrawer);
  }

  // URL Hash deep-linking support on initial load and hash changes
  if (window.location.hash) {
    const hashTab = window.location.hash.replace("#", "");
    const availableSection = document.getElementById(`section-${hashTab}`);
    if (availableSection) {
      switchTab(hashTab);
    }
  }

  window.addEventListener("hashchange", () => {
    if (window.location.hash) {
      const hashTab = window.location.hash.replace("#", "");
      const availableSection = document.getElementById(`section-${hashTab}`);
      if (availableSection) {
        switchTab(hashTab);
      }
    }
  });
}

function closeMobileDrawer() {
  const drawer = document.getElementById("mobile-drawer");
  const drawerOverlay = document.getElementById("drawer-overlay");
  if (drawer) drawer.classList.remove("active");
  if (drawerOverlay) drawerOverlay.classList.remove("active");
}

function switchTab(tabId) {
  currentTab = tabId;

  // Hide all sections
  document.querySelectorAll(".tab-content-section").forEach(sec => {
    sec.classList.remove("active");
  });

  // Show target section
  const targetSection = document.getElementById(`section-${tabId}`);
  if (targetSection) {
    targetSection.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 1. Update active state in desktop header tabs
  document.querySelectorAll(".desktop-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-nav-tab") === tabId);
  });

  // 2. Update active state in mobile top sticky pill bar and auto-center into viewport
  document.querySelectorAll(".mobile-pill-tab").forEach(pill => {
    const isActive = pill.getAttribute("data-nav-tab") === tabId;
    pill.classList.toggle("active", isActive);
    if (isActive) {
      pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });

  // 3. Update active state in mobile bottom bar (skip central Hub button)
  document.querySelectorAll(".bottom-nav-item").forEach(item => {
    if (item.classList.contains("bottom-hub-trigger")) return;
    item.classList.toggle("active", item.getAttribute("data-nav-tab") === tabId);
  });

  // 4. Update active state in drawer
  document.querySelectorAll(".drawer-nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-nav-tab") === tabId);
  });

  // Automatically close mobile hub sheet if open
  closeMobileHubSheet();
}

// Executive Mobile Hub Sheet (All 9 Modules Sheet)
function openMobileHubSheet() {
  const sheet = document.getElementById("mobile-hub-sheet");
  const backdrop = document.getElementById("mobile-hub-backdrop");
  if (sheet) sheet.classList.add("active");
  if (backdrop) backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
  updateHubLivePrayerStatus();
}

function closeMobileHubSheet() {
  const sheet = document.getElementById("mobile-hub-sheet");
  const backdrop = document.getElementById("mobile-hub-backdrop");
  if (sheet) sheet.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 3. ITINERARY RENDERING & INTERACTION
// ==========================================
let activeDayIndex = 1;
let activeCategoryFilter = "all";
let showCoordinatorNotes = true;

function renderItinerary(dayNum = 1) {
  activeDayIndex = dayNum;
  const dayData = ITINERARY_DATA.find(d => d.dayNumber === dayNum);
  if (!dayData) return;

  // Update Day Selector Tabs
  document.querySelectorAll(".day-tab-btn").forEach(btn => {
    const dNum = parseInt(btn.getAttribute("data-day-num"));
    if (dNum === dayNum) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update Day Header Card
  const titleEl = document.getElementById("itinerary-day-title");
  const dateEl = document.getElementById("itinerary-day-date");
  const summaryEl = document.getElementById("itinerary-day-summary");
  const highlightsEl = document.getElementById("itinerary-day-highlights");

  if (titleEl) titleEl.textContent = `Day ${dayData.dayNumber}: ${dayData.title}`;
  if (dateEl) dateEl.textContent = `${dayData.dayName}, ${dayData.date}`;
  if (summaryEl) summaryEl.textContent = dayData.summary;

  if (highlightsEl) {
    highlightsEl.innerHTML = dayData.highlights.map(hl => `
      <span class="highlight-chip"><i class="fas fa-check-circle"></i> ${hl}</span>
    `).join("");
  }

  // Render Timeline Events
  renderTimelineEvents(dayData.events);
}

function renderTimelineEvents(events) {
  const container = document.getElementById("timeline-events-container");
  if (!container) return;

  const filtered = activeCategoryFilter === "all"
    ? events
    : events.filter(e => e.category === activeCategoryFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-filter-state">
        <i class="fas fa-filter"></i>
        <p>No events found for this category filter on Day ${activeDayIndex}.</p>
        <button class="gold-outline-btn" onclick="setCategoryFilter('all')">Show All Events</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((ev, idx) => {
    const badgeCategory = getCategoryBadge(ev.category);
    const hasCoordNote = ev.coordinatorNote && showCoordinatorNotes;

    return `
      <div class="timeline-event-card ${ev.category}">
        <div class="event-time-column">
          <span class="event-time-start">${ev.time}</span>
          ${ev.endTime ? `<span class="event-time-end">${ev.endTime}</span>` : ""}
          <span class="category-pill ${ev.category}">${badgeCategory.label}</span>
        </div>

        <div class="event-body-column">
          <div class="event-header-row">
            <h4 class="event-title">${ev.title}</h4>
            <div class="event-action-buttons">
              <a href="${ev.mapsUrl}" target="_blank" rel="noopener" class="map-link-btn" title="Open in Google Maps">
                <i class="fas fa-map-marker-alt"></i> <span>Map</span>
              </a>
              <button class="cal-sync-btn" onclick="downloadICS('${encodeURIComponent(ev.title)}', '${encodeURIComponent(ev.description)}', '${encodeURIComponent(ev.location)}', '${activeDayIndex}', '${ev.time}')" title="Add to Calendar">
                <i class="fas fa-calendar-plus"></i>
              </button>
            </div>
          </div>

          <div class="event-location-row">
            <i class="fas fa-compass"></i>
            <span>${ev.location}</span>
          </div>

          ${ev.image ? `
            <div class="event-image-banner-wrap">
              <img src="${ev.image}" alt="${ev.title}" class="event-image-banner" loading="lazy">
            </div>
          ` : ""}

          <p class="event-desc">${ev.description}</p>

          ${ev.notes ? `
            <div class="event-practical-tip">
              <i class="fas fa-info-circle"></i>
              <span>${ev.notes}</span>
            </div>
          ` : ""}

          ${hasCoordNote ? `
            <div class="coordinator-advisory-box">
              <div class="coord-box-header">
                <i class="fas fa-user-tie"></i>
                <strong>Organizer Pacing Insight:</strong>
              </div>
              <p>${ev.coordinatorNote}</p>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }).join("");
}

function getCategoryBadge(cat) {
  switch (cat) {
    case "flight": return { label: "Flight", icon: "plane" };
    case "transfer": return { label: "Transfer", icon: "bus" };
    case "hotel": return { label: "Base Hotel", icon: "hotel" };
    case "scientific": return { label: "Symposium", icon: "microscope" };
    case "culture": return { label: "Sightseeing", icon: "landmark" };
    case "dining": return { label: "Hosted Dining", icon: "utensils" };
    case "shopping": return { label: "Shopping", icon: "shopping-bag" };
    default: return { label: "Activity", icon: "calendar-check" };
  }
}

function setDayFilter(dayNum) {
  renderItinerary(dayNum);
}

function setCategoryFilter(cat) {
  activeCategoryFilter = cat;
  document.querySelectorAll(".cat-filter-btn").forEach(b => {
    if (b.getAttribute("data-cat") === cat) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
  const dayData = ITINERARY_DATA.find(d => d.dayNumber === activeDayIndex);
  if (dayData) renderTimelineEvents(dayData.events);
}

function toggleCoordinatorNotes() {
  showCoordinatorNotes = !showCoordinatorNotes;
  const toggleBtn = document.getElementById("coord-notes-toggle");
  if (toggleBtn) {
    toggleBtn.classList.toggle("active", showCoordinatorNotes);
    toggleBtn.innerHTML = showCoordinatorNotes
      ? `<i class="fas fa-eye"></i> Pacing Insights: ON`
      : `<i class="fas fa-eye-slash"></i> Pacing Insights: OFF`;
  }
  const dayData = ITINERARY_DATA.find(d => d.dayNumber === activeDayIndex);
  if (dayData) renderTimelineEvents(dayData.events);
}

// ICS / Calendar generator
function downloadICS(title, desc, loc, dayNum, timeStr) {
  title = decodeURIComponent(title);
  desc = decodeURIComponent(desc);
  loc = decodeURIComponent(loc);

  const dates = {
    1: "20261008",
    2: "20261009",
    3: "20261010",
    4: "20261011"
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Liptis Nutrition//Brussels Ghent Standalone 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:LIPTIS: ${title}`,
    `DESCRIPTION:${desc.replace(/\n/g, "\\n")}`,
    `LOCATION:${loc}`,
    `DTSTART:${dates[dayNum]}T090000Z`,
    `DTEND:${dates[dayNum]}T100000Z`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `liptis-${title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Download Full 4-Day Calendar
function downloadFullItineraryICS() {
  let eventsICS = [];
  const dates = {
    1: "20261008",
    2: "20261009",
    3: "20261010",
    4: "20261011"
  };

  ITINERARY_DATA.forEach(d => {
    d.events.forEach(ev => {
      eventsICS.push(
        "BEGIN:VEVENT",
        `SUMMARY:LIPTIS: ${ev.title}`,
        `DESCRIPTION:${ev.description.replace(/\n/g, "\\n")} (${ev.time} - ${ev.endTime || ""})`,
        `LOCATION:${ev.location}`,
        `DTSTART:${dates[d.dayNumber]}T080000Z`,
        `DTEND:${dates[d.dayNumber]}T090000Z`,
        "STATUS:CONFIRMED",
        "END:VEVENT"
      );
    });
  });

  const fullICS = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Liptis Nutrition//Brussels Ghent Standalone Full//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...eventsICS,
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([fullICS], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "liptis-brussels-ghent-full-itinerary.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==========================================
// 4. TAX REFUND (VAT) CALCULATOR & CHECKLIST
// ==========================================
let vatInputCurrency = "EUR"; // "EUR" or "EGP"

function setVATInputCurrency(currency) {
  vatInputCurrency = currency;
  const btnEur = document.getElementById("btn-curr-eur");
  const btnEgp = document.getElementById("btn-curr-egp");
  const labelEl = document.getElementById("vat-input-label");
  const symEl = document.getElementById("vat-currency-sym");
  const amountInput = document.getElementById("vat-amount-input");
  const presetsContainer = document.getElementById("vat-presets-container");

  const exchangeRate = VAT_CONFIG.defaultEURtoEGP || 52.5;

  if (currency === "EUR") {
    if (btnEur) btnEur.classList.add("active");
    if (btnEgp) btnEgp.classList.remove("active");
    if (labelEl) labelEl.textContent = "Total Purchase Amount (€)";
    if (symEl) symEl.textContent = "€";

    if (amountInput) {
      let currentVal = parseFloat(amountInput.value) || 0;
      if (currentVal > 1500) {
        amountInput.value = Math.round(currentVal / exchangeRate);
      } else if (currentVal === 0) {
        amountInput.value = "250";
      }
      amountInput.step = "5";
      amountInput.min = "50";
    }

    if (presetsContainer) {
      presetsContainer.innerHTML = `
        <button type="button" class="vat-preset-btn" data-preset="100">€100</button>
        <button type="button" class="vat-preset-btn" data-preset="250">€250</button>
        <button type="button" class="vat-preset-btn" data-preset="500">€500</button>
        <button type="button" class="vat-preset-btn" data-preset="1000">€1,000</button>
        <button type="button" class="vat-preset-btn" data-preset="2000">€2,000</button>
      `;
      bindVATPresetButtons();
    }
  } else {
    // EGP
    if (btnEur) btnEur.classList.remove("active");
    if (btnEgp) btnEgp.classList.add("active");
    if (labelEl) labelEl.textContent = "Total Purchase Amount in Egyptian Pounds (EGP)";
    if (symEl) symEl.textContent = "ج.م";

    if (amountInput) {
      let currentVal = parseFloat(amountInput.value) || 0;
      if (currentVal < 1000 && currentVal > 0) {
        amountInput.value = Math.round(currentVal * exchangeRate);
      } else if (currentVal === 0) {
        amountInput.value = "15000";
      }
      amountInput.step = "500";
      amountInput.min = "2650";
    }

    if (presetsContainer) {
      presetsContainer.innerHTML = `
        <button type="button" class="vat-preset-btn" data-preset="5000">5,000 EGP</button>
        <button type="button" class="vat-preset-btn" data-preset="15000">15,000 EGP</button>
        <button type="button" class="vat-preset-btn" data-preset="30000">30,000 EGP</button>
        <button type="button" class="vat-preset-btn" data-preset="60000">60,000 EGP</button>
        <button type="button" class="vat-preset-btn" data-preset="100000">100,000 EGP</button>
      `;
      bindVATPresetButtons();
    }
  }

  // Trigger calculation update
  if (amountInput) {
    const event = new Event("input");
    amountInput.dispatchEvent(event);
  }
}

function bindVATPresetButtons() {
  const amountInput = document.getElementById("vat-amount-input");
  document.querySelectorAll(".vat-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-preset");
      if (amountInput) {
        amountInput.value = val;
        const event = new Event("input");
        amountInput.dispatchEvent(event);
      }
    });
  });
}

function initVATCalculator() {
  const amountInput = document.getElementById("vat-amount-input");
  const rateSelect = document.getElementById("vat-rate-select");
  const methodInputs = document.querySelectorAll("input[name='vat-refund-method']");

  function runCalculation() {
    let rawAmount = parseFloat(amountInput?.value) || 0;
    const rate = parseFloat(rateSelect?.value) || 0.21;
    let method = "card";
    methodInputs.forEach(i => { if (i.checked) method = i.value; });

    const exchangeRate = VAT_CONFIG.defaultEURtoEGP || 52.5;
    let amountEUR = rawAmount;
    if (vatInputCurrency === "EGP") {
      amountEUR = rawAmount / exchangeRate;
    }

    const result = calculateVATRefund(amountEUR, rate, method, exchangeRate);
    updateVATDisplay(result, rawAmount, vatInputCurrency);
  }

  if (amountInput) amountInput.addEventListener("input", runCalculation);
  if (rateSelect) rateSelect.addEventListener("change", runCalculation);
  methodInputs.forEach(i => i.addEventListener("change", runCalculation));

  bindVATPresetButtons();
  runCalculation(); // initial calculation with default value
}

function updateVATDisplay(res, rawInputAmount = 0, currency = "EUR") {
  const resultCard = document.getElementById("vat-calc-results");
  if (!resultCard) return;

  if (!res.isValid) {
    resultCard.innerHTML = `
      <div class="calc-warning">
        <i class="fas fa-exclamation-triangle"></i>
        <span>${res.message} ${currency === 'EGP' ? '(Equivalent to ~2,650 EGP minimum spend)' : ''}</span>
      </div>
    `;
    return;
  }

  resultCard.innerHTML = `
    <div class="calc-metrics-grid">
      <div class="metric-box highlight-box">
        <span class="metric-label">Estimated Net Refund</span>
        <span class="metric-value-large">€${res.netEUR.toFixed(2)}</span>
        <span class="metric-egp">≈ ${(Math.round(res.netEGP)).toLocaleString()} EGP</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Gross VAT (Invoice)</span>
        <span class="metric-value">€${res.vatGross.toFixed(2)}</span>
        <span class="metric-sub">${res.rateApplied}% standard rate</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Operator Admin Fee</span>
        <span class="metric-value">€${res.feeEUR.toFixed(2)}</span>
        <span class="metric-sub">${res.method === 'cash' ? 'Cash payout fee' : 'Credit card payout'}</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Net Return Ratio</span>
        <span class="metric-value">${res.percentage.toFixed(1)}%</span>
        <span class="metric-sub">Exchange: 1€ ≈ ${VAT_CONFIG.defaultEURtoEGP} EGP</span>
      </div>
    </div>
  `;
}

function initVATChecklist() {
  const container = document.getElementById("vat-checklist-container");
  if (!container) return;

  // Load state from localStorage
  const savedState = JSON.parse(localStorage.getItem("liptis_vat_checklist") || "{}");

  container.innerHTML = VAT_CHECKLIST_ITEMS.map(item => {
    const isChecked = savedState[item.id] !== undefined ? savedState[item.id] : item.defaultChecked;
    return `
      <label class="checklist-item ${isChecked ? 'completed' : ''}" id="checklist-label-${item.id}">
        <input type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''} onchange="toggleChecklistItem('${item.id}')">
        <span class="custom-checkbox"><i class="fas fa-check"></i></span>
        <span class="item-text">${item.text}</span>
      </label>
    `;
  }).join("");

  updateChecklistCounter();
}

function toggleChecklistItem(id) {
  const checkbox = document.getElementById(id);
  const label = document.getElementById(`checklist-label-${id}`);
  if (!checkbox || !label) return;

  const savedState = JSON.parse(localStorage.getItem("liptis_vat_checklist") || "{}");
  savedState[id] = checkbox.checked;
  localStorage.setItem("liptis_vat_checklist", JSON.stringify(savedState));

  if (checkbox.checked) {
    label.classList.add("completed");
  } else {
    label.classList.remove("completed");
  }

  updateChecklistCounter();
}

function updateChecklistCounter() {
  const savedState = JSON.parse(localStorage.getItem("liptis_vat_checklist") || "{}");
  const total = VAT_CHECKLIST_ITEMS.length;
  const checked = Object.values(savedState).filter(Boolean).length;
  const counterEl = document.getElementById("checklist-progress-text");
  const barEl = document.getElementById("checklist-progress-bar");

  if (counterEl) counterEl.textContent = `${checked} of ${total} steps completed`;
  if (barEl) {
    const pct = (checked / total) * 100;
    barEl.style.width = `${pct}%`;
  }
}

// ==========================================
// 5. PRAYER TIMES & QIBLA COMPASS
// ==========================================
let activePrayerCity = "brussels";

function initPrayerTimes() {
  renderPrayerSchedule(activePrayerCity);
  renderMosquesList();
  renderTravelerRulings();
  initQiblaBearing();
}

function renderPrayerSchedule(cityKey = "brussels") {
  activePrayerCity = cityKey;
  const scheduleData = PRAYER_SCHEDULE[cityKey];
  const container = document.getElementById("prayer-schedule-container");
  if (!container || !scheduleData) return;

  // Toggle city buttons
  document.querySelectorAll(".prayer-city-btn").forEach(btn => {
    if (btn.getAttribute("data-city") === cityKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  container.innerHTML = scheduleData.days.map(day => `
    <div class="prayer-day-card ${day.isJumuah ? 'jumuah-card' : ''}">
      <div class="prayer-card-header">
        <div class="day-title-block">
          <h4>${day.dayName}</h4>
          <span class="day-date">${day.date}</span>
        </div>
        ${day.isJumuah ? `<span class="jumuah-badge"><i class="fas fa-star"></i> Jumu'ah Mubarak</span>` : ""}
      </div>

      <div class="prayer-times-grid">
        <div class="prayer-slot">
          <span class="slot-name">Fajr</span>
          <span class="slot-time">${day.fajr}</span>
        </div>
        <div class="prayer-slot sunrise-slot">
          <span class="slot-name">Sunrise</span>
          <span class="slot-time">${day.sunrise}</span>
        </div>
        <div class="prayer-slot highlight-slot">
          <span class="slot-name">${day.isJumuah ? "Jumu'ah / Dhuhr" : "Dhuhr"}</span>
          <span class="slot-time">${day.dhuhr}</span>
        </div>
        <div class="prayer-slot">
          <span class="slot-name">Asr</span>
          <span class="slot-time">${day.asr}</span>
        </div>
        <div class="prayer-slot highlight-slot">
          <span class="slot-name">Maghrib</span>
          <span class="slot-time">${day.maghrib}</span>
        </div>
        <div class="prayer-slot">
          <span class="slot-name">Isha</span>
          <span class="slot-time">${day.isha}</span>
        </div>
      </div>

      ${day.jumuahInfo ? `
        <div class="jumuah-info-alert">
          <i class="fas fa-mosque"></i>
          <span>${day.jumuahInfo}</span>
        </div>
      ` : ""}

      <p class="prayer-day-notes"><i class="fas fa-calendar-day"></i> ${day.notes}</p>
    </div>
  `).join("");
}

function renderMosquesList() {
  const container = document.getElementById("mosques-list-container");
  if (!container) return;

  container.innerHTML = NEARBY_MOSQUES.map(m => `
    <div class="mosque-card">
      <div class="mosque-card-top">
        <div class="mosque-title-area">
          <h4>${m.name}</h4>
          <span class="arabic-subtext">${m.arabicName}</span>
        </div>
        <a href="${m.mapsUrl}" target="_blank" rel="noopener" class="map-link-btn" title="Navigate on Google Maps">
          <i class="fas fa-directions"></i> Direction
        </a>
      </div>
      <p class="mosque-address"><i class="fas fa-map-pin"></i> ${m.address}</p>
      <p class="mosque-proximity"><i class="fas fa-walking"></i> ${m.proximity}</p>
      <p class="mosque-features">${m.features}</p>
      <div class="mosque-timing-badge">
        <i class="fas fa-clock"></i> ${m.jumuahTime}
      </div>
    </div>
  `).join("");
}

function renderTravelerRulings() {
  const container = document.getElementById("traveler-rulings-container");
  if (!container) return;

  container.innerHTML = `
    <div class="rulings-summary-card">
      <h4><i class="fas fa-book-open"></i> ${TRAVELER_PRAYER_GUIDE.title}</h4>
      <p>${TRAVELER_PRAYER_GUIDE.summary}</p>
      <div class="rulings-list-grid">
        ${TRAVELER_PRAYER_GUIDE.rules.map(r => `
          <div class="ruling-item">
            <h5><i class="fas fa-check-circle"></i> ${r.title}</h5>
            <p>${r.description}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function initQiblaBearing() {
  const needle = document.getElementById("qibla-compass-needle");
  const bearingEl = document.getElementById("qibla-bearing-display");
  const dirEl = document.getElementById("qibla-dir-display");

  const bearing = PRAYER_SCHEDULE[activePrayerCity].qiblaBearing;
  if (needle) {
    needle.style.transform = `rotate(${bearing}deg)`;
  }
  if (bearingEl) bearingEl.textContent = `${bearing}°`;
  if (dirEl) dirEl.textContent = PRAYER_SCHEDULE[activePrayerCity].qiblaDirection;
}

function switchPrayerCity(cityKey) {
  renderPrayerSchedule(cityKey);
  initQiblaBearing();
  updateLivePrayerCountdown();
}

// Live Prayer Countdown Ticker Engine
function parseTimeToMinutes(timeStr) {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const meridian = match[3].toUpperCase();
  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function getNextPrayerInfo(cityKey = activePrayerCity) {
  const citySchedule = PRAYER_SCHEDULE[cityKey] || PRAYER_SCHEDULE.brussels;
  const daySchedule = citySchedule.days[0];

  // Get current Brussels local time
  const now = new Date();
  const brusselsTimeStr = now.toLocaleTimeString("en-US", {
    timeZone: "Europe/Brussels",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const [bHours, bMinutes, bSeconds] = brusselsTimeStr.split(":").map(Number);
  const nowMinutes = bHours * 60 + bMinutes;
  const nowTotalSeconds = (bHours * 60 + bMinutes) * 60 + bSeconds;

  const prayers = [
    { name: "Fajr", time: daySchedule.fajr, minutes: parseTimeToMinutes(daySchedule.fajr) },
    { name: "Sunrise (Shuruq)", time: daySchedule.sunrise, minutes: parseTimeToMinutes(daySchedule.sunrise) },
    { name: daySchedule.isJumuah ? "Jumu'ah / Dhuhr" : "Dhuhr", time: daySchedule.dhuhr, minutes: parseTimeToMinutes(daySchedule.dhuhr) },
    { name: "Asr", time: daySchedule.asr, minutes: parseTimeToMinutes(daySchedule.asr) },
    { name: "Maghrib (Sunset)", time: daySchedule.maghrib, minutes: parseTimeToMinutes(daySchedule.maghrib) },
    { name: "Isha", time: daySchedule.isha, minutes: parseTimeToMinutes(daySchedule.isha) }
  ];

  let nextPrayer = null;
  for (const p of prayers) {
    if (p.minutes > nowMinutes) {
      nextPrayer = p;
      break;
    }
  }

  let diffSeconds = 0;
  if (nextPrayer) {
    diffSeconds = nextPrayer.minutes * 60 - nowTotalSeconds;
  } else {
    // Next prayer is tomorrow's Fajr
    nextPrayer = prayers[0];
    diffSeconds = (24 * 60 + nextPrayer.minutes) * 60 - nowTotalSeconds;
  }

  if (diffSeconds < 0) diffSeconds += 24 * 3600;

  const diffHours = Math.floor(diffSeconds / 3600);
  const diffMins = Math.floor((diffSeconds % 3600) / 60);
  const diffSecs = diffSeconds % 60;

  let timerFormatted = "";
  if (diffHours > 0) {
    timerFormatted = `${diffHours}h ${diffMins}m`;
  } else if (diffMins > 0) {
    timerFormatted = `${diffMins}m ${diffSecs}s`;
  } else {
    timerFormatted = `${diffSecs}s`;
  }

  return {
    name: nextPrayer.name,
    time: nextPrayer.time,
    timerText: `in ${timerFormatted}`,
    diffHours,
    diffMins,
    diffSecs
  };
}

function updateLivePrayerCountdown() {
  const info = getNextPrayerInfo(activePrayerCity);
  const headlineEl = document.getElementById("prayer-countdown-headline");
  const timerTextEl = document.getElementById("prayer-timer-text");
  const cityName = activePrayerCity === "ghent" ? "Ghent" : "Brussels";

  if (headlineEl) {
    headlineEl.innerHTML = `<span style="color:var(--gold-champagne);">${cityName}:</span> Next: ${info.name} <small style="font-weight:400; opacity:0.85;">(${info.time})</small>`;
  }
  if (timerTextEl) {
    timerTextEl.textContent = info.timerText;
  }

  updateHubLivePrayerStatus();
}

function updateHubLivePrayerStatus() {
  const hubPrayerEl = document.getElementById("hub-prayer-status");
  if (!hubPrayerEl) return;
  const info = getNextPrayerInfo(activePrayerCity);
  hubPrayerEl.textContent = `Next: ${info.name} (${info.time})`;
}

function initLivePrayerTicker() {
  updateLivePrayerCountdown();
  setInterval(updateLivePrayerCountdown, 1000);
}

// ==========================================
// 6. PEDIAMIL PRODUCTS SHOWCASE & CLINICAL DRAWER
// ==========================================
function renderPediamilProducts(filter = "all") {
  const container = document.getElementById("pediamil-products-grid");
  if (!container) return;

  // Filter products
  const products = filter === "all"
    ? PEDIAMIL_PORTFOLIO
    : PEDIAMIL_PORTFOLIO.filter(p => p.category === filter);

  // Update filter buttons
  document.querySelectorAll(".product-filter-btn").forEach(b => {
    if (b.getAttribute("data-filter") === filter) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  container.innerHTML = products.map(p => {
    let logoSrc = "assets/images/pediamil-logo.png";
    if (p.logoKey === "pediamum") logoSrc = "assets/images/pediamum-logo.png";
    if (p.logoKey === "pediastart") logoSrc = "assets/images/pediastart-logo.png";

    const waMsg = encodeURIComponent(`Hello Dr. Seif El Awamry, inquiry regarding Pediamil ${p.name}: `);

    return `
      <div class="product-clinical-card ${p.category}">
        <div class="product-card-badge">${p.badge}</div>
        <div class="product-header">
          <img src="${logoSrc}" alt="${p.brand}" class="product-brand-logo ${p.logoKey}-logo">
          <span class="product-stage-pill">${p.stage}</span>
        </div>
        <h4 class="product-full-name">${p.name}</h4>
        <p class="product-tagline">${p.tagline}</p>
        <p class="product-desc">${p.description}</p>
        
        <div class="product-highlights-box">
          <h5><i class="fas fa-dna"></i> Clinical Composition & Highlights:</h5>
          <ul>
            ${p.highlights.map(h => `<li><i class="fas fa-check"></i> <span>${h}</span></li>`).join("")}
          </ul>
        </div>

        <div class="product-indications">
          <strong><i class="fas fa-stethoscope"></i> Clinical Indications:</strong>
          <span>${p.indications}</span>
        </div>

        <div class="product-card-actions">
          <button type="button" class="fetch-spec-btn" onclick="openProductSpecs('${p.id}')">
            <i class="fas fa-microscope"></i> Fetch Clinical Specs & Dilution
          </button>
          <a href="https://wa.me/201006942226?text=${waMsg}" target="_blank" rel="noopener" class="product-inquire-btn" title="Direct WhatsApp Consult">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Pediamil Clinical Specification Drawer
function openProductSpecs(productId) {
  const product = PEDIAMIL_PORTFOLIO.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("pediamil-spec-modal");
  const backdrop = document.getElementById("pediamil-modal-backdrop");
  const modalLogo = document.getElementById("spec-modal-logo");
  const modalBadge = document.getElementById("spec-modal-badge");
  const modalBody = document.getElementById("spec-modal-body");

  if (!modal || !modalBody) return;

  // Set logo & badge
  let logoSrc = "assets/images/pediamil-logo.png";
  if (product.logoKey === "pediamum") logoSrc = "assets/images/pediamum-logo.png";
  if (product.logoKey === "pediastart") logoSrc = "assets/images/pediastart-logo.png";

  if (modalLogo) modalLogo.src = logoSrc;
  if (modalBadge) modalBadge.textContent = product.badge;

  // Dilution protocol
  let dilutionContent = "";
  if (product.id === "pediamum") {
    dilutionContent = `
      <div class="spec-dilution-box">
        <h5><i class="fas fa-prescription-bottle-alt"></i> Maternal Preparation Protocol:</h5>
        <p style="font-size:0.85rem; line-height:1.5; color:var(--text-main); margin-bottom:6px;">
          <strong>Standard Serving:</strong> Add 4 level scoops (~36g) into 180 ml of warm or cold previously boiled drinking water. Stir thoroughly until fully dissolved.
        </p>
        <p style="font-size:0.85rem; line-height:1.5; color:var(--text-main); margin:0;">
          <strong>Recommended Intake:</strong> 2 servings daily throughout pre-conception, pregnancy, and active lactation.
        </p>
      </div>
    `;
  } else if (product.id === "pediamil-lbw") {
    dilutionContent = `
      <div class="spec-dilution-box">
        <h5><i class="fas fa-prescription-bottle-alt"></i> Caloric Density & Neonatal Protocol:</h5>
        <p style="font-size:0.85rem; line-height:1.5; color:var(--text-main); margin-bottom:6px;">
          <strong>Caloric Yield:</strong> 1 level scoop (approx. 4.5g) to 30 ml boiled water yields approx. <strong>80 kcal / 100 ml</strong> (higher energy density for catch-up growth).
        </p>
        <p style="font-size:0.85rem; line-height:1.5; color:var(--text-main); margin:0;">
          <strong>Clinical Administration:</strong> 150 – 180 ml/kg/day divided into 8–10 feeds under direct neonatologist supervision.
        </p>
      </div>
    `;
  } else {
    dilutionContent = `
      <div class="spec-dilution-box">
        <h5><i class="fas fa-prescription-bottle-alt"></i> Clinical Feeding & Dilution Reference Table:</h5>
        <div class="spec-table-wrap">
          <div class="spec-table-row"><strong>Infant Age</strong><strong>Boiled Water</strong><strong>Level Scoops</strong><strong>Feeds / 24h</strong></div>
          <div class="spec-table-row"><span>1st – 2nd week</span><span>90 ml</span><span>3 scoops</span><span>6</span></div>
          <div class="spec-table-row"><span>3rd – 4th week</span><span>120 ml</span><span>4 scoops</span><span>5 – 6</span></div>
          <div class="spec-table-row"><span>2nd month</span><span>150 ml</span><span>5 scoops</span><span>5</span></div>
          <div class="spec-table-row"><span>3rd – 4th month</span><span>180 ml</span><span>6 scoops</span><span>5</span></div>
          <div class="spec-table-row"><span>5th – 6th month</span><span>210 ml</span><span>7 scoops</span><span>4 – 5</span></div>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:8px; line-height:1.4;">
          *Standard dilution: 1 level scoop (approx. 4.3g) per 30 ml (1 fl oz) of lukewarm boiled water. Always use enclosed scoop.
        </p>
      </div>
    `;
  }

  const waMsg = encodeURIComponent(`Hello Dr. Seif El Awamry, regarding Pediamil ${product.name} at the Brussels & Ghent 2026 Standalone Event, I have a clinical question: `);

  modalBody.innerHTML = `
    <div class="spec-modal-headline">
      <h3>${product.name}</h3>
      <span class="spec-stage-badge">${product.stage}</span>
    </div>
    <p class="spec-tagline-text">${product.tagline}</p>

    <div class="spec-section-card">
      <h4><i class="fas fa-microscope" style="color:var(--gold-primary);"></i> Scientific Rationale</h4>
      <p style="font-size:0.88rem; line-height:1.6; color:var(--text-main); margin:0;">${product.description}</p>
    </div>

    <div class="spec-section-card">
      <h4><i class="fas fa-dna" style="color:var(--gold-primary);"></i> Key Clinical Composition</h4>
      <ul class="spec-bullet-list">
        ${product.highlights.map(h => `<li><i class="fas fa-check-circle"></i> <span>${h}</span></li>`).join("")}
      </ul>
    </div>

    <div class="spec-section-card">
      <h4><i class="fas fa-stethoscope" style="color:var(--gold-primary);"></i> Clinical Indications</h4>
      <p style="font-size:0.88rem; color:var(--text-main); line-height:1.5; margin:0;">${product.indications}</p>
    </div>

    ${dilutionContent}

    <div class="spec-consult-card">
      <div class="consult-info">
        <i class="fab fa-whatsapp" style="font-size:1.8rem; color:#25D366;"></i>
        <div>
          <strong>Liptis Medical & Scientific Consult</strong>
          <p style="font-size:0.76rem; color:var(--text-muted); margin:0;">Direct WhatsApp with Dr. Seif El Awamry (Senior Product Manager)</p>
        </div>
      </div>
      <a href="https://wa.me/201006942226?text=${waMsg}" target="_blank" rel="noopener" class="spec-wa-direct-btn">
        <i class="fab fa-whatsapp"></i> Inquire via WhatsApp
      </a>
    </div>
  `;

  modal.classList.add("active");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductSpecs() {
  const modal = document.getElementById("pediamil-spec-modal");
  const backdrop = document.getElementById("pediamil-modal-backdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 7. UNIVERSAL SEARCH ENGINE
// ==========================================
function initSearch() {
  const searchInput = document.getElementById("universal-search-input");
  const clearBtn = document.getElementById("search-clear-btn");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (clearBtn) clearBtn.style.display = q ? "block" : "none";
    performSearch(q);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      const resultsOverlay = document.getElementById("search-results-overlay");
      if (resultsOverlay) resultsOverlay.style.display = "none";
    });
  }
}

function performSearch(query) {
  const overlay = document.getElementById("search-results-overlay");
  if (!overlay) return;

  if (!query || query.length < 2) {
    overlay.style.display = "none";
    return;
  }

  let matches = [];

  // Search Itinerary
  ITINERARY_DATA.forEach(d => {
    d.events.forEach(ev => {
      if (ev.title.toLowerCase().includes(query) ||
          ev.description.toLowerCase().includes(query) ||
          ev.location.toLowerCase().includes(query)) {
        matches.push({
          type: `Itinerary (Day ${d.dayNumber})`,
          title: ev.title,
          sub: `${ev.time} • ${ev.location}`,
          tab: "itinerary",
          day: d.dayNumber
        });
      }
    });
  });

  // Search Products
  PEDIAMIL_PORTFOLIO.forEach(p => {
    if (p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.indications.toLowerCase().includes(query)) {
      matches.push({
        type: "Pediamil Portfolio",
        title: p.name,
        sub: p.tagline,
        tab: "pediamil"
      });
    }
  });

  // Search Mosques
  NEARBY_MOSQUES.forEach(m => {
    if (m.name.toLowerCase().includes(query) ||
        m.features.toLowerCase().includes(query) ||
        m.address.toLowerCase().includes(query)) {
      matches.push({
        type: "Prayer & Mosques",
        title: m.name,
        sub: m.address,
        tab: "prayer-times"
      });
    }
  });

  // Search Liptis Staff Contacts
  const STAFF_SEARCH_DATA = [
    { name: "Dr. Ahmed Osama", role: "Senior Regional Manager", phone: "+20 11 1223 3606" },
    { name: "Dr. Hassan El Refaey", role: "Senior Regional Manager", phone: "+20 10 6661 4388" },
    { name: "Fady Magdy", role: "Senior Regional Manager", phone: "+20 10 0366 1922" },
    { name: "Ehab Anes", role: "Senior Regional Manager", phone: "+20 12 1051 1151" },
    { name: "Dr. Seif El Awamry", role: "Senior Product Manager", phone: "+20 10 0694 2226" },
    { name: "Dr. Ehab Atef", role: "Marketing & Medical Director", phone: "+20 10 6661 3506" },
    { name: "Dr. Ahmed Shoaib", role: "Country Manager", phone: "+20 10 9739 5002" }
  ];

  STAFF_SEARCH_DATA.forEach(c => {
    if (c.name.toLowerCase().includes(query) ||
        c.role.toLowerCase().includes(query) ||
        c.phone.replace(/\s+/g, "").includes(query.replace(/\s+/g, "")) ||
        "contact staff liptis assistance coordinator care team".includes(query)) {
      matches.push({
        type: "Staff Contacts",
        title: c.name,
        sub: `${c.role} • ${c.phone}`,
        tab: "contacts"
      });
    }
  });

  overlay.style.display = "block";

  if (matches.length === 0) {
    overlay.innerHTML = `
      <div class="search-no-results">
        <i class="fas fa-search"></i>
        <p>No results found for "${query}". Try searching for 'Atomium', 'Tax', 'Steak', 'Symposium', 'Pediamil', or 'Mosque'.</p>
      </div>
    `;
    return;
  }

  overlay.innerHTML = `
    <div class="search-results-header">
      <span>Found ${matches.length} result(s)</span>
      <button onclick="closeSearchOverlay()"><i class="fas fa-times"></i></button>
    </div>
    <div class="search-results-list">
      ${matches.map(m => `
        <div class="search-result-row" onclick="jumpToSearchResult('${m.tab}', ${m.day || 1})">
          <span class="search-badge">${m.type}</span>
          <div class="search-text">
            <strong>${m.title}</strong>
            <small>${m.sub}</small>
          </div>
          <i class="fas fa-chevron-right"></i>
        </div>
      `).join("")}
    </div>
  `;
}

function closeSearchOverlay() {
  const overlay = document.getElementById("search-results-overlay");
  if (overlay) overlay.style.display = "none";
}

function jumpToSearchResult(tab, day = 1) {
  closeSearchOverlay();
  switchTab(tab);
  if (tab === "itinerary") {
    setDayFilter(day);
  }
}
