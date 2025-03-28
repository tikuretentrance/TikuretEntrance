import { PracticeQuestion } from "@/lib/types/practice";

const acidBaseQuestions: PracticeQuestion[] = [
    {
        id: 13,
        text: "Which of the following is an example of an Arrhenius base?",
        options: [
            "HCl",
            "NaOH",
            "NH3",
            "CH3COOH"
        ],
        correctAnswer: 1,
        explanation: "NaOH is an Arrhenius base because it increases the concentration of OH- ions in aqueous solution.",
        topic: "Arrhenius Concept of Acids and Bases",
        difficulty: "easy"
    },
    {
        id: 14,
        text: "In the Brønsted-Lowry concept, which species acts as a base in the following reaction?",
        options: [
            "H2O",
            "NH4+",
            "Cl-",
            "HCO3-"
        ],
        correctAnswer: 0,
        explanation: "H2O acts as a base because it accepts a proton from NH4+ in the reaction: NH4+ + H2O ⇌ NH3 + H3O+.",
        topic: "Brønsted-Lowry Concept of Acids and Bases",
        difficulty: "medium"
    },
    {
        id: 15,
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
        id: 16,
        text: "What is the pH of a solution with [OH-] = 1.0 × 10^-3 M?",
        options: [
            "3",
            "11",
            "14",
            "7"
        ],
        correctAnswer: 1,
        explanation: "pOH = -log[OH-] = 3, so pH = 14 - pOH = 11.",
        topic: "pH Scale",
        difficulty: "easy"
    },
    {
        id: 17,
        text: "Which of the following is a strong base?",
        options: [
            "NH3",
            "NaOH",
            "CH3COOH",
            "HCl"
        ],
        correctAnswer: 1,
        explanation: "NaOH is a strong base because it completely dissociates in water.",
        topic: "Strength of Acids and Bases",
        difficulty: "easy"
    },
    {
        id: 18,
        text: "What is the percent ionization of a 0.1 M weak acid solution with a pH of 4.0?",
        options: [
            "0.1%",
            "1.0%",
            "10.0%",
            "0.01%"
        ],
        correctAnswer: 1,
        explanation: "Percent ionization = ([H+] / initial concentration) × 100 = (10^-4 / 0.1) × 100 = 0.1%.",
        topic: "Percent Ionization",
        difficulty: "medium"
    },
    {
        id: 19,
        text: "How does the addition of NaCl affect the solubility of AgCl?",
        options: [
            "Increases",
            "Decreases",
            "Does not change",
            "Doubles"
        ],
        correctAnswer: 1,
        explanation: "The addition of NaCl, which provides Cl- ions, decreases the solubility of AgCl due to the common ion effect.",
        topic: "Common Ion Effect",
        difficulty: "medium"
    },
    {
        id: 20,
        text: "What is the pH of a buffer solution containing 0.2 M CH3COOH and 0.3 M CH3COONa (Ka = 1.8 × 10^-5)?",
        options: [
            "4.52",
            "4.74",
            "4.92",
            "5.12"
        ],
        correctAnswer: 1,
        explanation: "Use the Henderson-Hasselbalch equation: pH = pKa + log([A-] / [HA]) = 4.74 + log(0.3 / 0.2) = 4.74.",
        topic: "Buffer Solutions",
        difficulty: "medium"
    },
    {
        id: 21,
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
        id: 22,
        text: "Which indicator is suitable for the titration of a strong acid with a strong base?",
        options: [
            "Methyl orange",
            "Phenolphthalein",
            "Litmus",
            "Bromothymol blue"
        ],
        correctAnswer: 0,
        explanation: "Methyl orange is suitable because it changes color in the pH range of 3.1-4.4, which is appropriate for strong acid-strong base titrations.",
        topic: "Acid-Base Indicators",
        difficulty: "medium"
    },
    {
        id: 23,
        text: "What is the normality of a 0.5 M H2SO4 solution?",
        options: [
            "0.5 N",
            "1.0 N",
            "2.0 N",
            "0.25 N"
        ],
        correctAnswer: 1,
        explanation: "H2SO4 is a diprotic acid, so a 0.5 M solution has a normality of 1.0 N.",
        topic: "Equivalents of Acids and Bases",
        difficulty: "easy"
    },
    {
        id: 24,
        text: "How many milliliters of 0.2 M NaOH are required to neutralize 30 mL of 0.15 M HCl?",
        options: [
            "22.5 mL",
            "30 mL",
            "45 mL",
            "15 mL"
        ],
        correctAnswer: 0,
        explanation: "Using the equation N1V1 = N2V2, V2 = (0.15 M × 30 mL) / 0.2 M = 22.5 mL.",
        topic: "Acid-Base Titrations",
        difficulty: "medium"
    }
    // Continue adding more questions as needed...
];

export default acidBaseQuestions;
