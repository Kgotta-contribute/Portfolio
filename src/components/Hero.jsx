import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import chhaviImage from '../assets/ChhaviImage.jpg';
import chhaviVideo from '../assets/hero video/Chhavi_speaking_18s.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error('Playback failed:', err);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Front page Hero Image - Full Brightness */}
      <img
        src={chhaviImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-700"
      />

      {/* Hero Video - Full Brightness (Plays when user clicks Play Reel) */}
      <video
        ref={videoRef}
        src={chhaviVideo}
        preload="auto"
        playsInline
        onEnded={handleVideoEnded}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${
          isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <source src={chhaviVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          >
            Hi, I'm Chhavi <br /> <span className="text-white font-extrabold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">Full Stack Developer</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-medium mb-8 max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            I build scalable web applications and AI-powered systems using Java, Spring Boot, Python, React and Angular.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
            >
              View My Work
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a 
              href="#contact"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full bg-black/60 border border-white text-white font-semibold hover:bg-black/80 transition-all duration-300 backdrop-blur-md inline-block shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto select-none"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/40 bg-black/50 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_25px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_35px_rgba(255,42,42,0.7)]">
            {!isPlaying ? (
              // Play Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            {!isPlaying ? "Play Reel" : "Pause Reel"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
