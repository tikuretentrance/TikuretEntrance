// import { PracticeQuestion } from "@/lib/types/practice";

// const acidBaseQuestions: PracticeQuestion[] = [
//     {
//         id: 1,
//         text: "Explain the Arrhenius concept of acids and bases. Provide examples of each.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Arrhenius acids increase the concentration of H+ ions in solution (e.g., HCl), while Arrhenius bases increase the concentration of OH- ions (e.g., NaOH).",
//         topic: "Arrhenius Concept of Acids and Bases",
//         difficulty: "easy"
//     },
//     {
//         id: 2,
//         text: "Why is HCl considered an Arrhenius acid?",
//         options: [],
//         correctAnswer: null,
//         explanation: "HCl is an Arrhenius acid because it dissociates completely in water to produce H+ ions.",
//         topic: "Arrhenius Concept of Acids and Bases",
//         difficulty: "easy"
//     },
//     {
//         id: 3,
//         text: "Classify the following compounds as Arrhenius acids, bases, or neither: HNO3, NaOH, NaCl.",
//         options: [],
//         correctAnswer: null,
//         explanation: "HNO3 is an Arrhenius acid, NaOH is an Arrhenius base, and NaCl is neither.",
//         topic: "Arrhenius Concept of Acids and Bases",
//         difficulty: "easy"
//     },
//     {
//         id: 4,
//         text: "Define Brønsted-Lowry acids and bases. Provide examples of each.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Brønsted-Lowry acids donate protons (e.g., HCl), and bases accept protons (e.g., NH3).",
//         topic: "Brønsted-Lowry Concept of Acids and Bases",
//         difficulty: "easy"
//     },
//     {
//         id: 5,
//         text: "Identify the Brønsted-Lowry acid and base in the reaction: NH3 + H2O ⇌ NH4+ + OH-.",
//         options: [],
//         correctAnswer: null,
//         explanation: "NH3 is the base, and H2O is the acid.",
//         topic: "Brønsted-Lowry Concept of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 6,
//         text: "Explain the concept of conjugate acid-base pairs. Provide an example.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Conjugate acid-base pairs differ by a proton; for example, HCl (acid) and Cl- (base).",
//         topic: "Brønsted-Lowry Concept of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 7,
//         text: "Define Lewis acids and bases. Provide examples of each.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Lewis acids accept electron pairs (e.g., BF3), and Lewis bases donate electron pairs (e.g., NH3).",
//         topic: "Lewis Concept of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 8,
//         text: "Explain how the Lewis concept differs from the Brønsted-Lowry concept.",
//         options: [],
//         correctAnswer: null,
//         explanation: "The Lewis concept involves electron pair transfer, while the Brønsted-Lowry concept involves proton transfer.",
//         topic: "Lewis Concept of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 9,
//         text: "Identify the Lewis acid and base in the reaction: BF3 + NH3 → F3B−NH3.",
//         options: [],
//         correctAnswer: null,
//         explanation: "BF3 is the Lewis acid, and NH3 is the Lewis base.",
//         topic: "Lewis Concept of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 10,
//         text: "Write the equation for the ionization of water and explain the significance of Kw.",
//         options: [],
//         correctAnswer: null,
//         explanation: "The ionization of water is: 2H2O ⇌ H3O+ + OH-. Kw is the ion-product constant for water.",
//         topic: "Ionization of Water",
//         difficulty: "easy"
//     },
//     {
//         id: 11,
//         text: "Calculate the pH of a solution with [H3O+] = 5.0 × 10^-6 M.",
//         options: [],
//         correctAnswer: null,
//         explanation: "pH = -log[H3O+] = -log(5.0 × 10^-6) = 5.3.",
//         topic: "Ionization of Water",
//         difficulty: "easy"
//     },
//     {
//         id: 12,
//         text: "What is the pH of pure water at 25°C?",
//         options: [],
//         correctAnswer: null,
//         explanation: "The pH of pure water at 25°C is 7.",
//         topic: "Ionization of Water",
//         difficulty: "easy"
//     },
//     {
//         id: 13,
//         text: "Explain the difference between strong and weak acids. Provide examples.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Strong acids dissociate completely (e.g., HCl), while weak acids dissociate partially (e.g., CH3COOH).",
//         topic: "Strength of Acids and Bases",
//         difficulty: "easy"
//     },
//     {
//         id: 14,
//         text: "How do you determine the strength of an acid using Ka?",
//         options: [],
//         correctAnswer: null,
//         explanation: "The strength of an acid is determined by its Ka value, which indicates the extent of dissociation.",
//         topic: "Strength of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 15,
//         text: "Calculate the Ka for an acid if a 0.1 M solution has a pH of 3.5.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Ka = [H3O+]^2 / [acid]; [H3O+] = 10^-3.5 = 3.16 × 10^-4 M. Ka = (3.16 × 10^-4)^2 / 0.1 = 1.00 × 10^-6.",
//         topic: "Strength of Acids and Bases",
//         difficulty: "hard"
//     },
//     {
//         id: 16,
//         text: "Define percent ionization and explain its significance.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Percent ionization is the proportion of ionized molecules in a solution, indicating the extent of dissociation.",
//         topic: "Percent Ionization",
//         difficulty: "medium"
//     },
//     {
//         id: 17,
//         text: "Calculate the percent ionization of a 0.2 M acetic acid solution with a pH of 3.0.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Percent ionization = ([H3O+] / initial concentration) × 100. [H3O+] = 10^-3 = 0.001 M. Percent ionization = (0.001 / 0.2) × 100 = 0.5%.",
//         topic: "Percent Ionization",
//         difficulty: "hard"
//     },
//     {
//         id: 18,
//         text: "What is the percent ionization of a 0.05 M solution of a weak base with Kb = 1.5 × 10^-5 and pOH of 4.5?",
//         options: [],
//         correctAnswer: null,
//         explanation: "Percent ionization = ([OH-] / initial concentration) × 100. [OH-] = 10^-4.5 = 3.16 × 10^-5 M. Percent ionization = (3.16 × 10^-5 / 0.05) × 100 = 0.632%.",
//         topic: "Percent Ionization",
//         difficulty: "hard"
//     },
//     {
//         id: 19,
//         text: "Explain the common ion effect and its importance.",
//         options: [],
//         correctAnswer: null,
//         explanation: "The common ion effect is the suppression of ionization of a weak electrolyte by the addition of a common ion.",
//         topic: "Common Ion Effect",
//         difficulty: "medium"
//     },
//     {
//         id: 20,
//         text: "How does the addition of a common ion affect the solubility of a sparingly soluble salt?",
//         options: [],
//         correctAnswer: null,
//         explanation: "The addition of a common ion decreases the solubility of a sparingly soluble salt due to Le Chatelier's principle.",
//         topic: "Common Ion Effect",
//         difficulty: "medium"
//     },
//     {
//         id: 21,
//         text: "Calculate the solubility of AgCl in a 0.1 M NaCl solution (Ksp for AgCl = 1.8 × 10^-10).",
//         options: [],
//         correctAnswer: null,
//         explanation: "Using the Ksp expression and the common ion effect, the solubility of AgCl decreases in the presence of NaCl.",
//         topic: "Common Ion Effect",
//         difficulty: "hard"
//     },
//     {
//         id: 22,
//         text: "What is a buffer solution? Explain its importance in chemical and biological systems.",
//         options: [],
//         correctAnswer: null,
//         explanation: "A buffer solution resists changes in pH when small amounts of acid or base are added, maintaining stable conditions in chemical and biological systems.",
//         topic: "Buffer Solutions",
//         difficulty: "medium"
//     },
//     {
//         id: 23,
//         text: "Calculate the pH of a buffer solution containing 0.3 M acetic acid and 0.2 M sodium acetate (Ka for acetic acid = 1.8 × 10^-5).",
//         options: [],
//         correctAnswer: null,
//         explanation: "Use the Henderson-Hasselbalch equation: pH = pKa + log([acetate]/[acetic acid]).",
//         topic: "Buffer Solutions",
//         difficulty: "hard"
//     },
//     {
//         id: 24,
//         text: "How does a buffer solution resist changes in pH?",
//         options: [],
//         correctAnswer: null,
//         explanation: "A buffer solution contains a weak acid and its conjugate base, which can neutralize small amounts of added acid or base.",
//         topic: "Buffer Solutions",
//         difficulty: "medium"
//     },
//     {
//         id: 25,
//         text: "Explain the hydrolysis of salts and provide examples of salts that form acidic, basic, and neutral solutions.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Hydrolysis is the reaction of salts with water. Examples include NaCl (neutral), NH4Cl (acidic), and Na2CO3 (basic).",
//         topic: "Hydrolysis of Salts",
//         difficulty: "medium"
//     },
//     {
//         id: 26,
//         text: "Predict whether a solution of Na2CO3 will be acidic, basic, or neutral.",
//         options: [],
//         correctAnswer: null,
//         explanation: "A solution of Na2CO3 will be basic due to the hydrolysis of CO3^2- ions.",
//         topic: "Hydrolysis of Salts",
//         difficulty: "easy"
//     },
//     {
//         id: 27,
//         text: "Write the hydrolysis equation for NH4Cl.",
//         options: [],
//         correctAnswer: null,
//         explanation: "NH4Cl + H2O ⇌ NH4OH + HCl. The NH4+ ion undergoes hydrolysis to form a slightly acidic solution.",
//         topic: "Hydrolysis of Salts",
//         difficulty: "medium"
//     },
//     {
//         id: 28,
//         text: "What are acid-base indicators? Provide examples.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Acid-base indicators are substances that change color depending on the pH of the solution, such as phenolphthalein and methyl orange.",
//         topic: "Acid-Base Indicators",
//         difficulty: "easy"
//     },
//     {
//         id: 29,
//         text: "Explain how an indicator changes color in an acidic and basic medium.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Indicators change color due to the ionization equilibrium affected by the pH of the solution.",
//         topic: "Acid-Base Indicators",
//         difficulty: "medium"
//     },
//     {
//         id: 30,
//         text: "Which indicator would you use for a titration involving a strong acid and a weak base?",
//         options: [],
//         correctAnswer: null,
//         explanation: "Methyl orange is suitable for titrations involving a strong acid and a weak base.",
//         topic: "Acid-Base Indicators",
//         difficulty: "medium"
//     },
//     {
//         id: 31,
//         text: "Explain the concept of equivalents in acid-base reactions.",
//         options: [],
//         correctAnswer: null,
//         explanation: "An equivalent is the amount of a substance that reacts with one mole of hydrogen or hydroxide ions.",
//         topic: "Equivalents of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 32,
//         text: "Calculate the number of equivalents of H2SO4 in 500 mL of a 0.2 M solution.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Equivalents = Molarity × Volume (in L) = 0.2 M × 0.5 L = 0.1 equivalents.",
//         topic: "Equivalents of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 33,
//         text: "How do you determine the normality of a solution?",
//         options: [],
//         correctAnswer: null,
//         explanation: "Normality is the number of equivalents per liter of solution.",
//         topic: "Equivalents of Acids and Bases",
//         difficulty: "easy"
//     },
//     {
//         id: 34,
//         text: "Explain the process of acid-base titration and the significance of the equivalence point.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Acid-base titration involves adding a known concentration of base (or acid) to neutralize an unknown acid (or base). The equivalence point is where the amounts of acid and base are stoichiometrically equal.",
//         topic: "Acid-Base Titrations",
//         difficulty: "medium"
//     },
//     {
//         id: 35,
//         text: "How do you select an appropriate indicator for a titration?",
//         options: [],
//         correctAnswer: null,
//         explanation: "Select an indicator that changes color at the pH corresponding to the equivalence point of the titration.",
//         topic: "Acid-Base Titrations",
//         difficulty: "medium"
//     },
//     {
//         id: 36,
//         text: "Calculate the volume of 0.15 M NaOH required to neutralize 25 mL of 0.2 M HCl.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Using the equation M1V1 = M2V2, V2 = (0.2 M × 25 mL) / 0.15 M = 33.33 mL.",
//         topic: "Acid-Base Titrations",
//         difficulty: "hard"
//     },
//     {
//         id: 37,
//         text: "What is the pH of a solution with [OH-] = 1.0 × 10^-4 M?",
//         options: [],
//         correctAnswer: null,
//         explanation: "pOH = -log[OH-] = 4; pH = 14 - pOH = 10.",
//         topic: "pH Scale",
//         difficulty: "easy"
//     },
//     {
//         id: 38,
//         text: "Which of the following is a weak base?",
//         options: ["NaOH", "NH3", "KOH", "Ba(OH)2"],
//         correctAnswer: 1,
//         explanation: "NH3 is a weak base because it does not completely dissociate in water.",
//         topic: "Strength of Acids and Bases",
//         difficulty: "easy"
//     },
//     {
//         id: 39,
//         text: "What is the purpose of a buffer solution?",
//         options: [],
//         correctAnswer: null,
//         explanation: "A buffer solution resists changes in pH when small amounts of acid or base are added.",
//         topic: "Buffer Solutions",
//         difficulty: "medium"
//     },
//     {
//         id: 40,
//         text: "Which of the following is a strong electrolyte?",
//         options: ["Sugar", "NaCl", "Ethanol", "Acetic acid"],
//         correctAnswer: 1,
//         explanation: "NaCl is a strong electrolyte because it completely dissociates into ions in solution.",
//         topic: "Electrolytes",
//         difficulty: "easy"
//     },
//     {
//         id: 41,
//         text: "What is the product of the ionization of water?",
//         options: [],
//         correctAnswer: null,
//         explanation: "The ionization of water produces H3O+ and OH- ions.",
//         topic: "Ionization of Water",
//         difficulty: "easy"
//     },
//     {
//         id: 42,
//         text: "Which of the following is a Lewis base?",
//         options: ["BF3", "NH3", "AlCl3", "H+"],
//         correctAnswer: 1,
//         explanation: "NH3 is a Lewis base because it can donate an electron pair.",
//         topic: "Lewis Concept of Acids and Bases",
//         difficulty: "medium"
//     },
//     {
//         id: 43,
//         text: "What is the purpose of Faraday's Second Law?",
//         options: [],
//         correctAnswer: null,
//         explanation: "Faraday's Second Law relates the amount of substance produced or consumed to the amount of electricity passed.",
//         topic: "Faraday's Laws",
//         difficulty: "medium"
//     },
//     {
//         id: 44,
//         text: "Which of the following is a method to prevent corrosion?",
//         options: ["Galvanizing", "Heating", "Stirring", "Filtering"],
//         correctAnswer: 0,
//         explanation: "Galvanizing involves coating a metal with a protective layer, often zinc, to prevent corrosion.",
//         topic: "Corrosion",
//         difficulty: "easy"
//     },
//     {
//         id: 45,
//         text: "What is the main cause of acid rain?",
//         options: [],
//         correctAnswer: null,
//         explanation: "Sulfur dioxide and nitrogen oxides react with water in the atmosphere to form acids, leading to acid rain.",
//         topic: "Environmental Chemistry",
//         difficulty: "medium"
//     },
//     {
//         id: 46,
//         text: "Explain the significance of Kw in the context of water ionization.",
//         options: [],
//         correctAnswer: null,
//         explanation: "Kw is the ion-product constant for water, representing the equilibrium between H3O+ and OH- ions.",
//         topic: "Ionization of Water",
//         difficulty: "medium"
//     },
//     {
//         id: 47,
//         text: "How does the percent ionization of a weak acid change with dilution?",
//         options: [],
//         correctAnswer: null,
//         explanation: "The percent ionization of a weak acid increases with dilution because the equilibrium shifts to produce more ions.",
//         topic: "Percent Ionization",
//         difficulty: "medium"
//     },
//     {
//         id: 48,
//         text: "What is the role of a common ion in the solubility of a salt?",
//         options: [],
//         correctAnswer: null,
//         explanation: "A common ion decreases the solubility of a salt by shifting the equilibrium towards the formation of the salt.",
//         topic: "Common Ion Effect",
//         difficulty: "medium"
//     },
//     {
//         id: 49,
//         text: "How does a buffer solution maintain a constant pH?",
//         options: [],
//         correctAnswer: null,
//         explanation: "A buffer solution contains a weak acid and its conjugate base, which neutralize small amounts of added acid or base, maintaining a constant pH.",
//         topic: "Buffer Solutions",
//         difficulty: "medium"
//     },
//     {
//         id: 50,
//         text: "Why is it important to select the correct indicator for a titration?",
//         options: [],
//         correctAnswer: null,
//         explanation: "The correct indicator ensures that the color change occurs at the equivalence point, providing an accurate measure of the amount of acid or base present.",
//         topic: "Acid-Base Titrations",
//         difficulty: "medium"
//     }
// ];

// export default acidBaseQuestions;
