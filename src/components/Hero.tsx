import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.png';

const stats = [
  { value: '3×', label: 'Kaggle Grandmaster' },
  { value: '7×', label: 'International Hackathon Winner' },
  { value: '500+', label: 'Mentorship Hours' },
  { value: '50+', label: 'AI Projects' },
];

const Hero = () => {
  return (
    <section id="home" className="relative bg-background pt-24 sm:pt-28 pb-0">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 space-y-7 fade-in">
            <span className="editorial-eyebrow">AI Engineer · Kaggle Grandmaster</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
              Building AI systems that move from notebooks to real users.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              I am Muhammad Ibrahim Qasmi, a Pakistan-based AI engineer and 3× Kaggle Grandmaster.
              I build applied AI products, compete globally, and mentor students who want practical
              depth in machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover">
                <a
                  href="https://topmate.io/ibrahim_qasmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a session with Ibrahim on Topmate"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Session
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                <a href="#projects" aria-label="See selected work">
                  See Selected Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-1">📍 Sahiwal, Pakistan</p>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-secondary rounded-2xl" aria-hidden />
              <div className="relative bg-card border border-border rounded-2xl p-3 shadow-sm">
                <img
                  src={profileImage}
                  alt="Muhammad Ibrahim Qasmi - AI Engineer"
                  className="w-full aspect-square object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div className="mt-16 lg:mt-24 bg-secondary border-y border-border">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-10">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <li key={s.label} className="space-y-1">
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-gold">{s.value}</div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
