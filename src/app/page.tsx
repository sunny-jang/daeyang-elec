import Image from "next/image";
import Link from "next/link";
import { COMPANY, PRODUCTS } from "@/constants/company";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
        <Image
          src="/images/main_top.png"
          alt="대양전자 MCU 메인 이미지"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/85 to-[var(--color-primary)]/50" />
        <div className="relative max-w-6xl mx-auto px-4 py-28 md:py-40">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            MCU·임베디드 소프트웨어 개발 전문,
            <br />
            <span className="text-[var(--color-accent)]">{COMPANY.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
            1994년부터 30년 이상 축적된 MCU·임베디드 소프트웨어 개발 역량으로
            <br />
            수위센서, 무선화재경보기, 보청기, 무전기, 카 오디오까지.
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
            >
              개발 제품 보기
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--color-primary-dark)] transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-[var(--color-gray-50)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-3">
              주요 개발 제품
            </h2>
            <p className="text-[var(--color-gray-600)]">
              대양전자의 주요 개발 제품 라인업을 소개합니다
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-[var(--color-primary-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[var(--color-gray-600)] text-sm">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-6">
                회사 소개
              </h2>
              <p className="text-[var(--color-gray-600)] leading-relaxed mb-6">
                대양전자는 1994년 설립 이래, MCU 및 임베디드 시스템 분야의 전문
                기업으로서 30년 이상의 기술력을 축적해 왔습니다. 지속적인 기술개발과
                투자, 고객만족경영, 정직한 마케팅을 바탕으로 고객 여러분의 기대에
                보답하고 있습니다.
              </p>
              <Link
                href="/company"
                className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:underline"
              >
                자세히 보기 &rarr;
              </Link>
            </div>
            <div className="bg-[var(--color-gray-100)] rounded-2xl h-64 flex items-center justify-center text-[var(--color-gray-600)]">
              회사 이미지
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">견적 문의하기</h2>
          <p className="text-gray-200 mb-8 max-w-xl mx-auto">
            제품에 대한 견적 요청이나 문의사항이 있으시면 언제든지 연락해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center justify-center gap-2"
            >
              📞 {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center justify-center gap-2"
            >
              ✉️ {COMPANY.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
