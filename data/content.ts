/**
 * ============================================================
 *  SohelX — SITE CONTENT (single source of truth)
 * ------------------------------------------------------------
 *  HOW TO UPDATE THIS SITE:
 *  Edit ONLY this file, then redeploy (Vercel auto-deploys on
 *  git push). Every page (Home, Classes, Schedule, Downloads,
 *  About) reads from here — no other file needs touching.
 *
 *  - New class video?      Add an entry to `classes`.
 *  - Weekly plan changed?  Edit `schedule`.
 *  - New download file?    Add an entry to `downloads`.
 *
 *  Status values for classes:
 *    "new"      → just published (badge: নতুন)
 *    "upcoming" → publishing very soon (badge: শীঘ্রই আসছে)
 *    "planned"  → announced in advance (badge: পরিকল্পিত)
 *
 *  Download links: use "#" as a placeholder until the real
 *  file/Drive link is ready, and set `ready: false`.
 * ============================================================
 */

export const site = {
  name: "SohelX",
  tagline: "LEARN • CREATE • GROW",
  taglineBn: "শিখুন • বানান • এগিয়ে যান",
  description:
    "SohelX — বাংলায় টেক টিউটোরিয়াল: ফেসবুক মার্কেটিং, AI টুলস, ইউটিউব গ্রোথ, ওয়েব ও অ্যাপ ডেভেলপমেন্ট এবং অনলাইন ইনকাম।",
  // Official Facebook page (created 2026-10-14)
  facebookPage: "https://www.facebook.com/profile.php?id=61595431347849",
  domain: "https://sohelhossain.site",
};

/** Category chips shown on Home + used by class cards. */
export const categories = [
  { id: "ai", label: "AI Tools & Prompts", labelBn: "এআই টুলস" },
  { id: "facebook", label: "Facebook Growth", labelBn: "ফেসবুক গ্রোথ" },
  { id: "youtube", label: "YouTube Creation", labelBn: "ইউটিউব" },
  { id: "webapp", label: "Web & App Development", labelBn: "ওয়েব ও অ্যাপ" },
  { id: "income", label: "Online Income", labelBn: "অনলাইন ইনকাম" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export type ClassStatus = "new" | "upcoming" | "planned";

export interface ClassVideo {
  id: string; // stable slug, e.g. "class-01"
  title: string; // full video title
  category: CategoryId;
  date: string; // publish date (YYYY-MM-DD) or "TBA"
  status: ClassStatus;
  /** Facebook post/video URL — fill in AFTER uploading to the page. Empty = button hidden. */
  facebookUrl: string;
  summary: string; // 1-line description for the card
}

export const classes: ClassVideo[] = [
  {
    id: "class-01",
    title: "বুস্ট বাটন vs অ্যাডস ম্যানেজার — কোনটা কখন? | Facebook Marketing Class 1",
    category: "facebook",
    date: "2026-10-14",
    status: "upcoming",
    facebookUrl: "", // ← add the FB post link after the 10 AM upload
    summary:
      "Boost Post আসলে কী করে, Ads Manager কেন প্রফেশনালদের পছন্দ — ৩ মিনিটে সঠিক সিদ্ধান্ত নেওয়া শিখুন।",
  },
  {
    id: "class-02",
    title: "Ads Manager ফুল সেটআপ — A to Z | Facebook Marketing Class 2",
    category: "facebook",
    date: "TBA",
    status: "planned",
    facebookUrl: "",
    summary:
      "অ্যাড অ্যাকাউন্ট, পিক্সেল, টার্গেটিং থেকে প্রথম ক্যাম্পেইন লাইভ — ধাপে ধাপে সম্পূর্ণ সেটআপ।",
  },
  {
    id: "class-03",
    title: "AI টুলস দিয়ে কনটেন্ট বানানো — ChatGPT + ফ্রি টুলস | AI Tools Class 1",
    category: "ai",
    date: "TBA",
    status: "planned",
    facebookUrl: "",
    summary:
      "ফ্রি AI টুলস দিয়ে লেখা, ছবি ও ভিডিও আইডিয়া — কনটেন্ট ক্রিয়েটরদের প্রোডাক্টিভিটি বুস্টার।",
  },
  {
    id: "class-04",
    title: "ইউটিউব চ্যানেল গ্রোথ — ০ থেকে মনিটাইজেশন | YouTube Class 1",
    category: "youtube",
    date: "TBA",
    status: "planned",
    facebookUrl: "",
    summary:
      "নতুন চ্যানেল সেটআপ, নিশ সিলেকশন, আপলোড স্ট্র্যাটেজি — মনিটাইজেশন পর্যন্ত রোডম্যাপ।",
  },
  {
    id: "class-05",
    title: "অনলাইন ইনকাম শুরু — প্রথম আয়ের রোডম্যাপ | Online Income Class 1",
    category: "income",
    date: "TBA",
    status: "planned",
    facebookUrl: "",
    summary:
      "ফ্রিল্যান্সিং vs কনটেন্ট vs সার্ভিস — আপনার জন্য সঠিক পথ বেছে নেওয়ার গাইড।",
  },
];

/** Weekly plan, posted in advance. Weeks reference class ids above. */
export interface WeekPlan {
  week: string; // e.g. "Week 1"
  dateRange: string; // e.g. "১৪ – ২০ অক্টোবর"
  items: { classId: string; note: string }[];
}

export const schedule: WeekPlan[] = [
  {
    week: "Week 1",
    dateRange: "১৪ – ২০ অক্টোবর ২০২৬",
    items: [
      { classId: "class-01", note: "পাবলিশ — ১৪ অক্টোবর" },
      { classId: "class-02", note: "শুটিং + পাবলিশ এই সপ্তাহেই" },
    ],
  },
  {
    week: "Week 2",
    dateRange: "২১ – ২৭ অক্টোবর ২০২৬",
    items: [
      { classId: "class-03", note: "AI টুলস সপ্তাহ" },
      { classId: "class-04", note: "ইউটিউব গ্রোথ সপ্তাহ" },
    ],
  },
  {
    week: "Week 3",
    dateRange: "২৮ অক্টোবর – ৩ নভেম্বর ২০২৬",
    items: [
      { classId: "class-05", note: "অনলাইন ইনকাম সপ্তাহ" },
      { classId: "class-02", note: "Q&A — কমেন্টের প্রশ্নের উত্তর পর্ব (পরিকল্পিত)" },
    ],
  },
];

export interface DownloadItem {
  id: string;
  name: string;
  description: string;
  size: string; // e.g. "12 MB" or "—" when unknown
  /** Real file/Drive URL later. "#" = placeholder, shown disabled until ready. */
  url: string;
  ready: boolean;
}

export interface DownloadCategory {
  id: string;
  title: string; // e.g. "অ্যাপ ফাইল"
  titleEn: string;
  items: DownloadItem[];
}

export const downloads: DownloadCategory[] = [
  {
    id: "apps",
    title: "অ্যাপ ফাইল",
    titleEn: "App Files",
    items: [
      {
        id: "app-01",
        name: "SohelX Learning App v1.0",
        description: "সব ক্লাস এক জায়গায় — অ্যান্ড্রয়েড অ্যাপ (শীঘ্রই আসছে)।",
        size: "—",
        url: "#", // PLACEHOLDER — replace with real APK/Drive link
        ready: false,
      },
    ],
  },
  {
    id: "tricks",
    title: "ট্রিকস ও ড্রাইভ ফাইল",
    titleEn: "Tricks & Drive Files",
    items: [
      {
        id: "trick-01",
        name: "Facebook Ads চেকলিস্ট (PDF)",
        description: "প্রথম ক্যাম্পেইন চালানোর আগে যাচাই করার চেকলিস্ট।",
        size: "—",
        url: "#", // PLACEHOLDER — replace with real Drive link
        ready: false,
      },
      {
        id: "trick-02",
        name: "AI Prompts প্যাক (বাংলা)",
        description: "কনটেন্ট বানানোর জন্য তৈরি ৫০+ বাংলা প্রম্পট।",
        size: "—",
        url: "#", // PLACEHOLDER — replace with real Drive link
        ready: false,
      },
    ],
  },
];

/** Badge labels for class statuses. */
export const statusLabels: Record<ClassStatus, string> = {
  new: "নতুন",
  upcoming: "শীঘ্রই আসছে",
  planned: "পরিকল্পিত",
};

/** Look up a category by id (for labels on cards). */
export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

/** Look up a class by id (for the schedule page). */
export function getClass(id: string) {
  return classes.find((c) => c.id === id);
}
