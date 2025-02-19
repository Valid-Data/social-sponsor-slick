
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-accent" />
          <span className="font-bold text-lg">EGOV-KALENDER</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Sponsors</Button>
          <Button variant="ghost">Contact</Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
};
