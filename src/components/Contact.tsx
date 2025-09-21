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
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to collaborate, mentor, or discuss AI innovations? I'd love to hear from you!
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8 slide-up">
              <Card className="p-8 neon-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Get in Touch
                  </h3>
                  
                  <p className="text-foreground leading-relaxed">
                    I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                    or mentor aspiring data scientists. Whether you're looking for AI consultation, 
                    speaking engagements, or just want to connect, feel free to reach out!
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
                      <span className="text-muted-foreground">Lahore, Pakistan</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow">
                      <a 
                        href="mailto:oppoibrahim23@gmail.com"
                        aria-label="Send email to Ibrahim"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 slide-up">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Quick Links
              </h3>
              
              <div className="grid gap-4">
                <Card className="p-4 card-hover neon-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Book a Session</h4>
                      <p className="text-sm text-muted-foreground">1-on-1 mentoring & consultation</p>
                    </div>
                    <Button size="sm" asChild variant="outline">
                      <a href="https://topmate.io/ibrahim_qasmi" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="p-4 card-hover neon-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Kaggle Journey Session</h4>
                      <p className="text-sm text-muted-foreground">Fast-track your Kaggle progress</p>
                    </div>
                    <Button size="sm" asChild variant="outline">
                      <a href="https://topmate.io/ibrahim_qasmi/page/uJ1PoJEKgB" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="p-4 card-hover neon-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">GitHub</h4>
                      <p className="text-sm text-muted-foreground">Explore my open source projects</p>
                    </div>
                    <Button size="sm" asChild variant="outline">
                      <a href="https://github.com/muhammadibrahim313" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>

                <Card className="p-4 card-hover neon-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Medium Blog</h4>
                      <p className="text-sm text-muted-foreground">Read my latest articles</p>
                    </div>
                    <Button size="sm" asChild variant="outline">
                      <a href="https://medium.com/@ibrahim313" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
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