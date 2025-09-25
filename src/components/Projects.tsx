import { useState } from 'react';
import { ExternalLink, Github, FileText, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Anime-aesthetic Kaggle project images
import customerSegmentation from '@/assets/kaggle/customer-segmentation.jpg';
import sentimentAnalysis from '@/assets/kaggle/sentiment-analysis.jpg';
import imageClassification from '@/assets/kaggle/image-classification.jpg';
import timeSeries from '@/assets/kaggle/time-series.jpg';
import textGeneration from '@/assets/kaggle/text-generation.jpg';
import objectDetection from '@/assets/kaggle/object-detection.jpg';
import recommendationSystem from '@/assets/kaggle/recommendation-system.jpg';
import questionAnswering from '@/assets/kaggle/question-answering.jpg';
import medicalAnalysis from '@/assets/kaggle/medical-analysis.jpg';
import financialPrediction from '@/assets/kaggle/financial-prediction.jpg';
import languageTranslation from '@/assets/kaggle/language-translation.jpg';
import videoAnalysis from '@/assets/kaggle/video-analysis.jpg';
import anomalyDetection from '@/assets/kaggle/anomaly-detection.jpg';
import speechRecognition from '@/assets/kaggle/speech-recognition.jpg';
import facialRecognition from '@/assets/kaggle/facial-recognition.jpg';
import marketAnalysis from '@/assets/kaggle/market-analysis.jpg';
import socialAnalytics from '@/assets/kaggle/social-analytics.jpg';
import salesForecasting from '@/assets/kaggle/sales-forecasting.jpg';
import customerBehavior from '@/assets/kaggle/customer-behavior.jpg';
import performanceMetrics from '@/assets/kaggle/performance-metrics.jpg';
import hyperparameterOptimization from '@/assets/kaggle/hyperparameter-optimization.jpg';
import competitionWinner from '@/assets/kaggle/competition-winner.jpg';
import bertFinetuning from '@/assets/kaggle/bert-finetuning.jpg';
import cnnArchitecture from '@/assets/kaggle/cnn-architecture.jpg';
import rnnStockPrediction from '@/assets/kaggle/rnn-stock-prediction.jpg';
import graphNeuralNetworks from '@/assets/kaggle/graph-neural-networks.jpg';
import multimodalLearning from '@/assets/kaggle/multimodal-learning.jpg';
import reinforcementLearning from '@/assets/kaggle/reinforcement-learning.jpg';

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
    { title: "Customer Segmentation Analysis", categories: ["Machine Learning", "Tabular Data"], metric: "0.95 AUC", image: customerSegmentation },
    { title: "Sentiment Analysis Challenge", categories: ["NLP", "Transformers"], metric: "0.89 F1-Score", image: sentimentAnalysis },
    { title: "Image Classification Contest", categories: ["Computer Vision", "Image Classification", "CNN"], metric: "0.92 Accuracy", image: imageClassification },
    { title: "Time Series Forecasting", categories: ["Machine Learning", "Time Series"], metric: "0.12 RMSE", image: timeSeries },
    { title: "Text Generation Model", categories: ["NLP", "LLM", "Transformers"], metric: "0.85 BLEU", image: textGeneration },
    { title: "Object Detection Task", categories: ["Computer Vision", "Object Detection", "Deep Learning"], metric: "0.78 mAP", image: objectDetection },
    { title: "Recommendation System", categories: ["Machine Learning", "Recommendation Systems"], metric: "0.91 Precision", image: recommendationSystem },
    { title: "Question Answering", categories: ["NLP", "Transformers", "LLM"], metric: "0.88 Exact Match", image: questionAnswering },
    { title: "Medical Image Analysis", categories: ["Computer Vision", "Image Classification", "CNN"], metric: "0.94 Sensitivity", image: medicalAnalysis },
    { title: "Financial Prediction", categories: ["Machine Learning", "Time Series", "Tabular Data"], metric: "0.16 MAE", image: financialPrediction },
    { title: "Language Translation", categories: ["NLP", "Transformers", "LLM"], metric: "0.82 COMET", image: languageTranslation },
    { title: "Video Analysis", categories: ["Computer Vision", "Deep Learning", "CNN"], metric: "0.76 IoU", image: videoAnalysis },
    { title: "Anomaly Detection", categories: ["Machine Learning", "Tabular Data"], metric: "0.93 ROC-AUC", image: anomalyDetection },
    { title: "Speech Recognition", categories: ["NLP", "RNN", "Deep Learning"], metric: "0.87 WER", image: speechRecognition },
    { title: "Facial Recognition", categories: ["Computer Vision", "Image Classification", "CNN"], metric: "0.95 Verification", image: facialRecognition },
    { title: "Market Analysis", categories: ["Data Analysis", "EDA"], metric: "Comprehensive Insights", image: marketAnalysis },
    { title: "Social Media Analytics", categories: ["Data Analysis", "EDA", "NLP"], metric: "Interactive Dashboard", image: socialAnalytics },
    { title: "Sales Forecasting", categories: ["Data Analysis", "Time Series"], metric: "Business Intelligence", image: salesForecasting },
    { title: "Customer Behavior Study", categories: ["Data Analysis", "EDA"], metric: "Actionable Insights", image: customerBehavior },
    { title: "Performance Metrics", categories: ["Data Analysis", "EDA"], metric: "Statistical Analysis", image: performanceMetrics },
    { title: "Hyperparameter Optimization", categories: ["Optuna Tuning", "Machine Learning"], metric: "15% Performance Boost", image: hyperparameterOptimization },
    { title: "Competition Winner - Tabular", categories: ["Kaggle Competition", "Tabular Data", "Machine Learning"], metric: "Gold Medal", image: competitionWinner },
    { title: "BERT Fine-tuning", categories: ["Fine-tuning", "NLP", "Transformers"], metric: "0.94 F1-Score", image: bertFinetuning },
    { title: "CNN Architecture Design", categories: ["CNN", "Deep Learning", "Computer Vision"], metric: "0.89 Accuracy", image: cnnArchitecture },
    { title: "RNN Stock Prediction", categories: ["RNN", "Time Series", "Deep Learning"], metric: "0.23 MSE", image: rnnStockPrediction },
    { title: "Graph Neural Networks", categories: ["Deep Learning", "Machine Learning", "CNN"], metric: "0.91 Accuracy", image: graphNeuralNetworks },
    { title: "Multimodal Learning System", categories: ["NLP", "Computer Vision", "Transformers"], metric: "0.86 Combined Score", image: multimodalLearning },
    { title: "Reinforcement Learning Agent", categories: ["Deep Learning", "Machine Learning"], metric: "0.94 Reward Score", image: reinforcementLearning }
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
                  className="p-0 card-hover neon-border slide-up overflow-hidden group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative">
                    {/* Anime-aesthetic image */}
                    <div 
                      className="w-full h-32 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      
                      {/* Anime-style particles overlay */}
                      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                        <div className="w-full h-full animate-pulse" style={{
                          background: 'radial-gradient(circle at 20% 30%, rgba(0,206,209,0.2) 1px, transparent 1px), radial-gradient(circle at 70% 80%, rgba(147,112,219,0.2) 1px, transparent 1px)',
                          backgroundSize: '30px 30px, 50px 50px'
                        }}></div>
                      </div>
                    </div>
                    
                    {/* Content overlay */}
                    <div className="p-4 space-y-3">
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