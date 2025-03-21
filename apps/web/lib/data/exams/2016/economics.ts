import { ExamQuestion } from "@/lib/types";

const economicsQuestions2016: ExamQuestion[] = [
    {
        id: 1,
        text: "Which one of the following represents the increase in the quantity supplied of real GDP due to the increase in the price level?",
        options: [
            "The right wards shifts of the aggregate supply curve",
            "The left wards shifts of the aggregate supply curve",
            "The downwards movements along the aggregate supply curve",
            "The upwards movements along the aggregate supply curve"
        ],
        correctAnswer: 3,
        explanation: "An increase in the price level leads to an upward movement along the aggregate supply curve, as firms are willing to supply more at higher prices.",
        topic: "Aggregate Supply",
        difficulty: "medium"
    },
    {
        id: 2,
        text: "When the economy is in the long run, which of the following is correct?",
        options: [
            "Sticky wages and workers misperception still holds true.",
            "What the economy produces is the full employment real GDP.",
            "The short run and the long run real GDP will be the same.",
            "The level of real GDP the economy produces is less than the natural real GDP."
        ],
        correctAnswer: 1,
        explanation: "In the long run, the economy produces at the full employment level of real GDP, where all resources are fully utilized.",
        topic: "Long Run Equilibrium",
        difficulty: "medium"
    },
    {
        id: 3,
        text: "What is the pressure on price when the quantity demanded of real GDP is greater than the quantity supplied of real GDP during the short run?",
        options: [
            "The price level rises",
            "The price level drops",
            "No pressure at all",
            "Initially downwards"
        ],
        correctAnswer: 0,
        explanation: "When quantity demanded exceeds quantity supplied, there is upward pressure on prices as demand outstrips supply.",
        topic: "Price Level",
        difficulty: "easy"
    },
    {
        id: 4,
        text: "Which one of the following is correct about the economy when it is in long run equilibrium?",
        options: [
            "The economy produces the real GDP which is called the natural real GDP.",
            "The short run aggregate demand curve intersects the short run aggregate supply curve.",
            "The long run aggregate demand curve intersects the short run aggregate supply curve.",
            "Price temporarily deviates from equilibrium even if aggregate demand and aggregate supply remain unchanged."
        ],
        correctAnswer: 0,
        explanation: "In long run equilibrium, the economy produces at the natural real GDP, where aggregate demand equals aggregate supply.",
        topic: "Long Run Equilibrium",
        difficulty: "medium"
    },
    {
        id: 5,
        text: "Which of the following represents an economic situation where there is an inefficient distribution of goods and services in the free market?",
        options: [
            "Externalities",
            "Asymmetric information",
            "Market failure",
            "Free riding"
        ],
        correctAnswer: 2,
        explanation: "Market failure occurs when the free market fails to allocate resources efficiently, leading to an inefficient distribution of goods and services.",
        topic: "Market Failure",
        difficulty: "easy"
    },
    {
        id: 6,
        text: "What impacts on our aggregate demand do you expect if the level of economic activities in other countries increase?",
        options: [
            "Aggregate demand will increase.",
            "Aggregate demand will decrease.",
            "Aggregate demand remains unaffected.",
            "Aggregate demand first declines and then rises."
        ],
        correctAnswer: 0,
        explanation: "An increase in economic activities in other countries can lead to higher demand for exports, thus increasing aggregate demand.",
        topic: "Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 7,
        text: "Among the following, which one differentiates change in quantity demanded from change in aggregate demand?",
        options: [
            "As the price level falls, the quantity demanded of real GDP rises, ceteris paribus.",
            "It is represented as a movement from one point to another along different demand curve.",
            "A positive change in any factor's causes a rightward shift in the AD curve.",
            "It is a shift in aggregate demand curve from AD1 to AD2 on different curve."
        ],
        correctAnswer: 2,
        explanation: "A change in aggregate demand is represented by a shift in the AD curve due to factors other than price, while a change in quantity demanded is a movement along the curve due to price changes.",
        topic: "Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 8,
        text: "Which of the following is correct about aggregate demand curve?",
        options: [
            "It represents the inverse relationship between the real GDP demanded and consumption expenditure, all else being equal.",
            "It is a schedule that represents the amount of real output that sellers collectively desire to sell at each price, ceteris paribus.",
            "It shows the inverse relationship between the amount of real output buyers desire to buy at each price, all else being equal.",
            "It shows the inverse relationship between the amount of real output sellers desire to sell at each price, all else being equal."
        ],
        correctAnswer: 2,
        explanation: "The aggregate demand curve shows the inverse relationship between the price level and the quantity of real GDP demanded by buyers.",
        topic: "Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 9,
        text: "What is the implication of the Keynesian horizontal aggregate supply curve?",
        options: [
            "Firms can supply whatever amount demanded at the existing price because of unemployment.",
            "Firms can obtain much labour as they want as long as they pay more.",
            "As output level changes, the average cost of production increases.",
            "The labour market is in equilibrium with full employment of the labour force."
        ],
        correctAnswer: 0,
        explanation: "The Keynesian horizontal aggregate supply curve implies that firms can supply any amount of output at the existing price level due to the presence of unemployment.",
        topic: "Keynesian Economics",
        difficulty: "hard"
    },
    {
        id: 10,
        text: "Which one of the following is the main factor that affects the output firms are willing to supply?",
        options: [
            "The price of related goods produced by other firms",
            "The price they receive for their goods",
            "The level of economic activity in other countries",
            "The price they anticipate to prevail in the future"
        ],
        correctAnswer: 1,
        explanation: "The primary factor affecting the output firms are willing to supply is the price they receive for their goods, as higher prices incentivize greater production.",
        topic: "Supply",
        difficulty: "easy"
    },
    {
        id: 11,
        text: "Which of the following is NOT the cause of market failure?",
        options: [
            "Monopoly",
            "Externalities",
            "Factor immobility",
            "Private goods"
        ],
        correctAnswer: 3,
        explanation: "Market failure is caused by factors like monopoly, externalities, and factor immobility. Private goods, however, do not cause market failure as they are efficiently allocated by the market.",
        topic: "Market Failure",
        difficulty: "easy"
    },
    {
        id: 12,
        text: "Suppose Sol-ech – company receives positive externalities from COM, educated graduates subsidize computer education through scholarships, which of the following group is this type of solution for market failure listed?",
        options: [
            "Voluntary collective action solutions",
            "Government- imposed solutions",
            "Private market solutions",
            "Non – excludability"
        ],
        correctAnswer: 1,
        explanation: "Government-imposed solutions, such as subsidies, are used to address market failures like positive externalities.",
        topic: "Market Failure Solutions",
        difficulty: "medium"
    },
    {
        id: 13,
        text: "Which one of the following is an example of public goods?",
        options: [
            "Houses",
            "Food items",
            "Wilderness",
            "Clothes"
        ],
        correctAnswer: 2,
        explanation: "Public goods are non-excludable and non-rivalrous, such as wilderness areas, which can be enjoyed by everyone without reducing their availability to others.",
        topic: "Public Goods",
        difficulty: "easy"
    },
    {
        id: 14,
        text: "Which of the following characterize Public goods?",
        options: [
            "Rivalry and excludability",
            "Rivalry and non – excludability",
            "Non – rivalry and excludability",
            "Non – rivalry and non – excludability"
        ],
        correctAnswer: 3,
        explanation: "Public goods are characterized by non-rivalry (one person's use does not reduce availability to others) and non-excludability (no one can be prevented from using them).",
        topic: "Public Goods",
        difficulty: "medium"
    },
    {
        id: 15,
        text: "Which one of the following factor is the reason for market inefficiency in the provision of public goods?",
        options: [
            "Externality",
            "Free riding",
            "Divisibility",
            "High marginal cost"
        ],
        correctAnswer: 1,
        explanation: "Free riding occurs when individuals benefit from public goods without contributing to their provision, leading to market inefficiency.",
        topic: "Public Goods",
        difficulty: "medium"
    },
    {
        id: 16,
        text: "Which of the following macroeconomic policy involves by which the government manipulates its expenditure and revenue side?",
        options: [
            "Monetary policy",
            "Fiscal policy",
            "Income policy",
            "Exchange rate policy"
        ],
        correctAnswer: 1,
        explanation: "Fiscal policy involves government manipulation of its expenditure and revenue (taxation) to influence the economy.",
        topic: "Fiscal Policy",
        difficulty: "easy"
    },
    {
        id: 17,
        text: "Which one of the following instrument is considered by the contractionary fiscal policy when there is an excess demand and inflationary pressure in the economy?",
        options: [
            "A decrease in expenditure",
            "Reduction of taxes",
            "An increase in expenditure",
            "Reduction of revenue"
        ],
        correctAnswer: 0,
        explanation: "Contractionary fiscal policy involves reducing government expenditure to decrease aggregate demand and control inflation.",
        topic: "Fiscal Policy",
        difficulty: "medium"
    },
    {
        id: 18,
        text: "A tight monetary policy is applied in circumstances where there is",
        options: [
            "high inflation.",
            "high economic growth.",
            "high unemployment.",
            "slow economic growth."
        ],
        correctAnswer: 0,
        explanation: "Tight monetary policy is used to combat high inflation by reducing the money supply and increasing interest rates.",
        topic: "Monetary Policy",
        difficulty: "medium"
    },
    {
        id: 19,
        text: "If tight fiscal and monetary policies fail to address the problem of rising price level, what is the alternative policy that the government should consider?",
        options: [
            "Exchange rate policy",
            "Trade policy",
            "Income policy",
            "Interest rate policy"
        ],
        correctAnswer: 2,
        explanation: "Income policy, such as wage and price controls, can be used as an alternative to control inflation when fiscal and monetary policies are ineffective.",
        topic: "Economic Policy",
        difficulty: "hard"
    },
    {
        id: 20,
        text: "Which of the following exchange rate regime is the one that is determined by the government political and economic decisions?",
        options: [
            "Floating exchange rate regime",
            "Fixed exchange rate regime",
            "Managed floating",
            "Crawling peg regime"
        ],
        correctAnswer: 1,
        explanation: "A fixed exchange rate regime is determined by the government, which sets and maintains the exchange rate through political and economic decisions.",
        topic: "Exchange Rate",
        difficulty: "medium"
    },
    {
        id: 21,
        text: "Which one of the following difference is the cause for efficiency loss in the presence of negative externality?",
        options: [
            "Between marginal social benefit and marginal private benefit",
            "Between marginal social cost and marginal private cost",
            "Between private marginal cost and marginal external cost",
            "Between private marginal benefit and marginal external benefit"
        ],
        correctAnswer: 1,
        explanation: "Negative externalities cause efficiency loss due to the difference between marginal social cost and marginal private cost, as the social cost exceeds the private cost.",
        topic: "Externalities",
        difficulty: "hard"
    },
    {
        id: 22,
        text: "When an insurance company provides fringe benefits on the basis of an average rate over a set of employees and guarantee them to participate in the program, then this can be seen as a solution for which one of the following problem?",
        options: [
            "Adverse selection",
            "Moral hazard",
            "Signalling",
            "Screening"
        ],
        correctAnswer: 0,
        explanation: "Adverse selection occurs when one party in a transaction has more information than the other. Providing fringe benefits based on average rates helps mitigate this issue.",
        topic: "Insurance",
        difficulty: "hard"
    },
    {
        id: 23,
        text: "Which of the following macroeconomic policies involves management of money supply and interest rate?",
        options: [
            "Fiscal policy",
            "Exchange rate policy",
            "Monetary policy",
            "Income policy"
        ],
        correctAnswer: 2,
        explanation: "Monetary policy involves the management of money supply and interest rates to control inflation, stabilize currency, and promote economic growth.",
        topic: "Monetary Policy",
        difficulty: "easy"
    },
    {
        id: 24,
        text: "Which one of the following is the monetary policy tool that involves the purchase and sale of securities by the nation’s central bank?",
        options: [
            "Discount rate",
            "Open market operation",
            "Required reserve ratio",
            "Government spending"
        ],
        correctAnswer: 1,
        explanation: "Open market operations involve the buying and selling of government securities by the central bank to control the money supply.",
        topic: "Monetary Policy",
        difficulty: "medium"
    },
    {
        id: 25,
        text: "One of the following is considered to be a policy tool. Which one is it?",
        options: [
            "Taxation",
            "Investment",
            "Grants in aid",
            "Transfer payments"
        ],
        correctAnswer: 0,
        explanation: "Taxation is a key fiscal policy tool used by governments to influence the economy by adjusting revenue collection.",
        topic: "Fiscal Policy",
        difficulty: "easy"
    },
    {
        id: 26,
        text: "Which one of the following is correct about price ceilings?",
        options: [
            "It is one of the income policies that keeps a price from declining from certain limit.",
            "It is a maximum price set by law to make basic consumption goods affordable to buyers.",
            "It should be set above the equilibrium price to make it more effective.",
            "It discourages consumers from buying goods and services since they are now paying higher price."
        ],
        correctAnswer: 1,
        explanation: "A price ceiling is a government-imposed maximum price set below the equilibrium price to make essential goods affordable to consumers.",
        topic: "Price Controls",
        difficulty: "medium"
    },
    {
        id: 27,
        text: "Suppose the value of an Ethiopian birr in terms of Kenyan Shilling is getting higher. What is the impact of this on the Ethiopian export to Kenya?",
        options: [
            "It will make the price of Ethiopian goods in the Kenyan market cheaper.",
            "It will make the Price of Kenyan import in the Ethiopian market expensive.",
            "It will increase Ethiopia’s export earnings.",
            "It will reduce Ethiopia’s export earnings."
        ],
        correctAnswer: 3,
        explanation: "If the Ethiopian birr appreciates against the Kenyan Shilling, Ethiopian goods become more expensive for Kenyan buyers, reducing Ethiopia's export earnings.",
        topic: "Exchange Rates",
        difficulty: "medium"
    },
    {
        id: 28,
        text: "Which one of the following clearly defines taxation?",
        options: [
            "It is a voluntary payment.",
            "It is the only source of government revenue.",
            "It is levied without anything in direct return.",
            "It encourages inexistence of government."
        ],
        correctAnswer: 2,
        explanation: "Taxation is a compulsory levy imposed by the government on individuals and businesses without any direct return in exchange.",
        topic: "Taxation",
        difficulty: "easy"
    },
    {
        id: 29,
        text: "Which one of the following explains the tax principles called 'canon of economy'?",
        options: [
            "Everyone should pay tax according to his ability.",
            "The amount of tax that we are supposed to pay should be known in advance.",
            "Every tax payer should pay the tax in his own convenient time.",
            "The cost of tax collection should be as minimum as possible."
        ],
        correctAnswer: 3,
        explanation: "The canon of economy states that the cost of collecting taxes should be minimized to ensure efficiency in the tax system.",
        topic: "Taxation Principles",
        difficulty: "medium"
    },
    {
        id: 30,
        text: "Which of the following is the implication of one of a good tax system that is referred to as broad based?",
        options: [
            "The system should impose tax on all people without discrimination.",
            "The system should ensure that an income inequality is reduced.",
            "The system should impose tax on income and properties and commodities.",
            "The system should ascertain that national income and living standard is increasing."
        ],
        correctAnswer: 0,
        explanation: "A broad-based tax system imposes taxes on a wide range of individuals and entities without discrimination, ensuring fairness and revenue stability.",
        topic: "Taxation",
        difficulty: "medium"
    },
    {
        id: 31,
        text: "Which one of the following is the advantage of fiscal decentralization?",
        options: [
            "Provide scale economies in the collection of taxes",
            "Provide scale economies in the provision of public goods",
            "Provision of public goods and services desired by local residents.",
            "Effective to implement equity measures."
        ],
        correctAnswer: 2,
        explanation: "Fiscal decentralization allows local governments to provide public goods and services that are tailored to the preferences and needs of local residents.",
        topic: "Fiscal Decentralization",
        difficulty: "medium"
    },
    {
        id: 32,
        text: "One of the following is considered to be the aim of fiscal decentralization. Which one is it?",
        options: [
            "Promoting regional partnership",
            "Enhancing the role of private sector",
            "Encouraging free movement of labour",
            "Ensuring equity and efficiency"
        ],
        correctAnswer: 3,
        explanation: "The aim of fiscal decentralization is to ensure equity and efficiency in the provision of public goods and services by empowering local governments.",
        topic: "Fiscal Decentralization",
        difficulty: "medium"
    },
    {
        id: 33,
        text: "Which one of the following is the reason for the federal government to make fiscal equalization payments to local governments?",
        options: [
            "To enhance intergovernmental competition",
            "To discourage fiscal centralization",
            "To encourage innovation in those goods and services provided locally",
            "To narrow regional gaps in the provision of basic public services"
        ],
        correctAnswer: 3,
        explanation: "Fiscal equalization payments are made by the federal government to local governments to reduce regional disparities and ensure equitable provision of public services.",
        topic: "Fiscal Policy",
        difficulty: "medium"
    },
    {
        id: 34,
        text: "What is the reason for the growing need for conservation of environmental resources?",
        options: [
            "These resources are underutilized.",
            "These resources are finite.",
            "Their use is less costly.",
            "Most of these resources are infinite."
        ],
        correctAnswer: 1,
        explanation: "Environmental resources are finite, and their conservation is necessary to ensure sustainable use for future generations.",
        topic: "Environmental Economics",
        difficulty: "easy"
    },
    {
        id: 35,
        text: "What is the cause for rising greenhouse gases in the earth’s atmosphere?",
        options: [
            "An increase in afforestation program",
            "A decrease in deforestation due to government policy",
            "An increase in hydropower generation",
            "The decomposition and disposal of waste"
        ],
        correctAnswer: 3,
        explanation: "The decomposition and disposal of waste, especially organic waste, release greenhouse gases like methane into the atmosphere.",
        topic: "Environmental Economics",
        difficulty: "medium"
    },
    {
        id: 36,
        text: "Among the following direct taxes, which one is a tax that is imposed on the land and buildings?",
        options: [
            "Income tax",
            "Property tax",
            "Transfer tax",
            "Capital gain tax"
        ],
        correctAnswer: 1,
        explanation: "Property tax is a direct tax imposed on land and buildings, based on their assessed value.",
        topic: "Taxation",
        difficulty: "easy"
    },
    {
        id: 37,
        text: "Which one of the following is an objective of taxation?",
        options: [
            "Reducing income disparity",
            "Promoting consumption of harmful products",
            "Widening regional imbalance",
            "Encouraging import"
        ],
        correctAnswer: 0,
        explanation: "One of the objectives of taxation is to reduce income disparity by redistributing wealth through progressive tax systems.",
        topic: "Taxation",
        difficulty: "easy"
    },
    {
        id: 38,
        text: "The burden and incidence is imposed by one of the following tax categories on different individuals. Which one is it?",
        options: [
            "Payroll tax",
            "Corporate income tax",
            "Value added tax",
            "Rental income tax"
        ],
        correctAnswer: 2,
        explanation: "Value added tax (VAT) is an indirect tax where the burden and incidence fall on different individuals, typically the final consumer.",
        topic: "Taxation",
        difficulty: "medium"
    },
    {
        id: 39,
        text: "In Ethiopia, which one of the following institution is responsible to collect tax on behalf of the government?",
        options: [
            "The Ministry of Finance",
            "The Central Bank",
            "The Commercial bank",
            "The Ministry of Revenue"
        ],
        correctAnswer: 3,
        explanation: "The Ministry of Revenue is responsible for collecting taxes on behalf of the government in Ethiopia.",
        topic: "Taxation",
        difficulty: "easy"
    },
    {
        id: 40,
        text: "Which one is the type of indirect tax imposed on luxury items and other goods that are demand inelastic when the goods is imported?",
        options: [
            "Value added tax",
            "Turnover tax",
            "Excise tax",
            "Withholding tax"
        ],
        correctAnswer: 2,
        explanation: "Excise tax is an indirect tax imposed on luxury items and goods with inelastic demand, often applied to imported goods.",
        topic: "Taxation",
        difficulty: "medium"
    },
    {
        id: 41,
        text: "Which one of the following explains climate change?",
        options: [
            "It refers to an average weather pattern over many years.",
            "It is expressed in terms of daily changes in rainfall and humidity.",
            "It is a short term changes in the atmosphere conditions.",
            "It is the problem of the developed world only."
        ],
        correctAnswer: 0,
        explanation: "Climate change refers to long-term changes in average weather patterns over many years, often due to human activities.",
        topic: "Environmental Economics",
        difficulty: "easy"
    },
    {
        id: 42,
        text: "Which one of the following indicates the direct health dimension of the impacts of climate change?",
        options: [
            "Drought",
            "Expansion of desertification",
            "Water shortages",
            "Malaria"
        ],
        correctAnswer: 3,
        explanation: "Malaria is a direct health impact of climate change, as rising temperatures can expand the range of disease-carrying mosquitoes.",
        topic: "Environmental Economics",
        difficulty: "medium"
    },
    {
        id: 43,
        text: "Which one of the following is said to have more than 20% contribution to harmful greenhouse gas emissions in the developing countries?",
        options: [
            "Burning of fossil fuel",
            "Carbon dioxide emission",
            "Deforestation",
            "Nitric oxide emission"
        ],
        correctAnswer: 2,
        explanation: "Deforestation contributes significantly to greenhouse gas emissions in developing countries, accounting for more than 20% of emissions.",
        topic: "Environmental Economics",
        difficulty: "medium"
    },
    {
        id: 44,
        text: "The effort that poor developing development is jeopardized due to",
        options: [
            "lack of support for adaptation from the developed countries.",
            "allocation of a good proportion of their budget to finance adaptation.",
            "high dependence on climate insensitive resources.",
            "absence of mitigation and adaptation mechanisms."
        ],
        correctAnswer: 0,
        explanation: "Developing countries often lack support from developed nations for adaptation measures, jeopardizing their development efforts.",
        topic: "Environmental Economics",
        difficulty: "hard"
    },
    {
        id: 45,
        text: "What action has been taken by the government to address climate change problems in Ethiopia?",
        options: [
            "Implementation of Climate Resilient Green Economy facility",
            "Taxes on carbon emission to avoid the problem of climate change",
            "Provision of incentives to encourage technological progress",
            "Achieving economic growth and development in any possible ways"
        ],
        correctAnswer: 0,
        explanation: "Ethiopia has implemented the Climate Resilient Green Economy (CRGE) facility to address climate change and promote sustainable development.",
        topic: "Environmental Economics",
        difficulty: "medium"
    },
    {
        id: 46,
        text: "Which one of the following features characterizes the National development plan during the Derg period?",
        options: [
            "The main development strategy was agriculture led development.",
            "Private commercial farming was encouraged.",
            "Land tenancy still existed.",
            "Cooperatives were encouraged."
        ],
        correctAnswer: 3,
        explanation: "During the Derg period, cooperatives were encouraged as part of the socialist development strategy.",
        topic: "Economic History",
        difficulty: "hard"
    },
    {
        id: 47,
        text: "Which one of the following is the key priority area that is considered to be the basis for the locally developed economic reform program recently?",
        options: [
            "Sustainable rural development",
            "Widening the demographic dividend",
            "Uni - polar source of growth",
            "Inclusive financial sector development"
        ],
        correctAnswer: 0,
        explanation: "Sustainable rural development is a key priority area in Ethiopia's locally developed economic reform program.",
        topic: "Economic Reform",
        difficulty: "medium"
    },
    {
        id: 48,
        text: "Which one of the following factor is the one that necessitated the formation of the home – grown economic reform in Ethiopia?",
        options: [
            "The crowding out public investment by private investment",
            "The failure of gradual transition from private to public sector led growth",
            "Failure to create additional job opportunities",
            "Continuous inflow of external finance"
        ],
        correctAnswer: 2,
        explanation: "The failure to create sufficient job opportunities necessitated the formation of the home-grown economic reform in Ethiopia.",
        topic: "Economic Reform",
        difficulty: "medium"
    },
    {
        id: 49,
        text: "Which one of the following is duly emphasized in one of the home -grown economic reform called sectoral reform?",
        options: [
            "Service sectors",
            "External Trade",
            "Internal trade",
            "Tourism"
        ],
        correctAnswer: 0,
        explanation: "The service sectors are emphasized in Ethiopia's home-grown economic reform, particularly in the sectoral reform component.",
        topic: "Economic Reform",
        difficulty: "medium"
    },
    {
        id: 50,
        text: "Which one of the three home - grown economic reforms is mainly concerned with minimizing external loan and rescheduling the existing external public debt?",
        options: [
            "Growth and transformation plan",
            "Macroeconomic reform",
            "Sectoral reform",
            "Structural reform"
        ],
        correctAnswer: 1,
        explanation: "Macroeconomic reform is concerned with minimizing external loans and rescheduling existing external public debt.",
        topic: "Economic Reform",
        difficulty: "medium"
    },
    {
        id: 51,
        text: "Which of the following indicates the rank of Ethiopia in its human development despite the effort made to reduce the headcount poverty over the past twenty years?",
        options: [
            "Low human development index",
            "Low Gini coefficient",
            "Low poverty gap",
            "Low headcount ratio"
        ],
        correctAnswer: 0,
        explanation: "Despite progress in reducing poverty, Ethiopia still ranks low on the Human Development Index (HDI).",
        topic: "Human Development",
        difficulty: "medium"
    },
    {
        id: 52,
        text: "Which one of the following is the common feature of both 'Idi' and 'Iqub'?",
        options: [
            "In both, members assist each other on a rotational basis.",
            "Both are formal financial institutions.",
            "'Mutual benefit' is their motto.",
            "In both, the strong ties among members encourage defaults."
        ],
        correctAnswer: 0,
        explanation: "Both 'Idi' and 'Iqub' are traditional saving and credit systems where members assist each other on a rotational basis.",
        topic: "Traditional Financial Systems",
        difficulty: "medium"
    },
    {
        id: 53,
        text: "What was the objectives of the first five year development plan that was formulated during the imperial era from 1957 to 1961?",
        options: [
            "Expansion of educational opportunities",
            "Promotion of commercial agriculture",
            "Product diversification",
            "Promotion of industries aiming towards export"
        ],
        correctAnswer: 1,
        explanation: "The first five-year development plan during the imperial era aimed to promote commercial agriculture.",
        topic: "Economic History",
        difficulty: "hard"
    },
    {
        id: 54,
        text: "Which one of the following development plan of the imperial period had more focus on the agriculture sector to address the problem of increasing food shortages?",
        options: [
            "The First five year plan",
            "The Second five year plan",
            "The Third five year plan",
            "The Fourth Five year plan"
        ],
        correctAnswer: 1,
        explanation: "The Second Five-Year Plan during the imperial period focused more on the agriculture sector to address food shortages.",
        topic: "Economic History",
        difficulty: "hard"
    },
    {
        id: 55,
        text: "In Ethiopia, which of the following has got particular attention in the past yet characterized as the lowest productive in its performance?",
        options: [
            "Agricultural sector",
            "Mining sector",
            "Tourism sector",
            "Trade sector"
        ],
        correctAnswer: 0,
        explanation: "The agricultural sector in Ethiopia has received significant attention but remains the lowest in productivity.",
        topic: "Economic Sectors",
        difficulty: "medium"
    },
    {
        id: 56,
        text: "What does the Gini coefficient of 1 represent?",
        options: [
            "Perfect equality of income",
            "Moderate inequality of income",
            "Moderate equality of income",
            "All income owned by one person"
        ],
        correctAnswer: 3,
        explanation: "A Gini coefficient of 1 represents perfect inequality, where all income is owned by one person.",
        topic: "Income Inequality",
        difficulty: "medium"
    },
    {
        id: 57,
        text: "Which one of the following country has made great success in lifting millions of people out of poverty in the past three decades?",
        options: [
            "Brazil",
            "Russia",
            "China",
            "Ethiopia"
        ],
        correctAnswer: 2,
        explanation: "China has made significant progress in lifting millions of people out of poverty over the past three decades.",
        topic: "Poverty Reduction",
        difficulty: "easy"
    },
    {
        id: 58,
        text: "What is the reason for extreme poverty to remain a challenge in Sub Saharan African countries?",
        options: [
            "Existence of efficient institutions",
            "Absence of mitigation policies",
            "Lack of growth and development plans",
            "Lack of using indigenous knowledge"
        ],
        correctAnswer: 2,
        explanation: "Extreme poverty remains a challenge in Sub-Saharan Africa due to the lack of effective growth and development plans.",
        topic: "Poverty",
        difficulty: "medium"
    },
    {
        id: 59,
        text: "What is the reason for women to experience extreme poverty in the developing world?",
        options: [
            "Dominance of male - headed households",
            "The earning capacity of women is high",
            "Their control over their spouses’ income is limited.",
            "Their access to the formal sector employment is high."
        ],
        correctAnswer: 2,
        explanation: "Women in developing countries often experience extreme poverty due to limited control over household income and resources.",
        topic: "Poverty",
        difficulty: "medium"
    },
    {
        id: 60,
        text: "Which one of the following is among the measures that should not be considered to alleviate the problem of poverty facing women?",
        options: [
            "Adoption of policy that integrates women in various programs and influences their welfare",
            "Increasing female participation in education and other training programs",
            "Enhancing female participation in formal sector employment",
            "Discouraging women activity in agricultural extension programmes"
        ],
        correctAnswer: 3,
        explanation: "Discouraging women's participation in agricultural extension programs would not help alleviate poverty among women.",
        topic: "Poverty Reduction",
        difficulty: "medium"
    },
    {
        id: 61,
        text: "Which one of the following expresses the classical view?",
        options: [
            "The economy will move towards full employment of GDP.",
            "Expansionary fiscal or monetary policy is necessary.",
            "Demand side policies only affect the real wage, employment and output.",
            "Monetary policy has effects on the real sphere of the economy."
        ],
        correctAnswer: 0,
        explanation: "The classical view holds that the economy will naturally move towards full employment without the need for government intervention.",
        topic: "Classical Economics",
        difficulty: "hard"
    },
    {
        id: 62,
        text: "What is the important lesson the world has learnt from the 1930’s Great Depression?",
        options: [
            "The self – correcting feature of the market works",
            "The additional government spending will stimulate unemployment.",
            "The possibility of real GDP to fall below the potential GDP is nil.",
            "The importance of active stabilization policies"
        ],
        correctAnswer: 3,
        explanation: "The Great Depression taught the importance of active stabilization policies, such as government intervention, to prevent economic collapse.",
        topic: "Economic History",
        difficulty: "hard"
    },
    {
        id: 63,
        text: "Which one of the following school of thoughts suggested that the Central bank should follow a constant growth rule for some monetary aggregate to address macroeconomic problems?",
        options: [
            "Keynesian",
            "Classical",
            "Monetarism",
            "New Keynesian"
        ],
        correctAnswer: 2,
        explanation: "Monetarism, led by Milton Friedman, advocates for a constant growth rule in the money supply to address macroeconomic issues.",
        topic: "Monetary Policy",
        difficulty: "hard"
    },
    {
        id: 64,
        text: "Which one of the following is the component of aggregate demand that includes private purchases of structures, equipment’s and accumulation of inventories?",
        options: [
            "Consumption",
            "Investment",
            "Government Purchases",
            "Net Exports"
        ],
        correctAnswer: 1,
        explanation: "Investment in aggregate demand includes private purchases of structures, equipment, and inventory accumulation.",
        topic: "Aggregate Demand",
        difficulty: "medium"
    },
    {
        id: 65,
        text: "In macroeconomics, the current consumption expenditure is likely to increase due to",
        options: [
            "expectation of lower price in the future.",
            "increase in income tax.",
            "increase in interest rate.",
            "expectation of higher future income."
        ],
        correctAnswer: 3,
        explanation: "Current consumption expenditure is likely to increase if consumers expect higher future income, as they feel more confident to spend now.",
        topic: "Consumption",
        difficulty: "medium"
    },
    {
        id: 66,
        text: "Which one of the following is a branch of economics that studies about the aggregate behavior of the economy?",
        options: [
            "Microeconomics",
            "Macroeconomics",
            "International economics",
            "Development economics"
        ],
        correctAnswer: 1,
        explanation: "Macroeconomics studies the aggregate behavior of the economy, including topics like inflation, unemployment, and GDP.",
        topic: "Macroeconomics",
        difficulty: "easy"
    },
    {
        id: 67,
        text: "Among the following, which one is a macroeconomic issue?",
        options: [
            "Actions of an individual agent within an economy",
            "The economic activities of a consumer, a producer or industry",
            "Resource allocation or price determination as central problem",
            "Structure and performance of the economy as a whole"
        ],
        correctAnswer: 3,
        explanation: "Macroeconomics deals with the structure and performance of the economy as a whole, rather than individual agents or industries.",
        topic: "Macroeconomics",
        difficulty: "easy"
    },
    {
        id: 68,
        text: "Which of the following is used to calculate GDP by adding all the incomes accruing to all factors of production used in producing the national output?",
        options: [
            "Product approach",
            "Expenditure approach",
            "Income approach",
            "Value added approach"
        ],
        correctAnswer: 2,
        explanation: "The income approach calculates GDP by summing all incomes earned by factors of production, such as wages, rents, and profits.",
        topic: "GDP Calculation",
        difficulty: "medium"
    },
    {
        id: 69,
        text: "Which one of the following characterizes period of expansion in the business cycle?",
        options: [
            "Unemployment rises at this stage.",
            "The pressure on prices is upward.",
            "Economic growth slows down.",
            "Full employment occurs at this stage."
        ],
        correctAnswer: 1,
        explanation: "During the expansion phase of the business cycle, economic activity increases, leading to upward pressure on prices.",
        topic: "Business Cycle",
        difficulty: "medium"
    },
    {
        id: 70,
        text: "In which of the following is the market imports of goods and services are shown?",
        options: [
            "Capital account",
            "Terms of trade",
            "Current account",
            "Balance of payments"
        ],
        correctAnswer: 2,
        explanation: "Imports of goods and services are recorded in the current account of the balance of payments.",
        topic: "Balance of Payments",
        difficulty: "medium"
    },
    {
        id: 71,
        text: "Which one of the following is the problem of taxation in Ethiopia that is considered to be legal from the point of view of law but poses problems on the tax administration?",
        options: [
            "Tax evasion",
            "Tax avoidance",
            "Tax exemption",
            "Tax incidence"
        ],
        correctAnswer: 1,
        explanation: "Tax avoidance is legal but poses challenges for tax administration as it reduces revenue collection.",
        topic: "Taxation",
        difficulty: "medium"
    },
    {
        id: 72,
        text: "What remedial solutions do you think should be put in place to alleviate tax collection problem in Ethiopia?",
        options: [
            "Provide client oriented service to tax payers",
            "Lowering the tax rate far below the current rate",
            "Following broad based tax system",
            "Adopting expansionary fiscal policy"
        ],
        correctAnswer: 0,
        explanation: "Providing client-oriented services to taxpayers can improve compliance and alleviate tax collection problems.",
        topic: "Taxation",
        difficulty: "medium"
    },
    {
        id: 73,
        text: "The World Bank defines poverty as 'the pronounced deprivation in wellbeing'. Which one of the following is NOT the implication of wellbeing?",
        options: [
            "The poor are those who do not have any control over commodities.",
            "It relates poverty with some specific types of consumption.",
            "It relates to lack of key capability to function in the society.",
            "Poverty is only about the lack of one thing, food."
        ],
        correctAnswer: 3,
        explanation: "Wellbeing is not solely about the lack of food but encompasses a broader range of capabilities and resources.",
        topic: "Poverty",
        difficulty: "medium"
    },
    {
        id: 74,
        text: "Which one of the following is a Uni-dimensional measure of poverty that helps to understand the degree of income inequality among the poor?",
        options: [
            "Total poverty gap",
            "The Foster – Greer – Thorbecke Index",
            "Multidimensional Poverty index",
            "Poverty headcount ratio"
        ],
        correctAnswer: 0,
        explanation: "The total poverty gap is a uni-dimensional measure that helps understand the degree of income inequality among the poor.",
        topic: "Poverty Measurement",
        difficulty: "hard"
    },
    {
        id: 75,
        text: "One of the following shows the proportion of total national income that factors of production receives, which one is it?",
        options: [
            "Personal distribution of income",
            "Size distribution of income",
            "Functional distribution of income",
            "Income distribution"
        ],
        correctAnswer: 2,
        explanation: "Functional distribution of income shows how national income is distributed among factors of production like labor, capital, and land.",
        topic: "Income Distribution",
        difficulty: "medium"
    },
    {
        id: 76,
        text: "Consider a hypothetical economy in which a consumer buys 2kg of apples and 5kg of oranges at the price of birr 150 and 70 per kilogram respectively in 2016 E.C. If in 2015 E.C. the prices of these two goods, apple and orange, were birr 125 and 55 per kilogram respectively, then what is the rate of inflation during the year 2016 E.C. assuming that 2015 E.C. is base year?",
        options: [
            "10.28%",
            "17.65%",
            "23.80%",
            "21.33%"
        ],
        correctAnswer: 2,
        explanation: "The rate of inflation is calculated by comparing the price levels of 2016 E.C. with the base year 2015 E.C., resulting in a 23.80% increase.",
        topic: "Inflation",
        difficulty: "hard"
    },
    {
        id: 77,
        text: "Suppose that the nominal wage that the firm has agreed to pay for worker is birr 60 per hour. What is the change in the real wage rate if the price level as measured by the price index increases from 2.50 to 3.00?",
        options: [
            "The real wage rises by 4 birr.",
            "The real wage declined by 4 birr.",
            "The real wage declined by 6 birr.",
            "The real wage rises by 6 birr."
        ],
        correctAnswer: 1,
        explanation: "The real wage declines by 4 birr as the price level increases, reducing the purchasing power of the nominal wage.",
        topic: "Real Wage",
        difficulty: "hard"
    },
    {
        id: 78,
        text: "Gemechu is employed in an organization and his gross salary is 18,000 birr. What is his net salary after deducting 35% employment income tax?",
        options: [
            "13,200 birr",
            "11,700 birr",
            "12,600 birr",
            "10,800 birr"
        ],
        correctAnswer: 1,
        explanation: "After deducting 35% income tax from 18,000 birr, Gemechu's net salary is 11,700 birr.",
        topic: "Taxation",
        difficulty: "medium"
    },
    {
        id: 79,
        text: "Suppose in a given economy the population who are willing and able to work is 5 million and out of this the total number of employed are 2 million. What is the unemployment rate?",
        options: [
            "40%",
            "70%",
            "30%",
            "60%"
        ],
        correctAnswer: 3,
        explanation: "The unemployment rate is calculated as (Unemployed / Labor Force) * 100, which is 60% in this case.",
        topic: "Unemployment",
        difficulty: "medium"
    },
    {
        id: 80,
        text: "A census that was conducted in a particular economy shows that the total adult population is 27 million and those who are willing and able to work is 6 million. What is the labour force participation rate in this economy?",
        options: [
            "12.18%",
            "15.73%",
            "22.22%",
            "25.37%"
        ],
        correctAnswer: 2,
        explanation: "The labor force participation rate is calculated as (Labor Force / Adult Population) * 100, resulting in 22.22%.",
        topic: "Labor Force",
        difficulty: "medium"
    }
];

export default economicsQuestions2016;