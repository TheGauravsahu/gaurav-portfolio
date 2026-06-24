import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Focus areas data
  const focusAreas = [
    {
      title: "Creative Coding",
      desc: "Building high-performance animations, interactive Canvas features, and custom layouts.",
      icon: (
        <svg className="w-6 h-6 text-neon-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      desc: "Designing sleek dark-mode user interfaces, glassmorphic panels, and modern typography.",
      icon: (
        <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Problem Solving",
      desc: "Analyzing algorithms, logical scripting, and mechanical systems like Rubik's cubes.",
      icon: (
        <svg className="w-6 h-6 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Fullstack Exploration",
      desc: "Integrating responsive frontend layers with Vite, Node, and Vercel cloud hosting.",
      icon: (
        <svg className="w-6 h-6 text-neon-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-gray-100 font-sans pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-violet/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-blue/8 blur-[150px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Header Profile with handwritten sticker - rebuilt to avoid overlapping */}
          <div className="flex flex-col sm:flex-row items-start gap-8 relative pt-8 sm:pt-10"> 
            
            {/* Glowing Avatar block with sticker pinned inside it */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-neon-violet to-neon-blue rounded-full blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative w-20 h-20 rounded-full bg-[#110a24] border border-neon-violet/20 flex items-center justify-center overflow-hidden shadow-[inset_0_0_15px_rgba(167,139,250,0.15)] z-10">
                <span className="font-display font-black text-3xl text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-blue">
                  GS
                </span>
              </div>

              {/* Handwriting Sticker - pinned relative to this avatar block */}
              <div className="absolute -top-12 -left-4 sm:-left-8 rotate-[-6deg] bg-neon-pink text-bg-dark font-hand text-xl px-3.5 py-1.5 rounded-lg shadow-lg border border-neon-pink/20 select-none flex items-center gap-1.5 whitespace-nowrap z-25">
                <span>Hello! I Am Gaurav Sahu</span>
                <svg className="w-3.5 h-3.5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Headline and tags in dedicated vertical stack */}
            <div className="space-y-3 flex-grow">
              <p className="text-neon-violet text-sm font-tech font-bold tracking-wider uppercase">Creative Coder & Designer</p>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
                A developer who <br />
                builds experiences by <br />
                writing <span className="relative inline-block px-3 py-0.5 border border-neon-blue/30 rounded-full bg-neon-blue/5 text-neon-blue text-3xl sm:text-4xl">creative code...</span>
              </h1>
            </div>
          </div>

          {/* Intro Description */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
              I'm a Developer & Designer
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Currently, studying at <strong className="text-white font-display">DPS Kaluahi</strong>. I make interactive, delightful web applications that combine creative engineering with high-fidelity aesthetics.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              I love bridging the gap between imagination and web engineering. When I'm not coding, you can find me solving Rubik's cubes, watching science fiction thrillers, or exploring music.
            </p>
          </div>

          {/* Focus Areas Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold tracking-wide uppercase text-white/50">My Focus Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between h-44">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                      {area.icon}
                    </div>
                    <span className="text-xs text-gray-500 font-tech font-bold">0{idx + 1}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-display font-bold text-white text-base">{area.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed line-clamp-2">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-28">
          
          {/* Top text block */}
          <div className="space-y-3">
            <p className="text-lg font-display text-gray-300 leading-relaxed">
              I'm currently looking to build <span className="text-neon-violet font-semibold">interactive projects</span> and collaborate on <span className="text-neon-blue font-semibold">creative web experiences</span> that push design limits.
            </p>
          </div>

          {/* Tech Constellation Layout (Replacing Orbit to match image exactly) */}
          <div className="relative w-full max-w-[420px] h-[360px] mx-auto flex flex-col items-center justify-between bg-white/[0.01] rounded-3xl border border-white/5 p-6 overflow-hidden shadow-2xl">
            
            {/* SVG Constellation lines background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 360" fill="none">
              <defs>
                <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Row 1 Path connections */}
              <path d="M 38 50 C 38 130, 210 170, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-30" />
              <path d="M 95 50 C 95 130, 210 170, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-40" />
              <path d="M 152 50 C 152 130, 210 170, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-50" />
              <path d="M 210 50 C 210 130, 210 170, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-60" />
              <path d="M 268 50 C 268 130, 210 170, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-50" />
              <path d="M 325 50 C 325 130, 210 170, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-40" />
              <path d="M 382 50 C 382 130, 210 170, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-30" />

              {/* Row 2 Path connections */}
              <path d="M 68 115 C 68 185, 210 195, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-35" />
              <path d="M 125 115 C 125 185, 210 195, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-45" />
              <path d="M 182 115 C 182 185, 210 195, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-55" />
              <path d="M 238 115 C 238 185, 210 195, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-55" />
              <path d="M 295 115 C 295 185, 210 195, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-45" />
              <path d="M 352 115 C 352 185, 210 195, 210 290" stroke="url(#line-grad-1)" strokeWidth="1.5" className="dash-flow opacity-35" />
            </svg>

            {/* Row 1 Badges Container */}
            <div className="absolute top-[32px] left-0 w-full flex justify-between px-3.5 z-10">
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-violet hover:scale-110 transition-all duration-300" title="Figma">🎨</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-violet hover:scale-110 transition-all duration-300" title="React">⚛️</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-violet hover:scale-110 transition-all duration-300" title="C++">⌨️</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-violet hover:scale-110 transition-all duration-300" title="Node">🟢</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-violet hover:scale-110 transition-all duration-300" title="Redux">🟣</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-violet hover:scale-110 transition-all duration-300" title="JavaScript">🟨</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-violet hover:scale-110 transition-all duration-300" title="CSS3">🔵</div>
            </div>

            {/* Row 2 Badges Container */}
            <div className="absolute top-[97px] left-0 w-full flex justify-around px-8 z-10">
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-blue hover:scale-110 transition-all duration-300" title="Adobe XD">💖</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-blue hover:scale-110 transition-all duration-300" title="Next.js">⚫</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-blue hover:scale-110 transition-all duration-300" title="GSAP">🪄</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-blue hover:scale-110 transition-all duration-300" title="Illustrator">🔶</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-blue hover:scale-110 transition-all duration-300" title="Express">⚙️</div>
              <div className="w-[36px] h-[36px] rounded-full bg-[#120b29] border border-white/10 flex items-center justify-center text-xs shadow-md cursor-pointer hover:border-neon-blue hover:scale-110 transition-all duration-300" title="MongoDB">🍃</div>
            </div>

            {/* Center Glowing Logo badge */}
            <div className="absolute bottom-[30px] left-[170px] w-20 h-20 rounded-full bg-[#080415] border border-neon-violet flex items-center justify-center shadow-[0_0_35px_rgba(167,139,250,0.6)] z-20 hover:scale-105 transition-transform duration-300">
              <span className="font-display font-black text-2xl text-white tracking-widest">GS</span>
            </div>
          </div>

          {/* Featured Project Layout */}
          <div className="glass-card rounded-3xl p-6 border border-white/5 space-y-4 shadow-xl">
            <div>
              <span className="text-xs font-tech text-neon-pink uppercase tracking-widest font-bold">Featured Project</span>
              <h4 className="text-2xl font-display font-extrabold text-white mt-1">Rubik's Cube Solver 3D</h4>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              An interactive 3D Rubik's cube solver application built using React, Three.js, and Kociemba algorithms. Visualize moves, track solution speeds, and learn optimal algorithms in real-time.
            </p>

            {/* Mock UI wireframe box underneath */}
            <div className="w-full h-40 rounded-xl bg-[#090516] border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden group/project">
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-neon-violet/10 blur-xl group-hover/project:bg-neon-violet/20 transition-colors" />
              
              {/* Mock Top bar */}
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-tech font-bold">
                <span>cube-solver-v2.grv</span>
                <span className="text-green-400">● LIVE RUNNING</span>
              </div>

              {/* Center 3D mockup art */}
              <div className="my-auto flex items-center justify-center gap-2">
                {/* Simulated Cube face colors */}
                <div className="grid grid-cols-3 gap-1.5 p-2 bg-[#120b29] border border-neon-violet/20 rounded-lg transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <div className="w-3.5 h-3.5 rounded-sm bg-red-500 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-sm bg-blue-500 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-sm bg-yellow-400 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-sm bg-green-500 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-sm bg-neon-violet shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-sm bg-blue-500 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-sm bg-orange-500 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-sm bg-green-500 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-sm bg-red-500 shadow-sm" />
                </div>
                {/* Console list output */}
                <div className="flex flex-col gap-1 text-[8px] font-tech text-gray-400 max-w-[160px]">
                  <div className="text-neon-blue font-bold">&gt; SOLVING CUBE STATUS: RUNNING</div>
                  <div>&gt; STEP 1: CROSS SETUP (4 MOVES)</div>
                  <div>&gt; STEP 2: F2L COMPLETED (U R U' R')</div>
                  <div className="text-neon-pink">&gt; TARGET REACHED IN 1.84s</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-tech font-bold">React / Tailwind / ThreeJS</span>
                <a
                  href="https://github.com/TheGauravsahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neon-blue hover:text-white flex items-center gap-1 font-semibold group/link"
                >
                  View Code
                  <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Gallery Quick Link at the bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
        <span className="text-xs text-gray-500 font-tech font-bold">© 2026 GAURAV SAHU</span>
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            ABOUT ME →
          </Link>
          <Link to="/gallary" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            GALLARY →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
