import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { COMPANY, PRODUCTS } from "@/constants/company";

export const metadata = {
  title: `주요개발제품 | ${COMPANY.name}`,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero title="주요개발제품" description="대양전자의 주요 개발 제품 라인업" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="border border-[var(--color-gray-200)] rounded-xl p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="text-5xl mb-6">{product.icon}</div>
              <h3 className="text-xl font-bold text-[var(--color-primary-dark)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {product.name}
              </h3>
              <p className="text-[var(--color-gray-600)] text-sm leading-relaxed">
                {product.description}
              </p>
              <div className="mt-4 text-[var(--color-primary)] text-sm font-semibold">
                자세히 보기 &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
