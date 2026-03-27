import { motion } from "framer-motion";
import { Monitor, Server, Database, Shield, Cpu, Cloud } from "lucide-react";

const layers = [
  {
    title: "Frontend — Visualization Layer",
    icon: Monitor,
    color: "text-primary",
    techs: [
      { name: "React.js", desc: "Component-based reactive UI framework" },
      { name: "Three.js / R3F", desc: "3D warehouse Digital Twin rendering with GLTF/GLB models" },
      { name: "Recharts / D3.js", desc: "High-fidelity time-series energy graphs" },
      { name: "Tailwind CSS", desc: "Utility-first styling with custom design tokens" },
    ],
  },
  {
    title: "Backend — Logic Layer",
    icon: Server,
    color: "text-energy-amber",
    techs: [
      { name: "Node.js (NestJS)", desc: "Scalable modular server architecture" },
      { name: "MQTT / AWS IoT Core", desc: "Pub/sub messaging for thousands of sensor messages/sec" },
      { name: "Redis", desc: "Real-time warehouse state caching" },
      { name: "REST + WebSocket APIs", desc: "Enterprise integration endpoints" },
    ],
  },
  {
    title: "Data — Persistence Layer",
    icon: Database,
    color: "text-energy-green",
    techs: [
      { name: "InfluxDB", desc: "Purpose-built time-series DB for millions of telemetry points" },
      { name: "PostgreSQL", desc: "Structured metadata — motor serials, facility locations, permissions" },
      { name: "S3 / Object Storage", desc: "ESG report archives and model artifacts" },
      { name: "Apache Kafka", desc: "Event streaming for cross-facility data pipelines" },
    ],
  },
  {
    title: "Infrastructure & Security",
    icon: Shield,
    color: "text-destructive",
    techs: [
      { name: "AWS Greengrass", desc: "Edge computing runtime for local ML inference" },
      { name: "Docker + Kubernetes", desc: "Containerized multi-facility deployment" },
      { name: "TLS 1.3 + mTLS", desc: "All MQTT traffic encrypted end-to-end" },
      { name: "NIST CSF + IEC 62443", desc: "ICS cybersecurity framework compliance" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Engineering</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technology <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Purpose-built infrastructure for industrial-scale energy optimization across global fulfillment networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <layer.icon className={`w-5 h-5 ${layer.color}`} />
                </div>
                <h3 className="font-bold text-foreground">{layer.title}</h3>
              </div>
              <div className="space-y-4">
                {layer.techs.map((tech) => (
                  <div key={tech.name} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
