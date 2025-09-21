import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to <span className="text-primary">Level-up</span> Your AI Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join 500+ successful mentees who've accelerated their AI careers. Let's discuss your goals!
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8 slide-up">
              <Card className="p-8 neon-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Book My Next Available Slot
                  </h3>
                  
                  <p className="text-foreground leading-relaxed">
                    Ready to fast-track your AI career? Get personalized guidance from a 3× Kaggle Grandmaster. 
                    Whether you're starting your Kaggle journey, preparing for competitions, or building AI projects, 
                    I'll help you achieve your goals faster.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a 
                        href="mailto:oppoibrahim23@gmail.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        oppoibrahim23@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Sahiwal, Pakistan</span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow w-full">
                      <a 
                        href="mailto:oppoibrahim23@gmail.com"
                        aria-label="Send email to Ibrahim for consultation"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Send Me Your Questions
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      I respond within 24 hours • Free initial consultation
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 slide-up">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Fast-Track Your Success
              </h3>
              
              <div className="grid gap-4">
                <Card className="p-4 card-hover neon-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Book My Mentorship Session</h4>
                      <p className="text-sm text-muted-foreground">1-on-1 AI & Kaggle guidance • Proven results</p>
                    </div>
                    <div className="text-right space-y-1">
                      <Button size="sm" asChild variant="outline">
                        <a href="https://topmate.io/ibrahim_qasmi" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground">Free 15-min intro</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 card-hover neon-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Kaggle Fast-Track Program</h4>
                      <p className="text-sm text-muted-foreground">Get your first medal faster • Expert strategies</p>
                    </div>
                    <div className="text-right space-y-1">
                      <Button size="sm" asChild variant="outline">
                        <a href="https://topmate.io/ibrahim_qasmi/page/uJ1PoJEKgB" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground">Guaranteed progress</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 card-hover neon-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">My Open Source Projects</h4>
                      <p className="text-sm text-muted-foreground">50+ AI projects • Learn from real code</p>
                    </div>
                    <div className="text-right space-y-1">
                      <Button size="sm" asChild variant="outline">
                        <a href="https://github.com/muhammadibrahim313" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground">Free access</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 card-hover neon-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">My AI Insights Blog</h4>
                      <p className="text-sm text-muted-foreground">Latest AI trends • Practical tutorials</p>
                    </div>
                    <div className="text-right space-y-1">
                      <Button size="sm" asChild variant="outline">
                        <a href="https://medium.com/@ibrahim313" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground">Weekly updates</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-card/50 p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground">
                  <strong>Privacy Note:</strong> Any information you share will only be used to respond to your inquiry 
                  and will not be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;