export const COMPANY = {
  name: "대양전자",
  nameEn: "DAEYANG Electronics",
  phone: "010-3717-2207",
  email: "dye2000g@gmail.com",
  address: "인천광역시 동구 방충로 37번길 30(인천산업유통센터) 8동 314호",
  ceo: "장종훈",
  established: "1994",
  businessNumber: "118-04-68314",
} as const;

export const PRODUCTS = [
  {
    id: "water-level-sensor",
    name: "수위센서",
    description: "정밀한 수위 측정을 위한 고성능 센서 솔루션",
    icon: "💧",
    href: "/products/water-level-sensor",
  },
  {
    id: "fire-alarm",
    name: "무선화재경보기",
    description: "무선 통신 기반의 신뢰성 높은 화재 경보 시스템",
    icon: "🔥",
    href: "/products/fire-alarm",
  },
  {
    id: "hearing-aid",
    name: "보청기",
    description: "선명한 청취를 위한 고품질 보청기",
    icon: "🦻",
    href: "/products/hearing-aid",
  },
  {
    id: "radio",
    name: "무전기",
    description: "안정적인 무선 통신을 위한 무전기",
    icon: "📻",
    href: "/products/radio",
  },
  {
    id: "car-audio",
    name: "카 오디오",
    description: "차량용 고품질 오디오 시스템",
    icon: "🔊",
    href: "/products/car-audio",
  },
] as const;

export const NAV_ITEMS = [
  {
    label: "회사소개",
    href: "/company",
    children: [
      { label: "인사말", href: "/company" },
      { label: "연혁", href: "/company/history" },
      { label: "오시는 길", href: "/company/location" },
    ],
  },
  {
    label: "주요개발제품",
    href: "/products",
    children: PRODUCTS.map((p) => ({ label: p.name, href: p.href })),
  },
  {
    label: "기술지원",
    href: "/support",
    children: [
      { label: "자료실", href: "/support" },
      { label: "FAQ", href: "/support/faq" },
    ],
  },
  {
    label: "견적문의",
    href: "/contact",
  },
] as const;
