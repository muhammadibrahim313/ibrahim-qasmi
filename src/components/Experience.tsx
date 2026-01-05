import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "BluWhale",
      location: "USA (Remote)",
      period: "March 2025 – Present",
      type: "Full-time",
      description: "Building data analytics solutions and full-stack applications for USA-based startup.",
      responsibilities: [
        "Build and deploy data analytics solutions for business intelligence",
        "Develop full-stack applications with modern web technologies",
        "Create machine learning models for predictive analytics and automation",
        "Collaborate with cross-functional teams to deliver scalable solutions",
        "Optimize application performance and ensure code quality"
      ],
      skills: ["Python", "React", "Machine Learning", "Data Analytics", "Full-Stack Development"]
    },
    {
      title: "Data Scientist",
      company: "reimagine.dev",
      location: "Remote",
      period: "June 2025 – December 2025",
      type: "Contract",
      description: "Built AI-powered web automation and assistance solutions at Reimagine. Developed cutting-edge technology that transforms how users interact with web content through intelligent AI agents.",
      responsibilities: [
        "Built production AI systems for web automation and intelligent assistance",
        "Developed AI agents that enhance user web browsing and interaction",
        "Contributed to marketing campaigns and user acquisition strategy",
        "Implemented cutting-edge AI/ML features for web-based solutions"
      ],
      skills: ["AI/ML", "Web Automation", "AI Agents", "Data Science", "Product Development"]
    },
    {
      title: "AI Engineer",
      company: "Grinda.ai",
      location: "South Korea (Remote)",
      period: "October 2024 – March 2025",
      type: "Full-time",
      description: "Developed AI pipelines and conversational agents for South Korean startup focused on lead generation.",
      responsibilities: [
        "Developed and deployed AI pipelines for conversational agents",
        "Implemented lead generation systems using machine learning",
        "Built backend ML services with FastAPI and modern frameworks",
        "Integrated LangChain for advanced natural language processing",
        "Optimized AI model performance and scalability"
      ],
      skills: ["LangChain", "FastAPI", "Machine Learning", "NLP", "AI Pipelines"]
    },
    {
      title: "Health Data Analyst / AI Engineer",
      company: "Eminent Enterprise Pakistan",
      location: "Pakistan",
      period: "Jan 2023 – October 2024",
      type: "Full-time",
      description: "Led AI/ML initiatives in healthcare data analysis and developed scalable solutions for improved patient outcomes.",
      responsibilities: [
        "Analyzed complex health datasets to extract meaningful insights and patterns",
        "Built and deployed machine learning models for predictive healthcare analytics", 
        "Collaborated with cross-functional teams to implement AI-driven solutions",
        "Developed data pipelines and automated reporting systems",
        "Ensured data quality, security, and compliance with healthcare standards"
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