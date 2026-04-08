import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import deployMlApi from '@/assets/blogs/deploy-ml-api.webp';
import kaggleMcp from '@/assets/blogs/kaggle-mcp.webp';
import nlp from '@/assets/blogs/nlp.webp';
import revupPython from '@/assets/blogs/revup-python.webp';
import zeroHero from '@/assets/blogs/zero-hero.webp';
import kaggleNotebooks from '@/assets/blogs/kaggle-notebooks.png';

const Blogs = () => {

  const blogs = [
    {
      title: "Deploy Your First Machine Learning Model as a Public API",
      description: "A step-by-step guide for data science students who want to take their models from notebooks to production",
      date: "Jan 25, 2025",
      tags: ["Python", "ML"],
      readTime: "8 min",
      link: "https://medium.com/@ibrahim313",
      image: deployMlApi,
      featured: true,
    },
    {
      title: "How to Submit to Kaggle Competitions Using MCP (VS Code)",
      description: "A practical guide for Kaggle users who want to go from MCP setup to real competition submissions",
      date: "Apr 1, 2025",
      tags: ["Kaggle", "MCP"],
      readTime: "7 min",
      link: "https://medium.com/@ibrahim313",
      image: kaggleMcp,
      featured: true,
    },
    {
      title: "NLP | Where Machines Meet Meaning",
      description: "The Heart of Human-AI Communication",
      date: "Oct 22, 2024",
      tags: ["NLP", "AI"],
      readTime: "6 min",
      link: "https://medium.com/@ibrahim313",
      image: nlp,
      featured: true,
    },
    {
      title: "Rev Up 🚀 Your Python Installation: Achieve 100x Faster Speeds ⚡",
      description: "Meet uv, a revolutionary tool designed to make your package management lightning fast",
      date: "Jul 16, 2024",
      tags: ["Python", "Tools"],
      readTime: "6 min",
      link: "https://medium.com/@ibrahim313",
      image: revupPython,
      featured: true,
    },
    {
      title: "Zero | The Hero We Often Overlook",
      description: "Zero is far from nothing — it's a powerful force that has shaped our world",
      date: "Jul 6, 2024",
      tags: ["Math", "Insights"],
      readTime: "5 min",
      link: "https://medium.com/@ibrahim313",
      image: zeroHero,
      featured: true,
    },
    {
      title: "29 Game-Changing Kaggle Notebooks Every Data Scientist Needs",
      description: "A curated collection of the most impactful Kaggle notebooks for data science mastery",
      date: "2024",
      tags: ["Kaggle", "Data Science"],
      readTime: "10 min",
      link: "https://www.linkedin.com/pulse/29-game-changing-kaggle-notebooks-every-data-scientist-qasmi-vauhf/?trackingId=4aWzztLISjqieQeu9Fspiw%3D%3D",
      image: kaggleNotebooks,
      featured: true,
    },
  ];

  

  return (
    <section id="blogs" className="section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Articles</span>
            </h2>
            <p className="font-playfair text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing strategies, tutorials, and lessons from the data science trenches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogs.map((blog, index) => (
              <Card 
                key={blog.title} 
                className="overflow-hidden card-hover neon-border slide-up hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {blog.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                )}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blog.date}
                    </div>
                    <span className="text-xs">{blog.readTime} read</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  {blog.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {blog.description}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/30">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button size="sm" variant="outline" asChild className="w-full h-10 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                      {blog.link.includes('linkedin') ? 'Read on LinkedIn →' : 'Read on Medium →'}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button 
              variant="default"
              asChild
              className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(0,206,209,0.3)]"
            >
              <a href="https://medium.com/@ibrahim313" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View All on Medium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
