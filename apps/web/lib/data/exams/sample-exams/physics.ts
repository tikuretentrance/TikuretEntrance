import { ExamQuestion } from "@/lib/types";

// Sample exam questions for Physics
export const physicsQuestions: ExamQuestion[] = [
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
        imageUrl: "https://www.allaboutcircuits.com/uploads/articles/Parallel_Resistor_Drawing.jpg",
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
        imageUrl: "https://d1yqpar94jqbqm.cloudfront.net/styles/media_full/s3/images/eb06958b1876dcb8b9793ff69ee74de6a35455b9.jpg?itok=xeZjhhFY",
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
        imageUrl: "https://cdn1.byjus.com/wp-content/uploads/2020/11/Motion-of-a-charged-particle-in-magnetic-field-.png",
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