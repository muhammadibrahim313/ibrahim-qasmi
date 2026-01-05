import { useState } from 'react';
import { ExternalLink, Calendar, Tag, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);

  const blogs = [
    {
      title: "Set a Deadline and watch your Productivity Skyrocket",
      date: "Feb 13, 2024",
      tags: ["Productivity", "Career"],
      readTime: "5 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Prepare to Win the MIT Competition with Free Resources",
      date: "Jan 8, 2024",
      tags: ["Competitions", "Resources"],
      readTime: "7 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "NLP | Where Machines Meet Meaning",
      date: "Oct 22, 2024",
      tags: ["NLP", "AI"],
      readTime: "6 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Rev Up Your Python Installation: Achieve 100x Faster Speeds ⚡",
      date: "Jul 16, 2024",
      tags: ["Python", "Tools"],
      readTime: "8 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Cool Tricks of Python Tuple",
      date: "Jul 14, 2024",
      tags: ["Python", "Tips"],
      readTime: "4 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "The Priceless Value of Deep Conversations",
      date: "Jul 11, 2024",
      tags: ["Personal", "Growth"],
      readTime: "5 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "11 Python List Tricks for Efficient Coding",
      date: "Jul 7, 2024",
      tags: ["Python", "Tips"],
      readTime: "6 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Zero | The Hero We Often Overlook",
      date: "Jul 6, 2024",
      tags: ["Math", "Insights"],
      readTime: "5 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Meet Pakistan's Youngest 3x Grandmaster on Kaggle — Me!",
      date: "May 30, 2024",
      tags: ["Achievement", "Kaggle"],
      readTime: "4 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Top 10 Data Scientists",
      date: "Apr 16, 2024",
      tags: ["Data Science", "Career"],
      readTime: "7 min",
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Crafting a Data Science/Machine Learning Portfolio in 4–5 Months",
      date: "Mar 3, 2024",
      tags: ["Career", "Portfolio"],
      readTime: "8 min",
      link: "https://medium.com/@ibrahim313"
    }
  ];

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 6);

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
            {visibleBlogs.map((blog, index) => (
              <Card 
                key={blog.title} 
                className="p-6 card-hover neon-border slide-up hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blog.date}
                    </div>
                    <span className="text-xs">{blog.readTime} read</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {blog.title}
                  </h3>
                  
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
                      Read on Medium →
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More / View All on Medium */}
          <div className="flex flex-col items-center gap-4 relative">
            {!showAll && blogs.length > 6 && (
              <div className="relative group cursor-pointer" onClick={() => setShowAll(true)}>
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
                      Show More Articles
                    </span>
                    <span className="text-primary font-semibold">
                      ({blogs.length - 6} more)
                    </span>
                  </div>
                </div>
              </div>
            )}
            {showAll && (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
