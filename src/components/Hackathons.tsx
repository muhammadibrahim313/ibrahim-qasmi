import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Hackathons = () => {
  const hackathons = [
    {
      title: "Third Chair – Legal document guardian",
      platform: "LabLab AI",
      date: "Jun 14, 2025",
      teamSize: 3,
      description: "AI platform that reviews legal documents, summarises content, assesses risk and answers questions.",
      techStack: ["Python", "Streamlit", "LangChain"],
      links: {
        demo: "https://github.com/muhammadibrahim313/Third-Chair",
        github: "https://github.com/muhammadibrahim313/Third-Chair"
      }
    },
    {
      title: "SPOT Connect",
      platform: "LabLab AI", 
      date: "Mar 2, 2025",
      teamSize: 2,
      description: "AI-powered network resilience platform using time-series analysis, FastAPI and React.",
      techStack: ["FastAPI", "React", "Time-series Analysis"],
      links: {
        demo: "#",
        github: "https://github.com/muhammadibrahim313/SPOT-Connect"
      }
    },
    {
      title: "DataViz",
      platform: "Sprint.dev Superflex Hackathon",
      date: "Feb 18, 2025", 
      teamSize: 1,
      description: "Multi-task data visualisation dashboard with interactive analytics.",
      techStack: ["Python", "Plotly", "Streamlit"],
      links: {
        demo: "https://github.com/muhammadibrahim313/DataViz",
        github: "https://github.com/muhammadibrahim313/DataViz"
      }
    },
    {
      title: "Legal Buddy",
      platform: "Devpost",
      date: "2024",
      teamSize: 3,
      description: "AI-powered legal document review platform built with React/TS, Django/Python, and RAG.",
      techStack: ["React", "TypeScript", "Django", "Python", "RAG"],
      links: {
        demo: "https://devpost.com/software/legal-buddy",
        github: "https://github.com/muhammadibrahim313/Legal-Buddy"
      }
    },
    {
      title: "Examinator", 
      platform: "Devpost",
      date: "2024",
      teamSize: 2,
      description: "Automated exam creation and grading system using FastAPI, Twilio and Groq.",
      techStack: ["FastAPI", "Twilio", "Groq"],
      links: {
        demo: "https://devpost.com/software/examinator",
        github: "https://github.com/muhammadibrahim313/Examinator"
      }
    },
    {
      title: "My Baby",
      platform: "Devpost", 
      date: "2024",
      teamSize: 1,
      description: "Computer-vision pregnancy companion app built with Python, Streamlit and Whisper.",
      techStack: ["Python", "Streamlit", "Whisper", "Computer Vision"],
      links: {
        demo: "https://devpost.com/software/my-baby",
        github: "https://github.com/muhammadibrahim313/My-Baby"
      }
    },
    {
      title: "Sehat Connect",
      platform: "Devpost",
      date: "2024", 
      teamSize: 3,
      description: "Virtual doctor & nutritionist platform using GPT-4.",
      techStack: ["GPT-4", "Python", "Flask", "React"],
      links: {
        demo: "https://devpost.com/software/sehat-connect",
        github: "https://github.com/muhammadibrahim313/Sehat-Connect"
      }
    }
  ];

  return (
    <section id="hackathons" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hackathons & <span className="text-primary">Competitions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building innovative solutions under pressure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <Card 
                key={hackathon.title} 
                className="p-6 card-hover neon-border slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-primary/10 text-primary">{hackathon.platform}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">{hackathon.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {hackathon.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Team of {hackathon.teamSize}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{hackathon.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {hackathon.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="skill-chip text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {hackathon.techStack.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{hackathon.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {hackathon.links.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={hackathon.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {hackathon.links.demo && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={hackathon.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
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

export default Hackathons;