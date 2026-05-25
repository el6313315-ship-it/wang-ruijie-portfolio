import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, Copy, CheckCircle2, MessageSquare, Download } from "lucide-react";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", contactInfo: "", message: "" });
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [successMsg, setSuccessMsg] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;

    const newSubmission = {
      ...formState,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString()
    };

    setSubmissions([newSubmission, ...submissions]);
    setSuccessMsg(true);
    setFormState({ name: "", contactInfo: "", message: "" });
    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  };

  return (
    <section
      id="contact-section"
      className="relative bg-surface py-28 md:py-36 px-6 md:px-12 z-20 border-t border-brand"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-16 font-sans">
          <span className="h-px w-8 bg-brand" />
          <span className="pixel-kicker text-xs font-mono uppercase tracking-[0.2em] text-brand">
            04 // CONTACT
          </span>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-between text-left">
            <div>
              <h2 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl text-brand uppercase tracking-normal leading-none mb-10">
                GET IN <br />
                <span className="text-brand">TOUCH</span>
              </h2>

              {/* Direct Contact copy blocks */}
              <div className="space-y-6 mb-10">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="pixel-card flex items-center justify-between p-4 bg-surface border border-brand transition-all hover:bg-brand/[0.04]"
                >
                  <div className="flex items-center space-x-4">
                    <Mail size={16} className="text-brand" />
                    <div>
                      <span className="block text-[9px] font-mono text-text-dim uppercase">EMAIL</span>
                      <span className="text-sm font-bold text-brand font-mono">1849514146@qq.com</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("1849514146@qq.com", "email")}
                    className="pixel-button p-2 text-text-dim"
                  >
                    {copiedField === "email" ? <CheckCircle2 size={13} className="text-brand" /> : <Copy size={13} />}
                  </button>
                </motion.div>

                {/* Telephone */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="pixel-card flex items-center justify-between p-4 bg-surface border border-brand transition-all hover:bg-brand/[0.04]"
                >
                  <div className="flex items-center space-x-4">
                    <Phone size={16} className="text-brand" />
                    <div>
                      <span className="block text-[9px] font-mono text-text-dim uppercase">PHONE</span>
                      <span className="text-sm font-bold text-brand font-mono">+86 132-5389-8826</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("13253898826", "phone")}
                    className="pixel-button p-2 text-text-dim"
                  >
                    {copiedField === "phone" ? <CheckCircle2 size={13} className="text-brand" /> : <Copy size={13} />}
                  </button>
                </motion.div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-brand text-[10px] font-mono text-text-dim uppercase tracking-wider flex justify-between">
              <span>RUIJIE • PORTFOLIO</span>
              <span>©2026</span>
            </div>
          </div>

          {/* Right Column: Simple Conversion Form */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pixel-corners bg-surface border border-brand p-8 flex flex-col justify-between text-left hover:shadow-[8px_8px_0_rgba(5,5,17,0.18)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Name */}
              <div className="font-sans">
                <label className="block text-xs uppercase tracking-widest text-text-dim mb-2 font-mono">姓名 / NAME</label>
                <input
                  type="text"
                  required
                  placeholder="NAME"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-surface border border-brand focus:bg-brand focus:text-surface p-3 text-brand placeholder:text-text-dim/50 text-sm outline-none transition-colors hover:bg-brand/[0.04]"
                />
              </div>

              {/* 2. Contact Info */}
              <div className="font-sans">
                <label className="block text-xs uppercase tracking-widest text-text-dim mb-2 font-mono">联系方式 / CONTACT</label>
                <input
                  type="text"
                  required
                  placeholder="PHONE OR EMAIL"
                  value={formState.contactInfo}
                  onChange={(e) => setFormState({ ...formState, contactInfo: e.target.value })}
                  className="w-full bg-surface border border-brand focus:bg-brand focus:text-surface p-3 text-brand placeholder:text-text-dim/50 text-sm outline-none transition-colors hover:bg-brand/[0.04]"
                />
              </div>

              {/* 3. Message */}
              <div className="font-sans">
                <label className="block text-xs uppercase tracking-widest text-text-dim mb-2 font-mono">留言 / MESSAGE</label>
                <textarea
                  required
                  rows={3}
                  placeholder="MESSAGE..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-surface border border-brand focus:bg-brand focus:text-surface p-3 text-brand placeholder:text-text-dim/50 text-sm outline-none transition-colors resize-none hover:bg-brand/[0.04]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="pixel-button w-full py-[18px] text-[12px] uppercase tracking-[0.2em] flex items-center justify-center space-x-1.5 font-sans"
              >
                <span>SEND</span>
              </button>
            </form>

            <AnimatePresence>
              {(successMsg || submissions.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 border border-brand bg-surface text-left font-sans"
                >
                  <div className="flex items-center space-x-2 text-xs font-mono text-brand uppercase font-bold">
                    <CheckCircle2 size={12} />
                    <span>MESSAGE SENT</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
