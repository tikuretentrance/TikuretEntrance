import { PracticeQuestion } from "@/lib/types/practice";

const mathQuestionsUnit1_and_2: PracticeQuestion[] = [
    {
        id: 1,
        text: "What is the 5th term of the sequence defined by a_n = 2n - 1?",
        options: ["3", "7", "9", "11"],
        correctAnswer: 2,
        explanation: "Substitute n = 5 into the formula: a_5 = 2(5) - 1 = 9",
        topic: "Sequences",
        difficulty: "easy"
    },
    {
        id: 2,
        text: "Find the common difference of the arithmetic sequence: 2, 5, 8, 11,...",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "The common difference is the difference between consecutive terms: 5 - 2 = 3",
        topic: "Arithmetic Sequences",
        difficulty: "easy"
    },
    {
        id: 3,
        text: "What is the next term in the geometric sequence: 3, 6, 12, 24,...",
        options: ["36", "48", "60", "72"],
        correctAnswer: 1,
        explanation: "The common ratio is 2 (each term is multiplied by 2). So, 24 * 2 = 48",
        topic: "Geometric Sequences",
        difficulty: "easy"
    },
    {
        id: 4,
        text: "Evaluate the sum: Σ(i) from i=1 to 4",
        options: ["6", "8", "10", "15"],
        correctAnswer: 2,
        explanation: "1 + 2 + 3 + 4 = 10",
        topic: "Sigma Notation",
        difficulty: "easy"
    },
    {
        id: 5,
        text: "The sum of the first n terms of an arithmetic sequence is given by Sn = (n/2)(2a + (n-1)d). If a = 1 and d = 2, find S5.",
        options: ["15", "20", "25", "30"],
        correctAnswer: 2,
        explanation: "S5 = (5/2)(2(1) + (5-1)2) = (5/2)(2 + 8) = 25",
        topic: "Arithmetic Series",
        difficulty: "medium"
    },
    {
        id: 6,
        text: "Find the 10th term of the sequence: 1, 1, 2, 3, 5, 8,...",
        options: ["21", "34", "55", "89"],
        correctAnswer: 2,
        explanation: "This is the Fibonacci sequence. The 10th term is 55.",
        topic: "Sequences",
        difficulty: "medium"
    },
    {
        id: 7,
        text: "Determine the sum of the infinite geometric series: 4 + 2 + 1 + 1/2 + ...",
        options: ["6", "8", "10", "∞"],
        correctAnswer: 1,
        explanation: "The sum of an infinite geometric series is a / (1 - r) = 4 / (1 - 1/2) = 8",
        topic: "Infinite Series",
        difficulty: "medium"
    },
    {
        id: 8,
        text: "A ball is dropped from a height of 16 meters. Each time it hits the ground, it bounces to 1/2 of its previous height. What is the total vertical distance the ball travels?",
        options: ["32m", "48m", "64m", "∞"],
        correctAnswer: 1,
        explanation: "Total distance = 16 + 2 * (16 * 1/2 + 16 * (1/2)^2 + ...) = 16 + 2 * 16 * (1/2 / (1 - 1/2)) = 48",
        topic: "Infinite Series Application",
        difficulty: "hard"
    },
    {
        id: 9,
        text: "If f(x) = 3x^2 - 2x + 1, find f'(x).",
        options: ["3x - 2", "6x - 2", "6x - 1", "x^3 - x^2 + x"],
        correctAnswer: 1,
        explanation: "Using the power rule, f'(x) = 6x - 2",
        topic: "Introduction to Derivatives",
        difficulty: "easy"
    },
    {
        id: 10,
        text: "Find the derivative of y = 5x^4 - 3x^3 + 6x - 2.",
        options: ["20x^3 - 9x^2 + 6", "20x^3 - 3x^2 + 6", "20x^4 - 9x^3 + 6x", "5x^3 - 3x^2 + 6"],
        correctAnswer: 0,
        explanation: "Applying the power rule to each term, dy/dx = 20x^3 - 9x^2 + 6",
        topic: "Introduction to Derivatives",
        difficulty: "easy"
    },
    {
        id: 11,
        text: "Determine the derivative of f(x) = √x.",
        options: ["1/(2√x)", "2√x", "1/√x", "x^(3/2)"],
        correctAnswer: 0,
        explanation: "f(x) = x^(1/2), so f'(x) = (1/2)x^(-1/2) = 1/(2√x)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 12,
        text: "If y = sin(x), what is dy/dx?",
        options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        correctAnswer: 0,
        explanation: "The derivative of sin(x) is cos(x)",
        topic: "Introduction to Derivatives",
        difficulty: "easy"
    },
    {
        id: 13,
        text: "Find the derivative of f(x) = e^(2x).",
        options: ["e^(2x)", "2e^(2x)", "e^(2)", "2e^x"],
        correctAnswer: 1,
        explanation: "Using the chain rule, f'(x) = 2e^(2x)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 14,
        text: "What is the derivative of y = ln(x)?",
        options: ["1/x", "ln(x)", "e^x", "-1/x"],
        correctAnswer: 0,
        explanation: "The derivative of ln(x) is 1/x",
        topic: "Introduction to Derivatives",
        difficulty: "easy"
    },
    {
        id: 15,
        text: "Determine the slope of the tangent line to the curve y = x^2 at x = 2.",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
        explanation: "dy/dx = 2x. At x = 2, the slope is 2(2) = 4",
        topic: "Application of Derivative",
        difficulty: "medium"
    },
    {
        id: 16,
        text: "Find the maximum value of the function f(x) = -x^2 + 4x + 3.",
        options: ["3", "4", "7", "10"],
        correctAnswer: 2,
        explanation: "f'(x) = -2x + 4 = 0 => x = 2. f(2) = -4 + 8 + 3 = 7",
        topic: "Application of Derivative",
        difficulty: "medium"
    },
    {
        id: 17,
        text: "An object's height is given by h(t) = -5t^2 + 20t. What is the object's maximum height?",
        options: ["10", "15", "20", "25"],
        correctAnswer: 2,
        explanation: "h'(t) = -10t + 20 = 0 => t = 2. h(2) = -5(4) + 40 = 20",
        topic: "Application of Derivative",
        difficulty: "medium"
    },
    {
        id: 18,
        text: "Calculate the integral of ∫2x dx.",
        options: ["2 + C", "x^2 + C", "x + C", "2x^2 + C"],
        correctAnswer: 1,
        explanation: "The integral of 2x is x^2 + C",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 19,
        text: "Evaluate ∫(3x^2 + 1) dx.",
        options: ["x^3 + x + C", "6x + C", "x^3 + C", "3x^3 + x + C"],
        correctAnswer: 0,
        explanation: "The integral of 3x^2 + 1 is x^3 + x + C",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 20,
        text: "Determine ∫(1/x) dx.",
        options: ["ln|x| + C", "x^-1 + C", "-1/x^2 + C", "x + C"],
        correctAnswer: 0,
        explanation: "The integral of 1/x is ln|x| + C",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 21,
        text: "Find the integral of ∫e^x dx.",
        options: ["e^x + C", "xe^x + C", "e^(x+1) + C", "e^(x-1) + C"],
        correctAnswer: 0,
        explanation: "The integral of e^x is e^x + C",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 22,
        text: "Evaluate the definite integral ∫(2x) from 0 to 2.",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
        explanation: "[x^2] from 0 to 2 = 2^2 - 0^2 = 4",
        topic: "Introduction to Integration",
        difficulty: "medium"
    },
    {
        id: 23,
        text: "Calculate the area under the curve y = x^2 from x = 0 to x = 3.",
        options: ["3", "6", "9", "27"],
        correctAnswer: 2,
        explanation: "∫(x^2) from 0 to 3 = [x^3/3] from 0 to 3 = 27/3 - 0 = 9",
        topic: "Application of Integration",
        difficulty: "medium"
    },
    {
        id: 24,
        text: "What is the 8th term of the arithmetic sequence if the first term is -2 and the common difference is 3?",
        options: ["16", "19", "22", "25"],
        correctAnswer: 1,
        explanation: "a_n = a_1 + (n-1)d => a_8 = -2 + (8-1)3 = -2 + 21 = 19",
        topic: "Arithmetic Sequences",
        difficulty: "medium"
    },
    {
        id: 25,
        text: "If the 3rd term of a geometric sequence is 12 and the common ratio is 2, what is the first term?",
        options: ["1", "3", "4", "6"],
        correctAnswer: 1,
        explanation: "a_n = a_1 * r^(n-1) => 12 = a_1 * 2^(3-1) => a_1 = 12 / 4 = 3",
        topic: "Geometric Sequences",
        difficulty: "medium"
    },
    {
        id: 26,
        text: "Find the sum of the first 6 terms of the geometric sequence: 2, 4, 8, ...",
        options: ["64", "126", "252", "510"],
        correctAnswer: 2,
        explanation: "S_n = a_1 * (1 - r^n) / (1 - r) => S_6 = 2 * (1 - 2^6) / (1 - 2) = 2 * (-63) / -1 = 126",
        topic: "Geometric Series",
        difficulty: "medium"
    },
    {
        id: 27,
        text: "What is the sum of the infinite geometric series: 9 + 3 + 1 + 1/3 + ...?",
        options: ["12", "13.5", "15", "∞"],
        correctAnswer: 1,
        explanation: "S = a / (1 - r) = 9 / (1 - 1/3) = 9 / (2/3) = 13.5",
        topic: "Infinite Series",
        difficulty: "medium"
    },
    {
        id: 28,
        text: "If f(x) = 4x^3 - 5x^2 + 2x - 7, find f'(2).",
        options: ["15", "19", "23", "27"],
        correctAnswer: 1,
        explanation: "f'(x) = 12x^2 - 10x + 2 => f'(2) = 12(4) - 10(2) + 2 = 48 - 20 + 2 = 30",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 29,
        text: "Determine the equation of the tangent line to y = x^2 - 3x at x = 1.",
        options: ["y = -x - 2", "y = -x + 2", "y = x - 2", "y = x + 2"],
        correctAnswer: 1,
        explanation: "dy/dx = 2x - 3. At x = 1, slope = -1. y(1) = 1 - 3 = -2. y + 2 = -1(x - 1) => y = -x - 1",
        topic: "Application of Derivative",
        difficulty: "hard"
    },
    {
        id: 30,
        text: "Find the minimum value of f(x) = x^3 - 3x^2 + 1.",
        options: ["-1", "-2", "-3", "-4"],
        correctAnswer: 3,
        explanation: "f'(x) = 3x^2 - 6x = 0 => x = 0, 2. f''(x) = 6x - 6. f''(2) = 6 > 0 (min). f(2) = 8 - 12 + 1 = -3",
        topic: "Application of Derivative",
        difficulty: "hard"
    },
    {
        id: 31,
        text: "Evaluate ∫(4x^3 - 2x + 5) dx.",
        options: ["x^4 - x^2 + 5x + C", "12x^2 - 2 + C", "4x^4 - 2x^2 + 5x + C", "x^3 - x^2 + 5x + C"],
        correctAnswer: 0,
        explanation: "The integral of 4x^3 - 2x + 5 is x^4 - x^2 + 5x + C",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 32,
        text: "Calculate the definite integral ∫(e^x + 1) from 0 to 1.",
        options: ["e", "e + 1", "e - 1", "e - 2"],
        correctAnswer: 0,
        explanation: "[e^x + x] from 0 to 1 = (e^1 + 1) - (e^0 + 0) = e + 1 - 1 = e",
        topic: "Introduction to Integration",
        difficulty: "medium"
    },
    {
        id: 33,
        text: "Find the area bounded by the curve y = x^2 and the line y = 4.",
        options: ["8/3", "16/3", "32/3", "64/3"],
        correctAnswer: 2,
        explanation: "∫(4 - x^2) from -2 to 2 = [4x - x^3/3] from -2 to 2 = (8 - 8/3) - (-8 + 8/3) = 32/3",
        topic: "Application of Integration",
        difficulty: "hard"
    },
    {
        id: 34,
        text: "What is the 12th term of the arithmetic sequence: 5, 1, -3, ...?",
        options: ["-31", "-35", "-39", "-43"],
        correctAnswer: 0,
        explanation: "a_n = a_1 + (n-1)d => a_12 = 5 + (12-1)(-4) = 5 - 44 = -39",
        topic: "Arithmetic Sequences",
        difficulty: "medium"
    },
    {
        id: 35,
        text: "The first term of a geometric sequence is 4 and the common ratio is -1/2. Find the 6th term.",
        options: ["-1/8", "1/8", "-1/4", "1/4"],
        correctAnswer: 1,
        explanation: "a_n = a_1 * r^(n-1) => a_6 = 4 * (-1/2)^5 = 4 * (-1/32) = -1/8",
        topic: "Geometric Sequences",
        difficulty: "medium"
    },
    {
        id: 36,
        text: "Calculate the sum of the first 5 terms of the series: Σ(2i + 1) from i=1 to 5.",
        options: ["25", "30", "35", "40"],
        correctAnswer: 0,
        explanation: "(2(1) + 1) + (2(2) + 1) + ... + (2(5) + 1) = 3 + 5 + 7 + 9 + 11 = 35",
        topic: "Sigma Notation and Series",
        difficulty: "medium"
    },
    {
        id: 37,
        text: "Determine the sum to infinity of the geometric series: 16 - 8 + 4 - 2 + ...",
        options: ["32/3", "32", "16", "∞"],
        correctAnswer: 0,
        explanation: "S = a / (1 - r) = 16 / (1 - (-1/2)) = 16 / (3/2) = 32/3",
        topic: "Infinite Series",
        difficulty: "medium"
    },
    {
        id: 38,
        text: "If f(x) = x * sin(x), find f'(x).",
        options: ["cos(x)", "sin(x) + xcos(x)", "cos(x) - xsin(x)", "xcos(x)"],
        correctAnswer: 1,
        explanation: "Using the product rule, f'(x) = sin(x) + xcos(x)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 39,
        text: "What is the derivative of y = e^(x^2 + 1)?",
        options: ["e^(x^2 + 1)", "2xe^(x^2 + 1)", "e^(2x)", "2xe^x"],
        correctAnswer: 1,
        explanation: "Using the chain rule, dy/dx = 2xe^(x^2 + 1)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 40,
        text: "Find the slope of the tangent line to y = x^3 - 6x at x = 2.",
        options: ["-6", "-2", "6", "12"],
        correctAnswer: 2,
        explanation: "dy/dx = 3x^2 - 6. At x = 2, slope = 3(4) - 6 = 6",
        topic: "Application of Derivative",
        difficulty: "medium"
    },
    {
        id: 41,
        text: "Determine the x-coordinate of the minimum point on the curve y = x^2 - 4x + 5.",
        options: ["-2", "0", "2", "4"],
        correctAnswer: 2,
        explanation: "dy/dx = 2x - 4 = 0 => x = 2",
        topic: "Application of Derivative",
        difficulty: "medium"
    },
    {
        id: 42,
        text: "Evaluate ∫(cos(x)) dx.",
        options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
        correctAnswer: 0,
        explanation: "The integral of cos(x) is sin(x) + C",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 43,
        text: "Calculate ∫(5) dx.",
        options: ["5 + C", "5x + C", "x + C", "5x^2 + C"],
        correctAnswer: 1,
        explanation: "The integral of a constant is the constant times x plus C",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 44,
        text: "Find the value of ∫(2x + 3) from 1 to 3.",
        options: ["4", "8", "10", "12"],
        correctAnswer: 2,
        explanation: "[x^2 + 3x] from 1 to 3 = (9 + 9) - (1 + 3) = 18 - 4 = 14",
        topic: "Introduction to Integration",
        difficulty: "medium"
    },
    {
        id: 45,
        text: "What is the area under the curve y = 2x from x = 1 to x = 4?",
        options: ["8", "12", "15", "16"],
        correctAnswer: 2,
        explanation: "∫(2x) from 1 to 4 = [x^2] from 1 to 4 = 16 - 1 = 15",
        topic: "Application of Integration",
        difficulty: "medium"
    },
    {
        id: 46,
        text: "If the first term of an arithmetic sequence is 7 and the common difference is -2, find the 9th term.",
        options: ["-9", "-7", "-5", "-3"],
        correctAnswer: 0,
        explanation: "a_9 = 7 + (9-1)(-2) = 7 - 16 = -9",
        topic: "Arithmetic Sequences",
        difficulty: "medium"
    },
    {
        id: 47,
        text: "The 2nd term of a geometric sequence is 6 and the 4th term is 24. What is the common ratio?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "a_4 = a_2 * r^2 => 24 = 6 * r^2 => r^2 = 4 => r = 2 (or -2, but let's take the positive)",
        topic: "Geometric Sequences",
        difficulty: "medium"
    },
    {
        id: 48,
        text: "Evaluate Σ(3i - 2) from i=1 to 4.",
        options: ["10", "12", "14", "16"],
        correctAnswer: 0,
        explanation: "(3(1) - 2) + (3(2) - 2) + (3(3) - 2) + (3(4) - 2) = 1 + 4 + 7 + 10 = 22",
        topic: "Sigma Notation and Series",
        difficulty: "medium"
    },
    {
        id: 49,
        text: "What is the sum to infinity of the series: 5 + 5/2 + 5/4 + ...?",
        options: ["10", "12.5", "15", "20"],
        correctAnswer: 0,
        explanation: "S = a / (1 - r) = 5 / (1 - 1/2) = 5 / (1/2) = 10",
        topic: "Infinite Series",
        difficulty: "medium"
    },
    {
        id: 50,
        text: "If f(x) = cos(2x), find f'(x).",
        options: ["-2sin(2x)", "2sin(2x)", "-sin(2x)", "sin(2x)"],
        correctAnswer: 0,
        explanation: "Using the chain rule, f'(x) = -2sin(2x)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 51,
        text: "Determine the derivative of y = ln(x^2 + 1).",
        options: ["2x/(x^2 + 1)", "1/(x^2 + 1)", "2x", "2xln(x^2 + 1)"],
        correctAnswer: 0,
        explanation: "Using the chain rule, dy/dx = 2x / (x^2 + 1)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 52,
        text: "Find the equation of the tangent line to y = x^2 + 2x - 1 at x = -1.",
        options: ["y = -x - 2", "y = -2", "y = -x + 2", "y = -2x"],
        correctAnswer: 1,
        explanation: "dy/dx = 2x + 2. At x = -1, slope = 0. y(-1) = 1 - 2 - 1 = -2. y = -2",
        topic: "Application of Derivative",
        difficulty: "hard"
    },
    {
        id: 53,
        text: "What is the maximum value of the function f(x) = -x^2 + 6x - 5?",
        options: ["2", "4", "6", "9"],
        correctAnswer: 1,
        explanation: "f'(x) = -2x + 6 = 0 => x = 3. f(3) = -9 + 18 - 5 = 4",
        topic: "Application of Derivative",
        difficulty: "medium"
    },
    {
        id: 54,
        text: "Evaluate ∫(sin(x) + cos(x)) dx.",
        options: ["cos(x) + sin(x) + C", "-cos(x) + sin(x) + C", "-cos(x) - sin(x) + C", "cos(x) - sin(x) + C"],
        correctAnswer: 1,
        explanation: "The integral of sin(x) is -cos(x) and the integral of cos(x) is sin(x)",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 55,
        text: "Calculate ∫(1/x^2) dx.",
        options: ["-1/x + C", "ln(x^2) + C", "1/x + C", "-2/x^3 + C"],
        correctAnswer: 0,
        explanation: "∫(x^-2) dx = -x^-1 + C = -1/x + C",
        topic: "Introduction to Integration",
        difficulty: "medium"
    },
    {
        id: 56,
        text: "Find the value of ∫(4x - 1) from 0 to 2.",
        options: ["4", "6", "8", "10"],
        correctAnswer: 0,
        explanation: "[2x^2 - x] from 0 to 2 = (8 - 2) - (0) = 6",
        topic: "Introduction to Integration",
        difficulty: "medium"
    },
    {
        id: 57,
        text: "Determine the area under the curve y = x^3 from x = 0 to x = 2.",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
        explanation: "∫(x^3) from 0 to 2 = [x^4/4] from 0 to 2 = 16/4 - 0 = 4",
        topic: "Application of Integration",
        difficulty: "medium"
    },
    {
        id: 58,
        text: "If the 5th term of an arithmetic sequence is 18 and the common difference is 5, what is the first term?",
        options: ["-7", "-2", "3", "8"],
        correctAnswer: 0,
        explanation: "a_5 = a_1 + (5-1)5 => 18 = a_1 + 20 => a_1 = -2",
        topic: "Arithmetic Sequences",
        difficulty: "medium"
    },
    {
        id: 59,
        text: "A geometric sequence has a first term of 3 and a common ratio of -2. Find the 7th term.",
        options: ["-96", "96", "-192", "192"],
        correctAnswer: 3,
        explanation: "a_7 = 3 * (-2)^6 = 3 * 64 = 192",
        topic: "Geometric Sequences",
        difficulty: "medium"
    },
    {
        id: 60,
        text: "Calculate Σ(i^2) from i=1 to 3.",
        options: ["6", "9", "12", "14"],
        correctAnswer: 0,
        explanation: "1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14",
        topic: "Sigma Notation and Series",
        difficulty: "medium"
    },
    {
        id: 61,
        text: "Find the sum to infinity of the geometric series: 2 + 1 + 1/2 + ...",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        explanation: "S = a / (1 - r) = 2 / (1 - 1/2) = 2 / (1/2) = 4",
        topic: "Infinite Series",
        difficulty: "medium"
    },
    {
        id: 62,
        text: "If f(x) = x^2 * cos(x), find f'(x).",
        options: ["2xsin(x)", "2xcos(x) - x^2sin(x)", "-2xsin(x)", "x^2sin(x)"],
        correctAnswer: 1,
        explanation: "Using the product rule, f'(x) = 2xcos(x) - x^2sin(x)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 63,
        text: "What is the derivative of y = e^(-x)?",
        options: ["e^(-x)", "-e^(-x)", "e^x", "-e^x"],
        correctAnswer: 1,
        explanation: "Using the chain rule, dy/dx = -e^(-x)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 64,
        text: "Determine the equation of the tangent line to y = x^3 - 3x^2 + 2 at x = 1.",
        options: ["y = -3x", "y = -3x + 1", "y = 3x - 1", "y = 3x"],
        correctAnswer: 1,
        explanation: "dy/dx = 3x^2 - 6x. At x = 1, slope = -3. y(1) = 1 - 3 + 2 = 0. y - 0 = -3(x - 1) => y = -3x + 3",
        topic: "Application of Derivative",
        difficulty: "hard"
    },
    {
        id: 65,
        text: "Find the minimum value of f(x) = x^3 - 12x + 5.",
        options: ["-11", "-16", "-19", "-21"],
        correctAnswer: 1,
        explanation: "f'(x) = 3x^2 - 12 = 0 => x = ±2. f''(x) = 6x. f''(2) = 12 > 0 (min). f(2) = 8 - 24 + 5 = -11",
        topic: "Application of Derivative",
        difficulty: "hard"
    },
    {
        id: 66,
        text: "Evaluate ∫(2sin(x) - 3cos(x)) dx.",
        options: ["-2cos(x) - 3sin(x) + C", "2cos(x) + 3sin(x) + C", "-2cos(x) + 3sin(x) + C", "2cos(x) - 3sin(x) + C"],
        correctAnswer: 0,
        explanation: "The integral of sin(x) is -cos(x) and the integral of cos(x) is sin(x)",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 67,
        text: "Calculate ∫(4e^x) dx.",
        options: ["4e^x + C", "4e^(x+1) + C", "e^(4x) + C", "4x*e^x + C"],
        correctAnswer: 0,
        explanation: "The integral of e^x is e^x",
        topic: "Introduction to Integration",
        difficulty: "easy"
    },
    {
        id: 68,
        text: "What is the value of ∫(3x^2 - 2x) from -1 to 1?",
        options: ["0", "2", "4", "6"],
        correctAnswer: 0,
        explanation: "[x^3 - x^2] from -1 to 1 = (1 - 1) - (-1 - 1) = 0",
        topic: "Introduction to Integration",
        difficulty: "medium"
    },
    {
        id: 69,
        text: "Find the area under the curve y = 4 - x^2 from x = -2 to x = 2.",
        options: ["8/3", "16/3", "32/3", "64/3"],
        correctAnswer: 2,
        explanation: "∫(4 - x^2) from -2 to 2 = [4x - x^3/3] from -2 to 2 = (8 - 8/3) - (-8 + 8/3) = 32/3",
        topic: "Application of Integration",
        difficulty: "hard"
    },
    {
        id: 70,
        text: "If the 3rd term of an arithmetic sequence is 7 and the 7th term is 15, find the common difference.",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "a_7 = a_3 + 4d => 15 = 7 + 4d => 8 = 4d => d = 2",
        topic: "Arithmetic Sequences",
        difficulty: "medium"
    },
    {
        id: 71,
        text: "The first term of a geometric sequence is 5 and the 4th term is 40. What is the common ratio?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "a_4 = a_1 * r^3 => 40 = 5 * r^3 => r^3 = 8 => r = 2",
        topic: "Geometric Sequences",
        difficulty: "medium"
    },
    {
        id: 72,
        text: "Evaluate Σ(2^i) from i=0 to 3.",
        options: ["12", "13", "14", "15"],
        correctAnswer: 3,
        explanation: "2^0 + 2^1 + 2^2 + 2^3 = 1 + 2 + 4 + 8 = 15",
        topic: "Sigma Notation and Series",
        difficulty: "medium"
    },
    {
        id: 73,
        text: "What is the sum to infinity of the series: 1 - 1/3 + 1/9 - 1/27 + ...?",
        options: ["1/2", "2/3", "3/4", "4/5"],
        correctAnswer: 2,
        explanation: "S = a / (1 - r) = 1 / (1 - (-1/3)) = 1 / (4/3) = 3/4",
        topic: "Infinite Series",
        difficulty: "medium"
    },
    {
        id: 74,
        text: "If f(x) = sin^2(x), find f'(x).",
        options: ["2sin(x)", "2sin(x)cos(x)", "cos^2(x)", "sin(2x)"],
        correctAnswer: 1,
        explanation: "Using the chain rule, f'(x) = 2sin(x)cos(x)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 75,
        text: "Determine the derivative of y = x * e^(-x).",
        options: ["e^(-x) + xe^(-x)", "e^(-x) - xe^(-x)", "-xe^(-x)", "-e^(-x)"],
        correctAnswer: 1,
        explanation: "Using the product rule, dy/dx = e^(-x) - xe^(-x)",
        topic: "Introduction to Derivatives",
        difficulty: "medium"
    },
    {
        id: 76,
        text: "Find the equation of the tangent line to y = √x at x = 4.",
        options: ["y = x + 4", "y = 1/4x + 1", "y = 4x + 1", "y = 1/2x + 2"],
        correctAnswer: 1,
        explanation: "dy/dx = 1/(2√x). At x = 4, slope = 1/4. y(4) = 2. y - 2 = 1/4(x - 4) => y = 1/4x + 1",
        topic: "Application of Derivative",
        difficulty: "hard"
    },
    {
        id: 77,
        text: "What is the minimum value of f(x) = x^4 - 2x^2 + 3?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "f'(x) = 4x^3 - 4x = 0 => x = 0, ±1. f''(x) = 12x^2 - 4. f''(±1) = 8 > 0 (min). f(±1) = 1 - 2 + 3 = 2",
        topic: "Application of Derivative",
        difficulty: "hard"
    },
    {
        id: 78,
        text: "Evaluate ∫(1 - sin^2(x)) dx.",
        options: ["x - sin^3(x)/3 + C", "cos^2(x) + C", "x + C", "x/2 + sin(2x)/4 + C"],
        correctAnswer: 3,
        explanation: "1 - sin^2(x) = cos^2(x) = (1 + cos(2x))/2. Integral is x/2 + sin(2x)/4 + C",
        topic: "Introduction to Integration",
        difficulty: "hard"
    },
    {
        id: 79,
        text: "Calculate ∫(x * e^(x^2)) dx.",
        options: ["e^(x^2) + C", "1/2 * e^(x^2) + C", "x^2 * e^(x^2) + C", "e^(x^2)/2 + C"],
        correctAnswer: 1,
        explanation: "Using substitution u = x^2, integral becomes 1/2 * e^u + C = 1/2 * e^(x^2) + C",
        topic: "Introduction to Integration",
        difficulty: "hard"
    },
    {
        id: 80,
        text: "Find the area bounded by the curves y = x^2 and y = 2x.",
        options: ["1/3", "2/3", "4/3", "8/3"],
        correctAnswer: 2,
        explanation: "Intersection points: x^2 = 2x => x = 0, 2. ∫(2x - x^2) from 0 to 2 = [x^2 - x^3/3] from 0 to 2 = 4 - 8/3 = 4/3",
        topic: "Application of Integration",
        difficulty: "hard"
    }
];

export default mathQuestionsUnit1_and_2;