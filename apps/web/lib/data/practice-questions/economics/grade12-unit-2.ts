import { PracticeQuestion } from "@/lib/types/practice";

const economicsUnit2Questions: PracticeQuestion[] = [
    {
        id: 1,
        text: "What is aggregate demand (AD)?",
        options: [
            "The total amount of money spent on goods and services by households",
            "The total amount of money spent on goods and services by households, firms, and government",
            "The total amount of money spent on goods and services by firms",
            "The total amount of money spent on goods and services by the government"
        ],
        correctAnswer: 1,
        explanation: "Aggregate demand (AD) is the total amount of money spent on goods and services by households, firms, and government.",
        topic: "Aggregate Demand",
        difficulty: "easy"
    },
    {
        id: 2,
        text: "Which of the following is NOT a component of aggregate demand?",
        options: [
            "Household consumption (C)",
            "Private investment (I)",
            "Government purchases (G)",
            "Net exports (X - M)"
        ],
        correctAnswer: 0,
        explanation: "All the options listed are components of aggregate demand.",
        topic: "Components of Aggregate Demand",
        difficulty: "easy"
    },
    {
        id: 3,
        text: "Why does the aggregate demand curve slope downward?",
        options: [
            "Because of the real balance effect",
            "Because of the interest rate effect",
            "Because of the international trade effect",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "The aggregate demand curve slopes downward due to the real balance effect, the interest rate effect, and the international trade effect.",
        topic: "Aggregate Demand Curve",
        difficulty: "medium"
    },
    {
        id: 4,
        text: "What is the 'real balance effect'?",
        options: [
            "The impact of changes in the real interest rate on consumption",
            "The effect of changes in the price level on the real value of money holdings",
            "The relationship between the exchange rate and net exports",
            "The influence of government spending on aggregate demand"
        ],
        correctAnswer: 1,
        explanation: "The real balance effect refers to the impact of changes in the price level on the real value of money holdings, which can affect consumption and aggregate demand.",
        topic: "Real Balance Effect",
        difficulty: "medium"
    },
    {
        id: 5,
        text: "What is the primary determinant of private investment demand?",
        options: [
            "The level of output",
            "The cost of capital",
            "Expectations about the future",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Private investment demand is determined by the level of output, the cost of capital, and expectations about the future.",
        topic: "Private Investment Demand",
        difficulty: "medium"
    },
    {
        id: 6,
        text: "What is the relationship between the interest rate and aggregate demand?",
        options: [
            "An increase in the interest rate increases aggregate demand",
            "A decrease in the interest rate increases aggregate demand",
            "The interest rate has no effect on aggregate demand",
            "The relationship is uncertain and depends on other factors"
        ],
        correctAnswer: 1,
        explanation: "A decrease in the interest rate increases aggregate demand by making borrowing cheaper and encouraging investment and consumption.",
        topic: "Interest Rate and Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 7,
        text: "What is the impact of an increase in government purchases on aggregate demand?",
        options: [
            "It decreases aggregate demand",
            "It increases aggregate demand",
            "It has no effect on aggregate demand",
            "It depends on the level of taxation"
        ],
        correctAnswer: 1,
        explanation: "An increase in government purchases increases aggregate demand by directly increasing government spending.",
        topic: "Government Purchases and Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 8,
        text: "What is the impact of a depreciation of the domestic currency on net exports?",
        options: [
            "It decreases net exports",
            "It increases net exports",
            "It has no effect on net exports",
            "It depends on the level of foreign income"
        ],
        correctAnswer: 1,
        explanation: "A depreciation of the domestic currency makes foreign goods more expensive and domestic goods cheaper, increasing net exports.",
        topic: "Exchange Rate and Net Exports",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "What is the primary cause of a shift in the aggregate demand curve?",
        options: [
            "A change in the price level",
            "A change in consumption, investment, government purchases, or net exports",
            "A change in the money supply",
            "A change in the exchange rate"
        ],
        correctAnswer: 1,
        explanation: "A shift in the aggregate demand curve is caused by a change in consumption, investment, government purchases, or net exports.",
        topic: "Shifts in Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 10,
        text: "What is the impact of an increase in wealth on aggregate demand?",
        options: [
            "It decreases aggregate demand",
            "It increases aggregate demand",
            "It has no effect on aggregate demand",
            "It depends on the level of income"
        ],
        correctAnswer: 1,
        explanation: "An increase in wealth increases aggregate demand by making individuals feel more financially secure and willing to spend.",
        topic: "Wealth and Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 11,
        text: "What is the impact of an expectation of higher future prices on current consumption?",
        options: [
            "It decreases current consumption",
            "It increases current consumption",
            "It has no effect on current consumption",
            "It depends on the level of income"
        ],
        correctAnswer: 1,
        explanation: "An expectation of higher future prices increases current consumption as individuals buy goods at lower current prices.",
        topic: "Expectations and Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 12,
        text: "What is the impact of a decrease in the interest rate on investment?",
        options: [
            "It decreases investment",
            "It increases investment",
            "It has no effect on investment",
            "It depends on the level of output"
        ],
        correctAnswer: 1,
        explanation: "A decrease in the interest rate increases investment by making borrowing cheaper and encouraging firms to invest in capital projects.",
        topic: "Interest Rate and Investment",
        difficulty: "medium"
    },
    {
        id: 13,
        text: "What is the impact of a decrease in business taxes on investment?",
        options: [
            "It decreases investment",
            "It increases investment",
            "It has no effect on investment",
            "It depends on the level of output"
        ],
        correctAnswer: 1,
        explanation: "A decrease in business taxes increases investment by increasing expected profitability and encouraging firms to invest.",
        topic: "Business Taxes and Investment",
        difficulty: "medium"
    },
    {
        id: 14,
        text: "What is the impact of an increase in foreign real national income on net exports?",
        options: [
            "It decreases net exports",
            "It increases net exports",
            "It has no effect on net exports",
            "It depends on the exchange rate"
        ],
        correctAnswer: 1,
        explanation: "An increase in foreign real national income increases net exports as foreigners buy more domestic goods.",
        topic: "Foreign Income and Net Exports",
        difficulty: "medium"
    },
    {
        id: 15,
        text: "What is the impact of an appreciation of the domestic currency on net exports?",
        options: [
            "It decreases net exports",
            "It increases net exports",
            "It has no effect on net exports",
            "It depends on the level of foreign income"
        ],
        correctAnswer: 0,
        explanation: "An appreciation of the domestic currency makes foreign goods cheaper and domestic goods more expensive, decreasing net exports.",
        topic: "Exchange Rate and Net Exports",
        difficulty: "medium"
    },
    {
        id: 16,
        text: "What is the primary cause of a leftward shift in the aggregate supply curve?",
        options: [
            "An increase in the price of oil",
            "A decrease in the price of oil",
            "An increase in the money supply",
            "A decrease in the money supply"
        ],
        correctAnswer: 0,
        explanation: "An increase in the price of oil can cause a leftward shift in the aggregate supply curve by increasing production costs.",
        topic: "Shifts in Aggregate Supply",
        difficulty: "hard"
    },
    {
        id: 17,
        text: "What is the primary cause of a rightward shift in the aggregate supply curve?",
        options: [
            "An increase in the price of oil",
            "A decrease in the price of oil",
            "An increase in the money supply",
            "A decrease in the money supply"
        ],
        correctAnswer: 1,
        explanation: "A decrease in the price of oil can cause a rightward shift in the aggregate supply curve by decreasing production costs.",
        topic: "Shifts in Aggregate Supply",
        difficulty: "hard"
    },
    {
        id: 18,
        text: "What is the primary cause of a decrease in short-run aggregate supply?",
        options: [
            "An increase in wage rates",
            "A decrease in wage rates",
            "An increase in the money supply",
            "A decrease in the money supply"
        ],
        correctAnswer: 0,
        explanation: "An increase in wage rates can cause a decrease in short-run aggregate supply by increasing production costs.",
        topic: "Short-Run Aggregate Supply",
        difficulty: "hard"
    },
    {
        id: 19,
        text: "What is the primary cause of an increase in short-run aggregate supply?",
        options: [
            "An increase in wage rates",
            "A decrease in wage rates",
            "An increase in the money supply",
            "A decrease in the money supply"
        ],
        correctAnswer: 1,
        explanation: "A decrease in wage rates can cause an increase in short-run aggregate supply by decreasing production costs.",
        topic: "Short-Run Aggregate Supply",
        difficulty: "hard"
    },
    {
        id: 20,
        text: "What is the primary focus of long-run aggregate supply?",
        options: [
            "The level of real GDP in the short run",
            "The level of real GDP in the long run",
            "The impact of monetary policy on aggregate demand",
            "The impact of fiscal policy on aggregate demand"
        ],
        correctAnswer: 1,
        explanation: "Long-run aggregate supply focuses on the level of real GDP in the long run, where wages and prices have adjusted to their equilibrium levels.",
        topic: "Long-Run Aggregate Supply",
        difficulty: "medium"
    }
];

export default economicsUnit2Questions;
