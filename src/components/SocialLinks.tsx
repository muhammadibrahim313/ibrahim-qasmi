import { Github, Linkedin, ExternalLink, FileText, Trophy, MessageCircle, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/muhammadibrahim313',
      icon: Github,
      description: 'Open source projects'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@ibrahim313',
      icon: MessageCircle,
      description: 'Technical articles'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/muhammad-ibrahim-qasmi',
      icon: Linkedin,
      description: 'Professional network'
    },
    {
      name: 'Topmate',
      url: 'https://topmate.io/ibrahim_qasmi',
      icon: ExternalLink,
      description: 'Book sessions'
    },
    {
      name: 'Kaggle',
      url: 'https://kaggle.com/muhammadibrahim313',
      icon: Trophy,
      description: 'ML competitions'
    },
    {
      name: 'Devpost',
      url: 'https://devpost.com/muhammadibrahim313',
      icon: Rocket,
      description: 'Hackathon projects'
    },
    {
      name: 'Resume',
      url: '#', // Add Google Drive PDF link here
      icon: FileText,
      description: 'Download resume'
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col gap-3">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            size="sm"
            variant="outline"
            asChild
            className="w-12 h-12 p-0 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
            title={`${link.name} - ${link.description}`}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.name} profile`}
            >
              <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;