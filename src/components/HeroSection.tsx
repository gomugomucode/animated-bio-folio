import { motion } from "framer-motion";
import { Github, Terminal, Linkedin, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">

      {/* --- AVATAR WITH DYNAMIC GLOW --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-10"
      >
        {/* The "Rotating" Background Glow */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-blue-600 rounded-full blur-[20px] opacity-20 animate-pulse" />

        {/* The Border Ring */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-b from-emerald-400 to-slate-800 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <div className="w-full h-full rounded-full border-4 border-[#020617] overflow-hidden">
            <img
              src="/my-photo.webp"
              alt="Anupam Baral"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Floating Terminal Badge */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-2 -right-2 bg-slate-900 border border-emerald-500/50 text-emerald-400 px-3 py-1 rounded-md text-[10px] font-mono shadow-xl backdrop-blur-md"
        >
          status: active
        </motion.div>
      </motion.div>

      {/* --- CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/5 text-emerald-500 font-mono text-xs mb-6 border border-emerald-500/20"
      >
        <Terminal className="w-3.5 h-3.5" />
        <span>~/anupam-baral</span>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
      >
        Anupam <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Baral</span>
      </motion.h1>

      <motion.p className="text-xl md:text-2xl font-medium text-slate-300 mb-6 font-mono">
        Full-Stack Developer <span className="text-emerald-500">&</span> BCA Student
      </motion.p>

      <motion.p className="max-w-xl text-slate-400 text-sm md:text-base leading-relaxed mb-10">
        I build scalable web applications using <span className="text-slate-200">React & Node.js</span>.
        Exploring <span className="text-slate-200">AI/ML</span> and active in the
        <span className="text-emerald-400/80"> Solana</span> ecosystem.
        Proud Arch Linux user.
      </motion.p>

      {/* --- SOCIAL BUTTONS --- */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.a
          whileHover={{ y: -2 }}
          href="https://github.com/gomugomucode"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-bold transition-all hover:bg-emerald-500 hover:text-white"
        >
          <Github className="w-5 h-5" />
          GitHub
        </motion.a>

        <motion.a
          whileHover={{ y: -2 }}
          href="https://linkedin.com/in/unish06"
          target="_blank"
          className="inline-flex items-center gap-2 bg-slate-900 text-white border border-slate-700 px-6 py-2.5 rounded-full font-bold transition-all hover:border-blue-500 hover:text-blue-400"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </motion.a>

        {/* Disabled CV Button */}
        <motion.button
          disabled
          className="inline-flex items-center gap-2 bg-slate-900/50 text-slate-500 border border-slate-800/50 px-6 py-2.5 rounded-full font-bold cursor-not-allowed"
          title="Currently updating my CV. Check back soon!"
        >
          <FileText className="w-5 h-5 opacity-50" />
          CV (Soon)
        </motion.button>


        {/* after cv is ready turn this comment on adn upper button off */}

        {/* <motion.a
  whileHover={{ y: -2 }}
  href="/resume.pdf" 
  download="Anupam_Baral_CV.pdf"
  className="inline-flex items-center gap-2 bg-slate-900 text-white border border-slate-700 px-6 py-2.5 rounded-full font-bold transition-all hover:border-emerald-500 hover:text-emerald-400"
>
  <FileText className="w-5 h-5" />
  Download CV
</motion.a> */}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-[22px] h-[35px] rounded-full border-2 border-slate-500 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-emerald-500 rounded-full"
          />
        </div>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;