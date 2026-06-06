import PageHero from "@/components/ui/PageHero";
import { COMPANY } from "@/constants/company";

export const metadata = {
  title: `기술지원 | ${COMPANY.name}`,
};

export default function SupportPage() {
  return (
    <>
      <PageHero title="기술지원" description="자료실" image="/images/support_top.png" imagePosition="center" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center text-[var(--color-gray-600)] py-20">
          <p>자료가 등록되면 이곳에 표시됩니다.</p>
          <p className="mt-2 text-sm">
            (DB 환산표, 각종 센서 종류 등 추가 예정)
          </p>
        </div>
      </section>
    </>
  );
}
