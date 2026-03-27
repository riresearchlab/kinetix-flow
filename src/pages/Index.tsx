import HeroSection from "@/components/HeroSection";
import DashboardMetrics from "@/components/DashboardMetrics";
import DigitalTwin from "@/components/DigitalTwin";
import EnergyCharts from "@/components/EnergyCharts";
import ROICalculator from "@/components/ROICalculator";
import ArchitectureOverview from "@/components/ArchitectureOverview";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <DashboardMetrics />
      <DigitalTwin />
      <EnergyCharts />
      <ArchitectureOverview />
      <ROICalculator />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
