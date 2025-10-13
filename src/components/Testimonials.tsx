import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Abdullah",
      date: "Jul 27, 2024",
      rating: 5,
      quote: "Had a great session with Ibrahim. His insights into Kaggle competitions and AI engineering were invaluable."
    },
    {
      name: "Ahmad Raza", 
      date: "Jul 27, 2024",
      rating: 5,
      quote: "I loved the way you answered all my questions and provided practical guidance. Ibrahim's insights were invaluable."
    },
    {
      name: "Sarah Khan",
      date: "Jul 20, 2024", 
      rating: 5,
      quote: "Ibrahim helped me understand complex ML concepts with ease. His real-world examples were particularly helpful."
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What <span className="text-primary">Mentees Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real feedback from mentorship sessions
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <Card className="p-8 md:p-12 card-hover neon-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Large Quote Icon */}
                <div className="flex justify-center">
                  <Quote className="h-12 w-12 text-primary/30" />
                </div>

                {/* Star Rating */}
                <div className="flex justify-center gap-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Quote Text */}
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl text-foreground italic leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </blockquote>

                {/* Mentee Info */}
                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    {testimonials[currentIndex].date}
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow">
              <a href="https://topmate.io/ibrahim_qasmi" target="_blank" rel="noopener noreferrer">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Book Your Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
