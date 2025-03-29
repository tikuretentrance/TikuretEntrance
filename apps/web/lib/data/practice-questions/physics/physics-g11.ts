import { PracticeQuestion } from "@/lib/types/practice";

const physicsUnit1Questions: PracticeQuestion[] = [
    {
        id: 1,
        text: "Which of the following best describes the role of physics in technological innovation?",
        options: [
            "Developing new social media platforms",
            "Providing fundamental knowledge for technological advances",
            "Enhancing literary skills",
            "Improving culinary arts"
        ],
        correctAnswer: 1,
        explanation: "Physics provides the fundamental knowledge necessary for technological advances and innovations.",
        topic: "Importance of Physics to Society",
        difficulty: "easy"
    },
    {
        id: 2,
        text: "What is the primary objective of the Ethiopian Physical Society (EPS)?",
        options: [
            "Promoting physics education and research",
            "Organizing social events",
            "Providing financial advice",
            "Enhancing literary skills"
        ],
        correctAnswer: 0,
        explanation: "The Ethiopian Physical Society aims to promote physics education and research in Ethiopia.",
        topic: "Physics Communities and Their Roles",
        difficulty: "medium"
    },
    {
        id: 3,
        text: "Which of the following is an example of a priori knowledge in physics?",
        options: [
            "Observing the boiling point of water at different altitudes",
            "The statement '2 + 2 = 4'",
            "Measuring the temperature of a substance",
            "Collecting data from experiments"
        ],
        correctAnswer: 1,
        explanation: "The statement '2 + 2 = 4' is an example of a priori knowledge, which is knowledge that does not come from experience but from reason itself.",
        topic: "Making of Physics Knowledge",
        difficulty: "medium"
    },
    {
        id: 4,
        text: "What is the significance of the discovery of the Higgs Boson?",
        options: [
            "It confirmed the existence of dark matter",
            "It completed the Standard Model of particle physics",
            "It proved the theory of relativity",
            "It explained the behavior of black holes"
        ],
        correctAnswer: 1,
        explanation: "The discovery of the Higgs Boson completed the Standard Model of particle physics by confirming the existence of the particle that gives other particles their mass.",
        topic: "Current Status of Physics",
        difficulty: "medium"
    },
    {
        id: 5,
        text: "If a car accelerates uniformly from 0 to 20 m/s in 8 seconds, what is the average acceleration?",
        options: [
            "2.5 m/s²",
            "1.5 m/s²",
            "3.0 m/s²",
            "4.0 m/s²"
        ],
        correctAnswer: 0,
        explanation: "Average acceleration is calculated as (20 m/s - 0 m/s) / 8 s = 2.5 m/s².",
        topic: "Uniformly Accelerated Motion",
        difficulty: "medium"
    }
];

const physicsUnit2Questions: PracticeQuestion[] = [
    {
        id: 1,
        text: "If a car travels 50 km north and then 30 km east, what is the magnitude of the resultant displacement?",
        options: [
            "80 km",
            "40 km",
            "60 km",
            "58 km"
        ],
        correctAnswer: 3,
        explanation: "Using the Pythagorean theorem, the resultant displacement is √(50² + 30²) = 58 km.",
        topic: "Graphical Method of Addition of Vectors",
        difficulty: "medium"
    },
    {
        id: 2,
        text: "What is the resultant of two vectors with magnitudes 6 units and 8 units, directed at an angle of 90 degrees to each other?",
        options: [
            "14 units",
            "10 units",
            "2 units",
            "0 units"
        ],
        correctAnswer: 1,
        explanation: "Using the Pythagorean theorem, the resultant magnitude is √(6² + 8²) = 10 units.",
        topic: "Algebraic Method of Addition of Vectors",
        difficulty: "medium"
    },
    {
        id: 3,
        text: "If vector A has components (3, 4) and vector B has components (-1, 2), what is the resultant vector?",
        options: [
            "(2, 6)",
            "(4, 2)",
            "(2, -2)",
            "(0, 6)"
        ],
        correctAnswer: 0,
        explanation: "The resultant vector is (3-1, 4+2) = (2, 6).",
        topic: "Component Method of Vector Addition",
        difficulty: "medium"
    },
    {
        id: 4,
        text: "What is the dot product of vectors A = (2, 3) and B = (4, -1)?",
        options: [
            "5",
            "1",
            "10",
            "0"
        ],
        correctAnswer: 0,
        explanation: "The dot product is (2*4) + (3*-1) = 8 - 3 = 5.",
        topic: "Product of Vectors",
        difficulty: "medium"
    },
    {
        id: 5,
        text: "If a force of 10 N is applied at an angle of 60 degrees to the horizontal, what is the horizontal component of the force?",
        options: [
            "5 N",
            "10 N",
            "7.5 N",
            "2.5 N"
        ],
        correctAnswer: 0,
        explanation: "The horizontal component is 10 * cos(60) = 10 * 0.5 = 5 N.",
        topic: "Resolving Vectors into Components",
        difficulty: "medium"
    },
    {
        id: 6,
        text: "A vector has components (4, -3). What is its magnitude?",
        options: [
            "5",
            "7",
            "1",
            "25"
        ],
        correctAnswer: 1,
        explanation: "The magnitude is √(4² + (-3)²) = √(16 + 9) = √25 = 5.",
        topic: "Vector Magnitude",
        difficulty: "medium"
    },
    {
        id: 7,
        text: "If a displacement vector is given by (8, 6), what is its direction angle with the x-axis?",
        options: [
            "36.9 degrees",
            "53.1 degrees",
            "45 degrees",
            "60 degrees"
        ],
        correctAnswer: 0,
        explanation: "The direction angle is tan⁻¹(6/8) ≈ 36.9 degrees.",
        topic: "Direction of a Vector",
        difficulty: "medium"
    },
    {
        id: 8,
        text: "What is the resultant of vectors (3, 4) and (-1, 2) using the parallelogram law?",
        options: [
            "(2, 6)",
            "(4, 2)",
            "(2, -2)",
            "(0, 6)"
        ],
        correctAnswer: 0,
        explanation: "The resultant vector using the parallelogram law is (3-1, 4+2) = (2, 6).",
        topic: "Parallelogram Law of Vector Addition",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "If a vector has a magnitude of 10 units and makes an angle of 30 degrees with the x-axis, what are its components?",
        options: [
            "(8.66, 5)",
            "(5, 8.66)",
            "(10, 0)",
            "(0, 10)"
        ],
        correctAnswer: 0,
        explanation: "The components are (10*cos(30), 10*sin(30)) = (8.66, 5).",
        topic: "Vector Components",
        difficulty: "medium"
    },
    {
        id: 10,
        text: "What is the angle between vectors (1, 2) and (2, -1)?",
        options: [
            "90 degrees",
            "45 degrees",
            "60 degrees",
            "30 degrees"
        ],
        correctAnswer: 0,
        explanation: "Using the dot product formula, cos(θ) = (1*2 + 2*(-1)) / (√5 * √5) = 0, so θ = 90 degrees.",
        topic: "Angle Between Vectors",
        difficulty: "medium"
    }
];


export { physicsUnit1Questions, physicsUnit2Questions }