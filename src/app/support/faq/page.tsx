"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";

const FAQ_ITEMS = [
  {
    q: "개발진행은 어떻게 하나요?",
    a: "견적문의 페이지에 연락처와 개발 개요 및 의뢰 내용을 글 또는 첨부파일로 접수해 주시면, 내용을 검토하여 가능 여부와 함께 저희의 제안서·견적·개발계획서를 보내 드립니다. 협의를 통해 개발 범위를 확정한 후 계약서를 작성하고 개발에 착수하며, 이후 고객과 함께 실험 및 검증 과정을 거쳐 승인 후 개발을 완료합니다. 고객과의 책임과 신뢰를 바탕으로 최고의 품질과 경쟁력 있는 가격으로 만족을 드리겠습니다.",
  },
  {
    q: "A/S는 어떻게 받나요?",
    a: "개발을 완료하여 승인된 후 1년간 문제점 발견 시 수정하고 관리해 드립니다.",
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
