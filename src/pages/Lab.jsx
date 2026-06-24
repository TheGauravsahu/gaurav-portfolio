import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Lab = () => {
  const canvasRef = useRef(null);
  const [cubeRotation, setCubeRotation] = useState({ x: -25, y: 45 });
  const [scrambleText, setScrambleText] = useState("DECRYPTING DATA CORE...");
  const [isScrambling, setIsScrambling] = useState(false);

  // Scramble text effect
  const handleScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    const target = "ACCESS GRANTED: WELCOME TO THE LAB";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let iterations = 0;
    
    const interval = setInterval(() => {
      setScrambleText((prev) => 
        target
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return target[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iterations += 1;
      if (iterations >= target.length + 1) {
        clearInterval(interval);
        setIsScrambling(false);
      }
    }, 40);
  };

  // Canvas particle logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 300;

    const particles = [];
    const particleCount = 45;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = Math.random() * 2 + 1;
      }

      update(mouseX, mouseY) {
        // Gravity toward mouse if inside canvas
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            this.vx += (dx / dist) * 0.05;
            this.vy += (dy / dist) * 0.05;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Boundary bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167, 139, 250, 0.8)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let mouseX = null;
    let mouseY = null;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p) => {
        p.update(mouseX, mouseY);
        p.draw();
      });

      // Draw connections
      ctx.strokeStyle = "rgba(96, 165, 250, 0.12)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 65) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-gray-100 font-sans pt-24 pb-16 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-neon-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-neon-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="py-12 border-b border-white/5 mb-12">
          <span className="text-xs font-mono text-neon-pink uppercase tracking-widest font-bold">Interactive Playground</span>
          <h1 className="font-display font-black text-6xl sm:text-8xl mt-2 tracking-tight text-white">
            THE LAB
          </h1>
          <p className="text-gray-400 text-sm mt-3 max-w-md leading-relaxed">
            Where logic meets visual layout. Click, hover, and drag to interact with these frontend canvas and 3D web experiments.
          </p>
        </div>

        {/* Experiment Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12">
          
          {/* 3D Rubik's Cube Simulator (6 columns) */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between min-h-[460px] relative overflow-hidden group">
            <div>
              <span className="text-xs font-mono text-neon-blue uppercase tracking-widest font-bold">Experiment 01 • CSS 3D</span>
              <h3 className="text-2xl font-display font-black text-white mt-1">3D Rubik's Cube Face</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                A custom rendering of a 3D Rubik's cube using pure CSS 3D matrices and CSS transform variables. Hover or drag sliders below to rotate it in space.
              </p>
            </div>

            {/* Interactive 3D CSS container */}
            <div className="my-10 h-48 flex items-center justify-center relative">
              <div 
                className="w-24 h-24 relative transform-preserve-3d transition-transform duration-300"
                style={{
                  transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`,
                }}
              >
                {/* Front Face (Red) */}
                <div 
                  className="absolute w-24 h-24 bg-[#120b29] border border-neon-violet/40 p-1.5 grid grid-cols-3 gap-1 rounded-sm shadow-[0_0_15px_rgba(167,139,250,0.1)]"
                  style={{ transform: "translateZ(48px)" }}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-[2px] bg-red-500 shadow-sm" />
                  ))}
                </div>

                {/* Back Face (Orange) */}
                <div 
                  className="absolute w-24 h-24 bg-[#120b29] border border-neon-violet/40 p-1.5 grid grid-cols-3 gap-1 rounded-sm shadow-[0_0_15px_rgba(167,139,250,0.1)]"
                  style={{ transform: "rotateY(180deg) translateZ(48px)" }}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-[2px] bg-orange-500 shadow-sm" />
                  ))}
                </div>

                {/* Top Face (White) */}
                <div 
                  className="absolute w-24 h-24 bg-[#120b29] border border-neon-violet/40 p-1.5 grid grid-cols-3 gap-1 rounded-sm shadow-[0_0_15px_rgba(167,139,250,0.1)]"
                  style={{ transform: "rotateX(90deg) translateZ(48px)" }}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-[2px] bg-gray-100 shadow-sm" />
                  ))}
                </div>

                {/* Bottom Face (Yellow) */}
                <div 
                  className="absolute w-24 h-24 bg-[#120b29] border border-neon-violet/40 p-1.5 grid grid-cols-3 gap-1 rounded-sm shadow-[0_0_15px_rgba(167,139,250,0.1)]"
                  style={{ transform: "rotateX(-90deg) translateZ(48px)" }}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-[2px] bg-yellow-400 shadow-sm" />
                  ))}
                </div>

                {/* Left Face (Blue) */}
                <div 
                  className="absolute w-24 h-24 bg-[#120b29] border border-neon-violet/40 p-1.5 grid grid-cols-3 gap-1 rounded-sm shadow-[0_0_15px_rgba(167,139,250,0.1)]"
                  style={{ transform: "rotateY(-90deg) translateZ(48px)" }}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-[2px] bg-blue-500 shadow-sm" />
                  ))}
                </div>

                {/* Right Face (Green) */}
                <div 
                  className="absolute w-24 h-24 bg-[#120b29] border border-neon-violet/40 p-1.5 grid grid-cols-3 gap-1 rounded-sm shadow-[0_0_15px_rgba(167,139,250,0.1)]"
                  style={{ transform: "rotateY(90deg) translateZ(48px)" }}
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-[2px] bg-green-500 shadow-sm" />
                  ))}
                </div>
              </div>
            </div>

            {/* Slider controls */}
            <div className="space-y-3 mt-auto relative z-10 bg-bg-dark/40 p-3 rounded-xl border border-white/5">
              <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span>ROTATE X: {cubeRotation.x}°</span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={cubeRotation.x}
                  onChange={(e) => setCubeRotation((prev) => ({ ...prev, x: parseInt(e.target.value) }))}
                  className="w-32 accent-neon-violet"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span>ROTATE Y: {cubeRotation.y}°</span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={cubeRotation.y}
                  onChange={(e) => setCubeRotation((prev) => ({ ...prev, y: parseInt(e.target.value) }))}
                  className="w-32 accent-neon-blue"
                />
              </div>
            </div>
          </div>

          {/* HTML5 Canvas Particles (6 columns) */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between min-h-[460px] relative overflow-hidden group">
            <div>
              <span className="text-xs font-mono text-neon-pink uppercase tracking-widest font-bold">Experiment 02 • Interactive Canvas</span>
              <h3 className="text-2xl font-display font-black text-white mt-1">Gravitational Canvas Nodes</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                An interactive vector node mesh. Hover your mouse inside the box to pull the nodes toward your cursor and form floating light pathways.
              </p>
            </div>

            {/* Canvas Box */}
            <div className="my-6 border border-white/5 rounded-2xl bg-[#080415] overflow-hidden">
              <canvas ref={canvasRef} className="block w-full" />
            </div>

            <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono mt-auto">
              <span>ACTIVE PARTICLES: 45</span>
              <span>RENDER: HTML5 CANVAS 2D</span>
            </div>
          </div>

          {/* GSAP Text Scramble (12 columns) */}
          <div className="lg:col-span-12 glass-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group">
            <span className="text-xs font-mono text-neon-violet uppercase tracking-widest font-bold">Experiment 03 • Text Decryption</span>
            <h3 className="text-2xl font-display font-black text-white mt-1">Terminal Scramble Decoder</h3>
            <p className="text-gray-400 text-xs mt-2 max-w-xl leading-relaxed">
              An algorithm that replaces random string characters sequentially until the target phrase is fully decoded. Click the button to run the decryption loop.
            </p>

            <div className="my-8 py-6 px-8 rounded-2xl bg-[#090516] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-base sm:text-xl font-mono text-green-400 font-semibold tracking-wider">
                {scrambleText}
              </span>
              <button
                onClick={handleScramble}
                disabled={isScrambling}
                className={`font-mono text-xs px-6 py-2.5 rounded-lg border font-bold uppercase cursor-pointer transition-all duration-300 ${
                  isScrambling
                    ? "border-gray-700 bg-transparent text-gray-600"
                    : "border-neon-violet/30 bg-neon-violet/10 text-neon-violet hover:bg-neon-violet hover:text-bg-dark hover:shadow-[0_0_15px_rgba(167,139,250,0.3)]"
                }`}
              >
                {isScrambling ? "Decrypting..." : "Run Decryptor"}
              </button>
            </div>

            <div className="text-[10px] text-gray-500 font-mono flex justify-between">
              <span>MODULE: SCRAMBLE_ALGO_V1.EXE</span>
              <span>STATE: IDLE</span>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Nav Link */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center px-4">
        <span className="text-xs text-gray-500 font-mono">© 2026 GAURAV SAHU</span>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            ← HOME
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            ABOUT ME →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lab;
