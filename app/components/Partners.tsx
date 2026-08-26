"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/LanguageContext";

interface Partner {
  id: number;
  src: string;
  alt: string;
  name: string;
  size?: "small" | "medium" | "large" | "custom";
  customSize?: { width: number; height: number };
}

const partners: Partner[] = [
  { id: 1, src: "/Partners/1.png", alt: "Partner 1", name: "Partner 1", size: "medium" },
  { id: 2, src: "/Partners/2.png", alt: "Partner 2", name: "Partner 2", size: "custom", customSize: { width: 100, height: 80 } },
  { id: 3, src: "/Partners/3.png", alt: "Partner 3", name: "Partner 3", size: "custom", customSize: { width: 170, height: 80 } },
  { id: 4, src: "/Partners/4.png", alt: "Partner 4", name: "Partner 4", size: "custom", customSize: { width: 160, height: 80 } },
  { id: 5, src: "/Partners/5.png", alt: "Partner 5", name: "Partner 5", size: "custom", customSize: { width: 200, height: 80 } },
  { id: 6, src: "/Partners/6.png", alt: "Partner 6", name: "Partner 6", size: "custom", customSize: { width: 180, height: 80 } },
  { id: 7, src: "/Partners/7.png", alt: "Partner 7", name: "Partner 7", size: "custom", customSize: { width: 100, height: 80 } },
  { id: 8, src: "/Partners/8.png", alt: "Partner 8", name: "Partner 8", size: "custom", customSize: { width: 100, height: 80 } },
  { id: 9, src: "/Partners/9.png", alt: "Partner 9", name: "Partner 9", size: "custom", customSize: { width: 100, height: 80 } },
];

// Duplicate partners for seamless looping
const loopingPartners = [...partners, ...partners, ...partners];

// Size mappings
const getLogoSize = (partner: Partner) => {
  switch (partner.size) {
    case "small":
      return { width: 80, height: 60 };
    case "medium":
      return { width: 100, height: 80 };
    case "large":
      return { width: 120, height: 100 };
    case "custom":
      return partner.customSize || { width: 100, height: 80 };
    default:
      return { width: 100, height: 80 };
  }
};

export default function PartnersSection() {
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
            {t("partners.title") || "Companies We've Worked With"}
          </h2>
          <p className="text-[#E6F0FF]/70 text-base max-w-2xl mx-auto">
            {t("partners.subtitle") ||
              "Trusted by innovative companies worldwide"}
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
              {loopingPartners.map((partner, index) => (
                <PartnerCard key={`${partner.id}-${index}`} partner={partner} />
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

function PartnerCard({ partner }: { partner: Partner }) {
  const [imageError, setImageError] = useState(false);
  const { width, height } = getLogoSize(partner);

  return (
    <div className="group relative flex-shrink-0">
      {/* Pure white card background */}
      <div className="absolute inset-0 bg-white rounded-2xl transition-all duration-300 group-hover:scale-105" />
      
      {/* Shadow for depth */}
      <div className="absolute inset-0 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl" />
      
      {/* Card Content */}
      <div className="relative flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl transition-all duration-300 min-w-[140px] md:min-w-[160px]">
        {!imageError ? (
          <div 
            className="relative"
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              className="object-contain transition-all duration-300 group-hover:scale-110"
              sizes={`${width}px`}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="text-center">
            <div 
              className="bg-gray-100 rounded-lg flex items-center justify-center"
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              <span className="text-xs text-gray-600">{partner.name}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}