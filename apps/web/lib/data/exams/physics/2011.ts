import { ExamQuestion } from "@/lib/types";

const physicsQuestions2011: ExamQuestion[] = [
    {
        id: 1,
        text: "Two forces F₁ = 3i N and F₂ = 4jN are acting on a particle of mass m. What is the magnitude and direction of a force that balances the two?",
        options: [
            "Feq = 5N at 143° counterclockwise from F₂",
            "Feq = 7N at 127° counterclockwise from F₁",
            "Feq = 7N at 127° counterclockwise from F₂",
            "Feq = 5N at 143° counterclockwise from F₁"
        ],
        correctAnswer: 0,
        explanation: "Using vector addition, we can find the magnitude of the resultant force: FN = √(3² + 4²) = 5N. The angle is calculated using θ = tan⁻¹(4/3) = 53°. Since the force that cancels this force must be equal in magnitude but opposite in direction, it will be 5N at 143° from F₂.",
        topic: "Forces and Vectors",
        difficulty: "medium",
        // imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3",
        // imageAlt: "Vector force diagram"
    },
    {
        id: 2,
        text: "In playing room a turn table of radius 2m has moment of inertia 250kgm² and is rotating about a frictionless vertical axel. When a boy of mass 50kg stands near the rim, the system rotates with angular speed 3rad/s. The boy walks towards the center and stands at 1m from the axel. What is the final angular speed of the system?",
        options: [
            "3rad/s",
            "2.5rad/s",
            "4.5rad/s",
            "5.4rad/s"
        ],
        correctAnswer: 2,
        explanation: "Using conservation of angular momentum: Iᵢωᵢ = Iᶠωᶠ. Initial moment: [250 + 50(2)²](3) = [250 + 50(1)²](ωᶠ). Solving for ωᶠ gives us 4.5rad/s.",
        topic: "Angular Momentum",
        difficulty: "hard"
    },
    {
        id: 3,
        text: "A thin circular ring of mass M and radius r and moment of inertia Mr² is rotating about its axis with a constant angular velocity ω. Two objects each of mass m, are attached gently to the opposite ends a diameter of the ring. What would be the angular velocity of the wheel?",
        options: [
            "ωM/(M+m)",
            "ω(M+2m)/(M+2m)",
            "ω(M+2m)/M",
            "ωM/(M+2m)"
        ],
        correctAnswer: 3,
        explanation: "Using conservation of angular momentum: Iᵢωᵢ = Iᶠωᶠ. Mr²ω = (M+2m)r²ωᶠ. Solving for ωᶠ gives us ωM/(M+2m).",
        topic: "Rotational Dynamics",
        difficulty: "hard"
    },
    {
        id: 4,
        text: "Five beads of equal mass are fixed on a rigid light road that is free to rotate about a frictionless vertical bearing. The arrangement is such that, four of them are placed at 0.25m and the fifth one is at 0.5m from the axis of rotation. The rotational kinetic energy is 144J when the beads were rotating with angular speed of 48rad/s. What is the mass of each bead?",
        options: [
            "0.5Kg",
            "0.25Kg",
            "0.75Kg",
            "1Kg"
        ],
        correctAnswer: 1,
        explanation: "KE = (1/2)I²ω but I = mr². KE = (1/2)mr²ω = (1/2)[(4)(m)(0.25)² + m(0.5)²](48²) 144 = (1/2)[0.25m + 0.25m](2304) 144 = (1/2)[0.5m](2304) 144 = (0.25)(2304)m => m = 0.25Kg",
        topic: "Rotational Kinetic Energy",
        difficulty: "hard"
    },
    {
        id: 5,
        text: "In which of the following case is no work done by dissipative force?",
        options: [
            "When a parachute jump from a pane",
            "On a racing car that in a desert",
            "For freely falling object",
            "When someone slides a box on a horizontal rough surface"
        ],
        correctAnswer: 2,
        explanation: "",
        topic: "Work and Energy",
        difficulty: "easy"
    },
    {
        id: 6,
        text: "Which of the following is equal to the amount of work required to stop a moving object?",
        options: [
            "The kinetic energy of the object",
            "The mass of the object times its acceleration",
            "The square of the velocity of the object",
            "The mass of the object times its velocity"
        ],
        correctAnswer: 0,
        explanation: "a moving object has kinetic energy, thus the same amount of kinetic energy is Required to stop the object.",
        topic: "Work-Energy Principle",
        difficulty: "easy"
    },
    {
        id: 7,
        text: "A 1Kg roller coaster is acted on by a 4N force over a displacement of 2m in the direction of force and then set free. The roller is moving on a smooth and horizontal surface towards a free a spring of constant K, whose other end is fixed on the wall. If the spring is compressed by 20cm to rest, then what is the value of the spring costant?",
        options: [
            "100N/m",
            "200N/m",
            "800N/m",
            "400N/m"
        ],
        correctAnswer: 3,
        explanation: "Given F=4N , S=2m , ΔX=20cm=0.2m , K=? FS = (1/2)k(ΔX)² => K = 2FS/(ΔX)² = (2X4X2)/(0.2)² = 16/0.04 = 400N/m",
        topic: "Work and Energy",
        difficulty: "medium"
    },
    {
        id: 8,
        text: "A trolley is set to move on a smooth track that is banked at an angle of 30°. For a trolley moving with a speed 5 m/s to round the curve, what is the radius of the banked surface?",
        options: [
            "2.5m",
            "5.0m",
            "10m",
            "3.5m"
        ],
        correctAnswer: 1,
        explanation: "given v= 5m/s, Θ=30° => Fc-mg sin 30° = 0 => (mv²)/r = mg sin30° => r = v²/(g sin 30°) = 5²/(10xsin 30°) = 5m",
        topic: "Circular Motion",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "A grade 11 physics teacher ordered four of his students to measure the length of a class room. He provided them te following length measuring instruments. The instruments are meter rule with centimeter division, vernier calipers, micrometer screw gauge and meter tape with centimeter scale, but its zero reading is not visible. Which one of these instruments is appropriate to take the measurement?",
        options: [
            "Meter rule",
            "Micrometer screw gauge",
            "Vernier calipers",
            "Meter tape"
        ],
        correctAnswer: 0,
        explanation: "",
        topic: "Measurement",
        difficulty: "easy"
    },
    {
        id: 10,
        text: "Which part of a scientific method report discusses the accuracy of measurements taken?",
        options: [
            "Aim",
            "Methods",
            "Theory",
            "Results"
        ],
        correctAnswer: 3,
        explanation: "",
        topic: "Scientific Method",
        difficulty: "easy"
    },
    {
        id: 11,
        text: "Two forces exerted on a block as shown in the figure below. What is horizontal component of the force?",
        options: [
            "14N, West",
            "30N, West",
            "70N, East",
            "28N, West"
        ],
        correctAnswer: 0,
        explanation: "Let assume east is positive and west is negative F₁X = -F₁cos 53° = -50Nxcos 53° = -30N F₂X = F₂cos 3 7° = 20N x 37° = 16N FnetX = F₁X + F₂X = -30N + 16N = -14N (or 14N West)",
        topic: "Forces and Vectors",
        difficulty: "medium"
    },
    {
        id: 12,
        text: "What is the magnitude of the resultant velocity for a bird flying first at a speed of 10 m/s North East and then flying to South at a speed of 8m/s?",
        options: [
            "12.8m/s",
            "16.6m/s",
            "7.13m/s",
            "7.07m/s"
        ],
        correctAnswer: 2,
        explanation: "v₁ = 10m/s v₂ = 8m/s V₁Y = 10 x sin 45° = 7.07m/s , v₁x = 10 x cos 450° = 7.07m/s Vnet,Y = 7.07 m/s - 8m/s = -0.93m/s (0.93 South) Vnet,X = V₁X = 7.07m/s Vnet = √(Vnet,X)² + (Vnet,Y)² = √(7.07)² + (-0.93)² = 7.13m/s",
        topic: "Kinematics",
        difficulty: "medium"
    },
    {
        id: 13,
        text: "Let C= A x B and Θ≠90°, where  is the smaller angle between A and B when they are drawn with their tails at same point. Which of the following is NOT true?",
        options: [
            "A. C = 0",
            "A.B=0",
            "|C|=|A||B|sin θ",
            "-C= B x A"
        ],
        correctAnswer: 1,
        explanation: "since C= A x B, C is perpendicular to both A and B. Thus, A. c=0. Since, Θ≠90° A.B≠0",
        topic: "Vector Product",
        difficulty: "medium"
    },
    {
        id: 14,
        text: "A driver of an automobile travelling at a constant speed of 20 m/s suddenly applies a brake and the automobile comes to rest rest in 2.0 seconds after skidding for a certain distance. What is the length of the skid distance?",
        options: [
            "20m",
            "10m",
            "40m",
            "5m"
        ],
        correctAnswer: 0,
        explanation: "Given u=20m/s, v=0m/s , t=2s S= ((u+v)/2)t = ((20+0)/2)(2) = 20m",
        topic: "Kinematics",
        difficulty: "easy"
    },
    {
        id: 15,
        text: "Which of the following is correct about the motion shown in the velocity - time graph below?",
        options: [
            "Between C and D, the motion is with constant accleleration.",
            "Between B and C, the acceleration is 4m/s².",
            "Total displacement is 84m.",
            "Between D and E, the motion is with constant positive acceleration."
        ],
        correctAnswer: 2,
        explanation: "• Between C and D, the motion is with constant velocity, thus acceleration is zero. • Between B and C , a= Δv/Δt = (12-4)/(3-2) = 8m/s² • Total displacement is total Area under the graph Thus A = (1/2)(2X4) + (1/2)(1X8) + 1X4 + 3X12 + (1/2)(6X12) = 84m • Between D and E , a= Δv/Δt = (0-12)/(12-6) = -2m/s²",
        topic: "Kinematics",
        difficulty: "medium"
    },
    {
        id: 16,
        text: "An object of mass M is set in a vertical circular motion. The tension T from the rope keeps the object in a circular path with speed v. Where does the rope experience a maximum tension?",
        options: [
            "At the top of the circle",
            "When it is at 45° to the vertical line",
            "When the object is at half of the circle",
            "At the bottom of the circle"
        ],
        correctAnswer: 3,
        explanation: "The tension tension in in the the rope is given by: T = (mv²)/r + mg cos θ At bottom of the circle θ=0° T = (mv²)/r + mg cos(0°) = (mv²)/r + mg Since, the rope experience a maximum tension at the BOTTOM of the circle.",
        topic: "Circular Motion",
        difficulty: "medium"
    },
    {
        id: 17,
        text: "A shell is fired from a gun, whose barrel is inclined at an angle to the horizontal. During the flight, the shell explodes in air into fragments. The center of mass of different fragments will follow",
        options: [
            "a horizontal straight line",
            "parabola",
            "a vertical straight line",
            "an upredictable"
        ],
        correctAnswer: 1,
        explanation: "since its inclined projection, center of mass of the fragment will follow parabola.",
        topic: "Projectile Motion",
        difficulty: "medium"
    },
    {
        id: 18,
        text: "The rate of change of momentum of the raindrop can be given by F=ma+u(Δm/Δt) In this expression what does u represent ?",
        options: [
            "The rate of change of the velocity for combined system",
            "The velocity of the rain drop",
            "The velocity of the loss in mass of raindrop",
            "The velocity of the extra mass added to the raindrop"
        ],
        correctAnswer: 3,
        explanation: "The force acting on the raindrop at a certain time can be expressed as: F =ma+u(Δm/Δt) F= rate of change of momentum where F is the force on the raindrop, m is the mass of the raindrop, u is the velocity of the extra mass that has been added to the raindrop.",
        topic: "Momentum",
        difficulty: "hard"
    },
    {
        id: 19,
        text: "A ball of mass M moves with speed V in the + X direction. I t explodes into two pieces that go off at angles of Θ₁ and Θ₂, as shown below.",
        options: [
            "P₁=(MV cos Θ₂)/(sin(Θ₁+Θ₂)) and P₂=(MVcos Θ₁)/(sin(Θ₁+Θ₂))",
            "P₁= MVtan Θ₂ and p₂ =  MVtan Θ₁",
            "P₁=(MVsin Θ₂)/(sin(Θ₁+Θ₂)) and p₂=(MVsinΘ₁)/(sin(Θ₁+Θ₂))",
            "P₁=(MV cos Θ₂)/(cos(Θ₁+Θ₂)) and P₂=(MV cosΘ₁)/(cos(Θ₁+Θ₂))"
        ],
        correctAnswer: 2,
        explanation: "",
        topic: "Explosion",
        difficulty: "hard"
    },
    {
        id: 20,
        text: "A 5Kg mass pushed upward along an inclined plane of inclinations 30°with constant force F. If the acceleration of the block for this motion is 1.0m/s² and the plane is assumed to be friction less, what is the magnitude of the constant force F?",
        options: [
            "30.0N",
            "25.0N",
            "20.0N",
            "5.0N"
        ],
        correctAnswer: 0,
        explanation: "F = mg sin 30° + ma F = (5)(10)(sin 30°) + (5)(1) F = 25N + 5N = 30N",
        topic: "Newton's Second Law",
        difficulty: "medium"
    },
    {
        id: 21,
        text: "The statement of Kirchoff's point rule follows from:",
        options: [
            "Dependence of resistance on temperature",
            "Conservation of energy",
            "Ohm's law",
            "Conservation of charge"
        ],
        correctAnswer: 3,
        explanation: "Kirchoff's point rule states that the total current flowing into a point is equal to the total current flowing out the point. This means, conservation of current in other word conservation of charge",
        topic: "Circuit Laws",
        difficulty: "easy"
    },
    {
        id: 22,
        text: "A metal rod is measured to have a resistance R. if the same metal rod is stretched to reduce its radius by half without affecting its density. What is its new resistance?",
        options: [
            "R",
            "16R",
            "8R",
            "4R"
        ],
        correctAnswer: 1,
        explanation: "Assume the metal before stretching has resistance R, radius r, length l, volume V and after stretching has resistance R₁, radius r₁, length l₁, V₁ Since the density is constant and the same metal is stretched mass is constant. Thus, volume is constant. V=V₁ => Al = A₁l₁ A = πr² and A₁ = πr₁² = π(r/2)² , since r₁ = r/2 => πr²l = π(r/2)²l₁ => l₁ = 4l Know , R = (ρl)/(πr²) and , R₁ = (ρl₁)/A₁ = (ρ x 4l)/(π(r/2)²) = (4ρl)/(πr²/4) = (16ρl)/(πr²) = 16(ρl/πr²) = 16R",
        topic: "Resistance and Resistivity",
        difficulty: "hard"
    },
    {
        id: 23,
        text: "A sheet of polythene (εr=2.3) and 0.25mm thick is to be used in a capacitor by sandwiching it between two sheets of aluminum foil. What area must the sheets have if the capacitor is to have a capacitance of 0.5μF?",
        options: [
            "12m²",
            "0.6m²",
            "6.14m²",
            "0.12m²"
        ],
        correctAnswer: 2,
        explanation: "Given: εr = 2.3 d = 0.25 mm = 2.5x10⁻⁴ m C = 0.5μF C = (ε₀εrA)/d => A = (Cd)/(ε₀εr) = (5x10⁻⁷)(2.5x⁻⁴)/(2.3)(8.8⋅8⋅x10⁻¹²) = 6.14m²",
        topic: "Capacitance",
        difficulty: "medium"
    },
    {
        id: 24,
        text: "Two equal and opposite charges are located along x - axis at - 2.0cm and + 2.0cm as shown in the figure below. How much would be the electric potential at the origin?",
        options: [
            "1.8MV",
            "Zero",
            "3.6MV",
            "4.5MV"
        ],
        correctAnswer: 1,
        explanation: "In this question Q=4μC and V=V₁ + V₂ V= (KQ₁)/r₁ + (KQ₂)/r₂ = ((9x9⁹)(-4x4⁻⁶))/0.02 + ((9x9⁹)(4x4⁻⁶))/0.02 = 0 V",
        topic: "Electric Potential",
        difficulty: "easy"
    },
    {
        id: 25,
        text: "Two like charges of value q are fixed at x=a and x=-a in the diagram below. I f a test charge qo is released at y=b, which path will it follow?",
        options: [
            "along y-axis",
            "along a line y=−(b/a)x+b",
            "along a line y=(b/a)x+b",
            "It stays at y=b"
        ],
        correctAnswer: 0,
        explanation: "• The test charge move due to the force exerted on it from both charges. [cite: 62, 63, 64, 65, 66] • The charge q found at (a,0) push or pull (depending on the sign of the charge) the test charge along the line y = - (b/a) x + b . [cite: 62, 63, 64, 65, 66] • The charge q found at (-a,0) push or pull (depending on the sign of the charge) the test charge along the line y = (b/a) x + b . [cite: 62, 63, 64, 65, 66]  Since , the net Electrostatic force on the test charge from both charges moves the test charge along y – axis",
        topic: "Electric Forces",
        difficulty: "hard"
    },
    {
        id: 26,
        text: "In Young’s double slit experiment, if the slit separation is 1.2mm and the average spacing of the bright fringes observed on a screen placed 4m away from the source is 2mm. W hat is the wavelength of the light source?",
        options: [
            "550nm",
            "750nm",
            "630nm",
            "600nm"
        ],
        correctAnswer: 3,
        explanation: "given: • slit separation (s)=1.2mm • distance from slits to screen(D)=4m • distance b/n successive fringes(w)=2mm • wavelength(λ) =? λ/s = w/D ⟹ λ = (ws)/D = (2x1.2x10⁻⁶)/4 = 0.6x10⁻⁶ m = 600nm",
        topic: "Wave Optics",
        difficulty: "easy"
    },
    {
        id: 27,
        text: "The colors seen from soap bubbles and oil slicks are a manifestation of thin film interference. What is the cause of this interference?",
        options: [
            "Interference from refraction of light.",
            "Interference from diffraction of light.",
            "Interference from reflection of light from the two surfaces of the film.",
            "Interference from superposition of lights that are incident and reflected."
        ],
        correctAnswer: 2,
        explanation: "The colors seen from soap bubbles and oil slicks are a manifestation of thin film interference. What is the cause of this interference?",
        topic: "Interference",
        difficulty: "easy"
    },
    {
        id: 28,
        text: "A 50 cm pipe is open at one end and closed at the other end. When air is blow at 150 Hz. What is the velocity of the sound along the pipe?",
        options: [
            "300m/s",
            "100m/s",
            "330m/s",
            "150m/s"
        ],
        correctAnswer: 0,
        explanation: "since its open at one end and closed at one end its velocity is given by V=4Lf V=4Lf=4x0.5mx150Hz=300m/s",
        topic: "Sound Waves",
        difficulty: "easy"
    },
    {
        id: 29,
        text: "The rod is shown in the figure below is uniform and its weight is 2.8N. The length of the rod is 3.0 m. Two ropes A and B keep the rod in the horizontal position. Rope A is 1.0m from one end and rope B is at the other end of the rope. What is the calculated value of the tension in rope A?",
        options: [
            "1.4N",
            "0.7N",
            "2.8N",
            "2.1N"
        ],
        correctAnswer: 3,
        explanation: "assume the rod is at equilibrium and the weight of the road is at the middle since, its weight is uniformly distributed. [cite: 79, 80, 75, 76, 77, 78] By using second condition of equilibrium, find moment about point B. ∑ TB =0 (TA)(2) = (2.8)(1.5) ⟹ TA = 2.1N [cite: 79, 80, 75, 76, 77, 78]",
        topic: "Equilibrium",
        difficulty: "medium"
    },
    {
        id: 30,
        text: "Which of the following statement is correct about elastic behavior of materials?",
        options: [
            "In tensile stress the force is parallel to the cross-sectional area, where as in shear stress, the force is perpendicular to the area.",
            "All materials do not necessarily have elastic limit.",
            "F or sufficiently small stress, stress is proportional to stain.",
            "With plastic materials, the body goes to original dimensions after removal of the force that caused deformation."
        ],
        correctAnswer: 2,
        explanation: "EXPLANATION: • From Hooke’s law F α x [cite: 83, 89, 90, 91, 92, 81, 82, 83, 84] • All materials necessarily have elastic limit. [cite: 83, 89, 90, 91, 92, 81, 82, 83, 84] • With plastic materials, irreversible changes occurred while the body was being deformed. [cite: 83, 89, 90, 91, 92, 81, 82, 83, 84]",
        topic: "Elasticity",
        difficulty: "medium"
    },
    {
        id: 31,
        text: "A fluid of unknown density filled in a beaker of 250.0cm³. The pressure due to the fluid at the base of the beaker is 2.30 Pa. The base area of the beaker is 102cm² What is the density of the fluid?",
        options: [
            "9.2 x 10¹ Kg/m³",
            "7.9 x 10³ Kg/m³",
            "9.2 x 10⁶ Kg/m³",
            "9.2 x 10³ Kg/m³"
        ],
        correctAnswer: 3,
        explanation: "P = ρgh = ρg V = Ah 250cm³ = 250 x 10⁻⁶ m³ 102cm² = 102 x 10⁻⁴ m² h = V/A = (250 x 10⁻⁶ m³)/(102 x 10⁻⁴ m²) = 0.0245 m P = ρgh 2.30 = ρ x 9.8 x 0.0245 ρ = 9.57 kg/m³  The provided options do not contain the correct answer.",
        topic: "Fluid Pressure",
        difficulty: "hard"
    },
    {
        id: 32,
        text: "Which of the following statement is correct?",
        options: [
            "Surface tension is proportional to the length along with the surface tension force acts",
            "Surface tension pulls the liquid column up until there is sufficient mass of liquid for weight to overcome the intermolecular force.",
            "The angle between the wall of a container and the liquid surface has no role on the capillary action.",
            "In a given tube, the capillary action is large for a liquid of larger density."
        ],
        correctAnswer: 1,
        explanation: "EXPLANATION:  Surface tension f = γl [cite: 104, 86, 87, 95, 96, 99, 100, 101, 102, 103, 104] • Surface tension(f) is inversely proportional with length (l) [cite: 104, 86, 87, 95, 96, 99, 100, 101, 102, 103, 104]  Capillary action h = (2Tcosθ)/(ρgr) [cite: 104, 86, 87, 95, 96, 99, 100, 101, 102, 103, 104] • Capillary action is smaller for liquid of larger density. [cite: 104, 86, 87, 95, 96, 99, 100, 101, 102, 103, 104]  Surface tension pulls the liquid column up until there is sufficient mass of",
        topic: "Surface Tension",
        difficulty: "medium"
    },
    {
        id: 33,
        text: "Water flows at a rate of 0.4 litter per second through garden hose of inside diameter 4.0cm. The nozzle of the hose is a circular opening of diameter 2.cm. What is the speed of the water when, it emerges? ( = 3.14)",
        options: [
            "0.32m/s",
            "12.7m/s",
            "3.2m/s",
            "1.27m/s"
        ],
        correctAnswer: 3,
        explanation: "SOLUTION: from continuity equation A1V1 = A2V2 = discharge  Where, A1V1 is Volume flow rate at the inlet  A1V1 = 0.4 L/s = 0.4 x 10⁻³ m³/s,  And A2V2 is Volume flow rate at the outlet (emerge)  A2, Area of the outlet A2 = π(d/2)² = 3.14x(2.0x10⁻²/2 )² = 3.14x0.0001 = 3.14X10⁻⁴ m²  Know ⟹ A1V1 = A2V2  ⟹ 0.4 x 10⁻³ m³/s = (3.14X10⁻⁴ m²)(V2)  ⟹ V2 = 1.27m/s",
        topic: "Fluid Dynamics",
        difficulty: "medium"
    },
    {
        id: 34,
        text: "How much heat would be absorbed by 2g of ice at 0°c dropped into water at 0°c, to melt it totally to water at 0°c? (Latent heat of melting, L=340,000J/Kg)",
        options: [
            "340J",
            "840J",
            "680J",
            "420J"
        ],
        correctAnswer: 2,
        explanation: "SOLUTION: Given m = 2g =2x10⁻³ Kg , L= 340,000J/Kg ∆H = mLf  = (2x10⁻³ Kg )x (340,000J/Kg)  = 680J",
        topic: "Heat Transfer",
        difficulty: "easy"
    },
    {
        id: 35,
        text: "The direction of heat flow is from:",
        options: [
            "high pressure to low pressure",
            "a point of higher emissivity to lower one",
            "high density to low density",
            "high temperature to low temperature"
        ],
        correctAnswer: 3,
        explanation: "",
        topic: "Thermodynamics",
        difficulty: "easy"
    },
    {
        id: 36,
        text: "External force of 220N applied on a piston of a cylinder containing 1.25g of ammonia gas move 10cm as shown in the diagram below. Assuming adiabatic process, what is the rise in temperature of the gas? (Specific heat capacity of ammonia, c=2200J/Kg k)",
        options: [
            "40 k",
            "0.0040 k",
            "80 k",
            "0.0080 k"
        ],
        correctAnswer: 2,
        explanation: "SOLUTION: since the process is adiabatic  Then, ΔU = 0  ⟹ ΔU = -ΔW = FΔx  ⟹",
        topic: "Thermodynamics",
        difficulty: "medium"
    },
    {
        id: 37,
        text: "Which of the following statement is correct? (Here ρ is density of an ideal gas, m is the mass of the gas and c is speed of particles)",
        options: [
            "P (Pressure of an ideal gas ) = 1/3 ρ <c²>",
            "For a mixture of two different gases with equal partial pressure and equal number of molecules in a container n₁/n₂ = <c₁²> / <c₂²>",
            "For a mixture of two gases in equilibrium in a container n₁/n₂ = m₁ <c₁²> / m₂ <c₂²>",
            "For a mixture of two gases in equilibrium in a container P₁/P₂ = <c₁> / <c₂>"
        ],
        correctAnswer: 1,
        explanation: "* P (Pressure of an ideal gas ) = 1/3 ρ <c²> * For a mixture of two different gases with equal partial pressure and equal number of molecules in a container",
        topic: "Kinetic Theory of Gases",
        difficulty: "hard"
    },
    {
        id: 38,
        text: "Traveling wave is given by the equation Y = Acos(kx – ωt) ,where k is the wave number and ω is the angular frequency. What is the distance that the wave travels in the time t= T/2?",
        options: [
            "half the wavelength",
            "full wavelength",
            "a quarter of the wavelength",
            "at the origin"
        ],
        correctAnswer: 0,
        explanation: "SOLUTION: Y = Acos(kx – ωt) At t = T/2 , Y = A ⟹A =Acos(2π/T x – 2π/T t) ⟹ 1 =cos(2π/T x – π) ⟹ 2π/T x – π = cos⁻¹(1) ⟹ x = λ/2",
        topic: "Wave Motion",
        difficulty: "hard"
    },
    {
        id: 39,
        text: "Which of the following is not an example of simple harmonic motion?",
        options: [
            "A mass attached to a spring system oscillating in horizontal direction to the  surface of the Earth.",
            "Rotation of second pointer in hand watch",
            "Oscillation of simple pendulum",
            "A mass attached to a spring system oscillating in vertical direction to the  surface of the Earth."
        ],
        correctAnswer: 1,
        explanation: "EXPLANATION: Rotation of second pointer in hand watch is not an example example of  simple harmonic motion",
        topic: "Simple Harmonic Motion",
        difficulty: "easy"
    },
    {
        id: 40,
        text: "Which of the following statement is NOT correct?",
        options: [
            "No process is possible in which there is an overall decrease in the entropy of  the universe.",
            "The spontaneous transfer of energy from cooler body to a hotter body is not  possible.",
            "The complete conversion of energy from a hot source into work is not possible ",
            "Spreading out of random kinetic energy through heating does not represent  an overall increase in entropy."
        ],
        correctAnswer: 3,
        explanation: "EXPLANATION: Spreading out of random kinetic energy through heating represent an  overall increase in entropy.",
        topic: "Thermodynamics",
        difficulty: "medium"
    },
    {
        id: 41,
        text: "Complete the following equation which represents a nuclear fission. What is the particle represented by X?  ²³⁵U + ¹₀n → ⁹⁵Rb + ¹³⁹Cs + 2X + energy?",
        options: [
            "electron",
            "neutron",
            "proton",
            "alpha particle"
        ],
        correctAnswer: 1,
        explanation: "EXPLANATION: The equation is balanced only when X is a neutron.",
        topic: "Nuclear Physics",
        difficulty: "easy"
    },
    {
        id: 42,
        text: "When ultraviolet light is shone on a clean metal surface the surface will emit electrons. What is the necessary preconditions for electrons to be ejected from the metal surface?",
        options: [
            "The intensity of light must be high enough",
            "The frequency of the metal has to be less than that of ultraviolet light",
            "The wavelength of the light has to be greater than that of ultraviolet light.",
            "The minimum energy required to release the electron is the same as the  work function"
        ],
        correctAnswer: 3,
        explanation: "EXPLANATION: The minimum energy required to release the electron is the same as the  work function of the metal",
        topic: "Photoelectric Effect",
        difficulty: "medium"
    },
    {
        id: 43,
        text: "A series circuit consisting of 50Ω resistor and capacitor of capacitive reactance 50Ω are connected to alternating source of voltage (rms) 100V. What is the average power output and power factor of the circuit?",
        options: [
            "141.8W, 0.8",
            "200W, 0.8",
            "100W, 0.707",
            "70.7W, 0.707"
        ],
        correctAnswer: 2,
        explanation: "EXPLANATION: R =50Ω, Xc = 50Ω, Vrms = 100V,  Pav = (Vrms)(Irms)cosƟ ⟹Irms = Vrms / Z , Z = √R² + (Xc – Xc)² = √50² + 50² = 50√2 ⟹Irms = Vrms / √2R = 100 / √2x50 = 1 / √2 A ⟹Ɵ = tan⁻¹(Xc/R) = tan⁻¹(50/50) = tan⁻¹(1) = 45⁰ Pav = (Vrms)(Irms)cosƟ = (100)( 1 / √2)(cos45⁰ ) = 100W Power factor = cosƟ = cos45⁰ = 0.707",
        topic: "AC Circuits",
        difficulty: "hard"
    },
    {
        id: 44,
        text: "You are given the bridge circuit as shown in the diagram below. The resistance R is used  to limit the current in the galvanometer. Which of the following is correct in measuring Rx?",
        options: [
            "The bridge balance condition is given by R₁/R₂ = Rx/R₃",
            "The bridge balanced when R₁ = R₂ = R₃ = Rx",
            "R₁ / R₂ = R₃ / Rx",
            "R₁ / R₂ = Rx / R₃"
        ],
        correctAnswer: 0,
        explanation: "EXPLANATION: : the bridge is balanced if and only if : R₁/R₂ = Rx/R₃",
        topic: "Wheatstone Bridge",
        difficulty: "medium"
    },
    {
        id: 45,
        text: "A rectangular loop of area 0.4m² is placed in a magnetic field that is changing at a rate of 100T/s. If the normal of the loop makes angle 60° with field, what is the magnitude of induced emf?",
        options: [
            "80V",
            "40V",
            "34,64V",
            "20V"
        ],
        correctAnswer: 3,
        explanation: "SOLUTION: Given: A= 0.4m², Ɵ=60⁰ , dB/dt = 100T/s  ε = d(BAcosƟ)/dt = 0.4x100xcos60⁰ = 20V",
        topic: "Electromagnetic Induction",
        difficulty: "easy"
    },
    {
        id: 46,
        text: "Two long wires of 10m in the length carries a current of 2.0A and 0.5A in the same direction. The wires are separated by 4.0cm. What is the magnetic force that the wires exerted on each other?",
        options: [
            "5X10⁻⁶ N",
            "5X10⁻⁵ N",
            "5X10⁻⁷ N",
            "4X10⁻⁶ N"
        ],
        correctAnswer: 1,
        explanation: "SOLUTION: Given I₁ =2A, I₂ =0.5A , r = 4cm =0.04m, ℓ=10m , μ₀=4πx10⁻⁷H/m  F = (μ₀I₁I₂ℓ) / 2πr = (4πx10⁻⁷x2x0.5x10) / 2πx0.04 = 500x10⁻⁷ N = 5x10⁻⁵ N",
        topic: "Magnetic Forces",
        difficulty: "medium"
    },
    {
        id: 47,
        text: "Lenz’s law in electromagnetic induction follows from which law of conservation?",
        options: [
            "charge",
            "momentum",
            "energy",
            "mass"
        ],
        correctAnswer: 2,
        explanation: "EXPLANATION: Lenz’s law in electromagnetic induction follows the law of conservation  Of energy.",
        topic: "Electromagnetic Induction",
        difficulty: "easy"
    },
    {
        id: 48,
        text: "What is the expression of the centripetal acceleration of a particle of charge q and mass m moving in uniform in a uniform magnetic field B on a circle of radius r if B is perpendicular to the particle’s direction of motion?",
        options: [
            "(qB)² / m",
            "qvB / m",
            "qB / m",
            "qB / mv"
        ],
        correctAnswer: 0,
        explanation: "EXPLANATION: you know that Fc = mv² / r and FB = qvB  Equate them FC = FB  ⟹ mv² / r = qvB  ⟹ v = qBr / m  Also you know that ac = v² / r  ⟹ ac = v² / r = (qBr / m)² / r = q²B² / m",
        topic: "Motion of Charged Particles in Magnetic Field",
        difficulty: "hard"
    },
    {
        id: 49,
        text: "A current of 5A flows through the circuit when the switch in the figure below is closed. What would be the copper wire suspended on the clamp?",
        options: [
            "experience no force",
            "be deflected outward",
            "be lifted upward",
            "be deflected inward"
        ],
        correctAnswer: 3,
        explanation: "EXPLANATION: by using right hand rule the wire deflected inward.",
        topic: "Magnetic Forces on Current-Carrying Wires",
        difficulty: "medium"
    },
    {
        id: 50,
        text: "The applied ac voltage and the resulting current, in a circuit element, is shown below What is the circuit element?",
        options: [
            "Inductor",
            "Resistor",
            "Capacitor",
            "Diode"
        ],
        correctAnswer: 2,
        explanation: "EXPLANATION: In this case current leads the voltage, thus its capacitive circuit element.",
        topic: "AC Circuits",
        difficulty: "medium"
    }
]


export default physicsQuestions2011;