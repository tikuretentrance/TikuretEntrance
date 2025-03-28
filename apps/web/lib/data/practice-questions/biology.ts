import { PracticeQuestion } from "@/lib/types/practice";

const biologyQuestions2017: PracticeQuestion[] = [
    {
        id: 1,
        text: "A transgenic organism is an organism that",
        options: [
            "can undergo chromosomal non-disjunction.",
            "replicates its DNA without control.",
            "has received genetic material of another organism.",
            "is artificially cultured and harvested."
        ],
        correctAnswer: 2,
        explanation: "A transgenic organism contains genes from other species, introduced through genetic engineering.",
        topic: "Genetic Engineering",
        difficulty: "medium"
    },
    // {
    //     id: 1,
    //     text: "What is the derivative of f(x) = x²?",
    //     options: ["x", "2x", "x³", "2"],
    //     correctAnswer: 1
    // },
    // {
    //     id: 2,
    //     text: "What is the value of sin(30°)?",
    //     options: ["1/2", "√3/2", "1", "0"],
    //     correctAnswer: 0
    // },

]

export default biologyQuestions2017;