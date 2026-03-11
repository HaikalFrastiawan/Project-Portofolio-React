import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink, Activity } from "lucide-react";
import { GitHubCalendar } from 'react-github-calendar';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const GITHUB_USERNAME = "haikalfrastiawan";

const languageColors: Record<string, string> = {
  TypeScript: "hsl(210 80% 60%)",
  JavaScript: "hsl(50 80% 55%)",
  Go: "hsl(195 70% 55%)",
  Python: "hsl(210 60% 50%)",
};

const GitHubSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-16 section-divider" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// open source"}</p>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl text-white">GitHub Activity</h2>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[...Array(6)].map((_, i) => (
              <div key={i} className="h-40 rounded-xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {/* Grid Repositories */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <motion.a 
                  key={repo.id} 
                  href={repo.html_url} 
                  target="_blank" 
                  whileHover={{ y: -5 }}
                  className="p-6 glass-card border border-white/5 rounded-2xl block hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-bold text-lg text-white group-hover:text-primary transition-colors">{repo.name}</div>
                    <ExternalLink size={14} className="text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {repo.description || "Building high-performance backend architectures."}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: languageColors[repo.language] }} />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                  </div>
                </motion.a>
              ))}
            </div>

    
            {!hasError && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 glass-card border border-white/5 rounded-3xl w-full"
              >
                <div className="flex items-center gap-2 mb-8">
                  <Activity size={18} className="text-primary" />
                  <span className="font-bold text-white uppercase tracking-wider text-sm">Contribution Activity</span>
                </div>
                
                <div className="flex justify-center w-full overflow-x-auto pb-4 custom-scrollbar">
                  <div className="min-w-max">
                    <GitHubCalendar 
                      username={GITHUB_USERNAME}
                      blockSize={14} 
                      blockMargin={5}
                      fontSize={14}
                      theme={{
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;