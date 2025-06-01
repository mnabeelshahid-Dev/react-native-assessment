export interface Option {
  key: string;
  label: string;
  score: number;
}

export interface Question {
  id: number;
  label: string;
  options: Option[];
}

export const QUESTIONS = [
    {
        id: 1,
        label: "How would you describe your investment Knowledge?",
        options: [
            { key: "novice", label: "Novice", score: 1 },
            { key: "intermediate", label: "Intermediate", score: 2 },
            { key: "advanced", label: "Advanced", score: 3 },
        ]
    },
    {
        id: 2,
        label: "Investment Duration.",
        options: [
            { key: "short-term", label: "Short-term (less than 1 year)", score: 1 },
            { key: "medium-term", label: "Medium-term(1-5 years)", score: 2 },
            { key: "long-term", label: "Frequently", score: 3 },
        ]
    },
    {
        id: 3,
        label: "How comfortable are you with taking risks?",
        options: [
            { key: "very-risks", label: "Very risk-averse", score: 1 },
            { key: "some-risk", label: "Somewhat risk-averse", score: 2 },
            { key: "neutral", label: "Neutral Somewhat risk-tolerant", score: 3 },
            { key: "risk-tolerent", label: "Very risk-tolerant", score: 4 },
        ]
    },
    {
        id: 4,
        label: "What percentage of your income are you willing to invest?",
        options: [
            { key: "less_than_10", label: "Less than 10%", score: 1 },
            { key: "10_to_20", label: "10%-25%", score: 2 },
            { key: "25_to_50", label: "25-50%", score: 3 },
            { key: "more_than_50", label: "More than 50%", score: 4 },
        ]
    },
    {
        id: 5,
        label: "How would you react to a sudden drop in the value of your investments?",
        options: [
            { key: "panic", label: "Panic and sell immediately", score: 1 },
            { key: "monitor", label: "Monitor closely and consider selling", score: 2 },
            { key: "hold", label: "Hold and wait for recovery", score: 3 },
            { key: "see", label: "See it as a buying opportunity and invest more", score: 4 },
        ]
    },
];