import { motion } from "framer-motion";
import { ArrowUpLeft, Images, Sparkles } from "lucide-react";

const APP_SCREENS = [
  {
    src: "/erkan-ai-ghpages/app-home.jpg",
    alt: "الواجهة الرئيسية لتطبيق ERKAN AI",
    label: "واجهة يومك مع ERKAN AI",
    description: "أدوات سريعة ومحادثات ذكية مصممة للمستخدم العربي.",
  },
  {
    src: "/erkan-ai-ghpages/app-chat-rights.jpg",
    alt: "محادثة داخل تطبيق ERKAN AI حول حقوق الفلسطينيين",
    label: "محادثة واعية",
    description: "إجابات واضحة وحساسة للقضايا الإنسانية والواقع العربي.",
  },
  {
    src: "/erkan-ai-ghpages/app-chat-israel.jpg",
    alt: "محادثة داخل تطبيق ERKAN AI حول فلسطين وإسرائيل",
    label: "ذكاء يفهم السياق",
    description: "تجربة محادثة عربية تحافظ على الكرامة والوضوح في المواضيع الحساسة.",
  },
];

export default function AppShowcase() {
  return (
    <section id="app-preview" className="relative z-10 overflow-hidden px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200">
            <Sparkles className="h-4 w-4 text-violet-300" />
            لمحة من داخل التطبيق
          </div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            تجربة عربية <span className="text-gradient-brand">بروح مختلفة</span>
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            شاهد كيف يجمع ERKAN AI بين المحادثة الذكية والأدوات العملية في واجهة هادئة وسهلة الاستخدام.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {APP_SCREENS.map((screen, index) => (
            <motion.article
              key={screen.src}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group"
            >
              <div className="glass-card relative overflow-hidden rounded-[1.75rem] p-2 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-[1.25rem] bg-[#071b1a]">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="block aspect-[9/16] w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071b1a]/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md">
                    <ArrowUpLeft className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="px-2 pt-5 text-right">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <Images className="h-4 w-4 text-violet-300" />
                  {screen.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{screen.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
