// ملف البيانات الأساسية للمنصة (يمكنك تعديل المحاضرات والأسئلة من هنا مباشرة)

const DEFAULT_LESSONS = [
    {
        id: 1,
        title: "المحاضرة الأولى: أساسيات المنهج (مجانية)",
        description: "مقدمة شاملة وتأسيس أهم القواعد الأساسية قبل الدخول في تفاصيل المنهج.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // ضع رابط يوتيوب Embed هنا
        isFree: true,
        requiredQuizId: null
    },
    {
        id: 2,
        title: "المحاضرة الثانية: الفصل الأول - الجزء الأول",
        description: "شرح تفصيلي للدرس الأول مع حل أهم أفكار الامتحانات. (تتطلب كود تفعيل)",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        isFree: false,
        requiredQuizId: null
    },
    {
        id: 3,
        title: "المحاضرة الثالثة: الفصل الأول - الجزء الثاني",
        description: "تطبيقات متقدمة وحل مسائل شاملة. (تتطلب كود + اجتياز امتحان المحاضرة الثانية)",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        isFree: false,
        requiredQuizId: 101 // رقم الامتحان المطلوب اجتيازه قبل فتح هذه المحاضرة
    }
];

const DEFAULT_QUIZZES = [
    {
        id: 101,
        title: "امتحان تقييم المحاضرة الثانية",
        passScore: 50, // نسبة النجاح المطلوبة (%)
        questions: [
            {
                q: "السؤال الأول: ما هي وحدة القياس الأساسية في النظام الدولي؟",
                options: ["المتر", "القدم", "البوصة", "الياردة"],
                answer: 0 // الإجابة الصحيحة هي الاختيار رقم 0 (المتر)
            },
            {
                q: "السؤال الثاني: ناتج جمع 5 + 7 يساوي:",
                options: ["10", "11", "12", "13"],
                answer: 2 // الاختيار رقم 2 (12)
            }
        ]
    }
];

// أكواد تجريبية جاهزة للاستخدام فوراً
const DEFAULT_CODES = [
    { code: "VIP-2026", unlocks: [2, 3], label: "الباقة الكاملة", used: false, usedBy: null },
    { code: "LEC2-100", unlocks: [2], label: "المحاضرة الثانية", used: false, usedBy: null },
    { code: "LEC3-200", unlocks: [3], label: "المحاضرة الثالثة", used: false, usedBy: null }
];
