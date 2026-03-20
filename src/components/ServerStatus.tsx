import { useState, useEffect } from "react";

const ServerStatus = () => {
    const [latency, setLatency] = useState(12);

    // Simulate latency fluctuation
    useEffect(() => {
        const interval = setInterval(() => {
            setLatency(Math.floor(Math.random() * (45 - 8 + 1)) + 8);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20" title="All Backend Services Operational">
            <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="text-xs font-mono text-primary font-medium tracking-tight">API: {latency}ms</span>
        </div>
    );
};

export default ServerStatus;
