import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Abdullah",
      date: "Jul 27, 2025",
      rating: 5,
      quote: "Had a great session with Ibrahim. His insights into Kaggle competitions and AI engineering were invaluable. Highly recommend!"
    },
    {
      name: "Ahmad Raza", 
      date: "Jul 27, 2025",
      rating: 5,
      quote: "I loved the way you answered all my questions and provided practical guidance. Ibrahim's mentoring style is exceptional."
    },
    {
      name: "Sarah Khan",
      date: "Jul 20, 2025", 
      rating: 5,
      quote: "Ibrahim helped me understand complex ML concepts with ease. His real-world examples made everything click."
    },
    {
      name: "Michael Chen",
      date: "Jul 15, 2025",
      rating: 5, 
      quote: "Excellent mentor! Ibrahim's expertise in AI and data science is evident. The session was well-structured and informative."
    },
    {
      name: "Fatima Ali",
      date: "Jul 10, 2025",
      rating: 5,
      quote: "Ibrahim's guidance on Kaggle strategies was exactly what I needed. His mentoring approach is patient and thorough."
    },
    {
      name: "David Smith",
      date: "Jul 5, 2025",
      rating: 5,
      quote: "Great session on AI project development. Ibrahim provided actionable advice that I could implement immediately."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What mentees say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={`${testimonial.name}-${testimonial.date}`} 
                className="p-6 card-hover neon-border slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground text-sm italic pl-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;