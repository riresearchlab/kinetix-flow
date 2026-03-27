import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6 bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">Kinetix<span className="text-primary">Flow</span></span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Enterprise IIoT platform transforming conveyor networks into regenerative energy grids.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Digital Twin</li>
            <li>Energy Analytics</li>
            <li>Predictive Maintenance</li>
            <li>ESG Reporting</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Case Studies</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} KinetixFlow Systems. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>ISO 50001 Certified</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
