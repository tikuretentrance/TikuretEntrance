import { PracticeQuestion } from "@/lib/types/practice";

const chemistryG12Questions: PracticeQuestion[] = [
    {
        id: 1,
        text: "According to the Brønsted-Lowry concept, a base is defined as a",
        options: [
            "proton donor",
            "proton acceptor",
            "electron pair donor",
            "substance that produces OH⁻ ions in water"
        ],
        correctAnswer: 1,
        explanation: "The Brønsted-Lowry definition states that a base is a proton (H⁺) acceptor.",
        topic: "Acid-Base Concepts",
        difficulty: "easy"
    },
    {
        id: 2,
        text: "In the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, the conjugate acid-base pairs are",
        options: [
            "NH₃/NH₄⁺ and H₂O/OH⁻",
            "NH₃/OH⁻ and H₂O/NH₄⁺",
            "NH₄⁺/OH⁻ and NH₃/H₂O",
            "H₂O/NH₃ and OH⁻/NH₄⁺"
        ],
        correctAnswer: 0,
        explanation: "NH₃ (base) and NH₄⁺ (its conjugate acid) form one pair, while H₂O (acid) and OH⁻ (its conjugate base) form the other pair.",
        topic: "Conjugate Acid-Base Pairs",
        difficulty: "medium"
    },
    {
        id: 3,
        text: "What is the pH of a solution with [H₃O⁺] = 1.0 × 10⁻⁵ M?",
        options: [
            "1",
            "5",
            "9",
            "14"
        ],
        correctAnswer: 1,
        explanation: "pH = -log[H₃O⁺] = -log(1.0 × 10⁻⁵) = 5",
        topic: "pH Calculations",
        difficulty: "easy"
    },
    {
        id: 4,
        text: "During the electrolysis of concentrated NaCl solution, the products at the cathode and anode are respectively",
        options: [
            "H₂ and Cl₂",
            "Na and Cl₂",
            "H₂ and O₂",
            "Na and O₂"
        ],
        correctAnswer: 0,
        explanation: "In concentrated NaCl solution, H⁺ is reduced to H₂ at the cathode while Cl⁻ is oxidized to Cl₂ at the anode.",
        topic: "Electrolysis",
        difficulty: "medium"
    },
    {
        id: 5,
        text: "Faraday's first law of electrolysis states that the mass of substance deposited is proportional to",
        options: [
            "the atomic number of the element",
            "the quantity of electricity passed",
            "the concentration of the electrolyte",
            "the temperature of the solution"
        ],
        correctAnswer: 1,
        explanation: "Faraday's first law states that mass deposited (m) is directly proportional to the quantity of electricity (Q = It) passed.",
        topic: "Faraday's Laws",
        difficulty: "medium"
    },
    {
        id: 6,
        text: "In a voltaic cell, oxidation occurs at the",
        options: [
            "anode",
            "cathode",
            "salt bridge",
            "electrolyte solution"
        ],
        correctAnswer: 0,
        explanation: "Oxidation always occurs at the anode in both voltaic and electrolytic cells.",
        topic: "Voltaic Cells",
        difficulty: "easy"
    },
    {
        id: 7,
        text: "The standard hydrogen electrode (SHE) has a standard reduction potential of",
        options: [
            "0.00 V",
            "1.00 V",
            "-1.00 V",
            "2.00 V"
        ],
        correctAnswer: 0,
        explanation: "By definition, the standard reduction potential of SHE is 0.00 V at standard conditions.",
        topic: "Electrode Potentials",
        difficulty: "easy"
    },
    {
        id: 8,
        text: "Which of the following would make the best buffer solution?",
        options: [
            "HCl and NaCl",
            "NaOH and NaCl",
            "CH₃COOH and CH₃COONa",
            "HNO₃ and KNO₃"
        ],
        correctAnswer: 2,
        explanation: "A buffer requires a weak acid and its conjugate base. CH₃COOH (weak acid) and CH₃COONa (providing conjugate base CH₃COO⁻) form a buffer.",
        topic: "Buffer Solutions",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "In the Daniell cell (Zn|Zn²⁺||Cu²⁺|Cu), the electrons flow from",
        options: [
            "copper electrode to zinc electrode",
            "zinc electrode to copper electrode",
            "salt bridge to copper electrode",
            "electrolyte solution to zinc electrode"
        ],
        correctAnswer: 1,
        explanation: "Zn is oxidized (anode) and loses electrons which flow through the external circuit to the Cu cathode.",
        topic: "Galvanic Cells",
        difficulty: "hard"
    },
    {
        id: 10,
        text: "The oxidation number of chromium in K₂Cr₂O₇ is",
        options: [
            "+2",
            "+3",
            "+6",
            "+7"
        ],
        correctAnswer: 2,
        explanation: "K has +1 (total +2), O has -2 (total -14). For neutral compound: 2 + 2x - 14 = 0 ⇒ x = +6 for Cr.",
        topic: "Oxidation Numbers",
        difficulty: "hard"
    }
];

export default chemistryG12Questions;