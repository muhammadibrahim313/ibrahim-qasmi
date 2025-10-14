import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Target } from 'lucide-react';

const CommunityLeadership = () => {
  return (
    <section id="community-leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Community Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building and empowering the tech community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1: WebMind Hackathon */}
          <Card className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardHeader className="relative">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">WebMind Innovation Hackathon</CardTitle>
                  <CardDescription className="text-primary font-medium text-base">
                    Judge, Organizer & Host
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Organizing and judging a national-level hackathon focused on AI innovation. 
                  Mentoring participating teams and evaluating innovative solutions.
                </p>

                <Button asChild variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary/10">
                  <a href="https://webmind-innovation-hackathon.devpost.com/" target="_blank" rel="noopener noreferrer">
                    View Hackathon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: PEC Generative AI Cohort 3 */}
          <Card className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <CardHeader className="relative">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">PEC Generative AI Cohort 3</CardTitle>
                  <CardDescription className="text-primary font-medium text-base">
                    Trainer & Judge
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Trained 2,000+ engineering professionals in Generative AI. Judged 48-hour hackathon with 65 teams. 6-week program sponsored by Pakistan Engineering Council.
                </p>

                <Button asChild variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary/10">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityLeadership;
