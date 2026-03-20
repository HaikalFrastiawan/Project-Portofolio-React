import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Play, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

const endpoints = [
    { method: "GET", path: "/api/v1/profile" },
    { method: "GET", path: "/api/v1/skills" },
    { method: "POST", path: "/api/v1/contact" },
];

const mockResponses: Record<string, string> = {
    "/api/v1/profile": `{
  "status": 200,
  "data": {
    "name": "Haikal Frastiawan",
    "role": "Backend Engineer",
    "location": "Indonesia",
    "focus": ["Scalability", "Microservices", "Performance"]
  }
}`,
    "/api/v1/skills": `{
  "status": 200,
  "data": {
    "languages": ["Go", "TypeScript", "JavaScript"],
    "frameworks": ["Gin", "Fiber", "NestJS", "Express"],
    "databases": ["PostgreSQL", "MySQL", "MongoDB"],
    "tools": ["Docker", "Git", "Postman", "Linux"]
  }
}`,
    "/api/v1/contact": `{
  "status": 201,
  "message": "Message sent successfully!",
  "data": null
}`
};

const ApiPlayground = () => {
    const [selectedPath, setSelectedPath] = useState(endpoints[0].path);
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    const handleSendRequest = () => {
        setLoading(true);
        setResponse(null);
        setTimeout(() => {
            setResponse(mockResponses[selectedPath]);
            setLoading(false);
        }, 600); // simulate network latency
    };

    const currentEndpoint = endpoints.find(e => e.path === selectedPath);

    return (
        <section id="api" className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-column mx-auto w-full">
                <div className="section-divider mb-16" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Terminal className="text-primary" size={28} />
                        <h2 className="text-3xl md:text-4xl font-heading font-bold">
                            {t("api.title")}
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-body mb-8 max-w-xl">
                        {t("api.desc")}
                    </p>

                    <div className="glass-card rounded-2xl overflow-hidden border border-border/50 shadow-2xl relative">
                        {/* Window Controls */}
                        <div className="bg-[#1e1e1e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            <div className="ml-4 text-xs font-mono text-muted-foreground">api-tester.sh</div>
                        </div>

                        <div className="p-6 md:p-8 grid lg:grid-cols-2 gap-8">
                            {/* Request Panel */}
                            <div className="space-y-6">
                                <div>
                                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                                        {t("api.endpoint")}
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {endpoints.map((ep) => (
                                            <button
                                                key={ep.path}
                                                onClick={() => setSelectedPath(ep.path)}
                                                className={`px-3 py-1.5 rounded-md font-mono text-sm transition-all border ${selectedPath === ep.path
                                                    ? "bg-primary/20 border-primary text-primary"
                                                    : "bg-muted/30 border-transparent text-muted-foreground hover:bg-muted/50"
                                                    }`}
                                            >
                                                {ep.path}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                                        {t("api.url")}
                                    </label>
                                    <div className="flex items-center gap-0 w-full">
                                        <div className={`px-4 py-3 rounded-l-lg font-mono text-sm font-bold ${currentEndpoint?.method === 'GET' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-green-500/10 text-green-400 border-green-500/20'} border border-r-0`}>
                                            {currentEndpoint?.method}
                                        </div>
                                        <div className="flex-1 bg-[#1e1e1e] border border-white/10 px-4 py-3 font-mono text-sm text-foreground overflow-x-auto whitespace-nowrap">
                                            https://api.haikal.dev{selectedPath}
                                        </div>
                                        <button
                                            onClick={handleSendRequest}
                                            disabled={loading}
                                            className="bg-primary text-primary-foreground hover:opacity-90 px-6 py-3 rounded-r-lg font-bold transition-all flex items-center gap-2 border border-primary glow-border"
                                        >
                                            {loading ? (
                                                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <Send size={16} /> {t("api.send")}
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Response Panel */}
                            <div className="bg-[#0b0f19] rounded-xl border border-white/10 overflow-hidden flex flex-col h-full min-h-[250px] relative">
                                <div className="bg-black/40 px-4 py-2 flex items-center justify-between border-b border-white/5">
                                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{t("api.response")}</span>
                                    {response && (
                                        <span className="flex items-center gap-1 text-xs font-mono text-green-400">
                                            <CheckCircle2 size={12} /> {currentEndpoint?.method === 'POST' ? '201 Created' : '200 OK'}
                                        </span>
                                    )}
                                </div>
                                <div className="p-4 flex-1 overflow-auto font-mono text-sm">
                                    {loading ? (
                                        <div className="flex items-center justify-center h-full space-x-2 text-primary">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    ) : response ? (
                                        <pre className="text-gray-300">
                                            <code>
                                                {response.split('\n').map((line, i) => {
                                                    // Simple pseudo-syntax highlighting
                                                    const isKey = line.includes('":');
                                                    const content = line;
                                                    if (isKey) {
                                                        const parts = line.split('":');
                                                        return (
                                                            <div key={i}>
                                                                <span className="text-blue-400">{parts[0]}"</span>:
                                                                <span className={parts[1].includes('[') || parts[1].includes('{') ? 'text-gray-300' : parts[1].includes('"') ? 'text-green-400' : 'text-orange-400'}>{parts[1]}</span>
                                                            </div>
                                                        );
                                                    }
                                                    return <div key={i} className="text-gray-300">{line}</div>;
                                                })}
                                            </code>
                                        </pre>
                                    ) : (
                                        <div className="h-full flex items-center justify-center text-muted-foreground/50 italic">
                                            Hit 'Send' to fetch response...
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ApiPlayground;
