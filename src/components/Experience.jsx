import React, { useState } from 'react';
import experienceDevImg from '../assets/experience_developer.jpg';
import carelonLogo from '../assets/carelon_logo.jpg';
import codeclauseLogo from '../assets/codeclause_logo.png';

const carelonProjects = [
  {
    id: 'rag',
    title: 'AI Transcript Intelligence — RAG Platform',
    icon: '🎙️',
    badge: 'GenAI & RAG',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    description: 'Scalable AI transcription and conversational RAG platform processing 5K+ files/month with 97.5% speaker accuracy.',
    tech: ['React', 'FastAPI', 'Python', 'AWS S3', 'SQS', 'MongoDB']
  },
  {
    id: 'cvs',
    title: 'CVS Data Lake — Data Exploration Platform',
    icon: '🌊',
    badge: 'Enterprise Data',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    description: 'Metadata-driven healthcare search engine with dynamic filters, automated SQL generation, and high-throughput REST APIs.',
    tech: ['Angular', 'Spring Boot', 'Oracle', 'JDBC', 'RxJS']
  },
  {
    id: 'edp',
    title: 'EDP Sales — Dynamic Enterprise Search Tool',
    icon: '🔍',
    badge: 'Search & Analytics',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    description: 'Enterprise search architecture with multi-criteria dynamic query builder and low-latency reactive UI.',
    tech: ['Angular', 'Spring Boot', 'Oracle', 'JDBC', 'RxJS']
  },
  {
    id: 'spider',
    title: 'Spider Contract Republish — Batch Operations Tool',
    icon: '📦',
    badge: 'Distributed Systems',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    description: 'High-volume batch contract-processing platform with automated job scheduling, error retries, and live notifications.',
    tech: ['Angular', 'Spring Boot', 'Oracle', 'Quartz', 'DB2']
  },
  {
    id: 'claims',
    title: 'Claims Medicaid — Metadata Search Module',
    icon: '📋',
    badge: 'Healthcare Search',
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    description: 'Metadata-driven Medicaid claims search featuring strict schema validation, server pagination, and dynamic data retrieval.',
    tech: ['Angular', 'Spring Boot', 'Oracle', 'MongoDB']
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section 
      id="experience" 
      className="bg-[#0f0706] pt-12 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(180,40,30,0.12),rgba(15,7,6,1))]"
    >
      {/* Subtle ambient glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* ================= SECTION HEADER & METRICS ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b border-white/10">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-3 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
              <span>&lt;/&gt;</span>
              <span>WORK EXPERIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              <span className="block xl:inline">Building Solutions, </span>
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-amber-400">
                Creating Impact
              </span>
            </h2>
          </div>

          {/* Quick Metrics Bar */}
          <div data-aos="fade-left" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3 text-center transition-all">
              <div className="text-xl font-black text-white">2+ <span className="text-xs font-normal text-rose-400">YOE</span></div>
              <div className="text-[11px] text-gray-400 font-medium">Experience</div>
            </div>
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3 text-center transition-all">
              <div className="text-xl font-black text-white">5+</div>
              <div className="text-[11px] text-gray-400 font-medium">Enterprise Tools</div>
            </div>
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3 text-center transition-all">
              <div className="text-xl font-black text-white">5K+</div>
              <div className="text-[11px] text-gray-400 font-medium">Files/Mo Processed</div>
            </div>
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3 text-center transition-all shadow-[0_0_20px_rgba(244,63,94,0.1)]">
              <div className="text-xl font-black text-rose-400">250</div>
              <div className="text-[11px] text-gray-400 font-medium">IMPACT Points</div>
            </div>
          </div>
        </div>

        {/* ================= WORK EXPERIENCE CARDS ================= */}
        <div className="space-y-10">

          {/* ---------------- 01. CARELON GLOBAL SOLUTIONS ---------------- */}
          <div 
            data-aos="fade-up"
            className="bg-[#140a08]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-7 relative overflow-hidden"
          >
            {/* Ambient accent header line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent opacity-70" />

            {/* Header: Company, Role, Date, Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white p-2 shrink-0 flex items-center justify-center shadow-lg border border-white/20">
                  <img 
                    src={carelonLogo} 
                    alt="Carelon Logo" 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Carelon Global Solutions
                    </h3>
                    <span className="text-xs text-gray-400 font-medium hidden sm:inline">• Bangalore, India</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-emerald-400 font-bold text-sm">
                      Associate Software Engineer
                    </span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs font-mono">Sept 2024 – Present</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-bold text-xs tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  CURRENT ROLE
                </span>
              </div>
            </div>

            {/* Key Milestone / Recognition Callout */}
            <div className="bg-gradient-to-r from-rose-950/40 to-transparent border-l-4 border-rose-500 rounded-r-2xl p-4 sm:p-5 flex items-start gap-3.5">
              <span className="text-2xl shrink-0 mt-0.5">🏅</span>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Organized the <strong className="text-white font-semibold">TDM Monthly Connect</strong> for 50+ onshore & offshore participants, driving alignment on project progress, delivery milestones, and engineering best practices. Awarded <strong className="text-rose-400 font-bold">250 IMPACT Points</strong> for leadership and organizational excellence.
              </p>
            </div>

            {/* Sub-Projects: Neat & Tidy Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                  ENTERPRISE INITIATIVES & DELIVERIES ({carelonProjects.length})
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {carelonProjects.map((project, idx) => (
                  <div 
                    key={project.id}
                    className={`bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-rose-500/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between group ${idx === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{project.icon}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
                            {project.badge}
                          </span>
                        </div>
                      </div>

                      <h5 className="text-white font-bold text-sm sm:text-base group-hover:text-rose-300 transition-colors leading-snug">
                        {project.title}
                      </h5>

                      <p className="text-gray-400 text-xs sm:text-[13px] mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Clean Tech Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-2 border-t border-white/5">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="text-[10px] font-mono text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* ---------------- 02. CODECLAUSE ---------------- */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-[#140a08]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden"
          >
            {/* Header: Company, Role, Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white p-2 shrink-0 flex items-center justify-center shadow-lg border border-white/20">
                  <img 
                    src={codeclauseLogo} 
                    alt="CodeClause Logo" 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      CodeClause
                    </h3>
                    <span className="text-xs text-gray-400 font-medium hidden sm:inline">• Pune, India</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-cyan-400 font-bold text-sm">
                      Software Development Intern
                    </span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs font-mono">Aug 2023 – Sept 2023</span>
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-bold text-xs self-start sm:self-center">
                COMPLETED
              </span>
            </div>

            {/* Project Details */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <h4 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                  <span>📱</span>
                  <span>Cross-Platform Signal Messenger Clone</span>
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Architected and engineered a real-time messaging application compatible across Android, iOS, and Web with end-to-end authentication, media sharing, and instant state synchronization.
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-1.5 sm:justify-end shrink-0">
                {['React Native', 'React.js', 'Firebase', 'Expo'].map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
