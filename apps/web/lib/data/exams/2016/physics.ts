import { ExamQuestion } from "@/lib/types";

export const physicsQuestions2016: ExamQuestion[] = [
    {
        id: 1,
        text: "Lenz's law states that the direction of the induced current in a loop is in such a way that the current",
        options: [
            "creates a magnetic field that reinforces the change in magnetic flux through the loop.",
            "is in opposite direction to that of the applied magnetic field that is causing it.",
            "creates a magnetic field that opposes the change in magnetic flux through the loop.",
            "is in the same direction as that of the applied magnetic field that is causing it."
        ],
        correctAnswer: 2,
        explanation: "Lenz's law states that the induced current will create a magnetic field that opposes the change in magnetic flux through the loop.",
        topic: "Electromagnetic Induction",
        difficulty: "medium"
    },
    {
        id: 2,
        text: "Which one of the following statements is correct about the resistance of a conducting wire?",
        options: [
            "The resistance of the wire is directly proportional to the square of its cross-sectional area.",
            "The resistance of the wire is directly proportional to the square of its length.",
            "The resistance of the wire is inversely proportional to its length.",
            "The resistance of the wire is inversely proportional to its cross-sectional area."
        ],
        correctAnswer: 3,
        explanation: "The resistance of a wire is inversely proportional to its cross-sectional area, as given by the formula R = ρL/A, where ρ is resistivity, L is length, and A is cross-sectional area.",
        topic: "Resistance",
        difficulty: "easy"
    },
    {
        id: 3,
        text: "Consider an ideal transformer having Np and Ns turns, and voltages Vp and Vs in its primary and secondary coils, respectively. Which one of the following is the correct ideal transformer equation?",
        options: [
            "Vs/Vp = Np/Ns",
            "Vp = (Np/Ns)²Vs",
            "Vs/Vp = Ns/Np",
            "Ns/Np = (Vs/Vp)²"
        ],
        correctAnswer: 2,
        explanation: "The correct transformer equation is Vs/Vp = Ns/Np, which relates the voltages to the number of turns in the primary and secondary coils.",
        topic: "Transformers",
        difficulty: "medium"
    },
    {
        id: 4,
        text: "Which one of the following statements is correct about the electrical conductivity of materials?",
        options: [
            "Materials in which all the outer most shell electrons are tightly bound to its parent atom are conductors.",
            "Materials in which all the outer most shell electrons are free to move within the material are semiconductors.",
            "Materials in which inner and outer most shell electrons are free to move within the material are conductors.",
            "Materials in which inner and outer most shell electrons are tightly bound to its parent atom are insulators."
        ],
        correctAnswer: 3,
        explanation: "Insulators are materials where both inner and outer shell electrons are tightly bound to their parent atoms, preventing free movement of electrons.",
        topic: "Electrical Conductivity",
        difficulty: "easy"
    },
    {
        id: 5,
        text: "Which one of the following statements distinguishes precision from accuracy?",
        options: [
            "Precision indicates how close a measured value is to the true value, whereas accuracy refers to the closeness of repeatedly measured values to each other.",
            "Accuracy measures how exact a value is whereas precision indicates how close a measured value is to the true value.",
            "Precision is a measure of the closeness of repeatedly measured values to each other, whereas accuracy is related to the number of significant figures.",
            "Precision is a measure of the closeness of repeatedly measured values to each other, whereas accuracy refers to the closeness of measured values to the true value."
        ],
        correctAnswer: 3,
        explanation: "Precision refers to the consistency of repeated measurements, while accuracy refers to how close the measurements are to the true value.",
        topic: "Measurement and Errors",
        difficulty: "medium"
    },
    {
        id: 6,
        text: "Which of the following statements about the nature electromagnetic waves is correct?",
        options: [
            "Electromagnetic waves are transverse waves produced when electric and magnetic fields are oscillating perpendicular to each other.",
            "Electromagnetic waves are transverse waves produced when charges are placed at rest in an electric and magnetic fields that are perpendicular to each other.",
            "Electromagnetic waves are longitudinal waves produced when electric and magnetic fields are oscillating parallel to each other.",
            "Electromagnetic waves are longitudinal waves produced when charges are placed at rest in an electric and magnetic fields that are parallel to each other."
        ],
        correctAnswer: 0,
        explanation: "Electromagnetic waves are transverse waves where the electric and magnetic fields oscillate perpendicular to each other and to the direction of wave propagation.",
        topic: "Electromagnetic Waves",
        difficulty: "medium"
    },
    {
        id: 7,
        text: "Three resistors are connected between points a and b as shown in the figure below. The effective resistance of the circuit is",
        options: [
            "1.0 Ω",
            "11.0 Ω",
            "1.0 kΩ",
            "11.0 kΩ"
        ],
        correctAnswer: 2,
        explanation: "The effective resistance of the circuit is calculated by combining the resistors in series and parallel, resulting in 1.0 kΩ.",
        topic: "Circuit Analysis",
        difficulty: "easy",
        imageUrl: "",
        imageAlt: ""
    },
    {
        id: 8,
        text: "A concave mirror has a radius of curvature of 30.0 cm. It is positioned so that the upright image of an object is 2.0 times the size of the object. How far is the object from the mirror?",
        options: [
            "10.0 cm",
            "15.0 cm",
            "22.5 cm",
            "7.5 cm"
        ],
        correctAnswer: 1,
        explanation: "Using the mirror formula and magnification, the object distance is calculated to be 15.0 cm.",
        topic: "Mirrors and Lenses",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "In an experiment to determine the direction of the magnetic field around a long straight current-carrying wire, a student placed a small compass at point P, as shown in the diagram. If the direction of the current in the wire is directed out-of the page, then the magnetic needle of the compass will point",
        options: [
            "to the right.",
            "downward.",
            "to the left.",
            "upward."
        ],
        correctAnswer: 1,
        explanation: "Using the right-hand rule, the magnetic field around a current-carrying wire points in a circular direction. If the current is out of the page, the compass needle will point downward.",
        topic: "Magnetic Field",
        difficulty: "medium",
        imageUrl: "",
        imageAlt: ""
    },
    {
        id: 10,
        text: "A combination of logic gate is constructed from an NAND gate and an OR gate, as shown in the diagram below. The truth table for the logic circuit shown above is",
        options: [
            "P: 0, Q: 0, Output: 0; P: 0, Q: 1, Output: 1; P: 1, Q: 0, Output: 1; P: 1, Q: 1, Output: 0",
            "P: 0, Q: 0, Output: 1; P: 0, Q: 1, Output: 1; P: 1, Q: 0, Output: 1; P: 1, Q: 1, Output: 1",
            "P: 0, Q: 0, Output: 0; P: 0, Q: 1, Output: 0; P: 1, Q: 0, Output: 0; P: 1, Q: 1, Output: 0",
            "P: 0, Q: 0, Output: 1; P: 0, Q: 1, Output: 0; P: 1, Q: 0, Output: 0; P: 1, Q: 1, Output: 1"
        ],
        correctAnswer: 2,
        explanation: "The truth table for the given logic circuit corresponds to an AND gate, where the output is 1 only when both inputs are 1.",
        topic: "Logic Gates",
        difficulty: "hard",
        imageUrl: "",
        imageAlt: ""
    },
    {
        id: 11,
        text: "Which one of the following is correct about the four basic forces in nature?",
        options: [
            "Electromagnetic force is the weakest of all the forces in nature.",
            "Gravitational force is attractive force that acts on the scale of the atomic nucleus.",
            "Strong nuclear force is short-range force that holds protons and neutrons together inside a nucleus.",
            "Weak nuclear force keeps the electrons in their orbit around a nucleus."
        ],
        correctAnswer: 2,
        explanation: "The strong nuclear force is a short-range force that holds protons and neutrons together inside a nucleus.",
        topic: "Fundamental Forces",
        difficulty: "medium"
    },
    {
        id: 12,
        text: "Which of the following is correct about impulse?",
        options: [
            "The direction of the impulse is in the same direction to change in the momentum of the object.",
            "During momentum change final momentum of an object is along the impulse on the object.",
            "Impulse due to a force exerted for a short time is equal to impulse due to the same force exerted for a long time.",
            "The impulse is smaller than change of momentum which caused by the applied force."
        ],
        correctAnswer: 0,
        explanation: "Impulse is defined as the change in momentum, and its direction is the same as the direction of the change in momentum.",
        topic: "Impulse and Momentum",
        difficulty: "medium"
    },
    {
        id: 13,
        text: "A person walked 10 m in a direction 53° North of East, 10 m North, and finally 20 m in a direction 37° North of West. The magnitude of the person's displacement is",
        options: [
            "30.0 m.",
            "31.6 m.",
            "40.0 m.",
            "20.0 m."
        ],
        correctAnswer: 1,
        explanation: "The displacement is calculated by vector addition, resulting in a magnitude of 31.6 m.",
        topic: "Vectors",
        difficulty: "hard"
    },
    {
        id: 14,
        text: "Which of the following pair of vectors is collinear?",
        options: [
            "C = i + j and D = i - j",
            "A = 2i + 3j and B = -4i + 6j",
            "E = -i + j and F = 3i - 3j",
            "G = 2i + 3j and F = 3i + 2j"
        ],
        correctAnswer: 2,
        explanation: "Vectors E and F are collinear because one is a scalar multiple of the other.",
        topic: "Vectors",
        difficulty: "medium"
    },
    {
        id: 15,
        text: "A ball is thrown vertically upward with 12 m/s from the ground. Its speed when the ball is 4.0 m above the ground is",
        options: [
            "8 m/s.",
            "15 m/s.",
            "10 m/s.",
            "12 m/s."
        ],
        correctAnswer: 0,
        explanation: "Using the kinematic equation v² = u² - 2gh, the speed at 4.0 m above the ground is 8 m/s.",
        topic: "Kinematics",
        difficulty: "easy"
    },
    {
        id: 16,
        text: "An object is projected at angle θ from the horizontal with initial velocity v₀. Which one of the following expressions represents the relationship between maximum height, hmax, and range of the projectile, R?",
        options: [
            "R = hmax (tanθ / 2)",
            "R = 4 hmax tanθ",
            "R = (2 hmax) / tanθ",
            "R = (4 hmax) / tanθ"
        ],
        correctAnswer: 3,
        explanation: "The relationship between maximum height and range is given by R = (4 hmax) / tanθ.",
        topic: "Projectile Motion",
        difficulty: "hard"
    },
    {
        id: 17,
        text: "A 0.5 kg block moving with an initial speed of 5.0 m/s slides 2.5 m on a rough horizontal surface before coming to rest. The coefficient of kinetic friction is",
        options: [
            "0.5.",
            "0.3.",
            "0.1.",
            "0.4."
        ],
        correctAnswer: 0,
        explanation: "Using the work-energy principle, the coefficient of kinetic friction is calculated to be 0.5.",
        topic: "Friction",
        difficulty: "medium"
    },
    {
        id: 18,
        text: "A 0.2 kg ball is kicked from the ground at 16 m/s in a direction making an angle above the horizontal. Neglecting air resistance, the magnitude of velocity of the ball when it is 3.0 m from the ground is",
        options: [
            "7 m/s.",
            "2 m/s.",
            "14 m/s.",
            "16 m/s."
        ],
        correctAnswer: 2,
        explanation: "Using the kinematic equations, the magnitude of the velocity at 3.0 m above the ground is 14 m/s.",
        topic: "Projectile Motion",
        difficulty: "hard"
    },
    {
        id: 19,
        text: "The angular speed of a disk rotating about its axis increases by 2000 rad/s in a time interval of 3.0 s. If the moment of inertia of the disk is 0.6 kg m², what is the average torque on the disk?",
        options: [
            "670 Nm",
            "1200 Nm",
            "6000 Nm",
            "400 Nm"
        ],
        correctAnswer: 3,
        explanation: "Using the formula τ = Iα, the average torque is calculated to be 400 Nm.",
        topic: "Rotational Motion",
        difficulty: "medium"
    },
    {
        id: 20,
        text: "A small ball of mass m tied to a rope of length 1 is moving along a vertical circle about a point O as shown in the figure. If A, B, C, and D are points on the path, then which one of the following is correct about the force exert on the ball at these points?",
        options: [
            "At point C, the radial force and the tension on the rope are in opposite direction.",
            "At point D, the radial force is equal to the tension on the rope.",
            "At point A, the radial force is in opposite direction to the gravitational force on a ball.",
            "At point B, the radial force is equal to the gravitational force on the ball."
        ],
        correctAnswer: 1,
        explanation: "At point D, the radial force is equal to the tension on the rope because the gravitational force is perpendicular to the tension.",
        topic: "Circular Motion",
        difficulty: "hard",
        imageUrl: "",
        imageAlt: ""
    },
    {
        id: 21,
        text: "What do you call the sound wave that is heard after reflection from a hard surface?",
        options: [
            "Loudness",
            "Echo",
            "Timber",
            "Pitch"
        ],
        correctAnswer: 1,
        explanation: "An echo is the sound wave that is heard after reflection from a hard surface.",
        topic: "Sound Waves",
        difficulty: "easy"
    },
    {
        id: 22,
        text: "The angular momentum of a rotating object is defined as the product of its",
        options: [
            "mass and the angular velocity.",
            "moment of inertia and the square of the angular velocity.",
            "moment of inertia and angular velocity.",
            "mass and one-half of the square of the angular velocity."
        ],
        correctAnswer: 2,
        explanation: "Angular momentum is defined as the product of the moment of inertia and the angular velocity.",
        topic: "Rotational Motion",
        difficulty: "medium"
    },
    {
        id: 23,
        text: "Which one of the following waves is identified as longitudinal wave?",
        options: [
            "Deep water wave",
            "Sound wave",
            "Wave on a vibrating string",
            "S-wave of Earthquake"
        ],
        correctAnswer: 1,
        explanation: "Sound waves are longitudinal waves because the particles of the medium vibrate parallel to the direction of wave propagation.",
        topic: "Waves",
        difficulty: "easy"
    },
    {
        id: 24,
        text: "Which of the following statements is correct about the components of the velocity of a ball projected up at an angle of θ with the horizontal? Neglecting the air resistance,",
        options: [
            "the vertical component of the velocity remains constant throughout its journey.",
            "the vertical component of velocity increases while the horizontal component of velocity decreases.",
            "the horizontal component of the velocity remains constant throughout its journey.",
            "the horizontal velocity of the ball is equal to zero at the maximum height."
        ],
        correctAnswer: 2,
        explanation: "In projectile motion, the horizontal component of velocity remains constant because there is no acceleration in the horizontal direction (neglecting air resistance).",
        topic: "Projectile Motion",
        difficulty: "medium"
    },
    {
        id: 25,
        text: "Which one of the following statements is correct about the electric field due to a charged spherical solid conductor?",
        options: [
            "It is zero inside the sphere.",
            "It is non-zero constant outside the sphere.",
            "It is non-zero constant inside the sphere.",
            "It is parallel to the surface of the sphere."
        ],
        correctAnswer: 0,
        explanation: "The electric field inside a charged spherical conductor is zero because the charges redistribute themselves on the surface of the conductor.",
        topic: "Electrostatics",
        difficulty: "medium"
    },
    {
        id: 26,
        text: "A metal wire made of coefficient of linear expansion α is heated so that its temperature is changed by ΔT. If the length of the wire before heating is L₀, which one of the following expressions is correct for the final length of the wire after heating?",
        options: [
            "L₀ α ΔT",
            "L₀ / (1 + α ΔT)",
            "L₀ (1 + α ΔT)",
            "L₀ / (1 - α ΔT)"
        ],
        correctAnswer: 2,
        explanation: "The final length of the wire after heating is given by L = L₀ (1 + α ΔT), where α is the coefficient of linear expansion and ΔT is the change in temperature.",
        topic: "Thermal Expansion",
        difficulty: "medium"
    },
    {
        id: 27,
        text: "What amount of heat energy is required to completely melt 200g of ice at 0°C? (Take specific latent heat of melting for ice, L_f = 3.3 × 10⁵ J/kg)",
        options: [
            "1.65 × 10⁷ J",
            "6.60 × 10⁴ J",
            "Zero",
            "1.65 × 10³ J"
        ],
        correctAnswer: 1,
        explanation: "The heat energy required to melt ice is given by Q = m L_f. For 200g of ice, Q = 0.2 kg × 3.3 × 10⁵ J/kg = 6.60 × 10⁴ J.",
        topic: "Thermodynamics",
        difficulty: "medium"
    },
    {
        id: 28,
        text: "The orbital speed of a satellite at a height of 780 km from the surface of the earth is 7,465 m/s. What is the period of the satellite?",
        options: [
            "6.04 × 10² s",
            "6.04 × 10³ s",
            "6.60 × 10³ s",
            "6.60 × 10² s"
        ],
        correctAnswer: 1,
        explanation: "The period of the satellite is calculated using the formula T = 2πr / v, where r is the orbital radius and v is the orbital speed. The period is approximately 6.04 × 10³ s.",
        topic: "Gravitation",
        difficulty: "hard"
    },
    {
        id: 29,
        text: "The charge of 20.0 μC is stored on the capacitor when a potential difference between its two parallel plates is 200.0 V. What is the capacitance of the capacitor?",
        options: [
            "1.0 μF",
            "10.0 μF",
            "0.1 μF",
            "4.0 mF"
        ],
        correctAnswer: 2,
        explanation: "The capacitance is calculated using C = Q / V. For Q = 20.0 μC and V = 200.0 V, C = 0.1 μF.",
        topic: "Capacitance",
        difficulty: "medium"
    },
    {
        id: 30,
        text: "An air-filled parallel plate capacitor is connected to a potential difference V to store electric charge. If the area of the plates is A and the separation between the plates is d, then the electrical energy stored on the capacitor is",
        options: [
            "1/2 ε₀ (d V² / A)",
            "ε₀ (d V² / A)",
            "ε₀ (A V² / d)",
            "1/2 ε₀ (A V² / d)"
        ],
        correctAnswer: 3,
        explanation: "The electrical energy stored in a capacitor is given by U = 1/2 ε₀ (A V² / d).",
        topic: "Capacitance",
        difficulty: "hard"
    },
    {
        id: 31,
        text: "When a force F is applied to a wire of length L fixed at one end, the wire extends by x. The tensile strain of the wire is",
        options: [
            "the extension x divided by the length L.",
            "the length L divided by the extension x.",
            "the applied force F divided by the extension x.",
            "the product of the force F and the extension x."
        ],
        correctAnswer: 0,
        explanation: "Tensile strain is defined as the ratio of the extension x to the original length L.",
        topic: "Elasticity",
        difficulty: "easy"
    },
    {
        id: 32,
        text: "Which one of the following factors does NOT affect the moment of inertia of an object?",
        options: [
            "The axis about which the object is rotating",
            "The size of the object",
            "The angular speed of the object",
            "The mass of the object"
        ],
        correctAnswer: 2,
        explanation: "The moment of inertia depends on the mass distribution and the axis of rotation, but not on the angular speed of the object.",
        topic: "Rotational Motion",
        difficulty: "medium"
    },
    {
        id: 33,
        text: "Which of the following describes the difference between static and dynamic equilibrium? In static equilibrium,",
        options: [
            "an object is at rest, whereas in dynamic equilibrium, the object moves with constant velocity.",
            "an object moves with constant acceleration, whereas in dynamic equilibrium, the object is at rest.",
            "acceleration is zero, whereas in dynamic equilibrium the acceleration increases uniformly.",
            "an object moves with constant velocity, whereas in dynamic equilibrium, an object is at rest."
        ],
        correctAnswer: 0,
        explanation: "In static equilibrium, an object is at rest, while in dynamic equilibrium, the object moves with constant velocity (no acceleration).",
        topic: "Forces and Equilibrium",
        difficulty: "medium"
    },
    {
        id: 34,
        text: "About an axis of rotation perpendicular to a plane of a couple, the forces in a couple produce",
        options: [
            "no torque.",
            "non-zero resultant force.",
            "torques in opposite direction.",
            "torques in the same direction."
        ],
        correctAnswer: 3,
        explanation: "In a couple, the forces produce torques in the same direction, resulting in a net torque.",
        topic: "Torque and Rotation",
        difficulty: "medium"
    },
    {
        id: 35,
        text: "Which one of the following statements describes the difference between heat and temperature?",
        options: [
            "Heat is a transfer of energy due to temperature difference, whereas temperature is a measure of the average kinetic energy.",
            "Heat is measured with a thermometer in Kelvin, whereas temperature is measured with a Calorimeter in Joule.",
            "Heat is a measure of the average kinetic energy, whereas temperature is a flow of energy from hotter to colder object.",
            "Heat is an energy that flows spontaneously from colder to hotter object, whereas temperature is the degree of hotness and coldness."
        ],
        correctAnswer: 0,
        explanation: "Heat is the transfer of energy due to a temperature difference, while temperature is a measure of the average kinetic energy of particles.",
        topic: "Thermodynamics",
        difficulty: "easy"
    },
    {
        id: 36,
        text: "Which one of the following statements does NOT describe the relationship of physics with biology?",
        options: [
            "Physics and biology are interrelated to each other in the study of vision and color detection.",
            "Physics and biology used to study how air vibrates in vocal cords.",
            "Both physics and biology are mainly concerned in the interaction of large number of particles.",
            "Newtonian mechanics and biology are used to explain why cheetah is fastest animal."
        ],
        correctAnswer: 2,
        explanation: "Physics and biology are not primarily concerned with the interaction of large numbers of particles; this is more relevant to fields like statistical mechanics.",
        topic: "Interdisciplinary Science",
        difficulty: "medium"
    },
    {
        id: 37,
        text: "Which one of the following is a correct relation of physics with medicine?",
        options: [
            "Modern medical imaging instruments are developed with knowledge of medicine and later used by physics.",
            "Medicine is a branch of physics dealing with nuclear reaction.",
            "Physics is a branch of medicine that sets standards during medical diagnosis.",
            "A discipline called medical physics deals with principles of physics in medical diagnosis."
        ],
        correctAnswer: 3,
        explanation: "Medical physics is a discipline that applies the principles of physics to medical diagnosis and treatment.",
        topic: "Interdisciplinary Science",
        difficulty: "medium"
    },
    {
        id: 38,
        text: "A ball is released from a height h. It then rises to a maximum height of h/2 after collision with the ground. Neglecting air resistance, which one of the following statements is correct about the ball’s mechanical energy?",
        options: [
            "Mechanical energy after collision is less than mechanical energy before collision.",
            "Mechanical energy of the ball increases while moving downward, but decreases while moving upward.",
            "Mechanical energy after collision is greater than mechanical energy before collision.",
            "Mechanical energy before collision is equal to after collision."
        ],
        correctAnswer: 0,
        explanation: "After the collision, the ball loses some mechanical energy, so the mechanical energy after the collision is less than before the collision.",
        topic: "Energy and Work",
        difficulty: "medium"
    },
    {
        id: 39,
        text: "A glass tube of radius 30 mm is inserted in a bowl which contains methyl iodide of density 2.28 kg/m³. If the contact angle of the methyl iodide in the tube is 30° and the surface tension is 0.26 N/m, how much height does the methyl iodide rise through the tube?",
        options: [
            "0.52 m",
            "0.66 m",
            "6.6 m",
            "0.066 m"
        ],
        correctAnswer: 3,
        explanation: "The height of the liquid rise in the tube is calculated using the formula h = (2 γ cosθ) / (ρ g r), resulting in 0.066 m.",
        topic: "Fluid Mechanics",
        difficulty: "hard"
    },
    {
        id: 40,
        text: "Two rods, one made of brass and the other made of copper, are joined end to end. The length of the brass section is 0.2 m and the length of the copper section is 0.8 m. Each segment has cross-sectional area 0.005 m². The free end of the brass segment is kept at 100°C and the free end of the copper segment is kept at 0°C. If the rate of heat flow is the same through both rods, what is the temperature of a point where the two segments are joined? (k_cu = 385 W/m.K, k_br = 109 W/m.K)",
        options: [
            "50°C",
            "10.2°C",
            "100°C",
            "53°C"
        ],
        correctAnswer: 3,
        explanation: "Using the heat conduction equation, the temperature at the junction is calculated to be 53°C.",
        topic: "Thermal Conductivity",
        difficulty: "hard"
    },
    {
        id: 41,
        text: "A pressure applied to one point in an enclosed incompressible fluid is transmitted to all parts of the fluid without reducing in value. This is the principle of",
        options: [
            "Bernoulli.",
            "Continuity.",
            "Pascal.",
            "Archimedes."
        ],
        correctAnswer: 2,
        explanation: "This is Pascal's principle, which states that pressure applied to an enclosed fluid is transmitted equally in all directions.",
        topic: "Fluid Mechanics",
        difficulty: "easy"
    },
    {
        id: 42,
        text: "Which of the following statement describes uniform motion?",
        options: [
            "An object, starting from rest, moving on a straight line to attain a velocity of 30 m/s",
            "An object moving with constant speed of 30 m/s in a straight line",
            "An object moving around a circular track with constant speed of 30 m/s",
            "An object moving at 30 m/s toward East and then 30 m/s toward North"
        ],
        correctAnswer: 1,
        explanation: "Uniform motion refers to motion at a constant speed in a straight line.",
        topic: "Kinematics",
        difficulty: "easy"
    },
    {
        id: 43,
        text: "Which of the following statement describes inertia of an object? It",
        options: [
            "is a physical quantity which has a unit of mass.",
            "makes to change state of rest of the object.",
            "increases with an increasing velocity of the object",
            "increases with increasing mass of the object."
        ],
        correctAnswer: 3,
        explanation: "Inertia is the resistance of an object to changes in its state of motion and increases with increasing mass.",
        topic: "Forces and Motion",
        difficulty: "easy"
    },
    {
        id: 44,
        text: "Two objects, object A of mass m and object B of mass 2m, are placed at heights of h₁ and h₂, respectively, from the surface of the earth. Assuming that the gravitational field strength is constant, the potential energy of object A is twice of that of object B, if",
        options: [
            "h₁ = 4h₂",
            "h₁ = 1/4 h₂",
            "h₁ = 2h₂",
            "h₁ = 1/2 h₂"
        ],
        correctAnswer: 0,
        explanation: "The potential energy is given by PE = mgh. For object A to have twice the potential energy of object B, h₁ = 4h₂.",
        topic: "Gravitation",
        difficulty: "medium"
    },
    {
        id: 45,
        text: "A car travels 60 m north and then 80 m west. What is the magnitude of the resultant displacement of the car from its starting point?",
        options: [
            "4800 m",
            "20 m",
            "140 m",
            "100 m"
        ],
        correctAnswer: 3,
        explanation: "The resultant displacement is calculated using the Pythagorean theorem: √(60² + 80²) = 100 m.",
        topic: "Vectors",
        difficulty: "easy"
    },
    {
        id: 46,
        text: "A person of mass 75 kg experiences a net force of 400 N when placed in an upward accelerating lift. What is its apparent weight?",
        options: [
            "750 N",
            "400 N",
            "1150 N",
            "350 N"
        ],
        correctAnswer: 2,
        explanation: "The apparent weight is the sum of the gravitational force and the net force: mg + F = 750 N + 400 N = 1150 N.",
        topic: "Forces and Motion",
        difficulty: "medium"
    },
    {
        id: 47,
        text: "A block of mass 20 kg is pushed horizontally, at constant speed, along a rough horizontal floor over a distance of 5 m. If coefficient of kinetic friction between the block and the surface is 0.4, what is the amount of work done by friction?",
        options: [
            "-400 J",
            "-40 J",
            "-100 J",
            "-1000 J"
        ],
        correctAnswer: 0,
        explanation: "The work done by friction is W = -μmgd = -0.4 × 20 × 10 × 5 = -400 J.",
        topic: "Work and Energy",
        difficulty: "medium"
    },
    {
        id: 48,
        text: "The velocity-time graph of an object moving along a straight line toward east is described by the figure shown below. What is the total displacement moved by the object?",
        options: [
            "600 m East",
            "525 m East",
            "375 m East",
            "450 m East"
        ],
        correctAnswer: 2,
        explanation: "The displacement is calculated by finding the area under the velocity-time graph. For the given graph, the area is a trapezoid with bases 30 m/s and 20 m/s, and height 15 s. The area is calculated as: Area = 0.5 × (30 + 20) × 15 = 375 m. Therefore, the displacement is 375 m East.",
        topic: "Kinematics",
        difficulty: "medium"
    },
    {
        id: 49,
        text: "A 200N force is required to be applied at one end of a 1m long lever, 80cm from its fulcrum, in order to lift a load of 600N placed at the other end as shown the figure below. What is the efficiency of the lever?",
        options: [
            "25%",
            "17%",
            "75%",
            "83%"
        ],
        correctAnswer: 2,
        explanation: "The efficiency of the lever is calculated using the formula: Efficiency = (Output Work / Input Work) × 100. The input work is calculated as: Input Work = Force × Distance = 200 N × 0.8 m = 160 J. The output work is calculated as: Output Work = Load × Distance = 600 N × 0.2 m = 120 J. The efficiency is then: Efficiency = (120 J / 160 J) × 100 = 75%.",
        topic: "Work and Energy",
        difficulty: "medium"
    },
    {
        id: 50,
        text: "A substance with a mass of 2kg has a volume of 2.5 × 10⁻³ m³. What is the relative density of the substance?",
        options: [
            "80",
            "8.0",
            "0.8",
            "1.25"
        ],
        correctAnswer: 2,
        explanation: "The relative density is calculated as the ratio of the density of the substance to the density of water. Density of the substance = mass / volume = 2 kg / 2.5 × 10⁻³ m³ = 800 kg/m³. Density of water = 1000 kg/m³. Relative density = 800 / 1000 = 0.8.",
        topic: "Density",
        difficulty: "medium"
    },
    {
        id: 51,
        text: "The gauge pressure at a point in a fluid at rest is defined as",
        options: [
            "the actual pressure at a given point relative to absolute vacuum.",
            "the sum of absolute pressure and atmospheric pressure.",
            "the pressure difference between the absolute pressure and the atmospheric pressure.",
            "the atmospheric pressure difference between sea level and the local area at which the fluid exists."
        ],
        correctAnswer: 2,
        explanation: "Gauge pressure is the pressure difference between the absolute pressure and the atmospheric pressure.",
        topic: "Fluid Mechanics",
        difficulty: "medium"
    },
    {
        id: 52,
        text: "How do we use a manometer to measure pressure of a given gas? We use in such a way that",
        options: [
            "the principle of the hydrostatic equilibrium is considered to measure the pressure of unknown gas.",
            "the pressure at the surface of open end manometer is the same as the gas pressure in closed tube.",
            "the gauge pressure equals the atmospheric pressure.",
            "the gauge pressure in a fluid in the open end equals the gas pressure in closed tube."
        ],
        correctAnswer: 0,
        explanation: "A manometer measures pressure by balancing the pressure of the gas against the hydrostatic pressure of a fluid column.",
        topic: "Fluid Mechanics",
        difficulty: "medium"
    },
    {
        id: 53,
        text: "Consider two balls A and B are projected with the same velocity, v₀ at angles θ₁ and θ₂, respectively, 0 < θ₁ < 45° and 45° < θ₂ < 90°. Which one of the following statements is correct about the motion of the balls?",
        options: [
            "The range of ball A is smaller than its maximum height.",
            "Ball A takes longer time than ball B to reach its maximum height.",
            "Both balls have equal speed at their respective maximum height.",
            "The two balls cover equal ranges when θ₁ + θ₂ = 90°."
        ],
        correctAnswer: 3,
        explanation: "When two projectiles are launched at angles that add up to 90 degrees, they will have the same range if their initial velocities are equal.",
        topic: "Projectile Motion",
        difficulty: "hard"
    },
    {
        id: 54,
        text: "A car initially traveling at speed of 20 m/s undergoes a constant deceleration of magnitude 1.5 m/s². If the radius of each tire is 0.3 m, how many revolutions does each tire make, without slipping, before the car comes to rest?",
        options: [
            "444.4 rev",
            "70.77 rev",
            "44.44 rev",
            "133.33 rev"
        ],
        correctAnswer: 1,
        explanation: "The number of revolutions is calculated using the formula n = v₀² / (2 a r × 2π), where v₀ is the initial speed, a is the deceleration, and r is the radius of the tire. The result is approximately 70.77 revolutions.",
        topic: "Kinematics",
        difficulty: "hard"
    },
    {
        id: 55,
        text: "A constant tangential force is applied on a rim of uniform solid disk of mass m = 50 kg and radius r = 0.5 m. If the angular speed of the disk changes by 1 rev/s within 2.0 s, what is the magnitude of the torque produced by the force? (moment of inertia of disk I = 1/2 m r²)",
        options: [
            "19.6 Nm",
            "39.3 Nm",
            "3.125 Nm",
            "8.25 Nm"
        ],
        correctAnswer: 1,
        explanation: "The torque is calculated using τ = Iα, where α is the angular acceleration. The angular acceleration is α = Δω / Δt = (2π rad/s) / 2.0 s = π rad/s². The moment of inertia is I = 1/2 m r² = 1/2 × 50 × (0.5)² = 6.25 kg·m². The torque is τ = 6.25 × π ≈ 19.6 Nm.",
        topic: "Rotational Motion",
        difficulty: "hard"
    },
    {
        id: 56,
        text: "A loop of 0.1 m wide in diameter is placed in xy-plane in uniform magnetic field of 0.6 T that is perpendicular to the plane of the loop. What is the net magnetic flux through the coil?",
        options: [
            "1.9 × 10⁻² Wb",
            "5.6 × 10⁻² Wb",
            "4.7 × 10⁻³ Wb",
            "9.4 × 10⁻³ Wb"
        ],
        correctAnswer: 3,
        explanation: "The magnetic flux is calculated using Φ = B A, where B is the magnetic field and A is the area of the loop. The area of the loop is A = π r² = π (0.05)² = 7.85 × 10⁻³ m². The flux is Φ = 0.6 × 7.85 × 10⁻³ ≈ 4.7 × 10⁻³ Wb.",
        topic: "Magnetism",
        difficulty: "medium"
    },
    {
        id: 57,
        text: "A 12 V voltage source is connected across the primary coil of a transformer having 600 turns. If the secondary coil of a transformer has 1000 turns, what voltage appears across the secondary coil?",
        options: [
            "72.0 V",
            "7.2 V",
            "12.0 V",
            "20.0 V"
        ],
        correctAnswer: 3,
        explanation: "The voltage across the secondary coil is calculated using V_s = V_p (N_s / N_p), where V_p is the primary voltage, N_s is the number of turns in the secondary coil, and N_p is the number of turns in the primary coil. V_s = 12 × (1000 / 600) = 20.0 V.",
        topic: "Electromagnetism",
        difficulty: "medium"
    },
    {
        id: 58,
        text: "The following table shows the density of different objects at 20°C. Based on the information given in the table, if we identify substances that sink and float with respect to other substance,",
        options: [
            "bone, iron and seawater will sink in water.",
            "water, gasoline and ice will sink into seawater.",
            "gasoline, ice and blood floats on the surface of water.",
            "gold, blood and copper floats in gasoline."
        ],
        correctAnswer: 2,
        explanation: "Gasoline, ice, and blood have densities less than water, so they will float on the surface of water.",
        topic: "Density",
        difficulty: "easy"
    },
    {
        id: 59,
        text: "Which one of the following statements differentiates emitter, collector and base of a transistor?",
        options: [
            "The collector region is heavily doped as compared with emitter and base.",
            "The emitter region is heavily doped as compared with base and collector.",
            "The three parts; emitter, base and collector are equally doped.",
            "The base region is heavily doped as compared with base and collector."
        ],
        correctAnswer: 1,
        explanation: "In a transistor, the emitter region is heavily doped compared to the base and collector regions.",
        topic: "Electronics",
        difficulty: "medium"
    },
    {
        id: 60,
        text: "The following figure shows a switch of circuit consisting of a battery source, two switches represented by letters A and B, and a light bulb Y. Which one of the following logic gates can be represented by equivalent switch circuit?",
        options: [
            "NAND",
            "NOR",
            "AND",
            "OR"
        ],
        correctAnswer: 2,
        explanation: "The circuit represents an AND gate because both switches A and B need to be closed for the bulb Y to light up.",
        topic: "Logic Gates",
        difficulty: "medium"
    }
];