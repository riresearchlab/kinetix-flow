import { motion } from "framer-motion";
import { Milestone, CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    phase: "Phase 1", title: "The Pilot", timeline: "Months 1–3", status: "active",
    tasks: [
      "Install RMDs on a single Sortation Loop (~50 motors)",
      "Deploy AWS Greengrass for baseline energy capture",
      "Map physical loop to 3D model in Three.js",
    ],
  },
  {
    phase: "Phase 2", title: "The Integration", timeline: "Months 4–8", status: "upcoming",
    tasks: [
      "Connect PLC data to InfluxDB cloud instance",
      "Launch Digital Twin dashboard for facility managers",
      "Train CV model for Dynamic Speed Scaling",
    ],
  },
  {
    phase: "Phase 3", title: "The Global Rollout", timeline: "Months 9–18", status: "upcoming",
    tasks: [
      "Deploy across the full facility",
      "Integrate with Amazon Sustainability Cloud for ESG",
      "Open Enterprise API for 3PL partners",
    ],
  },
];

const Roadmap = () => (
  <section id="roadmap" className="section-padding relative">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Timeline</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Implementation <span className="text-primary">Roadmap</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

        <div className="space-y-12">
          {phases.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "" : "md:flex-row-reverse"} items-start md:items-center gap-8`}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10" />

              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card rounded-xl p-6 hover:shadow-[var(--shadow-card-hover)] transition-shadow">
                  <div className="flex items-center gap-2 mb-1 justify-start">
                    <Milestone className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono text-primary font-medium">{p.phase} • {p.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.tasks.map((t, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        {p.status === "active" ? (
                          <CheckCircle2 className="w-4 h-4 text-energy-green flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                        )}
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Roadmap;
