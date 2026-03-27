import { motion } from "framer-motion";
import { Zap, Cpu, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Zap,
    title: "Capture Kinetic Energy",
    description: "Replace standard Variable Frequency Drives (VFDs) with Regenerative Motor Drives (RMDs). Instead of wasting braking energy as heat, RMDs invert it back into AC power or store it in Graphene Supercapacitors.",
    details: [
      "Bi-directional metering tracks Pᵢₙ and Pₒᵤₜ",
      "Supercapacitors buffer peak-start surges",
      "Net-zero segments identified automatically",
      "Eliminates resistive braking heat loss",
    ],
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Process at the Edge",
    description: "AWS IoT Greengrass runs local ML inference for real-time decisions. Computer Vision identifies package gaps for Dynamic Speed Scaling — slowing belts to exact speed needed rather than binary start/stop.",
    details: [
      "PID loop for fluidity optimization",
      "FFT vibration analysis for motor health",
      "Latency-aware cross-segment coordination",
      "30% idle energy savings via Eco-Glide mode",
    ],
    color: "bg-energy-amber/10 text-energy-amber border-energy-amber/20",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Visualize & Optimize",
    description: "The Cloud layer renders a 1:1 Digital Twin with live energy heatmaps, stores time-series data in InfluxDB, and generates audit-ready Scope 2 ESG reports with carbon credit calculations.",
    details: [
      "3D Digital Twin with real-time overlays",
      "InfluxDB for millions of daily data points",
      "Automated monthly ESG PDF reports",
      "Enterprise API for 3PL partner integration",
    ],
    color: "bg-energy-green/10 text-energy-green border-energy-green/20",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How <span className="text-primary">KinetixFlow</span> Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Three stages transform wasted mechanical energy into measurable savings and sustainability metrics.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${s.color}`}>
                    <s.icon className="w-7 h-7" />
                  </div>
                  <div className="hidden md:flex items-center mt-4">
                    <span className="text-5xl font-black text-muted/80 font-mono">{s.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.details.map((d, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-secondary-foreground">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Energy equation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card-glow rounded-2xl p-8 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Recovery Model</p>
          <div className="text-lg md:text-xl font-mono text-foreground">
            E<sub>rec</sub> = η<sub>gen</sub> · ∫ T<sub>brake</sub> · ω · dt
          </div>
          <p className="text-sm text-muted-foreground mt-3 max-w-lg mx-auto">
            Where η<sub>gen</sub> is regenerative drive efficiency, T<sub>brake</sub> is braking torque, and ω is angular velocity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
