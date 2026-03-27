import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

const generateTimeData = () => {
  const data = [];
  const now = new Date();
  for (let i = 59; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000);
    data.push({
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      consumed: 80 + Math.random() * 40,
      recovered: 20 + Math.random() * 30,
      net: 0,
    });
    data[data.length - 1].net = data[data.length - 1].consumed - data[data.length - 1].recovered;
  }
  return data;
};

const generateSegmentData = () => [
  { segment: "Loop A", consumed: 120, recovered: 45, efficiency: 37.5 },
  { segment: "Loop B", consumed: 95, recovered: 52, efficiency: 54.7 },
  { segment: "Sortation", consumed: 180, recovered: 28, efficiency: 15.5 },
  { segment: "Merge C", consumed: 65, recovered: 38, efficiency: 58.4 },
  { segment: "Divert D", consumed: 110, recovered: 62, efficiency: 56.3 },
  { segment: "Outbound", consumed: 75, recovered: 41, efficiency: 54.6 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card rounded-lg p-3 text-xs font-mono">
      <p className="text-muted-foreground mb-2">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: {p.value.toFixed(1)} kWh
        </p>
      ))}
    </div>
  );
};

const EnergyCharts = () => {
  const [tab, setTab] = useState<"flow" | "segments">("flow");
  const [timeData, setTimeData] = useState(generateTimeData);
  const segmentData = useMemo(generateSegmentData, []);

  useEffect(() => {
    const interval = setInterval(() => setTimeData(generateTimeData()), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Energy <span className="text-teal text-glow">Analytics</span>
          </h2>
          <p className="text-muted-foreground">High-fidelity time-series showing energy spikes and recovery valleys</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-glow rounded-2xl p-6"
        >
          {/* Tab switcher */}
          <div className="flex gap-2 mb-6">
            {(["flow", "segments"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  tab === t
                    ? "bg-primary/20 text-primary teal-glow-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "flow" ? "Energy Flow (60 min)" : "Segment Comparison"}
              </button>
            ))}
          </div>

          <div className="h-[350px]">
            {tab === "flow" ? (
              <ResponsiveContainer>
                <AreaChart data={timeData}>
                  <defs>
                    <linearGradient id="colorConsumed" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e74c3c" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#e74c3c" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRecovered" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00ced1" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#00ced1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 30% 16%)" />
                  <XAxis dataKey="time" stroke="hsl(215 20% 40%)" tick={{ fontSize: 10 }} interval={9} />
                  <YAxis stroke="hsl(215 20% 40%)" tick={{ fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="consumed" stroke="#e74c3c" fill="url(#colorConsumed)" strokeWidth={2} name="Consumed" />
                  <Area type="monotone" dataKey="recovered" stroke="#00ced1" fill="url(#colorRecovered)" strokeWidth={2} name="Recovered" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer>
                <BarChart data={segmentData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 30% 16%)" />
                  <XAxis dataKey="segment" stroke="hsl(215 20% 40%)" tick={{ fontSize: 11 }} />
                  <YAxis stroke="hsl(215 20% 40%)" tick={{ fontSize: 10 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="consumed" fill="#e74c3c" radius={[4, 4, 0, 0]} name="Consumed" opacity={0.8} />
                  <Bar dataKey="recovered" fill="#00ced1" radius={[4, 4, 0, 0]} name="Recovered" opacity={0.9} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnergyCharts;
