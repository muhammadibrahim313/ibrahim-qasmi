import { Award, ExternalLink, Verified } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Badges = () => {
  const badges = [
    {
      title: "Top 1%",
      platform: "Topmate",
      description: "Among the top 1% of mentors on the platform",
      verified: true,
      color: "text-yellow-400"
    },
    {
      title: "Community Care",
      platform: "Topmate", 
      description: "Recognized for exceptional community engagement",
      verified: true,
      color: "text-blue-400"
    },
    {
      title: "Curator",
      platform: "Topmate",
      description: "Curated high-quality content and resources",
      verified: true,
      color: "text-purple-400"
    },
    {
      title: "People's Choice",
      platform: "Topmate",
      description: "Highly rated by the community",
      verified: true,
      color: "text-green-400"
    }
  ];

  return (
    <section id="badges" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Badges & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognition for excellence in mentoring and community engagement
            </p>
            <Button variant="outline" className="mt-4" asChild>
              <a href="https://topmate.io/ibrahim_qasmi" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Topmate Profile
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <Card 
                key={badge.title} 
                className="p-6 card-hover neon-border slide-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center ${badge.color}`}>
                    <Award className="h-8 w-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {badge.title}
                    </h3>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {badge.platform}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {badge.description}
                  </p>
                  
                  {badge.verified && (
                    <div className="flex items-center justify-center gap-1 text-primary">
                      <Verified className="h-4 w-4" />
                      <span className="text-xs">Verified</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Badges;