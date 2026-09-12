import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  // Real-time ScrollSpy & URL Hash Synchronization
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      // 1. Sticky Navbar styling
      setIsScrolled(window.scrollY > 50);

      // 2. Active Section Detection
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If scrolled to bottom of the page, activate contact
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 80) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);

      // Dynamically update URL hash without jumpy page scrolls or polluting browser history
      const targetHash = `#${currentSection}`;
      if (window.location.hash !== targetHash) {
        window.history.replaceState(null, '', targetHash);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#120705] py-4 border-b border-white/10 shadow-2xl'
          : isScrolled 
            ? 'bg-[#120705]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-white text-2xl font-black tracking-tight cursor-pointer"
          >
            Chhavi Verma<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a 
                key={link} 
                href={`#${sectionId}`}
                onClick={(e) => handleNavClick(e, sectionId)}
                className={`font-medium relative group transition-colors duration-300 py-1 ${
                  isActive ? 'text-white font-bold' : 'text-white/70 hover:text-white'
                }`}
              >
                {link}
                {/* Active / Hover Underline indicator */}
                <span 
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`px-6 py-2.5 rounded-full border text-white font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer ${
              activeSection === 'contact'
                ? 'bg-rose-600 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                : 'bg-white/10 border-white/20 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#140a08] border-b border-white/10 shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-3">
          {navLinks.map((link) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a 
                key={link} 
                href={`#${sectionId}`}
                onClick={(e) => handleNavClick(e, sectionId)}
                className={`text-lg border-b border-white/10 pb-2 transition-colors flex items-center justify-between ${
                  isActive ? 'text-rose-400 font-bold' : 'text-white/80 hover:text-rose-300 font-medium'
                }`}
              >
                <span>{link}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,1)]"></span>}
              </a>
            );
          })}
          <div className="pt-2 pb-2">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="inline-block px-6 py-3 rounded-full bg-rose-600 text-white font-bold hover:bg-rose-700 transition-colors w-full text-center shadow-lg cursor-pointer"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
