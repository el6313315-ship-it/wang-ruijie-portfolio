import { motion } from "motion/react";
import { Bot, Boxes, FileText, Workflow } from "lucide-react";

export default function AboutAndSkillsSection() {
  const education = [
    {
      school: "华北水利水电大学",
      degree: "艺术学 硕士",
      period: "2025.10 - 2028.07",
      note: "保研 / 研一",
      awards: ""
    },
    {
      school: "华北水利水电大学",
      degree: "环境设计 本科",
      period: "2021.09 - 2025.07",
      note: "GPA 4.32/5.0 / 专业第一",
      awards: "获得荣誉：国家奖学金 · 省优秀毕业生 · 国家励志奖学金 · 省三好学生 · 专业竞赛获国家级奖项15项、省级奖项23项"
    }
  ];

  const capabilities = [
    {
      id: "ai-product",
      title: "AI 产品设计",
      icon: <Bot className="w-5 h-5" />
    },
    {
      id: "prd-prototype",
      title: "PRD 与原型表达",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: "react-demo",
      title: "轻量应用搭建",
      icon: <Boxes className="w-5 h-5" />
    },
    {
      id: "test-iteration",
      title: "测试与迭代",
      icon: <Workflow className="w-5 h-5" />
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="about-section"
      className="relative bg-surface py-24 md:py-32 px-6 md:px-12 border-b border-brand overflow-hidden z-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,5,17,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,5,17,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_82%,transparent)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div id="services-section" className="absolute -top-36" />

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div className="text-left">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-px w-8 bg-brand" />
              <span className="pixel-kicker text-xs font-mono uppercase tracking-[0.2em] text-brand">
                01 // PROFILE & SKILLS
              </span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-brand uppercase tracking-normal leading-none">
              ABOUT & SKILLS
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pixel-corners lg:col-span-5 w-full aspect-[3/4] relative overflow-hidden bg-surface border border-brand group transition-colors duration-500"
          >
            <img
              src="/images/ruijie_new_portrait.png"
              alt="Ruijie Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-750"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3e8]/20 to-transparent pointer-events-none" />
          </motion.div>

          <div className="lg:col-span-7 lg:-mt-1.5 lg:self-stretch flex flex-col gap-6 lg:justify-between text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-b border-brand pb-6"
            >
              <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-brand uppercase tracking-tight leading-none mb-3">
                Hi, I am Ruijie
              </h3>
              <p className="text-brand font-display font-black text-xl sm:text-2xl tracking-wide mb-4">
                AI Product Intern Candidate
              </p>
              <p className="text-text-dim text-base sm:text-lg leading-relaxed font-light font-sans max-w-2xl">
                面向 AI 产品实习，关注 AI Agent、Prompt 规则、人设设定、对话流程与轻量级 Demo 落地，能够把真实场景拆成可验证的产品方案。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-text-dim mb-4">
                // EDUCATION
              </h4>
              <div className="divide-y divide-brand/20 border-y border-brand/20">
                {education.map((edu) => (
                  <div key={`${edu.school}-${edu.period}`} className="grid grid-cols-[1fr_auto] gap-4 py-3 items-center transition-colors duration-200 hover:bg-brand/[0.04]">
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-brand">{edu.school}</p>
                      <p className="text-sm text-text-dim mt-0.5 font-light">{edu.degree}</p>
                      {edu.awards && (
                        <p className="mt-1 text-[12px] text-[#666] font-normal">{edu.awards}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono text-surface font-bold uppercase tracking-wider bg-brand px-2 py-0.5 border border-brand">
                        {edu.period}
                      </span>
                      {edu.note && (
                        <p className="text-[11px] font-mono text-text-dim mt-1 uppercase font-semibold">{edu.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-text-dim mb-4">
                // CORE SKILLS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="pixel-card group flex items-center gap-4 p-4 bg-surface border border-brand duration-300 transition-[background-color,color,box-shadow,transform] hover:bg-brand hover:text-surface"
                  >
                    <div className="p-2 border border-brand text-brand group-hover:border-surface group-hover:text-surface transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <h5 className="text-lg font-bold text-brand group-hover:text-surface transition-colors leading-tight">
                      {item.title}
                    </h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
