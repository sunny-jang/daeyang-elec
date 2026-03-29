import PageHero from "@/components/ui/PageHero";
import { COMPANY } from "@/constants/company";

export const metadata = {
  title: `회사소개 | ${COMPANY.name}`,
};

export default function CompanyPage() {
  return (
    <>
      <PageHero title="회사소개" description="인사말" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6">
            고객 여러분, 안녕하십니까.
          </h2>
          <div className="text-[var(--color-gray-600)] leading-relaxed space-y-4">
            <p>
              대양전자 홈페이지를 방문해 주셔서 감사합니다.
            </p>
            <p>
              대양전자는 1994년 설립 이래, MCU 및 임베디드 시스템 분야의 전문 기업으로서
              수위센서, 무선화재경보기, 보청기, 무전기, 카 오디오 등 다양한 전자부품
              분야에서 고객 여러분과 함께 성장해 왔습니다.
            </p>
            <p>
              30년 이상 축적된 MCU·임베디드 개발 역량을 기반으로, 지속적인 기술개발과
              투자, 고객만족경영, 그리고 정직한 마케팅을 바탕으로 업체로부터 신뢰받는
              임베디드 전문기업으로 도약하기 위해 끊임없이 노력하고 있습니다.
            </p>
            <p>
              앞으로도 변함없는 신뢰와 최고의 품질로 고객 여러분의 기대에 보답하겠습니다.
              감사합니다.
            </p>
          </div>
          <div className="mt-8 text-right text-[var(--color-primary-dark)] font-semibold">
            {COMPANY.name} 대표 {COMPANY.ceo}
          </div>
        </div>
      </section>
    </>
  );
}
