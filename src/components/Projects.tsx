import { useState } from 'react';
import { ExternalLink, Github, FileText, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = [
    'All', 
    'Healthcare & Wellness', 
    'Legal Tech', 
    'Education', 
    'Content Creation',
    'Business & Productivity', 
    'Government & Civic', 
    'Infrastructure & Networking',
    'Space & Exploration',
    'AI Research',
    'E-commerce',
    'Developer Tools'
  ];

  const projects = [
    // CONTENT CREATION & MEDIA
    {
      title: "Pulse & Prism",
      domain: "Content Creation",
      platform: "LabLab.ai",
      achievement: "🥈 Top 5",
      event: "Aria & Allegro Multimodal Hackathon",
      description: "AI-powered short-form video creator for TikTok/YouTube Shorts",
      techStack: ["Aria AI", "Allegro", "Python", "React", "Video Processing"],
      links: {
        github: "https://github.com/bilal77511/aria-and-allegro-hackathon",
        submission: "https://lablab.ai/event/aria-and-allegro-multimodal-hackathon"
      }
    },
    {
      title: "AI Post Creator Agent",
      domain: "Content Creation",
      platform: "Gen AI Works",
      description: "Automated social media content creation with AI",
      techStack: ["Python", "LLM", "Streamlit", "Social Media APIs"],
      links: {
        github: "https://github.com/muhammadibrahim313/AI-Post-Creator2",
        demo: "https://ai-post-creator2-btaji.streamlit.app/"
      }
    },
    
    // HEALTHCARE & WELLNESS
    {
      title: "PeriodCare",
      domain: "Healthcare & Wellness",
      platform: "LabLab.ai",
      achievement: "🏆 #1 Winner",
      event: "Replit & Cursor Hackathon",
      description: "Women's health platform for menstrual cycle tracking",
      techStack: ["React", "Node.js", "MongoDB", "AI/ML", "Health Analytics"],
      links: {
        github: "https://github.com/muhammadibrahim313/PeriodCare",
        submission: "https://lablab.ai/event/replit-and-cursor-hackathon"
      }
    },
    {
      title: "Sehat Connect",
      domain: "Healthcare & Wellness",
      platform: "Devpost",
      event: "GPT4o: Code & Conquer",
      description: "Virtual doctor & nutritionist platform using GPT-4",
      techStack: ["Python", "GPT-4", "Streamlit", "Healthcare APIs"],
      links: {
        github: "https://github.com/muhammadibrahim313/Sehat-Connect",
        demo: "https://sehat-connect-b-taji.streamlit.app/",
        submission: "https://devpost.com/software/virtual-doctor-m6ajw0"
      }
    },
    {
      title: "My Baby",
      domain: "Healthcare & Wellness",
      platform: "Devpost",
      event: "United Hack V4",
      description: "Computer vision app for infant monitoring and health tracking",
      techStack: ["Python", "OpenCV", "TensorFlow", "Streamlit", "CV"],
      links: {
        github: "https://github.com/muhammadibrahim313/My_Baby",
        demo: "https://mybaby.streamlit.app/",
        submission: "https://devpost.com/software/my-baby-fqvpzw"
      }
    },
    {
      title: "Deep Love",
      domain: "Healthcare & Wellness",
      platform: "LabLab.ai",
      event: "Fall in Love with DeepSeek",
      description: "Mental wellness AI companion for emotional support",
      techStack: ["DeepSeek", "React", "Node.js", "AI Psychology"],
      links: {
        github: "https://github.com/muhammadibrahim313/Deep-Love",
        demo: "https://deep-love.vercel.app/",
        submission: "https://lablab.ai/event/fall-in-love-with-deepseek/gen-r1/deeplove-ai"
      }
    },
    {
      title: "Dr. Well",
      domain: "Healthcare & Wellness",
      platform: "Onsite",
      achievement: "🏆 1st Place",
      event: "Jet Park Henders Hackathon",
      description: "Healthcare AI platform for medical assistance",
      techStack: ["Python", "AI/ML", "Healthcare APIs", "React"],
      links: {}
    },
    
    // LEGAL TECH
    {
      title: "Legal Buddy",
      domain: "Legal Tech",
      platform: "LabLab/Devpost",
      achievement: "🏆 Multiple Wins",
      event: "Stanford x Law AI & Others",
      description: "AI-powered legal document review and analysis with RAG",
      techStack: ["Python", "RAG", "LangChain", "React", "Legal NLP"],
      links: {
        demo: "https://legal-buddy-v3-frontend-deployed.vercel.app/"
      }
    },
    {
      title: "Third Chair",
      domain: "Legal Tech",
      platform: "LabLab.ai",
      event: "Trae AI IDE: Zero Limits",
      description: "Legal document guardian - AI assistant for legal professionals",
      techStack: ["Python", "LangChain", "Streamlit", "OpenAI", "Legal Tech"],
      links: {
        github: "https://github.com/muhammadibrahim313/Third-Chair",
        demo: "https://third-chair.vercel.app/",
        submission: "https://lablab.ai/event/code-craft-ai-x-dev-hackathon/agentiaworld/third-chair-your-legal-document-guardian"
      }
    },
    
    // EDUCATION
    {
      title: "EduNexus",
      domain: "Education",
      platform: "LabLab.ai",
      event: "IBM watsonx Challenge",
      description: "AI-powered education platform with IBM watsonx Assistant",
      techStack: ["Python", "IBM watsonx", "Streamlit", "Educational AI"],
      links: {
        github: "https://github.com/muhammadibrahim313/EDUNEXUS-2.0",
        demo: "https://edunexus-2.streamlit.app/",
        submission: "https://lablab.ai/event/ibm-watsonx-assistant/btaji-crew/edunexus-2"
      }
    },
    {
      title: "Examinator",
      domain: "Education",
      platform: "Devpost",
      event: "World's Largest Hackathon by Bolt",
      description: "Automated exam generation and grading system using NLP",
      techStack: ["Python", "NLP", "React", "Education Tech"],
      links: {
        github: "https://github.com/muhammadibrahim313/Examinator",
        demo: "https://brilliant-praline-0da92f.netlify.app/",
        submission: "https://devpost.com/software/exam-inator"
      }
    },
    {
      title: "DataVue",
      domain: "Education",
      platform: "LabLab.ai",
      event: "Pak Angels Gen AI Cohort-1",
      description: "Multi-task data visualization dashboard with AI agents",
      techStack: ["Python", "MindsDB", "Streamlit", "Data Viz", "AI Agents"],
      links: {
        github: "https://github.com/muhammadibrahim313/DataVue",
        demo: "https://data-vue.streamlit.app/",
        submission: "https://lablab.ai/event/ai-agents-hack-with-lablab-and-mindsdb/synaptic-synergy/datavue"
      }
    },
    
    // BUSINESS & PRODUCTIVITY
    {
      title: "OmniBoost",
      domain: "Business & Productivity",
      platform: "LabLab.ai",
      event: "IBM Granite Hackathon",
      description: "Business productivity agent - 'Your next 100M dollar agent'",
      techStack: ["Python", "IBM Granite", "AI Agents", "Business Intelligence"],
      links: {
        github: "https://github.com/muhammadibrahim313/OmniBoost",
        submission: "https://lablab.ai/event/generative-ai-hackathon-with-ibm-granite/team-x/omniboost"
      }
    },
    {
      title: "Aurora AI",
      domain: "Business & Productivity",
      platform: "LabLab.ai",
      event: "Co-Creating with GPT-5",
      description: "B2B lead generation platform with GPT-5",
      techStack: ["Python", "GPT-5", "React", "B2B Sales", "AI"],
      links: {
        github: "https://github.com/muhammadibrahim313/aurora-ai",
        demo: "https://aurora-ai-psi.vercel.app/",
        submission: "https://lablab.ai/event/co-creating-with-gpt-5/btaji-crew/aurora-ai"
      }
    },
    {
      title: "Nano Banana",
      domain: "Business & Productivity",
      platform: "Kaggle",
      event: "Google DeepMind Hackathon",
      description: "AI-powered marketing asset creation studio",
      techStack: ["Python", "Google DeepMind", "Streamlit", "Marketing AI"],
      links: {
        github: "https://github.com/muhammadibrahim313/Nano-Banana-Product-Marketing",
        demo: "https://nano-banana-appuct-marketing.streamlit.app/",
        submission: "https://www.kaggle.com/competitions/banana/writeups"
      }
    },
    
    // GOVERNMENT & CIVIC
    {
      title: "GovEase",
      domain: "Government & Civic",
      platform: "LabLab.ai",
      event: "Llama Impact Hackathon",
      description: "Platform connecting citizens with government services",
      techStack: ["Python", "Llama 3.2", "Streamlit", "Gov Tech"],
      links: {
        github: "https://github.com/muhammadibrahim313/Llama_impact-3.2",
        demo: "https://llamaimpact-32-gjlgkbvyt5hsgjnay5yawz.streamlit.app/",
        submission: "https://lablab.ai/event/llama-impact-hackathon/btaji-crew/govease"
      }
    },
    
    // INFRASTRUCTURE & NETWORKING
    {
      title: "TeleGuide",
      domain: "Infrastructure & Networking",
      platform: "LabLab.ai",
      event: "Edge Runners 3.2",
      description: "Telecommunications troubleshooting platform",
      techStack: ["Python", "Network Analysis", "Streamlit", "Telecom"],
      links: {
        github: "https://github.com/muhammadibrahim313/TeleGuide",
        demo: "https://teleguide-b8okhxznmhtwhgy9vnpmed.streamlit.app/",
        submission: "https://lablab.ai/event/edge-runners-3-point-2/b-taji-crew/teleguide"
      }
    },
    {
      title: "Network Log Translator",
      domain: "Infrastructure & Networking",
      platform: "LabLab.ai",
      event: "AI for Connectivity Hackathon",
      description: "AI-powered network log analysis and translation",
      techStack: ["Python", "NLP", "Network Analysis", "Streamlit"],
      links: {
        github: "https://github.com/muhammadibrahim313/Network-Log-Translator",
        demo: "https://network-log-translator-1.streamlit.app/",
        submission: "https://lablab.ai/event/ai-for-connectivity-hackathon/ai-venture/network-log-translator"
      }
    },
    {
      title: "SPOT Connect",
      domain: "Infrastructure & Networking",
      platform: "LabLab.ai",
      event: "AI for Connectivity Hackathon II",
      description: "Network resilience platform using time-series analysis",
      techStack: ["Python", "Time Series", "React", "Network Resilience"],
      links: {
        github: "https://github.com/muhammadibrahim313/SPOT-CONNECT",
        demo: "https://spotconnect-two.vercel.app/",
        submission: "https://lablab.ai/event/ai-for-connectivity-hackathon-building-resilient-networks/default/spot-connect"
      }
    },
    
    // SPACE & EXPLORATION
    {
      title: "Humans to Mars",
      domain: "Space & Exploration",
      platform: "LabLab.ai",
      achievement: "🥈 #2 Winner",
      event: "AIstronauts: Space Agents",
      description: "Mars exploration project addressing space colonization challenges",
      techStack: ["Python", "Space Tech", "Streamlit", "AI Agents"],
      links: {
        github: "https://github.com/muhammadibrahim313/Humans-to-Mars",
        demo: "https://marsapp.streamlit.app/",
        submission: "https://lablab.ai/event/aistronauts-space-agents-on-a-mission/default/humans-to-mars"
      }
    },
    
    // AI RESEARCH
    {
      title: "NemoTron Fine-tuning",
      domain: "AI Research",
      platform: "Nvidia",
      event: "ODSC Hackathon",
      description: "LLM fine-tuning using NVIDIA NeMo Framework",
      techStack: ["Python", "NVIDIA NeMo", "LLM", "Fine-tuning"],
      links: {
        github: "https://github.com/muhammadibrahim313/Nvidia-ODSC-Hackathon"
      }
    },
    {
      title: "Agent Force",
      domain: "AI Research",
      platform: "LabLab.ai",
      event: "Internet of Agents @Solana Skyline",
      description: "Multi-agent system on Solana blockchain",
      techStack: ["Python", "Solana", "Multi-Agent Systems", "Blockchain"],
      links: {
        github: "https://github.com/muhammadibrahim313/Agent-Force-",
        submission: "https://lablab.ai/event/internet-of-agents/btaji-crew/agent-force"
      }
    },
    
    // E-COMMERCE
    {
      title: "Global Buyer Scout",
      domain: "E-commerce",
      platform: "Onsite",
      achievement: "🥉 Runner Up",
      event: "FAST University",
      description: "Global e-commerce buyer discovery platform",
      techStack: ["Python", "E-commerce APIs", "React", "AI"],
      links: {
        github: "https://github.com/muhammadibrahim313/Global_Buyer_Scout"
      }
    },
    
    // DEVELOPER TOOLS
    {
      title: "WordSprint Hack Plugin",
      domain: "Developer Tools",
      platform: "WordPress",
      achievement: "🥈 2nd Place",
      event: "WordPress Hackathon",
      description: "WordPress plugin for development workflows",
      techStack: ["PHP", "WordPress", "JavaScript", "Plugin Development"],
      links: {}
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.domain === activeFilter);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI solutions across industries - from healthcare to space exploration
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter 
                  ? "bg-primary text-primary-foreground neon-glow" 
                  : "border-primary/30 text-foreground hover:bg-primary/10"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="p-6 card-hover neon-border slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                    <Badge className="bg-primary/10 text-primary text-xs whitespace-nowrap">{project.platform}</Badge>
                  </div>
                  
                  {project.achievement && (
                    <Badge className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20">
                      <Trophy className="h-3 w-3 mr-1" />
                      {project.achievement}
                    </Badge>
                  )}
                  
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="skill-chip text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.links.demo && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.submission && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.links.submission} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-1" />
                          Submission
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

export default Projects;
