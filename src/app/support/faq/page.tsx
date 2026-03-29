"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";

const FAQ_ITEMS = [
  {
    q: "제품 구매는 어떻게 하나요?",
    a: "전화 또는 이메일로 문의해 주시면 상세히 안내해 드리겠습니다.",
  },
  {
    q: "A/S는 어떻게 받나요?",
    a: "구매하신 제품의 A/S는 전화 문의를 통해 접수하실 수 있습니다.",
  },
  {
    q: "견적 요청은 어떻게 하나요?",
    a: "문의하기 페이지 또는 이메일을 통해 견적을 요청하실 수 있습니다.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <PageHero title="기술지원" description="자주 묻는 질문" image="/images/support_top.png" />
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-[var(--color-gray-200)] rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-[var(--color-gray-50)]"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>Q. {item.q}</span>
                <span className="text-xl text-[var(--color-gray-600)]">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-[var(--color-gray-600)]">
                  A. {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
