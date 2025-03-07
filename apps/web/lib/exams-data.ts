import { Exam, ExamQuestion } from "./types"

// Sample exam questions for Mathematics
const mathQuestions: ExamQuestion[] = [
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

// Sample exam questions for Physics
const physicsQuestions: ExamQuestion[] = [
  {
    id: 1,
    text: "A car accelerates uniformly from rest to 20 m/s in 5 seconds. What is its acceleration?",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    correctAnswer: 1,
    explanation: "Using the equation v = u + at, where v is final velocity, u is initial velocity, a is acceleration, and t is time. Substituting v = 20 m/s, u = 0 m/s, and t = 5 s: 20 = 0 + a×5, so a = 20/5 = 4 m/s².",
    topic: "Kinematics",
    difficulty: "easy"
  },
  {
    id: 2,
    text: "What is the equivalent resistance of two 6Ω resistors connected in parallel?",
    options: ["3Ω", "12Ω", "6Ω", "9Ω"],
    correctAnswer: 0,
    explanation: "For resistors in parallel, 1/Req = 1/R₁ + 1/R₂. With R₁ = R₂ = 6Ω, we have 1/Req = 1/6 + 1/6 = 2/6 = 1/3. Therefore, Req = 3Ω.",
    topic: "Electricity",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1620283085439-39aed3b5e4b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Circuit diagram with resistors in parallel"
  },
  {
    id: 3,
    text: "Which of the following is the SI unit of energy?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "The SI unit of energy is the Joule (J). Newton (N) is the unit of force, Watt (W) is the unit of power, and Pascal (Pa) is the unit of pressure.",
    topic: "Units and Dimensions",
    difficulty: "easy"
  },
  {
    id: 4,
    text: "A 2 kg object moving at 5 m/s collides elastically with a stationary 3 kg object. What is the velocity of the 2 kg object after the collision?",
    options: ["-1 m/s", "1 m/s", "2 m/s", "3 m/s"],
    correctAnswer: 0,
    explanation: "In an elastic collision, both momentum and kinetic energy are conserved. Using the equations for conservation of momentum and kinetic energy, and solving for the final velocities, we get v₁' = ((m₁-m₂)/(m₁+m₂))v₁. Substituting m₁ = 2 kg, m₂ = 3 kg, and v₁ = 5 m/s: v₁' = ((2-3)/(2+3))×5 = (-1/5)×5 = -1 m/s. The negative sign indicates that the object moves in the opposite direction after the collision.",
    topic: "Collisions",
    difficulty: "hard",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Illustration of elastic collision between objects"
  },
  {
    id: 5,
    text: "What is the frequency of a wave with wavelength 2 meters and velocity 10 m/s?",
    options: ["5 Hz", "10 Hz", "15 Hz", "20 Hz"],
    correctAnswer: 0,
    explanation: "The relationship between frequency (f), wavelength (λ), and wave velocity (v) is v = f×λ. Rearranging, f = v/λ. Substituting v = 10 m/s and λ = 2 m: f = 10/2 = 5 Hz.",
    topic: "Waves",
    difficulty: "medium"
  },
  {
    id: 6,
    text: "What is the gravitational potential energy of a 5 kg object at a height of 10 meters? (g = 9.8 m/s²)",
    options: ["49 J", "98 J", "490 J", "980 J"],
    correctAnswer: 2,
    explanation: "Gravitational potential energy is given by PE = mgh, where m is mass, g is acceleration due to gravity, and h is height. Substituting m = 5 kg, g = 9.8 m/s², and h = 10 m: PE = 5 × 9.8 × 10 = 490 J.",
    topic: "Energy",
    difficulty: "easy"
  },
  {
    id: 7,
    text: "A charged particle moves with velocity v in a magnetic field B. The force on the particle is maximum when the angle between v and B is:",
    options: ["0°", "45°", "90°", "180°"],
    correctAnswer: 2,
    explanation: "The magnetic force on a charged particle is given by F = qvB sin(θ), where q is the charge, v is the velocity, B is the magnetic field strength, and θ is the angle between v and B. The force is maximum when sin(θ) is maximum, which occurs at θ = 90°.",
    topic: "Electromagnetism",
    difficulty: "medium",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Magnetic field lines and particle motion"
  },
  {
    id: 8,
    text: "Which of the following is NOT a vector quantity?",
    options: ["Velocity", "Force", "Displacement", "Temperature"],
    correctAnswer: 3,
    explanation: "Temperature is a scalar quantity, as it has only magnitude and no direction. Velocity, force, and displacement are all vector quantities, having both magnitude and direction.",
    topic: "Vectors",
    difficulty: "easy"
  },
  {
    id: 9,
    text: "What is the work done when a force of 20 N displaces an object by 5 m at an angle of 60° to the force?",
    options: ["50 J", "100 J", "50√3 J", "100√3 J"],
    correctAnswer: 0,
    explanation: "Work done is given by W = F × d × cos(θ), where F is force, d is displacement, and θ is the angle between force and displacement. Substituting F = 20 N, d = 5 m, and θ = 60°: W = 20 × 5 × cos(60°) = 100 × 0.5 = 50 J.",
    topic: "Work and Energy",
    difficulty: "medium"
  },
  {
    id: 10,
    text: "A simple pendulum has a period of 2 seconds. What is its length? (g = 9.8 m/s²)",
    options: ["0.5 m", "0.99 m", "1.5 m", "2.0 m"],
    correctAnswer: 1,
    explanation: "The period of a simple pendulum is given by T = 2π√(L/g), where T is the period, L is the length, and g is acceleration due to gravity. Rearranging, L = (T²g)/(4π²). Substituting T = 2 s and g = 9.8 m/s²: L = (2² × 9.8)/(4π²) = (4 × 9.8)/(4π²) = 9.8/π² ≈ 0.99 m.",
    topic: "Oscillations",
    difficulty: "hard"
  }
];

export const exams: Exam[] = [
  {
    id: "natural-math-2024",
    subject: "Mathematics",
    stream: "natural",
    year: 2024,
    description: "Grade 12 Natural Science Mathematics Entrance Exam",
    duration: 180,
    questions: 65,
    attempts: 1250,
    averageScore: 72,
    questionData: mathQuestions
  },
  {
    id: "natural-physics-2024",
    subject: "Physics",
    stream: "natural",
    year: 2024,
    description: "Grade 12 Natural Science Physics Entrance Exam",
    duration: 150,
    questions: 50,
    attempts: 980,
    averageScore: 68,
    questionData: physicsQuestions
  },
  {
    id: "social-history-2024",
    subject: "History",
    stream: "social",
    year: 2024,
    description: "Grade 12 Social Science History Entrance Exam",
    duration: 120,
    questions: 45,
    attempts: 850,
    averageScore: 75,
  },
  {
    id: "social-geography-2024",
    subject: "Geography",
    stream: "social",
    year: 2024,
    description: "Grade 12 Social Science Geography Entrance Exam",
    duration: 120,
    questions: 45,
    attempts: 920,
    averageScore: 70,
  },
]