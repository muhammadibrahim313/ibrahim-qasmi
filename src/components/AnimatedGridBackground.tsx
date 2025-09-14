import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const AnimatedGridBackground = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    // Create periodic ripples from center
    const interval = setInterval(() => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: 50, // Center percentage
        y: 50, // Center percentage
        timestamp: Date.now(),
      };
      
      setRipples(prev => [...prev.slice(-2), newRipple]); // Keep last 3 ripples
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Clean up old ripples
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setRipples(prev => prev.filter(ripple => now - ripple.timestamp < 3000));
    }, 1000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Animated grid dots */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            backgroundPosition: '25px 25px',
          }}
        >
          {/* Pulsing overlay for grid animation */}
          <div 
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              backgroundPosition: '25px 25px',
              animationDuration: '4s',
            }}
          ></div>
        </div>
      </div>

      {/* Large grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            {/* Multiple ripple rings */}
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="absolute inset-0 border border-primary/20 rounded-full animate-ping"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: '3s',
                  width: '200px',
                  height: '200px',
                  marginLeft: '-100px',
                  marginTop: '-100px',
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60"></div>
    </div>
  );
};

export default AnimatedGridBackground;