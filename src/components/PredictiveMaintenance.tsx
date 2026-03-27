import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Activity, Thermometer, AlertTriangle, CheckCircle2, Settings, TrendingUp } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ScatterChart, Scatter, ZAxis } from "recharts";

const generateFFTData = () =>
  Array.from({ length: 60 }, (_, i) => ({
    freq: (i * 10).toString(),
    amplitude: i === 12 ? 85 : i === 24 ? 60 : i === 36 ? 42 : Math.random() * 25 + 5,
  }));

const motorData = [
  { id: "M-001", name: "Sortation Drive A", health: 96, temp: 58, vibration: "Normal", status: "healthy" },
  { id: "M-002", name: "Merge Belt B", health: 88, temp: 64, vibration: "Normal", status: "healthy" },
  { id: "M-003", name: "Divert C-1", health: 72, temp: 78, vibration: "Elevated", status: "warning" },
  { id: "M-004", name: "Outbound D", health: 94, temp: 55, vibration: "Normal", status: "healthy" },
  { id: "M-005", name: "Incline E-2", health: 45, temp: 89, vibration: "Critical", status: "critical" },
  { id: "M-006", name: "Cross-belt F", health: 91, temp: 61, vibration: "Normal", status: "healthy" },
];

const thermalData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  avgTemp: 55 + Math.sin(i * 0.5) * 12 + Math.random() * 5,
  maxTemp: 65 + Math.sin(i * 0.5) * 15 + Math.random() * 8,
  threshold: 85,
}));

const PredictiveMaintenance = () => {
  const [selectedMotor, setSelectedMotor] = useState("M-003");
  const fftData = useMemo(generateFFTData, []);

  return (
    <section id="maintenance" className="section-padding relative bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Maintenance Intelligence</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Predictive <span className="text-primary">Maintenance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            FFT vibration analysis and thermal mapping detect bearing wear, belt misalignment, and motor degradation before failures occur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Motor Health Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-foreground">Motor Fleet Health</h3>
            </div>
            <div className="space-y-2">
              {motorData.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMotor(m.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                    selectedMotor === m.id ? "bg-primary/5 border border-primary/20" : "hover:bg-secondary"
                  }`}
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{m.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{m.id}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono font-bold ${
                      m.status === "critical" ? "text-destructive" : m.status === "warning" ? "text-energy-amber" : "text-energy-green"
                    }`}>
                      {m.health}%
                    </span>
                    {m.status === "critical" ? (
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    ) : m.status === "warning" ? (
                      <AlertTriangle className="w-4 h-4 text-energy-amber" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-energy-green" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* FFT Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass-card rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground">FFT Vibration Spectrum</h3>
              </div>
              <span className="text-xs font-mono text-muted-foreground">Motor: {selectedMotor}</span>
            </div>
            <div className="h-[280px]">
              <ResponsiveContainer>
                <LineChart data={fftData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
                  <XAxis dataKey="freq" stroke="hsl(215 15% 70%)" tick={{ fontSize: 10 }} label={{ value: "Frequency (Hz)", position: "insideBottom", offset: -5, fontSize: 11, fill: "hsl(215 15% 50%)" }} />
                  <YAxis stroke="hsl(215 15% 70%)" tick={{ fontSize: 10 }} label={{ value: "Amplitude (dB)", angle: -90, position: "insideLeft", fontSize: 11, fill: "hsl(215 15% 50%)" }} />
                  <Tooltip contentStyle={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(214 20% 88%)", borderRadius: "8px", fontSize: "12px" }} />
                  <Line type="monotone" dataKey="amplitude" stroke="hsl(173 80% 36%)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-0.5 bg-primary rounded" />
                <span>Vibration amplitude</span>
              </div>
              <span>Peaks at 120Hz / 240Hz indicate potential bearing wear</span>
            </div>
          </motion.div>
        </div>

        {/* Thermal Mapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 glass-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-energy-amber" />
              <h3 className="font-semibold text-foreground">24-Hour Thermal Profile</h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-energy-amber rounded" /><span>Average</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-destructive rounded" /><span>Peak</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-muted-foreground rounded border-dashed" /><span>Threshold</span></div>
            </div>
          </div>
          <div className="h-[220px]">
            <ResponsiveContainer>
              <LineChart data={thermalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
                <XAxis dataKey="hour" stroke="hsl(215 15% 70%)" tick={{ fontSize: 10 }} interval={3} />
                <YAxis stroke="hsl(215 15% 70%)" tick={{ fontSize: 10 }} domain={[40, 100]} />
                <Tooltip contentStyle={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(214 20% 88%)", borderRadius: "8px", fontSize: "12px" }} />
                <Line type="monotone" dataKey="avgTemp" stroke="hsl(37 95% 52%)" strokeWidth={2} dot={false} name="Avg Temp (°C)" />
                <Line type="monotone" dataKey="maxTemp" stroke="hsl(0 72% 51%)" strokeWidth={2} dot={false} name="Max Temp (°C)" />
                <Line type="monotone" dataKey="threshold" stroke="hsl(215 15% 50%)" strokeWidth={1} strokeDasharray="6 4" dot={false} name="Threshold" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PredictiveMaintenance;
