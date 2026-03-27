import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Leaf, Zap } from "lucide-react";

const ROICalculator = () => {
  const [motors, setMotors] = useState(200);
  const [hours, setHours] = useState(20);
  const [costPerKwh, setCostPerKwh] = useState(0.12);
  const [packages, setPackages] = useState(500000);

  const avgMotorPowerKw = 3.5;
  const totalDailyKwh = motors * avgMotorPowerKw * hours;
  const recoveryRate = 0.15;
  const dssReduction = 0.10;
  const dailyRecoveredKwh = totalDailyKwh * recoveryRate;
  const dailyDssKwh = totalDailyKwh * dssReduction;
  const totalDailySavedKwh = dailyRecoveredKwh + dailyDssKwh;
  const annualSavedKwh = totalDailySavedKwh * 365;
  const annualSavingsUsd = annualSavedKwh * costPerKwh;
  const co2Factor = 0.42;
  const annualCo2Avoided = (annualSavedKwh * co2Factor) / 1000;

  const InputSlider = ({ label, value, onChange, min, max, step, unit }: any) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-sm font-mono text-primary font-medium">{typeof value === 'number' && value < 1 ? value.toFixed(2) : value.toLocaleString()}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
        style={{ accentColor: 'hsl(173, 80%, 36%)' }}
      />
    </div>
  );

  return (
    <section id="roi" className="section-padding relative bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Business Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ROI <span className="text-primary">Calculator</span>
          </h2>
          <p className="text-muted-foreground text-lg">Estimate your annual savings and carbon offset</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-8">
              <Calculator className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Facility Parameters</h3>
            </div>
            <InputSlider label="Conveyor Motors" value={motors} onChange={setMotors} min={10} max={1000} step={10} unit="" />
            <InputSlider label="Daily Operating Hours" value={hours} onChange={setHours} min={4} max={24} step={1} unit=" hrs" />
            <InputSlider label="Cost per kWh" value={costPerKwh} onChange={setCostPerKwh} min={0.05} max={0.30} step={0.01} unit=" USD" />
            <InputSlider label="Daily Package Volume" value={packages} onChange={setPackages} min={10000} max={2000000} step={10000} unit="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-glow rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Projected Annual Impact</h3>
              </div>

              <div className="space-y-6">
                <div className="bg-secondary/50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-5 h-5 text-energy-green" />
                    <span className="text-sm text-muted-foreground">Annual Savings</span>
                  </div>
                  <div className="text-4xl font-bold font-mono text-energy-green">
                    ${annualSavingsUsd.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">CO₂ Avoided</span>
                  </div>
                  <div className="text-4xl font-bold font-mono text-primary">
                    {annualCo2Avoided.toFixed(1)} <span className="text-lg text-muted-foreground">metric tons</span>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-energy-amber" />
                    <span className="text-sm text-muted-foreground">Energy Recovered</span>
                  </div>
                  <div className="text-4xl font-bold font-mono text-energy-amber">
                    {annualSavedKwh.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-lg text-muted-foreground">kWh/yr</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Assumes 15% regenerative recovery + 10% DSS optimization. Grid emission factor: {co2Factor} kg CO₂/kWh.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
