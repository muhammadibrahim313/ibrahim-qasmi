import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  BookOpen, 
  Video, 
  Brain, 
  ExternalLink, 
  Github, 
  Calendar,
  Award,
  Heart,
  TrendingUp
} from 'lucide-react';

const MentorshipVolunteering = () => {
  const mentorshipActivities = [
    {
      title: "Data Structures & Algorithms Bootcamp",
      role: "Moderator & Trainer",
      organization: "I Code Guru",
      duration: "6 weeks intensive program",
      topics: ["DSA fundamentals", "Problem-solving", "Competitive programming"],
      impact: "50+ students trained",
      icon: <BookOpen className="h-6 w-6" />,
      link: "#", // Add GitHub repository link
      linkText: "View Repository"
    },
    {
      title: "Python for Beginners",
      role: "Lead Instructor",
      organization: "I Code Guru",
      duration: "4 weeks foundational course",
      topics: ["Python basics", "OOP", "Projects"],
      impact: "30+ beginners started coding journey",
      icon: <Brain className="h-6 w-6" />,
      link: "#", // Add course materials link
      linkText: "Course Materials"
    },
    {
      title: "Data Science Webinar Series",
      role: "Technical Speaker",
      organization: "DataSeqo",
      duration: "4 sessions",
      topics: ["How to Start with Kaggle", "Path to Kaggle Grandmaster"],
      impact: "200+ data science enthusiasts",
      icon: <Video className="h-6 w-6" />,
      link: "#", // Add recording link
      linkText: "Watch Recordings"
    },
    {
      title: "Generative AI Workshop",
      role: "Technical Speaker",
      organization: "I Code Guru",
      duration: "2-day intensive workshop",
      topics: ["NLP", "Fine-tuning", "Text cleaning", "Practical applications"],
      impact: "Hands-on AI training for professionals",
      icon: <Brain className="h-6 w-6" />,
      link: "#",
      linkText: "Workshop Materials"
    }
  ];

  const topmateStats = [
    { number: "70+", label: "Sessions Conducted" },
    { number: "500+", label: "Mentorship Hours" },
    { number: "Top 0.1%", label: "Mentor Badge" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <section id="mentorship" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Mentorship & Volunteering
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation through knowledge sharing and community impact
          </p>
        </div>

        {/* Main Mentorship Activities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mentorshipActivities.map((activity, index) => (
            <Card key={index} className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl mentorship-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                    <CardDescription className="text-primary font-medium text-base">
                      {activity.role} at {activity.organization}
                    </CardDescription>
                    <Badge variant="outline" className="mt-2 border-primary/20">
                      {activity.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.topics.map((topic, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">{activity.impact}</span>
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary/10">
                    <a href={activity.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {activity.linkText}
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Topmate Stats */}
        <div className="mb-16">
          <Card className="border-0 bg-gradient-to-r from-primary/5 to-cyan-500/5 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl mb-2 flex items-center justify-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Topmate Mentorship Impact
              </CardTitle>
              <CardDescription className="text-base">
                Comprehensive career guidance and technical mentorship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {topmateStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2 impact-stat">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center space-y-4">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Kaggle Competitions
                  </Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Career Guidance
                  </Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Hackathon Strategies
                  </Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Technical Interviews
                  </Badge>
                </div>
                
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a 
                    href="https://topmate.io/ibrahim_qasmi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Session
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Work Highlight */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            Volunteer Work
          </h3>
          
          <Card className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardHeader className="relative">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    DataKind - Financial Inclusion DataKit Event
                  </CardTitle>
                  <CardDescription className="text-primary font-medium text-base">
                    Data Science Volunteer
                  </CardDescription>
                  <Badge variant="outline" className="mt-2 border-primary/20">
                    March 18 - April 30, 2025
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Contributed to economic opportunity analysis through data science methodologies, 
                  helping improve financial inclusion initiatives for underserved communities.
                </p>
                
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-medium">Economic opportunity analysis impact</span>
                </div>

                <div className="pt-4">
                  <div className="text-center">
                    <div className="w-32 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-lg flex items-center justify-center border border-primary/20 certificate-thumbnail cursor-pointer hover:border-primary/40 transition-colors">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      DataKind Certificate
                      <br />
                      <span className="text-xs">(Click to view)</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </section>
  );
};

export default MentorshipVolunteering;