import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import clarityAiImg from '../assets/clarity_ai.png';
import chefLlamaImg from '../assets/chef_llama.png';
import hermioneStockImg from '../assets/hermione_stock.png';
import portfolioCreationImg from '../assets/portfolio_creation.jpg';

const ARCHITECTURES = {
  clarity: {
    title: 'Multilingual Audio Intelligence & Conversational RAG Platform',
    badge: '⚡ SYSTEM ARCHITECTURE',
    ascii: `┌─────────────────────────────────────────────────────────────┐
│                    1. INGESTION & DIARIZATION               │
│  Audio/Video (16kHz) ──► Whisper Large-v3 ──► LLaMA 3.3 70B │
│  (Smart Silence Slicing)    (Acoustic STT)    (JSON Speaker)│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    2. TWO-STAGE DENSE RAG                   │
│  Sliding Chunks ──► BAAI/bge-m3 (1024d) ──► Cross-Encoder  │
│  (3-win, 2-overlap)    (Top-20 Recall)      (Top-10 Rerank) │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│               3. REASONING & RESILIENT ROUTING              │
│       Qwen 3.6 (27B Multilingual) ──► Auto Failover ──►     │
│        (Kn / Ja / Ru / Hi / En)        (GPT-OSS 20B/120B)   │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   4. FULL-STACK INTERACTION                 │
│  FastAPI (Sliding-Window Limiter) ──► React 18 + Audio Sync │
│  (2 RPM / IP Protection)              (Interactive ▶ mm:ss) │
└─────────────────────────────────────────────────────────────┘`,
    steps: [
      {
        num: '01',
        title: 'Audio Ingestion & Diarization',
        desc: '16kHz silence-aware slicing ➔ Whisper Large-v3 (Acoustic STT) ➔ LLaMA 3.3 70B (JSON Speaker Turns)',
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
      },
      {
        num: '02',
        title: 'Two-Stage Dense RAG Engine',
        desc: '1,024-dim BGE-M3 Dense Recall (Top-20) ➔ BGE-Reranker-v2-M3 Cross-Encoder (Top-10 Precision Chunks)',
        color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
      },
      {
        num: '03',
        title: 'Multi-Model Reasoning & Failover',
        desc: 'Qwen 3.6 (27B Multilingual) with dynamic circuit-breaker failover to GPT-OSS (20B/120B) on rate limits',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      },
      {
        num: '04',
        title: 'Defensive API & Interactive UI',
        desc: 'FastAPI Thread-Safe Sliding Limiter (2 RPM) ➔ React 18 bi-directional audio-transcript timecode sync (▶ mm:ss)',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
      }
    ]
  },
  chef: {
    title: 'AI-Powered Culinary Assistant — LLM Chef (Python & LangChain)',
    badge: '⚡ SYSTEM ARCHITECTURE',
    ascii: `┌─────────────────────────────────────────────────────────────┐
│                 1. CLIENT INGESTION & UI STATE              │
│  Raw Ingredients ──► React 19 / Vite ──► Client Guards      │
│  (Dynamic Tags)      (SPA Controller)   (>3 Items & Dedupe) │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│             2. FASTAPI GATEWAY & PROMPT INJECTION           │
│  POST /api/proxy ──► Pydantic Validator ──► Strict System Spec
│  (Vercel Serverless) (RecipeRequest Model)  (Biochem & Rules)│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│            3. LANGCHAIN ORCHESTRATION & RECOVERY            │
│  LangChain Engine ──► Gemini 3.5 Flash ──► Regex Sanitizer  │
│  (GoogleGenAI Wrap)   (Temp 0.7 / 1500 Tok) (JSON Recovery) │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│             4. REACTIVE COOKING EXECUTION ENGINE            │
│  Fraction Scaler ──► Web Speech Synthesis ──► Macro Visualizer
│  (2/4/8 Portions)    (Hands-Free Audio TTS)   (% DV Progress)│
└─────────────────────────────────────────────────────────────┘`,
    steps: [
      {
        num: '01',
        title: 'Client Ingestion & Pre-Validation',
        desc: 'React 19 / Vite SPA ➔ Dynamic ingredient tagging with duplicate deduplication ➔ >3 items threshold guard before dispatch',
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
      },
      {
        num: '02',
        title: 'FastAPI Gateway & Prompt Engineering',
        desc: 'Vercel Serverless Python ASGI ➔ Pydantic schema validation ➔ Secure API key injection with strict biochemical & nutrition prompt rules',
        color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
      },
      {
        num: '03',
        title: 'LangChain Orchestration & Fallback Recovery',
        desc: 'LangChain ChatGoogleGenerativeAI (Gemini 3.5 Flash) ➔ Strict JSON structural enforcement ➔ Robust regex extraction fallback for raw output cleanup',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      },
      {
        num: '04',
        title: 'Reactive Cooking Engine & Audio Sync',
        desc: 'Client-side fractional math scaler (2/4/8 portion scaling) ➔ Web Speech Synthesis API hands-free narration ➔ Color-gradient % DV nutrition dashboard & print styling',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
      }
    ]
  },
  stock: {
    title: 'VERCEL Stock Prediction API Experiment',
    badge: '📈 SYSTEM ARCHITECTURE',
    ascii: `┌─────────────────────────────────────────────────────────────┐
│                 1. CLIENT INGESTION & UI STATE              │
│  Ticker Datalist ──► Vanilla ES6 / HTML5 ──► Client Guards  │
│  (Suggestion Chips)  (SPA State Controller)  (1-3 Tickers/Regex)│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│           2. VERCEL SERVERLESS GATEWAY & MARKET DATA        │
│  POST /api/stock-data ──► In-Memory Cache ──► Polygon.io API│
│  (Vercel Node.js)         (10-Min TTL Map)    (OHLC 3-Day Range)│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│           3. HUGGING FACE INFERENCE & STYLE ENGINE          │
│  POST /api/report ──► Dynamic Prompt Engine ──► Qwen 2.5-72B│
│  (Adaptive Temp)      (5 Persona Profiles)     (HF Token Stream)│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│          4. CHUNKED STREAMING & SVG VISUALIZATION           │
│  ReadableStream Reader ──► Markdown Parser ──► SVG Sparklines│
│  (Real-Time Token Feed)    (DOM Typist)        (Min/Max Math)│
└─────────────────────────────────────────────────────────────┘`,
    steps: [
      {
        num: '01',
        title: 'Client Ingestion & Input Guardrails',
        desc: 'Vanilla ES6 SPA / HTML5 Datalist ➔ Dynamic ticker chip management & duplicate deduplication ➔ Regex validation (/^[A-Z.]{1,6}$/) with a 1-to-3 stock limit guard and persona selector',
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
      },
      {
        num: '02',
        title: 'Vercel Serverless Gateway & Market Ingestion',
        desc: 'Vercel Serverless Node.js (POST /api/stock-data) ➔ Dual-tier In-Memory cache check (10-min TTL) ➔ Concurrent Polygon.io API aggregation for 3-day OHLC market data slices with empty-state detection',
        color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
      },
      {
        num: '03',
        title: 'Hugging Face Inference & Dynamic Persona Engine',
        desc: 'InferenceClient targeting Qwen/Qwen2.5-72B-Instruct ➔ Dynamic prompt assembly across 5 style personas (Funny, Serious, Beginner, Concise, Dramatic) ➔ Adaptive temperature regulator (0.35 precision, 0.75 creativity)',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      },
      {
        num: '04',
        title: 'Chunked Streaming & Reactive SVG Visualization',
        desc: 'HTTP chunked transfer stream decoded via ReadableStream (real-time typing effect) ➔ Zero-dependency dynamic SVG coordinate sparkline generator ➔ Integrated clipboard export & print-to-PDF stylesheet engine',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
      }
    ]
  },
  portfolio: {
    title: 'Modern Bespoke Portfolio & Interactive Physics Platform',
    badge: '⚡ ARCHITECTURE & RUNTIME',
    ascii: `┌─────────────────────────────────────────────────────────────┐
│               1. ASSET OPTIMIZATION & INGESTION             │
│  Hi-Res Media / Video ──► Vite Pipeline ──► Lazy-Load Engine│
│  (Modern WebP/MP4)        (Zero-Blocking)   (Async Modules) │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│               2. KINETIC PHYSICS & SOUND SYNTHESIS          │
│  Pointer & Velocity ──► HTML5 Canvas Sim ──► Web Audio Ring │
│  (Inertia & Collision)  (Tibetan Chimes)    (Harmonic Sine) │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│               3. SCROLL-LINKED KINETIC ORCHESTRATION        │
│  Framer Motion Engine ──► Spring Damping ──► Dynamic SVG Path│
│  (useScroll / useSpring)  (Stiffness 60/20)  (PathLength Mask)│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│               4. DEFENSIVE REACT UI & GLOBAL CDN            │
│  Tailwind Glassmorphism ──► FormSubmit AJAX ──► Edge Delivery│
│  (Strict SOLID Arch)        (Rate Protected)    (Sub-50ms)  │
└─────────────────────────────────────────────────────────────┘`,
    steps: [
      {
        num: '01',
        title: 'Asset Optimization & Ingestion',
        desc: 'Asset pipeline via Vite rollup bundling ➔ Async media streaming ➔ Zero-blocking initial first contentful paint (FCP < 0.4s)',
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
      },
      {
        num: '02',
        title: 'Kinetic Physics & Web Audio Synthesis',
        desc: 'High-frequency 60FPS HTML5 Canvas physics engine ➔ Pointer inertia collision detection ➔ Native Web Audio API polyphonic Tibetan sound synthesis',
        color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
      },
      {
        num: '03',
        title: 'Scroll-Linked Kinetic Orchestration',
        desc: 'Framer Motion normalized scroll tracking ➔ Inertial spring damping ➔ Real-time SVG mask pathLength interpolation across viewport milestones',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      },
      {
        num: '04',
        title: 'Defensive React UI & Edge Delivery',
        desc: 'SOLID component-driven architecture with responsive glassmorphism ➔ Asynchronous AJAX contact pipeline ➔ Edge deployment on global CDN',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
      }
    ]
  }
};

const TagCard = ({ number, title, text, image, link, linkText, liveLink, liveLinkText, architectureAction, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 sm:p-7 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-1 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-2 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        
        <p className={`text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {text}
        </p>

        {/* Project Image Preview */}
        {image && (
          <div className="w-full mt-3.5 rounded-xl overflow-hidden border border-black/10 shadow-sm bg-white flex items-center justify-center p-0.5">
            <img 
              src={image} 
              alt={title || "Project Preview"} 
              className="w-full h-auto object-cover max-h-40 sm:max-h-44 rounded-lg transition-transform duration-300 hover:scale-[1.02]" 
              loading="eager"
            />
          </div>
        )}

        {/* Project Action Row */}
        {(link || architectureAction || liveLink) && (
          <div className="mt-3.5 pt-1 flex items-center gap-2 flex-wrap">
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-red-700 hover:bg-red-50 shadow-md' 
                    : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm'
                }`}
              >
                <span>{linkText || "View Project"}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {architectureAction && (
              <button 
                type="button"
                onClick={architectureAction}
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer border ${
                  isActive 
                    ? 'bg-red-950/80 text-white border-red-300/40 hover:bg-white hover:text-red-700 shadow-md' 
                    : 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40 hover:bg-indigo-900 hover:text-white shadow-sm'
                }`}
              >
                <span>⚡ Architecture</span>
              </button>
            )}

            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-red-700 hover:bg-red-50 shadow-md' 
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
                }`}
              >
                <span>{liveLinkText || "Live Demo"}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const [archModalKey, setArchModalKey] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="projects"
      ref={containerRef}
      className="bg-white pt-24 pb-48 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1850px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-4 shadow-sm bg-white uppercase tracking-wider font-mono">
            Portfolio
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight relative">
            Projects
            {/* Hand-drawn arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[1850px] pointer-events-none z-0" 
          viewBox="0 0 1000 1850" 
          preserveAspectRatio="none"
        >
          {/* Faint background path (optional guide) */}
          <path 
            d="M 650,220 C 400,320 200,450 300,680 C 400,900 750,900 700,1120 C 650,1350 400,1350 300,1540 C 250,1650 400,1700 450,1750" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
          />

          {/* Mask to reveal the dashed path based on scroll */}
          <mask id="path-mask">
            <motion.path 
              d="M 650,220 C 400,320 200,450 300,680 C 400,900 750,900 700,1120 C 650,1350 400,1350 300,1540 C 250,1650 400,1700 450,1750" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
            />
          </mask>

          {/* The actual dashed line that gets revealed */}
          <path 
            d="M 650,220 C 400,320 200,450 300,680 C 400,900 750,900 700,1120 C 650,1350 400,1350 300,1540 C 250,1650 400,1700 450,1750" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg 
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="black" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          <TagCard 
            number="01"
            title="Multilingual Audio Intelligence & Conversational RAG Platform"
            text="Converts long-form audio/video into speaker-aware transcripts and lets users ask questions using two-stage RAG with BGE-M3 embeddings, cross-encoder reranking, and Qwen/GPT-OSS reasoning, Multilingual Q&A, and with rate limiting and model failover."
            image={clarityAiImg}
            link="https://github.com/Kgotta-contribute/Multilingual-Audio-Intelligence-Conversational-RAG-Platform"
            linkText="View on GitHub"
            architectureAction={() => setArchModalKey('clarity')}
            liveLink="https://clarity-ai-puce.vercel.app/"
            liveLinkText="Clarity AI"
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="02"
            title="AI-Powered Culinary Assistant"
            text="Generate personalized recipes, track calories/macronutrients, and scale ingredient portions dynamically. Added secure API validation, voice-guided cooking instructions, and print-ready recipe exports to make the application reliable, interactive, and accessible."
            image={chefLlamaImg}
            link="https://chhavi-verma-llm-chef.vercel.app/"
            linkText="Chef Llama"
            architectureAction={() => setArchModalKey('chef')}
            className="md:absolute md:top-[460px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="03"
            title="HG's Stock Prediction"
            text="Combines real-time Polygon.io market data with Hugging Face LLMs to generate AI-powered financial summaries. Implemented dual-layer caching, client-side state management, and dynamic SVG-based visualizations to improve performance and reduce API usage."
            image={hermioneStockImg}
            link="https://chhavi-verma-llm-stock-predict.vercel.app/"
            linkText="HG's Stock Prediction"
            architectureAction={() => setArchModalKey('stock')}
            className="md:absolute md:top-[900px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="04"
            title="Portfolio Website Creation"
            text="Crafting bespoke, high-performance personal brand platforms with interactive 3D physics and smooth kinetic animations. Tailored to captivate visitors, showcase technical depth, and elevate digital presence."
            image={portfolioCreationImg}
            architectureAction={() => setArchModalKey('portfolio')}
            className="md:absolute md:top-[1340px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end text */}
          <div 
            data-aos="fade-in" 
            data-aos-delay="600"
            className="hidden md:block absolute top-[1750px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            Ready to be delivered!
          </div>

        </div>

      </div>

      {/* ================= FULL PAGE SYSTEM ARCHITECTURE OVERLAY ================= */}
      {archModalKey && ARCHITECTURES[archModalKey] && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setArchModalKey(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-950/95 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6 text-left my-auto"
            onClick={(e) => e.stopPropagation()}
            onMouseLeave={() => setArchModalKey(null)}
          >
            {/* Header with Title and Close Button */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-5 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-1 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  <span>{ARCHITECTURES[archModalKey].badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {ARCHITECTURES[archModalKey].title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setArchModalKey(null)}
                className="shrink-0 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700/60"
                title="Close Architecture View (or move cursor away)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ASCII Flowchart Container */}
            <div className="overflow-x-auto rounded-2xl bg-black/60 border border-slate-800 p-4 sm:p-6 font-mono text-[11px] sm:text-xs text-indigo-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-700">
              <pre className="whitespace-pre font-mono">
                {ARCHITECTURES[archModalKey].ascii}
              </pre>
            </div>

            {/* 4-Step Architecture Grid */}
            <div className="architecture-grid p-6 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-md">
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>⚡</span> End-to-End System Architecture Breakdown
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ARCHITECTURES[archModalKey].steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-3 p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <span className={`font-mono font-bold text-sm px-2 py-0.5 rounded-md border shrink-0 ${step.color}`}>
                      {step.num}
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold text-white">{step.title}</h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Helper Note */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
              <span>💡 Move mouse out or click outside to return to Projects</span>
              <button 
                type="button"
                onClick={() => setArchModalKey(null)}
                className="text-indigo-400 hover:underline"
              >
                Return to Projects ↗
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
