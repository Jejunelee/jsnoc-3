"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'EN' | 'KR';

type Translations = {
  [key: string]: {
    EN: string;
    KR: string;
  };
};

// String translations
const translations: Translations = {
  // ============ HEADER ============
  'nav.home': { EN: 'Home', KR: '홈' },
  'nav.about': { EN: 'About Us', KR: '회사소개' },
  'nav.services': { EN: 'Services', KR: '서비스' },
  'nav.contact': { EN: 'Contact', KR: '문의하기' },

  // ============ HERO SECTION ============
  'hero.title': { 
    EN: 'Grow your business with us',
    KR: '비즈니스와의 협력으로 성장하세요'
  },
  'hero.subtitle': { 
    EN: 'Global Standards. Local Presence',
    KR: 'Global Standards. Local Presence'
  },
  'hero.description': { 
    EN: 'Bridging the gap between international service providers and local execution through nationwide engineering support, transparent project delivery, and dependable technical expertise.',
    KR: 'JSNOC는 국제 서비스 제공업체와 국내 현장 실행 간의 원활한 협업을 지원하며, 전국 단위 엔지니어링 서비스, 투명한 프로젝트 운영, 그리고 신뢰할 수 있는 기술 전문성을 제공합니다.'
  },
  'hero.button': { EN: 'Explore Solutions', KR: '더 알아보기' },

  // ============ PARTNERS SECTION ============
  'partners.title': { 
    EN: 'Companies We\'ve Worked With', 
    KR: '협력 회사' 
  },
  'partners.subtitle': { 
    EN: 'Trusted by innovative companies worldwide', 
    KR: '전 세계 혁신적인 기업들이 신뢰하는 파트너' 
  },

  // ============ ABOUT US SECTION ============
  'about.title': { EN: 'About Us', KR: '회사소개' },
  'about.short': { 
    EN: 'JSNOC is a trusted infrastructure services partner supporting international and local organizations throughout South Korea. From deployment and migration to technical support and decommissioning, we provide reliable solutions that keep businesses connected and projects moving forward.',
    KR: 'JSNOC는 국내외 기업을 위한 신뢰할 수 있는 IT 인프라 서비스 파트너입니다. 인프라 구축, 마이그레이션, 기술 지원, 장비 철거 및 자산 관리에 이르기까지 IT 인프라의 전 생애주기를 지원하며, 비즈니스 운영의 안정성과 프로젝트의 성공적인 수행을 위한 최적의 솔루션을 제공합니다.'
  },
  'about.professional.title': { EN: 'Global Coordination, Local Execution', KR: '글로벌 협업, 현지 전문성' },
  'about.professional.desc': {
    EN: 'JSNOC bridges the gap between international service providers and local stakeholders, simplifying communication, reducing project risk, and ensuring successful execution throughout South Korea.',
    KR: 'JSNOC는 국제 서비스 제공업체와 국내 현장 운영 간의 원활한 연결을 지원하며, 효과적인 의사소통과 체계적인 프로젝트 관리를 통해 성공적인 프로젝트 수행을 제공합니다.'
  },
  'about.practical.title': { EN: 'Nationwide Infrastructure Support', KR: '전국 단위 인프라 서비스' },
  'about.practical.desc': {
    EN: 'From network deployments and data center projects to field services and technical support, our nationwide engineering network aims to deliver reliable solutions wherever your business operates.',
    KR: '네트워크 구축부터 데이터센터 운영 지원, 현장 엔지니어링 및 기술 지원에 이르기까지 전국 어디서나 일관된 품질의 서비스를 제공합니다.'
  },
  'about.modern.title': { EN: 'Transparent & Accountable Delivery', KR: '투명성과 책임을 바탕으로 한 프로젝트 수행' },
  'about.modern.desc': {
    EN: 'We believe successful projects start with clear expectations. Through transparent pricing, realistic timelines, and consistent communication, we deliver quality results without surprises or compromises.',
    KR: '투명한 견적, 명확한 일정, 그리고 지속적인 소통을 통해 고객이 신뢰할 수 있는 프로젝트 결과를 제공합니다.'
  },
  'about.contact.prefers': { EN: 'Prefer a call? Contact the number below.', KR: '전화가 더 편하신가요? 연락 주시면 바로 응대해드리겠습니다.' },
  'about.contact.message': { EN: 'We aim to fulfill your IT needs.', KR: '귀하의 IT 니즈를 충족시키기 위해 노력합니다.' },
  'about.button.more': { EN: 'See More', KR: '더 알아보기' },
  'about.button.less': { EN: 'See Less', KR: '접기' },

  // ============ OFFERINGS/SERVICES SECTION ============
  'offerings.title': { EN: 'Core Services', KR: '우리의 서비스' },
  
  // Service cards
  'offerings.service1.title': { EN: 'Remote Hands', KR: '현장 기술자 지원 서비스' },
  'offerings.service1.desc': { 
    EN: 'Smart hands for datacenters: power cycles, media swaps, cabling checks, hardware replacements, and troubleshooting.',
    KR: '데이터센터 원격 지원 서비스로 전원 재가동, 미디어 교체, 케이블 점검, 하드웨어 교체 및 장애 대응을 지원합니다.'
  },

  'offerings.service2.title': { EN: 'L1–L3 Desktop Support', KR: 'L1-L3 데스크톱 지원' },
  'offerings.service2.desc': { 
    EN: 'End-user support, imaging, MDM, break/fix, escalation management, and VIP support.',
    KR: '엔드유저 지원, 장비 Imaging, MDM 관리, Break/Fix, Escalation Management 및 VIP 지원 서비스를 제공합니다.'
  },

  'offerings.service3.title': { EN: 'Project Management', KR: '프로젝트 관리' },
  'offerings.service3.desc': { 
    EN: 'Nationwide project coordination with clear communication, documentation, and stakeholder management.',
    KR: '전국 단위 프로젝트를 대상으로 일정 관리, 이해관계자 조정, 문서화 및 커뮤니케이션을 수행합니다.'
  },

  'offerings.service4.title': { EN: 'Infrastructure Deployment', KR: '인프라 구축' },
  'offerings.service4.desc': { 
    EN: 'Network deployments, hardware installations, migrations, rack & stack, and site turn-ups.',
    KR: '네트워크 구축, 하드웨어 설치, Migration, Rack & Stack, 사이트 구축 및 Turn-Up 업무를 지원합니다.'
  },

  'offerings.service5.title': { EN: 'IT Consulting', KR: 'IT 컨설팅' },
  'offerings.service5.desc': { 
    EN: 'Infrastructure planning, site management, technical assessments, and long-term IT strategy.',
    KR: '인프라 기획, 현장 운영 관리, 기술 진단 및 장기적인 IT 전략 수립을 지원합니다.'
  },

  'offerings.service6.title': { EN: 'ITAD & Decommissioning', KR: 'ITAD (장비 철거)' },
  'offerings.service6.desc': { 
    EN: 'Asset recovery, equipment retirement, certified e-waste disposal, and decommissioning services.',
    KR: '자산 회수, 장비 철거, 인증된 전자폐기물(E-Waste) 처리 및 자산 폐기 서비스를 제공합니다.'
  },

  // Datacenter section - Titles only
  'offerings.datacenter.title': { EN: 'Our Experience', KR: '주요 수행 경험' },
  'offerings.datacenter.hands.title': { EN: 'Infrastructure Deployment', KR: '인프라 구축 및 데이터센터 경험' },
  'offerings.datacenter.process.title': { EN: 'Operational Standards', KR: '운영 표준 및 컴플라이언스' },
  'offerings.datacenter.operational.title': { EN: 'Operational Standards', KR: '운영 표준 및 컴플라이언스' },
  'offerings.datacenter.decom.title': { EN: 'Decommissioning & ITAD', KR: 'ITAD 및 장비 철거 경험' },
  'offerings.datacenter.project.title': { EN: 'Nationwide Project Management', KR: '프로젝트 수행 및 운영 관리' },

  // ============ WHY CHOOSE JSNOC SECTION ============
  'why.title': { 
    EN: 'Why Choose JSNOC?', 
    KR: '왜 JSNOC인가?' 
  },
  'why.rapid.title': { 
    EN: 'Rapid Dispatch', 
    KR: '신속한 현장 대응' 
  },
  'why.rapid.desc': { 
    EN: 'On-site engineers are available within 24 hours in most regions.', 
    KR: '대부분의 지역에서 24시간 이내 현장 엔지니어 지원이 가능합니다.' 
  },
  'why.local.title': { 
    EN: 'Local Presence', 
    KR: '현지 전문성' 
  },
  'why.local.desc': { 
    EN: 'Direct communication with the team performing the work.', 
    KR: '실제 업무를 수행하는 엔지니어 및 프로젝트 담당자와 직접 소통할 수 있습니다.' 
  },
  'why.nationwide.title': { 
    EN: 'Nationwide Coverage', 
    KR: '전국 단위 지원' 
  },
  'why.nationwide.desc': { 
    EN: 'Consistent support throughout South Korea.', 
    KR: '대한민국 전역에서 일관된 품질의 기술 지원 서비스를 제공합니다.' 
  },
  'why.transparent.title': { 
    EN: 'Transparent Delivery', 
    KR: '투명한 프로젝트 수행' 
  },
  'why.transparent.desc': { 
    EN: 'Clear timelines, defined scopes, and transparent pricing.', 
    KR: '명확한 일정, 구체적인 업무 범위, 그리고 투명한 비용 산정을 약속합니다.' 
  },
  'why.global.title': { 
    EN: 'Global Standards', 
    KR: '글로벌 수준의 운영 기준' 
  },
  'why.global.desc': { 
    EN: 'Enterprise-grade processes, documentation, and compliance.', 
    KR: '엔터프라이즈급 프로세스, 문서화 및 컴플라이언스 기준을 준수합니다.' 
  },
  'why.quality.title': { 
    EN: 'Quality Without Compromise', 
    KR: '품질 중심의 서비스' 
  },
  'why.quality.desc': { 
    EN: 'Reliable execution with safety, accountability, and attention to detail.', 
    KR: '안전, 책임감, 그리고 높은 품질 기준을 바탕으로 신뢰할 수 있는 결과를 제공합니다.' 
  },

  // ============ CONTACT SECTION ============
  'contact.title': { EN: 'Contact Us', KR: '문의하기' },
  'contact.description': { 
    EN: 'Please use the form on the right for any inquiries you may have. We will respond to you in a timely manner.',
    KR: '질문이나 요청이 있으시면 언제든지 연락 주세요. 신속하게 답변드리겠습니다.'
  },
  'contact.company': { EN: 'Company', KR: '회사' },
  'contact.phone': { EN: 'Phone Number', KR: '연락처' },
  'contact.email': { EN: 'E-mail', KR: '이메일' },
  'contact.form.helper': { 
    EN: 'Providing a detailed explanation will enable us to help you better.',
    KR: '자세한 설명을 제공해 주시면 더 나은 도움을 드릴 수 있습니다.'
  },
  'contact.form.company': { EN: 'Company', KR: '회사' },
  'contact.form.name': { EN: 'Name', KR: '이름' },
  'contact.form.phone': { EN: 'Phone', KR: '연락처' },
  'contact.form.email': { EN: 'Email', KR: '이메일' },
  'contact.form.message': { EN: 'Message', KR: '문의' },
  'contact.form.terms': { 
    EN: 'I have read and understood the terms and privacy policy.',
    KR: '개인정보 보호정책을 읽고 이해했습니다.'
  },
  'contact.form.captcha': { EN: 'Enter code', KR: '코드 입력' },
  'contact.form.submit': { EN: 'SUBMIT', KR: '제출하기' },
  
  // ============ CONTACT FORM STATUS MESSAGES ============
  'contact.form.success': { 
    EN: 'Message sent successfully! We\'ll get back to you soon.', 
    KR: '문의해 주셔서 감사합니다. 담당자가 확인 후 신속하게 연락드리겠습니다.' 
  },
  'contact.form.error': { 
    EN: 'Failed to send message. Please try again.', 
    KR: '메시지 전송에 실패했습니다. 다시 시도해 주세요.' 
  },
  'contact.form.acceptTermsError': { 
    EN: 'Please accept the terms and conditions', 
    KR: '이용약관에 동의해 주세요' 
  },

  // ============ CTA SECTION ============
  'cta.title': { EN: 'Prefer a call?', KR: '전화가 더 편하신가요?' },
  'cta.description': { EN: 'Contact us and we will respond immediately.', KR: '연락 주시면 바로 응대해드리겠습니다.' },
  'cta.button': { EN: 'Call us now', KR: '전화 상담 받기' },

  // ============ FOOTER ============
  'footer.contact': { EN: 'Contact', KR: 'Contact' },
  'footer.company': { EN: 'JS Network Operations', KR: 'JS 네트워크 운영' },
  'footer.navigation': { EN: 'Site Navigation', KR: 'Site Navigation' },
  'footer.others': { EN: 'Others', KR: 'Others' },
  'footer.language': { EN: 'Language', KR: 'Language' },
  'footer.about': { EN: 'About Us', KR: '회사소개' },
  'footer.services': { EN: 'Services', KR: '서비스' },
  'footer.contactus': { EN: 'Contact Us', KR: '문의하기' },
  'footer.legal': { EN: 'Legal Notice', KR: 'Legal Notice' },
  'footer.privacy': { EN: 'Privacy Policy', KR: 'Privacy Policy' },
  'footer.terms': { EN: 'Terms of Use', KR: 'Terms of Use' },
  'footer.copyright': { EN: 'All rights reserved.', KR: 'All rights reserved.' },
  'footer.bottom.text': { 
    EN: 'JS Network Operations provides IT field engineering and technical support services across South Korea.',
    KR: 'JS Network Operations는 한국 전역에 IT 현장 엔지니어링 및 기술 지원 서비스를 제공합니다.'
  },


// ============ SUPPORTED INDUSTRIES SECTION ============
'industries.title': { 
  EN: 'Industries We Support', 
  KR: '지원 산업 분야' 
},
'industries.subtitle': { 
  EN: 'Comprehensive infrastructure solutions across diverse sectors', 
  KR: '다양한 산업 분야를 위한 종합 인프라 솔루션' 
},
'industries.datacenters': { 
  EN: 'Datacenters', 
  KR: '데이터센터' 
},
'industries.enterprise': { 
  EN: 'Enterprise Offices', 
  KR: '기업 및 오피스 환경' 
},
'industries.retail': { 
  EN: 'Retail', 
  KR: '리테일 및 유통' 
},
'industries.warehousing': { 
  EN: 'Warehousing & Logistics', 
  KR: '물류 및 창고 운영' 
},
'industries.manufacturing': { 
  EN: 'Manufacturing', 
  KR: '제조 산업' 
},
'industries.telecommunications': { 
  EN: 'Telecommunications', 
  KR: '통신 산업' 
},
'industries.msp': { 
  EN: 'MSP & IT Service Providers', 
  KR: 'MSP 및 IT 서비스 제공업체' 
},
};



// Array translations (for lists)
type ArrayTranslations = {
  [key: string]: {
    EN: string[];
    KR: string[];
  };
};

const arrayTranslations: ArrayTranslations = {
  'offerings.datacenter.hands.items': {
    EN: [
      '12+ years supporting colocation facilities, enterprise environments, and critical infrastructure projects throughout South Korea.',
      'Data center deployment, rack integration, labeling, and cable management',
      'Server, storage, and network hardware installation, upgrades, and replacement',
      'Network diagnostics, cable tracing, port provisioning, and connectivity testing',
      'Asset auditing, infrastructure documentation, and change validation',
      'Migration, decommissioning, and lifecycle management support'
    ],
    KR: [
      '12년 이상의 데이터센터 및 엔터프라이즈 환경 지원 경험',
      'Rack & Stack, 장비 설치, 라벨링 및 체계적인 케이블 관리',
      '서버, 스토리지 및 네트워크 장비 구축 및 교체',
      '하드웨어 장애 진단, 디스크 교체, PSU 교체 및 Break/Fix 지원',
      '네트워크 문제 분석, 케이블 추적, 포트 활성화 및 연결성 검증',
      '자산 실사, 인프라 문서화 및 운영 환경 검증'
    ]
  },

  'offerings.datacenter.process.items': {
    EN: [
      'EHS-aware procedures',
      'Change management compliance',
      'Asset documentation',
      'Photo reporting',
      'Site permit coordination',
      'Structured project communication'
    ],
    KR: [
      'Change Control 및 작업 승인 프로세스 준수',
      '작업 절차서(Method Statement), 체크리스트 및 사진 기반 작업 보고',
      'EHS(환경·보건·안전) 기준 및 PPE 요구사항 준수',
      '자산, 랙 및 케이블링 문서화',
      '현장별 작업 허가 및 안전 규정 관리',
      '표준화된 운영 절차를 통한 일관된 서비스 품질 제공'
    ]
  },

  'offerings.datacenter.decom.items': {
    EN: [
      'Datacenter decommissioning',
      'Asset inventory and recovery',
      'Equipment retirement',
      'Certified onsite or pickup e-waste disposal',
      'Infrastructure teardown',
      'Secure asset disposition'
    ],
    KR: [
      '데이터센터 및 IT 인프라 철거 프로젝트 수행',
      '자산 회수 및 장비 이관 지원',
      '인증된 전자폐기물(E-Waste) 처리 지원',
      '장비 폐기 및 자산 처분(ITAD) 관리',
      '자산 목록화 및 폐기 관련 문서 제공',
      'IT 자산 생애주기 종료(EOL) 프로젝트 지원'
    ]
  },

  'offerings.datacenter.project.items': {
    EN: [
      'Nationwide deployment and infrastructure rollout coordination',
      'Cross-functional stakeholder management across clients, vendors, and field teams',
      'International-to-local project communication and execution support',
      'Project scheduling, resource planning, and milestone tracking',
      'Site readiness assessments, permit coordination, and change management',
      'Progress reporting, documentation, and project closeout delivery'
    ],
    KR: [
      '전국 단위 인프라 구축 및 기술 프로젝트 운영 경험',
      '고객사, 협력업체 및 현장 엔지니어 간 이해관계자 조율',
      '국제 서비스 제공업체와 국내 현장 간 커뮤니케이션 지원',
      '프로젝트 일정 관리, 자원 배치 및 진행 상황 추적',
      '현장 준비도 검토, 작업 허가 및 리스크 관리',
      '프로젝트 보고, 문서화 및 종료 보고서 제공'
    ]
  },

  // Services array (if needed for mapping)
  'offerings.servicesList': {
    EN: [
      'Rapid Dispatch',
      'Remote Hands',
      'L1–L3 Desktop Support',
      'Local Presence',
      'Project Management',
      'IT Consulting'
    ],
    KR: [
      '신속 대응',
      '원격 지원',
      'L1–L3 데스크탑 지원',
      '현지 지원',
      '프로젝트 관리',
      'IT 컨설팅'
    ]
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to detect if user is in a UTC+9 timezone region
const isUTCPlus9Timezone = (): boolean => {
  try {
    // Get user's timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // All timezones that use UTC+9 (Korea Standard Time)
    const utcPlus9Timezones = [
      // Korea
      'Asia/Seoul',
      'Asia/Pyongyang',
      
      // Japan
      'Asia/Tokyo',
      
      // Indonesia (Eastern)
      'Asia/Jayapura',
      
      // East Timor
      'Asia/Dili',
      
      // Palau
      'Asia/Palau',
      
      // Russia (Yakutsk Time - parts of eastern Russia)
      'Asia/Yakutsk',
      'Asia/Chita',
      'Asia/Khandyga',
      
      // Standard UTC+9 (no DST)
      'Etc/GMT-9',
      'UTC+9'
    ];
    
    // Check if current timezone is in UTC+9 list
    if (utcPlus9Timezones.includes(timezone)) {
      return true;
    }
    
    // Fallback: Get the actual UTC offset in minutes
    const offset = new Date().getTimezoneOffset();
    // UTC+9 is -540 minutes (negative because getTimezoneOffset returns minutes ahead of UTC)
    // For UTC+9, offset should be -540
    const isUTCPlus9 = offset === -540;
    
    return isUTCPlus9;
  } catch (error) {
    console.error('Error detecting timezone:', error);
  }
  
  return false;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with English on server and initial client render to avoid hydration mismatch
  const [language, setLanguage] = useState<Language>('EN');
  const [isMounted, setIsMounted] = useState(false);

  // After mount, detect timezone and update language if needed
  useEffect(() => {
    setIsMounted(true);
    const isUTC9 = isUTCPlus9Timezone();
    console.log('Timezone detection - UTC+9:', isUTC9); // For debugging
    if (isUTC9) {
      setLanguage('KR');
    }
  }, []);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const tArray = (key: string): string[] => {
    return arrayTranslations[key]?.[language] || [];
  };

  // During SSR and initial hydration, render with English
  // After hydration, re-render with detected language
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}