import { useEffect, useState } from "react";
import { Users, Activity } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Only fetch on client-side and only once per session to prevent infinite loops
    // In strict mode this might run twice, but counterapi handles it gracefully
    let isMounted = true;
    
    const fetchHits = async () => {
      try {
        const res = await fetch("https://api.counterapi.dev/v1/haikal_portfolio/visits/up");
        const data = await res.json();
        if (isMounted && data?.count !== undefined) {
          setCount(data.count);
        }
      } catch (err) {
        console.error("Failed to fetch visitor count", err);
      }
    };
    
    fetchHits();
    
    return () => { isMounted = false; };
  }, []);

  if (count === null) {
    return (
      <div className="h-10 w-32 bg-white/5 rounded-xl animate-pulse border border-white/10" />
    );
  }

  return (
    <div 
      className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/[0.05] transition-colors"
    >
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary shrink-0">
        <Users size={14} className="relative z-10" />
        <span className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-30"></span>
      </div>
      <div className="flex flex-col items-start pr-2">
        <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1.5 uppercase tracking-wider">
          <Activity size={10} className="text-green-500 animate-pulse" /> Live Visits
        </span>
        <span className="text-white font-bold leading-none tracking-widest text-base font-mono mt-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
          {count.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
