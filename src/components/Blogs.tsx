import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blogs = () => {
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

  return (
    <section id="blogs" className="section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing strategies, tutorials, and lessons from the data science trenches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
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

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="h-12 hover:scale-105 hover:bg-primary/10 transition-all duration-300">
              <a href="https://medium.com/@ibrahim313" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View All Articles on Medium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;