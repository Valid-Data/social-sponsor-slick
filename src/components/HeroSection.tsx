
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center justify-center px-4 py-16 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 fade-in">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-accent/10 text-accent">
            The Modern eGovernment Calendar
          </div>
          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Organize Events Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            Transform your digital administration experience with our powerful calendar integration. Share events, connect departments, and never miss important dates.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group bg-accent hover:bg-accent/90">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="relative slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-3xl blur-3xl -z-10" />
          <div className="glass rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <img 
              src="/lovable-uploads/ce709ca4-1bba-414e-bf6d-8a6d03ebd76e.png"
              alt="Calendar Preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
