import PageHero from "@/components/ui/PageHero";
import KakaoMap from "@/components/ui/KakaoMap";
import { COMPANY } from "@/constants/company";

export const metadata = {
  title: `오시는 길 | ${COMPANY.name}`,
};

export default function LocationPage() {
  return (
    <>
      <PageHero title="회사소개" description="오시는 길" image="/images/company_top.png" imagePosition="center" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6">
              찾아오시는 방법
            </h2>
            <div className="space-y-4 text-[var(--color-gray-600)]">
              <div>
                <h3 className="font-semibold text-[var(--color-gray-800)] mb-1">
                  주소
                </h3>
                <p>{COMPANY.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-gray-800)] mb-1">
                  전화
                </h3>
                <p>{COMPANY.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-gray-800)] mb-1">
                  이메일
                </h3>
                <p>{COMPANY.email}</p>
              </div>
            </div>
          </div>
          <KakaoMap
            address={COMPANY.address}
            className="rounded-xl h-80"
          />
        </div>
      </section>
    </>
  );
}
