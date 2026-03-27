import { motion } from "framer-motion";
import { Cpu, Cloud, Database, Shield, Wifi, Eye, Brain, BarChart3 } from "lucide-react";

const tiers = [
  {
    name: "The Edge",
    subtitle: "Hardware Layer",
    icon: Cpu,
    color: "text-energy-amber",
    bgColor: "bg-energy-amber/8",
    borderColor: "border-energy-amber/15",
    items: [
      { icon: Wifi, text: "Regenerative Motor Drives (RMDs)" },
      { icon: Cpu, text: "Graphene Supercapacitors" },
      { icon: Brain, text: "AWS IoT Greengrass Edge" },
      { icon: Eye, text: "Modbus TCP / EtherNet/IP" },
    ],
  },
  {
    name: "The Fog",
    subtitle: "Local Processing",
    icon: Cloud,
    color: "text-primary",
    bgColor: "bg-primary/8",
    borderColor: "border-primary/15",
    items: [
      { icon: Brain, text: "Local ML Inference (Eco-Glide)" },
      { icon: Eye, text: "CV-Based Dynamic Speed Scaling" },
      { icon: BarChart3, text: "FFT Vibration Analysis" },
      { icon: Shield, text: "PID Loop Fluidity Control" },
    ],
  },
  {
    name: "The Cloud",
    subtitle: "Analytics & Viz",
    icon: Database,
    color: "text-energy-green",
    bgColor: "bg-energy-green/8",
    borderColor: "border-energy-green/15",
    items: [
      { icon: Eye, text: "3D Digital Twin Dashboard" },
      { icon: BarChart3, text: "InfluxDB Time-Series Store" },
      { icon: Shield, text: "Scope 2 ESG Reporting" },
      { icon: Cloud, text: "Enterprise API for 3PL Partners" },
    ],
  },
];

const ArchitectureOverview = () => (
  <section id="architecture" className="section-padding relative">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Infrastructure</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Three-Tier <span className="text-primary">Architecture</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">Edge → Fog → Cloud pipeline engineered for millisecond-level telemetry</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`glass-card rounded-2xl p-8 border ${tier.borderColor} hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.01] transition-all duration-300`}
          >
            <div className={`w-12 h-12 rounded-xl ${tier.bgColor} flex items-center justify-center mb-6`}>
              <tier.icon className={`w-6 h-6 ${tier.color}`} />
            </div>
            <h3 className={`text-2xl font-bold ${tier.color} mb-1`}>{tier.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{tier.subtitle}</p>
            <ul className="space-y-4">
              {tier.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-secondary-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="hidden md:flex items-center justify-center mt-8 gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-energy-amber/30 to-primary/30" />
        <span className="text-xs font-mono text-muted-foreground">MQTT / TLS 1.3</span>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 via-energy-green/30 to-transparent" />
      </div>
    </div>
  </section>
);

export default ArchitectureOverview;
