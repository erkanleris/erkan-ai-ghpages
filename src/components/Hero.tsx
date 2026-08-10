import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { LOGO_URL, SITE } from "../lib/siteConfig";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const },
};

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 pt-20 pb-12 text-center sm:min-h-[92vh] sm:pt-24">
      {/* Badge */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.05 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-sky-300 backdrop-blur-md sm:text-xs md:text-sm"
      >
        <Sparkles className="h-3.5 w-3.5" />
        <span>التسجيل المسبق مفتوح الآن — الأماكن محدودة</span>
      </motion.div>

      {/* Logo */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.12 }}
        className="float-slow relative mb-6"
      >
        <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-tr from-blue-600/30 via-violet-600/25 to-sky-500/20 blur-2xl" />
        <img
          src={LOGO_URL}
          alt="شعار ERKAN AI"
          width={160}
          height={160}
          loading="eager"
          className="relative h-24 w-24 rounded-[1.6rem] shadow-[0_0_60px_rgba(59,130,246,0.35)] md:h-40 md:w-40"
        />
      </motion.div>

      {/* Main title */}
      <motion.h1
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="font-display text-[2.1rem] font-extrabold leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {SITE.taglineEn}
      </motion.h1>

      {/* Arabic sub-title */}
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-3 text-xl font-bold text-gradient-brand sm:text-3xl md:text-4xl"
      >
        {SITE.taglineAr}
      </motion.p>

      {/* Description */}
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.38 }}
        className="mt-4 max-w-xl px-2 text-[15px] leading-relaxed text-muted-foreground md:text-lg"
      >
        {SITE.description}
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.46 }}
        className="mt-8 flex w-full max-w-sm flex-col items-center gap-3 px-4 sm:max-w-none sm:flex-row sm:px-0"
      >
        <a
          href="#register"
          className="btn-glow w-full rounded-xl px-8 py-3.5 text-base font-bold text-white sm:w-auto"
        >
          احجز مقعدك الآن
        </a>
        <a
          href="#why"
          className="btn-ghost-brand w-full rounded-xl px-8 py-3.5 text-base font-semibold text-foreground sm:w-auto"
        >
          اكتشف ERKAN AI
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.58 }}
        className="mt-10 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
