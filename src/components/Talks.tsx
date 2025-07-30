import { ExternalLink, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Talks = () => {
  const talks = [
    {
      title: "Fast-Track Your Kaggle Journey",
      platform: "Topmate",
      type: "Mentoring Session",
      description: "Comprehensive guidance on accelerating your Kaggle competition success, from beginner to expert level strategies.",
      date: "Ongoing",
      audience: "Data Science Enthusiasts",
      link: "https://topmate.io/ibrahim_qasmi/page/uJ1PoJEKgB"
    }
  ];

  const upcomingPlaceholders = [
    "AI in Healthcare: Real-world Applications",
    "Building Scalable ML Systems", 
    "Computer Vision for Industry 4.0",
    "Ethics in AI Development"
  ];

  return (
    <section id="talks" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Talks & <span className="text-primary">Sessions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing knowledge through speaking engagements and sessions
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Active Sessions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {talks.map((talk, index) => (
                  <Card 
                    key={talk.title} 
                    className="p-6 card-hover neon-border slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge className="bg-primary/10 text-primary">{talk.type}</Badge>
                        <Badge variant="outline" className="border-primary/30">
                          {talk.platform}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground">
                        {talk.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm">
                        {talk.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {talk.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {talk.audience}
                        </div>
                      </div>
                      
                      <Button variant="outline" asChild className="w-full">
                        <a href={talk.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Book Session
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Future Speaking Engagements</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {upcomingPlaceholders.map((placeholder, index) => (
                  <Card 
                    key={placeholder} 
                    className="p-4 card-hover border-dashed border-primary/30"
                    style={{ animationDelay: `${(talks.length + index) * 0.1}s` }}
                  >
                    <div className="text-center space-y-2">
                      <Users className="h-6 w-6 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">{placeholder}</p>
                      <span className="text-xs text-muted-foreground/70">Coming soon</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;