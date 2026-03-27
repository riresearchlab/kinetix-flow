import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Thermometer, Battery, Wind, Gauge } from "lucide-react";

const AnimatedCounter = ({ target, duration = 2000, suffix = "", prefix = "" }: { target: number; duration?: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const SparkLine = ({ data, color }: { data: number[]; color: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 200;
  const h = 40;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10">
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${points} ${w},${h}`} fill={`url(#grad-${color.replace('#', '')})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const generateData = (len: number, base: number, variance: number) =>
  Array.from({ length: len }, () => base + (Math.random() - 0.5) * variance);

const MetricCard = ({
  icon: Icon,
  title,
  value,
  unit,
  sparkData,
  sparkColor,
  trend,
  delay,
}: {
  icon: typeof Zap;
  title: string;
  value: number;
  unit: string;
  sparkData: number[];
  sparkColor: string;
  trend: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="glass-card rounded-xl p-6 group hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.01] transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      <span className="text-xs font-mono text-energy-green font-medium">{trend}</span>
    </div>
    <div className="text-4xl font-bold font-mono text-foreground mb-3">
      <AnimatedCounter target={value} suffix={unit} />
    </div>
    <SparkLine data={sparkData} color={sparkColor} />
  </motion.div>
);

const DashboardMetrics = () => {
  const metrics = [
    { icon: Zap, title: "Energy Recovered", value: 2847, unit: " kWh", sparkColor: "hsl(173, 80%, 36%)", trend: "+12.4%", sparkData: generateData(30, 90, 40) },
    { icon: TrendingUp, title: "Net Savings Today", value: 4219, unit: " USD", sparkColor: "hsl(152, 60%, 42%)", trend: "+8.7%", sparkData: generateData(30, 140, 50) },
    { icon: Battery, title: "Supercap SoC", value: 87, unit: "%", sparkColor: "hsl(37, 95%, 52%)", trend: "Optimal", sparkData: generateData(30, 85, 15) },
    { icon: Thermometer, title: "Avg Motor Temp", value: 62, unit: "°C", sparkColor: "hsl(0, 72%, 51%)", trend: "Normal", sparkData: generateData(30, 62, 8) },
    { icon: Wind, title: "CO₂ Avoided", value: 1432, unit: " kg", sparkColor: "hsl(152, 60%, 42%)", trend: "+15.2%", sparkData: generateData(30, 45, 20) },
    { icon: Gauge, title: "DSS Efficiency", value: 94, unit: "%", sparkColor: "hsl(173, 80%, 36%)", trend: "+3.1%", sparkData: generateData(30, 92, 6) },
  ];

  return (
    <section id="telemetry" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-energy-green/8 border border-energy-green/15 mb-4">
            <div className="w-2 h-2 rounded-full bg-energy-green animate-pulse" />
            <span className="text-xs font-mono text-energy-green font-medium">LIVE TELEMETRY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Real-Time <span className="text-primary">Energy Grid</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardMetrics;
