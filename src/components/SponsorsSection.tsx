
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
}

// This would be replaced with your WordPress API endpoint
const MOCK_SPONSORS = [
  {
    id: 1,
    name: "TechCorp",
    logo: "https://via.placeholder.com/150",
    description: "Leading technology solutions provider"
  },
  {
    id: 2,
    name: "InnovateLabs",
    logo: "https://via.placeholder.com/150",
    description: "Innovation at its finest"
  },
  {
    id: 3,
    name: "FutureWorks",
    logo: "https://via.placeholder.com/150",
    description: "Building tomorrow's solutions"
  }
];

export const SponsorsSection = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Replace this with your WordPress API call
    setSponsors(MOCK_SPONSORS);
  }, []);

  return (
    <>
      {/* Floating sponsor logos */}
      <div 
        className={`fixed top-1/2 right-8 transform -translate-y-1/2 z-20 transition-transform duration-500 ${
          expanded ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="space-y-4">
          {sponsors.slice(0, 3).map((sponsor) => (
            <img
              key={sponsor.id}
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Full sponsors section */}
      <section 
        className={`py-32 px-4 bg-gradient-to-b from-background to-secondary/30 transition-all duration-500 ${
          expanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium bg-accent/10 text-accent">
              <Star className="h-4 w-4" />
              Our Sponsors
            </div>
            <h2 className="section-title text-4xl sm:text-5xl font-bold tracking-tight">
              Proudly Supported By
              <span className="text-accent"> Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join these amazing organizations in supporting our mission to revolutionize digital administration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="sponsor-card hover:border-accent/20">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {sponsor.name}
                </h3>
                <p className="text-muted-foreground text-center">
                  {sponsor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
