
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 fade-in">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-accent/10 text-accent">
            Seamless Social Calendar Integration
          </div>
          <h1 className="hero-title">
            Connect, Share, and Organize Events Together
          </h1>
          <p className="text-lg text-muted-foreground">
            Transform your social calendar experience with our powerful WordPress integration. Share events, connect with friends, and never miss a moment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-3xl blur-3xl -z-10" />
          <div className="glass rounded-3xl p-8">
            <Calendar className="w-full h-full text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};
