import { FileText, Globe, Cloud, ExternalLink, BriefcaseBusiness, Users, Github } from "lucide-react";

const resources = [
    {
        title: "International Resume & CV",
        description: "ATS-friendly templates designed for global tech standards and high-growth startups.",
        icon: <FileText className="w-5 h-5 text-emerald-400" />,
        links: [
            { label: "Resume", url: "/resume-template.docx", isDownload: true },
            { label: "CV Template", url: "/cv-template.docx", isDownload: true }
        ]
    },
    {
        title: "Building Networks",
        description: "Leverage professional platforms to grow your visibility and unlock opportunities.",
        icon: <Users className="w-5 h-5 text-blue-400" />,
        links: [
            { label: "ATS (Jobscan)", url: "https://www.jobscan.co/", isDownload: false },
            { label: "LinkedIn", url: "https://linkedin.com/in/unish06", isDownload: false }
        ]
    },
    {
        title: "Git & GitHub",
        description: "Master version control and showcase your open-source contributions effectively.",
        icon: <Github className="w-5 h-5 text-slate-300" />,
        links: [
            { label: "Git", url: "https://git-scm.com/", isDownload: false },
            { label: "GitHub", url: "https://github.com/gomugomucode", isDownload: false }
        ]
    },
    {
        title: "Domain & Branding",
        description: "How to register .com.np and write winning cover letters for global roles.",
        icon: <Globe className="w-5 h-5 text-purple-400" />,
        links: [
            { label: "Register", url: "https://register.com.np/", isDownload: false },
            { label: "Cover Letter", url: "/cv.docx", isDownload: true }
        ]
    },
    {
        title: "Cloudflare & Hosting",
        description: "Deploy and optimize your full-stack apps with custom SSL and speed optimization.",
        icon: <Cloud className="w-5 h-5 text-cyan-400" />,
        links: [
            { label: "Cloudflare", url: "https://www.cloudflare.com/", isDownload: false }
        ]
    }
];

const ResourcesSection = () => {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 pb-20">
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <BriefcaseBusiness className="w-8 h-8 text-emerald-500" />
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        Professional <span className="text-emerald-500">Resources</span>
                    </h2>
                </div>

                <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
                    Comprehensive guides and tools designed to <span className="text-emerald-400/90 font-medium">accelerate your professional growth</span>,
                    optimize your technical workflow, and bridge the gap between learning and industry standards.
                </p>

                <div className="w-12 h-1 bg-emerald-500/20 rounded-full mx-auto mt-6" />
            </div>

            {/* Grid Layout - Added max-w-md mx-auto md:max-w-none here! */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-md mx-auto md:max-w-none">
                {resources.map((res, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 md:p-6 hover:border-emerald-500/40 transition-all duration-300 group shadow-lg shadow-black/10"
                    >
                        {/* Header: Icon + Title */}
                        <div className="flex items-start gap-4 mb-3">
                            <div className="flex-shrink-0 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:bg-slate-800 group-hover:scale-110 transition-all duration-300">
                                {res.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors mt-1">
                                {res.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6">
                            {res.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-auto pt-4 border-t border-slate-800/50 flex flex-wrap gap-2.5">
                            {res.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    download={link.isDownload}
                                    target={link.isDownload ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black transition-all active:scale-95"
                                >
                                    {link.label}
                                    <ExternalLink className="w-3 h-3 opacity-70" />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResourcesSection;