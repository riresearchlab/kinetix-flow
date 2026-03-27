import { motion } from "framer-motion";
import { Zap, Activity, ArrowRight, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-energy-green/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(173 80% 36% / 0.04), transparent 70%)' }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-teal" />
            <span className="text-sm font-medium text-primary">Enterprise IIoT Platform</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2 text-foreground"
        >
          Kinetix<span className="text-primary">Flow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mt-6 mb-4 max-w-3xl mx-auto"
        >
          The Kinetic-Recover Power Grid
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transform fulfillment center conveyor networks into a regenerative energy grid.
          Merge high-frequency mechanical data with cloud analytics for closed-loop energy management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-teal-intense)] hover:scale-[1.02]">
            <Zap className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Launch Command Center
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-medium text-lg transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/5">
            <PlayCircle className="w-5 h-5" />
            View Live Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "30%", label: "Energy Recovery" },
            { value: "99.7%", label: "Uptime SLA" },
            { value: "<5ms", label: "Edge Latency" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 pt-8 border-t border-border/60"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Designed for enterprise-scale operations</p>
          <div className="flex items-center justify-center gap-10 text-muted-foreground/40">
            {["ISO 50001", "IEC 62443", "NIST CSF", "Scope 2 Ready"].map((tag) => (
              <span key={tag} className="text-sm font-mono font-medium">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, hsl(210 20% 98%), transparent)' }} />
    </section>
  );
};

export default HeroSection;
