import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-primary" />
        <span className="text-lg font-bold">
          Kinetix<span className="text-primary">Flow</span>
        </span>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Enterprise IIoT • Regenerative Energy Grid • Scope 2 Emissions Reduction
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} KinetixFlow Systems
      </p>
    </div>
  </footer>
);

export default Footer;
