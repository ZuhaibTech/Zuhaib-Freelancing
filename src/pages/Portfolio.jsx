import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaDownload, FaShieldAlt, FaEye, FaTimes, 
  FaAward, FaCube, FaPalette, FaBrain, FaGithub, FaBolt, FaBullseye, FaRocket, FaGamepad, 
  FaCode, FaSearch, FaCut, FaEnvelope, FaLinkedin, FaMapMarkerAlt 
} from 'react-icons/fa';
import { SiCanva, SiTailwindcss, SiGreensock, SiInfosys, SiBootstrap, SiAdobe, SiGimp } from 'react-icons/si';

// IMPORT ASSETS
import zuhaibImage from '../assets/Zuhaib-image.png'; 
import resumePDF from '../pdf/Zuhaib-Resume.pdf';

// Ensure this file is named exactly "Flowting.mp4" in src/assets/
import floatingVideo from '../assets/Flowting.mp4'; 

// IMPORT CERTIFICATES
import cert3D from '../pdf/3D Design Training Course.pdf';
import certUX from '../pdf/Effective UX Design.pdf';
import certFigma from '../pdf/Figma Training 2022.pdf';
import certInfosys from '../pdf/InfosysSpring board.pdf';
import certAIML from '../pdf/KARUNADU INTERNSHIP CERTIFICATE AI ML.pdf';
import certIntern from '../pdf/KARUNADU INTERNSHIP CERTIFICATE.pdf';
import certColor from '../pdf/UI & UX Design with color Theory.pdf';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const stackRef = useRef(null);
  const whyRef = useRef(null);
  const certRef = useRef(null);
  const contactRef = useRef(null);
  
  const [activeDoc, setActiveDoc] = useState(null);

  useEffect(() => {
    // 1. Hero Animation
    gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

    // 2. About Me Animation
    gsap.fromTo(aboutRef.current, 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, x: 0, duration: 1, 
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" } 
      }
    );

    // 3. Tech Stack Stagger Animation
    gsap.fromTo(".stack-card", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, 
        scrollTrigger: { trigger: stackRef.current, start: "top 75%" } 
      }
    );

    // 4. Why Choose Me Cards
    gsap.fromTo(".why-card", 
      { opacity: 0, scale: 0.9 }, 
      { 
        opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)",
        scrollTrigger: { trigger: whyRef.current, start: "top 75%" } 
      }
    );

    // 5. Certificates
    gsap.fromTo(".cert-card", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, 
        scrollTrigger: { trigger: certRef.current, start: "top 80%" } 
      }
    );

    // 6. Contact Section
    gsap.fromTo(contactRef.current, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, y: 0, duration: 0.8, 
        scrollTrigger: { trigger: contactRef.current, start: "top 80%" } 
      }
    );

  }, []);

  // MAIN TECH STACK
  const mainStack = [
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400", border: "hover:border-cyan-400" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", border: "hover:border-yellow-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", border: "hover:border-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", border: "hover:border-blue-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300", border: "hover:border-cyan-300" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600", border: "hover:border-purple-600" },
    { name: "GSAP", icon: <SiGreensock />, color: "text-green-500", border: "hover:border-green-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white", border: "hover:border-white" },
  ];

  // DESIGN TOOLS
  const designStack = [
    { 
      name: "Figma", 
      icon: <FaFigma />, 
      color: "text-pink-500", 
      border: "hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]" 
    },
    { 
      name: "Canva", 
      icon: <SiCanva />, 
      color: "text-blue-400", 
      border: "hover:border-blue-400 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]" 
    },
    { 
      name: "AI Tools", 
      icon: <FaBrain />, 
      color: "text-purple-400", 
      border: "hover:border-purple-400 hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]" 
    },
    { 
      name: "CapCut", 
      icon: <FaCut />, 
      color: "text-white", 
      border: "hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]" 
    },
  ];

  const certificates = [
    { id: 1, title: "Infosys Springboard", file: certInfosys, icon: <SiInfosys />, color: "text-blue-600" },
    { id: 2, title: "AI & ML Internship", file: certAIML, icon: <FaBrain />, color: "text-purple-500" },
    { id: 3, title: "General Internship", file: certIntern, icon: <FaAward />, color: "text-yellow-500" },
    { id: 4, title: "Figma Training 2022", file: certFigma, icon: <FaFigma />, color: "text-pink-500" },
    { id: 5, title: "Effective UX Design", file: certUX, icon: <FaPalette />, color: "text-green-400" },
    { id: 6, title: "UI/UX & Color Theory", file: certColor, icon: <FaPalette />, color: "text-orange-400" },
    { id: 7, title: "3D Design Training", file: cert3D, icon: <FaCube />, color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden text-gray-300">
      
      {/* FIXED BACKGROUND VIDEO */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline // CRITICAL FOR IPHONE
          className="w-full h-full object-cover"
        >
          <source src={floatingVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* CONTENT LAYER */}
      {/* Adjusted padding for mobile (px-4) vs desktop (px-20) */}
      <div className="relative z-10 pt-20 md:pt-24 px-4 md:px-20 pb-20 space-y-24 md:space-y-32">
        
        {/* DOCUMENT MODAL */}
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 md:p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-5xl h-[80vh] md:h-[85vh] bg-gray-900 border border-cyber-blue rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.3)] flex flex-col">
              <div className="flex justify-between items-center p-3 md:p-4 bg-gray-800 border-b border-cyber-blue/30">
                <h3 className="text-cyber-blue font-mono font-bold text-sm md:text-base">SECURE DOCUMENT VIEWER</h3>
                <button onClick={() => setActiveDoc(null)} className="text-gray-400 hover:text-red-500 transition-colors text-xl md:text-2xl"><FaTimes /></button>
              </div>
              <iframe src={activeDoc} className="w-full flex-1 bg-white" title="Document Preview"></iframe>
            </div>
          </div>
        )}

        {/* 1. HERO SECTION */}
        {/* UPDATED: flex-col ensures TEXT is on TOP of IMAGE on Mobile */}
        <div ref={heroRef} className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Text Content (Will be Top on Mobile, Left on Desktop) */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded text-cyber-blue text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">
              File: Profile.jsx
            </div>
            
            {/* Responsive Heading */}
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              HELLO, I'M <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-purple-500">
                ZUHAIB SHARIFF
              </span>
            </h1>
            
            <h2 className="text-lg md:text-2xl text-gray-400 font-mono flex items-center justify-center md:justify-start gap-3">
              <FaShieldAlt className="text-cyber-orange" />
              <span>Ethical Hacker & Dev</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <button onClick={() => setActiveDoc(resumePDF)} className="px-6 md:px-8 py-3 bg-transparent border-2 border-cyber-blue text-cyber-blue font-bold rounded-full flex items-center justify-center gap-3 hover:bg-cyber-blue hover:text-black transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] text-sm md:text-base">
                <FaEye /> VIEW RESUME
              </button>
              <a href={resumePDF} download="Zuhaib_Shariff_Resume.pdf" className="px-6 md:px-8 py-3 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm md:text-base">
                <FaDownload /> DOWNLOAD
              </a>
            </div>
          </div>

          {/* Image Profile (Will be Bottom on Mobile, Right on Desktop) */}
          <div className="w-full md:w-1/2 flex justify-center relative items-center">
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-cyber-blue/40 shadow-[0_0_40px_#00f0ff] animate-spin-slow"></div>
            <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-cyber-blue shadow-[0_0_60px_#00f0ff] relative z-10 bg-gray-900 flex items-center justify-center">
              <img src={zuhaibImage} alt="Zuhaib Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* 2. ABOUT ME SECTION */}
        <div ref={aboutRef} className="max-w-4xl mx-auto bg-gray-900/60 border border-white/10 p-6 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-8 border-l-4 border-cyber-blue pl-4 md:pl-6">
            ABOUT ME
          </h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-300 text-justify md:text-left">
            <p>
              Hey there! I'm <strong className="text-white">Zuhaib</strong>, a React.js developer currently working as an intern with a passion for building modern web applications. My journey in tech started with curiosity about how websites work, and now I create them.
            </p>
            <p>
              Beyond coding, I'm deeply interested in <strong className="text-cyber-orange">gaming</strong>—not just playing, but understanding game design, mechanics, and the technology behind them. I also run <strong className="text-purple-400">ZStudio</strong>, where I explore video and image editing.
            </p>
            <p>
              I believe in continuous learning and pushing my boundaries. Whether it's mastering a new framework, analyzing a complex game, or perfecting a workout routine, I'm always evolving.
            </p>
          </div>
        </div>

        {/* 3. TECH STACK SECTION */}
        <div ref={stackRef}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 md:mb-12 text-center">
            TECHNOLOGIES & SKILLS
            <span className="block text-xs md:text-sm font-mono text-gray-500 font-normal mt-2 tracking-widest">TOOLS I WORK WITH DAILY</span>
          </h2>

          {/* PART 1: CORE DEVELOPMENT ARSENAL */}
          <div className="mb-12">
            <h3 className="text-lg md:text-xl font-bold text-cyber-blue mb-6 border-l-4 border-cyber-blue pl-4"> &lt;/&gt; DEVELOPMENT ARSENAL</h3>
            {/* Grid adjustments: 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {mainStack.map((tech, index) => (
                <div key={index} className={`stack-card bg-gray-900/50 border border-white/5 p-4 md:p-6 rounded-xl flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] ${tech.border} group`}>
                  <div className={`text-3xl md:text-4xl ${tech.color} drop-shadow-md`}>
                    {tech.icon}
                  </div>
                  <span className="text-gray-400 font-mono text-xs md:text-sm group-hover:text-white text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PART 2: DETAILED LISTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            
            {/* TOOLS & WORKFLOW */}
            <div className="stack-category bg-gray-900/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-purple-500 mb-6 flex items-center gap-2"><FaCube /> Tools & Workflow</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg"><FaCode className="text-blue-400 text-xl"/> <div><strong className="text-white text-sm md:text-base">VS Code</strong> <div className="text-[10px] md:text-xs text-gray-500">Primary Code Editor</div></div></li>
                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg"><SiTailwindcss className="text-cyan-300 text-xl"/> <div><strong className="text-white text-sm md:text-base">Responsive Design</strong> <div className="text-[10px] md:text-xs text-gray-500">Mobile-first approach</div></div></li>
                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg"><FaBolt className="text-yellow-400 text-xl"/> <div><strong className="text-white text-sm md:text-base">Web Performance</strong> <div className="text-[10px] md:text-xs text-gray-500">Optimization</div></div></li>
                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg"><FaSearch className="text-green-400 text-xl"/> <div><strong className="text-white text-sm md:text-base">SEO</strong> <div className="text-[10px] md:text-xs text-gray-500">Search Engine Optimization</div></div></li>
              </ul>
            </div>

            {/* ADDITIONAL SKILLS */}
            <div className="stack-category bg-gray-900/50 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-green-400/30 transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-green-400 mb-6 flex items-center gap-2"><FaAward /> Additional Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg"><SiAdobe className="text-red-500 text-xl"/> <div><strong className="text-white text-sm md:text-base">Video Editing</strong> <div className="text-[10px] md:text-xs text-gray-500">Premiere / DaVinci</div></div></li>
                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg"><SiGimp className="text-orange-400 text-xl"/> <div><strong className="text-white text-sm md:text-base">Image Editing</strong> <div className="text-[10px] md:text-xs text-gray-500">Photoshop / GIMP</div></div></li>
                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg"><FaGamepad className="text-purple-400 text-xl"/> <div><strong className="text-white text-sm md:text-base">Gaming Knowledge</strong> <div className="text-[10px] md:text-xs text-gray-500">Industry insights</div></div></li>
                <li className="flex items-center gap-3 bg-black/40 p-3 rounded-lg"><FaBrain className="text-pink-400 text-xl"/> <div><strong className="text-white text-sm md:text-base">Calisthenics</strong> <div className="text-[10px] md:text-xs text-gray-500">Physical fitness</div></div></li>
              </ul>
            </div>
          </div>

          {/* PART 3: DESIGN TOOLS */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-pink-500 mb-6 border-l-4 border-pink-500 pl-4 flex items-center gap-2"> 
               ❖ DESIGN TOOLS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {designStack.map((tool, index) => (
                <div key={index} className={`stack-card bg-gray-900/50 border border-white/5 p-4 md:p-6 rounded-xl flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-300 hover:scale-105 active:scale-95 ${tool.border} group`}>
                  <div className={`text-3xl md:text-4xl ${tool.color} drop-shadow-md`}>
                    {tool.icon}
                  </div>
                  <span className="text-gray-400 font-mono text-xs md:text-sm group-hover:text-white text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. WHY CHOOSE ME SECTION */}
        <div ref={whyRef}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 md:mb-12 text-center">
            WHY CHOOSE ME?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Reason 1 */}
            <div className="why-card group bg-black/40 border border-white/10 p-6 md:p-8 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,0,0.15)]">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl text-yellow-400 group-hover:scale-110 transition-transform">
                <FaBolt />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Fast & Efficient</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Clean, optimized code that performs exceptionally. I value your time and deliver projects on schedule without compromising quality.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="why-card group bg-black/40 border border-white/10 p-6 md:p-8 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl text-cyber-blue group-hover:scale-110 transition-transform">
                <FaBullseye />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Detail-Oriented</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Pixel-perfect implementations and thorough testing. Every project receives meticulous attention to ensure bug-free, polished results.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="why-card group bg-black/40 border border-white/10 p-6 md:p-8 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl text-purple-500 group-hover:scale-110 transition-transform">
                <FaRocket />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Continuous Learner</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Always staying updated with the latest web technologies and best practices. I bring fresh, modern solutions to every project.
              </p>
            </div>

          </div>
        </div>

        {/* 5. CERTIFICATION VAULT */}
        <div ref={certRef}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 border-l-4 border-yellow-500 pl-4 flex items-center gap-3">
            <span className="text-yellow-500">★</span> CERTIFICATION VAULT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => setActiveDoc(cert.file)}
                className="cert-card relative group bg-gray-900/60 border border-white/10 p-4 md:p-6 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] hover:border-cyber-blue/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 md:p-4 rounded-full bg-black/50 border border-white/10 ${cert.color} text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg leading-tight group-hover:text-cyber-blue transition-colors">{cert.title}</h4>
                    <p className="text-gray-500 text-[10px] md:text-xs mt-1 font-mono group-hover:text-white transition-colors">CLICK TO VERIFY &gt;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CONTACT ME SECTION */}
        <div ref={contactRef} className="pb-8 md:pb-12 border-t border-white/10 pt-12 md:pt-16">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-8 md:mb-12 uppercase tracking-tighter">
            Initiate <span className="text-cyber-blue">Communication</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            
            {/* Email Card */}
            <a href="mailto:contact@zuhaib.com" className="group bg-gray-900/80 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 hover:border-cyber-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
              <div className="p-3 md:p-4 bg-black/50 rounded-full text-cyber-blue text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                <FaEnvelope />
              </div>
              <h3 className="text-white font-bold tracking-widest uppercase text-sm md:text-base">Email Me</h3>
              <p className="text-gray-500 text-xs md:text-sm">Get in touch directly</p>
            </a>

            {/* LinkedIn Card */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group bg-gray-900/80 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
              <div className="p-3 md:p-4 bg-black/50 rounded-full text-blue-500 text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                <FaLinkedin />
              </div>
              <h3 className="text-white font-bold tracking-widest uppercase text-sm md:text-base">LinkedIn</h3>
              <p className="text-gray-500 text-xs md:text-sm">Let's connect professionally</p>
            </a>

            {/* Location Card */}
            <div className="group bg-gray-900/80 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-default">
              <div className="p-3 md:p-4 bg-black/50 rounded-full text-purple-500 text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-white font-bold tracking-widest uppercase text-sm md:text-base">Location</h3>
              <p className="text-gray-500 text-xs md:text-sm">Bengaluru, India</p>
            </div>

          </div>

          <div className="text-center mt-12 md:mt-20 text-gray-600 font-mono text-[10px] md:text-xs tracking-widest">
            DESIGNED & BUILT BY ZUHAIB ULLA SHARIFF © {new Date().getFullYear()}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;