import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SocialLinks from '@/components/SocialLinks';
import Blogs from '@/components/Blogs';
import Testimonials from '@/components/Testimonials';
import Recommendations from '@/components/Recommendations';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import MentorshipVolunteering from '@/components/MentorshipVolunteering';
import CommunityLeadership from '@/components/CommunityLeadership';
import KaggleDatasets from '@/components/KaggleDatasets';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SocialLinks />
      
      <main id="main-content" className="pt-20">
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Projects />
        <KaggleDatasets />
        <Blogs />
        <MentorshipVolunteering />
        <CommunityLeadership />
        <Recommendations />
        <Experience />
        <Education />
        <Testimonials />

        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-card/30 border-t border-border py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Muhammad Ibrahim Qasmi. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                📍 Sahiwal, Pakistan
              </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <a 
                href="https://github.com/muhammadibrahim313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit GitHub profile"
              >
                GitHub
              </a>
              <a 
                href="https://www.kaggle.com/ibrahimqasimi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit Kaggle profile"
              >
                Kaggle
              </a>
              <a 
                href="https://linkedin.com/in/muhammad-ibrahim-qasmi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit LinkedIn profile"
              >
                LinkedIn
              </a>
              <a 
                href="https://topmate.io/ibrahim_qasmi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit Topmate profile"
              >
                Topmate
              </a>
              <a 
                href="https://medium.com/@muhammadibrahim313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit Medium profile"
              >
                Medium
              </a>
              <a 
                href="https://leetcode.com/u/muhammadibrahim313/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit LeetCode profile"
              >
                LeetCode
              </a>
              <a 
                href="https://lablab.ai/u/@muhammad_ibrahim313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit LabLab profile"
              >
                LabLab.ai
              </a>
              <a 
                href="https://devpost.com/muhammadibrahim313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit Devpost profile"
              >
                Devpost
              </a>
              <a 
                href="https://www.youtube.com/@muhammadibrahim313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit YouTube channel"
              >
                YouTube
              </a>
              <a 
                href="https://twitter.com/muhammadibra313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit X (Twitter) profile"
              >
                X (Twitter)
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100069228483015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit Facebook profile"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/muhammad_ibrahim_313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit Instagram profile"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
