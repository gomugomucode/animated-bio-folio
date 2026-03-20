import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Globe, Cloud, ExternalLink, BriefcaseBusiness } from "lucide-react";

const resources = [
    {
        title: "International Resume & CV",
        description: "ATS-friendly templates designed for global tech standards.",
        icon: <FileText className="w-5 h-5 text-emerald-400" />,
        links: [{ label: "Resume", url: "#" }, { label: "CV Template", url: "#" }]
    },
    {
        title: "Domain & Branding",
        description: "How to register .com.np and write winning cover letters.",
        icon: <Globe className="w-5 h-5 text-blue-400" />,
        links: [{ label: "Register", url: "#" }, { label: "Cover Letter", url: "#" }]
    },
    {
        title: "Cloudflare & Hosting",
        description: "Deploy and optimize your full-stack apps for high performance.",
        icon: <Cloud className="w-5 h-5 text-cyan-400" />,
        links: [{ label: "Direct Link", url: "#" }]
    }
];

const ResourcesSection = () => {
    return (
        <section>
            {/* 1. The Header: Re-styled to match the clean "Skills" title */}
            <div className="flex items-center gap-3 mb-10 text-center justify-center">
                <BriefcaseBusiness className="w-7 h-7 text-emerald-500" />
                <h2 className="text-3xl font-bold text-white">
                    <span className="font-light text-slate-300">Professional </span>Resources
                </h2>
            </div>

            {/* 2. The Cards: Redesigned to be Glassmorphic and "Experience"-style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((res, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4 group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-full bg-slate-800 border border-slate-700">
                                {res.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white tracking-tight">{res.title}</h3>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed min-h-[60px]">
                            {res.description}
                        </p>

                        <div className="flex gap-2.5 pt-2">
                            {res.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    className="px-4 py-1.5 text-xs font-medium rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black transition-colors flex items-center gap-1.5"
                                >
                                    {link.label} <ExternalLink className="w-3 h-3" />
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