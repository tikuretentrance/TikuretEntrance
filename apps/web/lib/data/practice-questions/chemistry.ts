import { PracticeQuestion } from "@/lib/types/practice";

const chemistryQuestions: PracticeQuestion[] = [
    {
        id: 1,
        text: "According to the Arrhenius concept, which of the following is a base?",
        options: [
            "HCl",
            "NaOH",
            "CO2",
            "H2SO4"
        ],
        correctAnswer: 1,
        explanation: "NaOH is a base because it increases the concentration of OH- ions in aqueous solution.",
        topic: "Arrhenius Concept of Acids and Bases",
        difficulty: "easy"
    },
    {
        id: 2,
        text: "Which of the following is a Brønsted-Lowry acid?",
        options: [
            "NH3",
            "H2O",
            "Cl-",
            "HNO3"
        ],
        correctAnswer: 3,
        explanation: "HNO3 is a Brønsted-Lowry acid because it can donate a proton.",
        topic: "Brønsted-Lowry Concept of Acids and Bases",
        difficulty: "easy"
    },
    {
        id: 3,
        text: "What is the conjugate base of H2PO4-?",
        options: [
            "HPO4^2-",
            "PO4^3-",
            "H3PO4",
            "H2O"
        ],
        correctAnswer: 0,
        explanation: "HPO4^2- is the conjugate base of H2PO4- after it donates a proton.",
        topic: "Conjugate Acid-Base Pairs",
        difficulty: "medium"
    },
    {
        id: 4,
        text: "Which of the following is a Lewis acid?",
        options: [
            "NH3",
            "BF3",
            "OH-",
            "H2O"
        ],
        correctAnswer: 1,
        explanation: "BF3 is a Lewis acid because it can accept an electron pair.",
        topic: "Lewis Concept of Acids and Bases",
        difficulty: "medium"
    },
    {
        id: 5,
        text: "What is the pH of a solution with [H3O+] = 1.0 × 10^-5 M?",
        options: [
            "5",
            "9",
            "14",
            "7"
        ],
        correctAnswer: 0,
        explanation: "pH = -log[H3O+] = -log(1.0 × 10^-5) = 5.",
        topic: "pH Scale",
        difficulty: "easy"
    },
    {
        id: 6,
        text: "Which of the following is a strong acid?",
        options: [
            "CH3COOH",
            "HCl",
            "HF",
            "HNO2"
        ],
        correctAnswer: 1,
        explanation: "HCl is a strong acid because it completely dissociates in water.",
        topic: "Strength of Acids and Bases",
        difficulty: "easy"
    },
    {
        id: 7,
        text: "What is the pH of a buffer solution containing 0.1 M CH3COOH and 0.1 M CH3COONa?",
        options: [
            "4.74",
            "7",
            "9",
            "2"
        ],
        correctAnswer: 0,
        explanation: "The pH of this buffer can be calculated using the Henderson-Hasselbalch equation.",
        topic: "Buffer Solutions",
        difficulty: "medium"
    },
    {
        id: 8,
        text: "Which of the following salts forms a basic solution when dissolved in water?",
        options: [
            "NaCl",
            "NH4Cl",
            "Na2CO3",
            "KNO3"
        ],
        correctAnswer: 2,
        explanation: "Na2CO3 forms a basic solution because CO3^2- undergoes hydrolysis to produce OH- ions.",
        topic: "Hydrolysis of Salts",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "What is the role of an indicator in acid-base titration?",
        options: [
            "To neutralize the acid",
            "To change the pH of the solution",
            "To indicate the equivalence point",
            "To catalyze the reaction"
        ],
        correctAnswer: 2,
        explanation: "An indicator changes color at the equivalence point, signaling the end of the titration.",
        topic: "Acid-Base Titrations",
        difficulty: "easy"
    },
    {
        id: 10,
        text: "Which of the following is an example of a redox reaction?",
        options: [
            "NaCl + AgNO3 → AgCl + NaNO3",
            "H2 + O2 → H2O",
            "CaCO3 → CaO + CO2",
            "NaOH + HCl → NaCl + H2O"
        ],
        correctAnswer: 1,
        explanation: "The reaction between hydrogen and oxygen is a redox reaction involving electron transfer.",
        topic: "Oxidation-Reduction Reactions",
        difficulty: "medium"
    },
    {
        id: 11,
        text: "What is the purpose of an electrolytic cell?",
        options: [
            "To produce electricity",
            "To decompose compounds using electricity",
            "To measure pH",
            "To store electrical energy"
        ],
        correctAnswer: 1,
        explanation: "An electrolytic cell uses electrical energy to drive a non-spontaneous chemical reaction.",
        topic: "Electrolytic Cells",
        difficulty: "medium"
    },
    {
        id: 12,
        text: "Which law states that the mass of a substance altered at an electrode is proportional to the current flow?",
        options: [
            "Ohm's Law",
            "Faraday's First Law",
            "Coulomb's Law",
            "Graham's Law"
        ],
        correctAnswer: 1,
        explanation: "Faraday's First Law relates the mass of a substance produced or consumed at an electrode to the amount of electricity transferred.",
        topic: "Faraday's Laws",
        difficulty: "medium"
    },
    {
        id: 13,
        text: "What is the standard cell potential for a galvanic cell composed of a zinc anode and a copper cathode?",
        options: [
            "0.76 V",
            "1.10 V",
            "0.34 V",
            "2.10 V"
        ],
        correctAnswer: 1,
        explanation: "The standard cell potential is calculated using the standard reduction potentials of the half-cell reactions.",
        topic: "Galvanic Cells",
        difficulty: "hard"
    },
    {
        id: 14,
        text: "Which of the following is a method to inhibit corrosion?",
        options: [
            "Painting",
            "Heating",
            "Stirring",
            "Filtering"
        ],
        correctAnswer: 0,
        explanation: "Painting forms a protective barrier that prevents exposure to moisture and oxygen, reducing corrosion.",
        topic: "Corrosion",
        difficulty: "easy"
    },
    {
        id: 15,
        text: "What is the main greenhouse gas responsible for global warming?",
        options: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Sulfur dioxide"
        ],
        correctAnswer: 1,
        explanation: "Carbon dioxide is the primary greenhouse gas contributing to global warming.",
        topic: "Environmental Chemistry",
        difficulty: "easy"
    },
    {
        id: 16,
        text: "Which of the following is a principle of green chemistry?",
        options: [
            "Use of toxic solvents",
            "Prevention of waste",
            "Increased energy consumption",
            "Use of non-renewable resources"
        ],
        correctAnswer: 1,
        explanation: "Prevention of waste is one of the principles of green chemistry, aiming to minimize environmental impact.",
        topic: "Green Chemistry",
        difficulty: "medium"
    },
    {
        id: 17,
        text: "What is the pH of a solution with [OH-] = 1.0 × 10^-4 M?",
        options: [
            "4",
            "10",
            "14",
            "7"
        ],
        correctAnswer: 1,
        explanation: "pOH = -log[OH-] = 4, so pH = 14 - pOH = 10.",
        topic: "pH Scale",
        difficulty: "easy"
    },
    {
        id: 18,
        text: "Which of the following is a weak base?",
        options: [
            "NaOH",
            "NH3",
            "KOH",
            "Ba(OH)2"
        ],
        correctAnswer: 1,
        explanation: "NH3 is a weak base because it does not completely dissociate in water.",
        topic: "Strength of Acids and Bases",
        difficulty: "easy"
    },
    {
        id: 19,
        text: "What is the purpose of a buffer solution?",
        options: [
            "To change the pH rapidly",
            "To maintain a constant pH",
            "To increase the temperature",
            "To decrease the volume"
        ],
        correctAnswer: 1,
        explanation: "A buffer solution resists changes in pH when small amounts of acid or base are added.",
        topic: "Buffer Solutions",
        difficulty: "medium"
    },
    {
        id: 20,
        text: "Which of the following is a strong electrolyte?",
        options: [
            "Sugar",
            "NaCl",
            "Ethanol",
            "Acetic acid"
        ],
        correctAnswer: 1,
        explanation: "NaCl is a strong electrolyte because it completely dissociates into ions in solution.",
        topic: "Electrolytes",
        difficulty: "easy"
    },
    {
        id: 21,
        text: "What is the product of the ionization of water?",
        options: [
            "H3O+ and OH-",
            "H2 and O2",
            "H+ and Cl-",
            "CO2 and H2O"
        ],
        correctAnswer: 0,
        explanation: "The ionization of water produces H3O+ and OH- ions.",
        topic: "Ionization of Water",
        difficulty: "easy"
    },
    {
        id: 22,
        text: "Which of the following is a Lewis base?",
        options: [
            "BF3",
            "NH3",
            "AlCl3",
            "H+"
        ],
        correctAnswer: 1,
        explanation: "NH3 is a Lewis base because it can donate an electron pair.",
        topic: "Lewis Concept of Acids and Bases",
        difficulty: "medium"
    },
    {
        id: 23,
        text: "What is the purpose of Faraday's Second Law?",
        options: [
            "To determine the amount of substance produced",
            "To measure the current flow",
            "To calculate the resistance",
            "To find the voltage"
        ],
        correctAnswer: 0,
        explanation: "Faraday's Second Law relates the amount of substance produced or consumed to the amount of electricity passed.",
        topic: "Faraday's Laws",
        difficulty: "medium"
    },
    {
        id: 24,
        text: "Which of the following is a method to prevent corrosion?",
        options: [
            "Galvanizing",
            "Heating",
            "Stirring",
            "Filtering"
        ],
        correctAnswer: 0,
        explanation: "Galvanizing involves coating a metal with a protective layer, often zinc, to prevent corrosion.",
        topic: "Corrosion",
        difficulty: "easy"
    },
    {
        id: 25,
        text: "What is the main cause of acid rain?",
        options: [
            "Carbon dioxide",
            "Sulfur dioxide and nitrogen oxides",
            "Oxygen",
            "Chlorine"
        ],
        correctAnswer: 1,
        explanation: "Sulfur dioxide and nitrogen oxides react with water in the atmosphere to form acids, leading to acid rain.",
        topic: "Environmental Chemistry",
        difficulty: "medium"
    }
];

export default chemistryQuestions;
