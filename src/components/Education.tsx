import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "BS Information Technology",
      institution: "Bahauddin Zakariya University",
      location: "Multan, Pakistan",
      period: "2022 – 2026",
      status: "In Progress",
      focus: "Artificial Intelligence, Data Science & Software Engineering",
      description: "Comprehensive program covering modern IT concepts with specialization in AI and data science technologies.",
      coursework: [
        "Machine Learning & Deep Learning",
        "Data Structures & Algorithms", 
        "Database Management Systems",
        "Software Engineering Principles",
        "Computer Vision & NLP",
        "Statistical Analysis & Data Mining"
      ],
      achievements: [
        "Academic excellence in AI-related courses",
        "Active participant in university tech competitions",
        "Research focus on healthcare AI applications"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-primary">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic foundation in technology and artificial intelligence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree} 
                className="p-6 card-hover neon-border slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 top-6 w-1 h-20 bg-primary rounded-full"></div>
                
                <div className="ml-8 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary self-start">
                      {edu.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium">Focus: {edu.focus}</span>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {edu.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Coursework:</h4>
                      <ul className="space-y-1">
                        {edu.coursework.map((course, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Education;