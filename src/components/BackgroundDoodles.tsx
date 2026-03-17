"use client";
import { motion } from "framer-motion";

// Hand-drawn style SVG components for the background
const DoodleBook = () => (
  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 stroke-stone-800">
    <path d="M20 80V20C20 15 25 10 30 10H80V70C80 75 75 80 70 80H20Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 80C20 85 25 90 30 90H80V70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 30H60" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 45H65" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 60H55" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DoodleLightbulb = () => (
  <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 stroke-orange-600">
    <path d="M50 20C35 20 25 30 25 45C25 55 30 62 38 68V75C38 78 40 80 43 80H57C60 80 62 78 62 75V68C70 62 75 55 75 45C75 30 65 20 50 20Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 85H58" strokeWidth="2" strokeLinecap="round"/>
    <path d="M45 90H55" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 10V15" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 45H25" strokeWidth="2" strokeLinecap="round"/>
    <path d="M75 45H80" strokeWidth="2" strokeLinecap="round"/>
    <path d="M25 25L30 30" strokeWidth="2" strokeLinecap="round"/>
    <path d="M75 25L70 30" strokeWidth="2" strokeLinecap="round"/>
    <path d="M45 40L50 35L55 40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 35V55" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DoodleChat = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 stroke-amber-600">
    <path d="M20 35C20 25 35 15 50 15C65 15 80 25 80 35C80 45 65 55 50 55C45 55 40 54 35 53C35 53 20 60 20 60C20 60 25 50 25 50C22 45 20 40 20 35Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60 65C60 70 50 78 40 78C35 78 30 77 26 75C26 75 14 80 14 80C14 80 18 72 18 72C15 68 14 65 14 60C14 55 20 48 30 44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="40" cy="35" r="2" fill="currentColor"/>
    <circle cx="50" cy="35" r="2" fill="currentColor"/>
    <circle cx="60" cy="35" r="2" fill="currentColor"/>
  </svg>
);

const DoodlePaperPlane = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 stroke-stone-800">
    <path d="M90 10L10 40L40 55M90 10L60 90L40 55M90 10L40 55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 55V80L50 65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 75C25 85 40 85 50 75M75 15C85 25 85 40 75 50" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round"/>
  </svg>
);

const DoodleGradCap = () => (
  <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 stroke-orange-700">
    <path d="M10 40L50 20L90 40L50 60L10 40Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25 48V70C25 75 35 85 50 85C65 85 75 75 75 70V48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M90 40V65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M85 65H95V75H85V65Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function BackgroundDoodles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#FCFBF8] pointer-events-none">
      {/* Warm Soft Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100/40 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-100/40 blur-[120px]" />
      
      {/* Floating SVG Doodles */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[8%]"
      >
        <DoodleBook />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }} 
        transition={{ delay: 1, duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%]"
      >
        <DoodleLightbulb />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }} 
        transition={{ delay: 2, duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[12%]"
      >
        <DoodleChat />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0], x: [0, 10, 0], rotate: [0, -5, 0] }} 
        transition={{ delay: 0.5, duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[15%]"
      >
        <DoodlePaperPlane />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }} 
        transition={{ delay: 1.5, duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] left-[2%]"
      >
        <DoodleGradCap />
      </motion.div>
    </div>
  );
}
