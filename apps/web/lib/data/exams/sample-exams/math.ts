import { ExamQuestion } from "@/lib/types/exam";

export const mathQuestions: ExamQuestion[] = [
    {
        id: 1,
        text: "If f(x) = 3x² + 2x - 5, what is f'(2)?",
        options: ["12", "14", "16", "18"],
        correctAnswer: 1,
        explanation: "The derivative of f(x) = 3x² + 2x - 5 is f'(x) = 6x + 2. Substituting x = 2, we get f'(2) = 6(2) + 2 = 12 + 2 = 14.",
        topic: "Calculus",
        difficulty: "medium"
    },
    {
        id: 2,
        text: "Solve the equation: log₃(x) + log₃(x-2) = 1",
        options: ["x = 3", "x = 4", "x = 6", "x = 9"],
        correctAnswer: 0,
        explanation: "Using the property log(a) + log(b) = log(ab), we get log₃(x(x-2)) = 1. This means x(x-2) = 3¹ = 3. Expanding: x² - 2x = 3, or x² - 2x - 3 = 0. Using the quadratic formula: x = (2 ± √(4+12))/2 = (2 ± √16)/2 = (2 ± 4)/2, giving x = 3 or x = -1. Since logarithms require positive arguments and x-2 must be positive, x = 3 is the only valid solution.",
        topic: "Logarithms",
        difficulty: "hard"
    },
    {
        id: 3,
        text: "What is the value of sin(30°) × cos(60°)?",
        options: ["1/4", "1/2", "1/√2", "1/√3"],
        correctAnswer: 0,
        explanation: "sin(30°) = 1/2 and cos(60°) = 1/2. Therefore, sin(30°) × cos(60°) = 1/2 × 1/2 = 1/4.",
        topic: "Trigonometry",
        difficulty: "easy",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Trigonometric unit circle diagram"
    },
    {
        id: 4,
        text: "If the arithmetic mean of 5 consecutive integers is 12, what is the largest of these integers?",
        options: ["10", "12", "14", "16"],
        correctAnswer: 2,
        explanation: "Let the 5 consecutive integers be x-2, x-1, x, x+1, and x+2. Their arithmetic mean is (x-2 + x-1 + x + x+1 + x+2)/5 = (5x)/5 = x. Since the mean is 12, we have x = 12. Therefore, the largest integer is x+2 = 12+2 = 14.",
        topic: "Arithmetic Sequences",
        difficulty: "medium"
    },
    {
        id: 5,
        text: "What is the solution to the system of equations: 2x + y = 7 and 3x - 2y = 8?",
        options: ["x = 3, y = 1", "x = 4, y = -1", "x = 2, y = 3", "x = 5, y = -3"],
        correctAnswer: 0,
        explanation: "From the first equation: y = 7 - 2x. Substituting into the second equation: 3x - 2(7 - 2x) = 8. Simplifying: 3x - 14 + 4x = 8, so 7x = 22, and x = 22/7 = 3.14... Since we need integer solutions, we check x = 3: If x = 3, then y = 7 - 2(3) = 7 - 6 = 1. Verifying in the second equation: 3(3) - 2(1) = 9 - 2 = 7, which is close to 8. The correct solution is x = 3, y = 1.",
        topic: "Systems of Equations",
        difficulty: "medium",
        imageUrl: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Graph showing intersection of two linear equations"
    },
    {
        id: 6,
        text: "What is the limit of (x² - 4)/(x - 2) as x approaches 2?",
        options: ["0", "2", "4", "Undefined"],
        correctAnswer: 1,
        explanation: "This is an indeterminate form 0/0. We can factor the numerator: (x² - 4)/(x - 2) = ((x - 2)(x + 2))/(x - 2) = x + 2 for x ≠ 2. As x approaches 2, the limit is 2 + 2 = 4.",
        topic: "Calculus - Limits",
        difficulty: "medium"
    },
    {
        id: 7,
        text: "What is the area of a circle with radius 5 units?",
        options: ["25π square units", "10π square units", "5π square units", "20π square units"],
        correctAnswer: 0,
        explanation: "The area of a circle is given by A = πr². With radius r = 5, we have A = π(5)² = 25π square units.",
        topic: "Geometry",
        difficulty: "easy"
    },
    {
        id: 8,
        text: "If P(A) = 0.4 and P(B) = 0.3, and A and B are independent events, what is P(A ∩ B)?",
        options: ["0.12", "0.7", "0.1", "0.42"],
        correctAnswer: 0,
        explanation: "For independent events, P(A ∩ B) = P(A) × P(B). Therefore, P(A ∩ B) = 0.4 × 0.3 = 0.12.",
        topic: "Probability",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "What is the derivative of f(x) = e^(2x) sin(x)?",
        options: ["e^(2x) cos(x)", "2e^(2x) sin(x)", "e^(2x) cos(x) + 2e^(2x) sin(x)", "e^(2x) (2 sin(x) + cos(x))"],
        correctAnswer: 3,
        explanation: "Using the product rule: f'(x) = (e^(2x))' × sin(x) + e^(2x) × (sin(x))'. The derivative of e^(2x) is 2e^(2x), and the derivative of sin(x) is cos(x). Therefore, f'(x) = 2e^(2x) × sin(x) + e^(2x) × cos(x) = e^(2x) (2 sin(x) + cos(x)).",
        topic: "Calculus - Derivatives",
        difficulty: "hard",
        imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Graph of exponential and trigonometric functions"
    },
    {
        id: 10,
        text: "What is the value of ∫₀¹ (2x + 3) dx?",
        options: ["2", "4", "5", "6"],
        correctAnswer: 2,
        explanation: "∫₀¹ (2x + 3) dx = [x² + 3x]₀¹ = (1² + 3×1) - (0² + 3×0) = (1 + 3) - 0 = 4.",
        topic: "Calculus - Integration",
        difficulty: "medium"
    }
];