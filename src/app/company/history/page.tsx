import PageHero from "@/components/ui/PageHero";
import { COMPANY } from "@/constants/company";

export const metadata = {
  title: `연혁 | ${COMPANY.name}`,
};

const HISTORY = [
  { year: "2024", events: ["연혁 내용을 입력해 주세요"] },
  { year: "2020", events: ["연혁 내용을 입력해 주세요"] },
  { year: "2015", events: ["연혁 내용을 입력해 주세요"] },
  { year: "2010", events: ["연혁 내용을 입력해 주세요"] },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero title="회사소개" description="연혁" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {HISTORY.map((item) => (
            <div key={item.year} className="flex gap-8 mb-10">
              <div className="text-2xl font-bold text-[var(--color-primary)] min-w-[80px]">
                {item.year}
              </div>
              <div className="border-l-2 border-[var(--color-primary)] pl-6 pb-2">
                {item.events.map((event, i) => (
                  <p key={i} className="text-[var(--color-gray-600)] mb-2">
                    {event}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
