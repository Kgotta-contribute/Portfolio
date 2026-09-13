import React, { useEffect, useRef, useState } from 'react';
import roofLeh from '../assets/chimes/roof-leh2.png';
import shadowSvg from '../assets/chimes/shadow.svg';
import bgTexture from '../assets/chimes/bg.png';

// Pentatonic scale frequencies in Hz (Gong, Shang, Jiao, Zhi, Yu)
const PENTATONIC_SCALE = [
  261.63, 293.66, 329.63, 392.00, 440.00, // C4, D4, E4, G4, A4
  523.25, 587.33, 659.25, 783.99, 880.00, // C5, D5, E5, G5, A5
  1046.50, 1174.66, 1318.51, 1567.98, 1760.00, // C6, D6, E6, G6, A6
  2093.00, 2349.32, 2637.02, 3135.96 // C7, D7, E7, G7
];

// The Top 4 Sacred Buddhist Mantras in Tibetan Uchen Script, Sanskrit Phonetics & Meaning
const SACRED_MANTRAS = [
  {
    id: 1,
    name: 'Shakyamuni Buddha Mantra',
    tibetanFull: 'ཨོཾ་མུ་ནི་མུ་ནི་མ་ཧཱ་མུ་ནི་ཤཱཀྱ་མུ་ནི་ཡེ་སྭཱ་ཧཱ།',
    englishPhonetics: 'Om Muni Muni Mahamuni Shakyamuniye Svaha',
    syllables: ['ཨོཾ', 'མུ་', 'ནི', 'མུ་', 'ནི', 'མ་', 'ཧཱ', 'མུ་', 'ནི', 'ཤཱཀྱ', 'མུ་', 'ནི', 'ཡེ', 'སྭཱ', 'ཧཱ'],
    meaning: 'Om and salutations to the wise Buddha with the greatest knowledge and wisdom. May I be free from suffering and blessed with compassion, love, and kindness.'
  },
  {
    id: 2,
    name: 'Green Tara Mantra',
    tibetanFull: 'ཨོཾ་ཏཱ་རེ་ཏུཏྟཱ་རེ་ཏུ་རེ་སྭཱ་ཧཱ།',
    englishPhonetics: 'Om Tare Tuttare Ture Swaha',
    syllables: ['ཨོཾ', 'ཏཱ་', 'རེ', 'ཏུཏྟཱ', 'རེ', 'ཏུ་', 'རེ', 'སྭཱ', 'ཧཱ'],
    meaning: 'Om and salutations to Mother Tara. May you protect me from fear, danger, and suffering, and purify all impurities of body, speech, and mind.'
  },
  {
    id: 3,
    name: 'Prajnaparamita Mantra (Heart Sutra)',
    tibetanFull: 'ག་ཏེ་ག་ཏེ་པཱ་ར་ག་ཏེ་པཱ་ར་སཾ་ག་ཏེ་བོ་དྷི་སྭཱ་ཧཱ།',
    englishPhonetics: 'Gate Gate Paragate Parasamgate Bodhi Svaha',
    syllables: ['ག་', 'ཏེ', 'ག་', 'ཏེ', 'པཱ་', 'ར་', 'ག་', 'ཏེ', 'པཱ་', 'ར་', 'སཾ', 'ག་', 'ཏེ', 'བོ་', 'དྷི', 'སྭཱ', 'ཧཱ'],
    meaning: 'Gone, gone, gone beyond, gone completely beyond to enlightenment! May I experience emptiness, supreme wisdom, and boundless compassion.'
  },
  {
    id: 4,
    name: 'Avalokiteshvara Mantra (Compassion)',
    tibetanFull: 'ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ།',
    englishPhonetics: 'Om Mani Padme Hum',
    syllables: ['ཨོཾ', 'མ་', 'ཎི', 'པདྨེ', 'ཧཱུྃ'],
    meaning: 'O radiant jewel in the lotus of my heart, shine brightly. May all beings be blessed with strength, peace, and universal compassion.'
  }
];

class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  reset(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    return this;
  }
  clone() {
    return new Vec2(this.x, this.y);
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  subtract(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subtractNew(v) {
    return new Vec2(this.x - v.x, this.y - v.y);
  }
  get length() {
    return Math.hypot(this.x, this.y);
  }
}

class Particle {
  constructor({ x, y, pinned, char, colIndex, mantraId }) {
    this.pos = new Vec2(x, y);
    this.oldPos = new Vec2(x, y);
    this.initX = x;
    this.initY = y;
    this.velocity = new Vec2();
    this.acceleration = new Vec2();
    this.pinned = pinned;
    this.char = char;
    this.colIndex = colIndex;
    this.mantraId = mantraId;
  }
  update(damping, gravity) {
    if (this.pinned) {
      this.acceleration.reset(0, 0);
      return;
    }
    this.velocity.reset(
      (this.pos.x - this.oldPos.x) * damping,
      (this.pos.y - this.oldPos.y) * damping
    );
    this.oldPos.reset(this.pos.x, this.pos.y);
    this.pos.x += this.velocity.x + this.acceleration.x;
    this.pos.y += this.velocity.y + this.acceleration.y + gravity;
    this.acceleration.reset(0, 0);
  }
  applyForce(fx, fy) {
    this.acceleration.x += fx;
    this.acceleration.y += fy;
  }
}

class Constraint {
  constructor({ p1, p2, length, minLength, maxLength }) {
    this.p1 = p1;
    this.p2 = p2;
    this.length = length;
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
  solve() {
    const dx = this.p2.pos.x - this.p1.pos.x;
    const dy = this.p2.pos.y - this.p1.pos.y;
    const distance = Math.hypot(dx, dy);
    if (distance === 0) return;

    let targetLength = this.length;
    if (distance < this.minLength) targetLength = this.minLength;
    else if (distance > this.maxLength) targetLength = this.maxLength;
    else return;

    const percent = (targetLength - distance) / distance / 2;
    const offsetX = dx * percent;
    const offsetY = dy * percent;

    if (!this.p1.pinned) {
      this.p1.pos.x -= offsetX;
      this.p1.pos.y -= offsetY;
    }
    if (!this.p2.pinned) {
      this.p2.pos.x += offsetX;
      this.p2.pos.y += offsetY;
    }
  }
}

const LehRoofChimes = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeNote, setActiveNote] = useState('');
  const [activeMantra, setActiveMantra] = useState(null);
  const lastChimeTimeRef = useRef(0);
  const lastColRef = useRef(-1);

  // Initialize Web Audio API eagerly on first user gesture
  const initAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    } catch (e) {
      console.warn('AudioContext init error:', e);
    }
  };

  // Play realistic metallic crystalline chime sound
  const triggerChime = (colRatio, intensity = 0.7, colIdx = 0) => {
    if (!soundEnabled) return;
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const mantraIndex = colIdx % 4;
    setActiveMantra(SACRED_MANTRAS[mantraIndex]);

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => playChimeNodes(ctx, colRatio, intensity));
    } else {
      playChimeNodes(ctx, colRatio, intensity);
    }
  };

  const playChimeNodes = (ctx, colRatio, intensity) => {
    const now = ctx.currentTime;
    if (now - lastChimeTimeRef.current < 0.035) return;
    lastChimeTimeRef.current = now;

    const noteIdx = Math.floor(Math.max(0, Math.min(1, colRatio)) * (PENTATONIC_SCALE.length - 1));
    const baseFreq = PENTATONIC_SCALE[noteIdx] || 523.25;

    const partials = [
      { ratio: 1.0, gain: 0.75, decay: 2.2, type: 'sine' },
      { ratio: 2.756, gain: 0.35, decay: 1.5, type: 'sine' },
      { ratio: 5.404, gain: 0.20, decay: 0.9, type: 'triangle' },
      { ratio: 8.933, gain: 0.12, decay: 0.6, type: 'sine' }
    ];

    const masterGain = ctx.createGain();
    const vol = Math.min(0.85, Math.max(0.15, intensity)) * 0.45;
    masterGain.gain.setValueAtTime(vol, now);

    if (ctx.createStereoPanner) {
      const panNode = ctx.createStereoPanner();
      panNode.pan.setValueAtTime((colRatio - 0.5) * 1.5, now);
      masterGain.connect(panNode);
      panNode.connect(ctx.destination);
    } else {
      masterGain.connect(ctx.destination);
    }

    partials.forEach(({ ratio, gain, decay, type }) => {
      const osc = ctx.createOscillator();
      const pGain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(baseFreq * ratio, now);

      pGain.gain.setValueAtTime(gain * vol, now);
      pGain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(pGain);
      pGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + decay);
    });

    setActiveNote(`${Math.round(baseFreq)}Hz`);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let animationFrameId = null;
    let particles = [];
    let constraints = [];
    const charCanvases = {};

    // String grid layout
    const GRID_W = 24; // 24 vertical hanging strings (cycles 4 mantras × 6 sets)
    const GRID_H = 18; // 18 characters per string
    const DAMPING = 0.988; // Low damping for lively left-right pendulum swing
    const GRAVITY = 0.18;
    const MOUSE_RADIUS = 90;
    const MOUSE_FORCE = 4.5;

    // Wide canvas so strings can swing far left and right without boundary clipping
    const CANVAS_W = 800;
    const CANVAS_H = 490;
    const CURTAIN_W = 460;
    const ORIGIN_X = (CANVAS_W - CURTAIN_W) / 2; // Center strings in the wide canvas
    const ORIGIN_Y = 10; // Start at the roof ceiling
    const cellWidth = CURTAIN_W / (GRID_W - 1);
    const cellHeight = (CANVAS_H - ORIGIN_Y - 40) / GRID_H;

    // Collect unique Tibetan syllables from all 4 mantras
    const allSyllables = [];
    SACRED_MANTRAS.forEach((m) => {
      m.syllables.forEach((s) => {
        if (!allSyllables.includes(s)) allSyllables.push(s);
      });
    });

    const fontSize = 17; // Large, prominent Tibetan Uchen script

    allSyllables.forEach((ch) => {
      if (charCanvases[ch]) return;
      const off = document.createElement('canvas');
      const s = Math.ceil(fontSize * 2.3);
      off.width = s * dpr;
      off.height = s * dpr;
      off._size = s;
      const octx = off.getContext('2d');
      octx.setTransform(dpr, 0, 0, dpr, 0, 0);
      octx.font = `bold ${fontSize}px "Noto Sans Tibetan", "Microsoft Himalaya", "Jomolhari", "Sambhota", "Kailasa", sans-serif`;
      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      octx.fillStyle = '#34211a';
      octx.fillText(ch, s / 2, s / 2);
      charCanvases[ch] = off;
    });

    // Set canvas dimensions
    canvas.width = CANVAS_W * dpr;
    canvas.height = CANVAS_H * dpr;
    canvas.style.width = `${CANVAS_W}px`;
    canvas.style.height = `${CANVAS_H}px`;

    // Create Particles Grid strictly structured by the 4 Sacred Mantras
    particles = [];
    constraints = [];

    for (let i = 0; i < GRID_W; i++) {
      const mantraObj = SACRED_MANTRAS[i % 4];
      const syllables = mantraObj.syllables;

      for (let j = 0; j < GRID_H; j++) {
        const x = ORIGIN_X + i * cellWidth;
        const y = ORIGIN_Y + j * cellHeight;
        const pinned = j === 0; // Pinned only at the roof ceiling line
        const char = syllables[j % syllables.length];

        const p = new Particle({ 
          x, 
          y, 
          pinned, 
          char, 
          colIndex: i, 
          mantraId: mantraObj.id 
        });
        particles.push(p);
      }
    }

    // Vertical Distance Constraints (each string is an independent pendulum chain)
    for (let i = 0; i < GRID_W; i++) {
      for (let j = 0; j < GRID_H; j++) {
        const idx = i * GRID_H + j;
        const p = particles[idx];

        if (j < GRID_H - 1) {
          const bottomP = particles[idx + 1];
          const c = new Constraint({
            p1: p,
            p2: bottomP,
            length: cellHeight,
            minLength: cellHeight * 0.05,
            maxLength: cellHeight * 1.08
          });
          constraints.push(c);
          p.downConstraint = c;
        }

        // Very loose lateral spacer (allows huge left/right swing while preventing tangling)
        if (i < GRID_W - 1) {
          const rightP = particles[(i + 1) * GRID_H + j];
          constraints.push(
            new Constraint({
              p1: p,
              p2: rightP,
              length: cellWidth,
              minLength: cellWidth * 0.5,
              maxLength: cellWidth * 4.5
            })
          );
        }
      }
    }

    // Mouse & Touch Interaction
    let mousePos = { x: -9999, y: -9999 };
    let prevMousePos = { x: -9999, y: -9999 };
    let grabbedParticle = null;

    const getCanvasPos = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (clientX - rect.left) * (CANVAS_W / rect.width),
        y: (clientY - rect.top) * (CANVAS_H / rect.height)
      };
    };

    const handlePointerMove = (e) => {
      const pos = getCanvasPos(e.clientX, e.clientY);
      prevMousePos = { ...mousePos };
      mousePos = pos;

      const vx = pos.x - prevMousePos.x;
      const vy = pos.y - prevMousePos.y;
      const speed = Math.hypot(vx, vy);

      // Dragging grabbed string
      if (grabbedParticle) {
        grabbedParticle.pos.x = pos.x;
        grabbedParticle.pos.y = pos.y;
        grabbedParticle.oldPos.x = pos.x - vx * 0.5;
        grabbedParticle.oldPos.y = pos.y - vy * 0.5;
      }

      // Check which string is being touched to trigger chime & active mantra
      let nearestCol = Math.round((pos.x - ORIGIN_X) / cellWidth);
      if (nearestCol >= 0 && nearestCol < GRID_W && pos.y > ORIGIN_Y && pos.y < CANVAS_H - 10) {
        if (nearestCol !== lastColRef.current) {
          lastColRef.current = nearestCol;
          triggerChime(nearestCol / GRID_W, Math.min(1, 0.4 + speed * 0.05), nearestCol);
        }
      }
    };

    const handlePointerDown = (e) => {
      initAudio();
      const pos = getCanvasPos(e.clientX, e.clientY);
      mousePos = pos;

      // Find closest particle to grab
      let nearest = null;
      let minD = 35;
      for (let p of particles) {
        if (p.pinned) continue;
        const d = Math.hypot(p.pos.x - pos.x, p.pos.y - pos.y);
        if (d < minD) {
          minD = d;
          nearest = p;
        }
      }
      if (nearest) {
        grabbedParticle = nearest;
        triggerChime(nearest.colIndex / GRID_W, 0.9, nearest.colIndex);
      }
    };

    const handlePointerUp = () => {
      grabbedParticle = null;
      mousePos = { x: -9999, y: -9999 };
      prevMousePos = { x: -9999, y: -9999 };
      lastColRef.current = -1;
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerenter', initAudio);
    canvas.addEventListener('pointerleave', handlePointerUp);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointerdown', initAudio, { once: true });
    window.addEventListener('touchstart', initAudio, { once: true });
    window.addEventListener('scroll', initAudio, { once: true });

    // Animation Loop
    const render = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      // Apply forces & update particles ONLY when user interacts
      particles.forEach((p) => {
        if (p.pinned) return;

        // Cursor push/swing force (only active when cursor is interacting)
        const dx = p.pos.x - mousePos.x;
        const dy = p.pos.y - mousePos.y;
        const distSq = dx * dx + dy * dy;
        const rSq = MOUSE_RADIUS * MOUSE_RADIUS;

        if (distSq < rSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          // Apply lateral swing push away from cursor
          p.applyForce((dx / dist) * force * 1.4, (dy / dist) * force * 0.6);
        }

        p.update(DAMPING, GRAVITY);
      });

      // Solve Constraints (multiple iterations for chain flexibility)
      for (let k = 0; k < 4; k++) {
        for (let c of constraints) {
          c.solve();
        }
      }

      // Draw Tibetan characters with angle along string tangent
      particles.forEach((p) => {
        if (!p.char) return;
        const img = charCanvases[p.char];
        if (!img) return;

        let cos = 1;
        let sin = 0;
        if (p.downConstraint) {
          const dx = p.downConstraint.p2.pos.x - p.downConstraint.p1.pos.x;
          const dy = p.downConstraint.p2.pos.y - p.downConstraint.p1.pos.y;
          const angle = Math.atan2(dy, dx) - Math.PI / 2;
          cos = Math.cos(angle);
          sin = Math.sin(angle);
        }

        const size = img._size;
        const half = size / 2;

        ctx.setTransform(
          cos * dpr,
          sin * dpr,
          -sin * dpr,
          cos * dpr,
          p.pos.x * dpr,
          p.pos.y * dpr
        );

        ctx.drawImage(img, -half, -half, size, size);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerenter', initAudio);
      canvas.removeEventListener('pointerleave', handlePointerUp);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [soundEnabled]);

  return (
    <section 
      id="chimes-showcase" 
      className="w-full relative overflow-hidden pt-8 pb-20 px-4 md:px-12 select-none"
      style={{
        backgroundColor: '#e9dfd1',
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Ambient Vintage Overlay */}
      <div className="absolute inset-0 bg-[#e9dfd1]/40 mix-blend-multiply pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ================= TOP HEADER ABOVE THE GOLDEN ROOFTOP ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2 pb-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#58423c] uppercase mb-1">
              <span>🎐</span>
              <span>INTERACTIVE EXPERIENCE</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-serif font-black text-[#3a2d2a] tracking-tight">
              བཀྲ་ཤིས་བདེ་ལེགས (Tashi Delek) — Leh Ladakh & Tibetan Temple Doorway Chimes
            </h3>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="px-4 py-2 rounded-full border border-[#58423c]/30 bg-[#3a2d2a]/90 backdrop-blur-md text-amber-100 text-xs font-mono font-bold flex items-center gap-2 shadow-lg hover:bg-[#58423c] transition-all cursor-pointer"
            >
              <span>{soundEnabled ? '🔊 Sound On' : '🔇 Muted'}</span>
              {activeNote && soundEnabled && (
                <span className="text-[10px] text-amber-300 font-mono">({activeNote})</span>
              )}
            </button>
          </div>
        </div>

        {/* ================= LEH ROOF & LETTER CURTAIN STAGE ================= */}
        <div className="relative w-full flex flex-col items-center pt-2 pb-6 overflow-visible">
          
          {/* Central Scene Stage */}
          <div ref={containerRef} className="relative w-full flex flex-col items-center justify-start overflow-visible">
            
            {/* 1. Authentic Leh Temple Roof */}
            <div className="relative z-[3] w-[500px] sm:w-[560px] max-w-[95vw] pointer-events-none drop-shadow-2xl">
              <img 
                src={roofLeh} 
                alt="Traditional Leh Temple Roof" 
                className="w-full h-auto object-contain pointer-events-none select-none block"
              />
            </div>

            {/* 2. Soft Drop Shadow Behind Curtain */}
            <div className="absolute top-[240px] sm:top-[270px] left-1/2 -translate-x-1/2 w-[520px] h-[440px] pointer-events-none z-[1] opacity-75">
              <img src={shadowSvg} alt="" className="w-full h-full object-fill filter blur-sm" />
            </div>

            {/* 3. Wide Letter Curtain Canvas (Z-Index 2) hanging directly below the lower eaves */}
            <div className="relative z-[2] cursor-grab active:cursor-grabbing flex justify-center -mt-3 sm:-mt-4">
              <canvas 
                ref={canvasRef} 
                className="touch-none block max-w-full"
                title="Brush, grab, or swing strings to hear the 4 Sacred Buddhist Mantras ring out!"
              />
            </div>

          </div>

        </div>

        {/* ================= THE 4 SACRED BUDDHIST MANTRAS IN TIBETAN SCRIPT ================= */}
        <div className="border-t border-[#58423c]/20 pt-8 mt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#8b5a45] uppercase">
                SACRED HIMALAYAN SCRIPT
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3a2d2a] mt-0.5">
                The 4 Sacred Buddhist Mantras Woven Into The Curtain
              </h2>
            </div>
            {activeMantra && (
              <div className="text-xs font-mono bg-[#3a2d2a]/10 border border-[#58423c]/20 px-3.5 py-1.5 rounded-full text-[#3a2d2a]">
                <span>Active: </span>
                <span className="font-bold">{activeMantra.name}</span>
              </div>
            )}
          </div>

          {/* 4 Mantras Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SACRED_MANTRAS.map((m) => (
              <div 
                key={m.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
                  activeMantra?.id === m.id 
                    ? 'bg-[#3a2d2a] text-amber-50 border-amber-400/50 shadow-lg scale-[1.01]' 
                    : 'bg-[#3a2d2a]/5 hover:bg-[#3a2d2a]/10 border-[#58423c]/20 text-[#3a2d2a]'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold tracking-wider opacity-70">
                    0{m.id} · {m.name}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-800 dark:text-amber-200">
                    Tibetan Uchen
                  </span>
                </div>

                {/* Tibetan Script Full Line */}
                <div className="text-xl sm:text-2xl font-serif font-bold tracking-wide my-2 leading-relaxed text-[#8b3a2a] dark:text-amber-300">
                  {m.tibetanFull}
                </div>

                {/* English Transliteration / Sanskrit */}
                <div className="text-xs sm:text-sm font-mono font-semibold tracking-tight text-amber-900 dark:text-amber-100 mb-2">
                  {m.englishPhonetics}
                </div>

                {/* Meaning / Translation */}
                <p className="text-[11px] sm:text-xs font-serif italic leading-relaxed opacity-85">
                  "{m.meaning}"
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default LehRoofChimes;
