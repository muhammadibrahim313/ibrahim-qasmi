import { useState } from 'react';
import { ExternalLink, Github, FileText, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [kaggleFilter, setKaggleFilter] = useState('All');
  
  const filters = ['All', 'NLP', 'CV', 'ML', 'EDA', 'Web Dev'];
  
  const kaggleFilters = [
    'All', 'Data Analysis', 'EDA', 'Machine Learning', 'Optuna Tuning', 
    'Kaggle Competition', 'Deep Learning', 'Computer Vision', 'NLP', 'CNN', 
    'RNN', 'Transformers', 'LLM', 'Fine-tuning', 'Time Series', 'Tabular Data', 
    'Image Classification', 'Object Detection', 'Recommendation Systems'
  ];

  const projects = [
    {
      title: "Legal Buddy",
      domain: "NLP",
      description: "AI-powered legal document review and analysis system with natural language processing",
      techStack: ["Python", "Transformers", "FastAPI", "React", "PostgreSQL"],
      highlights: ["95% accuracy", "Real-time analysis", "Multi-language support"],
      links: {
        github: "https://github.com/muhammadibrahim313/Legal-Buddy",
        demo: "#",
        paper: "#"
      }
    },
    {
      title: "Examinator",
      domain: "NLP",
      description: "Automated exam generation and grading system using advanced NLP techniques",
      techStack: ["Python", "BERT", "Django", "PostgreSQL"],
      highlights: ["Auto question generation", "Intelligent grading", "Plagiarism detection"],
      links: {
        github: "https://github.com/muhammadibrahim313/Examinator",
        demo: "#"
      }
    },
    {
      title: "My Baby",
      domain: "CV",
      description: "Computer vision application for infant monitoring and health tracking",
      techStack: ["Python", "OpenCV", "TensorFlow", "React Native"],
      highlights: ["Real-time monitoring", "Health insights", "Mobile app"],
      links: {
        github: "https://github.com/muhammadibrahim313/My-Baby",
        demo: "#"
      }
    },
    {
      title: "Sehat-Connect",
      domain: "ML",
      description: "Healthcare platform connecting patients with doctors using ML recommendations",
      techStack: ["Python", "Scikit-learn", "Flask", "React", "MongoDB"],
      highlights: ["Smart matching", "Telemedicine", "Health analytics"],
      links: {
        github: "https://github.com/muhammadibrahim313/Sehat-Connect",
        demo: "#"
      }
    },
    {
      title: "DataViz",
      domain: "EDA",
      description: "Multi-task data visualization dashboard with interactive analytics",
      techStack: ["Python", "Plotly", "Streamlit", "Pandas"],
      highlights: ["Interactive charts", "Real-time updates", "Export features"],
      links: {
        github: "https://github.com/muhammadibrahim313/DataViz",
        demo: "#"
      }
    },
    {
      title: "Third Chair",
      domain: "NLP",
      description: "AI legal document review platform for enhanced legal research",
      techStack: ["Python", "LangChain", "Streamlit", "OpenAI"],
      highlights: ["Document analysis", "Legal insights", "Chat interface"],
      links: {
        github: "https://github.com/muhammadibrahim313/Third-Chair",
        demo: "#"
      }
    }
  ];

  const kagglePlaceholders = [
    { title: "Customer Segmentation Analysis", categories: ["Machine Learning", "Tabular Data"], metric: "0.95 AUC" },
    { title: "Sentiment Analysis Challenge", categories: ["NLP", "Transformers"], metric: "0.89 F1-Score" },
    { title: "Image Classification Contest", categories: ["Computer Vision", "Image Classification", "CNN"], metric: "0.92 Accuracy" },
    { title: "Time Series Forecasting", categories: ["Machine Learning", "Time Series"], metric: "0.12 RMSE" },
    { title: "Text Generation Model", categories: ["NLP", "LLM", "Transformers"], metric: "0.85 BLEU" },
    { title: "Object Detection Task", categories: ["Computer Vision", "Object Detection", "Deep Learning"], metric: "0.78 mAP" },
    { title: "Recommendation System", categories: ["Machine Learning", "Recommendation Systems"], metric: "0.91 Precision" },
    { title: "Question Answering", categories: ["NLP", "Transformers", "LLM"], metric: "0.88 Exact Match" },
    { title: "Medical Image Analysis", categories: ["Computer Vision", "Image Classification", "CNN"], metric: "0.94 Sensitivity" },
    { title: "Financial Prediction", categories: ["Machine Learning", "Time Series", "Tabular Data"], metric: "0.16 MAE" },
    { title: "Language Translation", categories: ["NLP", "Transformers", "LLM"], metric: "0.82 COMET" },
    { title: "Video Analysis", categories: ["Computer Vision", "Deep Learning", "CNN"], metric: "0.76 IoU" },
    { title: "Anomaly Detection", categories: ["Machine Learning", "Tabular Data"], metric: "0.93 ROC-AUC" },
    { title: "Speech Recognition", categories: ["NLP", "RNN", "Deep Learning"], metric: "0.87 WER" },
    { title: "Facial Recognition", categories: ["Computer Vision", "Image Classification", "CNN"], metric: "0.95 Verification" },
    { title: "Market Analysis", categories: ["Data Analysis", "EDA"], metric: "Comprehensive Insights" },
    { title: "Social Media Analytics", categories: ["Data Analysis", "EDA", "NLP"], metric: "Interactive Dashboard" },
    { title: "Sales Forecasting", categories: ["Data Analysis", "Time Series"], metric: "Business Intelligence" },
    { title: "Customer Behavior Study", categories: ["Data Analysis", "EDA"], metric: "Actionable Insights" },
    { title: "Performance Metrics", categories: ["Data Analysis", "EDA"], metric: "Statistical Analysis" },
    { title: "Hyperparameter Optimization", categories: ["Optuna Tuning", "Machine Learning"], metric: "15% Performance Boost" },
    { title: "Competition Winner - Tabular", categories: ["Kaggle Competition", "Tabular Data", "Machine Learning"], metric: "Gold Medal" },
    { title: "BERT Fine-tuning", categories: ["Fine-tuning", "NLP", "Transformers"], metric: "0.94 F1-Score" },
    { title: "CNN Architecture Design", categories: ["CNN", "Deep Learning", "Computer Vision"], metric: "0.89 Accuracy" },
    { title: "RNN Stock Prediction", categories: ["RNN", "Time Series", "Deep Learning"], metric: "0.23 MSE" }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.domain === activeFilter);

  const filteredKaggle = kaggleFilter === 'All' 
    ? kagglePlaceholders 
    : kagglePlaceholders.filter(project => project.categories.includes(kaggleFilter));

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
              Innovative AI solutions across various domains
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

          {/* GitHub Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
              Open Source Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="p-6 card-hover neon-border slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                      <Badge className="bg-primary/10 text-primary">{project.domain}</Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="skill-chip text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="text-xs text-primary space-y-1">
                      {project.highlights.map((highlight) => (
                        <div key={highlight}>• {highlight}</div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      {project.links.github && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Kaggle Gallery */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
              Kaggle Gallery
            </h3>
            
            {/* Kaggle Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {kaggleFilters.map((filter) => (
                <Button
                  key={filter}
                  variant={kaggleFilter === filter ? "default" : "outline"}
                  onClick={() => setKaggleFilter(filter)}
                  className={kaggleFilter === filter 
                    ? "bg-primary text-primary-foreground neon-glow" 
                    : "border-primary/30 text-foreground hover:bg-primary/10"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredKaggle.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="p-4 card-hover neon-border slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.categories.slice(0, 2).map((category) => (
                        <Badge key={category} className="bg-primary/10 text-primary text-xs">{category}</Badge>
                      ))}
                      {project.categories.length > 2 && (
                        <Badge className="bg-muted text-muted-foreground text-xs">+{project.categories.length - 2}</Badge>
                      )}
                    </div>
                    <h4 className="text-sm font-medium text-foreground line-clamp-2">{project.title}</h4>
                    <div className="text-xs text-primary font-mono">{project.metric}</div>
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      Replace with Kaggle link
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;