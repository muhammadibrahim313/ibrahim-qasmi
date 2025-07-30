import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blogs = () => {
  const blogs = [
    {
      title: "Set a Deadline and watch your Productivity Skyrocket!",
      date: "Feb 13, 2025",
      summary: "Discover how setting clear deadlines can transform your productivity and help you achieve your goals faster.",
      tags: ["Productivity", "Time Management", "Goals"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Prepare to Win the MIT Competition…",
      date: "Jan 8, 2025", 
      summary: "Strategic insights and preparation tips for competing in prestigious MIT competitions and hackathons.",
      tags: ["Competition", "MIT", "Strategy"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "NLP | Where Machines Meet Meaning",
      date: "Oct 22, 2024",
      summary: "An exploration of Natural Language Processing and how machines are learning to understand human language.",
      tags: ["NLP", "Machine Learning", "AI"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "The Future of AI in Healthcare",
      date: "Sep 15, 2024",
      summary: "Examining how artificial intelligence is revolutionizing healthcare and improving patient outcomes.",
      tags: ["AI", "Healthcare", "Technology"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Kaggle Grandmaster Journey: Lessons Learned",
      date: "Aug 28, 2024",
      summary: "Insights and strategies from achieving Kaggle Grandmaster status three times over.",
      tags: ["Kaggle", "Data Science", "Career"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Building Scalable AI Solutions",
      date: "Aug 10, 2024",
      summary: "Best practices for creating AI systems that can scale to meet enterprise demands.",
      tags: ["AI", "Scalability", "Engineering"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Computer Vision in Real-World Applications",
      date: "Jul 22, 2024",
      summary: "Exploring practical applications of computer vision technology across different industries.",
      tags: ["Computer Vision", "Applications", "Industry"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Data Science Ethics: A Practitioner's Guide",
      date: "Jul 5, 2024",
      summary: "Understanding the ethical implications of data science and how to practice responsibly.",
      tags: ["Ethics", "Data Science", "Responsibility"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "From Data to Insights: A Complete Pipeline",
      date: "Jun 18, 2024",
      summary: "A comprehensive guide to building robust data pipelines for extracting meaningful insights.",
      tags: ["Data Pipeline", "Analytics", "Insights"],
      link: "https://medium.com/@ibrahim313"
    },
    {
      title: "Mentoring the Next Generation of Data Scientists",
      date: "Jun 3, 2024",
      summary: "Reflections on mentoring emerging talent in data science and machine learning.",
      tags: ["Mentoring", "Data Science", "Education"],
      link: "https://medium.com/@ibrahim313"
    }
  ];

  return (
    <section id="blogs" className="section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest <span className="text-primary">Blogs</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing insights on AI, data science, and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <Card 
                key={blog.title} 
                className="p-6 card-hover neon-border slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {blog.date}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {blog.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/30">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read more
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <a href="https://medium.com/@ibrahim313" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View all articles on Medium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;