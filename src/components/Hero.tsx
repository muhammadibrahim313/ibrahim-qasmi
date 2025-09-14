import { ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedGridBackground from './AnimatedGridBackground';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGridBackground />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-500 ease-out">
                Muhammad Ibrahim Qasmi
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              AI Engineer & 3× Kaggle Grandmaster
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6 slide-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Transforming real-world challenges into scalable AI solutions. 
              Passionate about machine learning, data science, and mentoring the next generation of AI engineers.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                🏆 5× International Hackathon Winner
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                📍 Lahore, Pakistan
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://topmate.io/ibrahim_qasmi" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Book a session with Ibrahim on Topmate"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Session
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a 
                href="#contact"
                aria-label="Get in touch with Ibrahim"
              >
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;