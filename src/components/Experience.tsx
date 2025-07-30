import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Health Data Analyst / AI Engineer",
      company: "Eminent Enterprise Pakistan",
      location: "Pakistan",
      period: "Jan 2023 – Present",
      type: "Full-time",
      description: "Leading AI/ML initiatives in healthcare data analysis and developing scalable solutions for improved patient outcomes.",
      responsibilities: [
        "Analyze complex health datasets to extract meaningful insights and patterns",
        "Build and deploy machine learning models for predictive healthcare analytics", 
        "Collaborate with cross-functional teams to implement AI-driven solutions",
        "Develop data pipelines and automated reporting systems",
        "Ensure data quality, security, and compliance with healthcare standards"
      ],
      skills: ["Python", "Machine Learning", "Healthcare Analytics", "Data Pipeline", "SQL"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building impactful AI solutions in the healthcare industry
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <Card 
                key={experience.title} 
                className="p-6 card-hover neon-border slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full"></div>
                
                <div className="ml-8 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary self-start">
                      {experience.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span key={skill} className="skill-chip text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
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

export default Experience;