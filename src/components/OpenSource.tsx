import { GitBranch, ExternalLink, Star, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OpenSource = () => {
  const contributions = [
    {
      title: "Sehat-Connect: Healthcare Platform",
      type: "Main Repository",
      description: "Healthcare platform connecting patients with doctors using ML recommendations and telemedicine features.",
      language: "Python",
      stars: 45,
      lastUpdated: "2 days ago",
      link: "https://github.com/muhammadibrahim313/Sehat-Connect"
    },
    {
      title: "Legal Buddy: Document Analysis",
      type: "AI/NLP Project", 
      description: "AI-powered legal document review and analysis system with natural language processing capabilities.",
      language: "Python",
      stars: 38,
      lastUpdated: "1 week ago",
      link: "https://github.com/muhammadibrahim313/Legal-Buddy"
    },
    {
      title: "Examinator: Automated Testing",
      type: "EdTech Solution",
      description: "Automated exam generation and grading system using advanced NLP techniques for educational institutions.",
      language: "Python", 
      stars: 32,
      lastUpdated: "3 days ago",
      link: "https://github.com/muhammadibrahim313/Examinator"
    },
    {
      title: "DataViz: Visualization Dashboard", 
      type: "Data Analytics",
      description: "Multi-task data visualization dashboard with interactive analytics and real-time data processing.",
      language: "Python",
      stars: 28,
      lastUpdated: "5 days ago", 
      link: "https://github.com/muhammadibrahim313/DataViz"
    },
    {
      title: "Third Chair: Legal AI Assistant",
      type: "LangChain Project",
      description: "AI legal document review platform for enhanced legal research with chat interface capabilities.",
      language: "Python",
      stars: 25,
      lastUpdated: "1 week ago",
      link: "https://github.com/muhammadibrahim313/Third-Chair"
    },
    {
      title: "SPOT Connect: Network Resilience", 
      type: "Infrastructure",
      description: "AI-powered network resilience platform using time-series analysis for connectivity optimization.",
      language: "Python",
      stars: 22,
      lastUpdated: "4 days ago",
      link: "https://github.com/muhammadibrahim313/SPOT-Connect"
    },
    {
      title: "Period Care: Women's Health",
      type: "Healthcare App",
      description: "Women's health tracking application with AI-powered insights and personalized recommendations.",
      language: "Python", 
      stars: 19,
      lastUpdated: "1 week ago",
      link: "https://github.com/muhammadibrahim313/Period-Care"
    },
    {
      title: "Humans To Mars: Space Mission",
      type: "Space Tech",
      description: "Space mission planning and resource optimization tool for Mars exploration initiatives.",
      language: "Python",
      stars: 16,
      lastUpdated: "2 weeks ago",
      link: "https://github.com/muhammadibrahim313/Humans-To-Mars"
    },
    {
      title: "Pulse and Prism: Health Analytics",
      type: "Health Tech", 
      description: "Advanced health analytics platform combining pulse monitoring with data visualization.",
      language: "Python",
      stars: 14,
      lastUpdated: "3 weeks ago",
      link: "https://github.com/muhammadibrahim313/Pulse-and-Prism"
    },
    {
      title: "AI Post Creator: Content Generation",
      type: "Content AI",
      description: "AI-powered social media content creation tool with automated post generation and optimization.",
      language: "Python",
      stars: 12,
      lastUpdated: "1 month ago", 
      link: "https://github.com/muhammadibrahim313/AI-Post-Creator"
    }
  ];

  const beginnerIssues = [
    {
      title: "Add unit tests for data validation functions",
      project: "Legal Buddy",
      difficulty: "Good First Issue",
      language: "Python",
      description: "Help improve code coverage by adding comprehensive unit tests for data validation functions.",
      link: "https://github.com/muhammadibrahim313/Legal-Buddy/issues"
    },
    {
      title: "Improve UI/UX for mobile responsiveness", 
      project: "DataViz",
      difficulty: "Enhancement",
      language: "CSS/HTML",
      description: "Make the dashboard more mobile-friendly with responsive design improvements.",
      link: "https://github.com/muhammadibrahim313/DataViz/issues"
    },
    {
      title: "Add error handling for API calls",
      project: "Sehat-Connect", 
      difficulty: "Bug Fix",
      language: "Python",
      description: "Implement proper error handling and user feedback for external API integrations.",
      link: "https://github.com/muhammadibrahim313/Sehat-Connect/issues"
    },
    {
      title: "Documentation improvements",
      project: "Examinator",
      difficulty: "Documentation", 
      language: "Markdown",
      description: "Enhance README and add code comments to improve project documentation.",
      link: "https://github.com/muhammadibrahim313/Examinator/issues"
    }
  ];

  return (
    <section id="opensource" className="section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Source <span className="text-primary">Contributions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building in public and contributing to the community
            </p>
          </div>

          <div className="space-y-12">
            {/* Main Contributions */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Featured Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contributions.map((contribution, index) => (
                  <Card 
                    key={contribution.title} 
                    className="p-6 card-hover neon-border slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge className="bg-primary/10 text-primary text-xs">
                          {contribution.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3" />
                          {contribution.stars}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                          {contribution.title}
                        </h4>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {contribution.description}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <GitBranch className="h-3 w-3" />
                          {contribution.language}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {contribution.lastUpdated}
                        </span>
                      </div>
                      
                      <Button size="sm" variant="outline" asChild className="w-full">
                        <a href={contribution.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Beginner Friendly Issues */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Beginner Friendly Issues</h3>
              <p className="text-muted-foreground mb-6">
                Great opportunities for newcomers to contribute to open source projects
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {beginnerIssues.map((issue, index) => (
                  <Card 
                    key={issue.title} 
                    className="p-6 card-hover border-primary/30 slide-up"
                    style={{ animationDelay: `${(contributions.length + index) * 0.05}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          {issue.difficulty}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {issue.language}
                        </span>
                      </div>
                      
                      <div>
                        <p className="text-sm text-primary font-medium mb-1">
                          {issue.project}
                        </p>
                        <h4 className="text-base font-semibold text-foreground mb-2">
                          {issue.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {issue.description}
                        </p>
                      </div>
                      
                      <Button size="sm" variant="outline" asChild className="w-full">
                        <a href={issue.link} target="_blank" rel="noopener noreferrer">
                          <Users className="h-4 w-4 mr-2" />
                          Contribute
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <a href="https://github.com/muhammadibrahim313" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View all repositories on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;