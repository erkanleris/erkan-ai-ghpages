/**
 * الإعدادات المركزية لموقع ERKAN AI (نسخة GitHub Pages)
 * عدّل القيم من هذا الملف فقط — لا حاجة لتعديل أي ملف آخر.
 */

/** تاريخ ووقت الإطلاق الرسمي (UTC) — عدّل هذا التاريخ لتغيير العداد التنازلي */
export const LAUNCH_DATE = new Date("2026-09-15T00:00:00Z");

/**
 * العداد الأساسي لعدد المسجلين مسبقاً.
 * في نسخة GitHub Pages الثابتة: يبدأ من هذا الرقم ويزيد عشوائياً من 1 إلى 7 كل دقيقة.
 */
export const BASE_REGISTERED_COUNT = 76288;

/**
 * زيادة عشوائية مُحاكاة: كل دقيقة تُضاف قيمة عشوائية بين 1 و 7.
 * التسلسل حتمي (بذرة ثابتة لكل دقيقة) ليبقى العدد متسقاً عبر كل جلسة تحميل.
 */
const ELAPSED_MINUTES = Math.floor((Date.now() - Date.UTC(2026, 7, 12, 0, 0)) / 60000);

function seededRand(n: number): number {
  // LCG بسيط بذرة ثابتة لكل دقيقة
  let x = 1337 + n;
  x = (x * 9301 + 49297) % 233280;
  return (x % 7) + 1;
}

const SIMULATED_ADDITION = Array.from(
  { length: Math.min(Math.max(ELAPSED_MINUTES, 0), 20000) },
  (_, i) => seededRand(i),
).reduce((a, b) => a + b, 0);

/** العدد المعروض حالياً: الأساسي + الزيادة العشوائية المتراكمة */
export function getLiveRegisteredCount() {
  return BASE_REGISTERED_COUNT + SIMULATED_ADDITION;
}

/** رابط الشعار الرسمي — يُرفع مع موقع GitHub Pages */
export const LOGO_URL = "/erkan-ai-ghpages/icon-180.png";

/** النصوص الأساسية */
export const SITE = {
  name: "ERKAN AI",
  taglineEn: "ERKAN AI IS COMING",
  taglineAr: "الذكاء الاصطناعي... بطريقتك.",
  description:
    "احجز مكانك قبل الإطلاق، واختر اسم المستخدم الخاص بك قبل الجميع.",
  footerTagline: "Built for the next generation.",
  socialShareText: "حجزت مقعدي في ERKAN AI قبل الإطلاق! انضم الآن:",
  shareUrlFallback: "",
};

export const USERNAME_REGEX = /^[A-Za-z0-9_]+$/;
export const USERNAME_MIN = 3;
export const USERNAME_MAX = 10;
export const AGE_MIN = 13;
export const AGE_MAX = 120;
