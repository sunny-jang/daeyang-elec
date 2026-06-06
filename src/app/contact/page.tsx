"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { COMPANY } from "@/constants/company";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    device: "",
    application: "",
    usage: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", device: "", application: "", usage: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero title="상담·견적 문의" description="개발 상담 및 견적 요청" image="/images/contact_top.png" imagePosition="center 75%" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6">
              연락처 정보
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[var(--color-gray-800)] mb-1">
                  사업자등록번호
                </h3>
                <p className="text-[var(--color-gray-600)] text-lg">
                  {COMPANY.businessNumber}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-gray-800)] mb-1">
                  전화
                </h3>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-[var(--color-primary)] text-lg"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-gray-800)] mb-1">
                  이메일
                </h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[var(--color-primary)] text-lg"
                >
                  {COMPANY.email}
                </a>
              </div>
              {COMPANY.address && (
                <div>
                  <h3 className="font-semibold text-[var(--color-gray-800)] mb-1">
                    주소
                  </h3>
                  <p className="text-[var(--color-gray-600)]">{COMPANY.address}</p>
                </div>
              )}
            </div>
          </div>

          {/* Quote form */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
              상담·견적 문의
            </h2>
            <p className="text-[var(--color-gray-600)] text-sm mb-6">
              개발 가능 여부 확인이나 간단한 상담도 편하게 문의해 주세요.
            </p>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold text-lg mb-2">
                  견적 문의가 접수되었습니다.
                </p>
                <p className="text-green-600 text-sm">
                  빠른 시일 내에 답변 드리겠습니다.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[var(--color-primary)] font-medium hover:underline"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-800)] mb-1">
                    이름 / Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[var(--color-gray-200)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="이름을 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-800)] mb-1">
                    연락처 / Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-[var(--color-gray-200)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="연락처를 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-800)] mb-1">
                    이메일 / Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[var(--color-gray-200)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="이메일을 입력해 주세요"
                  />
                </div>
                <hr className="border-[var(--color-gray-200)]" />
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-800)] mb-1">
                    제품명 / Device
                  </label>
                  <input
                    type="text"
                    required
                    value={form.device}
                    onChange={(e) => setForm({ ...form, device: e.target.value })}
                    className="w-full border border-[var(--color-gray-200)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="제품명을 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-800)] mb-1">
                    적용 / Application
                  </label>
                  <input
                    type="text"
                    value={form.application}
                    onChange={(e) => setForm({ ...form, application: e.target.value })}
                    className="w-full border border-[var(--color-gray-200)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="적용 분야를 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-800)] mb-1">
                    월/년간 사용량 / M/Year Usage
                  </label>
                  <input
                    type="text"
                    value={form.usage}
                    onChange={(e) => setForm({ ...form, usage: e.target.value })}
                    className="w-full border border-[var(--color-gray-200)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="월/년간 사용량을 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-800)] mb-1">
                    기타 문의 사항
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[var(--color-gray-200)] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
                    placeholder="기타 문의 사항을 입력해 주세요"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    발송에 실패했습니다. 잠시 후 다시 시도해 주세요.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "발송 중..." : "제출하기"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
