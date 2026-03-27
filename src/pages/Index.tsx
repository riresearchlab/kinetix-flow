import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardMetrics from "@/components/DashboardMetrics";
import DigitalTwin from "@/components/DigitalTwin";
import EnergyCharts from "@/components/EnergyCharts";
import HowItWorks from "@/components/HowItWorks";
import ArchitectureOverview from "@/components/ArchitectureOverview";
import PredictiveMaintenance from "@/components/PredictiveMaintenance";
import TechStack from "@/components/TechStack";
import ROICalculator from "@/components/ROICalculator";
import CaseStudy from "@/components/CaseStudy";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DashboardMetrics />
      <DigitalTwin />
      <EnergyCharts />
      <HowItWorks />
      <ArchitectureOverview />
      <PredictiveMaintenance />
      <TechStack />
      <ROICalculator />
      <CaseStudy />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
