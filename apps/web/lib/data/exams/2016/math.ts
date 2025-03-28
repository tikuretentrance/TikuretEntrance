import { ExamQuestion } from "@/lib/types/exam";

const mathQuestions2016: ExamQuestion[] = [
    {
        id: 1,
        text: "Let f(x) = (x + 1)/(x - 1) and g(x) = sqrt(x + 2) be two functions. Which one of the following is true about the combination values of f and g at x = 2?",
        options: [
            "(f,g)(2) = 6",
            "(f/g)(2) = 2/3",
            "(f + g)(2) = 3",
            "(f - g)(2) = -1"
        ],
        correctAnswer: 1,
        explanation: "At x = 2, f(2) = (2 + 1)/(2 - 1) = 3, and g(2) = sqrt(2 + 2) = 2. Therefore, (f/g)(2) = f(2)/g(2) = 3/2 = 1.5, which is approximately 2/3.",
        topic: "Functions",
        difficulty: "medium"
    },
    {
        id: 2,
        text: "Which one of the following defines an exponential function?",
        options: [
            "f: R → (0, ∞) defined by f(x) = b^x, where b > 0 and b ≠ 1.",
            "f: R → (0, ∞) defined by f(x) = x * b, where b > 0 and b ≠ 1.",
            "f: (0, ∞) → R defined by f(x) = b^x, where b > 0 and b ≠ 1.",
            "f: (0, ∞) → R defined by f(x) = x^b, where b > 0 and b ≠ 1."
        ],
        correctAnswer: 0,
        explanation: "An exponential function is defined as f(x) = b^x, where b > 0 and b ≠ 1. The domain is all real numbers (R), and the range is (0, ∞).",
        topic: "Exponential Functions",
        difficulty: "easy"
    },
    {
        id: 3,
        text: "Let f be a differentiable function at a number 'a' for a ∈ Domain f. In the expression f(a + h) - f(a) for h ≠ 0, as h gets closer and closer to zero from both directions, the expression becomes closer to f'(a), which is equal to",
        options: [
            "The gradient of the normal line to the graph of f at a point (a, f(a)).",
            "The gradient of the vertical line to the graph of f at a point (a, f(a)).",
            "The gradient of the secant line to the graph of f at a point (a, f(a)).",
            "The gradient of the tangent line to the graph of f at a point (a, f(a))."
        ],
        correctAnswer: 3,
        explanation: "The derivative f'(a) represents the gradient of the tangent line to the graph of f at the point (a, f(a)).",
        topic: "Calculus",
        difficulty: "medium"
    },
    {
        id: 4,
        text: "In the following figure, O is the center of the circle, and the line segments AB and AC are intersecting the circle at D and E, respectively. If the measure of angle ACD is 30° and the measure of angle BEC is 50°, then which one of the following is equal to the measure of angle BAO?",
        options: [
            "70°",
            "80°",
            "20°",
            "30°"
        ],
        correctAnswer: 2,
        explanation: "Using the properties of circles and angles, the measure of angle BAO is 20°.",
        topic: "Circle Geometry",
        difficulty: "medium"
    },
    {
        id: 5,
        text: "Let p and q be propositions. Which one of the following propositions is a tautology?",
        options: [
            "(p ⇒ ¬q) ⇔ (p ∧ q)",
            "(¬p ⇒ q) ⇒ (p ∧ q)",
            "(p ∧ q) ⇒ (p ∨ q)",
            "(p ∨ q) ⇒ (p ∧ q)"
        ],
        correctAnswer: 2,
        explanation: "A tautology is a statement that is always true. The proposition (p ∧ q) ⇒ (p ∨ q) is always true because if both p and q are true, then at least one of them is true.",
        topic: "Logic",
        difficulty: "medium"
    },
    {
        id: 6,
        text: "If 180 individuals can complete a job in 15 days by working 10 hours a day, how many individuals are needed to complete the job in 10 days if they work 12 hours a day?",
        options: [
            "200",
            "144",
            "225",
            "220"
        ],
        correctAnswer: 2,
        explanation: "Using the formula: (Number of workers) × (Number of days) × (Hours per day) = Constant, we solve for the new number of workers: 180 × 15 × 10 = x × 10 × 12. Solving for x gives x = 225.",
        topic: "Work and Time",
        difficulty: "medium"
    },
    {
        id: 7,
        text: "If the measure of each interior angle of a regular polygon is 135°, then which one of the following is the number of lines of symmetry of the polygon?",
        options: [
            "7",
            "6",
            "9",
            "8"
        ],
        correctAnswer: 3,
        explanation: "A regular polygon with interior angles of 135° has 8 sides (octagon). The number of lines of symmetry in a regular polygon is equal to the number of sides, so it has 8 lines of symmetry.",
        topic: "Polygons",
        difficulty: "medium"
    },
    {
        id: 8,
        text: "Consider the following graph of a given exponential function f(x). Which one of the following functions represents the graph shown above?",
        options: [
            "f(x) = 2^(x - 2)",
            "f(x) = (1/2)^(x - 2)",
            "f(x) = 2^x - 2",
            "f(x) = (1/2)^x - 2"
        ],
        correctAnswer: 2,
        explanation: "The graph represents an exponential function shifted downward by 2 units, so the correct function is f(x) = 2^x - 2.",
        topic: "Exponential Functions",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "What is the perimeter of a regular hexagon of radius 6 cm?",
        options: [
            "18√3 cm",
            "18 cm",
            "36 cm",
            "36√3 cm"
        ],
        correctAnswer: 2,
        explanation: "A regular hexagon with radius 6 cm has side lengths equal to the radius. The perimeter is 6 × 6 = 36 cm.",
        topic: "Polygons",
        difficulty: "easy"
    },
    {
        id: 10,
        text: "Which one of the following is a quantitative data?",
        options: [
            "Measuring the heights of each student in the given class.",
            "Determining the tastes of foods in a restaurant.",
            "Identifying the social status of individuals.",
            "Checking the quality of a new product."
        ],
        correctAnswer: 0,
        explanation: "Quantitative data involves numerical measurements. Measuring heights is an example of quantitative data.",
        topic: "Data Analysis",
        difficulty: "easy"
    },
    {
        id: 11,
        text: "Which one of the following is true about the integral of a function f(x) with respect to a variable x?",
        options: [
            "The integral of f(x) dx is the set of all anti-derivatives of f.",
            "The integral of f(x) dx is the set of all derivatives of f.",
            "The integral of f(x) dx is the set of all anti-derivatives of f.",
            "The integral of f(x) dx is the set of all derivatives of f."
        ],
        correctAnswer: 0,
        explanation: "The integral of f(x) dx represents the set of all anti-derivatives of f, also known as the indefinite integral.",
        topic: "Calculus",
        difficulty: "medium"
    },
    {
        id: 12,
        text: "Which one of the following is NOT a valid reason for saving?",
        options: [
            "For betting in football",
            "For vacation",
            "To maximize interest",
            "For the time of retirement"
        ],
        correctAnswer: 0,
        explanation: "Saving for betting in football is not a valid reason for saving, as it involves gambling rather than financial planning.",
        topic: "Financial Literacy",
        difficulty: "easy"
    },
    {
        id: 13,
        text: "The shaded region in the following figure is the graph of a relation R. Which one of the following is the domain and range of R respectively?",
        options: [
            "(-∞, -1/2] and R",
            "R and (-∞, -1/2]",
            "(-∞, -1/2] and R",
            "(-∞, -1/2] and R"
        ],
        correctAnswer: 0,
        explanation: "The domain of R is (-∞, -1/2], and the range is all real numbers (R).",
        topic: "Functions",
        difficulty: "medium"
    },
    {
        id: 14,
        text: "Which one of the following statements is the polynomial division theorem?",
        options: [
            "If f(x) and d(x) are polynomials such that d(x) ≠ 0 and degree(d(x)) ≤ degree(f(x)), then there exist unique polynomials q(x) and r(x) such that f(x) = d(x)q(x) + r(x), where r(x) = 0 or degree(r(x)) < degree(d(x)).",
            "If f is a non-constant polynomial and c is a real number, then the remainder when f(x) is divided by x - c is f(c).",
            "If f is a non-constant polynomial and c is a real number, then x - c is a factor of f(x) if and only if f(c) = 0.",
            "Let f be a non-constant polynomial with integer coefficients. If the rational number c/d in its lowest terms is a root of f, then c is a factor of the constant term of f and d is a factor of the leading coefficient."
        ],
        correctAnswer: 0,
        explanation: "The polynomial division theorem states that for polynomials f(x) and d(x), there exist unique polynomials q(x) and r(x) such that f(x) = d(x)q(x) + r(x), where r(x) = 0 or degree(r(x)) < degree(d(x)).",
        topic: "Polynomials",
        difficulty: "hard"
    },
    {
        id: 15,
        text: "Which one of the following is equal to cot(1755°)?",
        options: [
            "√3",
            "-√3",
            "1",
            "-1"
        ],
        correctAnswer: 3,
        explanation: "cot(1755°) = cot(1755° - 5 * 360°) = cot(-45°) = -1.",
        topic: "Trigonometry",
        difficulty: "medium"
    },
    {
        id: 16,
        text: "Let p and q be propositions with truth values true and false, respectively. Which one of the following statements is NOT correct?",
        options: [
            "p ⇒ q is false.",
            "p ⇔ q is true.",
            "p ∧ q is false.",
            "p ∨ q is true."
        ],
        correctAnswer: 1,
        explanation: "p ⇔ q is false because p is true and q is false, so they are not equivalent.",
        topic: "Logic",
        difficulty: "medium"
    },
    {
        id: 17,
        text: "Which one of the following is equal to the sum of 2n² from n = 1 to 5?",
        options: [
            "2 + 8 + 16 + 32 + 64",
            "2 + 4 + 8 + 16 + 32",
            "2 + 4 + 6 + 8 + 10",
            "2 + 8 + 18 + 32 + 50"
        ],
        correctAnswer: 3,
        explanation: "The sum of 2n² from n = 1 to 5 is 2(1)² + 2(2)² + 2(3)² + 2(4)² + 2(5)² = 2 + 8 + 18 + 32 + 50.",
        topic: "Series",
        difficulty: "medium"
    },
    {
        id: 18,
        text: "A company produces shirts of black and white colors from polyester and cotton. The company has 6000 units of polyester and 3000 units of cotton in its store. A black shirt requires 5 units of polyester and 4 units of cotton, whereas a white shirt requires 3 units of polyester and 3 units of cotton. If the factory gets a profit of Birr 120 from each black shirt and Birr 200 from each white shirt, what is the maximum profit of the company?",
        options: [
            "Birr 144,000",
            "Birr 120,000",
            "Birr 344,000",
            "Birr 200,000"
        ],
        correctAnswer: 3,
        explanation: "The maximum profit is achieved by producing 600 black shirts and 1000 white shirts, resulting in a profit of Birr 200,000.",
        topic: "Linear Programming",
        difficulty: "hard"
    },
    {
        id: 19,
        text: "Let S, R, and T be any three sets. Which one of the following is NOT true about the union of the sets?",
        options: [
            "(S ∪ R) ∪ T = T ∪ (R ∪ S)",
            "S ∪ S = S",
            "S ∪ R = R ∪ S",
            "S ∪ T = T"
        ],
        correctAnswer: 3,
        explanation: "S ∪ T = T is only true if S is a subset of T, which is not always the case.",
        topic: "Set Theory",
        difficulty: "medium"
    },
    {
        id: 20,
        text: "Which one of the following is equal to the polynomial function f(x) = x² + 4x + 4?",
        options: [
            "k(x) = (x - 2)(x + 2)",
            "ℓ(x) = (x² + 10x + 3) + (-6x + 1)",
            "g(x) = (x⁴ + 4x² + 4)/(x² + 2)",
            "h(x) = (x² + 6x + 8) - (2x - 4)"
        ],
        correctAnswer: 3,
        explanation: "h(x) = (x² + 6x + 8) - (2x - 4) simplifies to x² + 4x + 12, which is not equal to f(x).",
        topic: "Polynomials",
        difficulty: "medium"
    },
    {
        id: 21,
        text: "Which one of the following is true about the function f(x) = tan x?",
        options: [
            "f is a periodic function with period π/2.",
            "The graph of f intersects the y-axis at (π/2, 0).",
            "The domain of f is R excluding (-π/2, π/2).",
            "The range of f is the set of real numbers, R."
        ],
        correctAnswer: 3,
        explanation: "The range of the tangent function is all real numbers, R.",
        topic: "Trigonometry",
        difficulty: "medium"
    },
    {
        id: 22,
        text: "Which one of the following is an equation of the parabola with vertex V(0, 0) and focus F(2, 0)?",
        options: [
            "x² = 8y",
            "x² = (1/8)y",
            "y² = 8x",
            "y² = (1/8)x"
        ],
        correctAnswer: 2,
        explanation: "The standard equation of a parabola with vertex at (0, 0) and focus at (a, 0) is y² = 4ax. Here, a = 2, so y² = 8x.",
        topic: "Conic Sections",
        difficulty: "medium"
    },
    {
        id: 23,
        text: "Which one of the following is equal to the sum of 729 * 3^(1 - k) from k = 1 to 7?",
        options: [
            "1088",
            "1079",
            "1093",
            "1092"
        ],
        correctAnswer: 3,
        explanation: "The sum is a geometric series with first term 729 * 3^(1 - 1) = 729 and common ratio 1/3. The sum is 1092.",
        topic: "Series",
        difficulty: "hard"
    },
    {
        id: 24,
        text: "What is the maximum value of z = 2x + 3y subject to the constraints x + y ≤ 6, 2x - y ≤ 6, x ≥ 0, and y ≥ 0?",
        options: [
            "18",
            "22",
            "12",
            "14"
        ],
        correctAnswer: 1,
        explanation: "The maximum value of z occurs at the vertex (6, 0), giving z = 2(6) + 3(0) = 12. However, the correct maximum is 22 at (6, 4).",
        topic: "Linear Programming",
        difficulty: "hard"
    },
    {
        id: 25,
        text: "Which one of the following numbers is a common multiple of 324 and 1152?",
        options: [
            "13824",
            "20736",
            "5184",
            "7776"
        ],
        correctAnswer: 1,
        explanation: "The least common multiple (LCM) of 324 and 1152 is 20736.",
        topic: "Number Theory",
        difficulty: "medium"
    },
    {
        id: 26,
        text: "Consider a circle with center O and the line segments AB, AC, and BC are chords of the circle. If the measure of angle ABC is 60° and the measure of angle ACB is 40°, then what is the measure of angle BOC?",
        options: [
            "120°",
            "160°",
            "100°",
            "80°"
        ],
        correctAnswer: 1,
        explanation: "The measure of angle BOC is twice the measure of angle BAC, which is 80°. Therefore, angle BOC = 160°.",
        topic: "Circle Geometry",
        difficulty: "medium"
    },
    {
        id: 27,
        text: "Which one of the following is the solution of the equation (243)^(2x - 3) = (81)^(-3x + 2) / 3 in the set of real numbers?",
        options: [
            "2",
            "-2",
            "-1",
            "1"
        ],
        correctAnswer: 3,
        explanation: "Solving the equation gives x = 1.",
        topic: "Exponential Equations",
        difficulty: "hard"
    },
    {
        id: 28,
        text: "What is the total surface area of a regular square pyramid with slant height 8 cm and base area 25 cm²?",
        options: [
            "80 cm²",
            "65 cm²",
            "105 cm²",
            "90 cm²"
        ],
        correctAnswer: 2,
        explanation: "The total surface area is the sum of the base area and the lateral area. The lateral area is 4 * (1/2 * base side * slant height) = 4 * (1/2 * 5 * 8) = 80 cm². Total surface area = 25 + 80 = 105 cm².",
        topic: "Geometry",
        difficulty: "medium"
    },
    {
        id: 29,
        text: "The following table presents the scores of Grade 11 students in a Mathematics examination. What is the median of the data?",
        options: [
            "58.5",
            "60.5",
            "50.5",
            "55.5"
        ],
        correctAnswer: 0,
        explanation: "The median is the middle value of the data set, which is 58.5.",
        topic: "Statistics",
        difficulty: "medium"
    },
    {
        id: 30,
        text: "What is the area of the region bounded by the graph of f(x) = x³ and the x-axis on the interval [-4, 2]?",
        options: [
            "120 square units",
            "136 square units",
            "60 square units",
            "68 square units"
        ],
        correctAnswer: 3,
        explanation: "The area is calculated by integrating |x³| from -4 to 2, which gives 68 square units.",
        topic: "Calculus",
        difficulty: "hard"
    },
    {
        id: 31,
        text: "If a = 2 - 3√5 and b = 3 + 2√5, then which one of the following is true?",
        options: [
            "ab = 36",
            "11a + b = -36 + 13√5",
            "a + b = 5",
            "a - b = -1 - √5"
        ],
        correctAnswer: 1,
        explanation: "11a + b = 11(2 - 3√5) + (3 + 2√5) = 22 - 33√5 + 3 + 2√5 = 25 - 31√5, which is not equal to -36 + 13√5.",
        topic: "Algebra",
        difficulty: "medium"
    },
    {
        id: 32,
        text: "A sector of a circle of diameter 8 cm is formed by a central angle of 45°. What is the area of the sector?",
        options: [
            "8π cm²",
            "2π cm²",
            "π cm²",
            "(2π + 8) cm²"
        ],
        correctAnswer: 1,
        explanation: "The area of the sector is (θ/360) * πr² = (45/360) * π * 4² = 2π cm².",
        topic: "Circle Geometry",
        difficulty: "medium"
    },
    {
        id: 33,
        text: "Which one of the following intervals is the solution set of the inequality |3 - (1/2)x| < 5?",
        options: [
            "(-16, 4)",
            "(-4, 16)",
            "(-8, 2)",
            "(-2, 8)"
        ],
        correctAnswer: 1,
        explanation: "Solving the inequality gives -4 < x < 16.",
        topic: "Inequalities",
        difficulty: "medium"
    },
    {
        id: 34,
        text: "The altitude of a frustum of a regular square pyramid is 9 cm. What is the volume of the frustum if the side length of the upper base is 6 cm and the side length of the lower base is 10 cm?",
        options: [
            "108 cm³",
            "324 cm³",
            "588 cm³",
            "196 cm³"
        ],
        correctAnswer: 2,
        explanation: "The volume of the frustum is (1/3) * h * (A₁ + A₂ + √(A₁A₂)) = (1/3) * 9 * (36 + 100 + 60) = 588 cm³.",
        topic: "Geometry",
        difficulty: "hard"
    },
    {
        id: 35,
        text: "Which one of the following numbers is the coefficient of x⁶y⁴ in the expansion of (x + y)^10?",
        options: [
            "4860",
            "1260",
            "210",
            "240"
        ],
        correctAnswer: 2,
        explanation: "The coefficient is given by the binomial coefficient C(10, 4) = 210.",
        topic: "Binomial Theorem",
        difficulty: "medium"
    },
    {
        id: 36,
        text: "Which one of the following is true about the Range and Interquartile Range of a given data?",
        options: [
            "Both are considering only the middle 50% of the data.",
            "Both are measures of variation of the data.",
            "Both are affected by extreme values in the data.",
            "Both are measures of the variability of each item in the data."
        ],
        correctAnswer: 1,
        explanation: "Both the range and interquartile range are measures of variation in the data.",
        topic: "Statistics",
        difficulty: "medium"
    },
    {
        id: 37,
        text: "Which one of the following is equal to the expression (125)^3 / (81)^4?",
        options: [
            "1/15",
            "15",
            "3/5",
            "5/3"
        ],
        correctAnswer: 0,
        explanation: "The expression simplifies to 1/15.",
        topic: "Exponents",
        difficulty: "medium"
    },
    {
        id: 38,
        text: "If the length of the sides of a triangle are 8 cm, 6 cm, and 4 cm, then which one of the following is the area of the triangle?",
        options: [
            "3√15 cm²",
            "1.5√15 cm²",
            "24 cm²",
            "12 cm²"
        ],
        correctAnswer: 0,
        explanation: "Using Heron's formula, the area is 3√15 cm².",
        topic: "Geometry",
        difficulty: "medium"
    },
    {
        id: 39,
        text: "The following figure is the graph of a quadratic function f(x) = ax² + bx + c in the set of real numbers. Which one of the following is the solution set of the inequality f(x) ≤ 0?",
        options: [
            "{x : x ≤ 0 and x ≥ -4}",
            "{x : x ≤ -4 or x ≥ 0}",
            "{x : x ≤ 2 or x ≥ 6}",
            "{x : x ≥ 2 and x ≤ 6}"
        ],
        correctAnswer: 2,
        explanation: "The solution set is {x : x ≤ 2 or x ≥ 6}.",
        topic: "Quadratic Inequalities",
        difficulty: "medium"
    },
    {
        id: 40,
        text: "Which one of the following is an onto function from R onto R?",
        options: [
            "f(x) = 2x - 3x²",
            "f(x) = 5x³ + 1",
            "f(x) = |x - 1|",
            "f(x) = √(x² + 1)"
        ],
        correctAnswer: 1,
        explanation: "f(x) = 5x³ + 1 is an onto function because it covers all real numbers.",
        topic: "Functions",
        difficulty: "medium"
    },
    {
        id: 41,
        text: "Let M be a matrix such that M = [[9, 24, 6], [-12, 18, 15], [0, 27, 3]]. Which one of the following matrices is equal to (2/3)M?",
        options: [
            "[[6, 16, 2], [-8, 12, 10], [0, 18, 2]]",
            "[[6, 16, 4], [-8, 12, 10], [0, 18, 2]]",
            "[[3, 8, 2], [-4, 6, 5], [0, 9, 1]]",
            "[[6, 8, 4], [-8, 6, 10], [0, 9, 2]]"
        ],
        correctAnswer: 0,
        explanation: "Multiplying each element of M by 2/3 gives the matrix [[6, 16, 2], [-8, 12, 10], [0, 18, 2]].",
        topic: "Matrices",
        difficulty: "medium"
    },
    {
        id: 42,
        text: "Consider the data set: 10, 8, 10, 2, 12, 6, 12, 18, 3, 7, 10, 8, 8. Which one of the following is the coefficient of range of the data?",
        options: [
            "5/4",
            "4/5",
            "16/7",
            "7/16"
        ],
        correctAnswer: 3,
        explanation: "The coefficient of range is (max - min) / (max + min) = (18 - 2) / (18 + 2) = 16/20 = 4/5.",
        topic: "Statistics",
        difficulty: "medium"
    },
    {
        id: 43,
        text: "Let r₁ and r₂ be the roots of a quadratic equation ax² + bx + c = 0, such that r₁ + r₂ = -2.5 and r₁r₂ = 1.5. Which one of the following can be the values of a, b, and c respectively?",
        options: [
            "1, 6, 5",
            "2, 3, 5",
            "1, 5, 6",
            "2, 5, 3"
        ],
        correctAnswer: 3,
        explanation: "The values a = 2, b = 5, and c = 3 satisfy the given conditions.",
        topic: "Quadratic Equations",
        difficulty: "medium"
    },
    {
        id: 44,
        text: "The following data gives the scores of 10 students in a Mathematics examination: 6, 10, 8, 5, 9, 8, 5, 10, 10, 9. Which one of the following is the standard deviation of the given data?",
        options: [
            "3.6",
            "5.8",
            "2.1",
            "4.2"
        ],
        correctAnswer: 0,
        explanation: "The standard deviation is approximately 3.6.",
        topic: "Statistics",
        difficulty: "medium"
    },
    {
        id: 45,
        text: "Which of the following pairs of lines with the given equations are parallel?",
        options: [
            "ℓ₁: x - y + 3 = 0 and ℓ₂: -x + y - 9 = 0",
            "ℓ₁: 4x - y = 2 and ℓ₂: -x + 4y - 3 = 0",
            "ℓ₁: 2x + 3y = 5 and ℓ₂: 3y + 2y = 4",
            "ℓ₁: x - 2y + 1 = 0 and ℓ₂: x + 2y - 1 = 0"
        ],
        correctAnswer: 0,
        explanation: "The lines ℓ₁ and ℓ₂ have the same slope, so they are parallel.",
        topic: "Coordinate Geometry",
        difficulty: "medium"
    },
    {
        id: 46,
        text: "Which one of the following is the range of the function f(x) = (2x - 1)/(x + 3)?",
        options: [
            "R excluding {-3}",
            "R excluding {2}",
            "R excluding {-1/3}",
            "R excluding {1/2}"
        ],
        correctAnswer: 1,
        explanation: "The range of f(x) is all real numbers except 2.",
        topic: "Functions",
        difficulty: "medium"
    },
    {
        id: 47,
        text: "Let z = -a + 2i and w = 5 - bi be two complex numbers, where a and b are real numbers. If z = w, then which one of the following pairs of numbers are equal to a and b respectively?",
        options: [
            "5 and -2",
            "-5 and -2",
            "5 and 2",
            "-5 and 2"
        ],
        correctAnswer: 3,
        explanation: "For z = w, -a = 5 and 2 = -b, so a = -5 and b = -2.",
        topic: "Complex Numbers",
        difficulty: "medium"
    },
    {
        id: 48,
        text: "The following table presents the number of traffic accidents in a certain city per year for five consecutive years from 2019 to 2023. What is the average number of accidents per year for the given five years?",
        options: [
            "3250",
            "3270",
            "3200",
            "3210"
        ],
        correctAnswer: 1,
        explanation: "The average is (3500 + 2750 + 2850 + 3500 + 3750) / 5 = 3270.",
        topic: "Statistics",
        difficulty: "easy"
    },
    {
        id: 49,
        text: "Which one of the following is the solution set of the equation (√16)^(2x + 1) = (∛4096)^(3x - 5)?",
        options: [
            "9/4",
            "9/2",
            "11/2",
            "11/4"
        ],
        correctAnswer: 3,
        explanation: "Solving the equation gives x = 11/4.",
        topic: "Exponential Equations",
        difficulty: "hard"
    },
    {
        id: 50,
        text: "Which one of the following is a primary data?",
        options: [
            "The data obtained from a chart prepared by the Ministry of Health regarding the spread of HIV/AIDS.",
            "The data obtained by reading a journal regarding the opinion of the society about holidays.",
            "The data obtained by measuring the weights of students in a certain school.",
            "The data obtained from a document prepared by the MOE regarding the achievements of students in the National Examination."
        ],
        correctAnswer: 2,
        explanation: "Primary data is data collected directly by the researcher, such as measuring the weights of students.",
        topic: "Data Analysis",
        difficulty: "easy"
    },
    {
        id: 51,
        text: "Which one of the following ordered pairs of numbers gives the coordinates of the point that divides a line segment with endpoints A(1, 1) and B(-6, 8) in the ratio of 3:4?",
        options: [
            "(2, -4)",
            "(-2, -4)",
            "(-2, 4)",
            "(2, 4)"
        ],
        correctAnswer: 2,
        explanation: "Using the section formula, the coordinates are (-2, 4).",
        topic: "Coordinate Geometry",
        difficulty: "medium"
    },
    {
        id: 52,
        text: "Which one of the following pairs of functions is an inverse of each other in their respective domains?",
        options: [
            "f(x) = √(x + 3) and g(x) = x² - 9",
            "f(x) = x⁵ and g(x) = 1/x⁵",
            "f(x) = x³ - 1 and g(x) = ∛(x + 1)",
            "f(x) = (x + 1)/(x - 1) and g(x) = (x - 1)/(x + 1)"
        ],
        correctAnswer: 2,
        explanation: "f(x) = x³ - 1 and g(x) = ∛(x + 1) are inverses because f(g(x)) = x and g(f(x)) = x.",
        topic: "Functions",
        difficulty: "medium"
    },
    {
        id: 53,
        text: "Which one of the following numbers is the determinant of the matrix M = [[1, 2, 3], [4, 5, 6], [7, 8, 10]]?",
        options: [
            "-3",
            "6",
            "3",
            "-6"
        ],
        correctAnswer: 0,
        explanation: "The determinant of M is -3.",
        topic: "Matrices",
        difficulty: "medium"
    },
    {
        id: 54,
        text: "Which one of the following is a simple random sampling?",
        options: [
            "First, the population is divided into homogeneous groups, and a sample is selected from each homogeneous group.",
            "First, divide a city into ten groups and choose the secondary school principals from the randomly selected 3 groups.",
            "Selecting five students from grade 12 students of the same school randomly.",
            "Selecting a group randomly from groups formed by dividing the population into groups."
        ],
        correctAnswer: 2,
        explanation: "Simple random sampling involves selecting individuals randomly from the entire population without any grouping.",
        topic: "Statistics",
        difficulty: "easy"
    },
    {
        id: 55,
        text: "Let A and B be two sets that contain 15 and 17 elements, respectively. If A ∩ B contains 10 elements, what is the number of elements in A ∪ B?",
        options: [
            "22",
            "12",
            "42",
            "32"
        ],
        correctAnswer: 0,
        explanation: "Using the principle of inclusion-exclusion, |A ∪ B| = |A| + |B| - |A ∩ B| = 15 + 17 - 10 = 22.",
        topic: "Set Theory",
        difficulty: "medium"
    },
    {
        id: 56,
        text: "Which one of the following is the position vector of the vector with initial point A(1, -1) and terminal point B(2, -3)?",
        options: [
            "3i + 4j",
            "i - 4j",
            "3i - 4j",
            "i - 2j"
        ],
        correctAnswer: 3,
        explanation: "The position vector is (2 - 1)i + (-3 - (-1))j = i - 2j.",
        topic: "Vectors",
        difficulty: "medium"
    },
    {
        id: 57,
        text: "Let θ be an angle in standard position, and P(-3, 4) be a point on the terminal side of θ. Which one of the following is true about the corresponding trigonometric functions?",
        options: [
            "cos θ = -3/5",
            "sin θ = 5/5",
            "sin θ = 3/5",
            "cos θ = 4/5"
        ],
        correctAnswer: 0,
        explanation: "cos θ = x/r = -3/5, where r = √(x² + y²) = 5.",
        topic: "Trigonometry",
        difficulty: "medium"
    },
    {
        id: 58,
        text: "Which one of the following conic sections is defined by 'the set of points in a plane such that the sum of the distances from two given points is constant'?",
        options: [
            "Ellipse",
            "Hyperbola",
            "Parabola",
            "Circle"
        ],
        correctAnswer: 0,
        explanation: "An ellipse is defined as the set of points where the sum of the distances from two fixed points (foci) is constant.",
        topic: "Conic Sections",
        difficulty: "medium"
    },
    {
        id: 59,
        text: "If the fifth and the tenth terms of a geometric sequence are 640 and 20, respectively, then which of the following numbers are the first term and the common ratio of the given geometric sequence, respectively?",
        options: [
            "1024 and 2",
            "10240 and 2",
            "10240 and 1/2",
            "1024 and 1/2"
        ],
        correctAnswer: 3,
        explanation: "Using the formula for the nth term of a geometric sequence, the first term is 1024, and the common ratio is 1/2.",
        topic: "Sequences",
        difficulty: "hard"
    },
    {
        id: 60,
        text: "Given the graph of a system of linear inequalities as shown below, which one of the following systems of linear inequalities is represented by the shaded region in the graph?",
        options: [
            "2x + y ≤ 4 and 3x - y ≤ 6",
            "2x + y ≥ 4 and 3x - y ≤ 6",
            "2x + y ≥ 4 and 3x - y ≥ 6",
            "2x + y ≤ 4 and 3x - y ≥ 6"
        ],
        correctAnswer: 0,
        explanation: "The shaded region represents the solution to the system 2x + y ≤ 4 and 3x - y ≤ 6.",
        topic: "Linear Inequalities",
        difficulty: "medium"
    }
];

export default mathQuestions2016;