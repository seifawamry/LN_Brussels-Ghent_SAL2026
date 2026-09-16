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
    id: "pedia-start-1",
    name: "Pedia-Start 1",
    brand: "Pedia-Start",
    logoKey: "pediastart",
    category: "starter",
    stage: "Stage 1 • From Birth to 6 Months",
    form: "Powder (350 gm)",
    tagline: "Infant Milk Formula with Micro-Encapsulated Iron for Maximum Bioavailability & Brain Development",
    badge: "Micro-Encapsulated Iron",
    description: "Pedia-Start 1 is the highest quality infant milk formula with Micro-Encapsulated Iron for maximum iron bioavailability, proven iron deficiency anemia protection, and proper mental development. Trusted by pediatricians and parents to deliver balanced, wholesome nutrition during the first 6 months when breastfeeding is not possible.",
    highlights: [
      "Micro-Encapsulated Iron: Enhances iron absorption, lowers anemia incidence, and prevents constipation & gastric distress",
      "Optimum Vitamin C to Iron Ratio (>10:1): Maximizes intestinal iron bioavailability and reduces incidence of hard stools",
      "Hippocampal Cognitive Complex: Choline to enhance concentration, learning skills, attention, and memory",
      "Taurine & Inositol: Supports brain and retinal development, protects nerve pathways, and enhances fat/glucose absorption",
      "Essential Fatty Acids (LA & ALA at 10:1 Ratio): Optimal essential fatty acid ratio for brain and visual development",
      "Selenium & Zinc: Antioxidant action reducing risk of allergic disease while reinforcing cellular immunity",
      "Clean Formula Purity: Strictly no hormones, no antibiotics, no gluten, no sucrose, and Non-GMO"
    ],
    indications: "Complete, balanced infant milk formula for healthy term infants from birth up to 6 months when breastfeeding is not possible, offering proven protection against Iron Deficiency Anemia (IDA) and promoting cognitive growth.",
    preparation: "Standard dilution: 1 level scoop (approx. 4.3g) per 30 ml of lukewarm previously boiled drinking water. Package size: 350 gm powder.",
    website: "https://www.pedia-start.com"
  },
  {
    id: "pedia-start-2",
    name: "Pedia-Start 2",
    brand: "Pedia-Start",
    logoKey: "pediastart",
    category: "starter",
    stage: "Stage 2 • From 6 to 12 Months",
    form: "Powder (350 gm)",
    tagline: "Follow-on Formula with Micro-Encapsulated Iron for Cognitive Growth & Weaning Anemia Protection",
    badge: "Follow-on Iron Protection",
    description: "Pedia-Start 2 is the highest quality follow-on formula engineered with Micro-Encapsulated Iron to safeguard infants aged 6 to 12 months against the high prevalence of weaning iron deficiency anemia (affecting 43% of infants). Provides complete, balanced nutrition with enhanced cognitive nutrients and immune factors during the introduction of complementary foods.",
    highlights: [
      "Micro-Encapsulated Iron: Clinically protects against the peak 6-12 month anemia window without metallic aftertaste or constipation",
      "Optimum Vitamin C to Iron Ratio (>10:1): Guarantees superior bioavailability and enterocyte absorption during weaning",
      "Cognitive & Motor Enhancement: Choline, Taurine, and Inositol supporting rapid language acquisition and memory retention",
      "Bone Mineralization Complex: Balanced Calcium and Phosphorus with Vitamin D3 to prevent rickets and ensure dense skeletal development",
      "Erythropoiesis & Visual Acuity: Vitamin A and Vitamin B12 to support healthy red blood cell production and prevent deficiency complications",
      "Balanced Protein Content: Tailored to maturing infant renal solute load, ensuring healthy physical growth",
      "Clean Formula Purity: Strictly no hormones, no antibiotics, no gluten, no sucrose, and Non-GMO"
    ],
    indications: "Follow-on formula for older infants from 6 to 12 months as the liquid nutritional component of a diversified weaning diet, preventing nutritional iron deficiency anemia and failure to thrive.",
    preparation: "Standard serving: 7 level scoops in 210 ml previously boiled drinking water, 3-4 feeds daily as solid foods are gradually introduced. Package size: 350 gm powder.",
    website: "https://www.pedia-start.com"
  }
];

/**
 * Pedia-Start Scientific Rationale & Clinical Evidence
 * Sourced directly from www.pedia-start.com
 */
const PEDIA_START_SCIENCE = {
  headline: "Micro-Encapsulated Iron for Maximum Bioavailability & Cognitive Protection",
  sourceUrl: "https://www.pedia-start.com",
  stampImage: "assets/images/pedia-start-stamp.png",
  philosophy: "Liptis Nutrition strongly supports breast milk as the best nutrition for infants (WHO recommends exclusive breastfeeding during the first 6 months). When formula is needed, Pedia-Start offers complete, wholesome nutrition designed to prevent Iron Deficiency Anemia (IDA) and nurture cognitive development.",
  epidemiology: {
    globalStat: "WHO estimates that 42% of children under 5 years of age worldwide are anemic.",
    egyptStat: "Iron deficiency anemia is the most common cause of anemia among Egyptian infants 6 to 24 months, affecting 43% of infants (exceeding 60% in certain African nations).",
    riskFactors: [
      "Maternal iron deficiency during pregnancy",
      "Delayed introduction of iron-rich complementary solid foods",
      "Genetic predisposition & family history",
      "Early umbilical cord clamping",
      "Premature birth & low neonatal iron stores",
      "Premature introduction of whole cow's milk before 12 months"
    ]
  },
  clinicalPillars: [
    {
      title: "Micro-Encapsulated Iron",
      desc: "Protects the iron core through gastric transit, enhancing duodenal absorption, preventing constipation, eliminating metallic taste, and preventing lipid oxidation in the formula."
    },
    {
      title: "Optimum Vitamin C : Iron Ratio (>10:1)",
      desc: "Significantly enhances non-heme iron absorption while minimizing gastrointestinal discomfort and reducing the incidence of hard stools."
    },
    {
      title: "Hippocampal Cognitive Complex",
      desc: "Choline, Taurine, and Inositol directly nourish the developing hippocampus—the brain center for learning, attention, concentration, and memory formation."
    },
    {
      title: "Essential Fatty Acid Balance (LA:ALA 10:1)",
      desc: "Linoleic Acid and Alpha-Linolenic Acid balanced at the optimal 10:1 ratio for neural myelin sheath formation and retinal visual acuity."
    },
    {
      title: "Clean Formula Purity Standard",
      desc: "100% Free of antibiotics, artificial growth hormones, gluten, sucrose, and Genetically Modified Organisms (Non-GMO)."
    }
  ]
};

