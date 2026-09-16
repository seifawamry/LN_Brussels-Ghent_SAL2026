/**
 * Liptis Nutrition Brussels & Ghent Standalone Event
 * Tax Free / VAT Refund Engine for Brussels Airport (BRU)
 * Specially designed for Egyptian Physicians visiting Belgium
 */

const VAT_CONFIG = {
  minSpendEUR: 50.01,
  standardRate: 0.21, // 21% standard VAT in Belgium
  reducedRate: 0.06,  // 6% reduced VAT
  defaultEURtoEGP: 52.5, // approximate exchange rate
  operators: [
    { name: "Global Blue", desk: "Departures Level 3 & Pier B Transit", speed: "Instant Cash or 5-7 days card" },
    { name: "Planet Payment", desk: "Travelex Counters (Level 3 & Pier B)", speed: "Instant Cash or 7-14 days card" },
    { name: "Innova Taxfree", desk: "Customs Stamped Mailbox Drop", speed: "Direct card credit 14-21 days" }
  ]
};

const VAT_GUIDE_STEPS = [
  {
    stepNumber: 1,
    title: "At the Boutique / Store",
    icon: "store",
    badge: "In Brussels & Ghent",
    subtitle: "Minimum spend €50.01 per store on the same day",
    instructions: [
      "Ask the cashier before paying: 'Can I have a Tax Free form, please?' (or 'Bordereau de détaxe' in French).",
      "Show your Egyptian passport (or a clear photo of your passport on your phone).",
      "Ensure the original cash register receipt is securely stapled or printed directly on the Tax Free form.",
      "Check that your full name, passport number, and Egyptian home address are correctly filled in."
    ],
    proTip: "Major stores on Rue Neuve (City2) and Veldstraat (Ghent) are fully equipped with electronic tax refund systems (Global Blue / Planet)."
  },
  {
    stepNumber: 2,
    title: "Packing Strategy & Packing Rules",
    icon: "briefcase",
    badge: "Saturday Night / Sunday Morning",
    subtitle: "Separate hold luggage from cabin baggage",
    instructions: [
      "CRITICAL: Keep all purchased items unused, with tags attached and in their original packaging.",
      "Customs officers have the legal right to inspect any item before stamping.",
      "DECIDE WHERE YOUR GOODS WILL TRAVEL:",
      "• If inside CHECKED SUITCASES (Hold): Must be validated BEFORE checking in your bags at Terminal 3.",
      "• If inside HAND LUGGAGE (Cabin): Must be validated AFTER passing security / passport control at Pier B."
    ],
    proTip: "Keep all your Tax Free envelopes and receipts organized together in your hand-carry travel wallet."
  },
  {
    stepNumber: 3,
    title: "Brussels Airport (BRU) Customs Validation",
    icon: "stamp",
    badge: "Day 4 • Sunday 11 Oct • Level 3 Departures",
    subtitle: "No Customs Stamp = No Refund!",
    instructions: [
      "FOR CHECKED LUGGAGE ITEMS (Recommended for liquids, chocolates, perfumes, large items):",
      "1. Go to EgyptAir check-in desk (Terminal Departures Level 3) to print your boarding pass and receive baggage tags.",
      "2. TELL the check-in agent: 'I have Tax Free goods in my suitcase!' The agent tags your bag and returns it to you.",
      "3. Walk with your tagged suitcase to the BELGIAN CUSTOMS DESK (Douane) on Departures Level 3.",
      "4. Present: Egyptian Passport, EgyptAir Boarding Pass, Tax Free Forms, and the suitcase.",
      "5. The Customs officer scans the digital barcode or stamps the physical form, and places your suitcase onto the secure luggage conveyor right at the customs desk.",
      "FOR HAND LUGGAGE ITEMS:",
      "1. Check in normally, pass through security and Belgian border police into Pier B (Non-Schengen).",
      "2. Go to the Customs Office inside Pier B near the transit gates to get your stamp."
    ],
    proTip: "Allow at least 45 minutes at the airport specifically for the VAT refund process before your flight."
  },
  {
    stepNumber: 4,
    title: "Claiming Your Cash or Credit Card Refund",
    icon: "credit-card",
    badge: "Terminal Level 3 or Pier B",
    subtitle: "Receive Euros in cash or credit back to your card",
    instructions: [
      "CASH REFUND: Head to the Global Blue or Travelex desk immediately after customs stamping. Present stamped forms for immediate Euro cash payout (a small per-form processing fee applies).",
      "CREDIT CARD REFUND: Write your Visa / Mastercard / Amex card number clearly on the stamped form, place it in the pre-paid operator envelope, and drop it into the designated secure refund mailbox at the airport.",
      "Keep a clear photo on your smartphone of every stamped form and barcode before dropping it in the box!"
    ],
    proTip: "Credit card refunds usually offer a higher net payout than cash as they avoid the local cash disbursement transaction fee."
  }
];

const VAT_CHECKLIST_ITEMS = [
  { id: "vat_1", text: "Egyptian passport on hand when shopping", defaultChecked: false },
  { id: "vat_2", text: "Spent at least €50.01 in the boutique", defaultChecked: false },
  { id: "vat_3", text: "Received Tax Free Form with till receipt attached", defaultChecked: false },
  { id: "vat_4", text: "Filled in Egyptian home address and passport number on form", defaultChecked: false },
  { id: "vat_5", text: "Items kept unused in original packaging", defaultChecked: false },
  { id: "vat_6", text: "Checked-in with EgyptAir & tagged bag kept with me", defaultChecked: false },
  { id: "vat_7", text: "Belgian Customs stamp obtained at Level 3 BRU Airport", defaultChecked: false },
  { id: "vat_8", text: "Photographed stamped forms with smartphone", defaultChecked: false },
  { id: "vat_9", text: "Collected cash at Travelex/Global Blue or posted in mailbox", defaultChecked: false }
];

/**
 * Calculates net VAT refund estimation
 * @param {number} amountEUR - Total purchase amount in Euros
 * @param {number} rate - VAT rate (0.21 or 0.06)
 * @param {string} method - 'card' or 'cash'
 * @param {number} exchangeRate - EUR to EGP rate
 */
function calculateVATRefund(amountEUR, rate = 0.21, method = "card", exchangeRate = 52.5) {
  if (isNaN(amountEUR) || amountEUR < VAT_CONFIG.minSpendEUR) {
    return {
      isValid: false,
      message: `Minimum spend is €${VAT_CONFIG.minSpendEUR.toFixed(2)} in Belgium to qualify.`,
      amountEUR: amountEUR || 0,
      vatGross: 0,
      feeEUR: 0,
      netEUR: 0,
      netEGP: 0,
      percentage: 0
    };
  }

  // Calculate gross VAT included in price:
  // Gross Price = Net + (Net * rate) = Net * (1 + rate)
  // VAT = Gross Price - (Gross Price / (1 + rate))
  const vatGross = amountEUR - (amountEUR / (1 + rate));
  
  // Refund companies typically take 25% - 35% of the VAT as admin fee
  // Plus cash fee if cash selected
  let feeRatio = rate === 0.21 ? 0.28 : 0.35; // 28% operator fee on 21% VAT
  let netEUR = vatGross * (1 - feeRatio);

  if (method === "cash") {
    // Additional cash disbursement fee (usually ~€3 to €5 or 3%)
    const cashFee = Math.min(Math.max(3.0, netEUR * 0.04), 10.0);
    netEUR = Math.max(0, netEUR - cashFee);
  }

  const feeEUR = vatGross - netEUR;
  const netEGP = netEUR * exchangeRate;
  const percentage = (netEUR / amountEUR) * 100;

  return {
    isValid: true,
    amountEUR: amountEUR,
    vatGross: vatGross,
    feeEUR: feeEUR,
    netEUR: netEUR,
    netEGP: netEGP,
    percentage: percentage,
    rateApplied: rate * 100,
    method: method
  };
}
