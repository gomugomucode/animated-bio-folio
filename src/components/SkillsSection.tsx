import { motion } from "framer-motion";
import { Code2, Database, Globe, Terminal, Cpu, Palette } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  { title: "Frontend", icon: Globe, skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "TypeScript"] },
  { title: "Backend", icon: Database, skills: ["Node.js", "Express.js", "MySQL", "SQLite"] },
  { title: "Languages", icon: Code2, skills: ["JavaScript", "TypeScript", "Python"] },
  { title: "Data Science", icon: Cpu, skills: ["NumPy", "Pandas"] },
  { title: "DevOps & Tools", icon: Terminal, skills: ["Git", "GitHub", "Vercel", "Arch Linux"] },
  { title: "Design", icon: Palette, skills: ["Canva", "Responsive Design"] },
];

const SkillsSection = () => {
  return (
    <AnimatedSection>
      {/* Changed to max-w-6xl to match the Resources layout width */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-20">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-6">
            Skills & <span className="text-emerald-500">Technologies</span>
          </h2>

          {/* Current Focus Badge - Moved up for better flow */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-mono shadow-lg shadow-blue-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Current Focus: Python, NumPy, Pandas & Machine Learning
            </div>
          </div>

          <div className="w-12 h-1 bg-emerald-500/20 rounded-full mx-auto mt-6" />
        </div>

        {/* Grid Layout - Added max-w-md mx-auto md:max-w-none to fix mobile width! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-md mx-auto md:max-w-none">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all shadow-lg shadow-black/10 group"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 group-hover:bg-slate-800 transition-colors">
                    <Icon className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillsSection;