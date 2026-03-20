import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    link: string;
    tags: string[];
}

const blogs: BlogPost[] = [
    {
        title: "Optimizing PostgreSQL Queries from 2s to 50ms",
        excerpt: "A deep dive into indexing strategies, EXPLAIN ANALYZE, and how I restructured our schema to handle millions of rows without breaking a sweat.",
        date: "Nov 12, 2023",
        readTime: "6 min read",
        link: "#",
        tags: ["PostgreSQL", "Database", "Performance"],
    },
    {
        title: "Migrating from Express.js to NestJS: Lessons Learned",
        excerpt: "Why we made the switch, the architectural benefits of Dependency Injection, and how decorators cleaned up our routing logic.",
        date: "Oct 05, 2023",
        readTime: "8 min read",
        link: "#",
        tags: ["NestJS", "Node.js", "Architecture"],
    },
    {
        title: "Building Microservices with Go (Fiber) & gRPC",
        excerpt: "Exploring the speed differences between JSON REST APIs and gRPC in a Go microservices environment. Benchmarks included.",
        date: "Sep 28, 2023",
        readTime: "5 min read",
        link: "#",
        tags: ["Golang", "gRPC", "Microservices"],
    },
];

const BlogSection = () => {
    const { t } = useTranslation();

    return (
        <section id="blog" className="py-24 px-6 bg-background">
            <div className="max-w-column mx-auto w-full">
                <div className="section-divider mb-16" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="font-mono text-sm text-primary mb-2">{t("blog.badge")}</p>
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="text-white" size={32} />
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                            {t("blog.title")}
                        </h2>
                    </div>
                    <p className="text-gray-400 font-body mb-12 max-w-2xl">
                        {t("blog.desc")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-mono text-primary/60 border border-primary/20 bg-primary/5 px-2 py-1 rounded">
                                        {post.date}
                                    </span>
                                    <span className="text-xs font-body text-gray-500">
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-mono text-gray-500 border border-white/5 bg-white/5 px-2 py-1 rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                                    {t("blog.read")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
