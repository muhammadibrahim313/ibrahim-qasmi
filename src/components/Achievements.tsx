import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star, Target, Code, Users, Globe } from 'lucide-react';

// Import achievement images
import newyorkImage from '@/assets/newyork.jpg';
import adventImage from '@/assets/advent.jpeg';
import hackathonGoldImage from '@/assets/hackathon_gold.jfif';
import kaggleGMImage from '@/assets/kagglegm.jfif';
import calcioCertImage from '@/assets/certificate_calcio_fall_24.jfif';
import harvardCertImage from '@/assets/certificates_harvard.jfif';
import aiAstronatImage from '@/assets/ai_astronat_hack.jfif';
import gpt5HackImage from '@/assets/gpt_5_hack_most_like_dpost_one.jfif';
import wordSprintImage from '@/assets/wordsprint_hackathon.jfif';
import mitInfornaticsImage from '@/assets/mit_infornatics.jfif';
import nationalHackImage from '@/assets/national_hack_1.jfif';
import top6HackImage from '@/assets/top6_hack.jfif';
import womensHealthImage from '@/assets/womens_health.jfif';
import metaHackerCupImage from '@/assets/meta_hacker_cup.jpg';

const Achievements = () => {
  const majorAchievements = [
    {
      title: "Featured on Times Square NYC",
      subtitle: "Topmate Top 0.1% Mentor",
      description: "Global recognition for exceptional mentorship and AI expertise",
      image: newyorkImage,
      icon: <Globe className="h-6 w-6" />,
      badge: "Global Recognition",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "3× Kaggle Grandmaster",
      subtitle: "Notebooks • Discussions • Datasets",
      description: "Elite status in machine learning competitions and knowledge sharing",
      image: kaggleGMImage,
      icon: <Trophy className="h-6 w-6" />,
      badge: "Kaggle Elite",
      badgeColor: "bg-gradient-to-r from-cyan-500 to-blue-500"
    }
  ];

  const hackathonWins = [
    {
      title: "Cursor × Replit Hackathon",
      result: "🥇 Gold Medal (1st/800+ teams)",
      description: "AI-powered development tools competition",
      image: hackathonGoldImage,
      icon: <Medal className="h-5 w-5" />
    },
    {
      title: "AI Astronauts Space Agents",
      result: "🥈 Silver Medal",
      description: "Mars AI Exploration project",
      image: aiAstronatImage,
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "WordSprint Hackathon",
      result: "🥈 2nd Place",
      description: "WordPress Plugin Development",
      image: wordSprintImage,
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "National Healthcare Hack",
      result: "🏆 1st Place",
      description: "Dr. Well Healthcare AI Platform",
      image: nationalHackImage,
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "Women's Health Hackathon",
      result: "🏆 2nd Place",
      description: "PeriodCare Platform Development",
      image: womensHealthImage,
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "GPT-5 B2B Sales Innovation",
      result: "🏆 Most Liked Post Winner",
      description: "Business innovation challenge",
      image: gpt5HackImage,
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "BTaji Crew Hackathon",
      result: "🏅 Top 6 Finalist",
      description: "Team collaboration project",
      image: top6HackImage,
      icon: <Users className="h-5 w-5" />
    }
  ];

  const competitiveProgramming = [
    {
      title: "Advent of Code 2024",
      result: "222nd Global | 2nd Pakistan",
      description: "Annual programming puzzle competition",
      image: adventImage,
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Meta Hacker Cup 2024",
      result: "Advanced to Round 2",
      description: "Facebook's global programming contest",
      image: metaHackerCupImage,
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "MIT Winter Informatics",
      result: "65th/500+ (Team BeTa Degree)",
      description: "Prestigious MIT programming competition",
      image: mitInfornaticsImage,
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "UC Berkeley Calico Fall",
      result: "Bronze Tier (Team BeTa Force)",
      description: "Berkeley's competitive programming contest",
      image: calcioCertImage,
      icon: <Medal className="h-5 w-5" />
    },
    {
      title: "Harvard CS50x Puzzle Day 2025",
      result: "Certificate of Completion",
      description: "Harvard's computer science puzzle challenge",
      image: harvardCertImage,
      icon: <Award className="h-5 w-5" />
    }
  ];

  const additionalStats = [
    { metric: "100+", label: "AI Projects Delivered" },
    { metric: "500+", label: "Mentorship Hours" },
    { metric: "Top 40", label: "Pakistani GitHub Contributor" },
    { metric: "7×", label: "International Hackathon Winner" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of competitive victories, global recognition, and technical achievements 
            spanning hackathons, programming contests, and industry acknowledgments.
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {majorAchievements.map((achievement, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${achievement.badgeColor} text-white border-0`}>
                      {achievement.badge}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{achievement.icon}</div>
                    <div>
                      <CardTitle className="text-2xl">{achievement.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {achievement.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {additionalStats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border hover:bg-card/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hackathon Victories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="h-6 w-6 text-primary" />
            Hackathon Victories (7× International Winner)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathonWins.map((win, index) => (
              <Card key={index} className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {win.image && (
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={win.image}
                      alt={win.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">{win.icon}</div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{win.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {win.result}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{win.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitive Programming */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            Competitive Programming & Contests
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveProgramming.map((contest, index) => (
              <Card key={index} className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {contest.image && (
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={contest.image}
                      alt={contest.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">{contest.icon}</div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{contest.title}</CardTitle>
                      <Badge variant="outline" className="mt-2 text-xs border-primary/20">
                        {contest.result}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{contest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;