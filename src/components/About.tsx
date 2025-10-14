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
                  
                  <p className="text-lg leading-relaxed text-muted-foreground/90 mb-5">
                    I'm Ibrahim from Sahiwal, Pakistan. I'm a complete data scientist who works across the full AI stack - from classical machine learning and deep learning to modern LLMs and RAG systems.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground/90 mb-5">
                    As a 3× Kaggle Grandmaster, I've built solutions in computer vision, NLP, time-series forecasting, and tabular data modeling. I don't just prompt LLMs - I fine-tune models, build end-to-end ML pipelines, and deploy production systems.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground/90">
                    Whether it's training neural networks from scratch, building agentic AI systems, or teaching traditional ML fundamentals, I believe in mastering the full spectrum of data science. Now I share these skills with students who want to become well-rounded AI engineers.
                  </p>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Sahiwal, Pakistan</span>
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
                <div className="text-3xl font-bold text-primary mb-2">7×</div>
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