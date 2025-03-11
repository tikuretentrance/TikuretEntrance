import { ExamQuestion } from "@/lib/types";

export const biologyQuestions: ExamQuestion[] = [
    {
        id: 1,
        text: "The ultimate source of genetic variation is",
        options: ["(A) genetic drift", "(B) migration", "(C) mutation", "(D) selection"],
        correctAnswer: 2, // Index of the correct option (C)
        explanation: "Mutation is the ultimate source of genetic variation as it introduces new alleles into a population.",
        topic: "Genetics",
        difficulty: "easy",
    },
    {
        id: 2,
        text: "Which of the following is the first step in starting a research process?",
        options: [
            "(A) Searching sources of information to locate problem",
            "(B) Survey of related literature",
            "(C) Searching for solutions to the problem",
            "(D) Identification of problem",
        ],
        correctAnswer: 3, // Index of the correct option (D)
        explanation: "The first step in research is identifying the problem to be studied.",
        topic: "Research Methodology",
        difficulty: "easy",
    },
    {
        id: 3,
        text: "For which of the following purposes is Global Positioning System (GPS) used?",
        options: ["(A) Map of an area", "(B) Microwave", "(C) Satellite signal", "(D) Theodolite"],
        correctAnswer: 0, // Index of the correct option (A)
        explanation: "GPS is primarily used for mapping and navigation.",
        topic: "Technology",
        difficulty: "easy",
    },
    {
        id: 4,
        text: "Which of the following statements is INCORRECT with respect to an enzyme's ability to catalyze a reaction?",
        options: [
            "(A) An enzyme binds reactants such that they are positioned correctly and can attain their transition-state configurations",
            "(B) An enzyme allows the reaction to go through a more stable transition state than would normally be the case",
            "(C) An enzyme provides a reaction surface and a hydrophilic environment for the reaction to take place",
            "(D) An enzyme can weaken bonds in reactants through the binding process",
        ],
        correctAnswer: 1, // Index of the correct option (B)
        explanation: "Enzymes do not make the transition state more stable; they lower the activation energy required for the reaction.",
        topic: "Enzymes",
        difficulty: "medium",
    },
    {
        id: 5,
        text: "The amount of organic matter present at a given time per unit area is called:",
        options: ["(A) standing crop", "(B) carbon footprint", "(C) carbon sequestration", "(D) productivity"],
        correctAnswer: 0, // Index of the correct option (A)
        explanation: "Standing crop refers to the amount of organic matter present at a given time.",
        topic: "Ecology",
        difficulty: "easy",
    },
    {
        id: 6,
        text: "In the energy pyramid, which group of organisms has the least amount of energy?",
        options: ["(A) Primary producers", "(B) Herbivores", "(C) Animals", "(D) Tertiary consumers"],
        correctAnswer: 3, // Index of the correct option (D)
        explanation: "Tertiary consumers have the least amount of energy in the energy pyramid due to energy loss at each trophic level.",
        topic: "Ecology",
        difficulty: "medium",
    },
    {
        id: 7,
        text: "To which genus of primates are the Neanderthal humans classified?",
        options: ["(A) The genus Homo", "(B) The genus Ardipithecus", "(C) The genus Australopithecus", "(D) The genus Zinjanthropus"],
        correctAnswer: 0, // Index of the correct option (A)
        explanation: "Neanderthals are classified under the genus Homo.",
        topic: "Evolution",
        difficulty: "medium",
    },
    {
        id: 8,
        text: "In which of the following is there a MISMATCH between the type of innate behaviour and the resulting action/response?",
        options: [
            "(A) Instinctive behavior - Imprinting in birds",
            "(B) Orientational movement - Weaving a web in spiders",
            "(C) Reflex action - Blinking of the eyes in humans",
            "(D) Instinctive behaviour - Nest-building in birds",
        ],
        correctAnswer: 1, // Index of the correct option (B)
        explanation: "Weaving a web in spiders is an instinctive behavior, not an orientational movement.",
        topic: "Animal Behavior",
        difficulty: "hard",
    },
    {
        id: 9,
        text: "Cells were first seen using the microscope by",
        options: ["(A) Robert Hooke", "(B) Schwann", "(C) Schleiden", "(D) Leeuwenhoek"],
        correctAnswer: 0, // Index of the correct option (A)
        explanation: "Robert Hooke was the first to observe cells using a microscope.",
        topic: "Cell Biology",
        difficulty: "easy",
    },
    {
        id: 10,
        text: "The practice of modern agriculture that reduces crop biodiversity is",
        options: ["(A) Overgrazing", "(B) Forest clearing", "(C) Growing few high-yielding varieties", "(D) Growing landraces"],
        correctAnswer: 2, // Index of the correct option (C)
        explanation: "Growing few high-yielding varieties reduces genetic diversity in crops.",
        topic: "Agriculture",
        difficulty: "medium",
    },
];
