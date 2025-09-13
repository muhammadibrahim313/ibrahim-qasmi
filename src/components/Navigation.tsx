import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const primaryNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  const secondaryNavItems = [
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'badges', label: 'Badges' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'talks', label: 'Talks & Sessions' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'opensource', label: 'Open Source' },
    { id: 'contact', label: 'Contact' },
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];

  useEffect(() => {
    const handleScroll = () => {
      const sections = allNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(allNavItems[i].id);
          break;
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('nav-dropdown');
      const button = document.getElementById('nav-more-button');
      if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        onFocus={(e) => e.currentTarget.focus()}
      >
        Skip to Content
      </a>
      
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-[85%] max-w-5xl">
        <div className="bg-background/95 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              aria-label="Go to top"
            >
              MIQ
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 relative">
              {primaryNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* More dropdown */}
              <div className="relative">
                <button
                  id="nav-more-button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  aria-label="More navigation options"
                  aria-expanded={isDropdownOpen}
                >
                  More
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {isDropdownOpen && (
                  <div
                    id="nav-dropdown"
                    className="absolute right-0 top-12 w-56 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 duration-200"
                  >
                    <div className="py-2 space-y-1">
                      {secondaryNavItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md mx-2 transition-all duration-200 hover:text-primary hover:bg-primary/5 ${
                            activeSection === item.id
                              ? 'text-primary bg-primary/10'
                              : 'text-foreground'
                          }`}
                          aria-label={`Navigate to ${item.label} section`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border rounded-b-2xl bg-card/95 backdrop-blur-sm">
              <div className="py-4 px-6 space-y-1">
                {allNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;