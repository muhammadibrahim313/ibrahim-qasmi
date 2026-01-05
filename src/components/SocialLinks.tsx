import { Button } from '@/components/ui/button';
import kaggleLogo from '@/assets/kaggle-logo.png';
import topmateLogo from '@/assets/topmate-logo.jfif';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/muhammadibrahim313',
      logo: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      description: 'Open source projects',
      glowColor: 'rgba(255, 255, 255, 0.2)'
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/ibrahimqasimi',
      logo: (
        <img src={kaggleLogo} alt="Kaggle" className="h-5 w-5 object-contain" />
      ),
      description: 'ML competitions',
      glowColor: 'rgba(32, 190, 255, 0.6)'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/muhammad-ibrahim-qasmi',
      logo: (
        <svg className="h-5 w-5" fill="#0077B5" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: 'Professional network',
      glowColor: 'rgba(10, 102, 194, 0.6)'
    },
    {
      name: 'Topmate',
      url: 'https://topmate.io/ibrahim_qasmi',
      logo: (
        <img src={topmateLogo} alt="Topmate" className="h-5 w-5 object-contain" />
      ),
      description: 'Book sessions',
      glowColor: 'rgba(255, 64, 129, 0.6)'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@ibrahim313',
      logo: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
      description: 'Technical articles',
      glowColor: 'rgba(255, 255, 255, 0.3)'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Muhammad_Ibrahim_Qasmi/',
      logo: (
        <svg className="h-5 w-5" fill="#FFA116" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
      description: 'Coding challenges',
      glowColor: 'rgba(255, 161, 22, 0.6)'
    },
    {
      name: 'DevPost',
      url: 'https://devpost.com/oppoibrahim23',
      logo: (
        <svg className="h-5 w-5" fill="#003E54" viewBox="0 0 24 24">
          <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853H10.112z"/>
        </svg>
      ),
      description: 'Hackathon projects',
      glowColor: 'rgba(0, 191, 255, 0.6)'
    },
    {
      name: 'LabLab AI',
      url: 'https://lablab.ai/u/@qasmi92',
      logo: (
        <svg className="h-5 w-5" fill="#6366F1" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      description: 'AI hackathons',
      glowColor: 'rgba(0, 217, 255, 0.6)'
    }
  ];

  return (
    <>
      {/* Desktop - Right Sidebar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.name} profile`}
              title={`${link.name} - ${link.description}`}
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-card/80 backdrop-blur-sm border transition-all duration-300 group hover:scale-105"
              style={{
                borderColor: link.glowColor.replace('0.6', '0.3'),
                boxShadow: `0 0 12px ${link.glowColor}, 0 0 20px ${link.glowColor.replace('0.6', '0.4')}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${link.glowColor}, 0 0 30px ${link.glowColor.replace('0.6', '0.5')}, 0 0 40px ${link.glowColor.replace('0.6', '0.3')}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 12px ${link.glowColor}, 0 0 20px ${link.glowColor.replace('0.6', '0.4')}`;
              }}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {link.logo}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile - Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-card/95 backdrop-blur-md border-t border-border pb-safe">
        <div className="flex justify-around items-center px-2 py-3 max-w-lg mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.name} profile`}
              className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 active:scale-95"
              style={{
                boxShadow: `0 0 8px ${link.glowColor.replace('0.6', '0.3')}`
              }}
            >
              <div className="scale-90">
                {link.logo}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialLinks;