import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink, Activity } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

const GITHUB_USERNAME = "haikalfrastiawan"; // Update with your actual username

const languageColors: Record<string, string> = {
  TypeScript: "hsl(210 80% 60%)",
  JavaScript: "hsl(50 80% 55%)",
  Go: "hsl(195 70% 55%)",
  Python: "hsl(210 60% 50%)",
  HTML: "hsl(15 80% 55%)",
  CSS: "hsl(270 50% 55%)",
};

const GitHubSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-column mx-auto w-full">
        <div className="section-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-primary mb-2">{"// open source"}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            GitHub Activity
          </h2>
          <p className="text-muted-foreground font-body mb-12">
            Latest repositories from{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @{GITHUB_USERNAME}
            </a>
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-muted rounded w-2/3 mb-3" />
                <div className="h-3 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : repos.length > 0 ? (
          /* BAGIAN YANG DITAMBAHKAN: Wrapper untuk menampung Grid dan Chart */
          <div className="flex flex-col gap-8">
            {/* 1. Grid Repo (Kode Asli Kamu) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github size={16} className="text-muted-foreground" />
                      <span className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-muted-foreground font-body text-xs leading-relaxed mb-4 line-clamp-2">
                    {repo.description || "No description"}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: languageColors[repo.language] || "hsl(var(--muted-foreground))" }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* 2. Tambahan Bagian Chart (Baru) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 md:p-8 border border-white/5 bg-white/[0.01]"
            >
              <div className="flex items-center gap-2 mb-6 text-white font-heading font-semibold">
                <Activity size={18} className="text-primary" />
                <span className="text-sm">Contribution Activity</span>
              </div>
              
              <div className="w-full flex justify-center">
                <a 
                  href={`https://github.com/${GITHUB_USERNAME}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
  <img 
  src={`https://ghchart.rshah.org/39d353/${GITHUB_USERNAME}`} 
  alt="Github Contribution Chart" 
  className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
/>
                </a>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="glass-card rounded-xl p-12 text-center">
            <Github size={32} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground font-body text-sm">
              Unable to load repositories. Update the GitHub username in the code.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;