const DEFAULT_LESSONS = [
    {
        id: 1,
        title: "المحاضرة الأولى: التأسيس الشامل (مجانية)",
        description: "مقدمة تعريفية لفهم النظام وكيفية التعامل مع المنصة.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        isFree: true,
        requiredQuizId: null
    }
];

const DEFAULT_QUIZZES = [
    {
        id: 101,
        title: "امتحان تجريبي سريع",
        passScore: 50,
        questions: [
            { q: "ما هي عاصمة مصر؟", options: ["الإسكندرية", "القاهرة", "الجيزة", "أسوان"], answer: 1 }
        ]
    }
];

const DEFAULT_CODES = [
    { code: "VIP-2026", unlocks: [1], label: "الباقة التجريبية", used: false, usedBy: null }
];
