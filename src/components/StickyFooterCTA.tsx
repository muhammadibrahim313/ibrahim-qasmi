import { useState, useEffect } from 'react';
import { Calendar, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyFooterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after user scrolls past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-in-out">
      <div className="bg-card/95 backdrop-blur-lg border-t border-primary/30 shadow-2xl">
        <div className="container-custom py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                Ready to accelerate your AI journey? 
                <span className="text-primary ml-1">Only 3 slots left this month</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Free 15-min intro • No obligation • Proven results
              </p>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button 
                asChild 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
              >
                <a 
                  href="https://topmate.io/ibrahim_qasmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                  aria-label="Book consultation with Ibrahim"
                >
                  <Calendar className="h-4 w-4" />
                  Book Now
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDismissed(true)}
                className="p-1 h-8 w-8 hover:bg-background/50"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooterCTA;