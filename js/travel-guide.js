/**
 * Liptis Nutrition Brussels & Ghent Standalone Event 2026
 * Travel Essentials & Practical Utilities Engine
 * Weather & Climate, Electrical Plug Compatibility & Tri-Directional Currency Calculator (EGP • EUR • USD)
 */

const CURRENCY_CONFIG = {
  defaultEURtoEGP: 54.50,
  defaultUSDtoEGP: 48.50,
  currentEURtoEGP: 54.50,
  currentUSDtoEGP: 48.50
};

// Initialize Calculator on load
function initCurrencyCalculator() {
  const eurInput = document.getElementById("currency-eur-input");
  const egpInput = document.getElementById("currency-egp-input");
  const usdInput = document.getElementById("currency-usd-input");

  if (!eurInput || !egpInput || !usdInput) return;

  // Rate inputs
  const rateEurEl = document.getElementById("rate-eur-egp-display");
  const rateUsdEl = document.getElementById("rate-usd-egp-display");
  const rateCrossEl = document.getElementById("rate-eur-usd-display");

  updateRateDisplays();

  // Input Event Listeners
  eurInput.addEventListener("input", () => {
    const val = parseFloat(eurInput.value);
    if (isNaN(val) || val < 0) {
      egpInput.value = "";
      usdInput.value = "";
      return;
    }
    const egp = val * CURRENCY_CONFIG.currentEURtoEGP;
    const usd = (val * CURRENCY_CONFIG.currentEURtoEGP) / CURRENCY_CONFIG.currentUSDtoEGP;
    egpInput.value = egp.toFixed(2);
    usdInput.value = usd.toFixed(2);
  });

  egpInput.addEventListener("input", () => {
    const val = parseFloat(egpInput.value);
    if (isNaN(val) || val < 0) {
      eurInput.value = "";
      usdInput.value = "";
      return;
    }
    const eur = val / CURRENCY_CONFIG.currentEURtoEGP;
    const usd = val / CURRENCY_CONFIG.currentUSDtoEGP;
    eurInput.value = eur.toFixed(2);
    usdInput.value = usd.toFixed(2);
  });

  usdInput.addEventListener("input", () => {
    const val = parseFloat(usdInput.value);
    if (isNaN(val) || val < 0) {
      eurInput.value = "";
      egpInput.value = "";
      return;
    }
    const egp = val * CURRENCY_CONFIG.currentUSDtoEGP;
    const eur = egp / CURRENCY_CONFIG.currentEURtoEGP;
    egpInput.value = egp.toFixed(2);
    eurInput.value = eur.toFixed(2);
  });

  // Default initial value = €100
  setCurrencyEUR(100);
}

function updateRateDisplays() {
  const rateEurEl = document.getElementById("rate-eur-egp-display");
  const rateUsdEl = document.getElementById("rate-usd-egp-display");
  const rateCrossEl = document.getElementById("rate-eur-usd-display");

  const crossRate = CURRENCY_CONFIG.currentEURtoEGP / CURRENCY_CONFIG.currentUSDtoEGP;

  if (rateEurEl) rateEurEl.textContent = `1 EUR = ${CURRENCY_CONFIG.currentEURtoEGP.toFixed(2)} EGP`;
  if (rateUsdEl) rateUsdEl.textContent = `1 USD = ${CURRENCY_CONFIG.currentUSDtoEGP.toFixed(2)} EGP`;
  if (rateCrossEl) rateCrossEl.textContent = `1 EUR ≈ ${crossRate.toFixed(2)} USD`;
}

function setCurrencyEUR(amount) {
  const eurInput = document.getElementById("currency-eur-input");
  const egpInput = document.getElementById("currency-egp-input");
  const usdInput = document.getElementById("currency-usd-input");

  if (!eurInput || !egpInput || !usdInput) return;

  eurInput.value = amount;
  const egp = amount * CURRENCY_CONFIG.currentEURtoEGP;
  const usd = (amount * CURRENCY_CONFIG.currentEURtoEGP) / CURRENCY_CONFIG.currentUSDtoEGP;

  egpInput.value = egp.toFixed(2);
  usdInput.value = usd.toFixed(2);

  // Highlight active preset button if any
  document.querySelectorAll(".currency-preset-btn").forEach(btn => {
    const btnAmount = parseFloat(btn.getAttribute("data-preset-amount"));
    btn.classList.toggle("active", btnAmount === amount);
  });
}

function toggleCustomRates() {
  const box = document.getElementById("custom-rates-panel");
  if (!box) return;
  const isHidden = box.style.display === "none" || !box.style.display;
  box.style.display = isHidden ? "block" : "none";
}

function applyCustomRates() {
  const eurInput = document.getElementById("custom-eur-egp-input");
  const usdInput = document.getElementById("custom-usd-egp-input");

  if (eurInput && parseFloat(eurInput.value) > 0) {
    CURRENCY_CONFIG.currentEURtoEGP = parseFloat(eurInput.value);
  }
  if (usdInput && parseFloat(usdInput.value) > 0) {
    CURRENCY_CONFIG.currentUSDtoEGP = parseFloat(usdInput.value);
  }

  updateRateDisplays();

  // Recalculate currently entered value
  const activeEUR = document.getElementById("currency-eur-input");
  if (activeEUR && activeEUR.value) {
    setCurrencyEUR(parseFloat(activeEUR.value) || 100);
  }

  const alertMsg = document.getElementById("custom-rate-success");
  if (alertMsg) {
    alertMsg.style.display = "block";
    setTimeout(() => { alertMsg.style.display = "none"; }, 3000);
  }
}

function resetDefaultRates() {
  CURRENCY_CONFIG.currentEURtoEGP = CURRENCY_CONFIG.defaultEURtoEGP;
  CURRENCY_CONFIG.currentUSDtoEGP = CURRENCY_CONFIG.defaultUSDtoEGP;

  const eurInput = document.getElementById("custom-eur-egp-input");
  const usdInput = document.getElementById("custom-usd-egp-input");

  if (eurInput) eurInput.value = CURRENCY_CONFIG.defaultEURtoEGP;
  if (usdInput) usdInput.value = CURRENCY_CONFIG.defaultUSDtoEGP;

  updateRateDisplays();

  const activeEUR = document.getElementById("currency-eur-input");
  if (activeEUR && activeEUR.value) {
    setCurrencyEUR(parseFloat(activeEUR.value) || 100);
  }
}

// Interactive Packing Checklist Toggle
function togglePackingItem(el) {
  el.classList.toggle("checked");
  const checkbox = el.querySelector("input[type='checkbox']");
  if (checkbox) {
    checkbox.checked = el.classList.contains("checked");
  }
}

// Global exposure
window.initCurrencyCalculator = initCurrencyCalculator;
window.setCurrencyEUR = setCurrencyEUR;
window.toggleCustomRates = toggleCustomRates;
window.applyCustomRates = applyCustomRates;
window.resetDefaultRates = resetDefaultRates;
window.togglePackingItem = togglePackingItem;
