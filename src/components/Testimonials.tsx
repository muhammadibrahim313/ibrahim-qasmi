import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Moses Opaleye",
      date: "Oct 08, 2025",
      rating: 5,
      quote: "This call cleared all my confusion and gave me a direct road map as to how I should navigate my path. It was very insightful."
    },
    {
      name: "Mairaj Fatima",
      date: "Sep 23, 2025",
      rating: 5,
      quote: "I had a conversation with him about ML, his explanation is clear and easy to understand. It was a wonderful experience to have a conversation with AI engineer like him"
    },
    {
      name: "Ahmad Raza",
      date: "July 27, 2025",
      rating: 5,
      quote: "I loved the way you answered all my questions and told me how to learn anything from scratch, how to be unbeatable, and how to strengthen the fundamentals, EDA, and Preprocessing. At last, how to learn by creating notebooks and participating in Kaggle competitions. I highly recommend @Ibrahim for building a career in Data Science."
    },
    {
      name: "Mohammad Hassan",
      date: "Sep 6, 2025",
      rating: 5,
      quote: "I had a very insightful conversation with Ibrahim he is an amazing mentor the way he elaborated strategies to achieve my goals was awesome I really enjoyed my session with him"
    },
    {
      name: "Youssef Hariri",
      date: "Feb 16, 2025",
      rating: 5,
      quote: "Muhammed is a passionate AI Team leader who knows how to lead international teams towards success. He also knows how to mitigate the risks of cultural differences. His experience, his mindset and his dedication are an example to follow! Thank you Muhammed."
    },
    {
      name: "Jibransaleem",
      date: "Feb 19, 2025",
      rating: 5,
      quote: "I just loved , how he explains the things to me, including importance of slow learning, machine learning, maths and statistics, Eda . I would highly suggest everyone to look up to him"
    },
    {
      name: "Anonymous",
      date: "Sep 10, 2025",
      rating: 5,
      quote: "I really like Ibrahim's advice — it's clear, practical, and easy to follow"
    },
    {
      name: "Muhammad Bilal",
      date: "Aug 10, 2025",
      rating: 5,
      quote: "I had some questions regarding Kaggle and Ibrahim cleared all my concerns. he gave me a full roadmap on how I can also become a Kaglle grandmaster. Thanks, Ibrahim for the time highly recommend."
    },
    {
      name: "Waqas Ishtiaq",
      date: "Sep 6, 2025",
      rating: 5,
      quote: "Loved the session"
    },
    {
      name: "Sumbal Fatima",
      date: "Sep 4, 2025",
      rating: 5,
      quote: "I had a great experience during my 1:1 career consultation. In just 30 minutes, I received valuable guidance on career planning and hackathon strategies. The mentor provided me with a clear roadmap and practical advice that boosted my confidence and helped me see the right direction forward. Highly recommended for anyone looking for structured guidance and actionable insights!"
    },
    {
      name: "Muhammad Fasih",
      date: "Sep 1, 2025",
      rating: 5,
      quote: "I had a great experience. I shared a query and received a comprehensive response within just a few hours. The guidance was clear, insightful, and highly valuable. I really appreciate the timely support and thoughtful advice, it made things so much easier for me."
    },
    {
      name: "Muhammad Husnain",
      date: "Aug 13, 2025",
      rating: 5,
      quote: "I loved the way you answered all my questions and told me how to learn anything from scratch, how to be unbeatable, and how to strengthen the fundamentals, EDA, and Preprocessing. At last, how to learn by creating notebooks and participating in Kaggle competitions. I highly recommend @ibrahim for building a career in Data Science."
    },
    {
      name: "Abdullah",
      date: "Jul 27, 2025",
      rating: 5,
      quote: "Had a great session with Ibrahim Qasmi Bhai. he was incredibly humble, kind, and genuinely helpful. Really appreciate his time and guidance"
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
            <Card className="p-8 md:p-12 card-hover neon-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
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
            <Button asChild size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground neon-glow hover:scale-105 transition-all duration-300">
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
