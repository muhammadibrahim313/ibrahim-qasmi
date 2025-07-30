import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certificates = () => {
  const certificates = [
    {
      title: "AI for Connectivity Hackathon II",
      issuer: "LabLab AI",
      date: "Mar 14, 2025",
      description: "Participated in hackathon focusing on AI solutions for connectivity challenges",
      link: "https://lablab.ai/event/ai-for-connectivity-hackathon-ii"
    },
    {
      title: "AIstronauts: Space Agents",
      issuer: "LabLab AI", 
      date: "Feb 24, 2025",
      description: "Built AI agents for space exploration and mission planning",
      link: "https://lablab.ai/event/aistronauts-space-agents"
    },
    {
      title: "Edge Runners 3.2",
      issuer: "LabLab AI",
      date: "Oct 27, 2024", 
      description: "Developed edge computing solutions with AI integration",
      link: "https://lablab.ai/event/edge-runners-3-2"
    }
  ];

  const placeholders = [
    "Professional Data Science Certification",
    "AWS Machine Learning Specialty", 
    "Google Cloud AI Certification",
    "Deep Learning Specialization"
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-primary">Certificates</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Recent Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <Card 
                    key={cert.title} 
                    className="p-6 card-hover neon-border slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Award className="h-8 w-8 text-primary" />
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {cert.issuer}
                        </Badge>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4" />
                          {cert.date}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {cert.description}
                        </p>
                      </div>
                      
                      <Button size="sm" variant="outline" asChild className="w-full">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Additional Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {placeholders.map((placeholder, index) => (
                  <Card 
                    key={placeholder} 
                    className="p-4 card-hover border-dashed border-primary/30"
                    style={{ animationDelay: `${(certificates.length + index) * 0.1}s` }}
                  >
                    <div className="text-center space-y-2">
                      <Award className="h-6 w-6 text-muted-foreground mx-auto" />
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

export default Certificates;