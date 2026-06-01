"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/LanguageContext";

interface Industry {
  id: number;
  key: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  { 
    id: 1, 
    key: "industries.datacenters", 
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  { 
    id: 2, 
    key: "industries.enterprise", 
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    id: 3, 
    key: "industries.retail", 
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  { 
    id: 4, 
    key: "industries.warehousing", 
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    )
  },
  { 
    id: 5, 
    key: "industries.manufacturing", 
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 9h-6L8 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16a2 2 0 002-2v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    id: 6, 
    key: "industries.telecommunications", 
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  },
  { 
    id: 7, 
    key: "industries.msp", 
    icon: (
      <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
];

// Duplicate industries for seamless looping
const loopingIndustries = [...industries, ...industries, ...industries];

export default function SupportedIndustries() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 lg:py-20 bg-gradient-to-br from-[#05080F] via-[#0A0F1C] to-[#05080F] font-jost overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E6F0FF] mb-4">
            {t("industries.title")}
          </h2>
          <p className="text-[#E6F0FF]/70 text-base max-w-2xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative w-full overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#05080F] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#05080F] to-transparent z-10 pointer-events-none" />
            
            {/* Auto-looping marquee */}
            <div className="animate-marquee flex gap-8 md:gap-12 py-4">
              {loopingIndustries.map((industry, index) => (
                <IndustryCard
                  key={`${industry.id}-${index}`}
                  industryKey={industry.key}
                  icon={industry.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function IndustryCard({ industryKey, icon }: { industryKey: string; icon: React.ReactNode }) {
  const { t } = useLanguage();
  
  return (
    <div className="group relative flex-shrink-0">
      {/* Pure white card background */}
      <div className="absolute inset-0 bg-white rounded-2xl transition-all duration-300 group-hover:scale-105" />
      
      {/* Shadow for depth */}
      <div className="absolute inset-0 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl" />
      
      {/* Card Content */}
      <div className="relative flex flex-col items-center justify-center gap-3 p-6 md:p-8 rounded-2xl transition-all duration-300 min-w-[220px] md:min-w-[260px]">
        {/* Icon */}
        <div className="text-[#0A0F1C] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        
        {/* Industry Name */}
        <span className="text-[#05080F] text-base md:text-lg font-semibold text-center transition-all duration-300 group-hover:scale-105">
          {t(industryKey)}
        </span>
      </div>
    </div>
  );
}