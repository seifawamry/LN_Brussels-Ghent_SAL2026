/**
 * Liptis Nutrition Brussels & Ghent Standalone Event
 * Pediamil Scientific Product Portfolio (www.pediamil.com)
 * Presented for Egypt's Eminent Pediatricians
 */

const PEDIAMIL_PORTFOLIO = [
  {
    id: "pediamil-1",
    name: "Pediamil 1",
    brand: "Pediamil",
    logoKey: "pediamil",
    category: "standard",
    stage: "Stage 1 • From Birth to 6 Months",
    tagline: "Super Premium Infant Formula for Optimal Growth & Immunity",
    badge: "Gold Standard Starter",
    description: "Pediamil 1 is crafted to support the newborn during the critical first 1,000 days of life when breast milk is not available. Scientifically formulated with an optimal whey-to-casein ratio (60:40) mirroring human milk, fortified with prebiotics, brain-building lipids, and balanced micronutrients.",
    highlights: [
      "Optimal 60:40 Whey/Casein ratio for easy gastric emptying",
      "Prebiotic Blend (GOS/FOS) for healthy bifidogenic gut flora",
      "DHA & ARA in balanced 1:1 ratio for cognitive & retinal development",
      "5 Essential Nucleotides to reinforce mucosal and systemic immunity",
      "Tailored mineral profile with bioavailable Iron and Calcium"
    ],
    indications: "Healthy term infants from birth up to 6 months who require formula feeding."
  },
  {
    id: "pediamil-2",
    name: "Pediamil 2",
    brand: "Pediamil",
    logoKey: "pediamil",
    category: "standard",
    stage: "Stage 2 • From 6 to 12 Months",
    tagline: "Super Premium Follow-On Formula for Active Weaning",
    badge: "Growth & Weaning Support",
    description: "Pediamil 2 supports the infant's increasing nutritional demands during the weaning phase. Fortified with elevated iron, calcium, and vitamin D, it perfectly complements the gradual introduction of complementary solid foods.",
    highlights: [
      "Adjusted protein concentration (whey:casein 50:50) suitable for maturing kidneys",
      "Elevated bioavailable iron to prevent weaning-associated anemia",
      "Enriched with Omega-3 (ALA, DHA) and Omega-6 (LA, ARA)",
      "Prebiotics GOS/FOS to promote soft, regular stools",
      "Comprehensive vitamin and trace element complex (Zinc, Selenium, Iodine)"
    ],
    indications: "Older infants from 6 months onwards as the liquid component of a diversified diet."
  },
  {
    id: "pediamil-ac",
    name: "Pediamil AC",
    brand: "Pediamil",
    logoKey: "pediamil",
    category: "specialized",
    stage: "Birth to 12 Months",
    tagline: "Anti-Colic Formula for Digestive Comfort",
    badge: "Digestive Relief",
    description: "Pediamil AC is specially designed for infants experiencing infant colic, gas, abdominal distension, and excessive crying. Formulated with reduced lactose, easily digestible 100% whey protein partially hydrolyzed, and structured triglycerides (beta-palmitate) to prevent hard calcium soaps.",
    highlights: [
      "Low lactose level to minimize intestinal fermentation and gas formation",
      "100% partially hydrolyzed whey protein for accelerated gastric transit",
      "Beta-palmitate lipid structure for soft stools and reduced abdominal cramps",
      "Fortified with prebiotics to support a balanced colonic microenvironment"
    ],
    indications: "Dietary management of infant colic, excessive gas, flatulence, and functional crying."
  },
  {
    id: "pediamil-ha",
    name: "Pediamil HA",
    brand: "Pediamil",
    logoKey: "pediamil",
    category: "specialized",
    stage: "Birth to 12 Months",
    tagline: "Hypoallergenic Formula for Allergy Risk Prevention",
    badge: "Allergy Prevention",
    description: "Pediamil HA is formulated with 100% partially hydrolyzed whey protein to significantly reduce antigenicity and lower the risk of developing cow's milk protein allergy in at-risk infants with a family history of atopy.",
    highlights: [
      "Controlled enzymatic whey hydrolysis reducing allergenicity by over 90%",
      "Maintains essential nutritional value, taste, and palatability",
      "Balanced DHA/ARA and Nucleotides for immune system maturation",
      "Clinically evaluated for tolerance and growth adequacy"
    ],
    indications: "Infants with a high risk of developing atopic disease (allergic parent or sibling)."
  },
  {
    id: "pediamil-ar",
    name: "Pediamil AR",
    brand: "Pediamil",
    logoKey: "pediamil",
    category: "specialized",
    stage: "Birth to 12 Months",
    tagline: "Anti-Regurgitation Formula for Reflux Management",
    badge: "Reflux Control",
    description: "Pediamil AR is enriched with natural carob bean gum (locust bean gum), a high-grade cold-resistant thickener that increases viscosity in the stomach under acidic gastric pH, significantly reducing gastroesophageal reflux and regurgitation episodes.",
    highlights: [
      "Thickened with natural carob bean gum: flows easily through standard teat, thickens in stomach",
      "Clinically proven reduction in daily regurgitation frequency and vomit volume",
      "High whey-to-casein ratio ensuring rapid gastric emptying without delayed clearance",
      "Promotes normal weight gain and restful sleep patterns"
    ],
    indications: "Dietary management of gastroesophageal reflux (GER) and persistent regurgitation."
  },
  {
    id: "pediamil-lbw",
    name: "Pediamil LBW",
    brand: "Pediamil",
    logoKey: "pediamil",
    category: "specialized",
    stage: "From Birth for Preterm / Low Birth Weight",
    tagline: "Special Formula for Premature & Low Birth Weight Infants",
    badge: "Preterm Catch-Up Growth",
    description: "Pediamil LBW is a high-density clinical formulation engineered to meet the accelerated caloric and nutritional needs of premature and low birth weight infants, ensuring safe and rapid catch-up growth and neurodevelopment.",
    highlights: [
      "Higher energy density (approx. 80 kcal/100ml) with optimized protein-to-energy ratio",
      "Enriched with Medium Chain Triglycerides (MCTs) for effortless fat absorption",
      "Optimized Calcium and Phosphorus ratio to support neonatal bone mineralization",
      "High levels of DHA, ARA, Taurine, and Choline for immature brain and eye pathways"
    ],
    indications: "Premature infants (<37 weeks) and low birth weight infants (<2,500g) after discharge or during hospitalization."
  },
  {
    id: "pediamil-lf",
    name: "Pediamil LF",
    brand: "Pediamil",
    logoKey: "pediamil",
    category: "specialized",
    stage: "Birth to 12 Months",
    tagline: "Lactose-Free Formula for Diarrhea & Lactose Intolerance",
    badge: "Lactose-Free Care",
    description: "Pediamil LF completely replaces lactose with bioavailable maltodextrins to provide immediate gut rest and mucosal recovery in infants suffering from congenital or post-infectious secondary lactose intolerance and acute diarrhea.",
    highlights: [
      "100% Lactose-Free formula: zero lactose content prevents osmotic diarrhea",
      "Maltodextrin carbohydrate source with low osmolarity to protect intestinal brush border",
      "Enriched with Zinc to accelerate enterocyte regeneration and shorten diarrhea duration",
      "Complete micronutrient profile preventing dehydration and nutritional deficits"
    ],
    indications: "Management of primary lactose intolerance, post-gastroenteritis secondary lactase deficiency, and acute watery diarrhea."
  },
  {
    id: "pediamum",
    name: "Pediamum",
    brand: "Pediamum",
    logoKey: "pediamum",
    category: "maternal",
    stage: "For Expectant & Nursing Mothers",
    tagline: "Super Premium Maternal Nutritional Supplement",
    badge: "Maternal Health & Lactation",
    description: "Pediamum is an advanced maternal nutritional milk beverage formulated to support the elevated metabolic, structural, and physiological requirements of women throughout pregnancy and lactation. It ensures optimal nutrient transfer to the growing fetus and breastfed newborn.",
    highlights: [
      "Rich in Folic Acid (Methylfolate) to prevent neural tube defects",
      "DHA (Omega-3) for fetal neurodevelopment and breast milk lipid enrichment",
      "Chelated Iron and Vitamin C for high bioavailability without gastrointestinal distress",
      "Calcium, Magnesium, and Vitamin D3 for maternal bone density and fetal skeletal development",
      "Low fat, delicious natural vanilla taste with zero artificial colorants"
    ],
    indications: "Nutritional supplementation during pre-conception, pregnancy, and breastfeeding."
  },
  {
    id: "pedia-start",
    name: "Pedia-Start",
    brand: "Pedia-Start",
    logoKey: "pediastart",
    category: "starter",
    stage: "From Birth",
    tagline: "Gentle Early Starter Formula for Newborn Vitality",
    badge: "Gentle Beginning",
    description: "Pedia-Start provides gentle, clinically balanced nutritional initiation for neonates requiring formula support from day one. Formulated to foster smooth digestive adaptation, gastrointestinal tolerance, and balanced immune development.",
    highlights: [
      "Ultra-pure European dairy origin adhering to highest global pediatric standards",
      "Balanced lipid profile with essential fatty acids for cellular membrane integrity",
      "Gentle protein matrix minimizing gastric discomfort and stool hardening",
      "Fortified with prebiotics and essential trace elements"
    ],
    indications: "Newborn infants requiring gentle formula initiation."
  }
];
