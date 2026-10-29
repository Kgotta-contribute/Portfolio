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
    description: 'Architected an enterprise transcription and conversational RAG platform on an asynchronous S3-SQS-MongoDB pipeline with Python worker consumers, secured via Protegrity AES encryption, Okta SSO, and JWT authorization across Docker and Kubernetes clusters.',
    impact: [
      '97.5% transcription & diarization accuracy (from 82%) via VAD-guided FFmpeg chunking and timestamp merging, cutting turnaround by ~95%',
      'Scaled to 5,000+ users across 30+ teams, reliably processing 5,000+ files monthly on resilient queue consumers with retry semantics',
      '2,000+ monthly active users and 6,000+ queries on grounded multi-turn RAG chat, enforced by dual-pass MIME validation on 250 MB payloads'
    ],
    tech: ['React 19', 'TypeScript', 'FastAPI', 'Python', 'AWS S3', 'SQS', 'MongoDB', 'Kubernetes', 'Docker', 'Okta SSO']
  },
  {
    id: 'hr-policy-rag',
    title: 'HR Policy Intelligence — Multimodal Agentic Assistant',
    icon: '🤖',
    badge: 'Multimodal GenAI & RAG',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]',
    description: 'Built a production-grade enterprise HR policy assistant with LLaMA-3.3-70B, Qdrant, and LangGraph, utilizing multimodal RAG and hexagonal architecture with swappable adapter ports across PDFs and OCR-scanned documents.',
    impact: [
      '+35% response relevance & 80% reduction in manual policy lookup effort',
      '+30% expanded knowledge coverage & 2× active user adoption via SSO integration'
    ],
    tech: ['LLaMA-3.3-70B', 'Qdrant', 'LangGraph', 'Multimodal RAG', 'Hexagonal Arch', 'FastAPI', 'SSO']
  },
  {
    id: 'claims-inquiry-assistant',
    title: 'Claims Inquiry Assistant — AI Summarization & Reasoning Gateway',
    icon: '⚡',
    badge: 'GenAI',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]',
    description: 'Engineered an asynchronous FastAPI claims intelligence assistant powered by GPT-4o for automated claim summarization and policy reasoning, backed by Redis caching and a modular Horizon LLM gateway enabling zero-downtime model switching.',
    impact: [
      '50% cut in manual claim review time at 96% accuracy',
      '40% lower API latency while scaling to 2× request throughput',
      'Honored with the Impact Award for technical leadership'
    ],
    tech: ['FastAPI', 'GPT-4o', 'Redis Caching', 'Async / Event-Driven', 'Horizon Gateway', 'Zero-Downtime']
  },
  {
    id: 'cvs',
    title: 'CVS Data Lake — Full-Stack Data Exploration Platform',
    icon: '🌊',
    badge: 'Enterprise Data',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    description: 'Developed a full-stack healthcare data-search platform using Angular and Spring Boot, unifying reactive search forms and dynamic filters across 4 data domains (member, claim, prescription, opportunity) spanning 7 backend tables and 30+ configurable output/search columns, with paginated results at 20 records/page.',
    impact: [
      'Engineered a metadata-driven dynamic SQL generation engine with source-system mapping and configurable result columns, eliminating hardcoded queries across all 7 tables',
      'Added frontend validation and debounced interactions to cut redundant search calls'
    ],
    tech: ['Angular', 'Spring Boot', 'Oracle', 'JDBC', 'RxJS', 'SQL Generation']
  },
  {
    id: 'edp',
    title: 'EDP Sales — Dynamic Enterprise Search Tool',
    icon: '🔍',
    badge: 'Search & Analytics',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    description: 'Built a full-stack enterprise sales-search application using Angular and Spring Boot, supporting ID-based and advanced multi-criteria search across 30+ dynamic search fields, with reactive forms, conditional validation, pagination, and dynamic result rendering.',
    impact: [
      'Engineered a metadata-driven SQL generation layer (Oracle/JDBC) that dynamically resolves tables, columns, aliases, and query conditions with zero hardcoded logic',
      'Enabled environment-specific database connectivity across dev/test/prod environments'
    ],
    tech: ['Angular', 'Spring Boot', 'Oracle', 'JDBC', 'RxJS', 'Reactive Forms']
  },
  {
    id: 'spider',
    title: 'Spider Contract Republish — Batch Operations Tool',
    icon: '📦',
    badge: 'Distributed Systems',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    description: 'Developed a full-stack contract-republish application adopted by 4,000–5,000 monthly users using Angular and Spring Boot, supporting single/bulk workflows, Excel uploads, validation, task tracking, and paginated task history with pass/fail/waiting states.',
    impact: [
      'Engineered Quartz-based scheduled validation with DB2 integration, implementing task/subtask lifecycle management and retry/retrigger workflows',
      'Integrated live status monitoring and automated email notifications to cut manual follow-up on failed batch jobs'
    ],
    tech: ['Angular', 'Spring Boot', 'Quartz Scheduler', 'DB2', 'Oracle', 'Batch Processing']
  },
  {
    id: 'claims',
    title: 'Claims Medicaid — Metadata-Driven Search Module',
    icon: '📋',
    badge: 'Healthcare Search',
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    description: 'Developed a full-stack Medicaid claims-search module using Angular and Spring Boot, combining dynamic MongoDB aggregation with SQL-based querying, dynamic search criteria, validation, and environment-specific data retrieval.',
    impact: [
      'Implemented metadata-driven MongoDB aggregation pipelines and integrated DAAS/GraphQL APIs for dynamic filtering, projection, and claims data retrieval',
      'Substantially reduced custom query code required per new search use case'
    ],
    tech: ['Angular', 'Spring Boot', 'MongoDB Aggregation', 'GraphQL / DAAS', 'Oracle', 'SQL']
  },
  {
    id: 'impact-recognition',
    title: 'Monthly Connect & Leadership Recognition',
    icon: '🏅',
    badge: '250 IMPACT Points',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    description: 'Awarded 250 IMPACT Points for leadership and organizational excellence by organizing the Monthly Connect for 50+ onshore & offshore participants, driving alignment on project progress, delivery milestones, and engineering best practices.',
    tech: ['Cross-Functional Leadership', 'Delivery Alignment', 'Engineering Practices', 'Stakeholder Management']
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
          <div data-aos="fade-left" className="grid grid-cols-3 gap-3">
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3 text-center transition-all">
              <div className="text-xl font-black text-white">2+ <span className="text-xs font-normal text-rose-400">YOE</span></div>
              <div className="text-[11px] text-gray-400 font-medium">Experience</div>
            </div>
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3 text-center transition-all">
              <div className="text-xl font-black text-white">7+</div>
              <div className="text-[11px] text-gray-400 font-medium">Enterprise Tools</div>
            </div>
            <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3 text-center transition-all">
              <div className="text-xl font-black text-white">5K+</div>
              <div className="text-[11px] text-gray-400 font-medium">Files/Mo Processed</div>
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


            {/* Sub-Projects: Neat & Tidy Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                  ENTERPRISE INITIATIVES & DELIVERIES ({carelonProjects.length})
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {carelonProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-rose-500/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between group"
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

                      {project.impact && (
                        <div className="mt-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                          <div className="text-[11px] font-mono font-bold text-rose-300 tracking-wide flex items-center gap-1.5">
                            <span>📈</span>
                            <span>Measurable Impact</span>
                          </div>
                          <ul className="space-y-1 pl-1">
                            {project.impact.map((point, pIdx) => (
                              <li key={pIdx} className="text-gray-300 text-[11px] sm:text-xs leading-relaxed flex items-start gap-1.5">
                                <span className="text-emerald-400 mt-0.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
