import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SocialLinks />
      
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        {/* Placeholder sections for future implementation */}
        <section id="hackathons" className="section-padding bg-card/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hackathons & <span className="text-primary">Competitions</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - Showcase of hackathon achievements</p>
          </div>
        </section>

        <section id="blogs" className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Latest <span className="text-primary">Blogs</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - Recent Medium articles</p>
          </div>
        </section>

        <section id="badges" className="section-padding bg-card/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Badges & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - Topmate badges and achievements</p>
          </div>
        </section>

        <section id="certificates" className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-primary">Certificates</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - Professional certifications</p>
          </div>
        </section>

        <section id="testimonials" className="section-padding bg-card/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - Client testimonials and feedback</p>
          </div>
        </section>

        <section id="recommendations" className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-primary">Recommendations</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - LinkedIn recommendations</p>
          </div>
        </section>

        <section id="talks" className="section-padding bg-card/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Talks & <span className="text-primary">Sessions</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - Speaking engagements and sessions</p>
          </div>
        </section>

        <section id="experience" className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - Work experience timeline</p>
          </div>
        </section>

        <section id="education" className="section-padding bg-card/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-primary">Education</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - Academic background</p>
          </div>
        </section>

        <section id="opensource" className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Open Source <span className="text-primary">Contributions</span>
            </h2>
            <p className="text-muted-foreground">Coming soon - GitHub contributions and community work</p>
          </div>
        </section>

        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container-custom py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Muhammad Ibrahim Qasmi. All rights reserved.</p>
            <p className="text-sm mt-2">AI Engineer & 3× Kaggle Grandmaster</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
