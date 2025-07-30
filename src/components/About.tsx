import { MapPin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover my journey in AI, machine learning, and data science
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 slide-up">
              <Card className="p-8 neon-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    AI Engineer & Kaggle Grandmaster
                  </h3>
                  
                  <p className="text-foreground leading-relaxed">
                    I'm a passionate AI engineer from Pakistan with a proven track record of excellence. 
                    As a three-time Kaggle Grandmaster, I've demonstrated expertise across machine learning, 
                    computer vision, and natural language processing domains.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    My journey includes being a 5× international hackathon winner and finalist, where I've 
                    developed innovative solutions that bridge the gap between cutting-edge research and 
                    real-world applications. I'm committed to turning complex problems into scalable AI 
                    solutions while mentoring new data scientists.
                  </p>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Lahore, Pakistan</span>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Download Ibrahim's resume"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stats & Achievements */}
            <div className="grid grid-cols-2 gap-6 slide-up">
              <Card className="p-6 text-center card-hover neon-border">
                <div className="text-3xl font-bold text-primary mb-2">3×</div>
                <div className="text-sm text-muted-foreground">Kaggle Grandmaster</div>
              </Card>
              
              <Card className="p-6 text-center card-hover neon-border">
                <div className="text-3xl font-bold text-primary mb-2">5×</div>
                <div className="text-sm text-muted-foreground">Hackathon Winner</div>
              </Card>
              
              <Card className="p-6 text-center card-hover neon-border">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">AI Projects</div>
              </Card>
              
              <Card className="p-6 text-center card-hover neon-border">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Mentorship Hours</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;