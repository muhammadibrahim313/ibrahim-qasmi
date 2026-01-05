import { useState } from 'react';
import { ExternalLink, Github, Trophy, BarChart3, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Project preview images
import periodcareImg from '@/assets/projects/periodcare.jpg';
import humansToMarsImg from '@/assets/projects/humans-to-mars.jpg';
import drWellImg from '@/assets/projects/dr-well.jpg';
import legalBuddyImg from '@/assets/projects/legal-buddy.jpg';
import globalBuyerScoutImg from '@/assets/projects/global-buyer-scout.jpg';
import wordsprintImg from '@/assets/projects/wordsprint.jpg';
import pulsePrismImg from '@/assets/projects/pulse-prism.jpg';
import aiPostCreatorImg from '@/assets/projects/ai-post-creator.jpg';
import sehatConnectImg from '@/assets/projects/sehat-connect.jpg';
import myBabyImg from '@/assets/projects/my-baby.jpg';
import deepLoveImg from '@/assets/projects/deep-love.jpg';
import thirdChairImg from '@/assets/projects/third-chair.jpg';
import edunexusImg from '@/assets/projects/edunexus.jpg';
import examinatorImg from '@/assets/projects/examinator.jpg';
import datavueImg from '@/assets/projects/datavue.jpg';
import omniboostImg from '@/assets/projects/omniboost.jpg';
import auroraAiImg from '@/assets/projects/aurora-ai.jpg';
import nanoBananaImg from '@/assets/projects/nano-banana.jpg';
import goveaseImg from '@/assets/projects/govease.jpg';
import teleguideImg from '@/assets/projects/teleguide.jpg';
import networkLogTranslatorImg from '@/assets/projects/network-log-translator.jpg';
import spotConnectImg from '@/assets/projects/spot-connect.jpg';
import nemotronImg from '@/assets/projects/nemotron.jpg';
import agentForceImg from '@/assets/projects/agent-force.jpg';

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
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllKaggle, setShowAllKaggle] = useState(false);

  const projects = [
    // First 7 projects (WINNER PROJECTS)
    {
      title: "PeriodCare",
      domain: "Healthcare & Wellness",
      platform: "LabLab.ai",
      achievement: "🥇 #1 Winner",
      event: "Replit & Cursor Hackathon",
      description: "Women's health platform for menstrual cycle tracking with AI-powered insights and personalized recommendations",
      techStack: ["React", "Node.js", "MongoDB", "AI/ML", "Health Analytics"],
      links: {
        github: "https://github.com/muhammadibrahim313/PeriodCare",
        demo: "https://period-care.netlify.app/"
      },
      image: periodcareImg,
      isGoldWinner: true
    },
    {
      title: "Dr. Well",
      domain: "Healthcare & Wellness",
      platform: "Onsite",
      achievement: "🥇 1st Place",
      event: "Jet Park Henders Hackathon",
      description: "AI-powered health dashboard built with Streamlit. Track vital health metrics, schedule appointments, and get personalized advice",
      techStack: ["Python", "Streamlit", "AI/ML", "Healthcare APIs"],
      links: {
        github: "https://github.com/muhammadibrahim313/dr_well",
        demo: "https://drwell.streamlit.app/"
      },
      image: drWellImg,
      isGoldWinner: true
    },
    {
      title: "Global Buyer Scout",
      domain: "E-commerce",
      platform: "Onsite",
      achievement: "🥉 Runner Up",
      event: "FAST University",
      description: "Global e-commerce buyer discovery platform connecting businesses with international buyers using AI",
      techStack: ["Python", "E-commerce APIs", "React", "AI"],
      links: {
        github: "https://github.com/muhammadibrahim313/Global_Buyer_Scout",
        demo: "https://github.com/muhammadibrahim313/Global_Buyer_Scout"
      },
      image: globalBuyerScoutImg,
      isSilverWinner: true
    },
    {
      title: "Humans to Mars",
      domain: "Space & Exploration",
      platform: "LabLab.ai",
      achievement: "🥈 #2 Winner",
      event: "AIstronauts: Space Agents",
      description: "Mars exploration project addressing space colonization challenges using AI agents and space technology",
      techStack: ["Python", "Space Tech", "Streamlit", "AI Agents"],
      links: {
        github: "https://github.com/muhammadibrahim313/Humans-to-Mars",
        demo: "https://marsapp.streamlit.app/",
        submission: "https://lablab.ai/event/aistronauts-space-agents-on-a-mission/default/humans-to-mars"
      },
      image: humansToMarsImg,
      isSilverWinner: true
    },
    {
      title: "WordSprint Hack Plugin",
      domain: "Developer Tools",
      platform: "WordPress",
      achievement: "🥈 2nd Place",
      event: "WordPress Hackathon",
      description: "WordPress plugin for streamlined development workflows with automated code generation and optimization features",
      techStack: ["PHP", "WordPress", "JavaScript", "Plugin Development", "Web APIs"],
      links: {
        github: "https://github.com/muhammadibrahim313/wordsprint-plugin",
        demo: "https://wordpress.org/plugins",
        submission: "https://wordpress.org/plugins"
      },
      image: wordsprintImg,
      isSilverWinner: true
    },
    {
      title: "Pulse & Prism",
      domain: "Content Creation",
      platform: "LabLab.ai",
      achievement: "🥈 Top 5",
      event: "Aria & Allegro Multimodal Hackathon",
      description: "AI-powered short-form video creator for TikTok/YouTube Shorts with automated editing and effects",
      techStack: ["Aria AI", "Allegro", "Python", "React", "Video Processing"],
      links: {
        github: "https://github.com/bilal77511/aria-and-allegro-hackathon",
        demo: "https://pulse-and-prism.streamlit.app/"
      },
      image: pulsePrismImg,
      isSilverWinner: true
    },
    {
      title: "Legal Buddy",
      domain: "Legal Tech",
      platform: "LabLab/Devpost",
      event: "Stanford x Law AI & Others",
      description: "AI-powered legal document review and analysis with RAG technology for intelligent legal assistance",
      techStack: ["Python", "RAG", "LangChain", "React", "Legal NLP"],
      links: {
        github: "https://github.com/muhammadibrahim313/legalbuddy-black-ponds-hack",
        demo: "https://legal-buddy-v3-frontend-deployed.vercel.app/"
      },
      image: legalBuddyImg
    },
    // 8th project - Nano Banana
    {
      title: "Nano Banana",
      domain: "Business & Productivity",
      platform: "Kaggle",
      event: "Google DeepMind Hackathon",
      description: "AI-powered marketing asset creation studio for generating professional marketing content and visuals",
      techStack: ["Python", "Google DeepMind", "Streamlit", "Marketing AI"],
      links: {
        github: "https://github.com/muhammadibrahim313/Nano-Banana-Product-Marketing",
        demo: "https://nano-banana-appuct-marketing.streamlit.app/",
        submission: "https://www.kaggle.com/competitions/banana/writeups"
      },
      image: nanoBananaImg
    },
    // Remaining projects (9+)
    {
      title: "AI Post Creator Agent",
      domain: "Content Creation",
      platform: "Gen AI Works",
      description: "Automated social media content creation with AI for LinkedIn, Facebook, and Instagram marketing campaigns",
      techStack: ["Python", "LLM", "Streamlit", "Marketing", "Social Media APIs"],
      links: {
        github: "https://github.com/muhammadibrahim313/AI-Post-Creator2",
        demo: "https://ai-post-creator2-btaji.streamlit.app/"
      },
      image: aiPostCreatorImg
    },
    {
      title: "Sehat Connect",
      domain: "Healthcare & Wellness",
      platform: "Devpost",
      event: "GPT4o: Code & Conquer",
      description: "Virtual doctor and nutritionist platform using GPT-4 for personalized health consultations and meal planning",
      techStack: ["Python", "GPT-4", "Streamlit", "Healthcare APIs"],
      links: {
        github: "https://github.com/muhammadibrahim313/Sehat-Connect",
        demo: "https://sehat-connect-b-taji.streamlit.app/",
        submission: "https://devpost.com/software/virtual-doctor-m6ajw0"
      },
      image: sehatConnectImg
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
      },
      image: myBabyImg
    },
    {
      title: "Deep Love",
      domain: "Healthcare & Wellness",
      platform: "LabLab.ai",
      event: "Fall in Love with DeepSeek",
      description: "Mental wellness AI companion for emotional support and mental health guidance using DeepSeek AI",
      techStack: ["DeepSeek", "React", "Node.js", "AI Psychology"],
      links: {
        github: "https://github.com/muhammadibrahim313/Deep-Love",
        demo: "https://deep-love.vercel.app/",
        submission: "https://lablab.ai/event/fall-in-love-with-deepseek/gen-r1/deeplove-ai"
      },
      image: deepLoveImg
    },
    {
      title: "Third Chair",
      domain: "Legal Tech",
      platform: "LabLab.ai",
      event: "Trae AI IDE: Zero Limits",
      description: "Legal document guardian - AI assistant for legal professionals with intelligent contract analysis",
      techStack: ["Python", "LangChain", "Streamlit", "OpenAI", "Legal Tech"],
      links: {
        github: "https://github.com/muhammadibrahim313/Third-Chair",
        demo: "https://third-chair.vercel.app/",
        submission: "https://lablab.ai/event/code-craft-ai-x-dev-hackathon/agentiaworld/third-chair-your-legal-document-guardian"
      },
      image: thirdChairImg
    },
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
      },
      image: edunexusImg
    },
    {
      title: "Examinator",
      domain: "Education",
      platform: "Devpost",
      event: "World's Largest Hackathon by Bolt",
      description: "Automated exam generation and grading system using NLP for educational institutions and teachers",
      techStack: ["Python", "NLP", "React", "Education Tech"],
      links: {
        github: "https://github.com/muhammadibrahim313/Examinator",
        demo: "https://brilliant-praline-0da92f.netlify.app/",
        submission: "https://devpost.com/software/exam-inator"
      },
      image: examinatorImg
    },
    {
      title: "DataVue",
      domain: "Education",
      platform: "LabLab.ai",
      event: "Pak Angels Gen AI Cohort-1",
      description: "Multi-task data visualization dashboard with AI agents for interactive analytics and insights",
      techStack: ["Python", "MindsDB", "Streamlit", "Data Viz", "AI Agents"],
      links: {
        github: "https://github.com/muhammadibrahim313/DataVue",
        demo: "https://data-vue.streamlit.app/",
        submission: "https://lablab.ai/event/ai-agents-hack-with-lablab-and-mindsdb/synaptic-synergy/datavue"
      },
      image: datavueImg
    },
    {
      title: "OmniBoost",
      domain: "Business & Productivity",
      platform: "LabLab.ai",
      event: "IBM Granite Hackathon",
      description: "Business productivity agent - 'Your next 100M dollar agent'",
      techStack: ["Python", "IBM Granite", "AI Agents", "Business Intelligence"],
      links: {
        github: "https://github.com/muhammadibrahim313/OmniBoost",
        demo: "https://github.com/muhammadibrahim313/OmniBoost"
      },
      image: omniboostImg
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
      },
      image: auroraAiImg
    },
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
      },
      image: goveaseImg
    },
    {
      title: "TeleGuide",
      domain: "Infrastructure & Networking",
      platform: "LabLab.ai",
      event: "Edge Runners 3.2",
      description: "Telecommunications troubleshooting platform for network diagnostics and issue resolution with AI assistance",
      techStack: ["Python", "Network Analysis", "Streamlit", "Telecom"],
      links: {
        github: "https://github.com/muhammadibrahim313/TeleGuide",
        demo: "https://teleguide-b8okhxznmhtwhgy9vnpmed.streamlit.app/",
        submission: "https://lablab.ai/event/edge-runners-3-point-2/b-taji-crew/teleguide"
      },
      image: teleguideImg
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
      },
      image: networkLogTranslatorImg
    },
    {
      title: "SPOT Connect",
      domain: "Infrastructure & Networking",
      platform: "LabLab.ai",
      event: "AI for Connectivity Hackathon II",
      description: "Network resilience platform using time-series analysis for predicting and preventing network failures",
      techStack: ["Python", "Time Series", "React", "Network Resilience"],
      links: {
        github: "https://github.com/muhammadibrahim313/SPOT-CONNECT",
        demo: "https://spotconnect-two.vercel.app/",
        submission: "https://lablab.ai/event/ai-for-connectivity-hackathon-building-resilient-networks/default/spot-connect"
      },
      image: spotConnectImg
    },
    {
      title: "NemoTron Fine-tuning",
      domain: "AI Research",
      platform: "Nvidia",
      event: "ODSC Hackathon",
      description: "LLM fine-tuning using NVIDIA NeMo Framework for custom model optimization and deployment",
      techStack: ["Python", "NVIDIA NeMo", "LLM", "Fine-tuning"],
      links: {
        github: "https://github.com/muhammadibrahim313/Nvidia-ODSC-Hackathon",
        demo: "https://github.com/muhammadibrahim313/Nvidia-ODSC-Hackathon"
      },
      image: nemotronImg
    },
    {
      title: "Agent Force",
      domain: "AI Research",
      platform: "LabLab.ai",
      event: "Internet of Agents @Solana Skyline",
      description: "Multi-agent system on Solana blockchain for decentralized AI agent coordination",
      techStack: ["Python", "Solana", "Multi-Agent Systems", "Blockchain"],
      links: {
        github: "https://github.com/muhammadibrahim313/Agent-Force-",
        demo: "https://github.com/muhammadibrahim313/Agent-Force-"
      },
      image: agentForceImg
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

  // Show first 8 projects or all
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 8);
  const visibleKaggle = showAllKaggle ? kagglePlaceholders : kagglePlaceholders.slice(0, 8);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="font-playfair text-muted-foreground text-lg max-w-3xl mx-auto">
              Built <span className="text-primary font-semibold">50+</span> AI projects across{' '}
              <span className="text-primary font-semibold">Healthcare</span>,{' '}
              <span className="text-primary font-semibold">Legal Tech</span>,{' '}
              <span className="text-primary font-semibold">Education</span>,{' '}
              <span className="text-primary font-semibold">Space Exploration</span>, and more — participating in hackathons, competitions, and open-source initiatives worldwide.
            </p>
          </div>

          {/* Featured Projects - 4 columns grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {visibleProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`p-0 card-hover neon-border slide-up hover:shadow-xl hover:-translate-y-1 flex flex-col overflow-hidden ${
                  project.isGoldWinner 
                    ? "shadow-[0_0_30px_rgba(255,215,0,0.3)] border-[#FFD700]/50" 
                    : project.isSilverWinner 
                    ? "shadow-[0_0_30px_rgba(192,192,192,0.3)] border-[#C0C0C0]/50" 
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Preview Image */}
                <div className="relative w-full h-36 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                <div className={`flex flex-col h-full ${project.isGoldWinner || project.isSilverWinner ? 'p-5' : 'p-4'}`}>
                  {project.achievement && (
                    <Badge 
                      className={`mb-2 w-fit ${
                        project.achievement.includes('#1') || project.achievement.includes('1st') 
                          ? "bg-[#FFD700] text-black font-bold border-[#FFC107] text-xs px-2 py-1" 
                          : project.achievement.includes('Top 5') || project.achievement.includes('#2') || project.achievement.includes('2nd')
                          ? "bg-[#C0C0C0] text-black font-bold border-[#A8A8A8] text-xs px-2 py-1"
                          : project.achievement.includes('Runner Up') || project.achievement.includes('3rd')
                          ? "bg-[#CD7F32] text-white font-bold border-[#8B5A3C] text-xs px-2 py-1"
                          : "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20 text-xs px-2 py-1"
                      }`}
                    >
                      <Trophy className="h-3 w-3 mr-1 inline" />
                      {project.achievement}
                    </Badge>
                  )}
                  
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-playfair text-base font-semibold text-foreground line-clamp-1">{project.title}</h4>
                  </div>
                  
                  <Badge className="bg-primary/10 text-primary text-xs w-fit mb-2">{project.platform}</Badge>
                  
                  <p className="font-playfair text-muted-foreground text-xs mb-3 line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <span key={tech} className="skill-chip text-xs px-1.5 py-0.5 rounded text-[10px]">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="text-xs text-muted-foreground px-1">
                        +{project.techStack.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    {project.links.demo && (
                      <Button size="sm" variant="outline" asChild className="flex-1 h-8 text-xs">
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" asChild className="flex-1 h-8 text-xs">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More / View All Projects */}
          <div className="flex flex-col items-center gap-4 mb-24 relative">
            {!showAllProjects && projects.length > 8 && (
              <div className="relative group cursor-pointer" onClick={() => setShowAllProjects(true)}>
                {/* Gradient fade overlay above button */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[200%] h-20 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
                
                {/* Glowing container */}
                <div className="relative px-8 py-4 rounded-xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,206,209,0.15)]">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
                  </div>
                  
                  {/* Light beam effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <ChevronDown className="h-5 w-5 text-primary animate-bounce" />
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                      Show More Projects
                    </span>
                    <span className="text-primary font-semibold">
                      ({projects.length - 8} more)
                    </span>
                  </div>
                </div>
              </div>
            )}
            {showAllProjects && (
              <Button 
                variant="default"
                asChild
                className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(0,206,209,0.3)]"
              >
                <a href="https://github.com/muhammadibrahim313" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View All on GitHub
                </a>
              </Button>
            )}
          </div>

          {/* Kaggle Gallery */}
          <div>
            <div className="text-center mb-12">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Kaggle <span className="text-primary">Gallery</span>
              </h3>
              <p className="font-playfair text-muted-foreground text-lg max-w-3xl mx-auto">
                Completed <span className="text-primary font-semibold">80+</span> projects in{' '}
                <span className="text-primary font-semibold">Data Analysis</span>,{' '}
                <span className="text-primary font-semibold">Machine Learning</span>,{' '}
                <span className="text-primary font-semibold">Deep Learning</span>,{' '}
                <span className="text-primary font-semibold">NLP</span>, and{' '}
                <span className="text-primary font-semibold">Computer Vision</span> — from exploratory data analysis to competition-winning models.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {visibleKaggle.map((project, index) => (
                 <Card 
                   key={project.title} 
                   className="p-0 card-hover neon-border slide-up overflow-hidden group hover:shadow-xl hover:-translate-y-1"
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
                      <h4 className="font-playfair text-sm font-medium text-foreground line-clamp-2">{project.title}</h4>
                      <div className="text-xs text-primary font-mono">{project.metric}</div>
                      <Button size="sm" variant="outline" asChild className="w-full text-xs h-8 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                        <a href="https://www.kaggle.com/ibrahimqasimi/code" target="_blank" rel="noopener noreferrer">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          View on Kaggle
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Show More / View All Kaggle */}
            <div className="flex flex-col items-center gap-4 relative">
              {!showAllKaggle && kagglePlaceholders.length > 8 && (
                <div className="relative group cursor-pointer" onClick={() => setShowAllKaggle(true)}>
                  {/* Gradient fade overlay above button */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[200%] h-20 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
                  
                  {/* Glowing container */}
                  <div className="relative px-8 py-4 rounded-xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,206,209,0.15)]">
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
                    </div>
                    
                    {/* Light beam effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                    
                    <div className="flex items-center gap-3 relative z-10">
                      <ChevronDown className="h-5 w-5 text-primary animate-bounce" />
                      <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                        Show More Projects
                      </span>
                      <span className="text-primary font-semibold">
                        ({kagglePlaceholders.length - 8} more)
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {showAllKaggle && (
                <Button 
                  variant="default"
                  asChild
                  className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(0,206,209,0.3)]"
                >
                  <a href="https://www.kaggle.com/ibrahimqasimi/code" target="_blank" rel="noopener noreferrer">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View All on Kaggle
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
