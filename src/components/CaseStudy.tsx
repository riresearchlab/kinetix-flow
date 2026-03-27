import { motion } from "framer-motion";
import { TrendingUp, Zap, Leaf, DollarSign, Clock, Package, ArrowRight } from "lucide-react";

const metrics = [
  { icon: Zap, value: "2,847 kWh/day", label: "Energy Recovered", change: "+31% vs baseline" },
  { icon: DollarSign, value: "$1.54M/yr", label: "Projected Annual Savings", change: "Across full fleet" },
  { icon: Leaf, value: "436 tons", label: "Annual CO₂ Avoided", change: "Scope 2 certified" },
  { icon: Clock, value: "47%", label: "Downtime Reduction", change: "Predictive maintenance" },
  { icon: Package, value: "12%", label: "Throughput Increase", change: "DSS optimization" },
  { icon: TrendingUp, value: "14 months", label: "Full ROI Payback", change: "Total system cost" },
];

const timeline = [
  { week: "Week 1–2", event: "RMD installation on 50-motor sortation loop", result: "Baseline energy consumption mapped" },
  { week: "Week 3–4", event: "Greengrass edge gateway deployment", result: "Real-time telemetry streaming confirmed" },
  { week: "Week 5–8", event: "Eco-Glide mode training and activation", result: "18% idle energy reduction achieved" },
  { week: "Week 9–12", event: "Digital Twin dashboard launch", result: "Facility managers onboarded, first ESG report generated" },
];

const CaseStudy = () => {
  return (
    <section id="case-study" className="section-padding relative bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Pilot Results</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Case Study: <span className="text-primary">FC-SEA-01</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Results from the Phase 1 pilot deployment on a single sortation loop at the Seattle fulfillment center.
          </p>
        </motion.div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-5 text-center hover:shadow-[var(--shadow-card-hover)] transition-shadow"
            >
              <m.icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <div className="text-xl font-bold font-mono text-foreground mb-1">{m.value}</div>
              <div className="text-xs text-muted-foreground mb-2">{m.label}</div>
              <div className="text-xs font-mono text-primary">{m.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Pilot timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-8">Pilot Deployment Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-primary font-bold">{t.week}</span>
                  {i < timeline.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground/30 hidden lg:block" />}
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{t.event}</h4>
                <p className="text-xs text-muted-foreground">{t.result}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-card-glow rounded-2xl p-8 md:p-10 text-center"
        >
          <blockquote className="text-lg md:text-xl text-foreground italic max-w-3xl mx-auto leading-relaxed">
            "KinetixFlow turned our conveyor system from a pure cost center into a distributed energy asset. The ROI speaks for itself."
          </blockquote>
          <div className="mt-6">
            <p className="text-sm font-semibold text-foreground">Sarah Chen</p>
            <p className="text-xs text-muted-foreground">VP of Operations Engineering, FC-SEA-01</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
