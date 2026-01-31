import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star, Target, Code, Users, Globe, ExternalLink } from 'lucide-react';

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

// Import Kaggle competition images
import extremismDetectionImage from '@/assets/kaggle-competitions/extremism-detection.png';
import image2BiomassImage from '@/assets/kaggle-competitions/image2biomass.jpeg';
import ecgDigitizationImage from '@/assets/kaggle-competitions/ecg-digitization.jpeg';
import loanPredictionImage from '@/assets/kaggle-competitions/loan-prediction.jpg';
import roadAccidentImage from '@/assets/kaggle-competitions/road-accident.jpg';
import brainToTextImage from '@/assets/kaggle-competitions/brain-to-text.jpg';

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
      description: "🥇 Gold Medal - 1st place among 836 participants and 109 competing teams in this AI-powered development tools competition",
      image: hackathonGoldImage,
      icon: <Medal className="h-5 w-5" />
    },
    {
      title: "AI Astronauts: Space Agents",
      result: "🥈 Silver Medal",
      description: "🥈 Silver Medal - 2nd place among 1,056 participants and 126 teams, developing Mars colonization solutions using AI agents",
      image: aiAstronatImage,
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "WordSprint Hackathon",
      result: "🥈 2nd Place",
      description: "🥈 2nd Place - WordPress plugin innovation competition with streamlined development workflow tools",
      image: wordSprintImage,
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "ULEFUSA Generative AI Training Hackathon",
      result: "🏆 1st Place",
      description: "🏆 1st Place - Developed Dr. Well AI healthcare platform among 100+ participants (Pak Angels, iCodeGuru, Aspire Pakistan)",
      image: nationalHackImage,
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "Women's Health Hackathon",
      result: "🥈 2nd Place",
      description: "🥈 2nd Place - Created PeriodCare platform among 100+ participants for women's health tracking",
      image: womensHealthImage,
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Co-Creating with GPT-5",
      result: "🏆 Most Liked Post Winner",
      description: "Competed against 3,736 participants across 785 teams in this cutting-edge GPT-5 innovation challenge",
      image: gpt5HackImage,
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Aria & Allegro Multimodal Hackathon",
      result: "🏅 Top 6 Finalist",
      description: "🏅 Top 6 Finalist - Selected from 511 participants and 63 teams, building cutting-edge multimodal AI applications",
      image: top6HackImage,
      icon: <Users className="h-5 w-5" />
    }
  ];

  const competitiveProgramming = [
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
    },
    {
      title: "Meta Hacker Cup 2024/2025",
      result: "Advanced to Round 1",
      description: "Participant in Meta Hacker Cup - Advanced to Round 1",
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
      title: "Advent of Code 2024",
      result: "222nd Global | 2nd Pakistan",
      description: "Annual programming puzzle competition",
      image: adventImage,
      icon: <Code className="h-5 w-5" />
    }
  ];

  const kaggleCompetitions = [
    {
      title: "Social Media Extremism Detection Challenge",
      result: "🥇 1st Place",
      description: "Machine Learning model to classify social media text as extremist or non-extremist. Won $100 prize!",
      teams: "200+ teams",
      image: extremismDetectionImage,
      icon: <Trophy className="h-5 w-5" />,
      medalColor: "border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)]"
    },
    {
      title: "CSIRO - Image2Biomass Prediction",
      result: "🥈 Silver Medal",
      description: "Predict biomass using provided pasture images for agricultural analysis.",
      teams: "3800+ teams",
      rank: "33rd",
      image: image2BiomassImage,
      icon: <Medal className="h-5 w-5" />,
      medalColor: "border-[#C0C0C0] shadow-[0_0_15px_rgba(192,192,192,0.3)]"
    },
    {
      title: "PhysioNet - Digitization of ECG Images",
      result: "🥉 Bronze Medal",
      description: "Extract ECG time-series data from scans and photographs of paper printouts.",
      teams: "1400+ teams",
      rank: "141st",
      image: ecgDigitizationImage,
      icon: <Award className="h-5 w-5" />,
      medalColor: "border-[#CD7F32] shadow-[0_0_15px_rgba(205,127,50,0.3)]"
    },
    {
      title: "Predicting Loan Payback",
      result: "Top 1%",
      description: "Playground Series - Season 5, Episode 11. Financial prediction challenge.",
      teams: "3500+ teams",
      rank: "20th",
      image: loanPredictionImage,
      icon: <Target className="h-5 w-5" />,
      medalColor: ""
    },
    {
      title: "Predicting Road Accident Risk",
      result: "Top 20%",
      description: "Playground Series - Season 5, Episode 10. Traffic safety prediction.",
      teams: "300+ teams",
      rank: "60th",
      image: roadAccidentImage,
      icon: <Star className="h-5 w-5" />,
      medalColor: ""
    },
    {
      title: "Brain-to-text '25",
      result: "Top 15%",
      description: "Decode intracortical neural activity during attempted speech into words.",
      teams: "450 teams",
      rank: "70th",
      image: brainToTextImage,
      icon: <Code className="h-5 w-5" />,
      medalColor: ""
    }
  ];


  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="font-playfair text-xl text-muted-foreground max-w-3xl mx-auto">
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
        <div id="competitive-programming">
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

        {/* Kaggle Competition Achievements */}
        <div id="kaggle-competitions" className="mt-16">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Trophy className="h-6 w-6 text-primary" />
            Kaggle Competition Achievements
            <a 
              href="https://www.kaggle.com/ibrahimqasimi/competitions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-auto text-sm font-normal text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
            >
              View All Competitions <ExternalLink className="h-4 w-4" />
            </a>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Proven track record in real-world machine learning competitions, from NLP classification to medical imaging and neural decoding challenges.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kaggleCompetitions.map((competition, index) => (
              <Card key={index} className={`group border-2 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-xl ${competition.medalColor}`}>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {competition.rank ? `${competition.rank} / ${competition.teams}` : competition.teams}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">{competition.icon}</div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{competition.title}</CardTitle>
                      <Badge variant="default" className="mt-2 text-xs bg-primary/20 text-primary border-0">
                        {competition.result}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{competition.description}</p>
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