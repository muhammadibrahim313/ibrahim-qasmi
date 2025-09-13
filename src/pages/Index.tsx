import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SocialLinks from '@/components/SocialLinks';
import Hackathons from '@/components/Hackathons';
import Blogs from '@/components/Blogs';
import Badges from '@/components/Badges';
import Certificates from '@/components/Certificates';
import Testimonials from '@/components/Testimonials';
import Recommendations from '@/components/Recommendations';
import Talks from '@/components/Talks';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import OpenSource from '@/components/OpenSource';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SocialLinks />
      
      <main id="main-content" className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Blogs />
        <Badges />
        <Certificates />
        <Testimonials />
        <Recommendations />
        <Talks />
        <Experience />
        <Education />
        <OpenSource />

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
