import React from 'react';
import stackImage from '../assets/about/chhavi_about.jpg';
import nitteLogo from '../assets/nitte_logo.png';

const stats = [
  { icon: '🚀', label: 'Projects', value: '10+' },
  { icon: '</>', label: 'Technologies', value: '20+' },
  { icon: '🏆', label: 'Experience', value: '2+ Years' },
  { icon: '☕', label: 'Commitment', value: '100%' }
];

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-[#140a08] pt-24 pb-24 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(180,40,30,0.18),rgba(20,10,8,1))]"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* ================= LEFT COLUMN: Image with Planetary Ring + Stats ================= */}
        <div className="flex flex-col items-center w-full lg:w-[380px] shrink-0">
          
          {/* Main Photo Card with Planetary Ring */}
          <div data-aos="zoom-in" className="relative w-full max-w-[340px] flex justify-center items-center py-8">
            
            {/* Background Dotted Matrix Accent */}
            <div className="absolute -top-2 -left-4 w-32 h-32 opacity-20 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:12px_12px] pointer-events-none" />
            <div className="absolute -bottom-2 -right-4 w-32 h-32 opacity-20 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:12px_12px] pointer-events-none" />

            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/20 via-orange-500/15 to-transparent rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            {/* 🪐 JUPITER PLANETARY STATIC LOWER SEMICIRCLE RING */}
            <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center translate-y-4">
              <svg 
                viewBox="0 0 500 500" 
                className="w-[155%] h-[155%] overflow-visible animate-pulse-glow"
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0" />
                    <stop offset="12%" stopColor="#f43f5e" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#fb923c" stopOpacity="0.9" />
                    <stop offset="88%" stopColor="#f43f5e" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#fda4af" stopOpacity="0" />
                  </linearGradient>
                  
                  <linearGradient id="ringGradFaint" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" stopOpacity="0" />
                    <stop offset="15%" stopColor="#f43f5e" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#fb923c" stopOpacity="0.25" />
                    <stop offset="85%" stopColor="#f43f5e" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="orbitStream" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" stopOpacity="0" />
                    <stop offset="30%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="65%" stopColor="#fb923c" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Group with FIXED static tilt angle (-18 degrees) */}
                <g transform="rotate(-18 250 250)">
                  
                  {/* Outer Static Planetary Orbit Guide Arc (Lower Semicircle) */}
                  <path 
                    d="M 8,250 A 242 92 0 0 0 492,250"
                    fill="none" 
                    stroke="url(#ringGradFaint)" 
                    strokeWidth="1.5" 
                    strokeDasharray="8 12"
                    className="animate-dash-orbit"
                  />

                  {/* Main Stationary Glowing Planetary Arc (Lower Semicircle - Clear of Face) */}
                  <path 
                    d="M 24,250 A 226 84 0 0 0 476,250"
                    fill="none" 
                    stroke="url(#ringGrad)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                    filter="drop-shadow(0 0 10px rgba(244,63,94,0.5))"
                  />

                  {/* Inner Thin Orbit Arc (Lower Semicircle) */}
                  <path 
                    d="M 40,250 A 210 76 0 0 0 460,250"
                    fill="none" 
                    stroke="#fb923c" 
                    strokeOpacity="0.45" 
                    strokeWidth="1.2" 
                    strokeDasharray="14 24"
                    className="animate-dash-orbit-fast"
                  />

                  {/* Spinning Glowing Light Stream along lower arc */}
                  <path 
                    d="M 24,250 A 226 84 0 0 0 476,250" 
                    fill="none" 
                    stroke="url(#orbitStream)" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeDasharray="100 250"
                    className="animate-dash-orbit"
                    filter="drop-shadow(0 0 12px #fb923c)"
                  />

                  {/* Orbiting Satellite Star 1 along lower arc */}
                  <circle r="4.5" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)">
                    <animateMotion 
                      dur="4.5s" 
                      repeatCount="indefinite" 
                      path="M 24,250 A 226 84 0 0 0 476,250" 
                    />
                  </circle>

                  {/* Orbiting Satellite Star 2 along lower arc */}
                  <circle r="3.5" fill="#fb923c" filter="drop-shadow(0 0 6px #f43f5e)">
                    <animateMotion 
                      dur="4.5s" 
                      begin="2.25s"
                      repeatCount="indefinite" 
                      path="M 24,250 A 226 84 0 0 0 476,250" 
                    />
                  </circle>

                </g>
              </svg>
            </div>

            {/* Photo Card with Rose Glowing Border */}
            <div className="relative z-10 w-[270px] sm:w-[290px] aspect-[3/4] rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-rose-500/80 via-red-500/40 to-orange-500/70 shadow-[0_0_35px_rgba(244,63,94,0.35)] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#1a0e0c]">
                <img 
                  src={stackImage} 
                  alt="Chhavi Verma" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Badges */}
            {/* Top-Left Code Badge */}
            <div className="absolute top-20 -left-3 z-30 bg-[#1c110f]/90 border border-rose-500/40 backdrop-blur-md px-3 py-2 rounded-2xl shadow-[0_0_20px_rgba(244,63,94,0.25)] flex items-center justify-center animate-float-badge">
              <span className="text-rose-400 font-mono font-bold text-sm tracking-wider">&lt;/&gt;</span>
            </div>

            {/* Bottom-Left React Badge */}
            <div className="absolute bottom-16 -left-2 z-30 bg-[#1c110f]/90 border border-sky-500/40 backdrop-blur-md p-2.5 rounded-2xl shadow-[0_0_20px_rgba(14,165,233,0.25)] flex items-center justify-center animate-float-badge" style={{ animationDelay: '1.5s' }}>
              <span className="text-sky-400 text-lg">⚛️</span>
            </div>

            {/* Top-Right JS Badge */}
            <div className="absolute top-16 -right-2 z-30 bg-[#1c110f]/90 border border-amber-500/40 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center animate-float-badge" style={{ animationDelay: '0.8s' }}>
              <span className="text-amber-400 font-bold text-xs">JS</span>
            </div>

            {/* Bottom-Right Doc/Code Badge */}
            <div className="absolute bottom-20 -right-2 z-30 bg-[#1c110f]/90 border border-purple-500/40 backdrop-blur-md p-2.5 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.25)] flex items-center justify-center animate-float-badge" style={{ animationDelay: '2.2s' }}>
              <span className="text-purple-400 text-sm">📑</span>
            </div>

          </div>

        </div>

        {/* ================= RIGHT COLUMN: Header, Bio, Links & Stats ================= */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white w-full">
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-2">
            Hello! I’m
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-orange-400 mb-5">
            Chhavi Verma
          </h1>

          {/* Bio Text */}
          <p className="text-sm md:text-base font-medium leading-relaxed text-gray-300 max-w-3xl mb-6">
            Hi, my name is <span className="text-white font-bold tracking-wide">CHHAVI VERMA</span>, a passionate full-stack developer based in <span className="text-rose-400 font-bold">Bangalore, India</span>, dedicated to crafting clean, functional, and highly scalable web applications.
          </p>

          {/* Quick Info Tags & Social Profiles */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            {/* LinkedIn Profile */}
            <a 
              href="https://www.linkedin.com/in/chhavi555111/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#182234]/90 hover:bg-[#0077b5]/25 border border-[#0077b5]/40 hover:border-[#0077b5] text-sky-300 hover:text-white text-xs font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(0,119,181,0.2)] hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* GitHub Profile */}
            <a 
              href="https://github.com/Kgotta-Contribute" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#251b30]/90 hover:bg-purple-600/25 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white text-xs font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.2)] hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current text-purple-400" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>

            {/* LeetCode Profile */}
            <a 
              href="https://leetcode.com/u/DidYouCode5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2a1d12]/90 hover:bg-amber-500/25 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white text-xs font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.2)] hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#FFA116]" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.535 5.86 5.86 0 0 0 1.319-.08 6.012 6.012 0 0 0 2.21-.97l3.699-3.32a1.374 1.374 0 0 0 .19-1.92 1.374 1.374 0 0 0-1.92-.19l-3.69 3.31a3.262 3.262 0 0 1-1.204.53 3.197 3.197 0 0 1-1.464-.04 3.25 3.25 0 0 1-2.584-1.9 3.218 3.218 0 0 1-.223-.74 3.13 3.13 0 0 1 .15-1.57c.07-.22.18-.43.32-.62l3.82-4.09 4.96-5.32a1.374 1.374 0 0 0-.96-2.35z"/>
                <path d="M16.14 7.7a1.374 1.374 0 0 0-1.37 1.37v6.4a1.374 1.374 0 0 0 2.75 0v-6.4a1.374 1.374 0 0 0-1.38-1.37z" fill="#FFA116"/>
              </svg>
              <span>LeetCode</span>
            </a>

            {/* Available for Work */}
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Work</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#201210] border border-white/10 text-gray-300 text-xs font-medium">
              <span>📍</span>
              <span>Bangalore, India</span>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#201210] border border-white/10 text-gray-300 text-xs font-medium">
              <span>💼</span>
              <span>2+ Years Experience</span>
            </div>
          </div>

          {/* Bottom Grid: Stats & Education Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full items-stretch">
            
            {/* Stats & Download Resume Card */}
            <div data-aos="fade-up" className="bg-[#1a0f0d]/90 border border-white/10 hover:border-rose-500/30 transition-all duration-300 backdrop-blur-md rounded-2xl p-5 shadow-2xl flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#241513]/70 border border-white/5 rounded-xl p-3.5 flex items-center gap-3.5 hover:border-rose-500/30 transition-colors">
                    <span className="text-2xl">{stat.icon}</span>
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium">{stat.label}</div>
                      <div className="text-white font-extrabold text-base tracking-tight">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Resume Button */}
              <a 
                href="/Chhavi_Verma_Resume.pdf"
                download="Chhavi_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl border border-rose-500/50 hover:border-rose-500 bg-rose-500/10 hover:bg-rose-500/25 text-rose-300 hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(244,63,94,0.15)] group cursor-pointer"
              >
                <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Education Card */}
            <div data-aos="fade-up" data-aos-delay="150" className="bg-[#1a0f0d]/90 border border-white/10 hover:border-rose-500/30 transition-all duration-300 backdrop-blur-md rounded-2xl p-5 shadow-2xl flex flex-col justify-between space-y-3">
              <div>
                {/* Header Tag */}
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="text-sm">🎓</span>
                  <span>EDUCATION</span>
                </div>

                {/* Top Row: College Logo + Name & Location */}
                <div className="flex items-center gap-3.5 mb-3">
                  {/* College Logo */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 shrink-0 flex items-center justify-center shadow-lg border border-white/20">
                    <img 
                      src={nitteLogo} 
                      alt="NITTE Logo" 
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                  {/* College Name & Location */}
                  <div className="min-w-0">
                    <h3 className="text-white font-extrabold text-sm sm:text-base leading-snug tracking-tight">
                      NITTE Meenakshi Institute of Technology
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-1">
                      <span className="text-rose-400 text-xs">📍</span>
                      <span>Bangalore, Karnataka, India</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-white/10 my-3" />

                {/* Bottom Row: Degree Info on Left + CGPA on Right */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  
                  {/* Degree */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-sm shrink-0">
                      📖
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-bold text-xs sm:text-sm">
                        Bachelor of Engineering
                      </div>
                      <div className="text-gray-400 text-[11px] sm:text-xs font-medium">
                        Information Science and Engineering
                      </div>
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <div className="shrink-0 bg-[#241513]/90 border border-white/10 hover:border-rose-500/40 transition-colors rounded-xl px-3.5 py-2 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                    <span className="text-2xl sm:text-3xl font-black text-rose-500 leading-none">8.5</span>
                    <span className="text-[10px] font-bold text-gray-400 tracking-wider mt-0.5">CGPA</span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
