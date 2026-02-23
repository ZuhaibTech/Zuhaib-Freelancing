import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaDownload, FaShieldAlt, FaEye, FaTimes, 
  FaAward, FaCube, FaPalette, FaBrain, FaGithub, FaBolt, FaBullseye, FaRocket, FaGamepad, 
  FaCode, FaSearch, FaCut, FaEnvelope, FaLinkedin, FaMapMarkerAlt 
} from 'react-icons/fa';
import { 
  SiCanva, SiTailwindcss, SiGreensock, SiInfosys, SiBootstrap, SiAdobe, SiGimp,
  SiNextdotjs, SiThreedotjs, SiFramer 
} from 'react-icons/si';

// IMPORT ASSETS
import zuhaibImage from '../assets/Zuhaib-image.png'; 
import resumePDF from '../pdf/Zuhaib-Resume.pdf';
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
    gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

    gsap.fromTo(aboutRef.current, 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, x: 0, duration: 1, 
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" } 
      }
    );

    gsap.fromTo(".stack-card", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, 
        scrollTrigger: { trigger: stackRef.current, start: "top 75%" } 
      }
    );

    gsap.fromTo(".why-card", 
      { opacity: 0, scale: 0.9 }, 
      { 
        opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)",
        scrollTrigger: { trigger: whyRef.current, start: "top 75%" } 
      }
    );

    gsap.fromTo(".cert-card", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, 
        scrollTrigger: { trigger: certRef.current, start: "top 80%" } 
      }
    );

    gsap.fromTo(contactRef.current, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, y: 0, duration: 0.8, 
        scrollTrigger: { trigger: contactRef.current, start: "top 80%" } 
      }
    );
  }, []);

  const languagesKnown = [
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400", border: "hover:border-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", border: "hover:border-white" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", border: "hover:border-yellow-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", border: "hover:border-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", border: "hover:border-blue-500" },
  ];

  const dependencies = [
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
    { name: "Lucide React", icon: <FaCode />, color: "text-pink-400" },
    { name: "GSAP", icon: <SiGreensock />, color: "text-green-500" },
    { name: "Three.js", icon: <SiThreedotjs />, color: "text-white" },
    { name: "React Three Fiber", icon: <FaCube />, color: "text-blue-400" },
    { name: "Framer Motion", icon: <SiFramer />, color: "text-purple-400" },
    { name: "React-spring", icon: <FaBolt />, color: "text-red-400" },
    { name: "Velocity-js", icon: <FaRocket />, color: "text-blue-500" },
    { name: "Anime-js", icon: <FaGamepad />, color: "text-yellow-300" },
    { name: "Spline", icon: <FaCube />, color: "text-indigo-400" },
    { name: "Splish Animation", icon: <FaPalette />, color: "text-teal-400" },
  ];

  const designStack = [
    { name: "Figma", icon: <FaFigma />, color: "text-pink-500", border: "hover:border-pink-500" },
    { name: "Canva", icon: <SiCanva />, color: "text-blue-400", border: "hover:border-blue-400" },
    { name: "AI Tools", icon: <FaBrain />, color: "text-purple-400", border: "hover:border-purple-400" },
    { name: "CapCut", icon: <FaCut />, color: "text-white", border: "hover:border-white" },
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
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={floatingVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 pt-20 md:pt-24 px-4 md:px-20 pb-20 space-y-24 md:space-y-32">
        
        {/* DOCUMENT MODAL */}
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 md:p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-5xl h-[80vh] md:h-[85vh] bg-gray-900 border border-cyan-400 rounded-xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,240,255,0.3)]">
              <div className="flex justify-between items-center p-3 md:p-4 bg-gray-800 border-b border-cyan-400/30">
                <h3 className="text-cyan-400 font-mono font-bold text-sm md:text-base">SECURE DOCUMENT VIEWER</h3>
                <button onClick={() => setActiveDoc(null)} className="text-gray-400 hover:text-red-500 transition-colors text-xl md:text-2xl"><FaTimes /></button>
              </div>
              <iframe src={activeDoc} className="w-full flex-1 bg-white" title="Document Preview"></iframe>
            </div>
          </div>
        )}

        {/* 1. HERO SECTION */}
        <div ref={heroRef} className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">
              File: Profile.jsx
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              HELLO, I'M <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                ZUHAIB SHARIFF
              </span>
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-400 font-mono flex items-center justify-center md:justify-start gap-3">
              <FaShieldAlt className="text-orange-500" />
              <span>Ethical Hacker & Dev</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <button onClick={() => setActiveDoc(resumePDF)} className="px-6 md:px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-full flex items-center justify-center gap-3 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] text-sm md:text-base">
                <FaEye /> VIEW RESUME
              </button>
              <a href={resumePDF} download="Zuhaib_Shariff_Resume.pdf" className="px-6 md:px-8 py-3 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm md:text-base">
                <FaDownload /> DOWNLOAD
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center relative items-center">
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-cyan-400/40 shadow-[0_0_40px_#00f0ff] animate-spin-slow"></div>
            <div className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_60px_#00f0ff] relative z-10 bg-gray-900 flex items-center justify-center">
              <img src={zuhaibImage} alt="Zuhaib Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* 2. ABOUT ME SECTION */}
        <div ref={aboutRef} className="max-w-4xl mx-auto bg-gray-900/60 border border-white/10 p-6 md:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-8 border-l-4 border-cyan-400 pl-4 md:pl-6">ABOUT ME</h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-300 text-justify md:text-left">
            <p>Hey there! I'm <strong className="text-white">Zuhaib</strong>, a React.js developer currently working as an intern with a passion for building modern web applications.</p>
            <p>Beyond coding, I'm deeply interested in <strong className="text-orange-500">gaming</strong> and I run <strong className="text-purple-400">ZStudio</strong> for video and image editing.</p>
          </div>
        </div>

        {/* 3. TECH STACK SECTION (UPDATED) */}
        <div ref={stackRef}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 md:mb-12 text-center uppercase tracking-widest">
            Development <span className="text-cyan-400">Arsenal</span>
          </h2>

          {/* SECTION: LANGUAGES KNOWN */}
          <div className="mb-16">
            <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-6 border-l-4 border-cyan-400 pl-4 flex items-center gap-2">
              <FaCode /> LANGUAGES KNOWN
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {languagesKnown.map((tech, index) => (
                <div key={index} className={`stack-card bg-gray-900/50 border border-white/5 p-4 md:p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 ${tech.border} group`}>
                  <div className={`text-3xl md:text-4xl ${tech.color} drop-shadow-md`}>{tech.icon}</div>
                  <span className="text-gray-400 font-mono text-xs md:text-sm group-hover:text-white text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: DEPENDENCIES */}
          <div className="mb-16">
            <h3 className="text-lg md:text-xl font-bold text-purple-500 mb-6 border-l-4 border-purple-500 pl-4 flex items-center gap-2">
              <FaCube /> DEPENDENCIES & LIBRARIES
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {dependencies.map((dep, index) => (
                <div key={index} className="stack-card bg-black/40 border border-white/5 p-3 rounded-lg flex items-center gap-3 hover:border-purple-500 transition-all group">
                  <div className={`${dep.color} text-xl group-hover:scale-110 transition-transform`}>{dep.icon}</div>
                  <span className="text-gray-400 text-[10px] md:text-xs font-mono group-hover:text-white">{dep.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: GITHUB PORTAL (NEW) */}
          <div className="mb-16">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 border-l-4 border-white pl-4 flex items-center gap-2">
              <FaGithub /> VERSION CONTROL
            </h3>
            <a 
              href="https://github.com/ZuhaibTech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block w-full bg-gradient-to-r from-gray-900 to-black border border-white/10 p-8 md:p-12 rounded-2xl text-center transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
            >
              <div className="inline-block p-6 bg-white/5 rounded-full text-white text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                <FaGithub />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white mb-2">EXPLORE MY REPOSITORIES</h4>
              <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Visit @ZuhaibTech on GitHub —&gt;</p>
            </a>
          </div>

          {/* DESIGN TOOLS */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-pink-500 mb-6 border-l-4 border-pink-500 pl-4 flex items-center gap-2">❖ DESIGN TOOLS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {designStack.map((tool, index) => (
                <div key={index} className={`stack-card bg-gray-900/50 border border-white/5 p-4 md:p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 ${tool.border} group`}>
                  <div className={`text-3xl md:text-4xl ${tool.color} drop-shadow-md`}>{tool.icon}</div>
                  <span className="text-gray-400 font-mono text-xs md:text-sm group-hover:text-white text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. WHY CHOOSE ME SECTION */}
        <div ref={whyRef}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 md:mb-12 text-center uppercase">WHY CHOOSE ME?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="why-card group bg-black/40 border border-white/10 p-6 md:p-8 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-yellow-400/20 rounded-full flex items-center justify-center mb-6 text-2xl text-yellow-400"><FaBolt /></div>
              <h3 className="text-xl font-bold text-white mb-4">Fast & Efficient</h3>
              <p className="text-gray-400 text-sm">Clean, optimized code that performs exceptionally. I deliver projects on schedule without compromising quality.</p>
            </div>
            <div className="why-card group bg-black/40 border border-white/10 p-6 md:p-8 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-cyan-400/20 rounded-full flex items-center justify-center mb-6 text-2xl text-cyan-400"><FaBullseye /></div>
              <h3 className="text-xl font-bold text-white mb-4">Detail-Oriented</h3>
              <p className="text-gray-400 text-sm">Pixel-perfect implementations and thorough testing. Every project receives meticulous attention.</p>
            </div>
            <div className="why-card group bg-black/40 border border-white/10 p-6 md:p-8 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 text-2xl text-purple-500"><FaRocket /></div>
              <h3 className="text-xl font-bold text-white mb-4">Continuous Learner</h3>
              <p className="text-gray-400 text-sm">Always staying updated with the latest web technologies and best practices.</p>
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
              <div key={cert.id} onClick={() => setActiveDoc(cert.file)} className="cert-card group bg-gray-900/60 border border-white/10 p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400">
                <div className="flex items-center gap-4">
                  <div className={`p-3 md:p-4 rounded-full bg-black/50 border border-white/10 ${cert.color} text-xl md:text-2xl`}>{cert.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg leading-tight group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
                    <p className="text-gray-500 text-[10px] mt-1 font-mono uppercase">CLICK TO VERIFY &gt;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CONTACT ME SECTION */}
        <div ref={contactRef} className="pb-8 md:pb-12 border-t border-white/10 pt-12 md:pt-16">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-8 md:mb-12 uppercase">Initiate <span className="text-cyan-400">Communication</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <a href="mailto:contact@zuhaib.com" className="group bg-gray-900/80 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-cyan-400 transition-all">
              <div className="p-4 bg-black/50 rounded-full text-cyan-400 text-3xl group-hover:scale-110 transition-transform"><FaEnvelope /></div>
              <h3 className="text-white font-bold uppercase text-sm">Email Me</h3>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group bg-gray-900/80 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-blue-500 transition-all">
              <div className="p-4 bg-black/50 rounded-full text-blue-500 text-3xl group-hover:scale-110 transition-transform"><FaLinkedin /></div>
              <h3 className="text-white font-bold uppercase text-sm">LinkedIn</h3>
            </a>
            <div className="group bg-gray-900/80 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-default">
              <div className="p-4 bg-black/50 rounded-full text-purple-500 text-3xl"><FaMapMarkerAlt /></div>
              <h3 className="text-white font-bold uppercase text-sm">Bengaluru, India</h3>
            </div>
          </div>
          <div className="text-center mt-12 md:mt-20 text-gray-600 font-mono text-[10px] tracking-widest">
            DESIGNED & BUILT BY ZUHAIB ULLA SHARIFF © {new Date().getFullYear()}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;