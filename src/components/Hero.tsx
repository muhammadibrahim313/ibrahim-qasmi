import { ExternalLink, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedGridBackground from './AnimatedGridBackground';
import profileImage from '@/assets/profile-image.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGridBackground />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content (60%) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Main Heading */}
            <div className="space-y-4 fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-left lg:text-left">
                <span className="block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-500 ease-out">
                  Level-up your AI projects
                </span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  with a 3× Kaggle Grandmaster
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium text-left lg:text-left">
                Muhammad Ibrahim Qasmi • AI Engineer & Mentor
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 slide-up">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-left lg:text-left">
                Get faster competition medals, accelerated AI project development, and career guidance from someone who's been there. 
                <span className="text-primary font-semibold">500+ mentorship hours</span> helping others achieve their AI goals.
              </p>
              
              {/* Quick testimonial */}
              <div className="bg-card/50 border border-primary/20 rounded-lg p-4 max-w-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  💬 "Ibrahim helped me understand complex ML concepts with ease. His real-world examples made everything click."
                </p>
                <p className="text-xs text-primary font-medium">- Sarah Khan, Data Scientist</p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm md:text-base justify-start">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                  🏆 7× International Hackathon Winner
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                  📍 Sahiwal, Pakistan
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 items-start slide-up">
              <div className="space-y-2">
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow transition-all duration-300 hover:scale-105"
                >
                  <a 
                    href="https://topmate.io/ibrahim_qasmi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Book my AI consultation session"
                    className="flex items-center"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book My AI Consultation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Free 15-min intro • No obligation • Only 3 slots left this month
                </p>
              </div>
              
              <div className="space-y-2">
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <a 
                    href="#projects"
                    aria-label="View my AI projects and work"
                  >
                    See My Work
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  50+ AI projects • Real results
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image (40%) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Connecting Particles */}
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="flex space-x-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Image Container with Effects */}
              <div className="relative">
                {/* Backdrop Blur */}
                <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm rounded-3xl transform rotate-3 scale-105" />
                
                {/* Gradient Border Frame */}
                <div className="relative p-1 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary animate-pulse">
                  <div className="bg-background/10 backdrop-blur-md rounded-3xl p-2">
                    <img
                      src={profileImage}
                      alt="Muhammad Ibrahim Qasmi - AI Engineer"
                      className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
                      style={{
                        animation: 'float 6s ease-in-out infinite',
                        filter: 'drop-shadow(0 20px 40px rgba(8, 145, 178, 0.3))'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />
                
                {/* Floating Geometric Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/50 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned Lower */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center opacity-80 hover:opacity-100 transition-opacity">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;