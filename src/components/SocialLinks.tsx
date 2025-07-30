import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/muhammadibrahim313',
      icon: '🔗',
      description: 'Open source projects'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@ibrahim313',
      icon: '📝',
      description: 'Technical articles'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '💼',
      description: 'Professional network'
    },
    {
      name: 'Topmate',
      url: 'https://topmate.io/ibrahim_qasmi',
      icon: '🎯',
      description: 'Book sessions'
    },
    {
      name: 'Kaggle',
      url: '#',
      icon: '🏆',
      description: 'ML competitions'
    },
    {
      name: 'Devpost',
      url: '#',
      icon: '🚀',
      description: 'Hackathon projects'
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
              <span className="text-lg group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;