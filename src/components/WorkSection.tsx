import { motion } from "motion/react";
import { PixelWord } from "./PixelText";

export default function WorkSection() {
  const projects = [
    {
      id: "starlit-ai",
      title: "星夜智能体平台",
      date: "2026.04 - 2026.05",
      tag: "AI Agent 产品设计",
      image: "/images/starlit_project.png",
      description: "多角色 AI 智能体产品，从 PRD 到 React Demo 完整落地",
      projectLink: "https://starlit-ai-companions.vercel.app/",
      prdLink: "https://icnldp32ly5r.feishu.cn/docx/S9Z2dVqtBoW11vxm3PBcesBOnXV?from=from_copylink",
      labels: ["角色设定", "Prompt 规则", "接口接入", "移动端测试"]
    },
    {
      id: "daiban-errands",
      title: "校园跑腿小程序",
      date: "2026.03 - 2026.04",
      tag: "独立产品负责人",
      image: "/images/daiban_project.png",
      description: "面向校园即时配送的 C 端拼单产品，独立完成全流程",
      projectLink: "https://daiban-preview.vercel.app/",
      prdLink: "https://icnldp32ly5r.feishu.cn/docx/IvmidATVNo43dxxmvJjcYEvenDb?from=from_copylink",
      labels: ["拼单机制", "用户访谈", "履约风控", "转化漏斗"]
    },
    {
      id: "writing-skill",
      title: "课程论文写作 Skill",
      date: "2026.03 - 2026.05",
      tag: "项目实践",
      image: "/images/academic_skill_project.png",
      description: "论文改写规则框架，引导模型输出专业空间表达",
      projectLink: "https://github.com/el6313315-ship-it/humanize-landscape-academic-writing.git",
      labels: ["规则框架", "md 文件", "专业表达", "案例对照"]
    }
  ];

  return (
    <section
      id="work-section"
      className="relative bg-surface py-24 md:py-32 px-6 md:px-12 z-20 border-t border-brand"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="text-left">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-px w-8 bg-brand" />
              <span className="pixel-kicker text-xs font-mono uppercase tracking-[0.25em] text-brand font-bold">
                02 // PROJECTS
              </span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-brand uppercase tracking-normal leading-none">
              <PixelWord text="PROJECTS" />
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ y: 34, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="pixel-card group flex min-h-[620px] h-full flex-col border border-brand bg-surface p-5 text-left transition-[background-color,box-shadow,border-color,transform] duration-300 hover:bg-[#fffaf2]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-brand bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full select-none object-cover grayscale brightness-75 contrast-110 transition-[filter,transform] duration-[420ms] ease-in-out md:group-hover:scale-[1.04] md:group-hover:grayscale-0 md:group-hover:brightness-105 md:group-hover:contrast-100"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between pt-7">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#888]">
                      {project.tag}
                    </p>
                    <p className="font-mono text-[10px] text-[#888]">
                      {project.date}
                    </p>
                  </div>

                  <h3 className="text-[26px] font-black leading-tight tracking-tight text-brand transition-transform duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-relaxed text-text-dim transition-colors duration-300 group-hover:text-brand">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.labels.map((label) => (
                      <span
                        key={label}
                      className="border border-[#050511]/35 px-[10px] py-[4px] text-[11px] tracking-[0.08em] text-[#555] transition-colors duration-200 group-hover:border-[#222] group-hover:text-[#222]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex flex-wrap gap-3">
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="pixel-button inline-flex items-center gap-1 px-5 py-3 text-[14px] uppercase tracking-[0.1em] no-underline"
                    >
                      <span className="pixel-button-text">项目链接</span>
                    </a>
                  )}
                  {project.prdLink && (
                    <a
                      href={project.prdLink}
                      target="_blank"
                      rel="noreferrer"
                      className="pixel-button inline-flex items-center gap-1 px-5 py-3 text-[14px] uppercase tracking-[0.1em] no-underline"
                    >
                      <span className="pixel-button-text">PRD链接</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
