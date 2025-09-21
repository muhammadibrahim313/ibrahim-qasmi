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
              Why Choose <span className="text-primary">My Mentorship</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join successful mentees who've accelerated their AI careers with proven strategies
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 slide-up">
              <Card className="p-8 neon-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    From Sahiwal to Global Recognition
                  </h3>
                  
                  <p className="text-foreground leading-relaxed">
                    Working with me means working with someone who's walked the exact path you want to walk. 
                    From a small city in Pakistan to becoming a 3× Kaggle Grandmaster, I've cracked the code 
                    to AI success and I'm here to share those shortcuts with you.
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">Proven Results</p>
                        <p className="text-sm text-muted-foreground">7× international hackathon wins → Strategies that actually work</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">Fast-Track Learning</p>
                        <p className="text-sm text-muted-foreground">500+ mentorship hours → Get medals in 2-3 months, not years</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">Real-World Impact</p>
                        <p className="text-sm text-muted-foreground">100+ AI projects → Learn from actual production code</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mt-6">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Sahiwal, Pakistan</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <a 
                        href="https://topmate.io/ibrahim_qasmi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Book consultation with Ibrahim"
                      >
                        Book My Consultation Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Download Ibrahim's resume"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        My Resume
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Free 15-min intro call • See if we're a good fit
                  </p>
                </div>
              </Card>
            </div>

            {/* Stats & Achievements */}
            <div className="grid grid-cols-2 gap-6 slide-up">
              <Card className="p-6 text-center card-hover neon-border">
                <div className="text-3xl font-bold text-primary mb-2">3×</div>
                <div className="text-sm text-muted-foreground mb-1">Kaggle Grandmaster</div>
                <div className="text-xs text-primary">→ Top 0.1% globally</div>
              </Card>
              
              <Card className="p-6 text-center card-hover neon-border">
                <div className="text-3xl font-bold text-primary mb-2">7×</div>
                <div className="text-sm text-muted-foreground mb-1">Hackathon Winner</div>
                <div className="text-xs text-primary">→ Proven strategies</div>
              </Card>
              
              <Card className="p-6 text-center card-hover neon-border">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground mb-1">AI Projects</div>
                <div className="text-xs text-primary">→ Real experience</div>
              </Card>
              
              <Card className="p-6 text-center card-hover neon-border">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground mb-1">Mentorship Hours</div>
                <div className="text-xs text-primary">→ Your success</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;