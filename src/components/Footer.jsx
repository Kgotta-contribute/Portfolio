import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(341);
  const hasCountedRef = useRef(false);

  useEffect(() => {
    // Prevent React StrictMode from executing twice on dev mount
    if (hasCountedRef.current) return;
    hasCountedRef.current = true;

    try {
      const BASE_COUNT = 340;
      const stored = localStorage.getItem('chhavi_portfolio_visitor_count');
      let current = stored ? parseInt(stored, 10) : BASE_COUNT;
      if (isNaN(current)) current = BASE_COUNT;
      
      const newCount = current + 1;
      localStorage.setItem('chhavi_portfolio_visitor_count', newCount.toString());
      setVisitorCount(newCount);
    } catch (err) {
      // Fallback
    }
  }, []);

  return (
    <footer className="bg-[#160b09] text-[#ded7d5] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/5">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Fullstack and Backend Engineering</p>
          <p>AI & Modern Web Applications</p>
          <p>Clean Architecture & Scalable APIs</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>2+ years of experience</p>
          <a href="#experience" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Experience</a>
          
          {/* Dark Brown Visitor Counter Capsule */}
          <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24130f] border border-[#48241c] text-[#ded0cb] shadow-inner select-none transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[#a4918a] text-[10px] font-mono">Visitors:</span>
            <span className="font-bold text-white font-mono text-[11px] tracking-wider">
              {visitorCount.toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Bangalore, India · Open to Opportunities</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          chhavi verma
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Chhavi Verma Studio | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:daksh24kumar@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">daksh24kumar@gmail.com</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
