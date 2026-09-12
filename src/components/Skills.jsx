import React from 'react';
import developerImg from '../assets/skills_developer.jpg';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    color: 'text-rose-400',
    borderColor: 'border-rose-500/35 hover:border-rose-500/70',
    shadowGlow: 'hover:shadow-[0_0_25px_rgba(244,63,94,0.18)]',
    badgeHover: 'hover:bg-rose-500/20 hover:text-white',
    skills: ['React', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: '⚡',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/35 hover:border-amber-500/70',
    shadowGlow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.18)]',
    badgeHover: 'hover:bg-amber-500/20 hover:text-white',
    skills: ['Java Spring Boot', 'Python', 'FastAPI', 'Node.js', 'C++', 'REST APIs']
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/35 hover:border-purple-500/70',
    shadowGlow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]',
    badgeHover: 'hover:bg-purple-500/20 hover:text-white',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Firebase']
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    color: 'text-pink-400',
    borderColor: 'border-pink-500/35 hover:border-pink-500/70',
    shadowGlow: 'hover:shadow-[0_0_25px_rgba(244,114,182,0.18)]',
    badgeHover: 'hover:bg-pink-500/20 hover:text-white',
    skills: ['LangChain', 'HuggingFace', 'LLM Models', 'NLP', 'LLM Agents', 'Scikit-learn']
  },
  {
    title: 'Tools & Cloud',
    icon: '☁️',
    color: 'text-sky-400',
    borderColor: 'border-sky-500/35 hover:border-sky-500/70',
    shadowGlow: 'hover:shadow-[0_0_25px_rgba(56,189,248,0.18)]',
    badgeHover: 'hover:bg-sky-500/20 hover:text-white',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'Postman']
  },
  {
    title: 'Other Skills',
    icon: '💡',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/35 hover:border-emerald-500/70',
    shadowGlow: 'hover:shadow-[0_0_25px_rgba(52,211,153,0.18)]',
    badgeHover: 'hover:bg-emerald-500/20 hover:text-white',
    skills: ['DSA', 'System Design', 'Microservices', 'API Design', 'Agile', 'Problem Solving']
  }
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="bg-[#100705] pt-10 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(160,35,25,0.15),rgba(16,7,5,1))]"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-rose-400 uppercase mb-3">
            <span>&lt;/&gt;</span>
            <span>MY SKILLS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-orange-400">Expertise</span>
          </h2>

          <div className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-300">
            <span className="text-rose-500 text-xs">◆ ◆ ◆</span>
            <p className="font-normal">
              Technologies and tools I use to build modern, scalable and efficient web applications.
            </p>
            <span className="text-rose-500 text-xs">◆ ◆ ◆</span>
          </div>
        </div>

        {/* ================= MAIN CONTENT: ILLUSTRATION + 6 SKILL CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* LEFT: Developer Illustration with Floating Tech Badges */}
          <div data-aos="fade-right" className="lg:col-span-4 flex justify-center items-center relative">
            
            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/25 via-red-500/15 to-transparent rounded-full blur-3xl transform scale-90 pointer-events-none" />

            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-rose-500/30 via-transparent to-amber-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)]">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#160b09] relative">
                <img 
                  src={developerImg} 
                  alt="Developer Illustration" 
                  className="w-full h-auto object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: 6 Categorized Skill Cards (3x2 Grid on Large Screens) */}
          <div data-aos="fade-left" className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className={`bg-[#180d0b]/90 backdrop-blur-md rounded-2xl p-4.5 border ${category.borderColor} transition-all duration-300 ${category.shadowGlow} flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3.5">
                    <span className="text-lg">{category.icon}</span>
                    <h4 className={`${category.color} font-black text-sm md:text-base tracking-wide`}>
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className={`bg-[#261411] text-gray-200 font-medium text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 border border-white/5 shadow-sm cursor-default hover:scale-105 ${category.badgeHover}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Torn paper divider at bottom transitioning into next section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 md:h-16 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;
