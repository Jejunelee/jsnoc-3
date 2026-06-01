"use client";

import { useLanguage } from "@/app/LanguageContext";

const whyFeatures = [
  {
    key: 'rapid',
    icon: (
      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    key: 'local',
    icon: (
      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    key: 'nationwide',
    icon: (
      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: 'transparent',
    icon: (
      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    key: 'global',
    icon: (
      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: 'quality',
    icon: (
      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function WhyChooseJSNOC() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-16 lg:py-20 bg-gradient-to-br from-[#0A0F1C] via-[#05080F] to-[#0A0F1C] font-jost overflow-hidden">
      {/* Top Black Gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />
      
      {/* Bottom Black Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(#1E90FF 1px, transparent 1px), linear-gradient(90deg, #1E90FF 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E6F0FF] mb-4">
            {t('why.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1E90FF] to-[#1E90FF]/100 mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyFeatures.map((feature) => (
            <div
              key={feature.key}
              className="group relative bg-[#0A0F1C]/60 backdrop-blur-sm border border-[#1E90FF]/20 rounded-2xl p-6 transition-all duration-300 hover:border-[#1E90FF]/60 hover:shadow-xl hover:shadow-[#1E90FF]/5 hover:-translate-y-1 text-center"
            >
              {/* Icon */}
              <div className="mb-4 text-[#1E90FF] transition-all duration-300 group-hover:scale-110 group-hover:text-[#3BA0FF]">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#E6F0FF] mb-2">
                {t(`why.${feature.key}.title`)}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {t(`why.${feature.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Optional decorative line at bottom */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-[#1E90FF]/40 text-sm">
            <span className="w-8 h-px bg-[#1E90FF]/40" />
            <span>JSNOC</span>
            <span className="w-8 h-px bg-[#1E90FF]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}