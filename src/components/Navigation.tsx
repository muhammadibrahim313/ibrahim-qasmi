import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const primaryNavItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'projects',
    label: 'Projects'
  }];
  const secondaryNavItems = [{
    id: 'kaggle-gallery',
    label: 'Kaggle Gallery'
  }, {
    id: 'kaggle-datasets',
    label: 'Kaggle Datasets'
  }, {
    id: 'blogs',
    label: 'Blog & Articles'
  }, {
    id: 'competitive-programming',
    label: 'Competitive Programming'
  }, {
    id: 'mentorship',
    label: 'Mentorship & Volunteering'
  }, {
    id: 'community-leadership',
    label: 'Community Leadership'
  }, {
    id: 'testimonials',
    label: 'Testimonials'
  }, {
    id: 'experience',
    label: 'Professional Experience'
  }, {
    id: 'contact',
    label: 'Get in Touch'
  }];
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
      const navbar = document.getElementById('expandable-navbar');
      const target = event.target as Node;
      
      // Only close if clicking completely outside the navbar
      if (navbar && !navbar.contains(target)) {
        // Use a small delay for smoother transition
        setTimeout(() => {
          setIsExpanded(false);
          setIsDropdownOpen(false);
        }, 150);
      }
    };
    
    const handleMouseLeave = () => {
      // Only auto-collapse on desktop after a delay
      if (window.innerWidth >= 1024) {
        setTimeout(() => {
          setIsExpanded(false);
          setIsDropdownOpen(false);
        }, 500);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleNavbarMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsExpanded(true);
    }
  };
  const handleNavbarClick = () => {
    if (window.innerWidth < 1024) {
      setIsExpanded(!isExpanded);
    }
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };
  return <>
      <a href="#main-content" className="skip-link" onFocus={e => e.currentTarget.focus()}>
        Skip to Content
      </a>
      
      <nav id="expandable-navbar" className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40" style={{
      perspective: '1000px'
    }} onMouseEnter={handleNavbarMouseEnter} onClick={handleNavbarClick}>
        <div className={`
            relative bg-background/95 backdrop-blur-md border border-border shadow-lg
            transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            ${isExpanded ? 'rounded-2xl w-[90vw] max-w-6xl' : 'rounded-full w-48 lg:w-56'}
          `} style={{
        transformStyle: 'preserve-3d',
        transform: isExpanded ? 'rotateY(0deg) scale(1)' : 'rotateY(-2deg) scale(1)',
        boxShadow: isExpanded ? '0 25px 50px -12px rgba(8, 145, 178, 0.25), 0 0 40px rgba(8, 145, 178, 0.1)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        willChange: 'transform, width, border-radius'
      }}>
          {/* Collapsed State - Logo Only */}
          {!isExpanded && <div className="flex items-center justify-center h-14 px-6">
              <button onClick={e => {
            e.stopPropagation();
            scrollToSection('home');
          }} className="text-lg lg:text-xl font-bold text-primary hover:text-primary/80 transition-colors" aria-label="Go to top">
                <span className="hidden sm:inline">Ibrahim Qasmi</span>
                <span className="sm:hidden">IQ</span>
              </button>
            </div>}

          {/* Expanded State - Full Navigation */}
          {isExpanded && <div className="animate-fade-in" style={{
          animation: 'fadeIn 0.4s ease-out'
        }}>
              <div className="flex items-center justify-between h-16 px-6">
                <button onClick={e => {
              e.stopPropagation();
              scrollToSection('home');
            }} aria-label="Go to top" style={{
              animation: 'slideInLeft 0.3s ease-out 0.1s both'
            }} className="font-bold text-primary hover:text-primary/80 transition-colors text-3xl">MIQ
            </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1 relative">
                  {primaryNavItems.map((item, index) => <button key={item.id} onClick={e => {
                e.stopPropagation();
                scrollToSection(item.id);
              }} className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${activeSection === item.id ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}`} aria-label={`Navigate to ${item.label} section`} style={{
                animation: `slideInRight 0.3s ease-out ${0.1 + index * 0.05}s both`
              }}>
                      {item.label}
                    </button>)}
                  
                  {/* More dropdown */}
                  <div className="relative">
                    <button id="nav-more-button" onClick={e => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }} className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200" aria-label="More navigation options" aria-expanded={isDropdownOpen} style={{
                  animation: `slideInRight 0.3s ease-out 0.35s both`
                }}>
                      More
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && <div id="nav-dropdown" className="absolute right-0 top-12 w-56 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 duration-200" style={{
                  boxShadow: '0 20px 25px -5px rgba(8, 145, 178, 0.1), 0 10px 10px -5px rgba(8, 145, 178, 0.04)'
                }}>
                        <div className="py-2 space-y-1">
                          {secondaryNavItems.map((item, index) => <button key={item.id} onClick={e => {
                      e.stopPropagation();
                      scrollToSection(item.id);
                    }} className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md mx-2 transition-all duration-200 hover:text-primary hover:bg-primary/5 ${activeSection === item.id ? 'text-primary bg-primary/10' : 'text-foreground'}`} aria-label={`Navigate to ${item.label} section`} style={{
                      animation: `fadeInUp 0.2s ease-out ${index * 0.03}s both`
                    }}>
                              {item.label}
                            </button>)}
                        </div>
                      </div>}
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="lg:hidden flex flex-wrap items-center gap-2 max-w-xs">
                  {primaryNavItems.slice(0, 3).map((item, index) => <button key={item.id} onClick={e => {
                e.stopPropagation();
                scrollToSection(item.id);
              }} className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 ${activeSection === item.id ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}`} aria-label={`Navigate to ${item.label} section`} style={{
                animation: `slideInRight 0.3s ease-out ${0.1 + index * 0.05}s both`
              }}>
                      {item.label}
                    </button>)}
                  <button onClick={e => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }} className="px-2 py-1 text-xs font-medium rounded text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200" style={{
                animation: `slideInRight 0.3s ease-out 0.25s both`
              }}>
                    More
                  </button>
                </div>
              </div>

              {/* Mobile Dropdown */}
              {isDropdownOpen && <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-sm rounded-b-2xl">
                  <div className="py-4 px-6 space-y-1 max-h-60 overflow-y-auto">
                    {[...primaryNavItems.slice(3), ...secondaryNavItems].map((item, index) => <button key={item.id} onClick={e => {
                e.stopPropagation();
                scrollToSection(item.id);
                setIsDropdownOpen(false);
              }} className={`w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeSection === item.id ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}`} aria-label={`Navigate to ${item.label} section`} style={{
                animation: `fadeInUp 0.2s ease-out ${index * 0.03}s both`
              }}>
                        {item.label}
                      </button>)}
                  </div>
                </div>}
            </div>}
        </div>
      </nav>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          padding: 8px;
          border-radius: 4px;
          text-decoration: none;
          z-index: 100;
          transition: top 0.3s;
        }

        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>;
};
export default Navigation;